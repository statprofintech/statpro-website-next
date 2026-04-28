import { ArrowUpRight, MapPin, TrendingDown } from "lucide-react";
import Link from "next/link";
const CASES = [
  {
    family: "LAP",
    sector: "Rice mill operator",
    city: "Bardhaman",
    ticket: "₹2.5 Cr",
    headline: "Saved ₹38 L over 7 years.",
    body: "Promoter was paying 11.5% on a ₹2 Cr OD with 90% utilisation. We restructured into a 7-year LAP at 8.85% across two private banks; principal liquidates by year 7.",
    metric: "↓ 41% interest",
  },
  {
    family: "LRD",
    sector: "Commercial real estate",
    city: "Kolkata · Salt Lake",
    ticket: "₹1.2 Cr",
    headline: "Sanctioned at 8.9% via Bajaj.",
    body: "Family-owned Grade-A office leased to a listed IT firm. Bajaj LRD sanctioned at 85% NPV of remaining 8-year lease. Escrow set up in 14 days.",
    metric: "8.9% rate",
  },
  {
    family: "LAS",
    sector: "Cardiologist",
    city: "Siliguri",
    ticket: "₹50 L",
    headline: "Disbursed in 12 minutes.",
    body: "Surgeon with ₹1.2 Cr portfolio (top-100 equities + debt MFs). JioCredit pledged via NSDL; drawdown live the same morning at 9.25%.",
    metric: "12 min",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-navy-deep text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative blue glows */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[460px] h-[460px] bg-blue-bright/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-[680px]">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue-bright font-bold mb-4">Recent placements</div>
            <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.025em]">
              Real deals, <span className="text-white/55">anonymised numbers.</span>
            </h2>
          </div>
          <Link href="/lenders" className="inline-flex items-center gap-1 text-[14px] font-semibold text-white/85 hover:text-blue-bright transition">
            See lender network <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {CASES.map((c) => (
            <article key={c.family + c.city} className="group relative rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 overflow-hidden hover:border-blue-bright/40 hover:bg-white/[0.07] transition flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-bright/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              <div className="relative p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] font-bold text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-2.5 py-1 rounded-md">{c.family}</span>
                  <span className="inline-flex items-center gap-1 text-[12px] text-white/50">
                    <MapPin className="w-3 h-3" /> {c.city}
                  </span>
                </div>
                <div className="text-[28px] font-extrabold text-white tabular tracking-[-0.02em] leading-none mb-2">{c.ticket}</div>
                <div className="text-[12.5px] text-white/55 mb-4">{c.sector}</div>
                <h3 className="text-[18px] font-bold text-white leading-tight mb-3 tracking-tight">{c.headline}</h3>
                <p className="text-[13.5px] text-white/65 leading-relaxed mb-6">{c.body}</p>
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-blue-bright" strokeWidth={2.5} />
                  <span className="inline-flex items-center text-[14px] font-bold text-blue-bright">{c.metric}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[11.5px] text-white/45 max-w-[760px]">
          Names anonymised. Numbers based on actual placements; final terms vary by profile and lender.
        </p>
      </div>
    </section>
  );
}
