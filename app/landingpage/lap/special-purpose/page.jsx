import LapSpecialPurposePage from '@/components/landing/lap/LapSpecialPurposePage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/lap/special-purpose')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/lap/special-purpose' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LapSpecialPurposePage />
}
