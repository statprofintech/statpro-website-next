import LrdMultiTenantPage from '@/components/landing/lrd/v2/LrdMultiTenantPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/lrd/multi-tenant')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/lrd/multi-tenant' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <LrdMultiTenantPage />
}
