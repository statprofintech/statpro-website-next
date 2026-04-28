"use client";

import LandingPageLayout from "@/components/LandingPageLayout";

const PARENT = { label: "All LAP", to: "/lap" };

export default function LapBalanceTransferPage() {
  return (
    <LandingPageLayout
      theme="lap"
      tag="LAP · BT + TOP-UP"
      parent={PARENT}
      hero={{
        eyebrow: "Balance Transfer · most asked variant",
        headline: "Move your LAP. /Top it up./ One sanction.",
        lede: "Most LAP borrowers are still paying 11–12% on a loan today's market prices at 8.5–9%. We refinance with a sharper lender and add a top-up alongside — single sanction, no second valuation.",
        ctaPrimary: { label: "Get a BT comparison", to: "/apply" },
        ctaSecondary: { label: "See the panel", to: "/lenders" },
        badge: "01 / 03",
        stats: [
          { v: "₹38L", l: "Saved on ₹1.5 Cr / 7 yrs" },
          { v: "₹0",   l: "Foreclosure penalty (RBI)" },
          { v: "60d",  l: "Typical close time" },
          { v: "11",   l: "BT-active lenders" },
        ],
      }}
      problem={{
        eyebrow: "The slow leak",
        title: "Your LAP rate quietly drifted away from the market.",
        body: "Floating-rate LAPs reset against the lender's cost of funds, but only as much as the lender chooses. Most files end up 100–300 bps above the panel-floor rate within 18 months. That gap is real money — and it's recoverable.",
        marks: [
          "Your reset has lagged the lender's own MCLR / RLLR cuts.",
          "The lender's relationship-pricing was promised at sanction, never reapplied.",
          "Your CIBIL has improved meaningfully since you took the loan.",
          "Your business or salary cash flow has scaled — eligibility for a sharper lender is now real.",
        ],
      }}
      solution={{
        eyebrow: "How a BT + Top-up works",
        title: "Refinance the old loan and pull a top-up alongside — both in one sanction letter.",
        steps: [
          { n: "I",   title: "Match the right lender", body: "We score your file across rate sensitivity, ticket and collateral type, then pitch to the 4–5 lenders most likely to absorb both the existing balance and a fresh top-up." },
          { n: "II",  title: "Single sanction, single valuation", body: "The new lender sanctions the combined ticket. One legal, one technical. The existing lender is paid off and the top-up disbursed in the same window." },
          { n: "III", title: "Zero foreclosure friction", body: "RBI mandates 0% foreclosure penalty on floating-rate LAP for individuals. We coordinate the foreclosure quote, NOC and document handover end-to-end." },
        ],
      }}
      proof={{
        eyebrow: "What BT actually moves",
        title: "The numbers behind a typical BT + Top-up file.",
        stats: [
          { v: "100–300", l: "bps cut on existing rate", sub: "Median across our 2025 BT files" },
          { v: "₹38 L",   l: "Interest saved",          sub: "On ₹1.5 Cr balance, 7-year residual" },
          { v: "₹0",      l: "Out-of-pocket fee",       sub: "Lender pays our placement fee" },
          { v: "60 d",    l: "Sanction to disbursal",   sub: "Most BT closes inside 60 days" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹1.5 Cr existing LAP at 11.25% → refinanced at 8.85% with a ₹40 L top-up.",
        narrative: "Manufacturing promoter in Howrah. Existing LAP with a PSU bank, 7 years residual, EMI ~₹2.85 L. We placed the BT with an HFC partner at 8.85% and bundled a ₹40 L top-up for working-capital expansion — all in a single sanction letter with no second valuation.",
        ledger: [
          { k: "Existing balance",            v: "₹1,50,00,000" },
          { k: "Existing rate",                v: "11.25% floating" },
          { k: "Existing EMI",                 v: "₹2,85,400" },
          { k: "New rate (post-BT)",           v: "8.85% floating", highlight: true },
          { k: "Top-up disbursed",             v: "₹40,00,000" },
          { k: "New EMI (combined ₹1.9 Cr)",   v: "₹3,03,200" },
          { k: "Interest saved over 7 yrs",    v: "₹38,40,000", highlight: true },
          { k: "Foreclosure penalty",          v: "₹0 (RBI rule)" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why we structure BT this way, every time.",
        items: [
          { title: "One sanction, two outcomes",     body: "Refinance + top-up don't run as separate files. They sit on the same sanction letter, the same valuation report, the same MOD." },
          { title: "Negotiated, not advertised",     body: "We don't take the lender's first quote. We counter-pitch across 4–5 lenders before locking the rate that lands on your sanction." },
          { title: "Coordinated foreclosure",        body: "Old-lender foreclosure quote, NOC, document handover and pari-passu MOD release — sequenced by us, not by you." },
          { title: "Top-up at the new (lower) rate", body: "The top-up isn't priced as a fresh loan; it inherits the new BT rate. Most aggregators bundle a higher top-up rate." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "The hard rules — before you fill out a form.",
        qualifies: [
          "Existing LAP on a residential, commercial or industrial property (your name, single or joint)",
          "Floating-rate, with at least 2 years of clean repayment track",
          "CIBIL 700+ (banks) or 650+ (NBFC route)",
          "Existing loan is foreclosable — no lock-in or 3-party pari-passu friction",
          "Property documents accessible from the existing lender for handover",
        ],
        also: [
          "Fixed-rate LAPs (NBFCs) — economics may still favour BT despite a 1–2% penalty",
          "Borderline CIBIL with strong cash flows — SME-NBFC route exists",
          "Special-purpose collateral (hospitals, schools, hotels)",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "BT scoring & shortlist",  body: "We benchmark your existing rate against the panel and shortlist 4–5 sharpest lenders for your collateral and ticket." },
        { stage: "Day 2–7",   title: "Parallel pitch",          body: "Your KYC, financials, property docs and existing-loan statement are routed in parallel. First sanctions land within the week." },
        { stage: "Day 7–14",  title: "Foreclosure & legal",     body: "We request the foreclosure quote, run the new-lender legal & technical, and align timelines with the existing lender." },
        { stage: "Day 14–60", title: "Disbursal & MOD release", body: "New sanction disburses; existing loan is paid off; original docs collected and pari-passu MOD released." },
      ]}
      faqs={[
        { q: "Is there a foreclosure penalty on my existing LAP?", a: "No, if it's a floating-rate LAP and the borrower is an individual — RBI prohibits foreclosure penalty in this case. Fixed-rate or company-borrower files may carry 1–2%; we'll model the break-even before you commit." },
        { q: "Will I have to pay a fresh stamp duty?",             a: "Stamp duty on the mortgage (MOD) is payable to the new lender — typically 0.10–0.50% of the loan amount, state-wise. There is no fresh stamp duty on the property itself, since you already own it." },
        { q: "Does the top-up need a separate underwriting cycle?", a: "No. The combined ticket (existing balance + top-up) is underwritten as a single LAP file by the new lender — one sanction letter, one disbursal." },
        { q: "How long does the existing lender take to release docs?", a: "After foreclosure, most lenders release original property docs within 7–15 working days. We track the release on your behalf and coordinate handover to the new lender's vault." },
        { q: "Do you charge me anything for a BT?",                a: "No. Our placement fee is paid by the new lender on disbursal, disclosed in the sanction letter. You pay the lender's processing fee and stamp duty — both line-itemed upfront." },
      ]}
      cta={{
        headline: "Bring us your existing sanction letter.",
        body: "We'll come back within one working day with a side-by-side panel comparison — what you save, what you'll pay, and how long the move takes. No commitment, ever.",
        primary:   { label: "Get a BT comparison", to: "/apply" },
        secondary: { label: "Read more on LAP",    to: "/lap" },
      }}
    />
  );
}
