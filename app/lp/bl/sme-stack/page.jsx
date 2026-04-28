import BlSmeStackPage from '@/components/landing/bl/v2/BlSmeStackPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/bl/sme-stack')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/bl/sme-stack' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <BlSmeStackPage />
}
