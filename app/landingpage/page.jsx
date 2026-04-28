import LandingIndexPage from '@/components/landing/LandingIndexPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LandingIndexPage />
}
