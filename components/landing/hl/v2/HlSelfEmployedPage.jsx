"use client";

import { Briefcase, Stethoscope, BadgePercent } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Home Loan page", to: "/hl" };

const config = {
  hero: {
    eyebrow: "Home Loan · for self-employed",
    title: "Self-employed?",
    accent: "Home Loan, sized off your business.",
    lede: "Salaried-only HL desks decline you, or price you 100–200 bps higher. Our panel has 5 HFCs that underwrite self-employed off ITR + GST + bank statement — without the salary-slip filter. Same panel-floor rates as salaried for clean files.",
    bullets: [
      "ITR + GST + bank-trail underwriting — no salary-slip filter.",
      "Profession-tagged sub-products (Doctor / CA HL) — sharper.",
      "Same 7.15% panel-floor on clean self-employed files.",
    ],
    stats: [
      { v: "7.15%",   l: "Panel-floor (Bajaj self-employed)" },
      { v: "5",       l: "Self-employed-friendly HFCs on panel" },
      { v: "₹15 Cr",  l: "Largest self-employed HL placed" },
      { v: "30 yrs",  l: "Maximum tenure" },
    ],
  },
  pillars: {
    eyebrow: "Why our self-employed HL is sharper",
    title: "Specialist desks beat generic underwriting.",
    items: [
      { icon: Briefcase,    title: "Business-cash-flow underwriting",
        body: "ITR + GST + bank statements drive the income trail. Lender computes serviceability off business profitability + personal income, not just one or the other." },
      { icon: Stethoscope,  title: "Profession-tagged sub-products",
        body: "Doctor HL, CA HL, Architect HL — separate underwriting desks at most HFCs with 25–75 bps sharper pricing than vanilla self-employed HL." },
      { icon: BadgePercent, title: "Same RBI floor",
        body: "RLLR-linked rates same as salaried. The 'self-employed premium' is a myth on most HFCs (Bajaj, LIC, AB) — they don't price differently for clean files." },
    ],
  },
  numbers: {
    eyebrow: "Self-employed vs salaried HL",
    title: "Mostly the same. A few things tighten.",
    stats: [
      { v: "+25 bps",   l: "Self-employed rate premium",  sub: "vs panel-floor for clean salaried" },
      { v: "75–80%",    l: "Max LTV",                       sub: "Same as salaried for ₹30L–75L band" },
      { v: "3 yrs",     l: "Min business vintage",          sub: "vs 2 yrs job tenure for salaried" },
      { v: "GST + ITR", l: "Income-proof basis",            sub: "Bank statement layered on top" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹1.4 Cr HL for a Kolkata-based pathologist (self-employed) buying a ₹2 Cr apartment.",
    narrative: "Doctor-promoter (pathology lab, 6-year vintage), ITR ₹85 L for last 2 years, clean GST trail, CIBIL 798. Buying a ₹2 Cr 4-BHK in Salt Lake. We routed to Bajaj Housing Finance's profession-tagged Doctor HL. Placed at 7.15% — same floor as salaried clean profiles, no SE premium.",
    ledger: [
      { k: "Borrower: Pathologist, Kolkata",       v: "" },
      { k: "Practice vintage",                      v: "6 years" },
      { k: "Last 2 ITRs (avg)",                     v: "₹85,00,000/yr" },
      { k: "Property cost",                          v: "₹2,00,00,000" },
      { k: "Down-payment (30%)",                    v: "₹60,00,000" },
      { k: "HL requested",                          v: "₹1,40,00,000" },
      { k: "Eligible LTV @ 75%",                    v: "₹1,50,00,000" },
      { k: "Lender",                                v: "Bajaj Housing (Doctor HL)", highlight: true },
      { k: "Rate",                                  v: "7.15% floating", highlight: true },
      { k: "Tenure",                                v: "20 years" },
      { k: "EMI",                                   v: "₹1,10,000/mo" },
      { k: "Sanction TAT",                          v: "11 days" },
    ],
  },
  eligibility: {
    eyebrow: "Self-employed HL qualification",
    title: "Property + business profile + clean trail.",
    qualifies: [
      "Business vintage 3+ years (continuous)",
      "Last 2 ITRs filed + computation, no significant variances",
      "GST returns filed for last 12 months (where applicable)",
      "Last 12 months' bank statements with no unexplained large credits/debits",
      "Owner CIBIL 700+ for banks, 650+ for HFCs",
      "Property has approved building plan / OC + clear title",
    ],
    also: [
      "Profession-tagged sub-products on most HFCs — Doctor HL, CA HL, Architect HL — get sharper pricing",
      "Borderline ITR-bank-statement variance is bridged via certified turnover certificate from your CA",
      "Co-applicant from family (spouse, parent) on the loan boosts eligibility, especially on FOIR-tight files",
    ],
  },
  faqs: [
    { q: "Why do banks decline self-employed HL files?",
      a: "Banks default to salary-slip underwriting; self-employed income is harder to verify. Most banks have a separate self-employed desk with tighter LTV (70% vs 80%) and a +50 bps rate premium. Our HFC panel underwrites self-employed without those penalties." },
    { q: "What's the rate spread vs salaried?",
      a: "Typically 25–50 bps higher on a clean self-employed file at banks. On HFC panel — Bajaj Housing, LIC HF, Aditya Birla — the spread often disappears entirely, same floor as salaried." },
    { q: "Can I show personal income + business income together?",
      a: "Yes — most lenders compute combined serviceability. Personal salary (if you're also salaried elsewhere or have rental income) layers on top of business income for FOIR computation." },
    { q: "What if my GST registration is recent?",
      a: "Lenders accept ≥ 12 months of GSTR filings. If under 12 months, we'd recommend waiting or routing to HFCs that accept ITR + bank trail without GST (Cholamandalam, Aditya Birla)." },
    { q: "Can I do BT + Top-up on a self-employed HL?",
      a: "Yes — same panel handles BT + Top-up on self-employed files. Often the trigger is: business has scaled and the original ticket was sized off old ITRs. We re-pitch with current 24-month trail and the eligibility ladder typically jumps 30–50%." },
  ],
  cta: {
    headline: "Self-employed? Send your ITR + GST. We'll route to the right HFC.",
    body: "Doctor, CA, architect, business owner — the right HFC desk gets you the same panel-floor rate as salaried, without the SE premium. One working day to a panel-comparison.",
    primary:   { label: "Get a self-employed HL quote", to: "/apply?family=HL" },
    secondary: { label: "See main HL page",              to: "/hl" },
  },
};

export default function HlSelfEmployedPageV2() {
  return <MarketingLandingLayout family="HL" parent={PARENT} config={config} />;
}
