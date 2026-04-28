// Shared layout for non-standalone pages — wraps Navbar + Footer + WhatsAppButton
// around every page in this route group. Standalone routes (/apply, /client/*,
// deep landing pages) live outside this group.

import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function MarketingLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
