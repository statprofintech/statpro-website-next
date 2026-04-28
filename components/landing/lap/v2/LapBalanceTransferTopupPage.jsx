"use client";

import { Building2, RefreshCw, Banknote, Layers, Scale } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAP page", to: "/lap" };

const config = {
  hero: {
    eyebrow: "Balance Transfer + Top-up · most asked variant",
    title: "Move your Loan Against Property,",
    accent: "and pull a fresh top-up alongside.",
    lede: "Most LAP borrowers are paying 11–12% on a loan that today's market prices at 8.5–9%. We refinance with a sharper lender and add a top-up in a single sanction — no second valuation, no second collateral search, RBI 0% foreclosure on the way out.",
    bullets: [
      "11 BT-active lenders bid in parallel — best ROI wins.",
      "Top-up disbursed alongside the BT, single sanction.",
      "0% foreclosure penalty (RBI rule + Statpro guarantee).",
    ],
    stats: [
      { v: "₹38 L",  l: "Saved on a typical ₹1.5 Cr / 7 yrs balance" },
      { v: "60 days", l: "Typical BT close" },
      { v: "11",     l: "BT-active lenders on panel" },
      { v: "₹0",     l: "Foreclosure penalty" },
    ],
  },
  pillars: {
    eyebrow: "Why our BT closes faster + sharper",
    title: "Three structural reasons — not just rate negotiation.",
    items: [
      { icon: Scale,    title: "Parallel lender pitching",
        body: "Your file is shared with 4–5 right-fit lenders simultaneously. They negotiate against each other; you sign the best terms — not the first offer." },
      { icon: RefreshCw, title: "Single-sanction BT + Top-up",
        body: "The new lender absorbs your existing loan and disburses the top-up alongside. No second valuation, no second mortgage formality, no cash-flow gap." },
      { icon: Banknote, title: "Foreclosure handled end-to-end",
        body: "We coordinate the foreclosure quote with your existing lender, time the disbursal against the closure window, and chase the original-document return." },
    ],
  },
  numbers: {
    eyebrow: "What the math actually looks like",
    title: "Saving compounds with rate spread × residual tenure.",
    stats: [
      { v: "100–300 bps", l: "Typical rate cut",            sub: "From 11.5–12.0% to 8.5–9.0%" },
      { v: "₹38 L",       l: "Interest saved",              sub: "₹1.5 Cr balance, 7 yrs residual, 250 bps cut" },
      { v: "0.50–1.00%",  l: "Processing fee on new loan",  sub: "All-in: legal + technical + valuation bundled" },
      { v: "9 months",    l: "Typical break-even",          sub: "When rate spread ≥ 200 bps" },
    ],
  },
  howItWorks: {
    eyebrow: "How a BT + Top-up sanction works",
    title: "Day-by-day, what to expect from the moment you call.",
    steps: [
      { duration: "Day 0",     title: "Intake call",         body: "30-min discovery: existing lender, rate, outstanding, top-up size needed." },
      { duration: "Day 1–3",   title: "Foreclosure quote",   body: "We request the foreclosure-quote letter from your existing lender on your behalf." },
      { duration: "Day 3–14",  title: "Parallel sanctions",  body: "File pitched to 4–5 lenders. First in-principle sanctions land within a week." },
      { duration: "Day 14–60", title: "Legal + disbursal",   body: "Title search, valuation, MOD with new lender. Foreclosure cheque + top-up cheque issued together." },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹1.5 Cr LAP at 11.75% with 7 years residual + ₹50 L top-up need.",
    narrative: "Promoter with a residential property in South Kolkata. Existing LAP from a leading NBFC, sanctioned in 2021 at 9.5% — drifted to 11.75% over rate cycles. Wanted ₹50 L top-up for business working capital. We routed to HDFC Bank (BT desk), placed at 8.55% on a single sanction covering both BT and top-up.",
    ledger: [
      { k: "Existing outstanding (NBFC)",      v: "₹1,50,00,000" },
      { k: "Existing rate",                     v: "11.75% floating" },
      { k: "Top-up requested",                  v: "₹50,00,000" },
      { k: "New sanction (HDFC Bank)",         v: "₹2,00,00,000", highlight: true },
      { k: "New rate",                          v: "8.55% RLLR-linked", highlight: true },
      { k: "Old EMI (₹1.5 Cr × 11.75% × 7 yrs)", v: "₹2,57,000/mo" },
      { k: "New EMI (₹2 Cr × 8.55% × 12 yrs)",  v: "₹2,23,000/mo" },
      { k: "Monthly cash-flow improvement",     v: "+₹34,000", highlight: true },
      { k: "Lifetime interest saved on BT leg", v: "≈ ₹38,00,000", highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "When BT + Top-up makes the most sense",
    title: "Hard rules + scenarios where it doesn't.",
    qualifies: [
      "Existing LAP / HL outstanding ≥ ₹50 L",
      "Rate spread vs panel-floor ≥ 100 bps",
      "Residual tenure ≥ 4 years (saving compounds with time)",
      "Floating-rate loan with individual borrower (RBI 0% foreclosure applies)",
      "Property docs are clean and digitised — speeds up legal/technical",
      "Top-up requirement is ≥ 20% of existing balance (otherwise just BT)",
    ],
    also: [
      "We can BT a Bajaj Flexi Hybrid into an HDFC term loan and stack a top-up — the structure conversion is friction-free.",
      "BT alone (no top-up) is also worth doing if the rate spread is ≥ 150 bps.",
      "Multiple-property cross-collateralisation can be re-negotiated during BT — often gets you a single-property release.",
    ],
  },
  faqs: [
    { q: "Will my existing lender penalise me for foreclosure?",
      a: "No — RBI mandates 0% foreclosure on floating-rate loans to individuals, and our Statpro guarantee covers fixed-rate edge cases too. Your existing lender will issue a foreclosure quote with no penalty line item." },
    { q: "Does the new lender need me to have the original property docs?",
      a: "Yes — but we coordinate the original-document handover from your existing lender on the day of disbursal. Your foreclosure cheque is exchanged against the original docs, which then go to the new lender's vault." },
    { q: "How is the top-up amount sized?",
      a: "Typically: (eligible LTV on current property value) − (BT outstanding). On a ₹3 Cr property with ₹1.5 Cr existing loan, eligible LTV at 65% = ₹1.95 Cr → top-up cap = ~₹45 L. We'll give you the exact number after one valuation." },
    { q: "Can I do BT + Top-up if my CIBIL has dropped since the original sanction?",
      a: "Banks tighten on CIBIL < 700; NBFCs are more flexible (650+). The rate may not be as sharp as a clean profile, but the BT itself is usually placeable." },
    { q: "What's your fee for handling all this?",
      a: "₹0 to you. Statpro is paid by the lender on disbursal. The new sanction's processing fee (0.5–1% all-in) is the only cost — and we negotiate it down where we can." },
    { q: "How long until the BT is fully done?",
      a: "Typical end-to-end: 30–45 days from your intake call to the foreclosure cheque being issued. Faster if your property docs and existing-loan paperwork are ready on Day 0." },
  ],
  cta: {
    headline: "Send the foreclosure quote. We'll come back with sharper terms.",
    body: "If you have an existing LAP outstanding ≥ ₹50 L and a 100+ bps spread to today's market, the BT math almost certainly works. One working day to a panel-comparison sheet.",
    primary:   { label: "Get a BT quote",     to: "/apply?family=LAP&variant=BT%20%2B%20Top-up" },
    secondary: { label: "See main LAP page",  to: "/lap" },
  },
};

export default function LapBalanceTransferTopupPageV2() {
  return <MarketingLandingLayout family="LAP" parent={PARENT} config={config} />;
}
