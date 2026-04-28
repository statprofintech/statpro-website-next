"use client";

import { useMemo, useState } from "react";
import { CalcShell, Slider, Select, HeadlineMetric, MetricRow } from "./_CalcShell";
import { fmtINR, fmtINRFull, fmtPct } from "@/lib/finance";

const SECURITY_CLASSES = [
  { value: "EQUITY_TOP_100", label: "Top-100 listed equity",       ltv: 50 },
  { value: "EQUITY_TOP_500", label: "Top-500 listed equity",       ltv: 50 },
  { value: "EQUITY_OTHER",   label: "Other listed equity",          ltv: 0  },
  { value: "DEBT_MF",        label: "Debt mutual funds",            ltv: 75 },
  { value: "EQUITY_MF",      label: "Equity mutual funds",          ltv: 50 },
  { value: "HYBRID_MF",      label: "Hybrid mutual funds",          ltv: 60 },
  { value: "LISTED_BOND",    label: "Listed bonds",                  ltv: 70 },
  { value: "FD",             label: "Fixed deposits",                ltv: 90 },
];

export default function LasLtvCalculator() {
  const [securityClass, setSecurityClass] = useState("EQUITY_TOP_100");
  const [portfolioValue, setPortfolioValue] = useState(10000000);
  const [rate, setRate] = useState(9.25);
  const [utilization, setUtilization] = useState(80);

  const cls = SECURITY_CLASSES.find((s) => s.value === securityClass);
  const eligible = (portfolioValue * cls.ltv) / 100;
  const drawn = (eligible * utilization) / 100;
  const annualInterest = drawn * (rate / 100);

  return (
    <CalcShell
      eyebrow="Loan Against Securities"
      title="How much can you borrow against your portfolio?"
      subtitle="LTV varies by security class. Daily interest on utilised — no EMI."
      ctaLabel="Apply via JioCredit (preferred LAS partner)"
      output={
        <>
          <HeadlineMetric
            eyebrow="Eligible loan"
            value={fmtINR(eligible, { decimals: 0 })}
            sub={`${cls.label} · LTV ${cls.ltv}% on ${fmtINR(portfolioValue, { decimals: 0 })} portfolio`}
          />
          <div className="mt-7 grid grid-cols-2 gap-3">
            <MetricRow label="Eligible LTV" value={`${cls.ltv}%`} />
            <MetricRow label="If utilised" value={fmtINR(drawn, { decimals: 0 })} tone="positive" />
            <MetricRow label="Annual interest" value={fmtINR(annualInterest, { decimals: 0 })} />
            <MetricRow label="Monthly interest" value={fmtINRFull(annualInterest / 12)} />
          </div>
          <div className="mt-5 text-[11.5px] text-white/55 leading-relaxed">
            * Margin call triggers if portfolio value drops below 75% of LTV-implied collateral. Pledge more or repay to restore.
          </div>
        </>
      }
    >
      <Select
        label="Security class"
        value={securityClass}
        onChange={setSecurityClass}
        options={SECURITY_CLASSES.map((s) => ({ value: s.value, label: `${s.label} · LTV ${s.ltv}%` }))}
      />
      <Slider label="Portfolio value" valueDisplay={fmtINR(portfolioValue, { decimals: 0 })} min={500000} max={1000000000} step={500000} value={portfolioValue} onChange={setPortfolioValue} />
      <Slider label="Interest rate"   valueDisplay={fmtPct(rate, 2)} min={9} max={15} step={0.05} value={rate} onChange={setRate} accent="coral" />
      <Slider label="Utilisation"     valueDisplay={`${utilization}%`} min={0} max={100} step={5} value={utilization} onChange={setUtilization} last />
    </CalcShell>
  );
}
