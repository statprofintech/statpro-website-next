"use client";
// Isolated client component — eligibility sliders need useState + useMemo.
// Keeping this separate lets ProductPageLayout be a server component.

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ArrowUpRight } from "lucide-react";
import { emi, fmtINR, fmtINRFull, fmtPct } from "@/lib/finance";

export default function ProductPageEligibilityClient({ c }) {
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
