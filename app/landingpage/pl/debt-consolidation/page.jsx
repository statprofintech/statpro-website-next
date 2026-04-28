import PlDebtConsolidationPage from '@/components/landing/pl/PlDebtConsolidationPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/pl/debt-consolidation')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/pl/debt-consolidation' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <PlDebtConsolidationPage />
}
