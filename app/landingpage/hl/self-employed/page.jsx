import HlSelfEmployedPage from '@/components/landing/hl/HlSelfEmployedPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/hl/self-employed')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/hl/self-employed' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <HlSelfEmployedPage />
}
