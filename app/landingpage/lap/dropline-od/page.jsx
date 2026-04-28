import LapDroplineOdPage from '@/components/landing/lap/LapDroplineOdPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/lap/dropline-od')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/lap/dropline-od' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <LapDroplineOdPage />
}
