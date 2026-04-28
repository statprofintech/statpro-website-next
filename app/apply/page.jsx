import { Suspense } from 'react'
import ApplyPage from '@/components/pages/ApplyPage'
import { getSeoForPath } from '@/lib/seo-config'
import { SITE_NAME } from '@/lib/seo-config'

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

// Skeleton served while ApplyPage hydrates (it depends on useSearchParams,
// which Next 15 requires inside Suspense). The skeleton communicates the page
// is loading so visitors don't see a blank screen on slow networks. Crawlers
// also see real content — the H1 and brand name are server-rendered.
function ApplySkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-[14px] font-bold tracking-tight">{SITE_NAME}</div>
          <a href="/" className="text-[13px] text-ink-2 hover:text-ink">← Back to home</a>
        </div>
      </header>
      <main className="max-w-[760px] mx-auto px-6 py-16">
        <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue mb-3">Apply</div>
        <h1 className="text-[32px] lg:text-[40px] leading-[1.05] font-extrabold text-ink mb-4">
          Apply for a quote
        </h1>
        <p className="text-[15px] text-ink-soft max-w-[58ch] mb-10">
          Three quick steps. We&rsquo;ll match your file to the four to five
          right-fit lenders within 24 hours.
        </p>
        <div className="space-y-3 animate-pulse" aria-hidden>
          <div className="h-12 bg-rule-soft rounded-lg" />
          <div className="h-12 bg-rule-soft rounded-lg" />
          <div className="h-12 bg-rule-soft rounded-lg" />
          <div className="h-12 bg-rule-soft rounded-lg w-1/2" />
          <div className="h-12 bg-blue/10 rounded-lg w-32 mt-4" />
        </div>
      </main>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<ApplySkeleton />}>
      <ApplyPage />
    </Suspense>
  )
}
