import HlBalanceTransferPage from '@/components/landing/hl/HlBalanceTransferPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/landingpage/hl/balance-transfer')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/landingpage/hl/balance-transfer' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <HlBalanceTransferPage />
}
