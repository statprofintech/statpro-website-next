"use client";

import { useMemo, useState } from "react";
import { CalcShell, Slider, HeadlineMetric, MetricRow } from "./_CalcShell";
import { emi, fmtINR, fmtINRFull, fmtPct } from "@/lib/finance";

// Months to recover (foreclosure + processing) cost from monthly EMI saving.
function breakeven({ outstanding, oldRate, newRate, residualMonths, foreclosurePct, processingPct }) {
  const upfrontCost = outstanding * (foreclosurePct + processingPct) / 100;
  const oldEmi = emi(outstanding, oldRate, residualMonths);
  const newEmi = emi(outstanding, newRate, residualMonths);
  const monthlySaving = oldEmi - newEmi;
  if (monthlySaving <= 0) return { upfrontCost, oldEmi, newEmi, monthlySaving, breakevenMonths: null };
  return { upfrontCost, oldEmi, newEmi, monthlySaving, breakevenMonths: Math.ceil(upfrontCost / monthlySaving) };
}

export default function BtBreakevenCalculator() {
  const [outstanding, setOutstanding] = useState(15000000);
  const [oldRate, setOldRate] = useState(10.5);
  const [newRate, setNewRate] = useState(8.8);
  const [years, setYears] = useState(12);
  const [foreclosurePct, setForeclosurePct] = useState(2);
  const [processingPct, setProcessingPct] = useState(0.5);

  const r = useMemo(
    () => breakeven({ outstanding, oldRate, newRate, residualMonths: years * 12, foreclosurePct, processingPct }),
    [outstanding, oldRate, newRate, years, foreclosurePct, processingPct]
  );

  return (
    <CalcShell
      eyebrow="Balance Transfer"
      title="When does the BT pay for itself?"
      subtitle="EMI saving vs upfront foreclosure + processing fee. Cross-over month = your break-even."
      output={
        <>
          <HeadlineMetric
            eyebrow="Break-even month"
            value={r.breakevenMonths ? `Month ${r.breakevenMonths}` : "—"}
            sub={r.breakevenMonths ? `From month ${r.breakevenMonths + 1} onward, every rupee saved is yours.` : "New rate doesn't beat old rate at this combo."}
          />
          <div className="mt-7 grid grid-cols-2 gap-3">
            <MetricRow label="Old EMI" value={fmtINRFull(r.oldEmi)} />
            <MetricRow label="New EMI" value={fmtINRFull(r.newEmi)} tone="positive" />
            <MetricRow label="Monthly saving" value={fmtINRFull(r.monthlySaving)} tone={r.monthlySaving > 0 ? "positive" : "muted"} />
            <MetricRow label="Upfront cost" value={fmtINR(r.upfrontCost, { decimals: 0 })} />
          </div>
        </>
      }
    >
      <Slider label="Outstanding"   valueDisplay={fmtINR(outstanding, { decimals: 0 })} min={500000} max={500000000} step={500000} value={outstanding} onChange={setOutstanding} />
      <Slider label="Current rate"  valueDisplay={fmtPct(oldRate, 2)} min={6} max={20} step={0.05} value={oldRate} onChange={setOldRate} accent="muted" />
      <Slider label="New rate (BT)" valueDisplay={fmtPct(newRate, 2)} min={6} max={20} step={0.05} value={newRate} onChange={setNewRate} accent="coral" />
      <Slider label="Residual tenure" valueDisplay={`${years} years`} min={1} max={25} step={1} value={years} onChange={setYears} />
      <Slider label="Foreclosure fee" valueDisplay={fmtPct(foreclosurePct, 2)} min={0} max={5} step={0.1} value={foreclosurePct} onChange={setForeclosurePct} />
      <Slider label="Processing fee (new lender)" valueDisplay={fmtPct(processingPct, 2)} min={0} max={3} step={0.05} value={processingPct} onChange={setProcessingPct} last />
    </CalcShell>
  );
}
