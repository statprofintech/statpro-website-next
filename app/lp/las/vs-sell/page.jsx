import LasVsSellPage from '@/components/landing/las/v2/LasVsSellPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/las/vs-sell')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/las/vs-sell' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <LasVsSellPage />
}
