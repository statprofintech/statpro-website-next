"use client";

import { TrendingDown, Wallet, RefreshCw } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Personal Loan page", to: "/pl" };

const config = {
  hero: {
    eyebrow: "PL · Debt consolidation",
    title: "Roll up credit-card debt",
    accent: "into one cleaner EMI.",
    lede: "Credit-card revolving debt typically costs 36–48% APR. A consolidation PL at 11–14% can cut your monthly outflow in half and give you a clear payoff timeline. Same lenders, same panel — the framing matters.",
    bullets: [
      "Cut effective interest cost from ~40% APR to ~12%.",
      "Single fixed EMI vs revolving minimum-due trap.",
      "Clear 3–5 year payoff timeline vs perpetual revolving.",
    ],
    stats: [
      { v: "~40% → 12%", l: "Effective rate cut" },
      { v: "3–5 yrs",     l: "Clear payoff timeline" },
      { v: "₹50 L",       l: "Max consolidation ticket" },
      { v: "5–7 days",    l: "Disbursal TAT" },
    ],
  },
  pillars: {
    eyebrow: "Why consolidation works",
    title: "Three structural advantages over revolving credit-card debt.",
    items: [
      { icon: TrendingDown, title: "Effective rate cut",
        body: "Credit cards charge 3–4% per MONTH (~40% APR effective with compounding). PL at 12% APR is roughly 1/3 the cost. On ₹5 L of CC debt, that's ₹1.4 L/yr saved." },
      { icon: Wallet,       title: "Fixed EMI structure",
        body: "Monthly minimum-due trap on credit cards lets the balance grow forever. A PL is fixed P+I EMI — every payment retires principal. Loan ENDS." },
      { icon: RefreshCw,    title: "Single repayment cycle",
        body: "Consolidate 3–5 different cards / EMIs into one PL. Single date, single bank, single CIBIL impact. Reduces missed-payment risk dramatically." },
    ],
  },
  numbers: {
    eyebrow: "Consolidation math",
    title: "On a typical ₹5 L credit-card balance.",
    stats: [
      { v: "~₹2 L",   l: "Annual interest on revolving CC", sub: "@ ~40% effective APR" },
      { v: "~₹60 K",  l: "Annual interest on PL @ 12%",     sub: "Same ₹5 L balance" },
      { v: "₹1.4 L",  l: "Annual saving from consolidation", sub: "Direct, year 1" },
      { v: "3–5 yrs", l: "Clear payoff timeline",            sub: "Vs perpetual on CC" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹6 L consolidation PL for a salaried borrower with 4 active credit cards.",
    narrative: "Salaried borrower with revolving balances on 4 credit cards totalling ₹6 L. Paying ~₹18 K/month in minimum dues, but balance was actually growing 3–5% per quarter. Consolidated into a 4-yr PL at 13% via Bajaj Finserv — single ₹16 K EMI, balance retiring from day 1, clear 4-year payoff.",
    ledger: [
      { k: "Existing balances",                 v: "" },
      { k: "  HDFC Credit Card",                v: "₹2,20,000 @ 42% APR" },
      { k: "  ICICI Credit Card",                v: "₹1,80,000 @ 41% APR" },
      { k: "  Axis Credit Card",                v: "₹1,20,000 @ 39% APR" },
      { k: "  SBI Credit Card",                 v: "₹80,000 @ 40% APR" },
      { k: "Total CC balance",                  v: "₹6,00,000" },
      { k: "Min-due monthly outflow (5%)",      v: "₹30,000" },
      { k: "PL consolidation",                  v: "₹6,00,000 × 4 yrs × 13%", highlight: true },
      { k: "PL EMI",                            v: "₹16,100/mo", highlight: true },
      { k: "Year-1 saving on interest",         v: "≈ ₹1,40,000", highlight: true },
      { k: "Lifetime saving over 4 yrs",        v: "≈ ₹3,80,000", highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "Consolidation PL qualification",
    title: "Borrower + use-of-funds rules.",
    qualifies: [
      "Salaried with 2+ years' total experience (1+ year current employer)",
      "Net monthly income ≥ ₹50 K",
      "CIBIL 700+ (despite revolving CC use — lender focuses on payment history)",
      "Total existing EMIs (incl. CC min-dues) ≤ 60% of net income before consolidation",
      "After consolidation, FOIR drops below 50% — lender wants to see the math improving",
      "Use-of-funds undertaking: 'consolidation of existing unsecured debt'",
    ],
    also: [
      "Lender may directly disburse the PL to your CC issuers (debt-takeover) on request — eliminates the discipline risk",
      "PL Balance Transfer of an existing PL doesn't qualify as consolidation — that's a different product (rarely worth doing)",
      "Personal Loan vs LAP for consolidation: if you have property, OD-LAP at 8–9% beats a PL at 12% by miles",
    ],
  },
  faqs: [
    { q: "Will the consolidation hurt my CIBIL?",
      a: "Short-term: small dip from the new credit enquiry + the new loan account. Medium-term: significant boost as your credit-card utilisation drops to 0% and EMI is paid on time. Net positive within 3–6 months." },
    { q: "Should I close the credit cards after consolidation?",
      a: "No — keep them open with ₹0 balance. Closing reduces your credit limit, which spikes your utilisation ratio on remaining cards / future cards. Keep, but don't use." },
    { q: "Can the PL be directly disbursed to my CC issuers?",
      a: "Yes — most lenders offer debt-takeover where they pay your CC issuers directly. Eliminates the discipline risk (no temptation to use the PL for something else)." },
    { q: "What if I have an existing PL too?",
      a: "Lender may include it in the consolidation package (single PL covering CC + existing PL). Sometimes called a 'BT + Consolidation'. Bajaj and Tata are flexible here." },
    { q: "If I have property, should I use LAP instead?",
      a: "Almost always yes. LAP at 8–9% × 10 years has a vastly lower EMI than PL at 12% × 4 years on the same ₹6 L. Talk to us about an OD-LAP if you want flexibility on top." },
  ],
  cta: {
    headline: "Stuck on credit-card revolving? Consolidate. Save ~₹1.4 L year 1.",
    body: "Send your CC balances + salary slip. We'll size a consolidation PL within one working day — and offer LAP as an alternative if you have property.",
    primary:   { label: "Get a consolidation PL quote", to: "/apply?family=PL" },
    secondary: { label: "See main PL page",              to: "/pl" },
  },
};

export default function PlDebtConsolidationPageV2() {
  return <MarketingLandingLayout family="PL" parent={PARENT} config={config} />;
}
