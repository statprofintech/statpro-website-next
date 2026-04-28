import LapIndustrialPropertyPage from '@/components/landing/lap/v2/LapIndustrialPropertyPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/lap/industrial')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/lap/industrial' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <LapIndustrialPropertyPage />
}
