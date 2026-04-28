import { TrendingDown, Layers, Zap } from "lucide-react";
import { CATALOGUE_STATS } from "@/lib/lenders";

const PILLARS = [
  {
    icon: TrendingDown,
    eyebrow: "Lower interest cost",
    title: "30–50% cheaper financing.",
    body: "OD-to-LAP conversion. Balance Transfer + Top-up. Debt consolidation. We re-engineer your interest line, not just your loan.",
    accentText: "₹52 L",
    accentSub: "interest saved on a typical ₹2 Cr OD over 10 years",
    iconBg: "bg-coral-soft",
    iconFg: "text-coral",
  },
  {
    icon: Layers,
    eyebrow: "Every collateral. Yes, every.",
    title: "Schools. Hospitals. Vacant land. Inventory.",
    body: "Schools, colleges, hospitals, nursing homes, hotels, warehouses, factories, cold storage, banquet halls, vacant land, lease rentals, listed shares, MFs, even your stock — our 19-partner panel underwrites the unusual.",
    accentText: `${CATALOGUE_STATS.collateralTypes}+`,
    accentSub: "collateral types funded — including the ones banks decline",
    iconBg: "bg-blue-soft",
    iconFg: "text-blue",
  },
  {
    icon: Zap,
    eyebrow: "Built-for-speed",
    title: "Sanction in days. Not weeks.",
    body: "Pre-vetted document pack. Parallel underwriting at 4–5 lenders. Single relationship manager. You file once — we negotiate everywhere.",
    accentText: "10 sec → 72 hrs",
    accentSub: "from instant pre-approved (HDFC PL) to LAP sanction (Bajaj)",
    iconBg: "bg-mint-soft",
    iconFg: "text-mint",
  },
];

export default function Pillars() {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[640px]">
          <div className="text-[12px] uppercase tracking-[0.16em] text-coral font-bold mb-4">Why Statpro</div>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
            Three reasons promoters and CFOs route deals through us.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl border border-rule bg-white p-7 lg:p-8 hover:border-coral/40 hover:shadow-2xl hover:shadow-navy/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${p.iconBg} ${p.iconFg} grid place-items-center mb-6`}>
                <p.icon className="w-5.5 h-5.5" strokeWidth={2.2} />
              </div>
              <div className="text-[11px] uppercase tracking-wider text-ink-soft font-bold mb-2">{p.eyebrow}</div>
              <h3 className="text-[22px] lg:text-[24px] font-bold text-ink leading-[1.15] mb-3 tracking-tight">{p.title}</h3>
              <p className="text-[14.5px] text-ink-muted leading-relaxed">{p.body}</p>

              <div className="mt-7 pt-6 border-t border-rule">
                <div className="text-[26px] font-extrabold text-coral tabular tracking-tight leading-none mb-2">{p.accentText}</div>
                <div className="text-[12px] text-ink-soft leading-snug">{p.accentSub}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
