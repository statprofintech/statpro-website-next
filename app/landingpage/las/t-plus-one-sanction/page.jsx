import LasT1Page from '@/components/landing/las/LasT1Page'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/las/t-plus-one-sanction')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/las/t-plus-one-sanction' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <LasT1Page />
}
