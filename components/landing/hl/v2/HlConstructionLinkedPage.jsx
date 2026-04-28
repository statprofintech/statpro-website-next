"use client";

import { Building, Layers, Clock } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Home Loan page", to: "/hl" };

const config = {
  hero: {
    eyebrow: "HL · Construction-linked disbursal",
    title: "Buying under-construction?",
    accent: "Construction-linked HL — disbursed in slabs, EMI on drawn.",
    lede: "Under-construction property HL disburses in slabs (foundation → slab → walls → roof → finishing → handover) per the builder's construction milestones. You pay EMI only on the disbursed portion — not the full sanctioned amount. Pre-EMI option available till handover.",
    bullets: [
      "Disbursal tied to actual construction milestones.",
      "EMI on disbursed portion only, not full sanction.",
      "Pre-EMI (interest-only) option till handover.",
    ],
    stats: [
      { v: "5–8 slabs", l: "Construction-linked disbursal" },
      { v: "EMI on drawn", l: "Pay only on what's disbursed" },
      { v: "Pre-EMI",   l: "Interest-only option till handover" },
      { v: "30 yrs",    l: "Maximum tenure" },
    ],
  },
  pillars: {
    eyebrow: "Why CLP HL is structurally different",
    title: "Three things to plan for vs ready-to-move HL.",
    items: [
      { icon: Layers,  title: "Slab-wise disbursal",
        body: "Lender disburses to builder per construction milestones. Each slab triggers a fresh valuation by the lender's panel surveyor + builder demand letter." },
      { icon: Clock,   title: "Pre-EMI vs full EMI",
        body: "Pre-EMI: pay only interest on disbursed portion till handover (lower outflow, longer total tenure). Full EMI: P+I from day 1 (higher outflow, shorter total tenure). We model both." },
      { icon: Building, title: "Builder + project approvals",
        body: "Lender's pre-approved project list = 3–5 days saved on technical clearance. We tell you which 4–5 lenders already cleared your builder's project." },
    ],
  },
  numbers: {
    eyebrow: "CLP vs ready-to-move pricing",
    title: "Same rate panel — different cash-flow shape.",
    stats: [
      { v: "Same",      l: "Rate vs ready-to-move",   sub: "7.15% floor on Bajaj / LIC HF" },
      { v: "5–8",       l: "Disbursal slabs",         sub: "Foundation → slab → walls → roof → handover" },
      { v: "Drawn-only", l: "EMI basis",               sub: "Or pre-EMI (interest-only) till handover" },
      { v: "2–3 yrs",   l: "Typical handover lag",     sub: "Affordable: 18 mo · luxury: 36 mo+" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹1.2 Cr CLP HL for an under-construction apartment in New Town (24-mo handover).",
    narrative: "Salaried buyer, ₹1.4 Cr apartment, 24-mo handover from a tier-1 builder (already on HDFC's pre-approved list). HL ₹1.2 Cr at 8.40% RLLR, 25-yr tenure. Builder's payment plan: 20% on booking + 6 slabs of 12% + 8% on handover. Borrower opted for pre-EMI till handover — lower outflow during the rental-phase.",
    ledger: [
      { k: "Property cost",                      v: "₹1,40,00,000" },
      { k: "Builder",                             v: "Pre-approved on HDFC/Bajaj/LIC" },
      { k: "HL sanction",                         v: "₹1,20,00,000", highlight: true },
      { k: "Lender",                              v: "HDFC Bank", highlight: true },
      { k: "Rate",                                v: "8.40% RLLR-linked" },
      { k: "Tenure",                              v: "25 years (post-handover)" },
      { k: "Slab plan",                           v: "20% booking + 6×12% + 8% handover" },
      { k: "Pre-EMI during construction",         v: "Interest-only on each disbursed slab" },
      { k: "Pre-EMI in month 12 (~50% disbursed)", v: "₹42,000/mo" },
      { k: "Full EMI post-handover",              v: "₹95,000/mo" },
      { k: "Sanction TAT",                        v: "9 days" },
    ],
  },
  eligibility: {
    eyebrow: "CLP HL qualification",
    title: "Borrower + property + builder all matter.",
    qualifies: [
      "Salaried with 2+ years' total experience, or self-employed with 3+ years' vintage",
      "Net monthly income ≥ ₹40 K (banks) or ₹25 K (HFCs)",
      "Property: builder + project approval — RERA-registered, OC pathway clear",
      "Down-payment 20–30% available upfront (pre-disbursal)",
      "Construction timeline ≤ 36 months from sanction date",
      "Borrower CIBIL 700+ (banks), 650+ (HFCs)",
    ],
    also: [
      "Pre-approved builder list = lender already done due diligence on the project. Saves 3–5 days at sanction.",
      "Tri-party agreement (you + builder + lender) is standard — no surprise paperwork.",
      "Builder default risk (delay / abandonment) sits with you, but RERA + tri-party agreement mitigate.",
    ],
  },
  faqs: [
    { q: "What's the difference between Pre-EMI and Full EMI?",
      a: "Pre-EMI: pay only interest on the disbursed portion till handover. Lower monthly outflow during construction (₹42K vs ₹95K in our example), but the interest paid doesn't reduce principal. Full EMI: pay P+I from sanction. Higher outflow but principal reduces from day 1. Pre-EMI usually preferred when you're also paying rent." },
    { q: "How is the slab disbursal triggered?",
      a: "Builder issues a demand letter per the agreed payment plan. Lender's panel surveyor visits site to verify construction stage. Once verified, lender disburses to builder directly. You don't see the cash; it goes builder-to-builder." },
    { q: "What if the builder delays construction?",
      a: "Pre-EMI continues till handover regardless of timeline. RERA + tri-party agreement give you recourse. Most lenders allow tenor extension if delay > 6 months. We help track delays + escalate via the lender's project-monitoring desk." },
    { q: "What if I want to switch to a ready-to-move property mid-way?",
      a: "Bankable but messy — usually requires fresh sanction (not a transfer). Better to switch before first slab is disbursed. We help renegotiate." },
    { q: "Can I claim tax deduction on pre-EMI interest?",
      a: "Pre-EMI interest is allowed as a deduction in 5 equal instalments starting from the year of property completion (Section 24). Talk to your CA on your specific year-of-deduction." },
  ],
  cta: {
    headline: "Buying under construction? We'll match you to a pre-approved builder lender.",
    body: "Send the project details + your income docs. We'll tell you within one working day which 4–5 lenders already cleared your builder + bring you the sharpest CLP rate.",
    primary:   { label: "Get a CLP HL quote",   to: "/apply?family=HL&variant=Construction" },
    secondary: { label: "See main HL page",      to: "/hl" },
  },
};

export default function HlConstructionLinkedPageV2() {
  return <MarketingLandingLayout family="HL" parent={PARENT} config={config} />;
}
