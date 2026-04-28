"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, ArrowUpRight, Check, X, Sparkles, FileText, Phone,
  Calculator, ShieldCheck, Clock, MinusCircle, PlusCircle, ChevronDown, ChevronUp,
  ChevronLeft, ChevronRight, Pause, Play, Wallet, Activity, Repeat, Building,
  TrendingDown, RefreshCw, LineChart, Receipt, Zap, MapPin, Banknote,
} from "lucide-react";
import { emi, fmtINR, fmtINRFull, fmtPct } from "@/lib/finance";

/**
 * Product page layout shared by LAP / LRD / LAS / HL / BL / PL pages.
 * Pass a single `config` object with the per-product copy + numbers.
 */
export default function ProductPageLayout({ config }) {
  return (
    <div>
      <Hero c={config} />
      <ValueStrip c={config} />
      <Eligibility c={config} />
      <RateTable c={config} />
      {config.variants && <Variants c={config} />}
      {config.droplineOd && <DroplineODSpotlight c={config} />}
      {config.btTopup && <BalanceTransferStrip c={config} />}
      {config.eligibilityCriteria && <EligibilityCriteria c={config} />}
      <Process c={config} />
      <Documents c={config} />
      {config.fees && <Fees c={config} />}
      {config.foreclosureApplies !== false && <ForeclosureGuarantee c={config} />}
      <Faq c={config} />
      {config.relatedCalcs && <RelatedCalculators c={config} />}
      <FinalCta c={config} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
const SLIDE_DURATION = 3500;

function Hero({ c }) {
  const slides = c.heroSlides || [
    { id: "default", eyebrow: c.tagline, title: c.title, lede: c.lede, bullets: c.heroBullets, panel: "STATS" },
  ];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const slide = slides[idx];

  return (
    <section
      className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.4) 0%, rgba(79,139,255,0.15) 30%, transparent 60%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[640px] h-[640px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.32) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }} />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-[11px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-2.5 py-1 rounded-md font-bold">{c.tag}</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-white/55 font-semibold">{c.tagline}</span>
          </div>
        </div>

        <HeroSlide key={idx} slide={slide} c={c} />

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/apply" className="inline-flex items-center gap-2 bg-blue hover:bg-blue-hover text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
            Get this rate from {c.lenderCount} lenders <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/lenders" className="inline-flex items-center gap-1.5 text-white/85 hover:text-white px-5 py-3.5 font-semibold text-[15px] border border-white/15 rounded-xl hover:bg-white/[0.06] transition">
            See lender network
          </Link>
        </div>

        {slides.length > 1 && (
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => setPaused((v) => !v)}
              className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/[0.08] text-white/75 hover:text-white transition"
              aria-label={paused ? "Resume" : "Pause"}
            >
              {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${i === idx ? "w-10 bg-blue-bright" : "w-3 bg-white/25 hover:bg-white/40"}`}
                />
              ))}
            </div>
            <div className="ml-auto flex items-center gap-1">
              <button onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)} aria-label="Previous"
                className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/[0.08] text-white/75 hover:text-white transition">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setIdx((i) => (i + 1) % slides.length)} aria-label="Next"
                className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/[0.08] text-white/75 hover:text-white transition">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[11px] tabular text-white/45 font-mono">
              {String(idx + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")} · {slide.eyebrow}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function HeroSlide({ slide, c }) {
  const Panel = HERO_PANELS[slide.panel] || HERO_PANELS.STATS;
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-start animate-fade-up">
      <div className="lg:col-span-7">
        {slide.eyebrow && (
          <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-4">
            {slide.eyebrow}
          </div>
        )}
        <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em]">
          {(() => {
            const dashIdx = slide.title.indexOf("—");
            if (dashIdx === -1) return <span>{slide.title}</span>;
            let first = slide.title.slice(0, dashIdx).trim();
            let rest = slide.title.slice(dashIdx + 1).trim();
            // Use comma instead of em-dash unless the first part already ends in punctuation.
            if (!/[.,?!:;]$/.test(first)) first += ",";
            // Capitalize first letter of the second (gradient) line.
            rest = rest.charAt(0).toUpperCase() + rest.slice(1);
            return (
              <>
                <span>{first}</span>{" "}
                <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                  {rest}
                </span>
              </>
            );
          })()}
        </h1>
        <p className="mt-5 text-[15px] lg:text-[16.5px] text-white/70 leading-relaxed max-w-[600px]">
          {slide.lede}
        </p>
        <ul className="mt-6 space-y-2.5 max-w-[600px]">
          {(slide.bullets || []).map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-relaxed">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-bright/20 border border-blue-bright/40 grid place-items-center shrink-0">
                <Check className="w-2.5 h-2.5 text-blue-bright" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5">
        <Panel c={c} slide={slide} />
      </div>
    </div>
  );
}

function Trust({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <Icon className="w-4 h-4 text-blue-bright" strokeWidth={2.2} />
      <span className="text-[11px] text-white/65 font-semibold">{label}</span>
    </div>
  );
}

// Hero right-side panels
const HERO_PANELS = {
  STATS: StatsPanel,
  RATES: RatesPanel,
  BT: BtPanel,
  COLLATERAL: CollateralPanel,
  OD: OdPanel,
  SPEED: SpeedPanel,
};

function PanelShell({ eyebrow, title, icon: Icon, children }) {
  return (
    <div className="rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="px-6 lg:px-7 pt-5 pb-4 border-b border-white/10 flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-bright animate-pulse" />
            <span className="text-[10.5px] uppercase tracking-wider font-bold text-blue-bright">{eyebrow}</span>
          </div>
          <div className="font-bold text-[16px] tracking-tight text-white">{title}</div>
        </div>
        {Icon && <Icon className="w-6 h-6 text-blue-bright/80" strokeWidth={1.8} />}
      </div>
      <div>{children}</div>
    </div>
  );
}

function StatsPanel({ c }) {
  return (
    <PanelShell eyebrow={`${c.tag} at a glance`} title={`The numbers behind ${c.tag}.`} icon={Banknote}>
      <div className="p-6 lg:p-7">
        <div className="grid grid-cols-2 gap-5">
          {c.stats.map((s) => (
            <div key={s.label} className="border-l-2 border-blue-bright/40 pl-3">
              <div className="text-[26px] lg:text-[30px] font-extrabold tabular tracking-tight leading-none text-white">
                {s.value}
              </div>
              <div className="mt-2 text-[11.5px] text-white/65 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
          <Trust icon={ShieldCheck} label={`${c.lenderCount} lenders`} />
          <Trust icon={Clock} label="7-day sanction" />
          <Trust icon={Phone} label="Single RM" />
        </div>
      </div>
    </PanelShell>
  );
}

function RatesPanel({ c, slide }) {
  const top = (c.rateTable || []).slice(0, 4);
  return (
    <PanelShell eyebrow="Top of the panel" title={`Sharpest ${c.tag} rates today.`} icon={TrendingDown}>
      <div className="p-5 lg:p-6 space-y-2">
        {top.map((r, i) => (
          <div key={r.lender} className={`flex items-center gap-3 rounded-xl border p-3 ${i === 0 ? "bg-blue-bright/10 border-blue-bright/30" : "bg-white/[0.03] border-white/10"}`}>
            <div className="w-8 h-8 rounded-md bg-white/[0.08] border border-white/10 grid place-items-center text-[10px] font-extrabold text-blue-bright">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-white truncate">{r.lender}</div>
              <div className="text-[10.5px] text-white/55 truncate">{r.category}</div>
            </div>
            <div className="text-right">
              <div className="text-[16px] font-extrabold tabular tracking-tight leading-none text-white">{r.rate}</div>
              <div className="text-[10px] text-white/55">starting</div>
            </div>
          </div>
        ))}
        <div className="text-[11px] text-white/55 pt-1 text-center">+{(c.rateTable?.length || 0) - top.length} more lenders</div>
      </div>
    </PanelShell>
  );
}

function BtPanel({ c }) {
  return (
    <PanelShell eyebrow="Balance Transfer + Top-up" title="Move + top-up in one shot." icon={RefreshCw}>
      <div className="p-6 lg:p-7">
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "11", l: "BT-active lenders" },
            { v: "₹0", l: "Pre-payment penalty (RBI)" },
            { v: "60d", l: "Typical close" },
            { v: "₹38L", l: "Saved ₹1.5 Cr / 7 yrs" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
              <div className="text-[24px] font-extrabold text-blue-bright tabular tracking-tight leading-none">{s.v}</div>
              <div className="mt-1.5 text-[11px] text-white/65 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl bg-blue/15 border border-blue-bright/30 p-3.5 text-[12px] text-white/85 leading-relaxed">
          Single sanction, single disbursal — top-up is added to the new loan at the same low rate.
        </div>
      </div>
    </PanelShell>
  );
}

function CollateralPanel() {
  const items = [
    { name: "Hospitals",         lenders: 6 },
    { name: "Schools & colleges",lenders: 5 },
    { name: "Hotels",            lenders: 4 },
    { name: "Warehouses",        lenders: 9 },
    { name: "Cold storage",      lenders: 5 },
    { name: "Industrial sheds",  lenders: 8 },
  ];
  return (
    <PanelShell eyebrow="What banks decline" title="Wider collateral acceptance." icon={Building}>
      <div className="p-5 lg:p-6 grid grid-cols-2 gap-2">
        {items.map((it) => (
          <div key={it.name} className="rounded-xl bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-[12px] font-semibold text-white">{it.name}</span>
              <span className="text-[10px] font-bold text-blue-bright tabular">{it.lenders}/19</span>
            </div>
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-bright to-blue-glow" style={{ width: `${(it.lenders / 19) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

function OdPanel() {
  return (
    <PanelShell eyebrow="Dropline OD" title="Pay-as-you-use overdraft." icon={Activity}>
      <div className="p-6 lg:p-7">
        <div className="text-[12.5px] text-white/75 leading-relaxed mb-4">
          A revolving overdraft against your property — interest only on the drawn balance, limit drops down quarterly.
        </div>
        <ul className="space-y-2.5">
          {[
            "Pay interest only on what you actually use",
            "Limit step-down quarterly — discipline + flexibility",
            "Best for cyclical or working-capital cash flows",
            "Convertible to term loan later if your needs stabilise",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2 text-[12.5px] text-white/80">
              <Check className="w-3.5 h-3.5 mt-0.5 text-blue-bright shrink-0" strokeWidth={3} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </PanelShell>
  );
}

function SpeedPanel() {
  const steps = [
    { d: "Day 0",  l: "Intake call" },
    { d: "Day 3",  l: "First sanction" },
    { d: "Day 7",  l: "Legal + technical" },
    { d: "Day 14", l: "Disbursal" },
  ];
  return (
    <PanelShell eyebrow="Speed to sanction" title="From intake to disbursal." icon={Zap}>
      <div className="p-6 lg:p-7">
        <ol className="relative space-y-4 pl-5 border-l-2 border-blue-bright/30">
          {steps.map((s, i) => (
            <li key={s.d} className="relative">
              <span className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-blue-bright text-navy-deep text-[10px] font-bold grid place-items-center">{i + 1}</span>
              <div className="font-mono text-[10.5px] text-blue-bright font-bold uppercase tracking-wider">{s.d}</div>
              <div className="text-[13px] text-white/85 font-semibold mt-0.5">{s.l}</div>
            </li>
          ))}
        </ol>
      </div>
    </PanelShell>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ValueStrip({ c }) {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Why us for {c.tag}</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            {c.valueHeadline}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {c.valueProps.map((v) => (
            <div key={v.title} className="rounded-2xl bg-surface-2 border border-rule p-6 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition">
              <div className="w-10 h-10 rounded-xl bg-ink text-white grid place-items-center mb-4">
                <v.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2 tracking-tight">{v.title}</h3>
              <p className="text-[14px] text-ink-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Eligibility({ c }) {
  const [propertyValue, setPropertyValue] = useState(c.elig.defaultPropertyValue);
  const [tenureYears, setTenureYears] = useState(c.elig.defaultTenure);
  const [rate, setRate] = useState(c.elig.defaultRate);

  const eligible = useMemo(() => propertyValue * (c.elig.ltvPct / 100), [propertyValue, c.elig.ltvPct]);
  const monthlyEmi = useMemo(() => emi(eligible, rate, tenureYears * 12), [eligible, rate, tenureYears]);

  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Indicative ticket</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              See what you'd qualify for, in 30 seconds.
            </h2>
            <p className="mt-5 text-[15px] text-ink-muted leading-relaxed max-w-[440px]">
              Move the sliders. Numbers are based on our panel's typical {c.tag} terms — actual offer depends on lender, profile and property type.
            </p>
            <Link href="/apply" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-blue-hover">
              Apply for an exact quote <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-rule shadow-xl shadow-navy/5 overflow-hidden">
              <div className="p-6 lg:p-7 border-b border-rule">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="w-4 h-4 text-blue" strokeWidth={2.5} />
                  <span className="text-[11px] uppercase tracking-wider font-bold text-blue">{c.tag} eligibility</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <ESlider label={c.elig.assetLabel} value={propertyValue} onChange={setPropertyValue}
                    min={c.elig.min} max={c.elig.max} step={c.elig.step}
                    display={fmtINR(propertyValue, { decimals: 0 })} />
                  <ESlider label="Tenure" value={tenureYears} onChange={setTenureYears}
                    min={3} max={c.elig.maxTenure} step={1} display={`${tenureYears} yrs`} />
                  <ESlider label="ROI" value={rate} onChange={setRate} min={c.elig.rateMin} max={c.elig.rateMax} step={0.05}
                    display={fmtPct(rate, 2)} />
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-rule">
                <div className="p-6 lg:p-7">
                  <div className="text-[10.5px] uppercase tracking-wider font-bold text-ink-soft">Eligible loan</div>
                  <div className="mt-2 text-[28px] lg:text-[34px] font-extrabold text-ink tabular tracking-tight leading-none">
                    {fmtINR(eligible, { decimals: 0 })}
                  </div>
                  <div className="mt-2 text-[12px] text-ink-muted">at {c.elig.ltvPct}% {c.elig.ltvLabel}</div>
                </div>
                <div className="p-6 lg:p-7 bg-blue-soft/40">
                  <div className="text-[10.5px] uppercase tracking-wider font-bold text-blue">Monthly EMI</div>
                  <div className="mt-2 text-[28px] lg:text-[34px] font-extrabold text-ink tabular tracking-tight leading-none">
                    {fmtINRFull(monthlyEmi)}
                  </div>
                  <div className="mt-2 text-[12px] text-ink-muted">{tenureYears * 12} EMIs · {fmtPct(rate, 2)} floating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ESlider({ label, value, onChange, min, max, step, display }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-[11.5px] font-semibold text-ink-2">{label}</label>
        <span className="text-[13px] font-bold text-ink tabular">{display}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-rule rounded-lg appearance-none cursor-pointer accent-blue"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Credit-card style rate cards — gradient front, lender as the brand,
// ROI as the chunky number on the card.
// Single-brand palette — six subtle variations of the blue/navy family.
// Keeps the card-deck look without the visual noise of every-color-of-the-rainbow.
const CARD_GRADIENTS = [
  "from-blue-deep via-blue to-blue-bright",       // brightest — reserved for the sharpest
  "from-navy-deep via-navy to-blue-deep",
  "from-blue-deep via-indigo-700 to-blue",
  "from-navy via-blue-deep to-blue",
  "from-slate-800 via-blue-deep to-blue",
  "from-navy-deep via-navy to-blue-deep",
];

function RateTable({ c }) {
  const sortedAll = [...c.rateTable].sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate));
  const sorted = sortedAll.slice(0, 6);
  const lowest = parseFloat(sorted[0]?.rate || 0);
  const remaining = sortedAll.length - sorted.length;

  return (
    <section className="bg-gradient-to-b from-surface-2 to-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">
              Live panel · {c.lenderCount} {c.tag}-active lenders
            </div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              {c.tag} rate cards from our panel.
            </h2>
            <p className="mt-4 text-[15px] text-ink-muted leading-relaxed max-w-[580px]">
              Each card shows the panel-floor rate that lender will quote for a clean profile. We pitch your file to 4–5 of these in parallel and bring you the best.
            </p>
          </div>
          <Link href="/lenders" className="text-[14px] font-semibold text-blue hover:text-blue-hover inline-flex items-center gap-1">
            See full lender comparison <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((r, i) => {
            const isLowest = parseFloat(r.rate) === lowest;
            const gradient = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
            return (
              <RateCard key={r.lender} r={r} gradient={gradient} isLowest={isLowest} index={i} />
            );
          })}
        </div>
        <div className="mt-6 flex items-center justify-between flex-wrap gap-3 text-[11.5px] text-ink-soft">
          <span>
            Indicative panel-floor rates as on {new Date().toLocaleDateString("en-IN", { month: "short", year: "numeric" })}. Actual offer depends on profile, ticket and collateral.
          </span>
          {remaining > 0 && (
            <Link href="/lenders" className="text-blue font-semibold hover:text-blue-hover inline-flex items-center gap-1">
              + {remaining} more {c.tag}-active lenders <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function RateCard({ r, gradient, isLowest, index }) {
  return (
    <div className="group relative">
      {isLowest && (
        <div className="absolute -top-2.5 left-5 z-10 inline-flex items-center gap-1 bg-coral text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-lg shadow-coral/30">
          <Sparkles className="w-2.5 h-2.5" /> Sharpest on panel
        </div>
      )}
      <div className={`relative aspect-[1.586/1] rounded-2xl bg-gradient-to-br ${gradient} text-white p-5 overflow-hidden shadow-xl shadow-ink/20 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-ink/25 transition`}>
        {/* Card chip + brand */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-16 -left-12 w-44 h-44 rounded-full bg-black/25 blur-2xl" />
        </div>

        <div className="relative h-full flex flex-col">
          {/* Top: chip + index */}
          <div className="flex items-start justify-between mb-2">
            <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-300 to-amber-500 shadow-inner" />
            <span className="font-mono text-[10.5px] text-white/75">#{String(index + 1).padStart(2, "0")}</span>
          </div>

          {/* Middle: ROI hero number */}
          <div className="mt-1">
            <div className="text-[10px] uppercase tracking-wider text-white/65 font-bold">ROI from</div>
            <div className="text-[36px] lg:text-[42px] font-extrabold tabular tracking-tight leading-none mt-1">
              {r.rate}
            </div>
          </div>

          {/* Footer: lender name + category + ticket */}
          <div className="mt-auto pt-3 border-t border-white/15">
            <div className="flex items-baseline justify-between mb-2">
              <div className="text-[14px] font-bold tracking-tight truncate">{r.lender}</div>
              <div className="text-[11px] text-white/85 tabular shrink-0 ml-2">{r.ticket}</div>
            </div>
            <div className="text-[10.5px] text-white/70">{r.category}</div>
          </div>
        </div>
      </div>
      <div className="mt-2.5 px-1 text-[11.5px] text-ink-muted leading-snug">
        <span className="font-semibold text-ink-2">Best for:</span> {r.bestFor}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function BalanceTransferStrip({ c }) {
  return (
    <section className="bg-gradient-to-br from-navy via-navy to-navy-deep text-white py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] bg-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 backdrop-blur-sm rounded-full pl-3 pr-4 py-1 text-[11.5px] font-medium text-white/85 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blue-bright" strokeWidth={2.5} />
              <span>Balance Transfer + Top-up · most asked</span>
            </div>
            <h2 className="text-[32px] lg:text-[44px] leading-[1.05] font-extrabold tracking-[-0.025em] mb-5">
              Already have a {c.tag}?<br />
              <span className="bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">Move it, top it up.</span>
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed max-w-[560px]">
              {c.btTopup}
            </p>
            <Link href="/apply" className="mt-7 inline-flex items-center gap-2 bg-blue hover:bg-blue-hover px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
              Get BT + Top-up quotes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "11", l: "BT-active lenders" },
                { v: "0", l: "Pre-payment penalty (RBI)" },
                { v: "60d", l: "Typical BT close" },
                { v: "₹38L", l: "Saved on ₹1.5 Cr / 7 yrs" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/[0.05] border border-white/10 p-5">
                  <div className="text-[26px] font-extrabold text-blue-bright tabular tracking-tight leading-none">{s.v}</div>
                  <div className="mt-2 text-[12px] text-white/65 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Process({ c }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">How a {c.tag} sanction works</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            From file pickup to disbursal — what to expect.
          </h2>
        </div>

        <ol className="grid md:grid-cols-5 gap-4">
          {c.process.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="rounded-2xl bg-surface-2 border border-rule p-5 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-blue font-bold">STEP {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[11px] font-semibold text-ink-soft tabular">{step.duration}</span>
                </div>
                <h3 className="text-[15px] font-bold text-ink mb-1.5 leading-tight">{step.title}</h3>
                <p className="text-[12.5px] text-ink-muted leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Documents({ c }) {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Documents</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              What we'll need from you.
            </h2>
            <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
              We do the assembly. You upload, we tag and route. Soft-copies are fine for first sanction; physical originals only at disbursal.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {c.documents.map((cat) => (
              <div key={cat.title} className="rounded-2xl bg-white border border-rule p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-blue" strokeWidth={2.2} />
                  <h3 className="text-[14.5px] font-bold text-ink">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[13px] text-ink-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 text-blue shrink-0" strokeWidth={3} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dedicated 0% Foreclosure Guarantee section
function ForeclosureGuarantee({ c }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white overflow-hidden p-8 lg:p-12 shadow-2xl shadow-emerald-700/20">
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full opacity-50"
              style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.20) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full opacity-40"
              style={{ background: "radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-white mb-5">
                <ShieldCheck className="w-3.5 h-3.5" /> Statpro Guarantee
              </div>
              <h2 className="text-[34px] lg:text-[48px] leading-[1.05] font-extrabold tracking-[-0.025em]">
                <span className="block">0% Foreclosure Charges</span>
                <span className="block text-white/90">on every new {c.tag} sanction.</span>
              </h2>
              <p className="mt-5 text-[15px] lg:text-[16px] text-white/85 leading-relaxed max-w-[620px]">
                Across all {c.lenderCount} of our {c.tag}-active partner lenders. Written into the sanction letter — not just the floating-rate RBI default.
                Pay-off any time, transfer-out any time, top-up any time. <strong className="text-white">No penalty, no friction, no surprises.</strong>
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-white/95 px-6 py-3.5 rounded-xl font-bold text-[14px] shadow-lg transition">
                  Get a {c.tag} sanction with this clause <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/lenders" className="inline-flex items-center gap-1.5 px-5 py-3.5 font-semibold text-[14px] border border-white/30 rounded-xl hover:bg-white/10 transition">
                  See partner lenders
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "0%",      l: "Foreclosure penalty (any time)" },
                  { v: "0%",      l: "Pre-payment penalty (full or partial)" },
                  { v: "₹0",      l: "Switch-out fee on BT" },
                  { v: c.lenderCount, l: `${c.tag} partner lenders covered` },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white/[0.10] border border-white/20 backdrop-blur-sm p-5">
                    <div className="text-[28px] lg:text-[32px] font-extrabold tabular tracking-tight leading-none">{s.v}</div>
                    <div className="mt-2 text-[12px] text-white/85 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-black/20 border border-white/10 p-4 text-[12px] text-white/80 leading-relaxed">
                <strong className="text-white">Why it matters:</strong> RBI mandates 0% foreclosure on floating-rate loans to individuals — but the rule doesn't cover companies, fixed-rate loans, or part-payment penalties. Our guarantee closes those gaps.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Faq({ c }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">FAQ</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            {c.tag} questions, answered straight.
          </h2>
        </div>
        <div className="rounded-2xl border border-rule overflow-hidden">
          {c.faqs.map((qa, i) => {
            const open = openIdx === i;
            return (
              <div key={qa.q} className={`${i > 0 ? "border-t border-rule" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 text-left px-5 lg:px-6 py-5 hover:bg-surface-2 transition"
                >
                  <span className="text-[15px] lg:text-[16px] font-semibold text-ink leading-snug">{qa.q}</span>
                  {open
                    ? <MinusCircle className="w-4 h-4 mt-1 text-blue shrink-0" strokeWidth={2.5} />
                    : <PlusCircle  className="w-4 h-4 mt-1 text-ink-soft shrink-0" strokeWidth={2.5} />
                  }
                </button>
                {open && (
                  <div className="px-5 lg:px-6 pb-5 -mt-1 text-[14px] text-ink-muted leading-relaxed max-w-[820px]">
                    {qa.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function FinalCta({ c }) {
  return (
    <section className="bg-surface-2 py-16 lg:py-20">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-deep via-blue to-blue-bright text-white p-10 lg:p-14 overflow-hidden shadow-2xl shadow-blue/20">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full opacity-50"
              style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full opacity-40"
              style={{ background: "radial-gradient(circle at center, rgba(11,17,51,0.4) 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
          </div>
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-white mb-4">
                <Sparkles className="w-3 h-3" /> Ready when you are
              </div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.08] font-extrabold tracking-[-0.025em]">
                Ready to talk {c.tag}?
              </h2>
              <p className="mt-4 text-[15px] lg:text-[16px] text-white/85 max-w-[620px] leading-relaxed">
                Share your numbers. We'll come back with a panel-comparison sheet within one working day — no commitment, ever.
                <strong className="text-white"> Our fee is paid by the lender on disbursal — you pay us nothing.</strong>
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-white text-blue-deep hover:bg-white/95 px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg transition">
                Get a {c.tag} quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lenders" className="inline-flex items-center justify-center gap-1.5 px-6 py-4 font-semibold text-[14px] border border-white/30 rounded-xl hover:bg-white/[0.10] text-white transition">
                See lender network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW SECTION 5: Loan variants (Fresh / BT / BT+Top-up / Dropline OD etc.)
function Variants({ c }) {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Loan variants</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Same panel, four ways to structure your {c.tag}.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            Pick the right variant for your situation — fresh sanction, refinance an existing loan, or pull a top-up alongside.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.variants.map((v) => (
            <div
              key={v.title}
              className={`rounded-2xl border p-6 transition flex flex-col ${
                v.highlight
                  ? "bg-white border-blue/30 shadow-xl shadow-blue/5 ring-1 ring-blue/10"
                  : "bg-white border-rule hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10.5px] text-blue bg-blue-soft px-2 py-1 rounded-md font-bold">{v.code}</span>
                {v.highlight && (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-coral bg-coral-soft px-2 py-1 rounded-full">
                    <Sparkles className="w-2.5 h-2.5" /> Most asked
                  </span>
                )}
              </div>
              <h3 className="text-[16px] font-bold text-ink mb-1.5 leading-tight">{v.title}</h3>
              <p className="text-[13px] text-ink-muted leading-relaxed mb-4 flex-1">{v.body}</p>
              <ul className="space-y-1.5 pt-4 border-t border-rule">
                {v.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[12.5px] text-ink-2">
                    <Check className="w-3 h-3 mt-1 text-blue shrink-0" strokeWidth={3} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dropline OD spotlight — explainer + use cases + comparison vs term loan
function DroplineODSpotlight({ c }) {
  const od = c.droplineOd;
  return (
    <section className="bg-white py-20 lg:py-24 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-blue" strokeWidth={2.4} />
              <span className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold">Dropline overdraft · spotlight</span>
            </div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Dropline OD — pay interest only on what you actually use.
            </h2>
            <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-[640px]">
              {od.intro}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-deep text-white p-6 lg:p-7 shadow-xl shadow-navy/20">
              <div className="text-[10.5px] uppercase tracking-wider text-blue-bright font-bold mb-2">A working example</div>
              <div className="text-[14px] text-white/85 leading-relaxed">{od.example}</div>
              <div className="mt-5 grid grid-cols-2 gap-4 pt-5 border-t border-white/10">
                {od.exampleStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[22px] font-extrabold text-blue-bright tabular tracking-tight leading-none">{s.value}</div>
                    <div className="mt-1.5 text-[11px] text-white/65 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Use cases */}
        <div>
          <div className="text-[11px] uppercase tracking-wider text-ink-soft font-bold mb-4">Where Dropline OD wins</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {od.useCases.map((u) => {
              const Icon = { Wallet, Repeat, Building, Activity, Banknote, MapPin }[u.icon] || Wallet;
              return (
                <div key={u.title} className="rounded-2xl bg-surface-2 border border-rule p-5 hover:border-blue/30 transition">
                  <div className="w-10 h-10 rounded-lg bg-ink text-white grid place-items-center mb-4">
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-ink mb-1.5 leading-tight">{u.title}</h3>
                  <p className="text-[12.5px] text-ink-muted leading-relaxed">{u.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison vs Term Loan */}
        <div className="mt-10 rounded-2xl border border-rule overflow-hidden">
          <table className="w-full text-[13.5px]">
            <thead className="bg-ink text-white">
              <tr className="text-left">
                <th className="px-5 py-3.5 font-semibold">Dimension</th>
                <th className="px-5 py-3.5 font-semibold">Term Loan ({c.tag})</th>
                <th className="px-5 py-3.5 font-semibold bg-blue/15">Dropline OD ({c.tag})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {od.comparison.map((row) => (
                <tr key={row.dim}>
                  <td className="px-5 py-3.5 font-semibold text-ink">{row.dim}</td>
                  <td className="px-5 py-3.5 text-ink-muted">{row.tl}</td>
                  <td className="px-5 py-3.5 text-ink bg-blue-soft/30">{row.od}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom callout */}
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-coral-soft/40 border border-coral/20 p-4 text-[13px] text-ink-2 leading-relaxed">
          <Sparkles className="w-4 h-4 mt-0.5 text-coral shrink-0" strokeWidth={2.5} />
          <span>
            <strong className="text-ink">Hybrid structure available:</strong> some lenders sanction part Term-Loan, part Dropline-OD on the same property — locks in low EMI on the core, keeps OD flexibility on the working buffer.
          </span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW SECTION 7: Eligibility criteria — hard rules
function EligibilityCriteria({ c }) {
  const ec = c.eligibilityCriteria;
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Who qualifies</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            The hard rules — before you fill out a single form.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            Some lenders are stricter, some are more flexible. These are the panel-wide thresholds — meet most and we'll find a route.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Qualifies */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/40 p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white grid place-items-center">
                <Check className="w-4.5 h-4.5" strokeWidth={3} />
              </div>
              <h3 className="text-[17px] font-bold text-ink">You qualify if</h3>
            </div>
            <ul className="space-y-3">
              {ec.qualifies.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-[13.5px] text-ink-2 leading-relaxed">
                  <Check className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disqualifies */}
          <div className="rounded-2xl border border-rule bg-surface-2 p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-ink-soft/80 text-white grid place-items-center">
                <X className="w-4.5 h-4.5" strokeWidth={3} />
              </div>
              <h3 className="text-[17px] font-bold text-ink">We can't fund if</h3>
            </div>
            <ul className="space-y-3">
              {ec.disqualifies.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-[13.5px] text-ink-2 leading-relaxed">
                  <X className="w-4 h-4 mt-0.5 text-ink-soft shrink-0" strokeWidth={2.5} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {ec.note && (
          <div className="mt-6 rounded-xl bg-blue-soft/40 border border-blue/15 p-4 text-[13px] text-ink-2 leading-relaxed">
            <strong className="text-ink">Borderline profile?</strong> {ec.note}
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW SECTION 10: Fees & charges
function Fees({ c }) {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-5">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Transparent costs</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Every rupee, line by line.
            </h2>
            <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
              No hidden charges, no surprise debits. Below is the typical fee stack on a {c.tag} sanction across our panel.
            </p>
          </div>
          <div className="lg:col-span-7 rounded-2xl bg-white border border-rule overflow-hidden">
            <table className="w-full text-[13.5px]">
              <thead className="bg-ink text-white">
                <tr className="text-left">
                  <th className="px-5 py-3.5 font-semibold">Charge</th>
                  <th className="px-5 py-3.5 font-semibold text-right">Typical</th>
                  <th className="px-5 py-3.5 font-semibold">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {c.fees.map((f) => (
                  <tr key={f.name} className={f.highlight ? "bg-coral-soft/40" : ""}>
                    <td className="px-5 py-4 font-semibold text-ink">{f.name}</td>
                    <td className="px-5 py-4 tabular text-right text-ink-2">{f.amount}</td>
                    <td className="px-5 py-4 text-ink-muted">{f.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl bg-blue-soft/40 border border-blue/15 p-5 flex items-start gap-3">
          <Sparkles className="w-5 h-5 mt-0.5 text-blue shrink-0" strokeWidth={2.2} />
          <div className="text-[13px] text-ink-2 leading-relaxed">
            <strong className="text-ink">You pay Statpro nothing.</strong> Our placement fee is paid by the lender on disbursal — you sign your loan agreement directly with the lender at the rate we negotiated. Processing fee bundles legal, technical and valuation; we disclose every line item upfront.
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW SECTION 12 (top half): Related calculators cross-sell
const CALC_ICONS = { TrendingDown, RefreshCw, Calculator, LineChart, Receipt };

function RelatedCalculators({ c }) {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Run the numbers</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Three calculators tuned for {c.tag}.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {c.relatedCalcs.map((r) => {
            const Icon = CALC_ICONS[r.icon] || Calculator;
            return (
              <Link
                key={r.title}
                href={r.to}
                className="group rounded-2xl bg-surface-2 border border-rule p-6 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-ink text-white grid place-items-center mb-4 group-hover:bg-blue transition">
                  <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                </div>
                <h3 className="text-[16px] font-bold text-ink mb-1.5 tracking-tight">{r.title}</h3>
                <p className="text-[13px] text-ink-muted leading-relaxed mb-4 flex-1">{r.body}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-blue group-hover:gap-2 transition-all">
                  Open <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
