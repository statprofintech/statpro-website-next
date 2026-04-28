import InfographicShell from '@/components/pages/marketing/InfographicShell'

export const metadata = {
  title: 'Infographic preview — StatPro India',
  robots: { index: false, follow: false },
}

// React-Router used :design/:size; Next App Router exposes them via params.
export default function Page({ params }) {
  return <InfographicShell design={params.design} size={params.size} />
}
