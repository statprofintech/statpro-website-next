"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowDown, Sparkles, TrendingDown, RefreshCw, Check,
  ChevronLeft, ChevronRight, MapPin, Layers, Banknote, Hospital, GraduationCap, Hotel, Warehouse, Snowflake, Boxes, Building, Pause, Play,
} from "lucide-react";
import { CATALOGUE_STATS, PARTNER_PANEL } from "@/lib/lenders";
import { compareODtoLAP, emi, fmtINR, fmtINRFull, fmtPct } from "@/lib/finance";

// 5 slides — each a distinct StatPro characteristic with its own right-side visual.
const SLIDES = [
  {
    id: "bt",
    eyebrow: "Balance Transfer + Top-up",
    headline: ["Stop overpaying,", { accent: "move your loan," }, "take a top-up too."],
    sub: "Most promoters are stuck paying 11–12% on a loan that today's market prices at 8.5–9%. We refinance your existing loan with a cheaper lender — and unlock a fresh top-up at the same low rate, with no second collateral search.",
    statValue: "₹38 L",
    statLabel: "Saved on a typical ₹1.5 Cr balance over 7 years",
    bullets: [
      "11 BT-active lenders bid in parallel — best ROI wins.",
      "Top-up disbursed alongside the BT, no second valuation.",
      "Existing loan foreclosure handled end-to-end by us.",
    ],
    panel: "BT",
  },
  {
    id: "od-lap",
    eyebrow: "OD → LAP conversion",
    headline: ["Convert your", { accent: "Overdraft into LAP," }, "extinguish the principal."],
    sub: "Overdraft pays interest forever — principal stays drawn. LAP pays interest plus principal, so the loan actually ends. Even at the same rate, you save ~40% over a 10-year horizon; drop the rate by 200 bps and the gap widens to 60%+.",
    statValue: "₹1.15 Cr",
    statLabel: "Saved on a ₹2 Cr OD at 90% utilisation, over 10 years",
    bullets: [
      "Refinance at 7.90% LAP vs 11–12% OD — typical mid-market spread.",
      "Lower EMI strain than dropline-OD interest debits.",
      "Same collateral, no fresh title search needed.",
    ],
    panel: "ODLAP",
  },
  {
    id: "collateral",
    eyebrow: "Wider collateral panel",
    headline: ["Schools, hospitals, factories,", { accent: "all funded." }],
    sub: "Banks decline 80% of unusual property. Our 19-partner panel — including specialist NBFCs — funds hospitals, schools, hotels, banquet halls, cold storage, industrial sheds, lease receivables and even your inventory.",
    statValue: "13+",
    statLabel: "Collateral types funded — including the unusual",
    bullets: [
      "Hospitals, schools and hotels routed to NBFCs that specialise in them.",
      "Industrial sheds and warehouses on the SME-NBFC panel.",
      "Inventory and lease receivables — beyond standard immovable property.",
    ],
    panel: "COLLAT",
  },
  {
    id: "wb",
    eyebrow: "West Bengal · Kolkata-led",
    headline: ["From Kolkata", { accent: "to Siliguri," }, "everywhere in between."],
    sub: "Built for West Bengal promoters. We place deals across 25+ cities — Kolkata, Howrah, Salt Lake, New Town, Hooghly, Chandannagar, Bardhaman, Durgapur, Asansol, Murshidabad and Siliguri — with a single relationship manager and on-ground site visits.",
    statValue: "25+",
    statLabel: "WB cities covered · Kolkata HQ · one relationship manager per file",
    bullets: [
      "Three regional hubs: Kolkata, Durgapur, Siliguri.",
      "On-ground legal, technical and valuation in your city.",
      "One relationship manager owns the file end-to-end.",
    ],
    panel: "CITIES",
  },
  {
    id: "lenders",
    eyebrow: "One file, best terms",
    headline: ["19 lenders,", { accent: "parallel underwriting," }, "best offer wins."],
    sub: "Private banks, large NBFCs, housing finance companies, small finance banks and securities specialists. We pitch the same file to 4–5 right-fit lenders simultaneously, they negotiate against each other, you sign the best terms — not the first offer that lands.",
    statValue: "4–5",
    statLabel: "Lenders pitched per file in parallel · 7-day first sanction",
    bullets: [
      "RBI-regulated banks, NBFCs, HFCs and SFBs only — no off-panel lending.",
      "Family-aware routing: Mirae for LAS, Lendingkart for unsecured BL.",
      "Single fee, payable only on disbursal — sanctions are free.",
    ],
    panel: "LENDERS",
  },
];

const SLIDE_DURATION = 3500;

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(t);
  }, [paused]);

  const next = () => setIdx((i) => (i + 1) % SLIDES.length);
  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[idx];

  return (
    <section
      className="relative bg-navy-deep text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Layered backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/2 -left-1/4 w-[1100px] h-[1100px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.45) 0%, rgba(79,139,255,0.18) 30%, transparent 60%)" }} />
        <div className="absolute -top-32 -right-32 w-[680px] h-[680px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.35) 0%, rgba(37,99,235,0.12) 40%, transparent 70%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />
        <div className="absolute inset-0 opacity-[0.13]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }} />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-20 pb-8 lg:pb-10">
        {/* Trust pill above the slide */}
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 backdrop-blur-sm rounded-full pl-3 pr-4 py-1 text-[11.5px] font-medium text-white/85 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-blue-bright" strokeWidth={2.5} />
          <span><span className="font-bold text-white">{CATALOGUE_STATS.partners}</span> lender partners · DSA to RBI-regulated banks & NBFCs</span>
        </div>

        {/* Slide content (key triggers fade) */}
        <SlideBody key={idx} slide={slide} />

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/apply" className="group inline-flex items-center gap-2 bg-blue hover:bg-blue-hover text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
            Talk to an advisor <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
          <a href="#calculator" className="inline-flex items-center gap-1.5 text-white/85 hover:text-white transition px-5 py-3.5 font-semibold text-[15px] border border-white/15 rounded-xl hover:bg-white/[0.06] backdrop-blur-sm">
            More calculators <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Slider controls */}
        <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/[0.08] text-white/75 hover:text-white transition"
            aria-label={paused ? "Resume" : "Pause"}
          >
            {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                className="grid place-items-center min-h-6 min-w-6 px-1.5 py-2.5 -mx-0.5"
              >
                <span
                  className={`block h-1 rounded-full transition-all ${i === idx ? "w-10 bg-blue-bright" : "w-3 bg-white/25 hover:bg-white/40"}`}
                />
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={prev} aria-label="Previous" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/[0.08] text-white/75 hover:text-white transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next" className="w-9 h-9 grid place-items-center rounded-full border border-white/15 hover:bg-white/[0.08] text-white/75 hover:text-white transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="text-[11px] tabular text-white/45 font-mono">
            {String(idx + 1).padStart(2, "0")}/{String(SLIDES.length).padStart(2, "0")} · {slide.eyebrow}
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideBody({ slide }) {
  const Panel = PANEL_BY_ID[slide.panel];
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-stretch animate-fade-up">
      <div className="lg:col-span-6">
        <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-5">
          {slide.eyebrow}
        </div>
        <h1 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.05] font-extrabold text-white tracking-[-0.03em]">
          {slide.headline.map((part, i) =>
            typeof part === "string" ? (
              <span key={i}>{part} </span>
            ) : (
              <span key={i} className="bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                {part.accent}{" "}
              </span>
            )
          )}
        </h1>
        <p className="mt-4 text-[14.5px] lg:text-[15.5px] text-white/65 leading-relaxed max-w-[520px]">
          {slide.sub}
        </p>
        <div className="mt-5 inline-flex items-baseline gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5">
          <span className="text-[22px] lg:text-[26px] font-extrabold text-blue-bright tabular tracking-tight leading-none whitespace-nowrap">
            {slide.statValue}
          </span>
          <span className="text-[12px] text-white/65 max-w-[280px] leading-snug">
            {slide.statLabel}
          </span>
        </div>

        {slide.bullets && (
          <ul className="mt-6 space-y-2.5 max-w-[520px]">
            {slide.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/75 leading-relaxed">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-bright/20 border border-blue-bright/40 grid place-items-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-blue-bright" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="lg:col-span-6">
        {Panel && <Panel />}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Right-side panels — one per slide
// ────────────────────────────────────────────────────────────────────────────────

const PANEL_BY_ID = {
  BT:      BalanceTransferPanel,
  ODLAP:   OdLapPanel,
  COLLAT:  CollateralPanel,
  CITIES:  CitiesPanel,
  LENDERS: LendersPanel,
};

function PanelShell({ eyebrow, title, icon: Icon, children, footer }) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] h-full flex flex-col">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at top right, rgba(79,139,255,0.18) 0%, transparent 60%)" }} />
      <div className="relative px-5 lg:px-6 pt-4 pb-3.5 border-b border-white/10 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-bright animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-blue-bright">{eyebrow}</span>
          </div>
          <div className="font-bold text-[17px] tracking-tight text-white">{title}</div>
        </div>
        {Icon && <Icon className="w-7 h-7 text-blue-bright/80" strokeWidth={1.6} />}
      </div>
      <div className="relative flex-1 flex flex-col">{children}</div>
      {footer && <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-md px-5 lg:px-6 py-3">{footer}</div>}
    </div>
  );
}

function SliderD({ label, valueDisplay, min, max, step, value, onChange, accent = false }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-[11.5px] font-semibold text-white/75">{label}</label>
        <span className={`text-[13px] font-bold tabular ${accent ? "text-blue-bright" : "text-white"}`}>{valueDisplay}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-blue"
      />
    </div>
  );
}

// ── PANEL 1: Balance Transfer + Top-up calculator ──────────────────────────────
function BalanceTransferPanel() {
  const [outstanding, setOutstanding] = useState(15000000);
  const [oldRate, setOldRate]         = useState(10.5);
  const [newRate, setNewRate]         = useState(8.5);
  const [years, setYears]             = useState(10);
  const [topup, setTopup]             = useState(3000000);

  const months = years * 12;
  const oldEmi = useMemo(() => emi(outstanding, oldRate, months), [outstanding, oldRate, months]);
  const newEmi = useMemo(() => emi(outstanding + topup, newRate, months), [outstanding, topup, newRate, months]);
  const monthlySaving = oldEmi - newEmi;
  const totalSaving = (oldEmi * months) - (newEmi * months) + topup; // includes top-up cash unlocked
  const interestSaving = (oldEmi - emi(outstanding, newRate, months)) * months;

  return (
    <PanelShell eyebrow="Balance Transfer + Top-up" title="Move your loan. Get a top-up." icon={RefreshCw}
      footer={
        <Link href="/apply" className="inline-flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-[14px] transition">
          Get BT quotes from 11 lenders <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3 p-5 lg:p-6">
        <SliderD label="Outstanding loan"    valueDisplay={fmtINR(outstanding, { decimals: 0 })} min={500000} max={500000000} step={500000} value={outstanding} onChange={setOutstanding} />
        <SliderD label="Top-up needed"       valueDisplay={fmtINR(topup, { decimals: 0 })}        min={0} max={50000000} step={500000} value={topup} onChange={setTopup} accent />
        <SliderD label="Current rate"        valueDisplay={fmtPct(oldRate, 2)}                    min={6} max={20} step={0.05} value={oldRate} onChange={setOldRate} />
        <SliderD label="New rate (after BT)" valueDisplay={fmtPct(newRate, 2)}                    min={6} max={20} step={0.05} value={newRate} onChange={setNewRate} accent />
        <SliderD label="Tenure remaining"    valueDisplay={`${years} yrs`} min={3} max={25} step={1} value={years} onChange={setYears} />
      </div>
      <div className="border-t border-white/10 bg-black/20 px-5 lg:px-6 py-4 mt-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-bold text-blue-bright">Monthly EMI saved</div>
            <div className="text-[28px] lg:text-[32px] font-extrabold tabular tracking-[-0.02em] leading-none mt-1.5">
              {fmtINRFull(Math.max(0, monthlySaving))}
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider font-bold text-white/55">Lifetime interest saved</div>
            <div className="text-[28px] lg:text-[32px] font-extrabold text-white tabular tracking-[-0.02em] leading-none mt-1.5">
              {fmtINR(Math.max(0, interestSaving), { decimals: 0 })}
            </div>
          </div>
        </div>
        {topup > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10 flex items-baseline justify-between">
            <span className="text-[12px] text-white/65">Plus <strong className="text-white">{fmtINR(topup, { decimals: 0 })}</strong> top-up at the new rate</span>
            <span className="text-[12px] text-blue-bright font-semibold">{fmtPct(newRate, 2)}</span>
          </div>
        )}
      </div>
    </PanelShell>
  );
}

// ── PANEL 2: OD → LAP comparator ───────────────────────────────────────────────
function OdLapPanel() {
  const [odLimit, setOdLimit]               = useState(20000000);
  const [utilizationPct, setUtilizationPct] = useState(90);
  const [odRatePct, setOdRatePct]           = useState(11.5);
  const [lapRatePct, setLapRatePct]         = useState(7.9);
  const [tenureYears, setTenureYears]       = useState(10);

  const result = useMemo(
    () => compareODtoLAP({ odLimit, utilizationPct, odRatePct, lapRatePct, tenureYears }),
    [odLimit, utilizationPct, odRatePct, lapRatePct, tenureYears]
  );
  const savingsBarPct = Math.max(0, Math.min(100, result.interestSavingPct));

  return (
    <PanelShell eyebrow="OD → LAP comparator" title="See the real saving." icon={TrendingDown}
      footer={
        <Link href="/apply" className="inline-flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-[14px] transition">
          Get LAP quotes from our 19 lenders <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3 p-5 lg:p-6">
        <SliderD label="OD limit"        valueDisplay={fmtINR(odLimit, { decimals: 0 })} min={1000000} max={500000000} step={500000} value={odLimit} onChange={setOdLimit} />
        <SliderD label="Utilization"     valueDisplay={`${utilizationPct}%`}             min={10} max={100} step={5} value={utilizationPct} onChange={setUtilizationPct} />
        <SliderD label="OD rate (today)" valueDisplay={fmtPct(odRatePct, 2)}             min={6} max={20} step={0.05} value={odRatePct} onChange={setOdRatePct} />
        <SliderD label="LAP rate"        valueDisplay={fmtPct(lapRatePct, 2)}            min={6} max={20} step={0.05} value={lapRatePct} onChange={setLapRatePct} accent />
        <SliderD label="Tenure"          valueDisplay={`${tenureYears} yrs`} min={3} max={20} step={1} value={tenureYears} onChange={setTenureYears} />
      </div>
      <div className="border-t border-white/10 bg-black/20 px-5 lg:px-6 py-4 mt-auto">
        <div className="text-[11px] uppercase tracking-wider font-bold text-blue-bright">Lifetime interest saved</div>
        <div className="text-[36px] lg:text-[44px] font-extrabold tabular tracking-[-0.02em] leading-none mt-1.5">
          {fmtINR(result.interestSaving, { decimals: 0 })}
        </div>
        <div className="mt-2 text-blue-bright text-[13px] font-semibold tabular">
          ↓ {fmtPct(result.interestSavingPct, 1)} of interest · over {tenureYears} years
        </div>
        <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-bright to-blue-glow transition-all duration-300" style={{ width: `${savingsBarPct}%` }} />
        </div>
      </div>
    </PanelShell>
  );
}

// ── PANEL 3: Collateral types accepted ─────────────────────────────────────────
const COLLATERALS = [
  { name: "Hospitals",         icon: Hospital,       lenders: 6 },
  { name: "Schools & colleges", icon: GraduationCap,  lenders: 5 },
  { name: "Hotels",            icon: Hotel,          lenders: 4 },
  { name: "Warehouses",        icon: Warehouse,      lenders: 9 },
  { name: "Cold storage",      icon: Snowflake,      lenders: 5 },
  { name: "Inventory / stock", icon: Boxes,          lenders: 3 },
  { name: "Industrial sheds",  icon: Layers,         lenders: 8 },
  { name: "Banquet halls",     icon: Building,       lenders: 3 },
];

function CollateralPanel() {
  return (
    <PanelShell eyebrow="What banks decline" title="Unusual collateral, fully funded." icon={Layers}
      footer={
        <Link href="/lenders" className="inline-flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-[14px] transition">
          See all collateral types <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-3 p-6 lg:p-7">
        {COLLATERALS.map((c) => (
          <div key={c.name} className="rounded-xl bg-white/[0.04] border border-white/10 p-4 hover:bg-white/[0.08] hover:border-blue-bright/40 transition">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-bright/15 border border-blue-bright/20 grid place-items-center">
                <c.icon className="w-4 h-4 text-blue-bright" strokeWidth={2.2} />
              </div>
              <span className="text-[10px] font-bold tabular text-blue-bright">{c.lenders}/19</span>
            </div>
            <div className="text-[12.5px] font-semibold text-white">{c.name}</div>
            <div className="mt-2 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-bright to-blue-glow" style={{ width: `${(c.lenders / 19) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

// ── PANEL 4: West Bengal cities ────────────────────────────────────────────────
const HERO_CITIES = [
  { name: "Kolkata",     hub: true },
  { name: "Howrah" },     { name: "Salt Lake" },     { name: "New Town" },     { name: "Rajarhat" },
  { name: "Siliguri",    hub: true },
  { name: "Durgapur" },  { name: "Asansol" },        { name: "Bardhaman" },    { name: "Hooghly" },
  { name: "Kharagpur" }, { name: "Haldia" },         { name: "Bankura" },      { name: "Birbhum" },
  { name: "Murshidabad" }, { name: "Medinipur" },    { name: "Malda" },        { name: "Krishnanagar" },
];

function CitiesPanel() {
  return (
    <PanelShell eyebrow="Active footprint" title="Deals placed across 25+ WB cities." icon={MapPin}
      footer={
        <Link href="/apply" className="inline-flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-[14px] transition">
          Find an advisor in your city <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="p-6 lg:p-7 flex-1 flex flex-col">
        <div className="grid grid-cols-3 gap-2">
          {HERO_CITIES.map((c) => (
            <div key={c.name} className={`rounded-lg border px-3 py-2.5 text-[12.5px] font-semibold flex items-center gap-2 ${
              c.hub
                ? "bg-blue-bright/15 border-blue-bright/40 text-blue-bright"
                : "bg-white/[0.04] border-white/10 text-white/85"
            }`}>
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{c.name}</span>
              {c.hub && <span className="ml-auto text-[8px] font-bold uppercase tracking-wider">Hub</span>}
            </div>
          ))}
        </div>
        <div className="mt-4 text-[11px] text-white/45 text-center">
          + Krishnanagar, Bangaon, Barasat, Barrackpore, Habra and 15+ more
        </div>
      </div>
    </PanelShell>
  );
}

// ── PANEL 5: Lenders panel ─────────────────────────────────────────────────────
function LendersPanel() {
  const byCat = PARTNER_PANEL.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});
  const order = ["PRIVATE_BANK", "NBFC_LARGE", "HOUSING_FINANCE", "NBFC_SME", "NBFC_LAS", "SMALL_FINANCE_BANK"];
  const labels = {
    PRIVATE_BANK: "Banks",
    NBFC_LARGE: "Large NBFCs",
    HOUSING_FINANCE: "Housing Finance",
    NBFC_SME: "SME NBFCs",
    NBFC_LAS: "LAS Specialists",
    SMALL_FINANCE_BANK: "Small Finance Banks",
  };

  return (
    <PanelShell eyebrow="Our lender panel" title="19 lenders. 6 categories." icon={Banknote}
      footer={
        <Link href="/lenders" className="inline-flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-[14px] transition">
          See full lender network <ArrowRight className="w-4 h-4" />
        </Link>
      }
    >
      <div className="p-6 lg:p-7 flex-1 flex flex-col gap-3">
        {order.map((cat) => byCat[cat] && (
          <div key={cat} className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[10.5px] uppercase tracking-wider text-blue-bright font-bold">{labels[cat]}</span>
              <span className="text-[11px] tabular text-white/55 font-mono">{byCat[cat].length}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {byCat[cat].map((p) => (
                <span key={p.id} className="text-[11.5px] text-white/85 bg-white/[0.06] border border-white/10 px-2 py-1 rounded-md font-medium">
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}
