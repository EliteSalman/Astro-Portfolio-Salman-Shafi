import type { APIRoute } from 'astro';

export const GET: APIRoute = ({}) => {
  return new Response(JSON.stringify({ siteKey: process.env.TURNSTILE_SITE_KEY }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
