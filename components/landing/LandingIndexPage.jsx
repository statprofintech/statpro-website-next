import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Building2, KeyRound, LineChart, Home, Briefcase, Wallet,
} from "lucide-react";

const PRODUCTS = [
  {
    code: "LAP", icon: Building2, color: "from-blue-deep to-blue",
    title: "Loan Against Property",
    parentTo: "/lap",
    pages: [
      { to: "/lp/lap/fresh",            title: "Fresh LAP for promoters",      body: "Up to ₹10 Cr first-mortgage on your property — 11-lender panel pitch in parallel." },
      { to: "/lp/lap/bt-topup",         title: "Balance Transfer + Top-up",     body: "Move + top-up in one sanction. ₹38L typical saving on a ₹1.5 Cr balance." },
      { to: "/lp/lap/dropline-od",       title: "Dropline OD",                    body: "Pay interest only on what you draw. Cyclical-cash-flow friendly." },
      { to: "/lp/lap/special-purpose",   title: "Special-purpose collateral",     body: "Hospitals, schools, hotels — funded by specialist NBFCs." },
      { to: "/lp/lap/industrial",        title: "Industrial property",            body: "Sheds, warehouses, factories — SME-NBFC desks that get it." },
      { to: "/lp/lap/self-employed",     title: "Self-employed LAP",              body: "ITR + GST + bank trail — without salary-slip filter." },
    ],
  },
  {
    code: "LRD", icon: KeyRound, color: "from-emerald-700 to-emerald-500",
    title: "Loan Against Rental",
    parentTo: "/lrd",
    pages: [
      { to: "/lp/lrd/mall-office",      title: "Mall / office owner",           body: "Discount 20 yrs of rent into capital today. HDFC/Kotak at 8.20%." },
      { to: "/lp/lrd/multi-tenant",      title: "Multi-tenant complex",          body: "Weighted-avg lessee credit, single sanction." },
      { to: "/lp/lrd/lrd-vs-lap",        title: "LRD vs LAP",                     body: "Why rented property gets 75 bps sharper on LRD." },
      { to: "/lp/lrd/nri-landlord",      title: "NRI landlord",                   body: "Repatriable structure, NRO escrow, FEMA-compliant." },
      { to: "/lp/lrd/hospital-hotel",    title: "Hospital / hotel building",      body: "Operator-credit underwriting via specialist NBFCs." },
    ],
  },
  {
    code: "LAS", icon: LineChart, color: "from-violet-700 to-purple-500",
    title: "Loan Against Securities",
    parentTo: "/las",
    pages: [
      { to: "/lp/las/t-plus-one",       title: "T+1 sanction",                   body: "Pledge today, draw tomorrow morning. JioCredit NSDL route." },
      { to: "/lp/las/margin-call",       title: "Margin-call protection",         body: "5–7 day cure window. No surprise liquidations." },
      { to: "/lp/las/vs-sell",           title: "LAS vs selling shares",          body: "Save LTCG + keep the next leg of compounding." },
      { to: "/lp/las/mf-heavy",          title: "Mutual-fund heavy portfolio",     body: "75% LTV on debt MFs via Mirae Asset." },
      { to: "/lp/las/promoter-pledge",   title: "Promoter / founder pledge",      body: "Listed-co holdings, voting rights retained, SEBI handled." },
    ],
  },
  {
    code: "HL", icon: Home, color: "from-cyan-700 to-sky-400",
    title: "Home Loan",
    parentTo: "/hl",
    pages: [
      { to: "/lp/hl/first-time-buyer",  title: "First-time buyer",                body: "Up to 90% LTV, PMAY-CLSS check, floor 7.15%." },
      { to: "/lp/hl/balance-transfer",   title: "Balance Transfer + Top-up",      body: "RBI 0% foreclosure + Statpro guarantee. Move + top-up." },
      { to: "/lp/hl/self-employed",      title: "Self-employed HL",               body: "ITR + GST + bank trail underwriting." },
      { to: "/lp/hl/construction",       title: "Construction-linked",            body: "Slab-wise disbursal, pre-EMI option till handover." },
      { to: "/lp/hl/women-borrower",     title: "Women borrower",                  body: "5–10 bps lower rate, 1% lower stamp duty in WB." },
    ],
  },
  {
    code: "BL", icon: Briefcase, color: "from-amber-700 to-yellow-500",
    title: "Business Loan",
    parentTo: "/bl",
    pages: [
      { to: "/lp/bl/sme-stack",         title: "SME unsecured stack",            body: "₹75 L/lender × 5 = ₹3.75 Cr unsecured combined." },
      { to: "/lp/bl/working-capital",    title: "Working-capital line (Dropline OD)", body: "Pay-as-you-use. Cyclical-cash-flow friendly." },
      { to: "/lp/bl/doctor-loan",        title: "Doctor's loan",                  body: "11.25% on HDFC Doctor Loan. Equipment bundling available." },
      { to: "/lp/bl/equipment-finance",  title: "Equipment finance",              body: "Asset-backed. 200–400 bps below unsecured BL." },
      { to: "/lp/bl/women-led",          title: "Women-led business",             body: "50–100 bps lower + reduced processing fee." },
    ],
  },
  {
    code: "PL", icon: Wallet, color: "from-rose-700 to-pink-500",
    title: "Personal Loan",
    parentTo: "/pl",
    pages: [
      { to: "/lp/pl/lowest-rate",       title: "Lowest-rate PL",                  body: "Floor 9.90% — for clean salaried CIBIL 800+ profiles." },
      { to: "/lp/pl/debt-consolidation", title: "Debt consolidation",             body: "Roll up credit-card debt at ~12%. Save ~₹1.4L year 1." },
      { to: "/lp/pl/medical-education",  title: "Medical / education",            body: "Same-day medical sanction. Education with moratorium." },
      { to: "/lp/pl/wedding",            title: "Wedding PL",                      body: "Same-day pre-approved. Direct-to-vendor disbursal." },
      { to: "/lp/pl/salary-account",     title: "Salary-account pre-approved",    body: "10-second sanction. 50 bps below published floor." },
    ],
  },
];

export default function LandingIndexPage() {
  const total = PRODUCTS.reduce((acc, p) => acc + p.pages.length, 0);
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-1/3 -left-1/4 w-[820px] h-[820px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.4) 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white mb-5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
          <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-3">All landing pages</div>
          <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em] max-w-[880px]">
            {total} pages across 6 loan families,
            <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
              one for every borrower scenario.
            </span>
          </h1>
          <p className="mt-5 text-[15px] lg:text-[16px] text-white/70 leading-relaxed max-w-[640px]">
            Each landing page is built around a single use-case — Balance Transfer, NRI landlord, Margin-call protection, Doctor's loan, Wedding PL, etc. Pick the one that matches your scenario, or scan all and pick the closest fit.
          </p>
        </div>
      </section>

      {/* Per-family groups */}
      <section className="bg-surface-2 py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-12">
          {PRODUCTS.map((prod) => (
            <div key={prod.code}>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${prod.color} text-white grid place-items-center shadow-md`}>
                    <prod.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-ink-soft font-bold">{prod.code} · {prod.pages.length} pages</div>
                    <h2 className="text-[20px] font-bold text-ink tracking-tight leading-tight">{prod.title}</h2>
                  </div>
                </div>
                <Link href={prod.parentTo} className="text-[13px] font-semibold text-blue hover:text-blue-hover inline-flex items-center gap-1">
                  Main {prod.code} page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {prod.pages.map((p) => (
                  <Link key={p.to} href={p.to}
                    className="group rounded-2xl bg-white border border-rule p-5 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition flex flex-col">
                    <h3 className="text-[15px] font-bold text-ink mb-1.5 tracking-tight">{p.title}</h3>
                    <p className="text-[12.5px] text-ink-muted leading-relaxed mb-4 flex-1">{p.body}</p>
                    <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-blue group-hover:gap-2 transition-all">
                      View page <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
