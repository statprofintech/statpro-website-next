import PlMedicalEducationPage from '@/components/landing/pl/PlMedicalEducationPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/pl/medical-education')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/pl/medical-education' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <PlMedicalEducationPage />
}
