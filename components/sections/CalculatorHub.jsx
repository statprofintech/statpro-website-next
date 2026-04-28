"use client";

import { useState } from "react";
import { TrendingDown, RefreshCw, Calculator, LineChart, Target } from "lucide-react";
import SavingsCalculator from "@/components/SavingsCalculator";
import EmiCalculator from "@/components/calculators/EmiCalculator";
import BtBreakevenCalculator from "@/components/calculators/BtBreakevenCalculator";
import LasLtvCalculator from "@/components/calculators/LasLtvCalculator";
import EligibilityCalculator from "@/components/calculators/EligibilityCalculator";

const TABS = [
  { id: "od-lap",    label: "OD → LAP",    icon: TrendingDown, sub: "Real saving from refinance" },
  { id: "bt",        label: "Balance Transfer", icon: RefreshCw, sub: "Months to break even" },
  { id: "emi",       label: "EMI",         icon: Calculator,   sub: "Monthly outflow" },
  { id: "las",       label: "LAS LTV",     icon: LineChart,    sub: "Eligible loan from securities" },
  { id: "elig",      label: "Eligibility", icon: Target,       sub: "Indicative ticket size" },
];

export default function CalculatorHub() {
  const [active, setActive] = useState("od-lap");

  return (
    <section id="calculator" className="bg-surface-2 py-20 lg:py-28 relative overflow-hidden scroll-mt-20">
      {/* Decorative background blobs */}
      <div className="absolute -top-40 -left-32 w-[480px] h-[480px] bg-coral-soft rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[460px] h-[460px] bg-navy-soft rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-coral font-bold mb-4">
            Five calculators, zero spreadsheets
          </div>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
            Run your numbers before you run a meeting.
          </h2>
          <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-[580px]">
            Every calculator uses live partner-rate floors from our catalogue. What you see here is what we negotiate against.
          </p>
        </div>

        {/* Tab strip */}
        <div className="overflow-x-auto -mx-6 lg:mx-0 px-6 lg:px-0 mb-6">
          <div role="tablist" className="inline-flex items-center gap-2 bg-white border border-rule rounded-2xl p-1.5 shadow-sm">
            {TABS.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13.5px] font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-ink text-white shadow"
                      : "text-ink-2 hover:text-ink hover:bg-surface-2"
                  }`}
                >
                  <t.icon className="w-4 h-4" strokeWidth={2.3} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab body */}
        <div>
          {active === "od-lap" && <SavingsCalculator />}
          {active === "bt"     && <BtBreakevenCalculator />}
          {active === "emi"    && <EmiCalculator />}
          {active === "las"    && <LasLtvCalculator />}
          {active === "elig"   && <EligibilityCalculator />}
        </div>
      </div>
    </section>
  );
}
