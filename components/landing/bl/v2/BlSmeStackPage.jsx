"use client";

import { Briefcase, Layers, Banknote } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Business Loan page", to: "/bl" };

const config = {
  hero: {
    eyebrow: "Business Loan · stackable across lenders",
    title: "Unsecured up to ₹75 L per lender,",
    accent: "stack 4–5 of them for ₹3–₹6.75 Cr.",
    lede: "Each unsecured-BL lender on our 9-partner panel caps at ₹75 L per borrower for top-tier profiles. Stack 4–5 of them and you've unlocked ₹3–₹6.75 Cr of unsecured working capital — zero collateral, zero property valuation, zero mortgage paperwork.",
    bullets: [
      "₹75 L × 9 lenders = ₹6.75 Cr stackable ceiling.",
      "Each sanction is independent — no cross-collateralisation.",
      "We sequence the stack to optimise total ROI, not lender count.",
    ],
    stats: [
      { v: "₹75 L",   l: "Max per lender (unsecured)" },
      { v: "₹6.75 Cr", l: "Combined panel-stack ceiling" },
      { v: "15.50%",  l: "Starting rate (clean profile)" },
      { v: "5–7 days", l: "Typical disbursal" },
    ],
  },
  pillars: {
    eyebrow: "Why stacking works for SMEs",
    title: "Three reasons unsecured BL beats a single LAP for fast capital.",
    items: [
      { icon: Briefcase, title: "No property required",
        body: "No collateral search, no valuation, no mortgage formality. GST + ITR + bank trail is enough — sanction in 5–7 days vs 14–21 for LAP." },
      { icon: Layers,    title: "Stack across lenders",
        body: "Each lender independently sanctions up to ₹75 L for clean SME profiles. Stack 4–5 and unlock ₹3–₹6.75 Cr of unsecured capital. We sequence to optimise blended ROI." },
      { icon: Banknote,  title: "Term loan or Dropline OD",
        body: "Pick term loan for one-time use, Dropline OD for cyclical cash flows. Mix and match across the stack — often 3 term loans + 2 ODs for a balanced facility." },
    ],
  },
  numbers: {
    eyebrow: "Stacking math",
    title: "Per-lender + blended ROI on a 5-lender stack.",
    stats: [
      { v: "5",       l: "Lenders pitched in parallel",  sub: "HDFC, Kotak, Bajaj, Tata, Lendingkart" },
      { v: "₹75 L",   l: "Per-lender ticket",             sub: "Top-tier profile" },
      { v: "₹3.75 Cr", l: "Stacked total",                 sub: "5 × ₹75 L" },
      { v: "16.5%",   l: "Blended ROI",                    sub: "Across 5 lenders, weighted" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹4 Cr unsecured BL stack for an engineering-goods SME.",
    narrative: "Family-run engineering goods business, 8-yr vintage, ₹35 Cr turnover, GST-compliant, CIBIL 762. Needed ₹4 Cr unsecured for a major capex + WC ramp-up. Property collateral was already mortgaged for an LAP. We pitched 6 unsecured-BL lenders; stacked 5 sanctions of ₹75 L each + 1 ₹25 L sub-cap, blended ROI 16.5%, full disbursal in 11 days.",
    ledger: [
      { k: "Business: Engineering goods SME", v: "" },
      { k: "Vintage / turnover",               v: "8 yrs / ₹35 Cr" },
      { k: "Stack composition",                v: "" },
      { k: "  HDFC Bank BL",                   v: "₹75,00,000 @ 15.50%" },
      { k: "  Kotak Mahindra BL",              v: "₹75,00,000 @ 16.00%" },
      { k: "  Bajaj Finserv BL",               v: "₹75,00,000 @ 16.50%" },
      { k: "  Tata Capital BL",                v: "₹75,00,000 @ 17.00%" },
      { k: "  Lendingkart BL",                 v: "₹75,00,000 @ 18.00%" },
      { k: "Total stacked",                    v: "₹3,75,00,000", highlight: true },
      { k: "Blended ROI",                      v: "16.60%", highlight: true },
      { k: "Disbursal TAT",                    v: "11 days end-to-end" },
    ],
  },
  eligibility: {
    eyebrow: "BL stacking qualification",
    title: "Hard rules + scenarios where the stack tightens.",
    qualifies: [
      "Business vintage 3+ years (continuous)",
      "Annual turnover ≥ ₹40 L (GST-filed)",
      "Owner CIBIL 700+ (banks) or 650+ (NBFCs)",
      "Last 12 months' bank statement with no bounces",
      "GST returns filed on time for last 6 months",
      "Profitable in last 2 ITRs (mild loss acceptable on case-by-case)",
    ],
    also: [
      "Each additional BL increases your FOIR. Lender 4 will price tighter than lender 1 — we sequence to minimise this drift.",
      "Profession-tagged sub-products (Doctor / CA loans) get sharper pricing — 50–150 bps below vanilla BL.",
      "Stacking works best when the use-of-funds is genuinely diversified — capex + WC + opex — not just to inflate ticket.",
    ],
  },
  faqs: [
    { q: "Won't stacking BLs hurt my CIBIL?",
      a: "Multiple credit enquiries in a 30-day window are scored as one — so applying to 5 lenders simultaneously doesn't hurt the way 5 separate applications over 6 months would. We pitch all in one go." },
    { q: "Why not just one larger ₹4 Cr sanction?",
      a: "Per-lender unsecured caps (typically ₹75 L–₹1 Cr) make a single ₹4 Cr unsecured sanction nearly impossible. The only way to ₹3 Cr+ unsecured is the stack. Alternative: LAP — but that needs property collateral and 14–21 days." },
    { q: "Can I stack BLs across banks AND NBFCs?",
      a: "Yes — and we recommend it. Banks (HDFC, Kotak) give the sharpest rate but slowest TAT. NBFCs (Bajaj, Tata, Lendingkart) are faster but pricier. Mix balances both." },
    { q: "What if my CIBIL drops mid-stack?",
      a: "Lender 5 will see lender 1–4's hard pulls. If your CIBIL drops as the stack progresses, later lenders may decline or price higher. We pitch all simultaneously to avoid this drift." },
    { q: "Is foreclosure free on stacked BLs?",
      a: "No — RBI's 0% foreclosure rule applies to floating-rate loans to individuals (HL, LAP, LRD). Unsecured BL to a business is outside that scope, so each lender sets a 2–4% foreclosure fee. Statpro can negotiate it down, but not waive entirely on BL." },
  ],
  cta: {
    headline: "Need ₹3 Cr+ unsecured? Send your GST + bank statements.",
    body: "We'll model the optimal 4–5 lender stack, pitch in parallel, and aim for full disbursal in 11–14 days. One working day to a stack-comparison sheet.",
    primary:   { label: "Get a BL-stack quote",   to: "/apply?family=BL" },
    secondary: { label: "See main BL page",        to: "/bl" },
  },
};

export default function BlSmeStackPageV2() {
  return <MarketingLandingLayout family="BL" parent={PARENT} config={config} />;
}
