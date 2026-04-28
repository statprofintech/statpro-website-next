import InfographicShell from '@/components/pages/marketing/InfographicShell'

export const metadata = {
  title: 'Infographic preview — StatPro Fintech',
  robots: { index: false, follow: false },
}

// Static export requires all dynamic segments to be enumerated at build time.
// Designs are still being ported (InfographicShell is a stub), so we return
// an empty list — no pages are pre-rendered. dynamicParams: false ensures any
// unknown path returns 404 rather than erroring the build.
export const dynamicParams = false
// InfographicShell is still a stub — pre-render one placeholder path so
// static export doesn't fail. The real designs will be added here later.
export function generateStaticParams() {
  return [{ design: 'lap', size: 'square' }]
}

// React-Router used :design/:size; Next App Router exposes them via params.
export default function Page({ params }) {
  return <InfographicShell design={params.design} size={params.size} />
}
