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
- **Deployment**: Cloudflare Workers

---

# ☁️ Deployment (Cloudflare Workers)

## 1️⃣ Install Dependencies

```bash
npm install
```

---

## 2️⃣ Edit Your Information

Before deploying, update your personal details:

- `src/app/page.tsx` – Hero, About, Experience, Skills
- `src/components/Header.tsx` – Branding & Navigation
- `src/components/Footer.tsx` – Contact information
- `src/app/layout.tsx` – SEO metadata & site URL
- `public/photo.webp` – Your profile photo
- `public/share.webp` – Social preview image (1200x630)

Also configure your environment variables inside Cloudflare Dashboard:

```
Workers → Settings → Variables
```

---

## 3️⃣ Deploy

If this is your first time deploying and you are not logged in to Cloudflare, run:

```bash
npx wrangler login
```

Then deploy:

```bash
npm run deploy
```

> The deploy script automatically builds and publishes the Worker.

After deployment, connect your custom domain from the Cloudflare Dashboard.

---

# 🔐 Environment Variables

Set these in:

**Cloudflare Dashboard → Workers → Settings → Variables**

```env
SMTP_HOST=host.example.tld
SMTP_USERNAME=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_PORT=587
SMTP_SECURE=false

FROM_EMAIL_NAME=Your Name
FROM_EMAIL=no-reply@example.tld
TO_EMAIL=your-email@example.tld

NEXT_PUBLIC_SITE_URL=https://example.tld

TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key
```

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
│   └── components/
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

**Made with ❤️ using Next.js & Cloudflare Workers**