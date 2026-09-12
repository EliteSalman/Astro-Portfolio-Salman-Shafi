import { connect } from 'cloudflare:sockets';

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function validateForm(data) {
  const { name, email, subject, message } = data;
  if (!name || !email || !subject || !message) return 'All fields are required';
  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    if (typeof data[field] !== 'string' || data[field].length > limit) {
      return `${field[0].toUpperCase()}${field.slice(1)} cannot exceed ${limit} characters`;
    }
    if (/\r|\n/.test(data[field])) return 'Invalid form data';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format';
  return null;
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character]);
}

function smtpLines({ name, email, subject, message, fromName }, env) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');
  const plain = [
    'New Contact Form Submission',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    message,
  ].join('\r\n');
  const html = `<!doctype html><html><body><h1>New Contact Form Submission</h1><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><p><strong>Message:</strong><br>${safeMessage}</p></body></html>`;
  const boundary = `=_Contact_${crypto.randomUUID()}`;
  const from = `${fromName} <${env.FROM_EMAIL}>`;
  return [
    `From: ${from}`,
    `To: ${env.TO_EMAIL}`,
    `Reply-To: ${email}`,
    `Subject: Portfolio Contact: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    plain,
    `--${boundary}`,
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    html,
    `--${boundary}--`,
    '',
  ].join('\r\n');
}

async function readSmtpResponse(reader) {
  const decoder = new TextDecoder();
  let buffer = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) throw new Error('SMTP connection closed unexpectedly');
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\r\n');
    buffer = lines.pop() || '';
    for (const line of lines) {
      if (/^\d{3} /.test(line)) {
        const code = Number(line.slice(0, 3));
        if (code >= 400) throw new Error(`SMTP error ${code}`);
        return code;
      }
    }
  }
}

async function smtpCommand(writer, reader, command, expected) {
  await writer.write(new TextEncoder().encode(`${command}\r\n`));
  const code = await readSmtpResponse(reader);
  if (!expected.includes(code)) throw new Error(`Unexpected SMTP response ${code}`);
}

async function sendSmtp(env, data) {
  const port = Number(env.SMTP_PORT || 587);
  const implicitTls = env.SMTP_SECURE === 'true' || port === 465;
  let activeSocket = connect(
    { hostname: env.SMTP_HOST, port },
    { secureTransport: implicitTls ? 'on' : 'starttls' },
  );
  await activeSocket.opened;
  let reader = activeSocket.readable.getReader();
  let writer = activeSocket.writable.getWriter();
  await readSmtpResponse(reader);
  await smtpCommand(writer, reader, `EHLO ${new URL(env.SITE_URL || 'https://localhost').hostname}`, [250]);
  if (!implicitTls) {
    await smtpCommand(writer, reader, 'STARTTLS', [220]);
    reader.releaseLock();
    writer.releaseLock();
    const secureSocket = activeSocket.startTls();
    activeSocket = secureSocket;
    await secureSocket.opened;
    reader = secureSocket.readable.getReader();
    writer = secureSocket.writable.getWriter();
    await smtpCommand(writer, reader, `EHLO ${new URL(env.SITE_URL || 'https://localhost').hostname}`, [250]);
  }
  await smtpCommand(writer, reader, 'AUTH LOGIN', [334]);
  await smtpCommand(writer, reader, btoa(env.SMTP_USERNAME), [334]);
  await smtpCommand(writer, reader, btoa(env.SMTP_PASSWORD), [235]);
  await smtpCommand(writer, reader, `MAIL FROM:<${env.FROM_EMAIL}>`, [250]);
  await smtpCommand(writer, reader, `RCPT TO:<${env.TO_EMAIL}>`, [250, 251]);
  await writer.write(new TextEncoder().encode('DATA\r\n'));
  await readSmtpResponse(reader);
  const message = smtpLines(data, env);
  const stuffed = message.split('\r\n').map((line) => line.startsWith('.') ? `.${line}` : line).join('\r\n');
  await writer.write(new TextEncoder().encode(`${stuffed}\r\n.\r\n`));
  await readSmtpResponse(reader);
  await smtpCommand(writer, reader, 'QUIT', [221, 250]);
  writer.releaseLock();
  reader.releaseLock();
  await activeSocket.close();
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const turnstileToken = body.turnstileToken;
    if (!turnstileToken) return json({ error: 'Security verification failed' }, 400);

    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: turnstileToken }),
    });
    const turnstileResult = await turnstileResponse.json();
    if (!turnstileResult.success) return json({ error: 'Security verification failed' }, 400);

    const form = { name: body.name, email: body.email, subject: body.subject, message: body.message };
    const validationError = validateForm(form);
    if (validationError) return json({ error: validationError }, 400);
    for (const required of ['SMTP_HOST', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'FROM_EMAIL', 'TO_EMAIL']) {
      if (!env[required]) return json({ error: 'Email service is not configured' }, 500);
    }

    await sendSmtp(env, { ...form, fromName: env.FROM_EMAIL_NAME || 'Portfolio Contact' });
    return json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return json({ error: 'Failed to send email' }, 500);
  }
}
