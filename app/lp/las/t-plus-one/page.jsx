import LasT1SanctionPage from '@/components/landing/las/v2/LasT1SanctionPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/las/t-plus-one')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/las/t-plus-one' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <LasT1SanctionPage />
}
