# Next.js to Astro Migration

This project migrates the Salman Shafi terminal-style portfolio to Astro while retaining the original React interaction logic where client state, Framer Motion, or Cloudflare Turnstile is required.

## Architecture

Astro owns the document shell, route files, metadata, server output, sitemap endpoint, and API endpoints. React is used as a set of hydrated islands for the existing header, footer, home sections, animation behavior, and contact workflow. This keeps application behavior intact while allowing Astro to own routing and server rendering.

Tailwind CSS is loaded from `src/styles/global.css` and integrated through `@tailwindcss/vite` in `astro.config.mjs`. The original AMOLED palette, monospace typography, sharp borders, glitch effects, animations, and form classes are preserved.

## Commands

| Command | Purpose |
|---|---|
| `yarn install` | Install the project dependencies from `yarn.lock`. |
| `yarn dev` | Start the Astro development server. |
| `yarn check` | Run Astro and TypeScript diagnostics. |
| `yarn build` | Create the production Astro Node build. |
| `yarn preview` | Preview the production build. |

## Environment variables

The contact endpoint retains the original server-side variables: `SMTP_HOST`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_PORT`, `SMTP_SECURE`, `FROM_EMAIL_NAME`, `FROM_EMAIL`, `TO_EMAIL`, `TURNSTILE_SITE_KEY`, and `TURNSTILE_SECRET_KEY`. `NEXT_PUBLIC_SITE_URL` remains accepted for compatibility and is used as the Astro `site` value and canonical URL source.

Secrets are accessed only by server endpoints. The browser receives the Turnstile site key through `/api/turnstile`, matching the original runtime behavior; the Turnstile secret and SMTP credentials are never exposed to client code.

## Preserved behavior

The home route, anchored navigation, responsive mobile menu, scroll-aware header, terminal visual treatment, animated sections, contact form validation, Turnstile verification, SMTP delivery, success/error/reset states, JSON-LD person schema, Open Graph/Twitter metadata, robots file, and monthly sitemap semantics are retained.

## Validation

The final migration was validated with `yarn check` and `yarn build`, both of which complete with zero diagnostics. Runtime smoke tests cover `/`, `/sitemap.xml`, `/api/turnstile`, `/api/contact`, and the preserved public assets.
