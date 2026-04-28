import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingDown, RefreshCw, Calculator, LineChart, Target, ShieldCheck, Sparkles, Phone } from "lucide-react";

const CALCS = [
  {
    to: "/calculators/od-lap",
    icon: TrendingDown,
    tag: "Most asked",
    title: "OD → LAP saving",
    body: "Quantify the lifetime interest you save by converting an interest-only Overdraft into an amortising Loan Against Property.",
    accent: "from-blue-deep to-blue-bright",
  },
  {
    to: "/calculators/balance-transfer",
    icon: RefreshCw,
    title: "Balance Transfer break-even",
    body: "Months until BT processing fee + stamp duty are recovered through a lower EMI on the new loan.",
    accent: "from-navy to-blue-deep",
  },
  {
    to: "/calculators/emi",
    icon: Calculator,
    title: "EMI calculator",
    body: "Standard amortising-EMI calculator — for any rate, ticket and tenure across every loan family.",
    accent: "from-blue-deep to-navy",
  },
  {
    to: "/calculators/las-ltv",
    icon: LineChart,
    title: "LAS LTV calculator",
    body: "Eligible loan against your shares, mutual funds, sovereign gold bonds and ETFs — tier-aware LTV per script class.",
    accent: "from-navy-deep to-blue-deep",
  },
  {
    to: "/calculators/eligibility",
    icon: Target,
    title: "Eligibility calculator",
    body: "Indicative ticket size from income (FOIR) or property value (LTV). 30-second answer for any loan family.",
    accent: "from-blue to-blue-deep",
  },
];

export default function CalculatorsIndexPage() {
  return (
    <div>
      <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-1/3 -left-1/4 w-[820px] h-[820px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.4) 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white mb-5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
          <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-3">Calculators</div>
          <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em] max-w-[820px]">
            Five calculators tuned to our panel,
            <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
              run before you run a meeting.
            </span>
          </h1>
          <p className="mt-5 text-[15px] lg:text-[16px] text-white/70 leading-relaxed max-w-[640px]">
            Every number here uses live partner-rate floors from our 19-lender catalogue. What you see is what we negotiate against.
          </p>
        </div>
      </section>

      <section className="bg-surface-2 py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CALCS.map((c) => (
              <Link key={c.to} href={c.to}
                className="group rounded-3xl bg-white border border-rule overflow-hidden hover:border-blue/30 hover:shadow-xl hover:shadow-blue/5 transition flex flex-col">
                <div className={`relative h-28 bg-gradient-to-br ${c.accent} flex items-end justify-between p-5`}>
                  <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 backdrop-blur grid place-items-center text-white">
                    <c.icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  {c.tag && (
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-white/20 border border-white/30 text-white px-2 py-1 rounded-full">{c.tag}</span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[16.5px] font-bold text-ink mb-2 tracking-tight">{c.title}</h3>
                  <p className="text-[13.5px] text-ink-muted leading-relaxed mb-5 flex-1">{c.body}</p>
                  <span className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-blue group-hover:gap-2 transition-all">
                    Open <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-rule py-12">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8 grid sm:grid-cols-3 gap-4">
          {[
            { i: ShieldCheck, t: "0% Foreclosure",  s: "Statpro guarantee on every new sanction" },
            { i: Sparkles,    t: "₹0 our fee",      s: "Lender pays us, you pay nothing" },
            { i: Phone,       t: "Single RM",       s: "One person owns your file end-to-end" },
          ].map(({ i: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl bg-surface-2 border border-rule px-4 py-3">
              <Icon className="w-4 h-4 text-blue shrink-0" strokeWidth={2.4} />
              <div>
                <div className="text-[13px] font-bold text-ink">{t}</div>
                <div className="text-[11.5px] text-ink-muted">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
