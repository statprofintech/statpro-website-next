"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu, X, ChevronDown, ArrowRight, Building2, KeyRound, LineChart, Home,
  Briefcase, Wallet, Calculator, RefreshCw, TrendingDown, Sparkles, MapPin, Phone,
} from "lucide-react";
import Logo from "@/components/Logo";

const PRIMARY = [
  {
    label: "Loan Against Property", to: "/lap", tag: "LAP", icon: Building2,
    rate: "7.90%", desc: "Up to ₹10 Cr against residential, commercial or industrial property.",
  },
  {
    label: "Loan Against Rental", to: "/lrd", tag: "LRD", icon: KeyRound,
    rate: "7.95%", desc: "Up to ₹31 Cr against your commercial-property rental income.",
  },
  {
    label: "Loan Against Securities", to: "/las", tag: "LAS", icon: LineChart,
    rate: "9.25%", desc: "Pledge shares & MFs without selling. Disbursal in 10 minutes.",
  },
];

const SECONDARY = [
  { label: "Home Loan",     to: "/hl", tag: "HL", icon: Home,      rate: "7.20%",  desc: "Purchase, BT, top-up" },
  { label: "Business Loan", to: "/bl", tag: "BL", icon: Briefcase, rate: "15.50%", desc: "Unsecured, for businesses" },
  { label: "Personal Loan", to: "/pl", tag: "PL", icon: Wallet,    rate: "9.90%",  desc: "For salaried individuals" },
];

const QUICK_LINKS = [
  { label: "OD → LAP saving",   to: "/#calculator",  icon: TrendingDown, sub: "Refinance calculator" },
  { label: "Balance Transfer",  to: "/#calculator",  icon: RefreshCw,    sub: "Months to break even" },
  { label: "EMI calculator",    to: "/#calculator",  icon: Calculator,   sub: "Monthly outflow" },
  { label: "Our 19 lenders",    to: "/lenders",      icon: Sparkles,     sub: "Banks · NBFCs · HFCs · SFBs" },
];

const NAV = [
  { label: "Lenders", to: "/lenders" },
  { label: "About",   to: "/about" },
];

// Landing pages (v2 — main-site themed, /lp/<family>/<slug>)
const LANDING = {
  LAP: [
    { label: "BT + Top-up",         to: "/lp/lap/bt-topup",          tease: "Move + top-up, one sanction." },
    { label: "Dropline OD",         to: "/lp/lap/dropline-od",       tease: "Pay only on what's drawn." },
    { label: "Special-purpose",     to: "/lp/lap/special-purpose",   tease: "Hospitals, schools, hotels." },
    { label: "Industrial property", to: "/lp/lap/industrial",        tease: "Sheds, warehouses, factories." },
    { label: "Self-employed",       to: "/lp/lap/self-employed",     tease: "Bank-statement underwriting." },
    { label: "Fresh promoter",      to: "/lp/lap/fresh",             tease: "First mortgage on owned property." },
  ],
  LRD: [
    { label: "Mall / Office owner", to: "/lp/lrd/mall-office",       tease: "Discount 20 yrs of rental." },
    { label: "Multi-tenant",        to: "/lp/lrd/multi-tenant",      tease: "6+ tenants, anchor scoring." },
    { label: "NRI landlord",        to: "/lp/lrd/nri-landlord",      tease: "Repatriable through FEMA." },
    { label: "LRD vs LAP",          to: "/lp/lrd/lrd-vs-lap",        tease: "When LRD beats LAP." },
    { label: "Hospital / Hotel",    to: "/lp/lrd/hospital-hotel",    tease: "Going-concern rental." },
  ],
  LAS: [
    { label: "T+1 sanction",        to: "/lp/las/t-plus-one",        tease: "Pledge today, draw tomorrow." },
    { label: "Margin-call relief",  to: "/lp/las/margin-call",       tease: "Cure window, no auto-sell." },
    { label: "LAS vs Sell",         to: "/lp/las/vs-sell",           tease: "Pledge — don't sell." },
    { label: "MF-heavy portfolio",  to: "/lp/las/mf-heavy",          tease: "Up to 75% LTV on debt MF." },
    { label: "Promoter pledge",     to: "/lp/las/promoter-pledge",   tease: "Listed-company disclosure-clean." },
  ],
  HL: [
    { label: "First-time buyer",    to: "/lp/hl/first-time-buyer",   tease: "Sharper than your bank's quote." },
    { label: "Balance Transfer",    to: "/lp/hl/balance-transfer",   tease: "Refinance + top-up, one sanction." },
    { label: "Self-employed",       to: "/lp/hl/self-employed",      tease: "HFC desks underwrite cash flow." },
    { label: "Construction-linked", to: "/lp/hl/construction",       tease: "Tranched against milestones." },
    { label: "Women borrower",      to: "/lp/hl/women-borrower",     tease: "Stamp-duty + rate concession." },
  ],
  BL: [
    { label: "SME stack",           to: "/lp/bl/sme-stack",          tease: "Stack ₹75 L × 5 lenders." },
    { label: "Working capital",     to: "/lp/bl/working-capital",    tease: "OD / CC for cyclical cash." },
    { label: "Equipment finance",   to: "/lp/bl/equipment-finance",  tease: "Asset is the collateral." },
    { label: "Doctor loan",         to: "/lp/bl/doctor-loan",        tease: "Specialist desks, sharper rate." },
    { label: "Women-led business",  to: "/lp/bl/women-led",          tease: "Concessional rate variants." },
  ],
  PL: [
    { label: "Lowest rate",         to: "/lp/pl/lowest-rate",        tease: "Beat the salary-bank quote." },
    { label: "Debt consolidation",  to: "/lp/pl/debt-consolidation", tease: "5 EMIs → 1 at 12%." },
    { label: "Medical / education", to: "/lp/pl/medical-education",  tease: "T+1 sanction, NEFT in 48 hr." },
    { label: "Wedding",             to: "/lp/pl/wedding",            tease: "Tiered tickets, fast track." },
    { label: "Salary-account beat", to: "/lp/pl/salary-account",     tease: "Cheaper than pre-approved." },
  ],
};

const FAMILIES = ["LAP", "LRD", "LAS", "HL", "BL", "PL"];

// Curated cross-family popular set for the "All" tab
const POPULAR_ALL = [
  { fam: "LAP", item: LANDING.LAP[0] },
  { fam: "LAP", item: LANDING.LAP[1] },
  { fam: "LRD", item: LANDING.LRD[0] },
  { fam: "LRD", item: LANDING.LRD[2] },
  { fam: "LAS", item: LANDING.LAS[0] },
  { fam: "LAS", item: LANDING.LAS[2] },
  { fam: "HL",  item: LANDING.HL[0] },
  { fam: "HL",  item: LANDING.HL[1] },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [useCaseTab, setUseCaseTab] = useState("ALL");
  const pathname = usePathname() || "/";

  useEffect(() => { setOpen(false); setSolutionsOpen(false); }, [pathname]);

  const useCaseItems =
    useCaseTab === "ALL"
      ? POPULAR_ALL
      : LANDING[useCaseTab].map((item) => ({ fam: useCaseTab, item }));

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" aria-label="StatPro Fintech home" className="shrink-0">
          <Logo size={34} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[14px] font-medium">
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className={`px-3 py-2 transition flex items-center gap-1 ${solutionsOpen ? "text-ink" : "text-ink-2 hover:text-ink"}`}>
              Solutions
              <ChevronDown className={`w-4 h-4 opacity-60 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[1080px]">
                <div className="relative rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-deep text-white border border-white/10 shadow-2xl shadow-ink/30 overflow-hidden">
                  {/* Decorative glow */}
                  <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full opacity-50 pointer-events-none"
                    style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.35) 0%, transparent 70%)" }} />
                  <div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full opacity-40 pointer-events-none"
                    style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)" }} />

                  <div className="relative grid grid-cols-12">
                    {/* Left: All 6 products in equal-weight 3×2 grid */}
                    <div className="col-span-8 p-5 border-r border-white/10">
                      <div className="flex items-baseline justify-between mb-3 px-1">
                        <span className="text-[10.5px] uppercase tracking-wider text-blue-bright font-bold">Six loan products, one application</span>
                        <span className="text-[11px] text-white/55">Panel-floor rates · Apr 2026</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[...PRIMARY, ...SECONDARY].map((it) => (
                          <Link
                            key={it.tag}
                            href={it.to}
                            className="group relative rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.10] hover:border-blue-bright/40 p-4 transition flex flex-col"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-9 h-9 rounded-lg bg-white/[0.08] border border-white/10 text-blue-bright grid place-items-center group-hover:bg-blue group-hover:text-white group-hover:border-blue transition">
                                <it.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                              </div>
                              <span className="font-mono text-[10px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-1.5 py-0.5 rounded font-bold">{it.tag}</span>
                            </div>
                            <div className="text-[13.5px] font-bold text-white mb-1 leading-tight">{it.label}</div>
                            <div className="text-[11.5px] text-white/60 leading-snug mb-3 flex-1">{it.desc}</div>
                            <div className="pt-2.5 border-t border-white/10 flex items-baseline justify-between">
                              <div>
                                <div className="text-[17px] font-extrabold text-blue-bright tabular tracking-tight leading-none">{it.rate}</div>
                                <div className="text-[10px] text-white/45 mt-0.5">starting</div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-white/45 group-hover:text-blue-bright group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right: Quick tools + featured */}
                    <div className="col-span-4 p-5 flex flex-col bg-black/15 backdrop-blur-sm">
                      <div className="text-[10.5px] uppercase tracking-wider text-blue-bright font-bold mb-3 px-1">
                        Quick tools
                      </div>
                      <div className="space-y-1 flex-1">
                        {QUICK_LINKS.map((q) => (
                          <Link
                            key={q.label}
                            href={q.to}
                            className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white/[0.08] transition"
                          >
                            <div className="w-8 h-8 rounded-md bg-white/[0.08] border border-white/10 grid place-items-center shrink-0">
                              <q.icon className="w-[14px] h-[14px] text-blue-bright" strokeWidth={2.2} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[12.5px] font-semibold text-white">{q.label}</div>
                              <div className="text-[10.5px] text-white/55">{q.sub}</div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-blue-bright group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>

                      {/* Featured CTA card */}
                      <div className="mt-3 rounded-xl bg-blue/20 border border-blue-bright/40 p-3.5 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-bright" strokeWidth={2.5} />
                          <span className="text-[10px] uppercase tracking-wider font-bold text-blue-bright">Most asked</span>
                        </div>
                        <div className="text-[13px] font-bold text-white mb-1">Balance Transfer + Top-up</div>
                        <div className="text-[11px] text-white/70 mb-2.5 leading-snug">
                          Move your loan to a cheaper lender, unlock a fresh top-up at the same low rate.
                        </div>
                        <Link
                          href="/apply"
                          className="inline-flex items-center gap-1 text-[12px] font-semibold text-blue-bright hover:text-white transition"
                        >
                          Get BT quotes <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row — popular use-cases strip with family tabs */}
                  <div className="relative border-t border-white/10 px-5 pt-3 pb-4 bg-black/20">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[10.5px] uppercase tracking-wider text-blue-bright font-bold mr-2">Use-cases ·</span>
                        {["ALL", ...FAMILIES].map((t) => {
                          const active = useCaseTab === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setUseCaseTab(t)}
                              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition ${
                                active
                                  ? "bg-blue-bright text-navy-deep"
                                  : "text-white/65 hover:text-white hover:bg-white/[0.06]"
                              }`}
                            >
                              {t === "ALL" ? "All" : t}
                            </button>
                          );
                        })}
                      </div>
                      <Link href="/landingpage" className="text-[11px] text-blue-bright font-semibold inline-flex items-center gap-1 hover:text-white">
                        See all 31 <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {useCaseItems.map((p) => (
                        <Link
                          key={p.item.to}
                          href={p.item.to}
                          className="group flex items-center gap-2 px-2.5 py-2 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.10] hover:border-blue-bright/40 transition"
                        >
                          <span className="font-mono text-[9.5px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-1.5 py-0.5 rounded font-bold tracking-wider shrink-0">
                            {p.fam}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11.5px] font-semibold text-white truncate">{p.item.label}</div>
                            <div className="text-[10px] text-white/50 truncate">{p.item.tease}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer bar */}
                  <div className="relative px-5 py-3 border-t border-white/10 bg-black/25 backdrop-blur-sm flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-4 text-white/70">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-bright" /> Active in 25+ WB cities
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-bright" /> Same-day RM call-back
                      </span>
                    </div>
                    <Link href="/lenders" className="text-blue-bright font-semibold hover:text-white inline-flex items-center gap-1">
                      Compare all 19 lenders <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV.map((it) => {
            const isActive = pathname === it.to || pathname.startsWith(it.to + "/");
            return (
              <Link
                key={it.label}
                href={it.to}
                className={`px-3 py-2 transition ${isActive ? "text-ink font-semibold" : "text-ink-2 hover:text-ink"}`}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/client/sign-in" className="text-[14px] font-medium text-ink-2 hover:text-ink px-3 py-2">Sign In</Link>
          <Link
            href="/apply"
            className="inline-flex items-center gap-1.5 bg-blue text-white hover:bg-blue-hover transition text-[14px] font-semibold px-4 py-2.5 rounded-lg shadow-lg shadow-blue/30"
          >
            Apply now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* SEO-only link rail. Invisible to users (sr-only), but the entire
          mega-menu inventory — every /lp/* family page — is in the static
          HTML so crawlers see the internal-linking signal without needing
          to execute JS or hover the dropdown. */}
      <nav aria-label="Site index" className="sr-only">
        <h2>All loan products and landing pages</h2>
        <ul>
          {[...PRIMARY, ...SECONDARY].map((it) => (
            <li key={it.to}>
              <Link href={it.to}>{it.label}</Link>
            </li>
          ))}
          {QUICK_LINKS.map((it) => (
            <li key={it.label}>
              <Link href={it.to}>{it.label}</Link>
            </li>
          ))}
          {FAMILIES.flatMap((fam) =>
            (LANDING[fam] || []).map((item) => (
              <li key={item.to}>
                <Link href={item.to}>
                  {fam}: {item.label}
                </Link>
              </li>
            ))
          )}
          {NAV.map((it) => (
            <li key={it.to}>
              <Link href={it.to}>{it.label}</Link>
            </li>
          ))}
          <li><Link href="/apply">Apply</Link></li>
          <li><Link href="/calculators">Calculators</Link></li>
        </ul>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-rule">
          <div className="px-6 py-4 space-y-1">
            <div className="text-[11px] uppercase tracking-wider text-ink-soft font-semibold pt-2 pb-1">
              Primary focus
            </div>
            {PRIMARY.map((it) => (
              <Link key={it.tag} href={it.to} className="flex items-center gap-3 py-2.5 text-ink">
                <div className="w-8 h-8 rounded-lg bg-ink text-white grid place-items-center shrink-0">
                  <it.icon className="w-4 h-4" strokeWidth={2.2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[14px]">{it.label}</div>
                  <div className="text-[11px] text-ink-soft tabular">from {it.rate}</div>
                </div>
                <span className="font-mono text-[10px] text-blue bg-blue-soft px-1.5 py-0.5 rounded font-bold">{it.tag}</span>
              </Link>
            ))}
            <div className="text-[11px] uppercase tracking-wider text-ink-soft font-semibold pt-3 pb-1">
              We also do
            </div>
            {SECONDARY.map((it) => (
              <Link key={it.label} href={it.to} className="flex items-center justify-between py-2 text-ink-2">
                <span>{it.label}</span>
                <span className="text-[11px] text-ink-soft tabular">from {it.rate}</span>
              </Link>
            ))}

            {/* Use-cases strip — same family tabs as the desktop mega */}
            <div className="border-t border-rule my-3" />
            <div className="flex items-center justify-between mb-2">
              <div className="text-[11px] uppercase tracking-wider text-ink-soft font-semibold">
                Popular use-cases
              </div>
              <Link href="/landingpage" className="text-[11px] text-blue font-semibold inline-flex items-center gap-1">
                See all 31 <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="-mx-1 mb-2 overflow-x-auto">
              <div className="flex items-center gap-1.5 px-1 pb-1">
                {["ALL", ...FAMILIES].map((t) => {
                  const active = useCaseTab === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setUseCaseTab(t)}
                      className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold transition border ${
                        active
                          ? "bg-ink text-white border-ink"
                          : "bg-white text-ink-2 border-rule hover:border-blue/40"
                      }`}
                    >
                      {t === "ALL" ? "All" : t}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {useCaseItems.map((p) => (
                <Link
                  key={p.item.to}
                  href={p.item.to}
                  className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-rule bg-surface-2 hover:border-blue/40 hover:bg-white transition"
                >
                  <span className="font-mono text-[10px] text-blue bg-blue-soft border border-blue/15 px-1.5 py-0.5 rounded font-bold tracking-wider shrink-0">
                    {p.fam}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-ink truncate">{p.item.label}</div>
                    <div className="text-[11px] text-ink-soft truncate">{p.item.tease}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-ink-soft group-hover:text-blue transition shrink-0" />
                </Link>
              ))}
            </div>

            <div className="border-t border-rule my-3" />
            {NAV.map((it) => (
              <Link key={it.label} href={it.to} className="block py-2 text-ink">{it.label}</Link>
            ))}
            <Link
              href="/apply"
              className="mt-3 inline-flex items-center justify-center w-full bg-blue hover:bg-blue-hover text-white px-5 py-3 text-sm font-semibold rounded-lg shadow-lg shadow-blue/30"
            >
              Apply now <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
