Here is the updated README.md rewritten to reflect the new strict terminal aesthetic, updated tech stack (removing Lucide icons, adding JetBrains Mono), and aligning with the overarching infrastructure theme.
# 🖥️ Sysadmin Terminal Portfolio

![Next.js Portfolio for System Admins](public/share.webp)

A strict, terminal-driven portfolio website engineered for System Administrators, DevOps practitioners, and backend engineers. Built with **Next.js 16**, it features a pure AMOLED `#000` interface, mechanical Framer Motion animations, and a fully functional CLI-styled contact execution sequence.

---

## 🚀 Core Infrastructure

### 🎨 Architecture & UI

| Layer | Specification |
|---|---|
| Environment | Pure AMOLED Black (`#000`) with syntax-highlighted accents |
| Typography | Strict monospace (`JetBrains Mono`) |
| Animations | Mechanical step-rendering & CSS glitch effects |
| Layout | `systemd` unit mimics, raw CLI outputs, and config blocks |
| Responsive | Fluid mobile-first adaptation with safe-area spacing |

### 📧 Contact Execution Sequence

| Component | Detail |
|---|---|
| Interface | Raw CLI parameter input form (`--name=`, `--email=`) |
| Security | Cloudflare Turnstile CAPTCHA integration (Runtime dynamic) |
| Transport | Nodemailer over secure SMTP |
| UX | Live terminal status output (`[ EXECUTING... ]`, `[ ERR ]`) |

### 🔍 SEO & Optimisation

* OpenGraph & Twitter Card meta tags
* JSON-LD structured data
* Dynamic sitemap generation at `/sitemap.xml`
* Included `robots.txt`
* Hyper-optimised payload (~99.7 kB first load JS)

---

## 🛠️ Tech Stack

| Domain | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion (Variants) |
| Email | Nodemailer |
| Runtime | Podman / Docker |

---

## 📦 Deployment Configuration

### 1️⃣ Install Podman Infrastructure

```bash
sudo dnf install podman podman-compose

2️⃣ Clone the Repository
git clone git@github.com:EliteSalman/NextJS-Portfolio-Salman-Shafi.git
cd NextJS-Portfolio-Salman-Shafi

3️⃣ Environmental Variables
Create .env.local in the root directory prior to building the container. All variables must be set at build time.
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
NEXT_PUBLIC_SITE_URL=[https://example.tld](https://example.tld)

# Cloudflare Turnstile Configuration
TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key

4️⃣ Build the Container Image
podman build -t nextjs-portfolio .

5️⃣ Execute Podman Compose
podman-compose up -d

6️⃣ Verify Deployment
The application will bind to the port defined in your configuration (usually 3000). It is highly recommended to place this behind a reverse proxy (e.g., Caddy or NGINX) for production SSL termination rather than exposing the Node server directly.
curl -I [http://127.0.0.1:3000](http://127.0.0.1:3000)

📂 Directory Structure
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

📞 Contact & Support
If you found this project helpful, consider giving it a ⭐ on GitHub.
 * 📧 Email — hello@salmanshafi.net
 * 🐛 Issues — GitHub Issues
 * 💬 Discussions — GitHub Discussions
👤 Original Project
This repository is a heavily modified fork of the original work by:
 * Author — Mehedi Hasan
 * Email — hello@mehedims.com
 * GitHub — asma019
 * Repository — Next.js-Portfolio-for-System-Admins
📄 Licence
Released under the MIT Licence.

