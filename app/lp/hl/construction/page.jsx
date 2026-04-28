import HlConstructionLinkedPage from '@/components/landing/hl/v2/HlConstructionLinkedPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/hl/construction')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/hl/construction' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <HlConstructionLinkedPage />
}
