# 🌟 Modern Portfolio Website

![Next.js Portfolio for System Admins](public/share.webp)

A premium, fully responsive portfolio website built with **Next.js 16**, featuring a working contact form, SEO optimisation, and modern design principles.

---

## 🚀 Features

### 🎨 Design & UI

| Feature | Details |
|---|---|
| Theme | Modern Red & Black |
| Responsive | Mobile-first, all screen sizes |
| Animations | Smooth Framer Motion transitions |
| Typography | Premium Geist typeface |
| Layouts | Interactive card components |

### 📧 Contact System

| Feature | Details |
|---|---|
| Contact Form | Fully functional with validation |
| Bot Protection | Cloudflare Turnstile integration |
| Email Backend | Nodemailer over SMTP |
| Email Templates | Beautiful HTML styling |
| UX | Loading states & error handling |

### 🔍 SEO Optimised

- OpenGraph & Twitter Card meta tags
- JSON-LD structured data
- Dynamic sitemap at `/sitemap.xml`
- `robots.txt` included
- Optimised bundle — ~99.7 kB first load JS

### 🛡️ Security & Performance

- WebP/AVIF image optimisation via Next.js Image
- Automatic code splitting
- Production build optimisations enabled

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Nodemailer |
| Deployment | Podman |

---

## 📦 Deployment

### 1️⃣ Install Podman & Podman Compose

```bash
sudo dnf install podman podman-compose
```

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi.git
cd NextJS-Portfolio-Salman-Shafi
```

### 3️⃣ Configure Environment Variables

Create or edit `.env.local` before building. All variables must be set at build time.

```env
# SMTP Configuration
SMTP_HOST=host.example.tld
SMTP_USERNAME=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_PORT=587
SMTP_SECURE=false

# Email Configuration
FROM_EMAIL_NAME=Your Name
FROM_EMAIL=no-reply@example.tld
TO_EMAIL=your-email@example.tld

# Application Configuration
NEXT_PUBLIC_SITE_URL=https://example.tld

# Cloudflare Turnstile Configuration
TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
```

### 4️⃣ Build the Container Image

```bash
podman build -t nextjs-portfolio .
```

### 5️⃣ Run with Podman Compose

```bash
podman-compose up -d
```

### 6️⃣ Access the Application

```
http://your-server-ip:3001
```

---

## 📂 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   └── turnstile/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   ├── types/
│   │   └── turnstile.d.ts
│   └── components/
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Skills.tsx
│       │   ├── Experience.tsx
│       │   └── Contact.tsx
│       ├── Header.tsx
│       └── Footer.tsx
└── public/
    ├── photo.webp
    ├── share.webp
    └── ...
```

---

## 📊 Performance

| Metric | Result |
|---|---|
| First Load JS | ~99.7 kB |
| Lighthouse Score | 100 |
| Responsive | ✅ All viewports |
| Core Web Vitals | ✅ Optimised |

---

## 📞 Contact & Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

- 📧 **Email** — [hello@salmanshafi.net](mailto:hello@salmanshafi.net)
- 🐛 **Issues** — [GitHub Issues](https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi/issues)
- 💬 **Discussions** — [GitHub Discussions](https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi/discussions)

---

## 👤 Original Project

This repository is a fork of the original work by:

- **Author** — Mehedi Hasan
- **Email** — [hello@mehedims.com](mailto:hello@mehedims.com)
- **GitHub** — [asma019](https://github.com/asma019)
- **Repository** — [Next.js-Portfolio-for-System-Admins](https://github.com/asma019/Next.js-Portfolio-for-System-Admins)

---

## 📄 Licence

Released under the [MIT Licence](LICENSE).

---

**Made with ❤️ using Next.js**
