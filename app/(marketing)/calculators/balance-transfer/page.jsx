import BtBreakevenPage from '@/components/pages/BtBreakevenPage'
import { getSeoForPath } from '@/lib/seo-config'
import { breadcrumbForPath } from '@/lib/jsonld'

export function generateMetadata() {
  const seo = getSeoForPath('/calculators/balance-transfer')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: '/calculators/balance-transfer' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  const bc = breadcrumbForPath('/calculators/balance-transfer')
  return (
    <>
      {bc && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />}
      <BtBreakevenPage />
    </>
  )
}
