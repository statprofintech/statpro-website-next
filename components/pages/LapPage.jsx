"use client";

import { Building2, RefreshCw, Layers, Scale, Banknote, FileCheck } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const config = {
  tag: "LAP",
  tagline: "Loan Against Property",
  title: "Loan Against Property — for promoters who refuse to overpay.",
  lede: "Up to ₹10 Cr against residential, commercial or industrial property. Fresh, balance transfer, or BT + top-up. We negotiate at 4–5 right-fit lenders in parallel so you only sign the best offer — not the first one that lands.",
  heroBullets: [
    "Panel of 11 LAP-active lenders — banks, NBFCs and HFCs.",
    "Unusual collateral funded: hospitals, schools, hotels, cold storage.",
    "BT + Top-up, single sanction, no second valuation.",
  ],
  stats: [
    { value: "7.90%", label: "Starting rate (floating)" },
    { value: "₹10 Cr", label: "Maximum single ticket" },
    { value: "65%", label: "Typical LTV on market value" },
    { value: "15 yrs", label: "Maximum tenure" },
  ],
  lenderCount: 11,

  heroSlides: [
    {
      id: "rate",
      eyebrow: "Sharper rate, fewer rejections",
      title: "Loan Against Property — for promoters who refuse to overpay.",
      lede: "Up to ₹10 Cr against residential, commercial or industrial property. We pitch your file to 4–5 right-fit lenders in parallel, so you sign the best offer — not the first one that lands.",
      bullets: [
        "Panel of 11 LAP-active lenders — banks, NBFCs and HFCs.",
        "Floor 7.90% on a clean residential mortgage.",
        "Single application, parallel underwriting.",
      ],
      panel: "RATES",
    },
    {
      id: "bt",
      eyebrow: "Balance Transfer + Top-up",
      title: "Already paying 11–12%? — Move it. Top it up.",
      lede: "Most LAP borrowers are stuck paying 11–12% on a loan that today's market prices at 8.5–9%. We refinance with a sharper lender and add a top-up alongside, in a single sanction.",
      bullets: [
        "Move + top-up in one shot — no second valuation.",
        "RBI rule: zero foreclosure penalty on floating-rate LAP for individuals.",
        "Typical saving ₹38 L on a ₹1.5 Cr balance over 7 years.",
      ],
      panel: "BT",
    },
    {
      id: "collateral",
      eyebrow: "Wider collateral panel",
      title: "Hospitals, schools, hotels — collateral your bank declined.",
      lede: "Banks decline 80% of unusual property. Our 11-NBFC LAP panel funds hospitals, schools, hotels, banquet halls, cold storage, industrial sheds and warehouses — at competitive rates.",
      bullets: [
        "Specialist NBFCs for special-purpose buildings.",
        "Industrial sheds and warehouses on the SME-NBFC panel.",
        "Up to 55% LTV on niche collateral, 65% on standard.",
      ],
      panel: "COLLATERAL",
    },
    {
      id: "od",
      eyebrow: "Dropline overdraft variant",
      title: "Dropline OD — pay interest only on what you actually use.",
      lede: "An overdraft sublimit against your property — drop in tenure quarterly, interest charged only on the drawn balance. Best for cyclical or working-capital cash flows.",
      bullets: [
        "Interest only on drawn balance, not sanctioned limit.",
        "Limit step-down quarterly — discipline + flexibility.",
        "Convertible to term loan later if needs stabilise.",
      ],
      panel: "OD",
    },
    {
      id: "speed",
      eyebrow: "Speed to sanction",
      title: "From file pickup to disbursal — in 14 days.",
      lede: "We don't queue files lender-by-lender. Your KYC, financials and property docs are tagged and routed to 4–5 lenders simultaneously, so first sanctions land in 3–5 days.",
      bullets: [
        "Day 0–3: file assembly + parallel pitch.",
        "Day 3–7: first in-principle sanctions.",
        "Day 7–14: legal, technical and disbursal.",
      ],
      panel: "SPEED",
    },
  ],

  droplineOd: {
    intro:
      "A Dropline OD is a sanctioned overdraft against your property — but unlike a regular term loan, you don't draw a lump sum and pay EMIs forever. You draw what you need, when you need it, and pay interest only on the drawn balance. The sanctioned limit steps down quarterly so discipline is built in. It is the right structure for businesses with lumpy or cyclical cash flows.",
    example:
      "₹2 Cr Dropline OD sanctioned against a commercial office. You draw ₹80L in Q1 for working capital, repay ₹40L by end-Q2, redraw ₹50L in Q3. Across the year, your average drawn balance is ~₹50L — interest cost is ~₹4.5L (vs ~₹18L on a ₹2 Cr term loan at the same rate).",
    exampleStats: [
      { value: "~₹13.5L", label: "Annual interest saved vs term loan" },
      { value: "₹0",      label: "Penalty on under-utilisation" },
      { value: "Q1–Q4",   label: "Limit step-down cadence" },
      { value: "Convert", label: "Switch to term loan anytime" },
    ],
    useCases: [
      { icon: "Repeat",   title: "Cyclical revenue businesses",
        body: "Trading, contracting, agri-allied — heavy working-capital draw in season, light in off-season. Pay interest only when drawn." },
      { icon: "Wallet",   title: "Bulky inventory cycles",
        body: "Manufacturers and distributors with quarterly inventory peaks — fund the peak without paying EMI on idle capital the rest of the year." },
      { icon: "Building", title: "Real-estate intermediate funding",
        body: "Bridge between selling one property and acquiring the next — draw on demand, repay when proceeds land." },
      { icon: "Activity", title: "Project-based cash flow",
        body: "EPC, IT services, exporters — milestone receipts are lumpy. OD smooths the gap without committing to fixed EMI." },
    ],
    comparison: [
      { dim: "Interest charged on",   tl: "Full sanctioned amount from day 1", od: "Only the drawn balance, daily" },
      { dim: "EMI structure",          tl: "Fixed EMI (P + I) for full tenure",  od: "Interest-only servicing, principal as you pay" },
      { dim: "Sanctioned limit",       tl: "Stays the same",                     od: "Steps down quarterly per schedule" },
      { dim: "Flexibility to redraw",  tl: "No — once paid, principal is gone",  od: "Yes — repay and redraw within sanctioned limit" },
      { dim: "Best for",               tl: "Predictable, fixed-purpose use",      od: "Lumpy, cyclical, or contingent cash needs" },
      { dim: "Convertibility",         tl: "Stuck with EMI structure",            od: "Switch to term loan later if needs stabilise" },
      { dim: "Pre-payment penalty",    tl: "₹0 (RBI rule, floating-rate, indiv.)", od: "₹0 (RBI rule, floating-rate, indiv.)" },
    ],
  },

  valueHeadline: "Why our LAP closes faster — and at a sharper rate.",
  valueProps: [
    { icon: Scale,    title: "Parallel lender pitching",
      body: "We don't pass your file to one bank and wait. Four to five lenders see the same file simultaneously, and they negotiate against each other." },
    { icon: Layers,   title: "Wider collateral acceptance",
      body: "Hospitals, schools, hotels, banquet halls, cold storage, industrial sheds — funded by NBFCs that specialise in them when banks decline." },
    { icon: RefreshCw, title: "BT + Top-up in one shot",
      body: "Your existing loan is closed and a fresh top-up disbursed alongside it — no second valuation, no second collateral search." },
  ],

  elig: {
    assetLabel: "Property market value",
    defaultPropertyValue: 50000000,
    min: 5000000,
    max: 500000000,
    step: 500000,
    ltvPct: 65,
    ltvLabel: "LTV on market value",
    defaultTenure: 12,
    maxTenure: 15,
    defaultRate: 8.9,
    rateMin: 7.9,
    rateMax: 14,
  },

  rateTable: [
    { lender: "L&T Housing Finance",  category: "HFC",                       rate: "8.70%", ticket: "₹15 Cr",  bestFor: "Mid-market · industrial" },
    { lender: "HDFC Bank",            category: "Private bank · RLLR-linked",rate: "8.55%", ticket: "₹10 Cr",  bestFor: "Salaried · clean residential" },
    { lender: "Bajaj Housing Finance",category: "HFC",                       rate: "8.99%", ticket: "₹50 Cr",  bestFor: "Self-employed · large ticket" },
    { lender: "Tata Capital",         category: "NBFC",                      rate: "9.00%", ticket: "₹50 Cr",  bestFor: "Commercial · digital sanction" },
    { lender: "Aditya Birla Capital", category: "NBFC",                      rate: "9.00%", ticket: "₹40 Cr",  bestFor: "Mid-market commercial" },
    { lender: "Axis Finance",         category: "NBFC",                      rate: "9.25%", ticket: "₹50 Cr",  bestFor: "Premium commercial · CIBIL 750+" },
    { lender: "Kotak Mahindra Bank",  category: "Private bank",              rate: "9.50%", ticket: "₹50 Cr",  bestFor: "Salaried + RSU borrowers" },
    { lender: "Cholamandalam",        category: "NBFC",                      rate: "9.50%", ticket: "₹10 Cr",  bestFor: "Tier-2/3 · self-employed" },
    { lender: "LIC Housing Finance",  category: "HFC",                       rate: "9.70%", ticket: "₹75 Cr",  bestFor: "Long-tenure residential" },
    { lender: "Sammaan Finserve",     category: "HFC",                       rate: "9.75%", ticket: "₹5 Cr",   bestFor: "First-time borrowers" },
    { lender: "Piramal Finance",      category: "NBFC",                      rate: "10.00%",ticket: "₹10 Cr",  bestFor: "Hospitals, schools, hotels" },
  ],

  variants: [
    { code: "FRESH", title: "Fresh LAP",
      body: "First-time mortgage on an unencumbered residential, commercial or industrial property — for business expansion, working capital, debt consolidation, or any use of funds.",
      bullets: ["Up to 65% of market value", "Tenure up to 15 years", "Term loan or dropline OD"] },
    { code: "BT", title: "Balance Transfer",
      body: "Move your existing LAP from a higher-rate lender to a sharper one. RBI prohibits foreclosure penalty on floating-rate LAPs to individuals — friction-free move.",
      bullets: ["Same ticket, lower ROI", "No second valuation", "Typical saving 100–300 bps"] },
    { code: "BT+TU", title: "BT + Top-up", highlight: true,
      body: "Refinance and pull a fresh top-up alongside, all in a single sanction — same property, same valuation, the new lender absorbs the old loan and disburses extra.",
      bullets: ["Single sanction, single disbursal", "Top-up at the new (lower) rate", "Most-asked LAP variant on our panel"] },
    { code: "OD", title: "Dropline OD",
      body: "An overdraft sublimit against your property — drop in tenure quarterly, pay interest only on drawn balance. Best for cyclical businesses with intermittent cash needs.",
      bullets: ["Pay-as-you-use interest", "Quarterly limit step-down", "Convertible to term loan later"] },
  ],

  btTopup:
    "Most promoters are stuck paying 11–12% on a LAP that today's market prices at 8.5–9%. We refinance with a cheaper lender and unlock a fresh top-up at the same low rate, with the existing loan closure handled end-to-end. Typical saving: ₹38L on a ₹1.5 Cr balance over 7 years.",

  eligibilityCriteria: {
    qualifies: [
      "Property in your name (single or joint) — residential, commercial or industrial",
      "Clear title with no current mortgage, or BT-able existing loan",
      "Age 21–70 (at maturity) for the primary borrower",
      "CIBIL score 700+ for banks, 650+ for NBFCs",
      "Salaried with 2+ years' job tenure, or self-employed with 3+ years' vintage",
      "Property has approved building plan / OC where applicable",
    ],
    disqualifies: [
      "Property in a litigation, partition or family dispute",
      "Agricultural land — most lenders decline; 1–2 NBFCs fund with restrictions",
      "Property under a current mortgage that the existing lender refuses to release",
      "Tier-3+ city with no comparable sales in 5km radius",
      "Post-tax monthly income < ₹40,000 (eligibility threshold)",
      "Property under 200 sq ft or unauthorised construction",
    ],
    note: "We have specialist NBFCs that fund profiles banks decline — old property, low CIBIL, self-employed first-time borrower, special-purpose buildings. Talk to us before assuming you don't qualify.",
  },

  process: [
    { duration: "Day 0",     title: "Intake call",
      body: "30-min discovery on collateral, ticket size, tenure and timeline." },
    { duration: "Day 1–3",   title: "File assembly",
      body: "We tag and route your KYC, financials and property docs to 4–5 lenders." },
    { duration: "Day 3–7",   title: "First sanctions",
      body: "Initial in-principle offers land. We compare and counter on rate, fees, processing." },
    { duration: "Day 7–10",  title: "Legal & technical",
      body: "Title search, valuation and search-cum-non-encumbrance certificate by lender's panel." },
    { duration: "Day 10–14", title: "Disbursal",
      body: "Final agreement, mortgage creation, disbursal — directly to your bank or BT lender." },
  ],

  documents: [
    { title: "Identity & address",
      items: ["PAN card (mandatory)", "Aadhaar (e-KYC consent)", "Latest utility bill", "Passport / Voter ID (optional)"] },
    { title: "Income proof",
      items: ["Form 16 + last 3 months' salary slips (salaried)", "Last 2 years' ITR + computation (self-employed)", "Last 12 months' bank statements", "GST returns — last 12 months (business)"] },
    { title: "Property documents",
      items: ["Sale deed + parent documents (chain)", "Latest property tax receipt", "Approved building plan / OC", "Mutation certificate / khatian"] },
    { title: "If existing loan (BT)",
      items: ["Sanction letter + amortisation schedule", "Last 12 months' loan account statement", "List of original property docs with current lender", "Foreclosure quote (we'll request it for you)"] },
  ],

  fees: [
    { name: "Processing fee (lender, all-in)", amount: "0.50–1.00% + GST", when: "On sanction", highlight: true },
    { name: "↳ Includes legal, technical, valuation", amount: "covered", when: "Bundled" },
    { name: "Stamp duty on mortgage", amount: "0.10–0.50% (state-wise)", when: "At disbursal" },
    { name: "Foreclosure / pre-payment", amount: "₹0 — Statpro guarantee", when: "Anytime" },
    { name: "Statpro fee (you pay us)", amount: "₹0 — paid by lender", when: "Never" },
    { name: "Late payment", amount: "2% per month on overdue", when: "If applicable" },
  ],

  relatedCalcs: [
    { title: "OD → LAP saving", body: "Quantify the interest you'll save by converting an interest-only OD into an amortising LAP.", icon: "TrendingDown", to: "/#calculator" },
    { title: "Balance Transfer break-even", body: "Months until BT processing fee is recovered through lower EMI.", icon: "RefreshCw", to: "/#calculator" },
    { title: "EMI calculator", body: "Monthly outflow at any rate, ticket and tenure combination.", icon: "Calculator", to: "/#calculator" },
  ],

  faqs: [
    { q: "What's the difference between LAP and a Home Loan?",
      a: "Home Loan funds the purchase or construction of a residence and is governed by NHB norms (lower rates, NHB-flagged subsidies). LAP is a mortgage against an already-owned property to fund any business or personal need — higher rate, higher ticket, more flexibility on use of funds." },
    { q: "Can I get LAP against commercial or industrial property?",
      a: "Yes. We have 6+ NBFCs on our panel that fund commercial offices, shops, industrial sheds, warehouses and even hospitals/schools. Banks generally fund residential and commercial; for industrial and special-purpose, NBFCs are the right route." },
    { q: "How much LAP can I get against my property?",
      a: "Typical LTV is 60–65% of market value. For residential, top-up cases and prime commercial, you can stretch to 70%. Special-purpose property (hospitals, schools, hotels) usually caps at 50–55%. We'll give you the actual eligibility from 4–5 lenders before you commit." },
    { q: "Can I do a Balance Transfer with a Top-up?",
      a: "Absolutely — and it's the most common LAP request we handle. We close your existing loan with the new lender and disburse a fresh top-up alongside it, in a single sanction. No second valuation, no second collateral search." },
    { q: "What's your fee structure?",
      a: "We charge a single placement fee at disbursal — disclosed upfront, capped at industry norms, and only payable once your loan is actually disbursed. Sanctions are free. We're a registered DSA, so you sign the loan agreement directly with the lender." },
    { q: "How long does a LAP sanction take?",
      a: "Typical: 7 days for first in-principle sanction, another 7 days for legal/technical and disbursal. Faster if your property docs are clean and digitised. NBFCs are 30–40% faster than banks on TAT, but slightly higher on ROI." },
  ],
};

export default function LapPage() {
  return <ProductPageLayout config={config} />;
}
