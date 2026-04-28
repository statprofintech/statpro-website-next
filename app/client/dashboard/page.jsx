import { Suspense } from 'react'
import ClientDashboardPage from '@/components/pages/client/ClientDashboardPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/client/dashboard')
  return {
    title: seo.title,
    alternates: { canonical: '/client/dashboard' },
    robots: { index: false, follow: false },
  }
}

export default function Page() {
  // useSearchParams CSR bailout requires Suspense in Next 15.
  return (
    <Suspense fallback={null}>
      <ClientDashboardPage />
    </Suspense>
  )
}
