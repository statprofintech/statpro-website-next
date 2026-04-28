import { SITE_URL } from '@/lib/seo-config'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Both /landingpage/* and /lp/* are crawl-allowed and sitemap-listed;
        // we want organic discovery on those pages alongside paid traffic.
        disallow: ['/apply/thanks', '/client/', '/marketing/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
