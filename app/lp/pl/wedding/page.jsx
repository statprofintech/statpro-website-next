import PlWeddingPage from '@/components/landing/pl/v2/PlWeddingPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/pl/wedding')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/pl/wedding' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <PlWeddingPage />
}
