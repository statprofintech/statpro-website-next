"use client";

import { Briefcase, Stethoscope, Calculator, Layers } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAP page", to: "/lap" };

const config = {
  hero: {
    eyebrow: "LAP for self-employed · doctors, CAs, business owners",
    title: "Self-employed Loan Against Property —",
    accent: "underwritten on your business, not just your salary slip.",
    lede: "Salaried-only LAP desks decline self-employed promoters or price you 100–150 bps higher. Our panel includes 5 NBFCs and HFCs that underwrite self-employed off ITR + GST + bank statement, with profession-tagged sub-products for doctors, CAs and architects at sharper pricing.",
    bullets: [
      "ITR + GST + bank-trail underwriting — no salary-slip filter.",
      "Profession-tagged sub-products: 25–75 bps sharper for doctors, CAs.",
      "Same panel-floor rates as salaried for clean files.",
    ],
    stats: [
      { v: "5",      l: "Self-employed-friendly lenders on panel" },
      { v: "8.99%",  l: "Floor rate (Bajaj Housing self-employed)" },
      { v: "₹15 Cr", l: "Largest self-employed LAP placed" },
      { v: "65%",    l: "Same LTV as salaried on clean files" },
    ],
  },
  pillars: {
    eyebrow: "Why our self-employed LAP is sharper",
    title: "Specialist desks beat generic underwriting.",
    items: [
      { icon: Briefcase,    title: "Business-cash-flow underwriting",
        body: "ITR, GST returns, bank statements form the income trail. Lender computes serviceability off business profitability + personal income, not just one or the other." },
      { icon: Stethoscope,  title: "Profession-tagged sub-products",
        body: "Doctors, CAs, architects, lawyers — separate underwriting desks at most NBFCs with 25–75 bps sharper pricing than vanilla self-employed LAP." },
      { icon: Calculator,   title: "Top-up against business growth",
        body: "If your business turnover has grown post-original-sanction, top-up eligibility re-sized off the latest 24-month bank trail. Often 30–50% more than the original ticket." },
    ],
  },
  numbers: {
    eyebrow: "Self-employed vs salaried — what changes",
    title: "Mostly the same. A few things tighten.",
    stats: [
      { v: "+25 bps",  l: "Self-employed rate premium",  sub: "vs panel-floor for clean salaried" },
      { v: "60–65%",   l: "LTV on self-employed",         sub: "Same band as salaried" },
      { v: "3 yrs",    l: "Min business vintage",          sub: "vs 2 yrs job tenure for salaried" },
      { v: "GST + ITR", l: "Income-proof basis",          sub: "Bank statement layered on top" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹2 Cr LAP for a Kolkata-based pathologist (self-employed).",
    narrative: "Doctor-promoter (pathology lab, 6-year vintage) with 2 self-occupied residential properties. ITR ₹85 L for last 2 years; GST trail clean. Sought ₹2 Cr LAP for clinic-equipment expansion. Routed to Bajaj Housing's profession-tagged Doctor LAP. Placed at 8.99% — same floor as salaried clean profiles, no premium.",
    ledger: [
      { k: "Borrower: Pathologist, Kolkata",       v: "" },
      { k: "Practice vintage",                      v: "6 years" },
      { k: "Last 2 ITRs (avg)",                     v: "₹85,00,000/yr" },
      { k: "Property valuation (single)",           v: "₹4,50,00,000" },
      { k: "Loan requested",                        v: "₹2,00,00,000" },
      { k: "Eligible LTV @ 65%",                    v: "₹2,92,00,000" },
      { k: "Lender",                                v: "Bajaj Housing (Doctor LAP)", highlight: true },
      { k: "Rate",                                  v: "8.99% floating (no SE premium)", highlight: true },
      { k: "Tenure",                                v: "12 years" },
      { k: "EMI",                                   v: "₹2,21,000/mo" },
      { k: "Sanction TAT",                          v: "11 days" },
    ],
  },
  eligibility: {
    eyebrow: "Self-employed LAP qualification rules",
    title: "Property + business profile + clean trail.",
    qualifies: [
      "Business vintage 3+ years (continuous)",
      "Last 2 ITRs filed + computation, no significant variances",
      "GST returns filed for last 12 months (where applicable)",
      "Last 12 months' bank statements with no unexplained large credits/debits",
      "Owner CIBIL 700+ for banks, 650+ for NBFCs",
      "Property in your name (single/joint), clear title, approved building plan",
    ],
    also: [
      "Profession-tagged sub-products on most NBFCs — Doctor LAP, CA LAP, Architect LAP — get sharper pricing.",
      "Borderline ITR-bank-statement variance is bridged via certified turnover certificate from your CA.",
      "Co-applicant from family (spouse, parent) on the loan boosts eligibility, especially on FOIR-tight files.",
    ],
  },
  faqs: [
    { q: "Why do banks decline self-employed LAP files?",
      a: "Banks default to salary-slip underwriting; self-employed income is harder to verify. Most banks have a separate self-employed desk but with tighter LTV (50–55% vs 65%) and higher rate premium (+50 bps). Our SME-NBFC panel underwrites self-employed without those penalties." },
    { q: "What's the rate spread vs salaried?",
      a: "Typically 25–50 bps higher on a clean self-employed file. On profession-tagged sub-products (Doctor LAP, CA LAP), the spread often disappears entirely — same floor as salaried." },
    { q: "Can I show personal income + business income together?",
      a: "Yes — most lenders compute combined serviceability. Personal salary (if you're also salaried elsewhere or have rental income) layers on top of business income for FOIR computation." },
    { q: "What if my GST registration is recent?",
      a: "Lenders accept ≥ 12 months of GSTR filings. If under 12 months, we'd recommend waiting or routing to NBFCs that accept ITR + bank trail without GST (Cholamandalam, Profectus)." },
    { q: "Can I do BT + Top-up on a self-employed LAP?",
      a: "Yes — same panel handles BT + Top-up on self-employed files. Often the trigger is: business has scaled and the original ticket was sized off old ITRs. We re-pitch with a current 24-month trail and the eligibility ladder typically jumps 30–50%." },
    { q: "What if my CA-certified turnover is higher than ITR?",
      a: "Acceptable on most NBFCs as long as the variance is explainable (e.g., recent expansion, new product line). A CA-certified turnover certificate covering the gap is part of the standard self-employed file." },
  ],
  cta: {
    headline: "Self-employed? Send your ITR + GST. We'll route to the right lender.",
    body: "Doctor, CA, architect, business owner — the right NBFC desk gets you the same panel-floor rate as salaried, without the SE premium. One working day to a panel-comparison.",
    primary:   { label: "Get a self-employed LAP quote", to: "/apply?family=LAP&variant=Fresh" },
    secondary: { label: "See main LAP page",              to: "/lap" },
  },
};

export default function LapSelfEmployedPageV2() {
  return <MarketingLandingLayout family="LAP" parent={PARENT} config={config} />;
}
