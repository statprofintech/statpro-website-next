import { SITE_URL } from '@/lib/seo-config'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/apply/thanks', '/client/', '/landingpage/', '/marketing/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
