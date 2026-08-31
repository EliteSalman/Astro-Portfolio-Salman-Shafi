# 🖥️ Sysadmin Terminal Portfolio

![Astro Portfolio for System Admins](https://private-us-east-1.manuscdn.com/sessionFile/7W7mQTLgp2BtZhtELNbG3N/sandbox/crlV4c0KXNfC5KkAqEhg6d-images_1788160138179_na1fn_L2hvbWUvdWJ1bnR1L2FzdHJvLW1pZ3JhdGlvbi13b3JrL2FzdHJvLXBvcnRmb2xpby9wdWJsaWMvc2hhcmU.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN1c3bVFUTGdwMkJ0Wmh0RUxOYkczTi9zYW5kYm94L2NybFY0YzBLWE5mQzVLa0FxRWhnNmQtaW1hZ2VzXzE3ODgxNjAxMzgxNzlfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyRnpkSEp2TFcxcFozSmhkR2x2YmkxM2IzSnJMMkZ6ZEhKdkxYQnZjblJtYjJ4cGJ5OXdkV0pzYVdNdmMyaGhjbVUud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5MDgxMjgwMH19fV19&Key-Pair-Id=K2QY5QTL8JSY6C&Signature=MEUCIQC6UwPs1dLAUVhLLQ0NvXcv~SYZgOK-IT5MBD8o~ywJtQIgYm4FPWtidoo37HmkOQlzR0J0H7OqYjvILEAChPX7Zhg_)

A strict, terminal-driven portfolio website engineered for System Administrators, DevOps practitioners, and backend engineers. Built with **Astro 5**, it features a pure AMOLED `#000` interface, mechanical Framer Motion animations, and a fully functional CLI-styled contact execution sequence.

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
| Framework | Astro 5 (server output) |
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
```

### 2️⃣ Clone the Repository

```bash
git clone git@github.com:EliteSalman/NextJS-Portfolio-Salman-Shafi.git
cd NextJS-Portfolio-Salman-Shafi
```

### 3️⃣ Environmental Variables

Create `.env.local` in the root directory prior to building the container. All variables must be set at build time.

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
NEXT_PUBLIC_SITE_URL=[https://example.tld](https://example.tld)

# Cloudflare Turnstile Configuration
TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
```

### 4️⃣ Build the Container Image

```bash
podman build -t astro-portfolio .
```

### 5️⃣ Execute Podman Compose

```bash
podman-compose up -d
```

### 6️⃣ Verify Deployment

The application will bind to the port defined in your configuration (usually `3000`). It is highly recommended to place this behind a reverse proxy (e.g., Caddy or NGINX) for production SSL termination rather than exposing the Node server directly.

```bash
curl -I [http://127.0.0.1:3000](http://127.0.0.1:3000)
```

---

## 📂 Directory Structure

```text
.
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   └── turnstile/
│   │   ├── layouts/Layout.astro
│   │   ├── styles/global.css
│   │   ├── index.astro
│   │   ├── sitemap.xml.ts
│   │   └── ...
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

## 📞 Contact & Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

* 📧 **Email** — [hello@salmanshafi.net](mailto:hello@salmanshafi.net)
* 🐛 **Issues** — [GitHub Issues](https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi/issues)
* 💬 **Discussions** — [GitHub Discussions](https://github.com/EliteSalman/NextJS-Portfolio-Salman-Shafi/discussions)

---

## 👤 Original Project

This repository is a heavily modified fork of the original work by:

* **Author** — Mehedi Hasan
* **Email** — [hello@mehedims.com](mailto:hello@mehedims.com)
* **GitHub** — [asma019](https://github.com/asma019)
* **Repository** — [Next.js-Portfolio-for-System-Admins](https://github.com/asma019/Next.js-Portfolio-for-System-Admins)

---

## 📄 Licence

Released under the [MIT Licence](LICENSE).
