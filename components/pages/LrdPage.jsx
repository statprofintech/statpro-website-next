"use client";

import { Receipt, ShieldCheck, FileSignature, Calculator, RefreshCw, Repeat } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const config = {
  tag: "LRD",
  tagline: "Loan Against Rental",
  title: "Loan Against Rental — convert a lease into liquidity.",
  lede: "If you own commercial property leased to a registered company, we structure a Lease Rental Discounting facility against your future rental receivables — up to 85% of NPV or 50% of property value, whichever is lower. Specialist NBFC + bank panel with escrow-backed structures.",
  heroBullets: [
    "Up to 85% of NPV of future rentals · single-LRD ticket up to ₹50 Cr.",
    "Lessee must be registered under the Companies Act (private/public Ltd / LLP).",
    "Escrow-backed: rental flows directly to repayment, simpler underwriting.",
  ],
  stats: [
    { value: "7.95%", label: "Starting rate (floating)" },
    { value: "₹50 Cr", label: "Largest single LRD" },
    { value: "85% NPV", label: "Max LTV on rentals" },
    { value: "15 yrs", label: "Maximum tenure" },
  ],
  lenderCount: 6,

  heroSlides: [
    { id: "rate", eyebrow: "Sharper rate", panel: "RATES",
      title: "Loan Against Rental — convert a lease into liquidity.",
      lede: "Up to 85% NPV of future rentals — capped at 50% of property value. Floor of 7.95% on premium commercial with blue-chip lessee, 8.20% on standard commercial.",
      bullets: ["6 LRD-active lenders — banks + specialist NBFCs.", "Single-LRD ticket up to ₹50 Cr.", "RLLR / repo-linked transparency on banks."],
    },
    { id: "bt", eyebrow: "Refinance + restructure", panel: "BT",
      title: "Already on LRD at 10–11%? — Refinance for 200 bps.",
      lede: "Most legacy LRDs sanctioned in 2021–22 sit at 10–12%. Today's panel-floor is 7.95%. We refinance with foreclosure handled, escrow re-routed and a fresh sanction issued in 30 days.",
      bullets: ["Typical saving: 100–200 bps on rate.", "Tenure can be re-stretched if lease residual permits.", "Single sanction, single closure, single escrow shift."],
    },
    { id: "escrow", eyebrow: "Escrow-backed structure", panel: "STATS",
      title: "Rental flows route directly to repayment.",
      lede: "Lessee instructed to credit rentals into a dedicated escrow account, which auto-services the EMI. Lower lender risk → sharper rate. You keep the surplus.",
      bullets: ["Dedicated escrow with the lender's escrow agent.", "DSRA buffer (3–6 months EMI) parked upfront.", "Surplus rental swept to your operating account monthly."],
    },
    { id: "lessee", eyebrow: "Companies-Act lessee panel", panel: "COLLATERAL",
      title: "Any registered Pvt / Public Ltd / LLP lessee — funded.",
      lede: "Most LRD lenders restrict to MNCs and listed companies. Our panel is broader — registered Pvt Ltd, Public Ltd and LLPs all qualify, subject to financial-strength check.",
      bullets: ["No MNC-only filter.", "Lessee financials checked, not parentage.", "Multi-lessee buildings funded on weighted-average basis."],
    },
    { id: "speed", eyebrow: "Speed to disbursal", panel: "SPEED",
      title: "From lease review to first disbursal in 14–21 days.",
      lede: "Two added steps over a vanilla LAP — escrow account opening and lessee notification. Both fit inside the standard timeline.",
      bullets: ["Day 0–4: NPV computation + lender shortlist.", "Day 4–14: legal, valuation, escrow setup.", "Day 14–21: lessee notification, first disbursal."],
    },
  ],

  valueHeadline: "Rental income, monetised — without selling the asset.",
  valueProps: [
    { icon: Receipt,        title: "NPV-based eligibility",
      body: "Your loan is sized off the discounted present value of remaining rentals — not your salary or business turnover." },
    { icon: ShieldCheck,    title: "Escrow-backed",
      body: "Rentals route through a dedicated escrow that auto-services the EMI. Lower risk = sharper rate." },
    { icon: FileSignature,  title: "Companies-Act lessee panel",
      body: "Our 6-lender LRD panel funds against any registered private/public company or LLP lessee — no MNC-only filter." },
  ],

  elig: {
    assetLabel: "Monthly rental income",
    defaultPropertyValue: 500000,
    min: 50000,
    max: 10000000,
    step: 25000,
    ltvPct: 65,
    ltvLabel: "of NPV (rental × tenure × discount factor)",
    defaultTenure: 12,
    maxTenure: 15,
    defaultRate: 8.5,
    rateMin: 7.95,
    rateMax: 12,
  },

  rateTable: [
    { lender: "HDFC Bank",           category: "Private bank", rate: "8.20%",  ticket: "₹40 Cr", bestFor: "Premium commercial · MNC lessee" },
    { lender: "Kotak Mahindra Bank", category: "Private bank", rate: "8.20%",  ticket: "₹35 Cr", bestFor: "Grade-A office · IT parks" },
    { lender: "Bajaj Finserv",       category: "NBFC",         rate: "7.95%",  ticket: "₹50 Cr", bestFor: "Large ticket · long residual" },
    { lender: "Aditya Birla Capital",category: "NBFC",         rate: "8.95%",  ticket: "₹40 Cr", bestFor: "Mid-market commercial" },
    { lender: "L&T Finance",         category: "NBFC",         rate: "9.50%",  ticket: "₹25 Cr", bestFor: "Retail malls · F&B clusters" },
    { lender: "Piramal Finance",     category: "NBFC",         rate: "10.00%", ticket: "₹20 Cr", bestFor: "Multi-tenant industrial" },
  ],

  variants: [
    { code: "FRESH", title: "Fresh LRD",
      body: "First-time discounting on a leased commercial property — funds released against future rental receivables.",
      bullets: ["Up to 85% of NPV", "Tenure capped at lease residual", "Escrow-routed servicing"] },
    { code: "BT", title: "LRD Balance Transfer", highlight: true,
      body: "Move an existing LRD to a sharper lender. Foreclosure handled, escrow re-routed in 30 days.",
      bullets: ["Typical saving 100–200 bps", "Re-stretch tenure if lease permits", "0% foreclosure (Statpro guarantee)"] },
    { code: "TOP-UP", title: "LRD Top-up",
      body: "Pull a fresh top-up against the same lease, alongside the BT — sized off rental escalation captured in fresh NPV.",
      bullets: ["Sized off escalated rentals", "Same escrow, single sanction", "Pay-as-you-use OD variant available"] },
    { code: "MULTI", title: "Multi-lessee LRD",
      body: "Building leased to multiple tenants — sized on weighted-average rental and lessee credit.",
      bullets: ["Weighted-average eligibility", "Floor-by-floor lessee NOC", "DSRA scaled to lessee diversity"] },
  ],

  btTopup:
    "Already running an LRD elsewhere at 10–11%? We refinance with our specialist panel at 7.95–8.20% (HDFC / Kotak prefer-rate of 8.20% on premium commercial) and stretch tenure if remaining lease length permits — typical saving runs 100–200 bps on the rate plus any rental escalation captured in the new NPV.",

  eligibilityCriteria: {
    qualifies: [
      "Commercial / industrial property in your name (single or joint)",
      "Lessee registered under the Companies Act (Pvt Ltd, Public Ltd, LLP)",
      "Registered lease deed with at least 3 years' residual tenure",
      "Last 12 months' rental credits visible in bank statement",
      "Owner CIBIL 700+ (banks) or 650+ (NBFCs)",
      "Property has approved building plan / OC",
    ],
    disqualifies: [
      "Lessee is a sole proprietorship or partnership firm",
      "Residential rental income (use HL or LAP instead)",
      "Lease residual < 3 years (some lenders accept 2 years with re-lease undertaking)",
      "Property in litigation / partition / family dispute",
      "Lessee with adverse credit history or pending litigation",
      "Unregistered or notarised-only lease (registered deed is mandatory)",
    ],
    note: "Multi-lessee buildings and LLP-lessee deals are routed to NBFCs that are comfortable underwriting beyond MNC parentage. Talk to us before assuming you don't qualify.",
  },

  process: [
    { duration: "Day 0",     title: "Lease review",
      body: "We assess lease deed, lessee profile, escalation clauses and remaining tenure." },
    { duration: "Day 1–4",   title: "NPV computation",
      body: "Discount remaining rentals at the panel's prevailing rate to size your eligible LRD." },
    { duration: "Day 4–8",   title: "Lender shortlist",
      body: "Pitch to 3–4 lenders that fit your lessee category and geography." },
    { duration: "Day 8–14",  title: "Legal & escrow setup",
      body: "Title check, lease registration verification, escrow account opening with lender." },
    { duration: "Day 14–21", title: "Disbursal",
      body: "Mortgage creation, escrow live, lessee notification, first disbursal to your account." },
  ],

  documents: [
    { title: "Property",    items: ["Sale deed + parent chain", "Approved building plan / OC", "Property tax receipt", "Mutation / khatian"] },
    { title: "Lease",       items: ["Registered lease deed", "Last 12 months' rental receipts / bank credits", "Lessee CIN + audited financials", "Security deposit details"] },
    { title: "Owner KYC",   items: ["PAN + Aadhaar", "Last 2 years' ITR + computation", "Last 12 months' bank statements", "Existing-loan statement (if BT)"] },
    { title: "Lessee",      items: ["Companies Act registration (CIN)", "Latest financials (audited)", "GST return — last 6 months", "Authorised signatory KYC"] },
  ],

  fees: [
    { name: "Processing fee (lender, all-in)", amount: "0.50–1.00% + GST", when: "On sanction", highlight: true },
    { name: "↳ Includes legal, technical, valuation", amount: "covered", when: "Bundled" },
    { name: "Stamp duty on mortgage", amount: "0.10–0.50% (state-wise)", when: "At disbursal" },
    { name: "Escrow setup fee", amount: "₹25,000–₹1,00,000", when: "One-time" },
    { name: "Foreclosure / pre-payment", amount: "₹0 — Statpro guarantee", when: "Anytime" },
    { name: "Statpro fee (you pay us)", amount: "₹0 — paid by lender", when: "Never" },
  ],

  faqs: [
    { q: "Who can take an LRD?",
      a: "Any owner of commercial / industrial property leased to a registered company under the Companies Act (private Ltd, public Ltd, LLP). Residential rentals don't qualify; pure proprietorship lessees usually don't either." },
    { q: "How is the LRD ticket sized?",
      a: "We discount your remaining rental cash flows (with escalation, if contracted) at the lender's prevailing rate to compute Net Present Value. You can borrow up to 85% of that NPV, capped at 50% of property market value." },
    { q: "Why HDFC / Kotak at 8.20% — what's special?",
      a: "Both banks have a preferential LRD desk for premium commercial property leased to listed / large companies. We have direct relationships there and the typical sanction lands at 8.20% — sharper than most NBFCs on this profile." },
    { q: "What happens if the lessee vacates before the LRD ends?",
      a: "Most LRDs are structured with a Debt Service Reserve Account (DSRA) — typically 3–6 months of EMI parked upfront — and a re-lease grace window. Good-quality commercial property re-leases inside the grace window in our experience." },
    { q: "Can I refinance an existing LRD?",
      a: "Yes. RBI rules apply (no foreclosure penalty on floating-rate loans to individuals). On top of the RBI rule, our Statpro guarantee gets you 0% foreclosure across every partner lender — written into the new sanction. We handle foreclosure, escrow re-routing and fresh sanction in parallel — typical close in 30 days." },
    { q: "Are there separate fees beyond ROI?",
      a: "Processing fee (0.5–1% + GST) bundles legal/technical/valuation. Add stamp duty on mortgage, one-time escrow setup, and that's it. We disclose all line items upfront. You pay Statpro nothing — our fee is paid by the lender on disbursal." },
  ],

  relatedCalcs: [
    { title: "EMI calculator", body: "Monthly outflow at any rate, ticket and tenure combination.", icon: "Calculator", to: "/#calculator" },
    { title: "Balance Transfer break-even", body: "Months until BT processing fee is recovered through lower EMI.", icon: "RefreshCw", to: "/#calculator" },
    { title: "OD → LAP saving", body: "If you have an OD against the same property, see what the conversion saves.", icon: "TrendingDown", to: "/#calculator" },
  ],
};

export default function LrdPage() {
  return <ProductPageLayout config={config} />;
}
