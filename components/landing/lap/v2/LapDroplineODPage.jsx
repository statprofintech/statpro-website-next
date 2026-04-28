"use client";

import { Wallet, Repeat, Activity, Building2 } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAP page", to: "/lap" };

const config = {
  hero: {
    eyebrow: "Dropline OD variant · for cyclical cash flows",
    title: "A revolving Loan Against Property —",
    accent: "pay interest only on what you actually draw.",
    lede: "A Dropline OD is a sanctioned overdraft against your property. Limit drops down quarterly per a fixed schedule, but you draw any amount within the limit at any time and pay interest only on the daily drawn balance. Built for businesses with lumpy or seasonal cash flows.",
    bullets: [
      "Interest only on the drawn balance, billed monthly.",
      "Quarterly limit step-down — built-in repayment discipline.",
      "Convertible to a term loan later if your needs stabilise.",
    ],
    stats: [
      { v: "Drawn",   l: "Interest charged on drawn balance only" },
      { v: "Q-by-Q",  l: "Limit step-down cadence" },
      { v: "₹0",      l: "Penalty on under-utilisation" },
      { v: "Convert", l: "Switch to term loan anytime" },
    ],
  },
  pillars: {
    eyebrow: "Why Dropline OD beats a vanilla term loan",
    title: "For the right cash-flow profile, the savings are dramatic.",
    items: [
      { icon: Repeat,   title: "Cyclical revenue businesses",
        body: "Trading, contracting, agri-allied — heavy WC draw in season, light off-season. Pay interest only when drawn, save 60–70% on interest cost vs term loan." },
      { icon: Wallet,   title: "Bulky inventory cycles",
        body: "Manufacturers and distributors with quarterly inventory peaks. Fund the peak without paying EMI on idle capital the rest of the year." },
      { icon: Building2, title: "Real-estate intermediate funding",
        body: "Bridge between selling one property and acquiring the next. Draw on demand, repay when sale proceeds land — no foreclosure friction." },
    ],
  },
  numbers: {
    eyebrow: "Term loan vs Dropline OD on the same ₹2 Cr facility",
    title: "Same property, same rate — different EMI math.",
    stats: [
      { v: "₹18 L",   l: "Term loan interest / yr",  sub: "₹2 Cr × 9% on full sanctioned amount" },
      { v: "₹4.5 L",  l: "OD interest / yr",         sub: "Avg drawn balance ₹50 L × 9%" },
      { v: "₹13.5 L", l: "Annual saving on OD",      sub: "When utilisation averages ~25%" },
      { v: "₹0",      l: "OD pre-payment penalty",   sub: "Repay any portion any time" },
    ],
  },
  example: {
    eyebrow: "A worked year",
    title: "₹2 Cr Dropline OD against a commercial office, used for working capital across a 12-month cycle.",
    narrative: "Distribution business with a Q1 inventory peak, mid-year light cash, and a Q4 receivables-collection bump. ₹2 Cr Dropline OD sanctioned against a self-occupied commercial property at 9.0% floating. Drawn ₹80 L Q1, repaid ₹40 L by Q2-end, redrew ₹50 L Q3, repaid in full by Q4. Average drawn balance: ~₹50 L.",
    ledger: [
      { k: "Sanctioned limit (Year 1)",       v: "₹2,00,00,000" },
      { k: "Q1 draw (inventory)",              v: "₹80,00,000" },
      { k: "Q2-end repaid",                    v: "₹40,00,000" },
      { k: "Q3 redraw",                        v: "₹50,00,000" },
      { k: "Q4 fully repaid",                  v: "₹0 outstanding" },
      { k: "Average drawn balance",            v: "~₹50,00,000" },
      { k: "Interest paid on OD (9% × avg)",   v: "≈ ₹4,50,000",  highlight: true },
      { k: "Same on term loan (₹2 Cr × 9%)",   v: "≈ ₹18,00,000" },
      { k: "Annual saving",                    v: "≈ ₹13,50,000", highlight: true },
      { k: "Limit step-down for Year 2",       v: "₹1,80,00,000" },
    ],
  },
  compare: {
    eyebrow: "Side-by-side",
    title: "Term Loan vs Dropline OD — pick by cash-flow shape, not just rate.",
    columns: ["Term Loan", "Dropline OD"],
    rows: [
      { dim: "Interest charged on", a: "Full sanctioned amount from day 1", b: "Daily drawn balance only" },
      { dim: "Repayment structure", a: "Fixed EMI (P + I) for full tenure",  b: "Interest-only servicing; principal as you pay" },
      { dim: "Sanctioned limit",     a: "Stays the same",                     b: "Steps down quarterly per schedule" },
      { dim: "Flexibility to redraw", a: "No — once paid, principal is gone",  b: "Yes — repay and redraw within limit" },
      { dim: "Best for",             a: "Predictable, fixed-purpose use",      b: "Lumpy, cyclical, or contingent cash needs" },
      { dim: "Pre-payment penalty",  a: "₹0 (RBI) for individuals, floating",  b: "₹0 (RBI) for individuals, floating" },
      { dim: "Convertibility",       a: "Stuck with EMI structure",            b: "Switch to term loan later if needs stabilise" },
    ],
  },
  eligibility: {
    eyebrow: "When Dropline OD is the right structure",
    title: "Profiles that benefit + when to pick term loan instead.",
    qualifies: [
      "Cyclical or seasonal revenue (trading, contracting, agri, manufacturing)",
      "Variable working-capital need that swings ₹50 L+ across the year",
      "Sanctioned ticket ₹1 Cr+ (below that the OD setup cost dilutes the saving)",
      "Property collateral with clear title — same as vanilla LAP",
      "Borrower CIBIL 700+ for banks, 650+ for NBFCs",
    ],
    also: [
      "If your cash need is one-time and predictable, a term loan is sharper. The lender prices the OD with a small spread for the optionality.",
      "Some lenders offer a hybrid Term-Loan-OD on the same property — locks in a low EMI on the core, keeps OD flexibility on the buffer.",
      "OD limit step-down can be customised — quarterly is standard, but half-yearly or annual is negotiable at sanction.",
    ],
  },
  faqs: [
    { q: "What's the rate on a Dropline OD vs a term loan?",
      a: "Typically 25–50 bps higher on the OD because the lender prices the optionality. On the same property, expect 8.40% term loan vs 8.65–8.90% Dropline OD on our panel. The structure savings outweigh the rate spread when utilisation averages below ~70%." },
    { q: "How does the limit step-down work?",
      a: "Sanctioned limit drops by a fixed percentage each quarter. Example: ₹2 Cr Year 1 → ₹1.80 Cr Year 2 → ₹1.60 Cr Year 3 → … At end of tenure, the limit is ₹0. Drawn balance must be repaid as the limit drops below it (usual 30-day cure window)." },
    { q: "Can I convert the OD into a term loan later?",
      a: "Yes — most lenders allow conversion at the borrower's option, usually after Year 1. The drawn balance becomes the term-loan principal, amortised over the residual tenure at the prevailing term-loan rate." },
    { q: "Is interest tax-deductible on a Dropline OD?",
      a: "Same rules as a term loan — if the borrowing is for business purposes, the interest is deductible. For personal/property-cash-out purposes, no deduction. Consult your CA on your specific use-of-funds." },
    { q: "What if I draw more than I need and just park it?",
      a: "You'd pay interest on the parked balance. The discipline is: draw only when needed, repay aggressively when cash returns. The structure rewards active cash management." },
    { q: "Which lenders on your panel offer Dropline OD?",
      a: "Bajaj Finserv, HDFC Bank, ICICI Bank (case-by-case), Tata Capital, and Aditya Birla Capital all support Dropline OD on our LAP panel. Bajaj's Flexi-Hybrid is the most flexible variant — combines OD + term loan in one sanction." },
  ],
  cta: {
    headline: "Lumpy cash flow? The OD structure pays for itself.",
    body: "Tell us your average utilisation and the swing range. We'll model the term-loan-vs-OD math on your specific file and bring back panel-comparison quotes within one working day.",
    primary:   { label: "Get a Dropline OD quote",  to: "/apply?family=LAP&variant=Dropline%20OD" },
    secondary: { label: "See main LAP page",         to: "/lap" },
  },
};

export default function LapDroplineODPageV2() {
  return <MarketingLandingLayout family="LAP" parent={PARENT} config={config} />;
}
