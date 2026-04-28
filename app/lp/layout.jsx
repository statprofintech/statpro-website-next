// Shared layout for all /lp/* landing pages — gives them Navbar + Footer
// identical to the (marketing) route group, without needing to move files.
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function LpLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
