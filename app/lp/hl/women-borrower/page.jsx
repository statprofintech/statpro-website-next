import HlWomenBorrowerPage from '@/components/landing/hl/v2/HlWomenBorrowerPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/hl/women-borrower')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/hl/women-borrower' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <HlWomenBorrowerPage />
}
