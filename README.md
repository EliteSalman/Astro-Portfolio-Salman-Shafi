# 🌟 Modern Portfolio Website

![Next.js Portfolio for System Admins](public/share.webp)

A premium, fully responsive portfolio website built with Next.js 16, featuring a working contact form, SEO optimization, and modern design principles.

---

## 🚀 Features

### 🎨 Design & UI
- Modern Red & Black Theme
- Fully Responsive (Mobile-first)
- Smooth Framer Motion animations
- Premium Geist typography
- Interactive card layouts

### 📧 Contact System
- Fully functional contact form
- Cloudflare Turnstile bot protection
- SMTP email support (Nodemailer)
- Beautiful HTML email templates
- Loading states & error handling

### 🔍 SEO Optimized
- OpenGraph & Twitter meta tags
- JSON-LD structured data
- Dynamic sitemap (`/sitemap.xml`)
- Robots.txt
- Optimized bundle size (~99.7kB first load)

### 🛡️ Security & Performance
- WebP/AVIF image optimization
- Automatic code splitting
- Production optimizations enabled

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Deployment**: Podman

---

# 📦 Deployment (Podman)

## 1️⃣ Install Podman & Podman Compose

```bash
sudo dnf install podman podman-compose
```

---

## 2️⃣ Clone Repository

```bash
git clone https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi.git
cd NextJS-Portfolio-Salman-Shafi
```

---

## 3️⃣ Configure Environment Variables

Before building, create or edit `.env.local` with your actual values:

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

---

## 4️⃣ Build Container Image

```bash
podman build -t nextjs-portfolio .
```

---

## 5️⃣ Run with Podman Compose

```bash
podman-compose up -d
```

---

## 6️⃣ Access Application

Open in browser:

```
http://your-server-ip:3001
```

---

# 🔐 Environment Variables

All required environment variables must be defined inside `.env.local` before building the container.

---

# 📂 Project Structure

```
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
├── public/
│   ├── photo.webp
│   ├── share.webp
│   └── ...
```

---

# 📊 Performance

- First Load JS: ~99.7kB
- Lighthouse Score: 100
- Fully responsive
- Optimized for Core Web Vitals

---

# 📞 Contact & Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

- 📧 Email: hello@salmanshafi.net  
- 🐛 Issues: https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi/issues  
- 💬 Discussions: https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi/discussions  

---

# 👤 Original Project

- Author: Mehedi Hasan  
- Email: hello@mehedims.com  
- GitHub: https://github.com/asma019  
- Repository: https://github.com/asma019/Next.js-Portfolio-for-System-Admins  

---

# 📄 License

MIT License

---

**Made with ❤️ using Next.js**
