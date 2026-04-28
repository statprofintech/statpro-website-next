import LapSpecialPurposePage from '@/components/landing/lap/v2/LapSpecialPurposePage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/lap/special-purpose')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/lap/special-purpose' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LapSpecialPurposePage />
}
