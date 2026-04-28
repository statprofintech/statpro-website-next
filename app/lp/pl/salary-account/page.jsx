import PlSalaryAccountPage from '@/components/landing/pl/v2/PlSalaryAccountPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/lp/pl/salary-account')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '/lp/pl/salary-account' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
  }
}

export default function Page() {
  return <PlSalaryAccountPage />
}
