"use client";

import { Home, RefreshCw, BadgePercent } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const config = {
  tag: "HL",
  tagline: "Home Loan",
  title: "Home Loan — for the home you want, at the rate you deserve.",
  lede: "Up to 90% LTV, 30-year tenure, starting at 7.20% on special schemes. Purchase, balance transfer, top-up. Salaried, self-employed and NRI profiles all routed to the right lender on our 12-bank + HFC panel.",
  heroBullets: [
    "12 HL-active lenders — banks and housing finance companies.",
    "Balance transfer with top-up at the same low rate, no second valuation.",
    "5–10 bps rate concession for women borrowers and government employees.",
  ],
  stats: [
    { value: "7.15%", label: "Starting rate (LIC HF · Bajaj salaried)" },
    { value: "90%", label: "Maximum LTV (under ₹30L)" },
    { value: "30 yrs", label: "Maximum tenure" },
    { value: "₹40 Cr", label: "Largest single ticket (Aditya Birla)" },
  ],
  lenderCount: 12,

  heroSlides: [
    { id: "rate", eyebrow: "Sharper rate", panel: "RATES",
      title: "Home Loan — for the home you want, at the rate you deserve.",
      lede: "Floor 7.15% on LIC HFL and Bajaj Housing salaried-segment; 7.70–7.75% on Kotak / HDFC / Tata Capital / Aditya Birla. We pitch your file to 4–5 right-fit lenders simultaneously and bring you the best.",
      bullets: ["12 HL-active lenders on the panel.", "RLLR / repo-linked transparency on every bank quote.", "Segmented pricing: salaried, self-employed, doctor, women — sharpest applies."],
    },
    { id: "bt", eyebrow: "Balance Transfer + Top-up", panel: "BT",
      title: "Stuck 1–2% above market? — Move it. Top it up.",
      lede: "Most HL borrowers stay 1–2% above market because nobody told them spreads tightened. We move you with no foreclosure penalty (RBI rule + Statpro guarantee) and stack a top-up alongside.",
      bullets: ["RBI rule: zero foreclosure on floating HL to individuals.", "Top-up at the new (lower) rate, single sanction.", "Most-asked variant on our HL panel."],
    },
    { id: "ltv", eyebrow: "Up to 90% LTV on property cost", panel: "STATS",
      title: "Up to 90% of property cost — RBI-capped, lender-tiered.",
      lede: "RBI norms cap LTV by ticket size: up to 90% on tickets under ₹30L, 80% on ₹30L–₹75L, 75% above ₹75L. The remaining own-contribution + stamp duty + registration is out-of-pocket — HL never funds these.",
      bullets: ["90% LTV on affordable-segment tickets.", "Construction-linked (CLP) or upfront disbursal.", "RLLR / repo-linked rate with full spread disclosure."],
    },
    { id: "schemes", eyebrow: "Special schemes", panel: "COLLATERAL",
      title: "Women, government, defence — pick the deepest concession.",
      lede: "Most lenders offer 5–10 bps lower for primary woman borrower, similar for central / state government and defence. We always check applicability and route to the lender with the deepest concession on your profile.",
      bullets: ["Women borrower: 5–10 bps lower.", "Government / defence: separate desk, faster sanction.", "First-time buyer: PMAY-CLSS eligibility check (where applicable)."],
    },
    { id: "speed", eyebrow: "Speed to disbursal", panel: "SPEED",
      title: "From eligibility check to disbursal in 14–21 days.",
      lede: "We pull eligibility from 4–5 lenders in parallel on Day 0, so you have a pre-approval to negotiate with the seller within 3 days. Full disbursal lands in 14–21 days.",
      bullets: ["Day 0–3: pre-approval from 4–5 lenders.", "Day 3–14: legal, technical, valuation.", "Day 14–21: agreement, mortgage, disbursal."],
    },
  ],

  valueHeadline: "Why your HL closes at a sharper rate with us.",
  valueProps: [
    { icon: BadgePercent, title: "Repo-linked transparency",
      body: "Our panel quotes RLLR / repo-linked rates with full spread disclosure — so you know exactly what your rate moves with." },
    { icon: RefreshCw,    title: "BT + top-up bundled",
      body: "Move your existing HL to a sharper lender and unlock a top-up at the same rate, single sanction." },
    { icon: Home,         title: "Builder + property approvals",
      body: "Pre-approved projects across our panel — saves 3–5 days on technical clearance." },
  ],

  elig: {
    assetLabel: "Property cost",
    defaultPropertyValue: 8000000,
    min: 1500000,
    max: 400000000,
    step: 100000,
    ltvPct: 80,
    ltvLabel: "LTV (90% for tickets < ₹30L)",
    defaultTenure: 20,
    maxTenure: 32,
    defaultRate: 8.0,
    rateMin: 7.15,
    rateMax: 13.2,
  },

  rateTable: [
    { lender: "LIC Housing Finance",  category: "HFC",                          rate: "7.15%", ticket: "₹15 Cr", bestFor: "Long-tenure · government employee" },
    { lender: "Bajaj Housing Finance",category: "HFC · segmented pricing",      rate: "7.15%", ticket: "₹15 Cr", bestFor: "Salaried · 32-yr tenure available" },
    { lender: "Kotak Mahindra Bank",  category: "Private bank · RLLR-linked",   rate: "7.70%", ticket: "₹10 Cr", bestFor: "Salaried + bonus / RSU" },
    { lender: "Aditya Birla Housing", category: "HFC · pre-approved projects",  rate: "7.70%", ticket: "₹40 Cr", bestFor: "Mid-market · large ticket" },
    { lender: "HDFC Bank",            category: "Private bank · RLLR-linked",   rate: "7.75%", ticket: "₹15 Cr", bestFor: "Salaried · women borrower scheme" },
    { lender: "Tata Capital Housing", category: "HFC · 5-min digital sanction", rate: "7.75%", ticket: "₹10 Cr", bestFor: "BT in 24 hrs · digital-first" },
  ],

  variants: [
    { code: "FRESH", title: "Fresh HL",
      body: "First-time home loan for purchase or self-construction. Construction-linked disbursal for under-construction; lump-sum for ready property.",
      bullets: ["Up to 90% LTV (under ₹30L)", "Tenure up to 30 years", "Construction-linked for projects"] },
    { code: "BT", title: "Balance Transfer", highlight: true,
      body: "Move your existing HL to a sharper lender. Foreclosure penalty is ₹0 (RBI rule + Statpro guarantee).",
      bullets: ["Same property, sharper rate", "No second valuation", "Typical saving 100–200 bps"] },
    { code: "BT+TU", title: "BT + Top-up",
      body: "Refinance and pull a top-up alongside, in a single sanction — for renovation, child's education, debt consolidation.",
      bullets: ["Top-up at the new (low) rate", "Single sanction, single mortgage", "Use-of-funds is your choice"] },
    { code: "PMAY", title: "Affordable / PMAY",
      body: "PMAY-CLSS interest subsidy eligibility check, sub-₹30L tickets, 90% LTV — for first-time buyers in affordable segment.",
      bullets: ["Subsidy up to ₹2.67L (CLSS)", "First-time-buyer route", "EWS / LIG / MIG categorisation"] },
  ],

  btTopup:
    "Most HL borrowers stay 1–2% above market because nobody told them the spread tightened. We move your loan to a sharper lender with no foreclosure penalty (RBI rule + our 0% Statpro guarantee) and stack a top-up alongside — at the same low rate, with one valuation.",

  eligibilityCriteria: {
    qualifies: [
      "Salaried with 2+ years' total experience or self-employed with 3+ years' vintage",
      "Age 21–65 at maturity (some lenders extend to 70 with co-applicant)",
      "Net monthly income ≥ ₹40,000 (post-tax)",
      "CIBIL 700+ for banks, 650+ for HFCs / NBFCs",
      "Property has approved building plan / OC where applicable",
      "Indian resident or NRI (non-PIO/OCI on case-by-case)",
    ],
    disqualifies: [
      "Property in litigation, partition or family dispute",
      "Unauthorised construction or non-OC property",
      "Builder not on the lender's pre-approved list (delays clearance)",
      "Property in a locked or sealed area, ULC-applicable",
      "Income shown only in cash (no banking trail) — even for self-employed",
      "Recent (< 6 months) bounces / credit-card defaults on the report",
    ],
    note: "First-time buyer with a thin credit file? We have HFCs that take a co-applicant CIBIL view. Government employee? There's a separate desk with sharper rates — ask us.",
  },

  process: [
    { duration: "Day 0",     title: "Eligibility check", body: "FOIR, IIR and CIBIL pull with 4–5 lenders simultaneously." },
    { duration: "Day 1–3",   title: "Pre-approval",     body: "In-principle sanction for the maximum ticket each lender will fund." },
    { duration: "Day 3–7",   title: "Property selection",body: "Use the pre-approval to negotiate with the builder / seller." },
    { duration: "Day 7–14",  title: "Legal + technical", body: "Title search, valuation, building plan / OC verification." },
    { duration: "Day 14–21", title: "Disbursal",         body: "Final agreement, mortgage, disbursal — to seller / builder / linked account." },
  ],

  documents: [
    { title: "Identity & address", items: ["PAN", "Aadhaar (e-KYC)", "Latest utility bill", "Passport (NRI)"] },
    { title: "Income (salaried)",   items: ["Form 16 last 2 years", "Salary slips last 3 months", "Bank statements last 12 months", "Appointment + appraisal letter"] },
    { title: "Income (self-emp)",   items: ["ITR + computation last 2 years", "GST returns last 12 months", "Bank statements last 12 months", "CA-certified financials"] },
    { title: "Property",            items: ["Sale deed / agreement to sell", "Builder NOC + payment receipts", "Approved plan + OC", "Property tax / mutation"] },
  ],

  fees: [
    { name: "Processing fee (lender, all-in)", amount: "0.25–0.50% + GST", when: "On sanction", highlight: true },
    { name: "↳ Includes legal, technical, valuation", amount: "covered", when: "Bundled" },
    { name: "Stamp duty on mortgage", amount: "0.10–0.50% (state-wise)", when: "At disbursal" },
    { name: "Foreclosure / pre-payment", amount: "₹0 — Statpro guarantee", when: "Anytime" },
    { name: "Statpro fee (you pay us)", amount: "₹0 — paid by lender", when: "Never" },
    { name: "Late payment", amount: "2% per month on overdue", when: "If applicable" },
  ],

  faqs: [
    { q: "What's the lowest HL rate I can actually get?",
      a: "Lowest published floor on our panel is 7.15% (LIC HFL and Bajaj Housing salaried-segment). Most banks (HDFC, Kotak) sit at 7.70–7.75% for clean salaried CIBIL 800+ borrowers — RLLR-linked with full spread disclosure. Self-employed segments price 25–75 bps higher; doctors get a separate sharper desk. We always quote the actual offer, not just the marketing-floor." },
    { q: "Can I get up to 90% LTV?",
      a: "Yes, but only for tickets under ₹30 lakh per RBI norms. ₹30L–₹75L typically caps at 80%, above ₹75L at 75%. Stamp duty and registration are not part of LTV — they come out of pocket." },
    { q: "How does HL Balance Transfer + Top-up work?",
      a: "We close your existing loan with the new lender and disburse a top-up alongside. RBI prohibits foreclosure penalty on floating-rate HLs to individuals; on top of that, our Statpro guarantee gets you 0% foreclosure across every partner lender." },
    { q: "Are there schemes for women / government employees?",
      a: "Yes — most lenders offer 5–10 bps lower for primary woman borrower and similar concession for central / state government and defence. We always route to the lender with the deepest concession on your profile." },
    { q: "What if my property is in a tier-2 or tier-3 city?",
      a: "Banks are conservative outside top-30 cities; HFCs and select NBFCs (Cholamandalam, Sammaan, Aditya Birla) actively fund tier-2/3. We route accordingly." },
    { q: "Can I pre-pay or close the loan early?",
      a: "Yes, ₹0 penalty (RBI rule + Statpro guarantee) on floating-rate HLs. Pre-paying earlier in tenure saves the most interest because more of each EMI goes to interest in early years." },
  ],

  relatedCalcs: [
    { title: "EMI calculator", body: "Monthly outflow at any rate, ticket and tenure combination.", icon: "Calculator", to: "/#calculator" },
    { title: "Balance Transfer break-even", body: "Months until BT processing fee is recovered through lower EMI.", icon: "RefreshCw", to: "/#calculator" },
    { title: "Eligibility calculator", body: "Indicative ticket size based on income, FOIR and tenure.", icon: "Receipt", to: "/#calculator" },
  ],
};

export default function HlPage() {
  return <ProductPageLayout config={config} />;
}
