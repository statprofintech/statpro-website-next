// Home page — temporary smoke-test render until the 12 home sections are
// ported (Hero, StatsBand, CalculatorHub, Pillars, Products, HowItWorks,
// WestBengalCities, Partners, CaseStudies, CollateralsMatrix, Faq, FinalCta).
//
// This file proves: Tailwind v4 tokens resolve, fonts load, Logo renders,
// the design system carries over from the Vite project unchanged.

import Logo from '@/components/Logo'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('/')
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: '/' },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.image, width: 1200, height: 630 }],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size={36} />
          <nav className="text-[14px] font-medium text-ink-2">
            Migration in progress · staging build
          </nav>
        </div>
      </header>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue mb-5">
          Next.js + Vercel scaffold
        </div>
        <h1 className="text-[48px] lg:text-[64px] leading-[1.05] font-extrabold text-ink tracking-[-0.03em] max-w-[18ch]">
          Same site,{' '}
          <span className="bg-gradient-to-br from-blue via-blue-bright to-blue-deep bg-clip-text text-transparent">
            faster.
          </span>
        </h1>
        <p className="mt-6 text-[16px] lg:text-[18px] text-ink-soft leading-relaxed max-w-[60ch]">
          This is the Next.js + Vercel rebuild of{' '}
          <span className="font-semibold text-ink">www.statproindia.com</span>.
          The live site is unchanged on OVH while we port pages here. When every
          section looks pixel-identical and Lighthouse mobile is 90+, we flip
          DNS in CloudFlare. No code shipped to visitors yet.
        </p>

        <div className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-xl border border-rule bg-surface-2">
          <span className="text-[12px] uppercase tracking-wider font-bold text-ink-soft">
            Smoke test
          </span>
          <span className="text-[14px] font-mono tabular text-ink">
            fonts ✓ &nbsp; tokens ✓ &nbsp; logo ✓ &nbsp; tailwind ✓
          </span>
        </div>
      </section>
    </main>
  )
}
