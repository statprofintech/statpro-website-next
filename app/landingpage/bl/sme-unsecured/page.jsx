import BlSmeUnsecuredPage from '@/components/landing/bl/BlSmeUnsecuredPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/bl/sme-unsecured')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/bl/sme-unsecured' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <BlSmeUnsecuredPage />
}
