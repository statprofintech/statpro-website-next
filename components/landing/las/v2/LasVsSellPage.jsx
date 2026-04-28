"use client";

import { BarChart3, TrendingDown, Sparkles } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAS page", to: "/las" };

const config = {
  hero: {
    eyebrow: "LAS vs selling shares",
    title: "Need cash?",
    accent: "Pledge — don't sell.",
    lede: "Selling crystallises LTCG, locks in today's price and forfeits the next leg of compounding. Pledging via LAS keeps the position intact, uses the asset as collateral, and costs you only the interest on what you actually draw.",
    bullets: [
      "10% LTCG saved (above ₹1 L per FY)",
      "0% pre-payment penalty — repay anytime",
      "Daily interest-only billing on drawn balance",
    ],
    stats: [
      { v: "10%",   l: "LTCG saved" },
      { v: "0%",    l: "Pre-payment penalty" },
      { v: "Any %", l: "Draw amount" },
      { v: "Daily", l: "Interest-only billing" },
    ],
  },
  pillars: {
    eyebrow: "What selling actually costs",
    title: "The triple cost of selling for liquidity.",
    items: [
      { icon: TrendingDown, title: "10% LTCG cost",
        body: "Long-term capital gains above ₹1 L per FY taxed at 10%. On a ₹50 L sale of long-held shares, ~₹4 L of LTCG you didn't have to pay." },
      { icon: BarChart3,    title: "Locked-in exit price",
        body: "Selling crystallises today's price. If the market is flat or down, you're selling at a bad print." },
      { icon: Sparkles,     title: "Re-entry cost",
        body: "By the time the cash need is over, the market has often moved 5–15% higher. Buying back is more expensive than borrowing was." },
    ],
  },
  numbers: {
    eyebrow: "The math, on a real example",
    title: "₹50 L liquidity need against a ₹2 Cr long-held equity portfolio.",
    stats: [
      { v: "₹4 L",     l: "LTCG avoided",            sub: "10% on ~₹40 L of long-term gain" },
      { v: "₹8–12 L",  l: "Re-entry cost avoided",   sub: "Average 6-mo market move" },
      { v: "≈ ₹2.3 L", l: "Total LAS interest cost", sub: "9.25% on ₹50 L for 6 months" },
      { v: "₹10–14 L", l: "Net saving from LAS",     sub: "Sell-and-rebuy vs pledge" },
    ],
  },
  example: {
    eyebrow: "A worked side-by-side",
    title: "₹50 L need, ₹2 Cr portfolio, 6-month repayment plan.",
    narrative: "Promoter holds ₹2 Cr in top-100 equities, average cost ₹1.6 Cr (₹40 L of LT gains). Needs ₹50 L for 6 months. Two paths: (a) sell ₹50 L of shares + pay LTCG, (b) pledge entire portfolio + draw ₹50 L on LAS.",
    ledger: [
      { k: "Path A — Sell ₹50 L of shares",       v: "" },
      { k: "  LTCG on proportional gain",         v: "₹4,00,000" },
      { k: "  Lost compounding (6 mo @ 10%)",      v: "₹2,50,000" },
      { k: "  Re-entry cost (avg 8% rally)",       v: "₹4,00,000" },
      { k: "  Path A total cost",                  v: "≈ ₹10,50,000" },
      { k: "Path B — Pledge & draw ₹50 L LAS",     v: "", highlight: true },
      { k: "  Interest @ 9.25% × 6 mo",            v: "≈ ₹2,31,000" },
      { k: "  Processing fee (0.5%)",              v: "₹25,000" },
      { k: "  Path B total cost",                  v: "≈ ₹2,56,000", highlight: true },
      { k: "Net saving — pledge vs sell",          v: "≈ ₹7,94,000",  highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "When LAS makes the most sense",
    title: "The clear pledge-vs-sell decision tree.",
    qualifies: [
      "Need cash for < 2 years (LAS shines on shorter horizons)",
      "Long-held equity with significant LTCG — selling triggers tax",
      "Portfolio in your name (individual demat, NSDL preferred for JioCredit speed)",
      "Confident in the position long-term — pledging assumes you don't want to exit",
      "Pledgeable holdings ≥ ₹5 L (lender minimum)",
    ],
    also: [
      "If the position is overweight + you wanted to trim anyway, selling can be the right call",
      "If you're certain the market will fall in your repayment window, selling now hedges the LAS interest cost",
      "If LAS interest rate exceeds your conservative return expectation, the math flips — re-evaluate",
    ],
  },
  faqs: [
    { q: "What if the LAS rate exceeds my equity return?",
      a: "It probably won't over a long horizon, but for short LAS draws (< 1 year), interest cost is small in absolute terms and almost always smaller than LTCG + re-entry cost. Run the numbers on your actual ticket." },
    { q: "Can I get LAS against shares I haven't held long?",
      a: "Yes — there's no minimum holding period for LAS pledging. The lender cares about the script being on the approved list, not how long you've held it." },
    { q: "What if I want to sell some pledged shares anyway?",
      a: "Repay the proportional OD first → unpledge → sell. The lender app supports partial unpledge in one flow." },
    { q: "What about TDS on dividends from pledged shares?",
      a: "Dividends are credited to your bank as usual; TDS applies normally — pledging doesn't change tax treatment of dividend income." },
    { q: "Can I pledge ESOP shares or RSUs?",
      a: "Once vested and credited to your demat, yes — same as any other equity. Unvested options aren't pledgeable until they vest and land in demat." },
  ],
  cta: {
    headline: "Pledge today. Keep the position. Keep the LTCG.",
    body: "Send us your demat snapshot and the cash amount + horizon. We'll quote LAS pricing within one working day and run the pledge-vs-sell math for your specific file.",
    primary:   { label: "Open my LAS",        to: "/apply?family=LAS" },
    secondary: { label: "Read more on LAS",   to: "/las" },
  },
};

export default function LasVsSellPageV2() {
  return <MarketingLandingLayout family="LAS" parent={PARENT} config={config} />;
}
