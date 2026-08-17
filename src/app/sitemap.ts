import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers()
  const protocol = h.get('x-forwarded-proto')
  const rawHost =
    h.get('x-forwarded-host') ??
    h.get('host')
  const host = rawHost?.split(',')[0]?.trim()
  if (!protocol || !host) {
    throw new Error('Cannot determine protocol or host for sitemap')
  }
  const baseUrl = `${protocol}://${host}`
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
      }
