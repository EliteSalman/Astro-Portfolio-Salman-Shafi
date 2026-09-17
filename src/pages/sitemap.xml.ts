import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site, request }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || new URL(request.url).origin;
  const lastmod = new Date().toISOString();
  const urls = ['/en-gb/', '/bn/'].map((path) => `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1</priority>\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
