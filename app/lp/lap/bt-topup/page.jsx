import LapBalanceTransferTopupPage from '@/components/landing/lap/v2/LapBalanceTransferTopupPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/lap/bt-topup')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/lap/bt-topup' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <LapBalanceTransferTopupPage />
}
