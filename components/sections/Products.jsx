import Link from "next/link";
import { ArrowUpRight, Building2, KeyRound, LineChart, Home, Briefcase, Wallet } from "lucide-react";
import { familyStats } from "@/lib/lenders";
import { fmtPct } from "@/lib/finance";

const PRIMARY = [
  {
    tag: "LAP",
    to: "/lap",
    icon: Building2,
    title: "Loan Against Property",
    body: "Up to ₹10 Cr against residential, commercial or industrial property. Term loan, dropline OD, balance transfer + top-up.",
    bullets: ["LTV up to 65% of market value", "Tenure up to 15 years", "BT + Top-up across 19 lenders"],
  },
  {
    tag: "LRD",
    to: "/lrd",
    icon: KeyRound,
    title: "Loan Against Rental",
    body: "Unlock liquidity from your commercial-property rental income. Up to 85% of NPV of future rentals. Specialist NBFC panel.",
    bullets: ["Up to ₹31 Cr on a single LRD", "Lessee must be Companies Act registered", "Escrow-backed structure"],
  },
  {
    tag: "LAS",
    to: "/las",
    icon: LineChart,
    title: "Loan Against Securities",
    body: "Borrow against shares & mutual funds without selling. Overdraft revolving — pay interest only on what you use. Disbursal in 10 minutes.",
    bullets: ["50% LTV on equities · 75% on debt MFs", "Margin-call safety net", "Preferred partner: JioCredit"],
  },
];

const SECONDARY = [
  { code: "HL", to: "/hl", icon: Home,      title: "Home Loan",     body: "New purchase · BT · Top-up" },
  { code: "BL", to: "/bl", icon: Briefcase, title: "Business Loan", body: "Unsecured · for businesses" },
  { code: "PL", to: "/pl", icon: Wallet,    title: "Personal Loan", body: "For salaried individuals"   },
];

// Panel-floor rates — the best ROI we negotiate across our 19 lenders.
// Authoritative for marketing surfaces; the per-lender JSON catalogue is for the lenders page.
const PANEL_FLOOR_RATES = {
  LAP: { min: 7.90,  max: 18.0 },
  LRD: { min: 7.95,  max: 12.0 },
  LAS: { min: 9.25,  max: 13.0 },
  HL:  { min: 7.20,  max: 13.7 },
  BL:  { min: 15.50, max: 24.0 },
  PL:  { min: 9.90,  max: 24.0 },
};
const FALLBACK_LENDERS = { LAP: 11, LRD: 4, LAS: 2, HL: 12, BL: 9, PL: 8 };

function rateRange(family) {
  const s = familyStats(family);
  const floor = PANEL_FLOOR_RATES[family];
  const lenders = Math.max(s.lenderCount ?? 0, FALLBACK_LENDERS[family] ?? 0);
  return { min: floor.min, max: floor.max, lenders };
}

export default function Products() {
  return (
    <section id="solutions" className="bg-surface-2 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute -top-20 -right-32 w-[420px] h-[420px] bg-blue-soft rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] bg-navy-soft rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8 mb-14 flex-wrap">
          <div className="max-w-[680px]">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Solutions</div>
            <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
              Three products built to lower your cost of capital.
            </h2>
          </div>
          <Link href="/lenders" className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink-2 hover:text-blue transition">
            See lender network <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Primary tiles — equal-width 3-col grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PRIMARY.map((p) => {
            const r = rateRange(p.tag);
            return (
              <Link
                key={p.tag}
                href={p.to}
                className="group rounded-3xl bg-white border border-rule p-7 lg:p-8 hover:border-blue/40 hover:shadow-xl hover:shadow-blue/5 transition flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-ink text-white grid place-items-center">
                    <p.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <span className="font-mono text-[10px] text-blue bg-blue-soft px-2 py-1 rounded-md font-semibold">{p.tag}</span>
                </div>

                <h3 className="text-[22px] font-bold text-ink leading-[1.2] mb-3 tracking-tight">{p.title}</h3>
                <p className="text-[14.5px] text-ink-muted leading-relaxed mb-6">{p.body}</p>

                <ul className="space-y-2.5 mb-8">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13.5px] text-ink-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-rule flex items-end justify-between">
                  <div>
                    <div className="text-[28px] font-bold text-ink tabular tracking-tight leading-none">{fmtPct(r.min, 2)}</div>
                    <div className="text-[11px] text-ink-soft mt-1">starting · across {r.lenders} lenders · floating</div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-blue group-hover:gap-2 transition-all">
                    Explore <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Secondary strip */}
        <div className="mt-10 pt-10 border-t border-rule">
          <div className="text-[11px] uppercase tracking-wider text-ink-soft font-semibold mb-4">We also do</div>
          <div className="grid sm:grid-cols-3 gap-4">
            {SECONDARY.map((s) => {
              const r = rateRange(s.code);
              return (
                <Link
                  key={s.code}
                  href={s.to}
                  className="group flex items-center gap-4 rounded-2xl bg-white border border-rule p-4 lg:p-5 hover:border-blue/40 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-soft text-blue grid place-items-center">
                    <s.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-ink text-[14.5px]">{s.title}</span>
                      <span className="font-mono text-[10px] text-ink-soft">{s.code}</span>
                    </div>
                    <div className="text-[12.5px] text-ink-muted">{s.body}</div>
                  </div>
                  <span className="text-[12px] font-semibold text-ink-2 tabular">from {fmtPct(r.min, 2)}</span>
                  <ArrowUpRight className="w-4 h-4 text-ink-soft group-hover:text-blue transition" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
