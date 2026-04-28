import LasPage from '@/components/pages/LasPage'
import { getSeoForPath } from '@/lib/seo-config'
import { breadcrumbForPath } from '@/lib/jsonld'

export function generateMetadata() {
  const seo = getSeoForPath('/las')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: '/las' },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.image, width: 1200, height: 630 }],
    },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  const bc = breadcrumbForPath('/las')
  return (
    <>
      {bc && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />}
      <LasPage />
    </>
  )
}
