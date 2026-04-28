import LrdNriLandlordPage from '@/components/landing/lrd/LrdNriLandlordPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/lrd/nri-landlord')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/lrd/nri-landlord' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LrdNriLandlordPage />
}
