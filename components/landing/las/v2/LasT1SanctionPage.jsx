"use client";

import { Zap, ShieldAlert, BarChart3 } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAS page", to: "/las" };

const config = {
  hero: {
    eyebrow: "LAS · T+1 sanction",
    title: "Pledge today,",
    accent: "draw tomorrow morning.",
    lede: "JioCredit's NSDL-pledge route gets the OD live within 24 hours of e-KYC for top-100 equities and large-cap mutual funds. Pay interest only on what you draw — and unpledge as you repay. End-to-end paperless.",
    bullets: [
      "T+1 sanction TAT — sometimes same-day for clean files.",
      "₹5 Cr per-account ticket cap on JioCredit.",
      "Mirae Asset Financial for larger tickets and MF-heavy portfolios.",
    ],
    stats: [
      { v: "T+1",   l: "Sanction TAT" },
      { v: "9.25%", l: "Starting rate" },
      { v: "50%",   l: "LTV on top-100 equities" },
      { v: "75%",   l: "LTV on debt MFs" },
    ],
  },
  pillars: {
    eyebrow: "Why JioCredit for T+1 LAS",
    title: "Built around speed, NSDL-only, no physical paperwork.",
    items: [
      { icon: Zap,         title: "10-minute portfolio scan",
        body: "Pledgeable holdings auto-detected via NSDL DP linkage. Per-script LTV applied automatically." },
      { icon: BarChart3,   title: "OD revolving structure",
        body: "Sanctioned limit credited to your linked bank as a revolving overdraft. Draw any portion any time, repay any time." },
      { icon: ShieldAlert, title: "5–7 day cure window",
        body: "If portfolio dips, lender opens a 5–7 working day cure window before any sale. Forced liquidation is a last resort." },
    ],
  },
  numbers: {
    eyebrow: "JioCredit T+1 LAS — what to expect",
    title: "Speed, ticket, structure summary.",
    stats: [
      { v: "T+1",      l: "Sanction TAT", sub: "Sometimes same-day for clean files" },
      { v: "₹5 Cr",    l: "Per-account ticket cap", sub: "Higher tickets route to Mirae" },
      { v: "Top-100",  l: "Equity script-list", sub: "+ large-cap MFs + SGB + ETFs" },
      { v: "0%",       l: "Pre-payment penalty", sub: "OD revolving structure" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "Pledging a ₹2 Cr top-100 equity portfolio for a 6-month working-capital need.",
    narrative: "Promoter held a ₹2 Cr equity portfolio (HUL, ITC, Infy, Reliance, ICICI Bank, etc.) and needed ₹70 L for 6-month working capital. Selling = LTCG on ~₹40 L of gains + lost the next 8% rally. Pledged via JioCredit; OD lived next morning at 9.25%. Drew ₹70 L, repaid in 5 months, unpledged.",
    ledger: [
      { k: "Portfolio value",          v: "₹2,00,00,000" },
      { k: "Pledgeable (50% LTV)",      v: "₹1,00,00,000" },
      { k: "OD limit sanctioned",       v: "₹1,00,00,000", highlight: true },
      { k: "Drawn",                     v: "₹70,00,000" },
      { k: "Rate",                      v: "9.25%" },
      { k: "Interest paid (5 mo)",       v: "≈ ₹2,69,000" },
      { k: "LTCG avoided",               v: "≈ ₹4,00,000",  highlight: true },
      { k: "Rally captured",             v: "₹16,00,000",   highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "Who qualifies",
    title: "Indian resident, individual demat, top-list securities.",
    qualifies: [
      "Indian resident, age 18+ (60 cap on some lenders)",
      "Active NSDL demat with pledgeable holdings (CDSL on Mirae)",
      "Holdings include top-500 equities or large-cap MFs",
      "PAN linked to demat (mandatory)",
      "Bank account in your name for OD credit",
    ],
    also: [
      "Joint demat — Mirae case-by-case; JioCredit individual only",
      "Corporate / HUF / trust — Mirae case-by-case",
      "Holdings under ₹2 L — below the lender minimum",
    ],
  },
  faqs: [
    { q: "Why JioCredit and not a bank for LAS?",
      a: "Banks take 5–10 working days for LAS sanction; JioCredit is genuinely T+1 because the pledge is electronic via NSDL. For amounts > ₹5 Cr or MF-heavy portfolios, Mirae is the right route." },
    { q: "What happens if the market drops sharply?",
      a: "Lender monitors LTV daily. If your portfolio falls and LTV breaches the cap, you get a top-up call — 5–7 working days to either pledge more securities or pay down the OD." },
    { q: "Can I sell pledged shares?",
      a: "Not without unpledging first. Repay the corresponding portion of the OD; the lender's app supports partial unpledge in one flow." },
    { q: "Is LAS taxable?",
      a: "The loan itself isn't taxable income. Interest paid is generally not tax-deductible unless the borrowing is for business — talk to your CA. The avoided LTCG on pledged shares is the implicit benefit." },
    { q: "Can I pledge mutual funds?",
      a: "Yes — both equity and debt MFs. Debt MFs get up to 75% LTV (highest on the panel). For MF-heavy portfolios, Mirae is usually sharper." },
  ],
  cta: {
    headline: "Pledge today. Draw tomorrow morning.",
    body: "If you'd rather use your portfolio than sell it, send us your demat snapshot. We'll quote the OD limit + ROI within one working day.",
    primary:   { label: "Open my LAS",        to: "/apply?family=LAS" },
    secondary: { label: "Read more on LAS",   to: "/las" },
  },
};

export default function LasT1SanctionPageV2() {
  return <MarketingLandingLayout family="LAS" parent={PARENT} config={config} />;
}
