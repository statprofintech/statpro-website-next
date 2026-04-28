"use client";

import { useMemo, useState } from "react";
import { CalcShell, Slider, HeadlineMetric, MetricRow } from "./_CalcShell";
import { emi, totalInterest, fmtINRFull, fmtINR } from "@/lib/finance";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(10000000);
  const [rate, setRate] = useState(8.9);
  const [years, setYears] = useState(15);
  const months = years * 12;

  const out = useMemo(() => ({
    emi: emi(principal, rate, months),
    interest: totalInterest(principal, rate, months),
    total: emi(principal, rate, months) * months,
  }), [principal, rate, months]);

  return (
    <CalcShell
      eyebrow="EMI Calculator"
      title="Standard EMI calculation."
      subtitle="Principal × rate × tenure → monthly outflow + total interest."
      output={
        <>
          <HeadlineMetric
            eyebrow="Monthly EMI"
            value={fmtINRFull(out.emi)}
            sub={`for ${years} years at ${rate.toFixed(2)}%`}
          />
          <div className="mt-7 grid grid-cols-2 gap-3">
            <MetricRow label="Total interest" value={fmtINR(out.interest, { decimals: 0 })} />
            <MetricRow label="Total payable" value={fmtINR(out.total, { decimals: 0 })} tone="positive" />
            <MetricRow label="Principal" value={fmtINR(principal, { decimals: 0 })} />
            <MetricRow label="Tenure" value={`${months} mo`} />
          </div>
        </>
      }
    >
      <Slider label="Loan amount"   valueDisplay={fmtINR(principal, { decimals: 0 })} min={500000} max={500000000} step={500000} value={principal} onChange={setPrincipal} />
      <Slider label="Interest rate" valueDisplay={`${rate.toFixed(2)}%`} min={6} max={20} step={0.05} value={rate} onChange={setRate} accent="coral" />
      <Slider label="Tenure"        valueDisplay={`${years} years`} min={1} max={30} step={1} value={years} onChange={setYears} last />
    </CalcShell>
  );
}
