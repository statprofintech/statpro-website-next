import ClientSignInPage from '@/components/pages/client/ClientSignInPage'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/client/sign-in')
  return {
    title: seo.title,
    alternates: { canonical: '/client/sign-in' },
    robots: { index: false, follow: false },
  }
}

export default function Page() { return <ClientSignInPage /> }
