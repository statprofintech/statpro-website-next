import LrdMallOfficeOwnerPage from '@/components/landing/lrd/LrdMallOfficeOwnerPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/lrd/mall-office-owner')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/lrd/mall-office-owner' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LrdMallOfficeOwnerPage />
}
