"use client";
// Isolated client component — FAQ accordion needs useState.
// Keeping this separate lets ProductPageLayout be a server component.

import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

export default function ProductPageFaqClient({ c }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">FAQ</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            {c.tag} questions, answered straight.
          </h2>
        </div>
        <div className="rounded-2xl border border-rule overflow-hidden">
          {c.faqs.map((qa, i) => {
            const open = openIdx === i;
            return (
              <div key={qa.q} className={`${i > 0 ? "border-t border-rule" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 text-left px-5 lg:px-6 py-5 hover:bg-surface-2 transition"
                >
                  <span className="text-[15px] lg:text-[16px] font-semibold text-ink leading-snug">{qa.q}</span>
                  {open
                    ? <MinusCircle className="w-4 h-4 mt-1 text-blue shrink-0" strokeWidth={2.5} />
                    : <PlusCircle  className="w-4 h-4 mt-1 text-ink-soft shrink-0" strokeWidth={2.5} />
                  }
                </button>
                {open && (
                  <div className="px-5 lg:px-6 pb-5 -mt-1 text-[14px] text-ink-muted leading-relaxed max-w-[820px]">
                    {qa.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
