import { SITE_URL, PUBLIC_PATHS } from '@/lib/seo-config'

const priority = (p) => {
  if (p === '/') return 1.0
  if (['/lap', '/lrd', '/las', '/hl', '/bl', '/pl'].includes(p)) return 0.9
  if (['/apply', '/lenders', '/about'].includes(p)) return 0.8
  if (p.startsWith('/calculators')) return 0.7
  return 0.5
}

export default function sitemap() {
  const today = new Date()
  return PUBLIC_PATHS.map((p) => ({
    url: `${SITE_URL}${p === '/' ? '/' : p}`,
    lastModified: today,
    changeFrequency: p === '/' ? 'weekly' : 'monthly',
    priority: priority(p),
  }))
}
