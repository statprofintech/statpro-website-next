"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Business Loan", to: "/bl" };

export default function BlSmeUnsecuredPage() {
  return (
    <LandingPageLayout
      theme="bl"
      tag="BL · SME UNSECURED"
      parent={PARENT}
      hero={{
        eyebrow: "Business Loan · for SMEs without collateral",
        headline: "No collateral? /Your GST returns are the new collateral./",
        lede: "GST-registered SMEs with 24 months of clean returns can unlock unsecured business loans up to ₹75 L per lender — and we stack 4–5 of them to land ₹3–6 Cr of working capital. Sanctioned in 5 working days, NEFT-disbursed, no property pledge required.",
        ctaPrimary: { label: "Get an unsecured BL quote", to: "/apply?family=BL" },
        ctaSecondary: { label: "See BL main page", to: "/bl" },
        badge: "01 / 03",
        stats: [
          { v: "₹75 L",  l: "Per-lender unsecured cap" },
          { v: "₹6 Cr+", l: "Stackable across 5 lenders" },
          { v: "12.50%", l: "Sharpest panel-floor rate" },
          { v: "5 d",    l: "Median sanction TAT" },
        ],
      }}
      problem={{
        eyebrow: "The collateral trap",
        title: "Your business needs ₹50 L. Your bank wants ₹1 Cr of property as security.",
        body: "Most growth capital for SMEs gets routed to LAP — meaning you have to mortgage a property you may not have, or do not want to encumber. Pure-play unsecured business loans are available, but only from a small set of NBFCs that underwrite GST and bank-statement cash flow correctly.",
        marks: [
          "LAP requires property in your name with clear title — many SMEs don't have it or don't want to use it.",
          "Standard banks default to secured BL because their unsecured underwriting is weak.",
          "Generic aggregators dump your file across 30 lenders — most decline because the pitch isn't matched to GST cash flow.",
          "Unsecured BL specialists exist — but they're hidden behind sales-team gates that don't quote upfront.",
        ],
      }}
      solution={{
        eyebrow: "How unsecured SME BL works",
        title: "GST + bank-statement underwriting at SME-NBFC desks built for it.",
        steps: [
          { n: "I",   title: "GST cash-flow scoring", body: "We map your last 24 months of GST returns + business bank statements into an unsecured-credit-eligibility score." },
          { n: "II",  title: "SME-NBFC pitch",         body: "We pitch only to the 5 NBFCs with active unsecured-SME appetite for your industry. No bank waterfalls, no aggregator shotgun." },
          { n: "III", title: "5-day disbursal",         body: "Sanction in 3 working days; disbursal by NEFT in 5. No property paperwork, no MOD creation, no encumbrance." },
        ],
      }}
      proof={{
        eyebrow: "What unsecured BL files actually land at",
        title: "Across our 2025 SME unsecured BL placements.",
        stats: [
          { v: "₹75 L",  l: "Per-lender ticket cap",      sub: "Stackable across multiple lenders" },
          { v: "12.50%", l: "Sharpest panel-floor rate",  sub: "Strong-GST-vintage profile" },
          { v: "5 d",    l: "Median sanction-to-disbursal",sub: "On clean files" },
          { v: "5 yrs",  l: "Maximum tenure",              sub: "EMI-amortising structure" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹75 L unsecured BL for a Surat textile trader — 4-yr GST history, sanction in 4 working days.",
        narrative: "A textile trader in Surat needed ₹75 L for inventory expansion. His bank quoted ₹50 L at 14.5% with property collateral. We pitched the file as a pure-play unsecured BL to an SME-NBFC partner that underwrote on GST + bank-statement cash flow. Sanction at 12.95%, ₹75 L, 4-year tenure, no property pledge, disbursed in 4 working days.",
        ledger: [
          { k: "Annual turnover (GST)",   v: "₹8.4 Cr" },
          { k: "Loan ticket",              v: "₹75,00,000", highlight: true },
          { k: "Bank's offer",             v: "₹50 L at 14.5% (LAP)" },
          { k: "Final placed rate",        v: "12.95% unsecured", highlight: true },
          { k: "Tenure",                   v: "4 years" },
          { k: "EMI",                      v: "₹2,01,400" },
          { k: "Sanction TAT",             v: "4 working days", highlight: true },
          { k: "Collateral required",      v: "None" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why unsecured beats secured BL — when it's available.",
        items: [
          { title: "No property mortgage",     body: "Your assets stay free. No MOD, no encumbrance, no second-property restriction." },
          { title: "5-day sanction",            body: "GST + bank-statement-driven underwriting cuts the cycle to 3–5 days vs 14–21 for LAP." },
          { title: "EMI-amortising clarity",    body: "Fixed EMI for the tenure. Predictable for cash-flow planning, no balloon, no surprise reset." },
          { title: "Stackable across lenders",  body: "Each lender caps at ₹75 L. We stack 4–5 lenders in parallel to land ₹3–6 Cr if your turnover supports it." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What unsecured SME BL files actually need.",
        qualifies: [
          "GST-registered business with 24+ months of consistent return filings",
          "Annual turnover ₹1 Cr+ (sweet spot ₹2–25 Cr)",
          "Last 12 months of business bank statements showing healthy cash flow",
          "Promoter / partner / director CIBIL 700+",
          "Last 2 years' ITRs filed; business profitable in at least one of them",
        ],
        also: [
          "Service businesses (IT services, consultants, agencies) with B2B receivables",
          "Trading businesses with high inventory rotation",
          "Manufacturing units with steady GST output and stable supplier base",
        ],
      }}
      process={[
        { stage: "Day 0–1",   title: "GST + cash-flow scoring", body: "30-min discovery + GST + bank-statement upload. Indicative pricing in the same call." },
        { stage: "Day 1–3",   title: "SME-NBFC pitch",          body: "Pitch to 3–4 SME-NBFC desks with active appetite for your industry. Sanction terms in 48–72 hours." },
        { stage: "Day 3–4",   title: "Documentation",            body: "KYC, ITRs, GST verification. Sanction letter executed; loan agreement digitally signed." },
        { stage: "Day 4–5",   title: "Disbursal",                 body: "NEFT to your business operating account. EMIs auto-debited from same account." },
      ]}
      faqs={[
        { q: "How does it stay unsecured if there's no property?", a: "The lender takes a personal guarantee from the promoter (or partners / directors) and a post-dated cheque against the EMI. No property pledge — but the promoter is jointly liable for repayment." },
        { q: "What's the maximum unsecured ticket I can get?",     a: "₹75 L per lender on most of our SME-NBFC panel. We can stack 4–5 lenders in parallel for tickets of ₹3–6 Cr — provided your turnover and cash flow support the combined EMI." },
        { q: "Is the rate much higher than secured BL / LAP?",     a: "Yes — typically 350–500 bps higher than LAP, reflecting the unsecured risk. The trade-off: no property mortgage, faster sanction. We'll model both options if you have collateral available." },
        { q: "What if my business cash flow is seasonal?",          a: "Lenders model seasonality — if your bank statements show clear cyclicality (e.g., textile, agri-trading), some offer step-up EMI structures. Discussed at intake." },
        { q: "Can I pre-pay early?",                                a: "Most unsecured BL allows pre-payment with a 2–4% penalty (lender-specific). Some offer pre-payment-friendly variants at slightly higher ROI. Disclosed upfront in the sanction letter." },
      ]}
      cta={{
        headline: "Send your GST + bank statement. We'll quote in 24 hours.",
        body: "Last 24 months of GSTR-3B + last 12 months of business bank statement. We'll come back within one working day with a 4-NBFC comparison and indicative pricing.",
        primary:   { label: "Get an unsecured BL quote", to: "/apply?family=BL" },
        secondary: { label: "Read more on BL",            to: "/bl" },
      }}
    />
  );
}
