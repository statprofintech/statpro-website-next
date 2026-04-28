"use client";

import { Sparkles, Wallet, Zap } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Personal Loan page", to: "/pl" };

const config = {
  hero: {
    eyebrow: "PL · Wedding sub-product",
    title: "Wedding planning?",
    accent: "Tagged sub-product, sometimes faster than vanilla PL.",
    lede: "Wedding-tagged PL on HDFC, Bajaj and a few NBFCs. Sometimes the same rate as vanilla PL with faster TAT; sometimes 25 bps sharper. The use-case tag puts your file on a different underwriting desk that's used to the timeline pressure.",
    bullets: [
      "Same-day disbursal possible for pre-approved profiles.",
      "25–50 bps sharper than vanilla PL on some lenders.",
      "Tagged sanction letter — useful for vendor advances.",
    ],
    stats: [
      { v: "11–13%", l: "Wedding PL rate range" },
      { v: "₹50 L",  l: "Max ticket per lender" },
      { v: "Same-day", l: "Disbursal (pre-approved)" },
      { v: "5 yrs",  l: "Maximum tenure" },
    ],
  },
  pillars: {
    eyebrow: "Why wedding PL is differently positioned",
    title: "Three small structural advantages — not a different product.",
    items: [
      { icon: Zap,       title: "Faster underwriting desk",
        body: "Wedding-tagged files route to a desk used to deadline pressure. Same-day disbursal common for pre-approved customers; 24–48 hours for standard." },
      { icon: Sparkles,  title: "25–50 bps sharper on some lenders",
        body: "HDFC and Bajaj price wedding PL slightly below their vanilla floor. The discount isn't huge but compounds when stacked with salary-account discounts." },
      { icon: Wallet,    title: "Tagged sanction letter",
        body: "Wedding tag on the sanction letter is useful for vendor advances — caterers, decorators sometimes ask for proof of funded budget. Lender provides on request." },
    ],
  },
  numbers: {
    eyebrow: "Wedding PL across the panel",
    title: "Where the variants sit.",
    stats: [
      { v: "11.50%", l: "HDFC Wedding PL",        sub: "vs vanilla 11.99%" },
      { v: "12.00%", l: "Bajaj Wedding PL",        sub: "Same-day disbursal" },
      { v: "13.00%", l: "Tata Capital",             sub: "Vanilla — no wedding sub-product" },
      { v: "13.00%", l: "Aditya Birla",             sub: "Vanilla, may match wedding rate" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹12 L wedding PL for a salaried borrower with HDFC salary account.",
    narrative: "Salaried borrower, ₹1.4 L net monthly, CIBIL 783, HDFC salary account holder. Sister's wedding in 30 days, ₹12 L gap funded by PL. Routed to HDFC Wedding PL (pre-approved offer); rate 11.50% × 4 yrs, sanction in 10 minutes via app, full disbursal next day.",
    ledger: [
      { k: "Borrower: Salaried, Bengaluru",      v: "" },
      { k: "Net monthly income",                  v: "₹1,40,000" },
      { k: "CIBIL",                               v: "783" },
      { k: "HDFC salary account vintage",         v: "5 years" },
      { k: "Loan requested",                      v: "₹12,00,000" },
      { k: "Tenure",                              v: "4 years" },
      { k: "Lender",                              v: "HDFC Wedding PL", highlight: true },
      { k: "Rate",                                v: "11.50% reducing", highlight: true },
      { k: "EMI",                                 v: "₹31,400/mo" },
      { k: "Sanction TAT",                        v: "10 minutes (pre-approved)" },
      { k: "Disbursal TAT",                       v: "Next day" },
    ],
  },
  eligibility: {
    eyebrow: "Wedding PL qualification",
    title: "Salaried-only — same hard rules as vanilla PL.",
    qualifies: [
      "Salaried with 2+ years' total experience (1+ year current employer)",
      "Net monthly income ≥ ₹35 K (banks) or ₹25 K (NBFCs)",
      "CIBIL 700+ (banks), 650+ (NBFCs)",
      "Wedding date within 90 days OR booking advances paid",
      "Existing FOIR < 50% (after the new PL EMI)",
    ],
    also: [
      "Pre-approved offer + HDFC / Kotak salary account = 10-second sanction. Cleanest path.",
      "Multiple PLs (wedding + something else) can be stacked — 2nd lender prices tighter on FOIR",
      "If you have property, OD-LAP at 8–9% is much cheaper than wedding PL — but slower (14 days vs same-day)",
    ],
  },
  faqs: [
    { q: "Is wedding PL really cheaper than vanilla PL?",
      a: "On HDFC and Bajaj — yes, 25–50 bps lower. On other lenders, the rate is the same; the wedding tag just speeds up the desk routing. Worth asking about either way." },
    { q: "Can the lender disburse directly to vendors?",
      a: "Some lenders (HDFC, Tata) offer split disbursal — partial direct to vendor (caterer, decorator, hotel) + remainder to your account. Useful for large advance payments." },
    { q: "What documents prove the wedding use-case?",
      a: "Wedding card, vendor quotes, hotel booking confirmation, or affidavit. Most lenders accept any one of these. Tata is most flexible on documentation." },
    { q: "Should I use my LAS or LAP for the wedding instead?",
      a: "If you have securities → LAS at 9.25% is significantly cheaper. If you have property → OD-LAP at 8–9% is the cheapest. Wedding PL is the right route if you don't have either." },
    { q: "What about pre-payment after the wedding?",
      a: "PL pre-payment fees apply (2–4% on outstanding) — varies by lender. If you'll pre-pay within 6 months from gifts / cash flows, factor in the pre-pay cost when comparing rates." },
  ],
  cta: {
    headline: "Wedding in the next 90 days? Send your salary slip — sanction in minutes.",
    body: "Pre-approved offers from HDFC / Kotak / Bajaj pulled in parallel. Sharpest rate first. Direct-to-vendor disbursal supported on most lenders.",
    primary:   { label: "Get a wedding PL quote", to: "/apply?family=PL&variant=Wedding" },
    secondary: { label: "See main PL page",        to: "/pl" },
  },
};

export default function PlWeddingPageV2() {
  return <MarketingLandingLayout family="PL" parent={PARENT} config={config} />;
}
