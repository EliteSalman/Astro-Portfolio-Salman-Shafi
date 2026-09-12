# 🖥️ Sysadmin Terminal Portfolio

![Astro Portfolio for System Admins](public/share.webp)

A strict, terminal-driven portfolio website engineered for System Administrators, DevOps practitioners, and backend engineers. Built with **Astro 7**, it features a pure AMOLED `#000` interface, mechanical Framer Motion animations, and a fully functional CLI-styled contact execution sequence.

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

| Domain | Technology | Version |
|---|---|---|
| Framework | Astro | 7 |
| UI Library | React | 19 |
| Language | TypeScript | 6 |
| Styling | Tailwind CSS | 4 |
| Motion | Framer Motion | 13 |
| Icons | Lucide React | 1 |
| Email | Nodemailer | 10 |
| Package Manager | pnpm | 12 |
| Runtime | Infrastructure Agnostic | — |

---

## 📦 Deployment Configuration

### Environmental Variables

Create `.env.local` in the root directory prior to building. All variables must be set at build time.

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
SITE_URL=https://example.tld

```

---

### 🦭 Podman / Docker

#### 1️⃣ Install Podman

```bash
sudo dnf install podman podman-compose
```

#### 2️⃣ Clone the Repository

```bash
git clone git@github.com:EliteSalman/Astro-Portfolio-Salman-Shafi.git
cd Astro-Portfolio-Salman-Shafi
```

#### 3️⃣ Install Dependencies

```bash
pnpm install
```

#### 4️⃣ Set Environmental Variables

Create `.env.local` as shown above.

#### 5️⃣ Build the Container Image

```bash
podman build -t astro-portfolio .
```

#### 6️⃣ Run with Compose

```bash
podman-compose up -d
```

#### 7️⃣ Verify Deployment

```bash
curl -I http://127.0.0.1:4321
```

The application binds to port `4321`. It is highly recommended to place this behind a reverse proxy (e.g., Caddy or NGINX) for production SSL termination rather than exposing the Node server directly.

---

### ☁️ Cloudflare Pages

#### 1️⃣ Clone the Repository

```bash
git clone git@github.com:EliteSalman/Astro-Portfolio-Salman-Shafi.git
cd Astro-Portfolio-Salman-Shafi
```

#### 2️⃣ Install Dependencies

```bash
pnpm install
```

#### 3️⃣ Set Environmental Variables

Cloudflare Pages hosts this branch as a static site. No Worker secrets or runtime environment variables are required.
#### 4️⃣ Build & Deploy

```bash
pnpm build
```

#### 5️⃣ Verify Deployment

```bash
curl -I https://your-project.pages.dev
```

---

### 🖥️ Node.js (Bare Metal / VPS)

#### 1️⃣ Clone the Repository

```bash
git clone git@github.com:EliteSalman/Astro-Portfolio-Salman-Shafi.git
cd Astro-Portfolio-Salman-Shafi
```

#### 2️⃣ Install Dependencies

```bash
pnpm install
```

#### 3️⃣ Set Environmental Variables

Create `.env.local` as shown above.

#### 4️⃣ Build

```bash
pnpm build
```

#### 5️⃣ Start the Server

```bash
node dist/server/entry.mjs
```

#### 6️⃣ Verify Deployment

```bash
curl -I http://127.0.0.1:4321
```

It is highly recommended to place this behind a reverse proxy (e.g., Caddy or NGINX) for production SSL termination.

---

## 📂 Directory Structure

```text
.
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   ├── contact.ts
│   │   │   └── turnstile.ts
│   │   ├── index.astro
│   │   └── sitemap.xml.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── global.css
│   ├── lib/
│   │   └── validation.ts
│   └── types/
│       └── turnstile.d.ts
└── public/
    ├── photo.webp
    ├── share.webp
    └── ...
```

---

## 📞 Contact & Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

* 📧 **Email** — [hello@salmanshafi.net](mailto:hello@salmanshafi.net)
* 🐛 **Issues** — [GitHub Issues](https://github.com/EliteSalman/Astro-Portfolio-Salman-Shafi/issues)
* 💬 **Discussions** — [GitHub Discussions](https://github.com/EliteSalman/Astro-Portfolio-Salman-Shafi/discussions)

---

## 👤 Original Project

This repository is a heavily modified fork of the original work by:

* **Author** — Mehedi Hasan
* **Email** — [hello@mehedims.com](mailto:hello@mehedims.com)
* **GitHub** — [asma019](https://github.com/asma019)
* **Repository** — [Next.js-Portfolio-Salman-Shafi](https://github.com/asma019/Next.js-Portfolio-for-System-Admins)

---

## 📄 Licence

Released under the [MIT Licence](LICENSE).
