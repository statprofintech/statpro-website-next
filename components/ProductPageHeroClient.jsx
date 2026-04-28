"use client";
// Isolated client component — auto-advancing hero slider needs useState + useEffect.
// Keeping this separate lets ProductPageLayout be a server component so the
// H1 paints from the first HTML byte → fixes LCP on all product pages.

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Check, ShieldCheck, Clock, Phone,
  ChevronLeft, ChevronRight, Pause, Play,
  TrendingDown, RefreshCw, Activity, Building, Zap, Banknote,
} from "lucide-react";

const SLIDE_DURATION = 3500;

export default function ProductPageHeroClient({ c }) {
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

// ─────────────────────────────────────────────────────────────────────────────
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
            if (!/[.,?!:;]$/.test(first)) first += ",";
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

function RatesPanel({ c }) {
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
    { name: "Hospitals",          lenders: 6 },
    { name: "Schools & colleges", lenders: 5 },
    { name: "Hotels",             lenders: 4 },
    { name: "Warehouses",         lenders: 9 },
    { name: "Cold storage",       lenders: 5 },
    { name: "Industrial sheds",   lenders: 8 },
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
