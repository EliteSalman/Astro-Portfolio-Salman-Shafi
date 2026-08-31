# Sysadmin Terminal Portfolio

A strict, terminal-driven portfolio website for System Administrators, DevOps practitioners, and backend engineers. It uses Astro for the application shell and routing, React islands for the existing interactive behavior, Tailwind CSS through the official Vite plugin, Framer Motion animations, Cloudflare Turnstile, and Nodemailer SMTP delivery.

![Astro Portfolio for System Admins](public/share.webp)

## Core Infrastructure

| Layer | Specification |
|---|---|
| Environment | Pure AMOLED black (`#000`) with syntax-highlighted accents |
| Typography | Strict monospace terminal presentation |
| Animations | Mechanical step-rendering and CSS glitch effects, with Framer Motion islands |
| Layout | `systemd` unit mimics, raw CLI outputs, and configuration blocks |
| Responsive | Fluid mobile-first adaptation with safe-area spacing |
| Framework | Astro server output with the Node adapter |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |

## Contact Execution Sequence

The contact form preserves the original CLI-style workflow. It validates `--name=`, `--email=`, `--subject=`, and `--message=` inputs, obtains the runtime Cloudflare Turnstile site key, verifies the token server-side, sends through secure SMTP using Nodemailer, and displays live terminal status output such as `[ EXECUTING... ]` and `[ ERR ]`.

## Project Structure

```text
.
├── src/
│   ├── components/
│   │   ├── home/             # Portfolio sections and contact workflow
│   │   ├── Header.tsx        # Hydrated responsive navigation island
│   │   ├── Footer.tsx        # Hydrated footer island
│   │   └── Home.tsx          # Home composition and JSON-LD
│   ├── layouts/Layout.astro  # HTML shell, metadata, and global styles
│   ├── pages/
│   │   ├── index.astro      # Home route
│   │   ├── sitemap.xml.ts   # Dynamic sitemap endpoint
│   │   └── api/              # Turnstile and contact endpoints
│   ├── lib/                  # Shared validation logic
│   └── styles/global.css     # AMOLED theme and Tailwind entrypoint
├── public/                   # Favicon-adjacent config and portfolio media
├── astro.config.mjs          # Astro, Node, React, and Tailwind Vite setup
├── wrangler.toml             # Cloudflare deployment configuration reference
├── Containerfile             # Container deployment
├── compose.yml               # Local container orchestration
├── healthcheck.sh            # Container health probe
└── MIGRATION.md              # Migration and environment notes
```

## Environment Variables

Create `.env` or `.env.local` from `.env.example` and set the following values:

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
TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
```

The SMTP and Turnstile secret values are server-only. `NEXT_PUBLIC_SITE_URL` is retained for compatibility with the original project and is used as the Astro site and canonical URL value.

## Development

Yarn remains supported as the project’s repository package-manager workflow:

```bash
yarn install
yarn dev
yarn check
yarn build
yarn preview
```



## Deployment

The default build uses Astro server output and the Node adapter, which is required for the original Nodemailer SMTP contact flow. Container deployment is documented in `DEPLOYMENT.md`.

A Cloudflare Worker build is also available through `astro.config.cloudflare.mjs` and `yarn build:cloudflare`; `yarn wrangler deploy --dry-run` has been verified to produce a valid Worker bundle and static asset manifest. However, Cloudflare Workers do not provide the Node TCP/TLS socket APIs used by Nodemailer SMTP. Therefore, the portfolio UI, sitemap, Turnstile endpoint, and form validation can deploy to Workers, but successful SMTP contact delivery cannot be preserved there without replacing Nodemailer with an HTTP email provider or moving `/api/contact` to a Node-capable service. For 1:1 behavior, deploy the default Node adapter using the Containerfile or another Node host.

## Validation

The project is validated with `yarn check` and `yarn build`. The route smoke tests should confirm HTTP 200 for `/`, `/sitemap.xml`, and static assets, HTTP 200 for `/api/turnstile`, and HTTP 400 for a contact request that omits the required Turnstile token.

## Links

* Email: [hello@salmanshafi.net](mailto:hello@salmanshafi.net)
* GitHub: [EliteSalman](https://github.com/EliteSalman)
* Twitter/X: [@EliteSalmanX](https://twitter.com/EliteSalmanX)

## Licence

Released under the MIT Licence. See `LICENSE`.
