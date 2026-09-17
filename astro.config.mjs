import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.NEXT_PUBLIC_SITE_URL || 'https://salmanshafi.net',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
  i18n: {
    locales: ['en-gb', 'bn'],
    defaultLocale: 'en-gb',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
