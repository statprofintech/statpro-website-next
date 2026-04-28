"use client";

import { RefreshCw, Banknote, ShieldCheck } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Home Loan page", to: "/hl" };

const config = {
  hero: {
    eyebrow: "HL · Balance Transfer + Top-up",
    title: "Stuck 1–2% above market?",
    accent: "Move it. Top it up.",
    lede: "Most HL borrowers stay 1–2% above market because nobody told them spreads tightened. We move your loan to a sharper lender (RBI 0% foreclosure on floating-rate HL to individuals + Statpro guarantee) and stack a top-up alongside — single sanction, single valuation.",
    bullets: [
      "RBI rule: 0% foreclosure on floating-rate HL to individuals.",
      "Statpro guarantee extends 0% to fixed-rate edge cases.",
      "Top-up at the new (lower) rate, single sanction.",
    ],
    stats: [
      { v: "100–200 bps", l: "Typical rate cut" },
      { v: "₹25 L+",       l: "Saved on a ₹1 Cr balance / 15 yrs" },
      { v: "₹0",           l: "Foreclosure penalty" },
      { v: "12",           l: "HL-active lenders on panel" },
    ],
  },
  pillars: {
    eyebrow: "Why our HL BT closes faster + sharper",
    title: "Three structural reasons + one regulatory tailwind.",
    items: [
      { icon: RefreshCw,    title: "Single-sanction BT + Top-up",
        body: "New lender absorbs your existing loan and disburses the top-up alongside. No second valuation, no second mortgage, no cash-flow gap." },
      { icon: Banknote,     title: "Foreclosure handled end-to-end",
        body: "We coordinate the foreclosure quote, time disbursal against the closure window, and chase the original-document return from your existing lender." },
      { icon: ShieldCheck,  title: "RBI rule + Statpro guarantee",
        body: "RBI mandates 0% foreclosure on floating-rate HL to individuals. Our guarantee extends this to fixed-rate edge cases across the panel." },
    ],
  },
  numbers: {
    eyebrow: "What the math actually looks like",
    title: "Saving compounds with rate spread × residual tenure.",
    stats: [
      { v: "100–200 bps",  l: "Typical rate cut",            sub: "From 9.0–9.5% to 7.5–8.0%" },
      { v: "₹25 L+",        l: "Interest saved",              sub: "₹1 Cr balance, 15 yrs residual, 150 bps cut" },
      { v: "0.25–0.50%",    l: "Processing fee on new HL",    sub: "All-in: legal + technical + valuation" },
      { v: "11 months",     l: "Typical break-even",          sub: "When rate spread ≥ 150 bps" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹85 L HL at 9.50% with 14 years residual + ₹15 L top-up.",
    narrative: "Salaried borrower with a residential property in Salt Lake. HL from a leading PSU bank, sanctioned 2020 at 8.65% — drifted to 9.50% over rate cycles. Wanted ₹15 L top-up for child's higher education. We routed to HDFC Bank (BT desk). Placed at 7.95% (RLLR-linked, women co-applicant scheme), single sanction covering BT + top-up.",
    ledger: [
      { k: "Existing outstanding (PSU bank)",   v: "₹85,00,000" },
      { k: "Existing rate",                      v: "9.50% floating" },
      { k: "Top-up requested",                   v: "₹15,00,000" },
      { k: "New sanction (HDFC Bank)",           v: "₹1,00,00,000", highlight: true },
      { k: "New rate",                           v: "7.95% RLLR-linked", highlight: true },
      { k: "Old EMI (₹85 L × 9.5% × 14 yrs)",     v: "₹93,000/mo" },
      { k: "New EMI (₹1 Cr × 7.95% × 18 yrs)",   v: "₹91,000/mo" },
      { k: "Top-up funded",                      v: "₹15 L for child's MS abroad" },
      { k: "Lifetime interest saved on BT leg",  v: "≈ ₹26,00,000", highlight: true },
      { k: "Sanction TAT",                        v: "12 days" },
    ],
  },
  eligibility: {
    eyebrow: "When HL BT + Top-up makes sense",
    title: "Hard rules + scenarios where it doesn't.",
    qualifies: [
      "Existing HL outstanding ≥ ₹25 L",
      "Rate spread vs panel-floor ≥ 100 bps",
      "Residual tenure ≥ 5 years (saving compounds with time)",
      "Floating-rate HL with individual borrower (RBI 0% foreclosure applies)",
      "Property docs are clean and digitised — speeds up legal/technical",
      "Borrower CIBIL 700+ for banks, 650+ for HFCs",
    ],
    also: [
      "If your current lender offers an in-house rate revision matching our panel-floor, taking that internally is sometimes simpler",
      "Top-up alone (without BT) is also worth doing if your current lender offers it at the panel-floor rate",
      "Tenure reset is possible — extending tenure on BT lowers EMI but increases lifetime interest. We model both for you",
    ],
  },
  faqs: [
    { q: "Is there really 0% foreclosure on my existing HL?",
      a: "Yes — RBI mandates 0% foreclosure on floating-rate HL to individuals (RBI circular DBOD.No.Dir.BC.107/13.03.00/2011-12). Our Statpro guarantee covers fixed-rate edge cases too. Your existing lender will issue a foreclosure quote with no penalty line item." },
    { q: "Will my CIBIL drop because of the BT?",
      a: "BT itself doesn't drop CIBIL. The new lender does a hard pull at the time of sanction (one credit enquiry on your report). The closed loan stays on your CIBIL trail as 'Closed - Settled in Full' — neutral to positive." },
    { q: "How is the top-up amount sized?",
      a: "Typically: (eligible LTV on current property value) − (BT outstanding). On a ₹1.5 Cr property with ₹85 L existing loan, eligible LTV at 80% = ₹1.20 Cr → top-up cap = ~₹35 L. We give you the exact number after one valuation." },
    { q: "Can I do BT + Top-up if my CIBIL has dropped since the original sanction?",
      a: "Banks tighten on CIBIL < 700; HFCs are more flexible (650+). The rate may not be as sharp as a clean profile, but the BT itself is usually placeable." },
    { q: "How long does HL BT take?",
      a: "Typical: 12–21 days from intake call to foreclosure cheque issue. Bajaj and Tata Capital offer 5-min digital pre-sanction; full BT close in 7 working days for clean files." },
  ],
  cta: {
    headline: "Send your existing sanction letter. We'll come back with sharper terms.",
    body: "If you have an existing HL ≥ ₹25 L and a 100+ bps spread to today's market, the BT math almost certainly works. One working day to a panel-comparison sheet.",
    primary:   { label: "Get an HL BT quote", to: "/apply?family=HL&variant=Balance%20Transfer" },
    secondary: { label: "See main HL page",   to: "/hl" },
  },
};

export default function HlBalanceTransferPageV2() {
  return <MarketingLandingLayout family="HL" parent={PARENT} config={config} />;
}
