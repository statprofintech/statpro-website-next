import LrdHospitalHotelPage from '@/components/landing/lrd/v2/LrdHospitalHotelPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/lrd/hospital-hotel')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/lrd/hospital-hotel' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LrdHospitalHotelPage />
}
