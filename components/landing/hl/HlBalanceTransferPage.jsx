"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Home Loan", to: "/hl" };

export default function HlBalanceTransferPage() {
  return (
    <LandingPageLayout
      theme="hl"
      tag="HL · BALANCE TRANSFER"
      parent={PARENT}
      hero={{
        eyebrow: "Home Loan · Balance Transfer + Top-up",
        headline: "Move the home loan. /Top it up./ One sanction.",
        lede: "If your home loan is at 9.25% or higher, you're paying 50–100 bps above today's market. We refinance with a sharper lender and add a top-up alongside — single sanction, no second valuation, foreclosure penalty zero.",
        ctaPrimary: { label: "Get a HL BT comparison", to: "/apply" },
        ctaSecondary: { label: "See HL main page", to: "/hl" },
        badge: "02 / 03",
        stats: [
          { v: "₹14L",  l: "Saved on ₹50 L / 15 yrs" },
          { v: "₹0",    l: "Pre-payment penalty (RBI)" },
          { v: "60d",   l: "Typical close time" },
          { v: "8.55%", l: "Sharpest BT-target rate" },
        ],
      }}
      problem={{
        eyebrow: "The slow leak",
        title: "Your home loan rate quietly drifted past the panel-floor.",
        body: "Most home-loan borrowers reset against the lender's RLLR / MCLR — but the lender's spread on top of that doesn't auto-cut. After 18–24 months, your sticker rate is often 50–100 bps above what's available today on the same property and same profile.",
        marks: [
          "Your reset has lagged the lender's own RLLR / MCLR cuts.",
          "Relationship pricing promised at sanction was never reapplied at the next reset.",
          "Your CIBIL or income has improved — eligibility for a sharper bank is now real.",
          "Top-up requirement (renovation, education, family event) is being separately financed at PL rates.",
        ],
      }}
      solution={{
        eyebrow: "How a HL BT + Top-up works",
        title: "Refinance the existing balance and pull a top-up — both in one sanction.",
        steps: [
          { n: "I",   title: "Match the right lender",      body: "We score your file across rate sensitivity, ticket and property type, then pitch to the 4 lenders most likely to absorb both the existing balance and a fresh top-up." },
          { n: "II",  title: "Single sanction, single MOD", body: "The new lender sanctions the combined ticket. One legal, one technical. Existing lender paid off; top-up disbursed in the same window." },
          { n: "III", title: "Zero foreclosure friction",   body: "RBI mandates 0% foreclosure on floating-rate HL for individuals. We coordinate the foreclosure quote, NOC and document handover end-to-end." },
        ],
      }}
      proof={{
        eyebrow: "What HL BT actually moves",
        title: "Across our 2025 home-loan BT files.",
        stats: [
          { v: "70–150",l: "bps cut on existing rate", sub: "Median across our HL BT book" },
          { v: "₹14 L", l: "Interest saved",           sub: "On ₹50 L balance, 15-year residual" },
          { v: "₹0",    l: "Out-of-pocket fee",        sub: "Lender pays our placement fee" },
          { v: "60 d",  l: "Sanction to disbursal",    sub: "Typical HL BT close" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹50 L existing HL at 9.65% → refinanced at 8.55% with a ₹15 L top-up.",
        narrative: "A salaried engineer in Pune, 8 years into a 20-year HL of ₹70 L (now ₹50 L outstanding) at 9.65%. Needed ₹15 L for renovation. We placed the BT with an RLLR-linked private bank at 8.55% and bundled the top-up — single sanction, ₹65 L combined, no second valuation.",
        ledger: [
          { k: "Existing balance",            v: "₹50,00,000" },
          { k: "Existing rate",                v: "9.65% floating" },
          { k: "Existing EMI",                 v: "₹47,200" },
          { k: "New rate (post-BT)",           v: "8.55% RLLR-linked", highlight: true },
          { k: "Top-up disbursed",             v: "₹15,00,000" },
          { k: "New EMI (combined ₹65 L)",     v: "₹56,800" },
          { k: "Interest saved over 12 yrs",   v: "₹14,20,000", highlight: true },
          { k: "Foreclosure penalty",          v: "₹0 (RBI rule)" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why we structure HL BT this way.",
        items: [
          { title: "One sanction, two outcomes",     body: "Refinance + top-up don't run as separate files. They sit on the same sanction letter, the same valuation, the same MOD." },
          { title: "Negotiated, not advertised",     body: "We don't take the lender's first quote. We counter-pitch across 4 lenders before locking the rate." },
          { title: "Coordinated foreclosure",        body: "Old-lender foreclosure quote, NOC, original-document handover and pari-passu MOD release — sequenced by us, not by you." },
          { title: "Top-up at the new (lower) rate", body: "Top-up isn't priced as a fresh loan; it inherits the new BT rate. Most aggregators bundle a higher top-up rate." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What needs to be true before we pitch the BT.",
        qualifies: [
          "Existing home loan on a residential property (your name, single or joint)",
          "Floating-rate, with at least 12 months of clean repayment track",
          "CIBIL 700+ for banks; 650+ for HFC route",
          "Existing loan is foreclosable — no lock-in or 3-party pari-passu friction",
          "Property docs accessible from the existing lender for handover",
        ],
        also: [
          "Files with 1 missed EMI in the last 12 months — we route around it",
          "Top-up specifically for non-residential use (education, medical, business) — disclosed upfront",
          "BT with mid-tenure rate restructuring instead of full refinance",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "BT scoring & shortlist",  body: "Benchmark your existing rate against the panel; shortlist 4 sharpest lenders for your collateral and ticket." },
        { stage: "Day 2–7",   title: "Parallel pitch",          body: "KYC, financials, property docs and existing-loan statement routed in parallel. First sanctions land within the week." },
        { stage: "Day 7–14",  title: "Foreclosure & legal",      body: "Foreclosure quote requested; new-lender legal & technical run; timelines aligned with existing lender." },
        { stage: "Day 14–60", title: "Disbursal & MOD release",  body: "New sanction disburses; existing loan paid off; original docs collected; pari-passu MOD released." },
      ]}
      faqs={[
        { q: "Is there a foreclosure penalty on my existing HL?", a: "No, if it's a floating-rate HL and the borrower is an individual — RBI prohibits foreclosure penalty in this case. Fixed-rate or company-borrower files may carry 1–2%; we'll model the break-even before you commit." },
        { q: "Will I have to pay fresh stamp duty?",              a: "Stamp duty on the new MOD is payable to the new lender — typically 0.10–0.50% of the loan amount, state-wise. There is no fresh stamp duty on the property itself." },
        { q: "Does the top-up need a separate underwriting cycle?", a: "No. The combined ticket is underwritten as a single HL file by the new lender — one sanction letter, one disbursal." },
        { q: "What can I use the top-up for?",                    a: "Most lenders accept any legal end-use (renovation, education, medical, family event, debt consolidation). Some prohibit speculative use (capital markets, gambling). Disclosed upfront in the sanction letter." },
        { q: "How long until original documents come back?",       a: "After foreclosure, most lenders release original property docs within 7–15 working days. We track the release and coordinate handover to the new lender's vault." },
      ]}
      cta={{
        headline: "Bring us your existing sanction letter.",
        body: "Last 6 months of EMI statements + your sanction letter. We'll come back within one working day with what you'd save and what the top-up could be — no commitment.",
        primary:   { label: "Get a HL BT comparison", to: "/apply" },
        secondary: { label: "Read more on HL",         to: "/hl" },
      }}
    />
  );
}
