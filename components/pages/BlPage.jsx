"use client";

import { Briefcase, Stethoscope, Calculator } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const config = {
  tag: "BL",
  tagline: "Business Loan",
  title: "Business Loan — unsecured up to ₹75 lakh per lender, stacked across our panel.",
  lede: "Collateral-free term loans and dropline overdrafts of up to ₹75 lakh per lender. Stack across 4–5 lenders on our 9-lender panel and unlock ₹3–₹6 Cr of unsecured funding without putting up a single rupee of collateral. 5–7 day sanction.",
  heroBullets: [
    "₹75 lakh per lender, stackable — combined ticket up to ₹6.75 Cr across the panel.",
    "₹0 collateral — sized off your GST + bank statements + ITR.",
    "Sub-products for doctors, CAs and women-led businesses with sharper pricing.",
  ],
  stats: [
    { value: "₹75 L", label: "Max per lender (unsecured)" },
    { value: "₹6.75 Cr", label: "Combined panel-stack ceiling" },
    { value: "15.50%", label: "Starting rate (clean profile)" },
    { value: "5–7 days", label: "Typical disbursal" },
  ],
  lenderCount: 9,
  foreclosureApplies: false, // RBI rule on floating-rate FC doesn't apply to unsecured BL

  heroSlides: [
    { id: "stack", eyebrow: "Stack across lenders", panel: "STATS",
      title: "₹75 lakh per lender — stackable across our 9-lender panel.",
      lede: "Each unsecured-BL lender on our panel caps at ₹75 lakh per borrower. Stack 4–5 of them and you've unlocked ₹3–₹6 Cr of working capital — with zero collateral, zero property valuation, zero mortgage paperwork.",
      bullets: ["₹75 L × 9 lenders = ₹6.75 Cr stackable ceiling.", "Each sanction is independent — no cross-collateralisation.", "We sequence the stack to optimise total ROI, not lender count."],
    },
    { id: "rate", eyebrow: "Sharper rate", panel: "RATES",
      title: "Business Loan — unsecured, working-capital-friendly.",
      lede: "Floor 15.50% for top-tier profiles (3-year vintage, GST-compliant, CIBIL 750+). Sub-product rates can be 50–150 bps sharper for doctors / CAs / women-led businesses.",
      bullets: ["9 unsecured-BL active lenders.", "₹0 collateral required.", "Term loan or dropline OD."],
    },
    { id: "od", eyebrow: "Dropline OD variant", panel: "OD",
      title: "Dropline OD — pay interest only on what you draw.",
      lede: "An overdraft sublimit instead of a term loan — interest only on the drawn balance, limit drops down quarterly. Best for cyclical revenue businesses.",
      bullets: ["Pay-as-you-use interest", "Quarterly limit step-down", "Switch to term loan later if needs stabilise"],
    },
    { id: "subprod", eyebrow: "Profession-tagged products", panel: "STATS",
      title: "Doctor's loan, CA loan, women-led business — sharper.",
      lede: "Most NBFCs maintain dedicated underwriting desks for licensed professionals (doctors, CAs, architects, lawyers) and women-led businesses — 50–150 bps sharper than vanilla BL.",
      bullets: ["Doctor's loan: equipment financing variant available.", "CA / professional: sized off practice income, not just ITR.", "Women-led: special concession on processing + ROI."],
    },
    { id: "speed", eyebrow: "Speed to disbursal", panel: "SPEED",
      title: "From eligibility check to disbursal in 5–7 days.",
      lede: "Unsecured = no property valuation = faster TAT. Once GST + bank + ITR are in, sanctions land in 48–72 hours.",
      bullets: ["Day 0: eligibility check + KYC.", "Day 1–3: lender pitch + first sanctions.", "Day 4–7: agreement, disbursal."],
    },
  ],

  valueHeadline: "Why our BL closes faster than your bank's.",
  valueProps: [
    { icon: Briefcase,    title: "GST + bank trail underwriting",
      body: "We size your BL off the same GST returns and bank statements your CA already maintains — no extra paperwork." },
    { icon: Stethoscope,  title: "Professional sub-products",
      body: "Doctors, CAs, architects, women-led businesses — dedicated desks with 50–150 bps sharper pricing." },
    { icon: Calculator,   title: "Term or OD — your choice",
      body: "Steady cash flow → term loan. Lumpy / cyclical → dropline OD. We help you pick the right one." },
  ],

  elig: {
    assetLabel: "Annual turnover (GST)",
    defaultPropertyValue: 30000000,
    min: 5000000,
    max: 1000000000,
    step: 500000,
    ltvPct: 25,
    ltvLabel: "of annual turnover (typical sizing)",
    defaultTenure: 4,
    maxTenure: 5,
    defaultRate: 17,
    rateMin: 15.5,
    rateMax: 24,
  },

  rateTable: [
    { lender: "HDFC Bank",      category: "Private bank", rate: "15.50%", ticket: "₹75 L", bestFor: "Doctor / CA · 5+ yrs vintage" },
    { lender: "Kotak Mahindra", category: "Private bank", rate: "16.00%", ticket: "₹75 L", bestFor: "Salary-account-linked owners" },
    { lender: "Bajaj Finserv",  category: "NBFC",         rate: "16.50%", ticket: "₹75 L", bestFor: "Fast TAT · GST-compliant" },
    { lender: "Tata Capital",   category: "NBFC",         rate: "17.00%", ticket: "₹75 L", bestFor: "Manufacturing · service" },
    { lender: "Lendingkart",    category: "SME NBFC",     rate: "18.00%", ticket: "₹75 L", bestFor: "Small ticket · fast sanction" },
    { lender: "Poonawalla",     category: "NBFC",         rate: "17.50%", ticket: "₹75 L", bestFor: "Repeat borrower" },
  ],

  variants: [
    { code: "TL", title: "Term Loan",
      body: "Fixed EMI, fixed tenure — pay equal instalments over 12 to 60 months. Best for one-time use of funds.",
      bullets: ["Tenure 12–60 months", "Sized off ITR + bank trail", "Predictable EMI, predictable cost"] },
    { code: "OD", title: "Dropline OD", highlight: true,
      body: "Revolving overdraft — interest only on drawn balance, limit drops quarterly. Best for cyclical revenue.",
      bullets: ["Pay-as-you-use interest", "Quarterly step-down", "Convertible to term loan"] },
    { code: "DOC", title: "Doctor's loan",
      body: "Profession-specific BL with equipment-financing add-on, 50–100 bps sharper than vanilla BL.",
      bullets: ["Equipment financing bundled", "Sized off practice income", "Sub-product on most NBFCs"] },
    { code: "WOM", title: "Women-led business",
      body: "Concessional ROI and processing for businesses majority-owned by women — varies lender to lender.",
      bullets: ["50–100 bps lower ROI", "Reduced processing fee", "Available on most NBFCs"] },
  ],

  // No BT for unsecured loans — RBI rule doesn't apply, market doesn't refinance unsecured BL meaningfully.

  eligibilityCriteria: {
    qualifies: [
      "Business vintage 3+ years (continuous)",
      "Annual turnover ≥ ₹40 lakh (GST-filed)",
      "Owner CIBIL 700+ (banks) or 650+ (NBFCs)",
      "Last 12 months' bank statement with no bounces",
      "GST returns filed on time for last 6 months",
      "Profitable in last 2 ITRs (mild loss acceptable on case-by-case)",
    ],
    disqualifies: [
      "Cash-only business with no banking trail",
      "Negative net worth or significant accumulated loss",
      "Pending litigation under Companies Act / SARFAESI",
      "Recent (< 6 months) credit-card / EMI defaults",
      "Industry on lender's negative list (e.g., real-estate brokerage, crypto)",
      "GSTR-3B / GSTR-1 not filed for last 3 months",
    ],
    note: "First-loss profile? Try profession-tagged variants (doctor / CA / women-led) — separate underwriting desks with relaxed criteria.",
  },

  process: [
    { duration: "Day 0",   title: "Eligibility check", body: "GST + bank + ITR pulled with your consent — sized in 30 minutes." },
    { duration: "Day 1",   title: "Lender pitch",      body: "File routed to 3–4 BL-active NBFCs / banks." },
    { duration: "Day 2–3", title: "First sanctions",   body: "In-principle sanctions land. We compare ROI, tenure, processing fee." },
    { duration: "Day 4",   title: "KYC + agreement",   body: "E-KYC + signed loan agreement, no physical paperwork." },
    { duration: "Day 5–7", title: "Disbursal",         body: "Direct credit to current account; OD activated for dropline variant." },
  ],

  documents: [
    { title: "Owner KYC",  items: ["PAN", "Aadhaar", "Latest utility bill"] },
    { title: "Business",   items: ["GST registration certificate", "Last 6 months' GSTR-3B / GSTR-1", "Last 2 years' ITR + computation", "Bank statements last 12 months"] },
    { title: "Constitution", items: ["Pvt Ltd: COI, MOA/AOA, board resolution", "LLP: LLP agreement, board resolution", "Partnership: deed, partner KYC", "Proprietorship: Udyam / SSI registration"] },
    { title: "Profession-specific", items: ["Doctor: MCI registration", "CA: ICAI membership", "Architect: COA registration", "Other: equivalent professional licence"] },
  ],

  fees: [
    { name: "Processing fee (lender, all-in)", amount: "1.50–3.00% + GST", when: "On sanction", highlight: true },
    { name: "Stamp duty on agreement", amount: "₹100–₹500 (state-wise)", when: "At sanction" },
    { name: "Foreclosure / pre-payment", amount: "2–4% on outstanding (lender-wise)", when: "Anytime" },
    { name: "Statpro fee (you pay us)", amount: "₹0 — paid by lender", when: "Never" },
    { name: "Late payment", amount: "2–3% per month on overdue", when: "If applicable" },
  ],

  faqs: [
    { q: "Why is the BL rate so much higher than LAP?",
      a: "Unsecured. No collateral means the lender can't fall back on a property if you default — that risk premium is priced into the rate. Add it up: secured LAP ~9% + risk premium 6–8% ≈ unsecured BL ~15–17%. If you have property, LAP / OD-LAP is almost always cheaper." },
    { q: "What's the difference between BL term loan and Dropline OD?",
      a: "Term loan: fixed EMI for fixed tenure, sanctioned amount disbursed once. OD: revolving facility, interest on drawn balance, limit drops down quarterly. OD is sharper for businesses with lumpy / seasonal cash flows; term loan is sharper for one-time use of funds." },
    { q: "Why no Balance Transfer for BL?",
      a: "Unsecured BL refinancing exists but is rare and rarely cheaper — risk-adjusted, the new lender prices to your current outstanding rate. The exception is a profession-tagged switch (e.g., from a vanilla BL to a doctor's loan) — that we do route." },
    { q: "Why the foreclosure penalty on BL?",
      a: "RBI's 0% foreclosure rule is for floating-rate loans to individuals (HL, LAP, LRD). Unsecured BL to a business is outside that scope, so each lender sets a 2–4% foreclosure fee. Statpro can negotiate it down (sometimes waive it), but cannot guarantee 0% on BL." },
    { q: "Can I get a BL without GST?",
      a: "Hard, but not impossible. Some lenders accept ITR + bank statement under-₹40L turnover. Most will require at least a Udyam / shop-act registration as a fallback." },
    { q: "How is BL eligibility sized?",
      a: "Typical thumb: 20–30% of last year's GST turnover, capped by FOIR (existing EMI commitments). Profitability and CIBIL gate the ROI; turnover gates the ticket." },
  ],

  relatedCalcs: [
    { title: "EMI calculator", body: "Monthly outflow at any rate, ticket and tenure combination.", icon: "Calculator", to: "/#calculator" },
    { title: "OD vs term loan saving", body: "If your cash flow is cyclical, see what an OD structure saves.", icon: "TrendingDown", to: "/#calculator" },
    { title: "Eligibility calculator", body: "Indicative ticket from GST turnover + bank trail.", icon: "Receipt", to: "/#calculator" },
  ],
};

export default function BlPage() {
  return <ProductPageLayout config={config} />;
}
