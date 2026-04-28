import LasPromoterPledgePage from '@/components/landing/las/v2/LasPromoterPledgePage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/las/promoter-pledge')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/las/promoter-pledge' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LasPromoterPledgePage />
}
