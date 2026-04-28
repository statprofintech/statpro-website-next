"use client";

import { Building, Receipt, ShieldCheck } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LRD page", to: "/lrd" };

const config = {
  hero: {
    eyebrow: "LRD · for mall + office owners",
    title: "Loan Against Rental,",
    accent: "for owners of malls, office towers and commercial complexes.",
    lede: "Your asset generates a steady rental waterfall. We discount that future rental into a Loan Against Rental — and place it at the sharpest rate from the 6 NBFCs and banks on our LRD panel that actually understand multi-tenant cash flow.",
    bullets: [
      "Up to 85% of NPV of future rentals — single-LRD ticket up to ₹50 Cr.",
      "Anchor-tenant credit drives sharper pricing than vanilla LAP.",
      "Escrow-backed structure — rental flows directly to repayment.",
    ],
    stats: [
      { v: "85% NPV", l: "Max LTV on rentals" },
      { v: "₹50 Cr",  l: "Largest single LRD" },
      { v: "20 yrs",  l: "Maximum tenure" },
      { v: "8.20%",   l: "HDFC / Kotak preferred-rate floor" },
    ],
  },
  pillars: {
    eyebrow: "Why mall + office owners pick LRD over LAP",
    title: "Three structural advantages over a vanilla LAP on the same property.",
    items: [
      { icon: Receipt,    title: "Cash-flow underwriting",
        body: "Lender sizes the loan off your rental waterfall + tenant credit, not just the building's market value. More capital, sharper rate." },
      { icon: ShieldCheck, title: "Escrow-backed servicing",
        body: "Rentals route through a dedicated escrow that auto-services the EMI. Lower lender risk → 50–100 bps sharper than LAP." },
      { icon: Building,   title: "Anchor-tenant credit halo",
        body: "Tier-1 anchor tenants (MNCs, listed companies, banks) unlock the sharpest pricing. Multi-tenant complexes get weighted-average underwriting." },
    ],
  },
  numbers: {
    eyebrow: "LRD vs LAP on the same building",
    title: "Same property, different structure — different outcome.",
    stats: [
      { v: "75 bps",  l: "Sharper rate (LRD)",     sub: "vs LAP on rented commercial" },
      { v: "+15%",    l: "Higher ticket",           sub: "85% NPV vs 65% LTV" },
      { v: "5 yrs",   l: "Extra tenure available",  sub: "Up to 20 yrs vs 15 yrs LAP" },
      { v: "Auto",    l: "Rental → EMI servicing",  sub: "Via dedicated escrow account" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹35 Cr LRD against a 4-floor commercial office in Salt Lake leased to 3 IT MNCs.",
    narrative: "Family-owned commercial office tower, 4 floors, ~80,000 sq.ft., leased to three Tier-1 IT companies on 9-year lock-ins. Total rental ₹38 L/month. Owner sought ₹35 Cr LRD for property expansion. We routed to HDFC Bank's LRD desk; placed at 8.20% with 18-year tenure on the strength of MNC tenant credit.",
    ledger: [
      { k: "Property: 80k sq.ft. office tower", v: "" },
      { k: "Property valuation",                 v: "₹70,00,00,000" },
      { k: "Total monthly rental",                v: "₹38,00,000" },
      { k: "Weighted lock-in remaining",          v: "9 years" },
      { k: "NPV of rentals (8.20% discount)",     v: "₹42,00,00,000" },
      { k: "Eligible LRD (85% NPV)",              v: "₹35,70,00,000", highlight: true },
      { k: "Lender",                              v: "HDFC Bank LRD desk", highlight: true },
      { k: "Rate",                                v: "8.20% RLLR-linked", highlight: true },
      { k: "Tenure",                              v: "18 years" },
      { k: "Sanction TAT",                         v: "21 days" },
    ],
  },
  eligibility: {
    eyebrow: "When LRD beats LAP",
    title: "Mall + office owner qualification rules.",
    qualifies: [
      "Commercial / office property leased to registered companies (Pvt Ltd / Public Ltd / LLP)",
      "Registered lease deed with weighted-avg lock-in of 36+ months",
      "Total monthly rental ≥ ₹3 L (banded sweet spot ₹10 L+)",
      "Last 12 months' rental credits visible in bank channel",
      "Owner CIBIL 700+ for banks, 650+ for NBFCs",
      "Property has approved building plan / OC + clear title",
    ],
    also: [
      "Anchor-tenant credit (Tier-1 MNC, listed company, bank) unlocks HDFC/Kotak preferred-rate desks at 8.20%",
      "Multi-tenant buildings: weighted-average lessee credit drives the underwriting mix",
      "Vacant floors can be excluded from NPV — LRD against rented portion + LAP against vacant portion is a valid hybrid",
    ],
  },
  faqs: [
    { q: "What rental band qualifies for LRD?",
      a: "Sweet spot is ₹10 L+ monthly rental — most lender desks. Below ₹3 L, vanilla LAP is usually the cleaner placement. Between ₹3–10 L, depends on tenant credit and lock-in length." },
    { q: "Why HDFC / Kotak at 8.20% — what's special?",
      a: "Both banks have preferential LRD desks for premium commercial property leased to listed/large companies. We have direct relationships there; sanctions land at 8.20% on clean files — sharper than most NBFCs on this profile." },
    { q: "What if a tenant vacates mid-tenure?",
      a: "Standard LRD structure includes a Debt Service Reserve Account (DSRA) — 3–6 months of EMI parked upfront — and a re-lease grace window. Good-quality commercial property usually re-leases within the grace period." },
    { q: "Can I do an LRD top-up against rental escalation?",
      a: "Yes — most LRD lenders allow top-ups against incremental rental (new tenants, contractual escalations). Same single-sanction mechanism as a LAP top-up." },
    { q: "What's the rate range I should expect?",
      a: "Floor 8.20% (HDFC/Kotak premium commercial). Mid-market commercial typically clears 9.00–9.50%. Multi-tenant retail 9.50–10.00%. Industrial-style commercial 9.50–10.50%." },
  ],
  cta: {
    headline: "Send the lease deed + tenant list. We'll route to the sharpest LRD desk.",
    body: "We close LRD on commercial property in 21–30 days end-to-end. One working day to a panel-comparison sheet — HDFC/Kotak, Bajaj/AB, L&T, Piramal — side by side.",
    primary:   { label: "Get an LRD quote",     to: "/apply?family=LRD&variant=Fresh" },
    secondary: { label: "See main LRD page",    to: "/lrd" },
  },
};

export default function LrdMallOfficePageV2() {
  return <MarketingLandingLayout family="LRD" parent={PARENT} config={config} />;
}
