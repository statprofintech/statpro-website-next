import ApplyThanksPage from '@/components/pages/ApplyThanksPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/apply/thanks')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/apply/thanks' },
    robots: { index: false, follow: true },
  }
}

export default function Page() {
  return <ApplyThanksPage />
}
