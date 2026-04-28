// Shared layout for /landingpage and /landingpage/* — gives them Navbar + Footer.
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function LandingPageLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
