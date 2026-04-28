"use client";

// Shared chrome for the secondary calculators — matches SavingsCalculator's split layout.
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function CalcShell({ eyebrow, title, subtitle, children, output, ctaLabel = "Get this rate from our 19 lenders", ctaTo = "/apply" }) {
  return (
    <div className="rounded-3xl bg-white border border-rule overflow-hidden shadow-2xl shadow-navy/15">
      <div className="grid lg:grid-cols-[440px_1fr]">
        <div className="p-7 lg:p-9 lg:border-r border-rule bg-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-coral">{eyebrow}</span>
            <span className="h-1 w-1 rounded-full bg-coral animate-pulse" />
          </div>
          <h3 className="text-[22px] font-bold text-ink leading-tight tracking-tight mb-1">{title}</h3>
          {subtitle && <p className="text-[12.5px] text-ink-muted mb-7 leading-relaxed">{subtitle}</p>}
          {children}
        </div>
        <div className="bg-gradient-to-br from-navy via-navy to-navy-deep text-white p-7 lg:p-9 relative overflow-hidden flex flex-col">
          <div className="absolute -top-24 -right-20 w-[320px] h-[320px] bg-coral/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[220px] h-[220px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative flex-1">
            {output}
          </div>
          <Link
            href={ctaTo}
            className="relative mt-7 inline-flex items-center justify-center gap-2 w-full bg-coral hover:bg-coral-hover text-white px-5 py-3.5 rounded-xl font-semibold text-[14px] transition shadow-lg shadow-coral/30"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Slider({ label, valueDisplay, min, max, step, value, onChange, accent = "navy", last = false }) {
  return (
    <div className={last ? "" : "mb-5"}>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-[12.5px] font-semibold text-ink-2">{label}</label>
        <span className={`text-[14px] font-bold tabular ${accent === "coral" ? "text-coral" : "text-ink"}`}>{valueDisplay}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1.5 bg-rule rounded-lg appearance-none cursor-pointer ${accent === "coral" ? "accent-coral" : "accent-navy"}`}
      />
    </div>
  );
}

export function Select({ label, value, onChange, options }) {
  return (
    <div className="mb-5">
      <label className="block text-[12.5px] font-semibold text-ink-2 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 rounded-xl border border-rule bg-white text-[14px] text-ink focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export function HeadlineMetric({ eyebrow, value, sub }) {
  return (
    <>
      <div className="text-coral text-[11px] uppercase tracking-wider font-bold mb-3">{eyebrow}</div>
      <div className="text-[44px] lg:text-[56px] font-bold tabular tracking-tight leading-none">{value}</div>
      {sub && <div className="mt-3 text-white/55 text-[13px]">{sub}</div>}
    </>
  );
}

export function MetricRow({ label, value, tone = "muted" }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3.5 py-3">
      <div className="text-white/50 text-[10.5px] uppercase tracking-wider font-semibold mb-1.5">{label}</div>
      <div className={`text-[15px] font-bold tabular leading-none ${tone === "positive" ? "text-coral" : "text-white/85"}`}>{value}</div>
    </div>
  );
}
