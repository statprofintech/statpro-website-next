import { Marquee } from "@/components/ui/marquee";
import { PARTNER_PANEL } from "@/lib/lenders";

// Render the 19 partner names as styled chips that scroll forever.
export default function PartnerMarquee() {
  return (
    <section className="bg-white py-14 lg:py-16 border-y border-rule overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-8">
        <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft font-bold text-center">
          We place deals at
        </div>
      </div>
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <Marquee pauseOnHover className="[--duration:50s]">
          {PARTNER_PANEL.map((p) => (
            <span
              key={p.id}
              className="inline-flex items-center gap-2 px-5 py-3 mx-1 rounded-2xl bg-surface-2 border border-rule font-display text-[15px] font-bold text-ink-2 whitespace-nowrap hover:bg-white hover:border-blue/30 hover:text-blue transition"
            >
              {p.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
