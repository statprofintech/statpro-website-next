"use client";

import { Wallet, Repeat, Activity } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Business Loan page", to: "/bl" };

const config = {
  hero: {
    eyebrow: "Business Loan · working-capital line",
    title: "Working capital that",
    accent: "matches your cash cycle.",
    lede: "Dropline OD against your business — interest only on the drawn balance, limit drops down quarterly. Built for cyclical or seasonal cash flows where a fixed-EMI term loan would over-charge you on idle capital.",
    bullets: [
      "Interest only on drawn balance, not sanctioned limit.",
      "Quarterly limit step-down — built-in repayment discipline.",
      "Convert to term loan later if needs stabilise.",
    ],
    stats: [
      { v: "Drawn",   l: "Interest charged on drawn balance only" },
      { v: "Q-by-Q",  l: "Limit step-down cadence" },
      { v: "₹1 Cr",    l: "Max sanctioned per lender" },
      { v: "Convert", l: "Switch to term loan anytime" },
    ],
  },
  pillars: {
    eyebrow: "Why Dropline OD beats a vanilla term BL",
    title: "For the right cash-flow profile, savings are dramatic.",
    items: [
      { icon: Repeat,    title: "Cyclical revenue businesses",
        body: "Trading, contracting, agri-allied — heavy WC draw in season, light off-season. Pay interest only when drawn." },
      { icon: Wallet,    title: "Bulky inventory cycles",
        body: "Manufacturers and distributors with quarterly inventory peaks — fund the peak without paying EMI on idle capital the rest of the year." },
      { icon: Activity,  title: "Project-based cash flow",
        body: "EPC, IT services, exporters — milestone receipts are lumpy. OD smooths the gap without committing to fixed EMI." },
    ],
  },
  numbers: {
    eyebrow: "Term BL vs Dropline OD on ₹75 L sanctioned",
    title: "Same lender, different EMI math.",
    stats: [
      { v: "₹13.5 L", l: "Term loan interest / yr",   sub: "₹75 L × 18% on full sanctioned" },
      { v: "₹2.7 L",  l: "OD interest / yr",          sub: "Avg drawn ₹15 L × 18%" },
      { v: "₹10.8 L", l: "Annual saving on OD",       sub: "When utilisation averages ~20%" },
      { v: "₹0",      l: "OD pre-payment penalty",    sub: "Repay any portion any time" },
    ],
  },
  example: {
    eyebrow: "A worked year",
    title: "₹75 L Dropline OD for a textile distributor across a 12-month cycle.",
    narrative: "Family textile distributor with Q1 inventory peak (Diwali stocking), mid-year light cash, and Q4 receivables-collection bump. ₹75 L Dropline OD at 17% from Bajaj Finserv. Drew ₹50 L Q1, repaid ₹25 L by Q2-end, redrew ₹30 L Q3, repaid in full Q4. Average drawn balance: ~₹25 L.",
    ledger: [
      { k: "Sanctioned limit (Year 1)",         v: "₹75,00,000" },
      { k: "Q1 draw (inventory)",                v: "₹50,00,000" },
      { k: "Q2-end repaid",                      v: "₹25,00,000" },
      { k: "Q3 redraw",                          v: "₹30,00,000" },
      { k: "Q4 fully repaid",                    v: "₹0 outstanding" },
      { k: "Average drawn balance",              v: "~₹25,00,000" },
      { k: "Interest paid on OD (17% × avg)",    v: "≈ ₹4,25,000",  highlight: true },
      { k: "Same on term BL (₹75 L × 17%)",      v: "≈ ₹12,75,000" },
      { k: "Annual saving",                      v: "≈ ₹8,50,000",  highlight: true },
      { k: "Limit step-down for Year 2",         v: "₹65,00,000" },
    ],
  },
  eligibility: {
    eyebrow: "When Dropline OD is the right structure",
    title: "Profiles that benefit + when to pick term loan.",
    qualifies: [
      "Cyclical or seasonal revenue (trading, distribution, contracting, agri)",
      "Variable working-capital need that swings ₹20 L+ across the year",
      "Sanctioned ticket ₹50 L+ (below that the OD setup cost dilutes the saving)",
      "Borrower CIBIL 700+ for banks, 650+ for NBFCs",
      "GST + ITR + bank trail clean for last 12 months",
    ],
    also: [
      "If your cash need is one-time and predictable, a term loan is sharper. Lender prices the OD with a small spread for the optionality.",
      "Bajaj Flexi-Hybrid combines term loan + OD in one sanction — locks in low EMI on the core, keeps OD flexibility on the buffer.",
      "Limit step-down can be customised — quarterly is standard, but half-yearly negotiable at sanction.",
    ],
  },
  faqs: [
    { q: "What's the rate on a Dropline OD vs term BL?",
      a: "Typically 50–100 bps higher on the OD because the lender prices the optionality. On the same profile, expect 16% term BL vs 16.5–17% OD on our panel. Structure savings outweigh the rate spread when utilisation averages below ~50%." },
    { q: "How does the limit step-down work?",
      a: "Sanctioned limit drops by a fixed percentage each quarter — typically 4-5% per quarter, 16–20% per year. At end of tenure (3–5 yrs), the limit is ₹0. Drawn balance must be repaid as the limit drops below it (usual 30-day cure window)." },
    { q: "Can I convert the OD into a term loan later?",
      a: "Yes — most lenders allow conversion at the borrower's option, usually after Year 1. The drawn balance becomes the term-loan principal, amortised over the residual tenure at the prevailing term-loan rate." },
    { q: "Is interest tax-deductible on a Dropline OD?",
      a: "Same rules as a term loan — if borrowing is for business purposes, interest is deductible. For personal/cash-out, no deduction. Consult your CA on your specific use-of-funds." },
    { q: "What if I draw more than I need and just park it?",
      a: "You'd pay interest on the parked balance. The discipline is: draw only when needed, repay aggressively when cash returns. The structure rewards active cash management." },
  ],
  cta: {
    headline: "Lumpy cash flow? The OD structure pays for itself.",
    body: "Tell us your average utilisation and the swing range. We'll model the term-loan-vs-OD math on your specific file and bring back panel-comparison quotes within one working day.",
    primary:   { label: "Get a Dropline OD quote", to: "/apply?family=BL&variant=Dropline%20OD" },
    secondary: { label: "See main BL page",         to: "/bl" },
  },
};

export default function BlWorkingCapitalPageV2() {
  return <MarketingLandingLayout family="BL" parent={PARENT} config={config} />;
}
