import TermsOfServicePage from '@/components/pages/TermsOfServicePage'
import { getSeoForPath } from '@/lib/seo-config'
import { breadcrumbForPath } from '@/lib/jsonld'

export function generateMetadata() {
  const seo = getSeoForPath('/terms')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: '/terms' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  const bc = breadcrumbForPath('/terms')
  return (
    <>
      {bc && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />}
      <TermsOfServicePage />
    </>
  )
}
