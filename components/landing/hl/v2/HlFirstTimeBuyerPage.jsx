"use client";

import { Home, BadgePercent, ShieldCheck } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Home Loan page", to: "/hl" };

const config = {
  hero: {
    eyebrow: "Home Loan · for first-time buyers",
    title: "First home?",
    accent: "Up to 90% LTV, 30-year tenure, floor 7.15%.",
    lede: "If this is your first home purchase, you can stretch to 90% LTV (under ₹30L tickets per RBI norms), 30-year tenure, and unlock PMAY-CLSS subsidy where applicable. Our 12-lender HL panel — including LIC HF + Bajaj Housing at 7.15% start — covers every borrower profile.",
    bullets: [
      "Up to 90% LTV on tickets under ₹30 L (RBI cap).",
      "PMAY-CLSS subsidy eligibility check at intake.",
      "12 HL-active banks + HFCs on the panel.",
    ],
    stats: [
      { v: "7.15%", l: "Floor (LIC HF + Bajaj salaried)" },
      { v: "90%",   l: "Max LTV (under ₹30 L)" },
      { v: "30 yrs", l: "Maximum tenure" },
      { v: "₹2.67L", l: "Max PMAY-CLSS subsidy" },
    ],
  },
  pillars: {
    eyebrow: "Why your first HL needs a panel pitch",
    title: "Three things bank-app eligibility checks miss.",
    items: [
      { icon: BadgePercent, title: "PMAY-CLSS check",
        body: "Eligible first-time buyers can claim Credit Linked Subsidy Scheme of up to ₹2.67 L. We check applicability at intake — not all banks proactively apply." },
      { icon: Home,         title: "Builder + property approvals",
        body: "Pre-approved projects across our panel — saves 3–5 days on technical clearance. We tell you which lender already cleared your builder." },
      { icon: ShieldCheck,  title: "Tenure stretching",
        body: "Younger first-time buyers can stretch to 30-yr tenure on Bajaj / LIC HF — lowers EMI by 18–22% vs typical 20-yr offer." },
    ],
  },
  numbers: {
    eyebrow: "First-time-buyer math",
    title: "What you can actually borrow + what your EMI looks like.",
    stats: [
      { v: "90%",     l: "LTV under ₹30 L tickets",   sub: "80% on ₹30L–75L, 75% above" },
      { v: "₹40 K",   l: "Min net monthly income",     sub: "Banks: ₹35K, NBFCs: ₹25K" },
      { v: "FOIR 50%",l: "Standard underwriting cap",  sub: "Stretches to 60% on > ₹1 L income" },
      { v: "30 yrs",  l: "Max tenure",                 sub: "Typically capped at 60 at maturity" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹65 L home in New Town for a 28-yr-old salaried first-time buyer.",
    narrative: "First-job salaried buyer, ₹95 K net monthly income, CIBIL 762, no existing EMIs. Looking at a ₹65 L apartment in New Town. We routed to LIC Housing Finance — special scheme for women borrowers (joint application with spouse) at 7.15%, 25-year tenure, 80% LTV.",
    ledger: [
      { k: "Property cost",                 v: "₹65,00,000" },
      { k: "Buyer down-payment (20%)",       v: "₹13,00,000" },
      { k: "HL requested",                   v: "₹52,00,000" },
      { k: "Lender",                         v: "LIC Housing Finance", highlight: true },
      { k: "Rate",                           v: "7.15% (women co-applicant scheme)", highlight: true },
      { k: "Tenure",                          v: "25 years" },
      { k: "EMI",                             v: "₹37,500/mo" },
      { k: "PMAY-CLSS eligibility",          v: "Not eligible (income > ₹18 L)" },
      { k: "Stamp duty + reg",               v: "~₹4,55,000 (state of WB)" },
      { k: "Sanction TAT",                    v: "8 days" },
    ],
  },
  eligibility: {
    eyebrow: "First-time HL qualification",
    title: "Who qualifies + what tightens.",
    qualifies: [
      "Salaried with 2+ years' total experience (1+ year current employer)",
      "Self-employed with 3+ years' business vintage",
      "Net monthly income ≥ ₹40 K (banks) or ₹25 K (NBFCs)",
      "Age 21–65 at maturity (extends to 70 with co-applicant)",
      "CIBIL 700+ (banks), 650+ (HFCs / NBFCs)",
      "Property has approved building plan / OC",
    ],
    also: [
      "Joint applications (spouse / parent) boost eligibility — combined income drives FOIR",
      "Women borrower (primary or co-applicant) unlocks 5–10 bps lower rate at most lenders",
      "Government / defence employees: separate desk with sharper rates and longer tenure",
    ],
  },
  faqs: [
    { q: "Can I really get 90% LTV?",
      a: "Yes — but only on tickets under ₹30 L per RBI norms. ₹30L–₹75L caps at 80%, above ₹75L at 75%. Stamp duty and registration are not part of LTV — they come out of pocket." },
    { q: "What's PMAY-CLSS and am I eligible?",
      a: "Pradhan Mantri Awas Yojana - Credit Linked Subsidy Scheme. Subsidy of ₹2.30L (LIG: HH income ₹3-6L) or ₹2.67L (MIG-1: HH income ₹6-12L). MIG-2 (₹12-18L) was discontinued. We check eligibility at intake." },
    { q: "Can I include my spouse's income for higher eligibility?",
      a: "Yes — joint application with co-applicant pools incomes for FOIR computation. Spouse, parent, or sibling co-applicant accepted. Co-applicant doesn't need to be a property co-owner." },
    { q: "What if I haven't found the property yet?",
      a: "Get a pre-approval from 4–5 lenders first (no charge, valid 60–90 days). Use the pre-approval letter to negotiate with the seller / builder. We'll convert to formal sanction once you finalise the property." },
    { q: "How long does HL sanction take for first-time buyers?",
      a: "Typical: 3 days for pre-approval, 14–21 days for full disbursal. Faster if your builder is on the lender's pre-approved list — we tell you which 4–5 lenders already cleared your project." },
  ],
  cta: {
    headline: "Buying your first home? Send the property + income details.",
    body: "We'll pull pre-approvals from 4–5 lenders simultaneously, check PMAY eligibility, and bring you the best rate within one working day.",
    primary:   { label: "Get a first-time HL quote", to: "/apply?family=HL" },
    secondary: { label: "See main HL page",          to: "/hl" },
  },
};

export default function HlFirstTimeBuyerPageV2() {
  return <MarketingLandingLayout family="HL" parent={PARENT} config={config} />;
}
