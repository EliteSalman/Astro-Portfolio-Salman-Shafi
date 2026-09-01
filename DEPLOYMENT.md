# Deployment Guide for Salman Shafi Portfolio

This guide provides step-by-step instructions for deploying your optimized Astro portfolio website.

## 🚀 Quick Deployment to Cloudflare

### 1. Prerequisites
- GitHub account with your repository
- Cloudflare account with Workers enabled
- Node.js 18+ installed locally

### 2. Environment Variables
Before deploying, make sure to set these environment variables for your deployment:

```bash
# SMTP Configuration for AWS SES
# Replace with your actual AWS SES credentials
SMTP_HOST=email-smtp.ap-southeast-1.amazonaws.com
SMTP_USERNAME=your-aws-ses-username
SMTP_PASSWORD=your-aws-ses-password
SMTP_PORT=587
SMTP_SECURE=false

# Email Configuration
# Update with your actual email addresses
FROM_EMAIL_NAME=Your Name Contact
FROM_EMAIL=no-reply@yourdomain.com
TO_EMAIL=your-email@gmail.com

# Application Configuration
# Update with your actual domain
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Note:** Copy `.env.example` to `.env.local` and fill in your actual values for local development.

**Cloudflare Email note:** Cloudflare Workers deployment does not require a domain entry in this repository configuration. The Worker build uses `public/.assetsignore` so Wrangler does not upload the generated `_worker.js` directory as public assets.

#### Option B: Podman deployment

The Astro Node deployment can be run with Podman using the existing `Containerfile` and `compose.yml`.

```bash
# Install Podman and Podman Compose on Fedora/RHEL-based systems
sudo dnf install podman podman-compose

# Build the Astro container image
podman build -f Containerfile -t astro-portfolio .

# Start the portfolio service
podman-compose up -d

# Verify the Astro server
curl -I http://127.0.0.1:4321
```

The Compose service reads environment variables from `.env`, publishes port `4321`, and uses the included `healthcheck.sh`. To stop it, run `podman-compose down`. Docker users can use the same `Containerfile` and Compose definition with the equivalent Docker commands.

### 3. Deployment Steps

#### Option A: Cloudflare Web UI / Wrangler (Recommended)
```bash
# Cloudflare Web UI build command
yarn run deploy:cloudflare

# Local validation
yarn run deploy:cloudflare
yarn wrangler deploy --dry-run
```

#### Option C: GitHub Actions Integration
1. Use the Cloudflare Web UI for the Worker deployment, or use the GitHub Actions workflow in `.github/workflows/container.yml` for container deployment
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables in Project Settings
5. Deploy

### 4. Domain Configuration
1. In Cloudflare Dashboard → Workers & Pages → Settings
2. Add your custom domain: `salmanshafi.net`
3. Configure deployment settings as instructed by Cloudflare

## 🔧 Performance Optimizations Applied

### Build Optimizations
- ✅ **Image Optimization**: WebP/AVIF formats with Astro rendering and Vite asset handling
- ✅ **Code Splitting**: Automatic chunking for optimal loading
- ✅ **Tree Shaking**: Removed unused code
- ✅ **Minification**: CSS/JS compression enabled
- ✅ **Console Removal**: Production builds remove console.log statements

### SEO Optimizations
- ✅ **Meta Tags**: Complete OpenGraph and Twitter Cards
- ✅ **Structured Data**: JSON-LD schema for rich snippets
- ✅ **Sitemap**: Dynamic sitemap generation
- ✅ **Robots.txt**: Proper crawling instructions
- ✅ **Canonical URLs**: Prevent duplicate content issues

### Security Headers
- ✅ **XSS Protection**: Cross-site scripting prevention
- ✅ **Content Security**: Prevents content injection
- ✅ **Frame Options**: Clickjacking protection
- ✅ **MIME Sniffing**: Content type validation

### Performance Features
- ✅ **Contact Form**: Working email with premium styling
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Loading States**: Smooth user experience
- ✅ **Error Handling**: Graceful error management

## 📊 Build Statistics

```
Route (app)                                 Size  First Load JS
├ ○ /_not-found                            991 B         101 kB
├ ƒ /api/contact                           127 B        99.8 kB
└ ○ /sitemap.xml                           127 B        99.8 kB
+ First Load JS shared by all            99.7 kB
```

## 🔍 Testing Checklist

Before deploying, verify:
- [ ] `yarn build` completes successfully
- [ ] `yarn preview` serves the production build
- [ ] Contact form sends emails correctly
- [ ] All images load properly
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are present
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

## 🌐 Post-Deployment Validation

### 1. Performance Testing
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Check [GTmetrix](https://gtmetrix.com/) scores
- Verify Core Web Vitals

### 2. SEO Validation
- Test with [Rich Results Test](https://search.google.com/test/rich-results)
- Submit sitemap to Google Search Console
- Verify OpenGraph with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### 3. Security Testing
- Check headers with [Security Headers](https://securityheaders.com/)
- Verify SSL certificate
- Test contact form functionality

## 🔧 Troubleshooting

### Common Issues
1. **Build Fails**: Check environment variables are set
2. **Images Not Loading**: Verify image paths and formats
3. **Contact Form Not Working**: Check SMTP credentials
4. **Slow Loading**: Enable compression and check bundle size

### Support Resources
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Astro Documentation](https://docs.astro.build/)
- [Portfolio Repository Issues](https://github.com/your-repo/issues)

## 📈 Performance Monitoring

Set up monitoring with:
- Cloudflare Web Analytics
- Google Analytics 4
- Cloudflare Speed Insights
- Real User Monitoring (RUM)

---

**Ready to deploy?** Your portfolio is now optimized for production with all modern best practices implemented! 