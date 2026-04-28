import { Landmark, Layers, Banknote, TrendingDown } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { CATALOGUE_STATS } from "@/lib/lenders";

const ITEMS = [
  {
    icon: Landmark,
    value: CATALOGUE_STATS.partners,
    suffix: "",
    label: "Lender partners",
    sub: "Banks · NBFCs · HFCs · SFBs",
    accent: "from-blue to-blue-deep",
  },
  {
    icon: Layers,
    value: CATALOGUE_STATS.collateralTypes,
    suffix: "+",
    label: "Collateral types",
    sub: "From offices to receivables",
    accent: "from-indigo-500 to-blue-deep",
  },
  {
    icon: Banknote,
    value: 50,
    prefix: "₹",
    suffix: " Cr",
    label: "Largest single ticket",
    sub: "Across LAP, LRD, HL",
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    icon: TrendingDown,
    rangePrefix: "30–",
    value: 50,
    suffix: "%",
    label: "Typical interest cut",
    sub: "On OD-to-LAP conversions",
    accent: "from-violet-500 to-purple-700",
  },
];

export default function StatsBand() {
  return (
    <section className="bg-white border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <div
              key={it.label}
              className={`group relative p-6 lg:p-8 border-rule ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i > 0 ? "lg:border-l lg:border-r-0" : ""}`}
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${it.accent} grid place-items-center text-white shadow-md mb-4`}>
                <it.icon className="w-4 h-4" strokeWidth={2.3} />
              </div>
              <div className="text-[34px] lg:text-[44px] font-extrabold text-ink tabular tracking-[-0.03em] leading-none">
                {it.rangePrefix ? (
                  <span>
                    {it.rangePrefix}
                    <NumberTicker value={it.value} />
                    {it.suffix}
                  </span>
                ) : (
                  <>
                    {it.prefix && <span>{it.prefix}</span>}
                    <NumberTicker value={it.value} />
                    {it.suffix && <span>{it.suffix}</span>}
                  </>
                )}
              </div>
              <div className="mt-3 text-[13.5px] font-bold text-ink">{it.label}</div>
              <div className="mt-0.5 text-[12px] text-ink-soft">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
