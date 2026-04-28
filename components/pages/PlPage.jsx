"use client";

import { Wallet, Heart, Plane, Calculator } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const config = {
  tag: "PL",
  tagline: "Personal Loan",
  title: "Personal Loan — for salaried individuals, disbursal in seconds.",
  lede: "Up to ₹50 lakh per lender for salaried individuals on a clean profile. Disbursal in 10 seconds for pre-approved customers; 24–48 hours otherwise. Sub-products tagged for wedding, medical, travel, education and home renovation.",
  heroBullets: [
    "Up to ₹50 lakh per lender — stack across 3–4 lenders for ₹1.5 Cr+ unsecured.",
    "₹0 collateral, ₹0 security — sized off your salary slip + bank statement.",
    "10-second disbursal for HDFC pre-approved; 24–48 hours otherwise.",
  ],
  stats: [
    { value: "9.90%", label: "Starting rate (clean salaried)" },
    { value: "₹50 L", label: "Maximum per lender" },
    { value: "10 sec", label: "Disbursal (pre-approved)" },
    { value: "7 yrs", label: "Maximum tenure" },
  ],
  lenderCount: 8,
  foreclosureApplies: false,

  heroSlides: [
    { id: "speed", eyebrow: "10-second disbursal", panel: "SPEED",
      title: "Personal Loan — disbursal in 10 seconds for pre-approved.",
      lede: "HDFC, Kotak and Tata Capital maintain pre-approved PL offers for salary-account holders — sanctioned in seconds, credited in minutes. Non-pre-approved profiles still close in 24–48 hours.",
      bullets: ["Pre-approved: 10-second sanction + 10-minute credit.", "Non-pre-approved: 24–48 hours from KYC to disbursal.", "End-to-end paperless on most lenders."],
    },
    { id: "rate", eyebrow: "Sharper rate", panel: "RATES",
      title: "Floor 9.90% — but only on a genuinely clean profile.",
      lede: "PL rates fan out wider than any other product on our panel — 9.90% to 24% depending on CIBIL, salary, account-vintage, employer category. We pull from 3–4 lenders and quote the actual offer.",
      bullets: ["CIBIL 800+ + salary > ₹1L: shot at the 9.90–11% band.", "CIBIL 750 + average salary: typically 12–15%.", "We do NOT route sub-CIBIL or NBFC-emergency customers."],
    },
    { id: "stack", eyebrow: "Stack across lenders", panel: "STATS",
      title: "₹50 L per lender — stack 3 for ₹1.5 Cr unsecured.",
      lede: "PL caps at ₹50 lakh per lender for salaried individuals. With 3–4 PL-active partners, a clean profile can stack ₹1.5–₹2 Cr of unsecured funding without touching property collateral.",
      bullets: ["₹50 L × 3–4 lenders = ₹1.5–₹2 Cr stackable.", "Each loan is independent — no cross-default.", "We sequence the stack to optimise total ROI."],
    },
    { id: "subprod", eyebrow: "Use-case sub-products", panel: "COLLATERAL",
      title: "Wedding, medical, travel, renovation — tagged sub-products.",
      lede: "Most lenders offer profession or use-case sub-products with sharper pricing — Wedding Loan (HDFC), Medical Loan (Tata), Education / Travel (Bajaj). The sub-tag often saves 25–75 bps.",
      bullets: ["Wedding loan: tagged sub-product on HDFC.", "Medical loan: Tata + Bajaj — fast emergency sanction.", "Education / travel / home reno — separate marketing rates."],
    },
    { id: "elig", eyebrow: "Eligibility hard-rules", panel: "BT",
      title: "Salaried only. Min ₹25K monthly. Salaried for 2+ years.",
      lede: "PL is the most rule-bound product on our panel — every lender enforces hard cut-offs on net monthly income, employment vintage and CIBIL. Self-employed and proprietors should look at Business Loan instead.",
      bullets: ["Salaried only — no self-employed, no business owners.", "Net monthly income ≥ ₹25,000.", "Total work experience ≥ 2 years; current job ≥ 1 year."],
    },
  ],

  valueHeadline: "Why our PL closes at a sharper rate than the bank's app.",
  valueProps: [
    { icon: Wallet,    title: "Multi-lender pull",
      body: "We pull pre-approved offers from 3–4 lenders simultaneously — your in-app HDFC offer is rarely the sharpest." },
    { icon: Heart,     title: "Use-case sub-products",
      body: "Wedding / medical / travel / education sub-products typically save 25–75 bps over the vanilla PL pricing." },
    { icon: Plane,     title: "Stackable up to ₹2 Cr",
      body: "Each lender caps at ₹50L for clean salaried — stack 3–4 lenders and you've unlocked ₹1.5–₹2 Cr unsecured." },
  ],

  elig: {
    assetLabel: "Net monthly salary",
    defaultPropertyValue: 100000,
    min: 25000,
    max: 1000000,
    step: 5000,
    ltvPct: 24,
    ltvLabel: "× 24 months (typical PL eligibility = 2 yrs net salary)",
    defaultTenure: 5,
    maxTenure: 7,
    defaultRate: 11.5,
    rateMin: 9.9,
    rateMax: 24,
  },

  rateTable: [
    { lender: "HDFC Bank",      category: "Private bank · pre-approved desk", rate: "9.99%",  ticket: "₹50 L", bestFor: "Salary-account · pre-approved" },
    { lender: "Kotak Mahindra", category: "Private bank",                     rate: "10.99%", ticket: "₹40 L", bestFor: "Salaried + bonus / RSU" },
    { lender: "Tata Capital",   category: "NBFC · digital-first",             rate: "10.99%", ticket: "₹35 L", bestFor: "10-min digital disbursal" },
    { lender: "Bajaj Finserv",  category: "NBFC · sub-product variants",      rate: "11.00%", ticket: "₹40 L", bestFor: "Use-case sub-products" },
    { lender: "Aditya Birla",   category: "NBFC",                             rate: "11.50%", ticket: "₹35 L", bestFor: "Mid-market salaried" },
    { lender: "Poonawalla",     category: "NBFC",                             rate: "12.00%", ticket: "₹30 L", bestFor: "Repeat / top-up customers" },
  ],

  variants: [
    { code: "PL",     title: "Salaried PL",
      body: "Standard personal loan for salaried individuals — fixed EMI, fixed tenure, end-use unrestricted.",
      bullets: ["Up to ₹50L per lender", "Tenure 1–7 years", "End-use unrestricted"] },
    { code: "WED",    title: "Wedding Loan", highlight: true,
      body: "Tagged sub-product on HDFC and a few NBFCs — sometimes sharper rate than vanilla PL, sometimes the same with a faster TAT.",
      bullets: ["Sub-tagged for marketing", "Same docs as vanilla PL", "25–50 bps potential saving"] },
    { code: "MED",    title: "Medical Loan",
      body: "Emergency-medical use case — Tata Capital and Bajaj have dedicated desks with same-day sanction.",
      bullets: ["Same-day sanction (medical)", "Hospital-tied disbursal possible", "End-use undertaking"] },
    { code: "EDU/TRV",title: "Education / Travel",
      body: "Use-case sub-products on Bajaj — distinct from a true Education Loan (which is collateral-backed and longer-tenure).",
      bullets: ["Marketing tag, not regulated", "Same PL underwriting", "Use-case-tagged sanction letter"] },
  ],

  eligibilityCriteria: {
    qualifies: [
      "Salaried only — Indian resident, working with a registered employer",
      "Net monthly income ≥ ₹25,000 (banks); ≥ ₹35,000 (private banks)",
      "Total work experience ≥ 2 years; current employer ≥ 1 year",
      "Age 21–58 (banks may extend to 60)",
      "CIBIL 700+ for banks, 650+ for NBFCs",
      "Salary credit visible in last 3 months' bank statement",
    ],
    disqualifies: [
      "Self-employed, business owners, freelancers (use BL instead)",
      "Cash salary with no bank credit trail",
      "Recent (< 6 months) credit-card defaults / EMI bounces",
      "Multiple PL/CC enquiries in last 90 days (CIBIL hard-pull stack)",
      "Existing FOIR > 50% (after the new PL EMI)",
      "Employer not on the lender's approved-list (smaller startups, unregistered businesses)",
    ],
    note: "Self-employed? Don't use PL — Business Loan is the right product, sized off GST and ITR rather than salary slip.",
  },

  process: [
    { duration: "Sec 0",  title: "Eligibility check", body: "PAN + Aadhaar + salary slip → pre-approved offer pull from 3–4 lenders." },
    { duration: "Min 1",  title: "Lender selection",  body: "Compare ROI, processing fee, tenure, foreclosure terms across the offers." },
    { duration: "Min 5",  title: "E-KYC + e-sign",    body: "Aadhaar e-KYC, e-sign loan agreement, NACH mandate." },
    { duration: "Min 10", title: "Disbursal",         body: "Direct credit to salary account; SMS + email confirmation." },
    { duration: "Day 1+", title: "EMI starts",        body: "First EMI debited via NACH on the agreed date next month." },
  ],

  documents: [
    { title: "Identity",   items: ["PAN (mandatory)", "Aadhaar (e-KYC)", "Live selfie"] },
    { title: "Income",     items: ["Last 3 months' salary slips", "Latest Form 16", "Last 6 months' bank statement (salary account)"] },
    { title: "Employer",   items: ["Appointment letter (or appraisal letter)", "Employee ID card"] },
    { title: "Bank",       items: ["Cancelled cheque / bank passbook (salary account)", "NACH mandate (in-app sign)"] },
  ],

  fees: [
    { name: "Processing fee (lender)", amount: "0.99–2.50% + GST", when: "On sanction", highlight: true },
    { name: "Foreclosure / pre-payment", amount: "2–4% on outstanding (lender-wise)", when: "Anytime" },
    { name: "Statpro fee (you pay us)", amount: "₹0 — paid by lender", when: "Never" },
    { name: "Late payment", amount: "2–3% per month on overdue", when: "If applicable" },
    { name: "EMI bounce", amount: "₹500–₹750 per bounce", when: "If applicable" },
  ],

  faqs: [
    { q: "What's the lowest PL rate I can actually get?",
      a: "Floor is 9.90% but you'll only see it if you're a salary-account holder at one of HDFC/Kotak/Bajaj with CIBIL 800+ and net salary > ₹1L. Realistic clean-profile floor is 11–12%. Rates fan widely with profile — that's why pulling 3–4 lender offers makes a real difference." },
    { q: "Why no Balance Transfer for PL?",
      a: "PL refinancing exists technically but rarely makes sense — the new lender prices to your current outstanding rate, foreclosure fee on the old loan eats the saving, and the tenure usually resets. If you want lower interest cost, look at converting to a secured product (LAP / OD-LAP) instead." },
    { q: "Can I get PL if I'm self-employed?",
      a: "No. PL is a salaried-only product across our panel. If you're self-employed, the right route is Business Loan — sized off GST + ITR rather than salary slip, with rates that price your business risk rather than your personal risk." },
    { q: "How does the 10-second disbursal work?",
      a: "Banks like HDFC maintain pre-approved PL offers for salary-account holders — they've already evaluated your salary credits, FOIR and CIBIL. Acceptance is just an in-app tap; disbursal is auto-credit to the same salary account." },
    { q: "Why the 2–4% foreclosure on PL?",
      a: "RBI's 0% foreclosure rule applies to floating-rate loans to individuals — PL is fixed-rate, so the rule doesn't bind. Statpro can sometimes negotiate it down, but cannot guarantee 0% on PL." },
    { q: "Can I stack multiple PLs across lenders?",
      a: "Yes — each lender independently sanctions up to ₹50L for a clean salaried profile. Stack 3–4 and you can unlock ₹1.5–₹2 Cr of unsecured funding. Catch: every additional PL increases your FOIR; lender 4 will price tighter than lender 1." },
  ],

  relatedCalcs: [
    { title: "EMI calculator", body: "Monthly outflow at any rate, ticket and tenure combination.", icon: "Calculator", to: "/#calculator" },
    { title: "Eligibility calculator", body: "Indicative ticket from net salary + FOIR.", icon: "Receipt", to: "/#calculator" },
    { title: "PL → LAP saving", body: "If you have property, see how much you'd save by switching.", icon: "TrendingDown", to: "/#calculator" },
  ],
};

export default function PlPage() {
  return <ProductPageLayout config={config} />;
}
