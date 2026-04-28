"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqJsonLd } from "@/lib/jsonld";

const ITEMS = [
  {
    q: "How is StatPro different from a bank?",
    a: "We're a corporate-credit advisor, not a lender. We don't lend our own money — we package your file, pitch it to 4–5 right-fit partner lenders simultaneously, and negotiate the best terms. You sign with the lender, we get paid by them.",
  },
  {
    q: "Do you charge me anything?",
    a: "No. Our fee comes from the lender we place you with (DSA model). You pay the lender's standard processing fee at sanction, nothing extra to us.",
  },
  {
    q: "Why is OD-to-LAP so much cheaper?",
    a: "An overdraft pays interest only — your principal stays drawn forever. A LAP amortises principal through EMIs, so the loan ends. Even at the same interest rate, LAP saves ~40% on lifetime interest because EMIs reduce the principal you're paying interest on. At a lower LAP rate (which we typically negotiate), the gap widens to 50%+.",
  },
  {
    q: "How long does the process take?",
    a: "Typical sanction in 7–14 days for LAP / LRD; 10 minutes to 24 hours for LAS via JioCredit. Disbursal follows in another 7–14 days for property-backed loans, same-day for LAS. Unsecured BL/PL are faster — often 5–7 days end-to-end.",
  },
  {
    q: "What if my profile is non-standard — old property, special-use building, low CIBIL?",
    a: "That's specifically what our 19-partner panel is for. Different lenders have different appetites: NBFCs accept hospitals/schools/hotels that banks decline; SFBs accept first-time borrowers; specialist NBFCs accept industrial sheds and warehouses. We route your file to lenders who fund your specific profile.",
  },
  {
    q: "Will applying through StatPro hurt my credit score?",
    a: "We don't pull a hard credit check at the application stage — only when a specific lender requests it during underwriting. Applying through us results in fewer hard pulls than applying to multiple lenders directly, because we filter the panel for fit before submission.",
  },
  {
    q: "Is my data shared with all 19 lenders?",
    a: "No. We share your file only with the 4–5 lenders we judge a fit for your profile, after your explicit consent. DPDPA-compliant. You see (and can revoke) every share.",
  },
  {
    q: "What collateral types do you fund against?",
    a: "Across the panel: residential / commercial / industrial property, plots, mixed-use, hospitals, schools, hotels, warehouses, cold storage, lease rentals, listed equities, mutual funds, debt securities, FDs. The Collaterals matrix above shows lender counts per type.",
  },
  {
    q: "Do you handle balance transfers?",
    a: "Yes — for secured loans (LAP, LRD, HL). We don't broker balance transfers for unsecured loans (PL, BL); the math rarely works once you account for foreclosure + processing fees on small unsecured tickets.",
  },
  {
    q: "What's the smallest / largest ticket you'll work?",
    a: "₹50 lakh on the small end (anything below makes the underwriting effort uneconomic). ₹50+ Cr on the large end via our private-bank and large-NBFC relationships.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-surface-2 py-20 lg:py-28">
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd(ITEMS))}
      </script>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.16em] text-coral font-bold mb-4">FAQ</div>
            <h2 className="text-[32px] lg:text-[44px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Things people ask before they trust us with a ₹2 Cr decision.
            </h2>
            <p className="mt-5 text-[14.5px] text-ink-muted leading-relaxed max-w-[360px]">
              Don't see your question? <a href="mailto:care@statproindia.com" className="text-coral font-semibold hover:text-coral-hover">Email us</a>.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-rule overflow-hidden">
              {ITEMS.map((it, i) => (
                <div key={i} className="border-b border-rule last:border-b-0">
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 lg:px-7 py-5 hover:bg-surface-2 transition"
                  >
                    <span className="text-[15px] lg:text-[16px] font-semibold text-ink leading-snug">{it.q}</span>
                    <span className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-coral-soft text-coral">
                      {open === i ? <Minus className="w-4 h-4" strokeWidth={2.5} /> : <Plus className="w-4 h-4" strokeWidth={2.5} />}
                    </span>
                  </button>
                  {open === i && (
                    <div className="px-6 lg:px-7 pb-6 -mt-1 text-[14px] text-ink-muted leading-relaxed">
                      {it.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
