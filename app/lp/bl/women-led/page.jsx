import BlWomenLedPage from '@/components/landing/bl/v2/BlWomenLedPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/bl/women-led')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/bl/women-led' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <BlWomenLedPage />
}
