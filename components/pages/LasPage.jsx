"use client";

import { Zap, ShieldAlert, BarChart3 } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";

const config = {
  tag: "LAS",
  tagline: "Loan Against Securities",
  title: "Loan Against Securities — without selling your portfolio.",
  lede: "Pledge listed shares, mutual funds, ETFs or sovereign gold bonds and draw an overdraft against the value. Pay interest only on what you use. Disbursal in 10 minutes via JioCredit, our preferred LAS partner; Mirae Asset Financial for select large-ticket and MF-heavy portfolios.",
  heroBullets: [
    "50% LTV on top-100 equities · 75% LTV on debt mutual funds.",
    "Disbursal in 10 minutes for JioCredit-pledged portfolios.",
    "Overdraft revolving — interest charged only on the drawn amount.",
  ],
  stats: [
    { value: "9.25%", label: "Starting rate (floating)" },
    { value: "10 min", label: "Typical disbursal claim" },
    { value: "75%", label: "LTV on debt MFs" },
    { value: "₹5 Cr", label: "Per-account cap (JioCredit)" },
  ],
  lenderCount: 2,
  foreclosureApplies: false,

  heroSlides: [
    { id: "speed", eyebrow: "10-minute disbursal", panel: "SPEED",
      title: "Loan Against Securities — disbursal in 10 minutes.",
      lede: "JioCredit's NSDL integration pledges shares electronically and credits the OD same morning. No physical paperwork, no branch visit, no salary slip — just PAN, Aadhaar and your demat.",
      bullets: ["10-minute claim from KYC to OD-live.", "End-to-end paperless via Aadhaar e-KYC.", "Funds credited to linked bank as revolving OD."],
    },
    { id: "structure", eyebrow: "OD revolving structure", panel: "OD",
      title: "Pay interest only on the drawn balance.",
      lede: "LAS is structured as a revolving overdraft, not a term loan. Sanctioned limit sits ready; interest accrues only on what you actually use, on a daily-balance basis.",
      bullets: ["No EMI — interest debited monthly on drawn balance.", "Repay any portion any time, redraw later.", "Zero pre-payment penalty."],
    },
    { id: "ltv", eyebrow: "LTV by security class", panel: "STATS",
      title: "50% on equities, 75% on debt MFs — script-tier-aware.",
      lede: "Lender applies a different LTV per script tier. Top-100 equities qualify at 50%; mid-cap drops to 40%; debt mutual funds and bonds go up to 75%. We compute eligible loan per-script before pledge.",
      bullets: ["Top-100 equities: 50% LTV.", "Top-200 mid-caps: 40–45% LTV.", "Debt MFs / bonds: up to 75% LTV."],
    },
    { id: "margin", eyebrow: "Margin-call safety net", panel: "COLLATERAL",
      title: "5–7 day cure window before any forced sale.",
      lede: "If portfolio value drops and LTV breaches the cap, you get a margin call with 5–7 working days to either pledge more securities or pay down the OD. Forced liquidation is a last resort, never a surprise.",
      bullets: ["LTV monitored daily, margin call only on breach.", "5–7 working days to cure.", "Pledge more shares OR repay OD — your call."],
    },
    { id: "lender", eyebrow: "JioCredit vs Mirae", panel: "RATES",
      title: "Two specialist NBFCs, two strengths.",
      lede: "JioCredit wins on speed (10-min disbursal, NSDL-only) and small-to-mid tickets up to ₹5 Cr. Mirae Asset Financial is the right route for ₹5–₹10 Cr tickets and MF-heavy portfolios where their LTV terms are sharper.",
      bullets: ["JioCredit: 9.25% start, NSDL only, ₹5 Cr cap, 10-min.", "Mirae: 9.50% start, larger ticket, MF-focused.", "We route based on your portfolio composition + ticket size."],
    },
  ],

  valueHeadline: "Liquidity without taxation, without timing the market.",
  valueProps: [
    { icon: Zap,         title: "10-minute disbursal",
      body: "JioCredit's NSDL integration pledges shares electronically and credits the OD same morning." },
    { icon: ShieldAlert, title: "Margin-call safety net",
      body: "If portfolio value drops, top-up window of 5–7 working days before any forced sale — no surprise liquidation." },
    { icon: BarChart3,   title: "Pay-as-you-use",
      body: "OD revolving facility — interest on drawn balance, not the sanctioned limit. Zero pre-payment penalty." },
  ],

  elig: {
    assetLabel: "Portfolio market value",
    defaultPropertyValue: 5000000,
    min: 500000,
    max: 100000000,
    step: 100000,
    ltvPct: 50,
    ltvLabel: "LTV on equity (75% on debt MFs)",
    defaultTenure: 1,
    maxTenure: 3,
    defaultRate: 9.5,
    rateMin: 9.25,
    rateMax: 13,
  },

  rateTable: [
    { lender: "JioCredit",            category: "NBFC · LAS specialist · NSDL only", rate: "9.25%", ticket: "₹5 Cr",  bestFor: "Speed · top-100 equities · debt MFs" },
    { lender: "Mirae Asset Financial",category: "NBFC · LAS specialist · MF focus",  rate: "9.50%", ticket: "₹10 Cr", bestFor: "Large ticket · mutual fund heavy" },
  ],

  variants: [
    { code: "EQ-OD",  title: "OD against equities",
      body: "Pledge listed shares from the lender's approved script-list. 50% LTV on top-100, lower on mid-caps. Best for liquidity from a long-term equity portfolio.",
      bullets: ["50% LTV on top-100", "NSDL pledge (JioCredit)", "Daily LTV monitoring"] },
    { code: "MF-OD",  title: "OD against mutual funds", highlight: true,
      body: "Pledge equity, debt or hybrid MF units. Up to 75% LTV on debt funds. Mirae Asset Financial is the specialist for MF-heavy portfolios.",
      bullets: ["Up to 75% LTV on debt MFs", "60% on equity MFs", "Cap of ₹10 Cr on Mirae"] },
    { code: "SGB",    title: "OD against Sovereign Gold Bonds",
      body: "SGBs accepted as pledgeable collateral by both partners. Same OD structure as equities, with LTV around 60–65%.",
      bullets: ["60–65% LTV", "Pledged via depository", "Same OD revolving structure"] },
    { code: "ETF",    title: "OD against ETFs",
      body: "Listed ETFs (Nifty, Bank Nifty, Gold) accepted at the same LTV as the underlying. Useful for index-investor portfolios.",
      bullets: ["Same LTV as underlying", "NSDL/CDSL pledge", "Approved-list applies"] },
  ],

  // Reuse btTopup field as a callout strip for "Why LAS over selling"
  btTopup:
    "LAS is the right structure when you need cash but don't want to crystallise capital gains, time the market, or break a long-term compounding plan. Pay 9.25–9.50% interest for the duration you actually need the money — typically far less than the LTCG you'd otherwise pay (10% above ₹1L) plus the opportunity cost of selling.",

  eligibilityCriteria: {
    qualifies: [
      "Indian resident, age 18+ (60 for some lenders)",
      "Active NSDL demat account with pledgeable holdings (CDSL on Mirae)",
      "Holdings include scripts on the lender's approved-list",
      "PAN linked to demat (mandatory)",
      "Bank account in your name (for OD credit)",
      "Mobile + email linked to PAN/Aadhaar (for e-KYC)",
    ],
    disqualifies: [
      "Joint demat accounts (most lenders accept individual only)",
      "Corporate / HUF / trust demat accounts (not on JioCredit; Mirae case-by-case)",
      "NRI demat (NRO/NRE) — case-by-case, restrictions apply",
      "Holdings entirely outside the approved script list",
      "Pledgeable value below ₹2 lakh (lender minimum)",
      "Demat with frozen / restricted-trade marker",
    ],
    note: "MF-heavy portfolio? Mirae is usually sharper on LTV. Pure equities, NSDL? JioCredit is faster. Mixed? We split the pledge across both for the optimal blended rate.",
  },

  process: [
    { duration: "Minute 0",  title: "Sign up + KYC",
      body: "PAN, Aadhaar e-KYC, demat account linkage via NSDL/CDSL." },
    { duration: "Minute 2",  title: "Portfolio scan",
      body: "Pledgeable holdings auto-detected; LTV applied per-script." },
    { duration: "Minute 5",  title: "Pledge",
      body: "Electronic pledge to lender's depository participant." },
    { duration: "Minute 10", title: "OD live",
      body: "Sanctioned limit credited to your linked bank as a revolving overdraft." },
    { duration: "Anytime",   title: "Draw / repay",
      body: "Use any portion, repay any time. Interest only on drawn balance." },
  ],

  documents: [
    { title: "Identity",       items: ["PAN (mandatory)", "Aadhaar (e-KYC consent)", "Live selfie"] },
    { title: "Bank linkage",   items: ["Cancelled cheque / bank passbook", "IFSC + account number", "OTP-verified UPI handle (optional)"] },
    { title: "Demat",          items: ["NSDL or CDSL DP details", "Holdings statement (auto-fetched)", "Pledge consent (in-app)"] },
    { title: "If Mirae route", items: ["Last 6 months' bank statements", "Latest ITR (for >₹2 Cr ticket)", "Mutual fund consolidated statement"] },
  ],

  fees: [
    { name: "Processing fee (lender)", amount: "Up to 2% of sanctioned limit", when: "On sanction", highlight: true },
    { name: "Annual maintenance (Mirae MF)", amount: "1% or ₹2,500 (higher)", when: "Annually" },
    { name: "Pledge / unpledge charges", amount: "₹0 — bundled", when: "Per transaction" },
    { name: "Foreclosure / pre-payment", amount: "₹0 — OD revolving structure", when: "Anytime" },
    { name: "Statpro fee (you pay us)", amount: "₹0 — paid by lender", when: "Never" },
    { name: "Late payment", amount: "2% per month on overdue interest", when: "If applicable" },
  ],

  faqs: [
    { q: "Which securities can I pledge?",
      a: "Listed equities (typically top-500 by market cap), units of equity and debt mutual funds, sovereign gold bonds and select ETFs. Lender publishes an approved-script list — top-100 equities and most large-cap MFs are always in. Smaller-cap and IPO-fresh stocks usually not." },
    { q: "What happens if the market drops?",
      a: "Lender monitors LTV daily. If your portfolio value falls and LTV exceeds the limit, you get a top-up call — usually 5–7 working days to either pledge more securities or pay down the OD. Forced liquidation is a last resort." },
    { q: "Is the LAS limit fixed or revolving?",
      a: "Revolving overdraft. You can draw any portion of the sanctioned limit, repay any time, redraw — and interest is charged only on the daily drawn balance. No EMIs, no pre-payment penalty." },
    { q: "What's the difference between JioCredit and Mirae for LAS?",
      a: "JioCredit is fastest (10-min disbursal) and best for tickets up to ₹5 Cr against top-100 equities (NSDL only). Mirae Asset Financial is the right route for larger tickets (₹5–₹10 Cr) and MF-heavy portfolios where their LTV terms are sharper." },
    { q: "Can I sell pledged shares?",
      a: "Not without unpledging first. Unpledge happens automatically as you repay the OD. If you need to sell while OD is active, repay the corresponding portion first — the lender's app supports partial unpledge." },
    { q: "How is LAS taxed?",
      a: "The loan itself isn't taxable income. Interest paid on LAS is generally not deductible unless the borrowing is for business purposes and demonstrably so. The avoided LTCG on pledged shares (vs selling them) is the implicit tax benefit." },
    { q: "Can I pledge shares held in a joint demat?",
      a: "Most lenders only accept individual demat accounts. Mirae handles joint accounts case-by-case if both holders consent and KYC clears. JioCredit is single-holder only." },
    { q: "What's the minimum pledge value?",
      a: "₹2 lakh of pledgeable holdings (after LTV haircut) is the lender minimum on JioCredit. Mirae starts at ₹5 lakh. Below that, the operational cost makes it uneconomic for the lender." },
  ],

  relatedCalcs: [
    { title: "EMI calculator", body: "Effective interest cost on drawn balance over your usage horizon.", icon: "Calculator", to: "/#calculator" },
    { title: "LAS LTV calculator", body: "Pledgeable value across equity / MF / SGB tiers.", icon: "LineChart", to: "/#calculator" },
    { title: "Eligibility calculator", body: "Indicative OD limit from portfolio composition.", icon: "Receipt", to: "/#calculator" },
  ],
};

export default function LasPage() {
  return <ProductPageLayout config={config} />;
}
