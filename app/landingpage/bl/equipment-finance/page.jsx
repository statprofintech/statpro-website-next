import BlEquipmentFinancePage from '@/components/landing/bl/BlEquipmentFinancePage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/bl/equipment-finance')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/bl/equipment-finance' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <BlEquipmentFinancePage />
}
