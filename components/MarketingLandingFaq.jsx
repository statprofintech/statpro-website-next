"use client";
// Isolated client component — only this tiny accordion needs useState.
// Keeping it separate lets MarketingLandingLayout be a server component,
// which means the H1 paints immediately (no JS needed) → fixes LCP.
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function MarketingLandingFaq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-rule">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-3">FAQ</div>
          <h2 className="text-[28px] lg:text-[38px] leading-[1.1] font-extrabold text-ink tracking-[-0.025em]">
            Common questions, answered straight.
          </h2>
        </div>
        <div className="rounded-2xl border border-rule overflow-hidden">
          {items.map((qa, i) => {
            const isOpen = open === i;
            return (
              <div key={qa.q} className={`${i > 0 ? "border-t border-rule" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 text-left px-5 lg:px-6 py-4 hover:bg-surface-2 transition"
                >
                  <span className="text-[14.5px] lg:text-[15.5px] font-semibold text-ink leading-snug">{qa.q}</span>
                  <span className="shrink-0 w-7 h-7 grid place-items-center rounded-full bg-blue-soft text-blue mt-0.5">
                    {isOpen ? <Minus className="w-3.5 h-3.5" strokeWidth={2.5} /> : <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 lg:px-6 pb-5 -mt-1 text-[13.5px] text-ink-muted leading-relaxed">{qa.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
