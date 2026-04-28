"use client";

import { useMemo, useState } from "react";
import { CalcShell, Slider, Select, HeadlineMetric, MetricRow } from "./_CalcShell";
import { fmtINR } from "@/lib/finance";

// Indicative ticket-size estimator. Rough multiples — final eligibility is lender-driven.
const FAMILY_RULES = {
  LAP: { ltvPct: 65, fdt: 0.50, name: "Loan Against Property", tenureYears: 15, anchor: "property" },
  LRD: { ltvPct: 85, fdt: 0.55, name: "Loan Against Rental",   tenureYears: 12, anchor: "rental" },
  HL:  { ltvPct: 90, fdt: 0.55, name: "Home Loan",              tenureYears: 25, anchor: "property" },
  BL:  { ltvPct: 0,  fdt: 0.40, name: "Business Loan",          tenureYears: 5,  anchor: "income" },
  PL:  { ltvPct: 0,  fdt: 0.40, name: "Personal Loan",          tenureYears: 6,  anchor: "income" },
};

export default function EligibilityCalculator() {
  const [family, setFamily] = useState("LAP");
  const [propertyValue, setPropertyValue] = useState(30000000);
  const [monthlyRental, setMonthlyRental] = useState(500000);
  const [annualIncome, setAnnualIncome] = useState(2400000);
  const [existingObligationsMonthly, setExistingObligations] = useState(40000);

  const rule = FAMILY_RULES[family];

  const out = useMemo(() => {
    if (rule.anchor === "property") {
      // Cap by LTV on property
      const capByLtv = (propertyValue * rule.ltvPct) / 100;
      // FOIR-style: lender allows ~50% of monthly income for EMI minus existing obligations
      const monthlyCapacity = (annualIncome / 12) * rule.fdt - existingObligationsMonthly;
      // Reverse-EMI: principal that monthly capacity can service at 9% over rule.tenureYears
      const r = 9 / 12 / 100;
      const n = rule.tenureYears * 12;
      const capByEmi = monthlyCapacity > 0 ? (monthlyCapacity * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n)) : 0;
      return { eligible: Math.max(0, Math.min(capByLtv, capByEmi)), capByLtv, capByEmi };
    }
    if (rule.anchor === "rental") {
      const capByNpv = monthlyRental * 12 * 6.5 * (rule.ltvPct / 100); // rough NPV multiple
      const capByPropertyHalf = propertyValue * 0.5;
      return { eligible: Math.min(capByNpv, capByPropertyHalf), capByNpv, capByPropertyHalf };
    }
    // income-anchored (BL/PL)
    const r = 11 / 12 / 100;
    const n = rule.tenureYears * 12;
    const monthlyCapacity = (annualIncome / 12) * rule.fdt - existingObligationsMonthly;
    const capByEmi = monthlyCapacity > 0 ? (monthlyCapacity * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n)) : 0;
    return { eligible: Math.max(0, capByEmi), monthlyCapacity };
  }, [family, propertyValue, monthlyRental, annualIncome, existingObligationsMonthly, rule]);

  return (
    <CalcShell
      eyebrow="Eligibility Estimator"
      title="What ticket can you actually get?"
      subtitle="Indicative cap based on income, property value, and family-specific underwriting rules."
      output={
        <>
          <HeadlineMetric
            eyebrow={`${rule.name} · indicative`}
            value={fmtINR(out.eligible, { decimals: 0 })}
            sub="Lower of LTV cap and income-based EMI cap. Final eligibility is lender-driven."
          />
          <div className="mt-7 grid grid-cols-2 gap-3">
            {rule.anchor === "property" && (
              <>
                <MetricRow label="Cap by LTV"    value={fmtINR(out.capByLtv, { decimals: 0 })} />
                <MetricRow label="Cap by EMI capacity" value={fmtINR(out.capByEmi, { decimals: 0 })} />
              </>
            )}
            {rule.anchor === "rental" && (
              <>
                <MetricRow label="Cap by NPV of rentals"  value={fmtINR(out.capByNpv, { decimals: 0 })} />
                <MetricRow label="Cap by 50% property" value={fmtINR(out.capByPropertyHalf, { decimals: 0 })} />
              </>
            )}
            {rule.anchor === "income" && (
              <>
                <MetricRow label="Monthly EMI capacity" value={fmtINR(out.monthlyCapacity, { decimals: 0 })} />
                <MetricRow label="Tenure assumed" value={`${rule.tenureYears} years`} />
              </>
            )}
          </div>
        </>
      }
    >
      <Select
        label="Loan family"
        value={family}
        onChange={setFamily}
        options={Object.entries(FAMILY_RULES).map(([k, v]) => ({ value: k, label: v.name }))}
      />
      {rule.anchor !== "income" && (
        <Slider label="Property value" valueDisplay={fmtINR(propertyValue, { decimals: 0 })} min={1000000} max={500000000} step={1000000} value={propertyValue} onChange={setPropertyValue} />
      )}
      {rule.anchor === "rental" && (
        <Slider label="Monthly rental" valueDisplay={fmtINR(monthlyRental, { decimals: 0 })} min={50000} max={5000000} step={50000} value={monthlyRental} onChange={setMonthlyRental} />
      )}
      {rule.anchor !== "rental" && (
        <Slider label="Annual income" valueDisplay={fmtINR(annualIncome, { decimals: 0 })} min={300000} max={50000000} step={100000} value={annualIncome} onChange={setAnnualIncome} accent="coral" />
      )}
      {rule.anchor !== "rental" && (
        <Slider label="Existing EMIs / mo" valueDisplay={fmtINR(existingObligationsMonthly, { decimals: 0 })} min={0} max={1000000} step={5000} value={existingObligationsMonthly} onChange={setExistingObligations} last />
      )}
    </CalcShell>
  );
}
