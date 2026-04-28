// Home page — same composition as the existing Vite App.jsx, ported 1:1.
// Each section is a standalone component under components/sections/.
// Most are server components; Hero, CalculatorHub, Faq, Navbar, PartnerMarquee
// (auto-marked by scripts/port-sections.mjs) are client components.

import dynamic from 'next/dynamic'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import StatsBand from '@/components/sections/StatsBand'
import Pillars from '@/components/sections/Pillars'
import Products from '@/components/sections/Products'
import HowItWorks from '@/components/sections/HowItWorks'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getSeoForPath, SITE_NAME } from '@/lib/seo-config'
import { homeJsonLd } from '@/lib/jsonld'

// Below-fold heavy sections: split into separate JS chunks so they don't
// block the main-thread during initial load (reduces TBT significantly).
// ssr:true keeps them server-rendered for SEO; only the JS is deferred.
const CalculatorHub      = dynamic(() => import('@/components/sections/CalculatorHub'),      { ssr: true })
const WestBengalCities   = dynamic(() => import('@/components/sections/WestBengalCities'),   { ssr: true })
const Partners           = dynamic(() => import('@/components/sections/Partners'),           { ssr: false }) // pure animation, no SEO value
const CaseStudies        = dynamic(() => import('@/components/sections/CaseStudies'),        { ssr: true })
const CollateralsMatrix  = dynamic(() => import('@/components/sections/CollateralsMatrix'),  { ssr: true })
const Faq                = dynamic(() => import('@/components/sections/Faq'),               { ssr: true })
const FinalCta           = dynamic(() => import('@/components/sections/FinalCta'),          { ssr: true })

export function generateMetadata() {
  const seo = getSeoForPath('/')
  // The layout's `title.template` only fires for *child* pages — the home
  // route shares the layout default, so we set the suffix explicitly here
  // to keep brand consistency across the whole site.
  return {
    title: { absolute: `${seo.title} | ${SITE_NAME}` },
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
  const ld = homeJsonLd()
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {ld.map((entry, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Above-fold: statically imported — on critical path for LCP */}
        <Hero />
        <StatsBand />
        <Pillars />
        <Products />
        <HowItWorks />
        {/* Below-fold: dynamically imported — JS deferred to reduce TBT */}
        <CalculatorHub />
        <WestBengalCities />
        <Partners />
        <CaseStudies />
        <CollateralsMatrix />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
