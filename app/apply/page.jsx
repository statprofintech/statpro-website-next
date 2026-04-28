import { Suspense } from 'react'
import ApplyPage from '@/components/pages/ApplyPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/apply')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/apply' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  // ApplyPage uses useSearchParams — Next 15 requires it inside Suspense.
  return (
    <Suspense fallback={null}>
      <ApplyPage />
    </Suspense>
  )
}
