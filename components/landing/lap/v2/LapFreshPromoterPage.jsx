"use client";

import { Building2, Banknote, Layers, Sparkles } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAP page", to: "/lap" };

const config = {
  hero: {
    eyebrow: "Fresh LAP · for promoters",
    title: "Fresh Loan Against Property,",
    accent: "for promoters who refuse to overpay.",
    lede: "Up to ₹10 Cr against residential, commercial or industrial property — first-time mortgage on an unencumbered title. We pitch your file to 4–5 right-fit lenders in parallel and bring you the panel-floor rate, not the first offer that lands.",
    bullets: [
      "Panel of 11 LAP-active lenders — banks, NBFCs and HFCs.",
      "LTV up to 65% of market value on standard collateral.",
      "Tenure up to 15 years on a single sanction.",
    ],
    stats: [
      { v: "8.55%",  l: "Panel-floor rate (HDFC Bank · clean salaried)" },
      { v: "₹10 Cr", l: "Maximum single ticket" },
      { v: "65%",    l: "Typical LTV on market value" },
      { v: "15 yrs", l: "Maximum tenure" },
    ],
  },
  pillars: {
    eyebrow: "Why our LAP closes faster + sharper",
    title: "Three structural advantages — not just rate negotiation.",
    items: [
      { icon: Banknote, title: "Parallel lender pitching",
        body: "Your file goes to 4–5 lenders simultaneously. They negotiate against each other; you sign the best terms — not the first offer." },
      { icon: Layers,   title: "Wider collateral acceptance",
        body: "Beyond residential — our panel funds commercial, industrial, mixed-use, hospitals, schools and special-purpose property at competitive rates." },
      { icon: Building2, title: "Single relationship manager",
        body: "One person owns your file end-to-end. No pass-the-file between desks; no need to re-explain your business at every stage." },
    ],
  },
  numbers: {
    eyebrow: "Indicative rate card across the panel",
    title: "Where the panel sits today on a clean LAP file.",
    stats: [
      { v: "8.55%", l: "HDFC Bank",          sub: "Salaried · clean residential" },
      { v: "8.99%", l: "Bajaj Housing",      sub: "Self-employed · large ticket" },
      { v: "9.00%", l: "Tata Capital",       sub: "Commercial · digital sanction" },
      { v: "9.25%", l: "Axis Finance",       sub: "Premium commercial · CIBIL 750+" },
    ],
  },
  howItWorks: {
    eyebrow: "Process",
    title: "From intake call to disbursal — what to expect.",
    steps: [
      { duration: "Day 0",    title: "Intake call",     body: "30-min call: collateral, ticket size, tenure, timeline, use of funds." },
      { duration: "Day 1–3",  title: "File assembly",   body: "We tag and route your KYC, financials and property docs to 4–5 lenders simultaneously." },
      { duration: "Day 3–7",  title: "First sanctions", body: "In-principle offers land. We compare and counter on rate, fees, processing time." },
      { duration: "Day 7–14", title: "Legal + disbursal", body: "Title search, valuation, mortgage creation. Disbursal to your account or BT lender." },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹3 Cr LAP against a self-occupied residential property in Salt Lake.",
    narrative: "Salaried promoter (CIBIL 800+, ₹35 L net annual income) with a self-occupied 4-BHK in Salt Lake worth ₹6.5 Cr. Sought ₹3 Cr LAP for business expansion — a one-time capex round. We pitched HDFC Bank, Bajaj Housing, Tata Capital and Aditya Birla. HDFC won at 8.55%.",
    ledger: [
      { k: "Property: 4-BHK, Salt Lake",      v: "" },
      { k: "Property valuation",               v: "₹6,50,00,000" },
      { k: "Loan requested",                    v: "₹3,00,00,000" },
      { k: "Eligible LTV @ 50%",                v: "₹3,25,00,000" },
      { k: "Lender",                            v: "HDFC Bank", highlight: true },
      { k: "Rate",                              v: "8.55% RLLR-linked", highlight: true },
      { k: "Tenure",                            v: "15 years" },
      { k: "EMI",                               v: "₹2,97,000/mo" },
      { k: "Processing fee (all-in)",            v: "₹3,00,000 (1% of ticket)" },
      { k: "Sanction TAT",                      v: "9 days end-to-end" },
    ],
  },
  eligibility: {
    eyebrow: "Who qualifies",
    title: "The hard rules — before you fill out a single form.",
    qualifies: [
      "Property in your name (single or joint) — residential, commercial or industrial",
      "Clear title with no current mortgage (or a BT-able existing loan)",
      "Age 21–70 at maturity (borrower)",
      "CIBIL 700+ for banks, 650+ for NBFCs",
      "Salaried with 2+ years' job tenure, OR self-employed with 3+ years' vintage",
      "Property has approved building plan / OC where applicable",
    ],
    also: [
      "Borderline profiles route to specialist NBFCs — old property, low CIBIL, first-time self-employed.",
      "Joint applicants improve eligibility (FOIR computed on combined income).",
      "Multi-property packages (e.g., LAP against two properties) often unlock a sharper LTV.",
    ],
  },
  faqs: [
    { q: "What's the lowest LAP rate I can get?",
      a: "Panel-floor today is 8.55% on HDFC Bank for a clean salaried profile (CIBIL 800+, residential property, ticket ≥ ₹50 L). Self-employed and special-collateral files price 50–150 bps higher. We always quote the actual offer, not just the marketing-floor rate." },
    { q: "Can I get LAP on commercial or industrial property?",
      a: "Yes — 6+ NBFCs on our panel actively fund commercial offices, shops, industrial sheds and warehouses. Banks usually fund residential and standard commercial; NBFCs go deeper into industrial and special-purpose." },
    { q: "How much LAP can I get against my property?",
      a: "Standard LTV is 60–65% of market value on residential and commercial. Industrial caps at 55–60%. Special-purpose (hospitals, schools, hotels) caps at 50–55%. We give you the exact eligibility from 4–5 lenders before you commit." },
    { q: "What's the maximum tenure?",
      a: "Banks: 12–15 years. NBFCs: up to 15 years (some go 20). Tenure interacts with borrower age — most lenders cap at 70 at maturity." },
    { q: "What's your fee structure?",
      a: "₹0 to you. Statpro is paid by the lender on disbursal (DSA model). The lender's processing fee (0.5–1% all-in, includes legal/technical/valuation) is the only cost — and we negotiate it down where we can." },
    { q: "How long does a fresh LAP sanction take?",
      a: "Typical: 7 days for first in-principle, another 7–14 days for legal/technical and disbursal. Faster if your property docs are clean and digitised. NBFCs are 30–40% faster than banks on TAT, slightly higher on rate." },
  ],
  cta: {
    headline: "Send your property details. We'll come back with quotes from 4–5 lenders.",
    body: "Tell us the collateral type, ticket size and tenure. Within one working day you'll have a panel-comparison sheet — sharpest rate first.",
    primary:   { label: "Get a fresh LAP quote", to: "/apply?family=LAP&variant=Fresh" },
    secondary: { label: "See main LAP page",      to: "/lap" },
  },
};

export default function LapFreshPromoterPageV2() {
  return <MarketingLandingLayout family="LAP" parent={PARENT} config={config} />;
}
