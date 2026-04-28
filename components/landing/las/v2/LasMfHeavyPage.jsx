"use client";

import { BarChart3, Layers, Sparkles } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAS page", to: "/las" };

const config = {
  hero: {
    eyebrow: "LAS · for mutual-fund-heavy portfolios",
    title: "Mutual fund holdings?",
    accent: "Up to 75% LTV on debt, 60% on equity MF.",
    lede: "Mirae Asset Financial is the specialist NBFC for mutual-fund-heavy LAS portfolios. They run the sharpest LTVs on debt MFs (75%) and equity MFs (60%), with CDSL support and a dedicated MF-pledging team.",
    bullets: [
      "Up to 75% LTV on debt mutual funds.",
      "60% LTV on equity MFs (vs 50% on equities).",
      "CDSL-supported (in addition to NSDL).",
    ],
    stats: [
      { v: "75%",     l: "LTV on debt MFs" },
      { v: "60%",     l: "LTV on equity MFs" },
      { v: "₹10 Cr",  l: "Per-account ticket cap (Mirae)" },
      { v: "9.50%",   l: "Starting rate on Mirae" },
    ],
  },
  pillars: {
    eyebrow: "Why MF-heavy portfolios go to Mirae",
    title: "Three structural advantages on MF pledging.",
    items: [
      { icon: BarChart3, title: "Sharper MF LTVs",
        body: "Mirae's MF script-list is broader (most large-cap + multi-cap + debt funds) and LTVs are 5–10% sharper than JioCredit on the same MF holdings." },
      { icon: Layers,    title: "CDSL + NSDL support",
        body: "Mirae handles both CDSL and NSDL demats. JioCredit is NSDL-only. If your MF units are in CDSL (more common with bank-linked demats), Mirae is the only route." },
      { icon: Sparkles,  title: "Larger ticket headroom",
        body: "₹10 Cr per-account cap (vs ₹5 Cr on JioCredit). For corporate / HUF / large-portfolio borrowers, Mirae is the ticket-size answer." },
    ],
  },
  numbers: {
    eyebrow: "Mirae LAS — at a glance",
    title: "Where Mirae beats and where it sits.",
    stats: [
      { v: "75%",      l: "Debt-MF LTV",            sub: "Highest on the panel" },
      { v: "₹10 Cr",   l: "Max per-account ticket", sub: "vs ₹5 Cr on JioCredit" },
      { v: "9.50%",    l: "Starting rate",           sub: "vs 9.25% on JioCredit" },
      { v: "T+2/3",    l: "Sanction TAT",            sub: "vs T+1 on JioCredit (slower KYC)" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹3 Cr LAS against a ₹5 Cr MF portfolio (60/40 debt/equity split).",
    narrative: "Promoter held a ₹5 Cr mutual fund portfolio — ₹3 Cr in debt funds (corporate bond + dynamic) + ₹2 Cr in equity funds (Mirae's own + parag parikh + axis bluechip). CDSL demat. Sought ₹3 Cr LAS for an Indian residential investment. Routed to Mirae; placed at 9.50% with 3-yr OD facility.",
    ledger: [
      { k: "Portfolio: ₹5 Cr MF (CDSL)",       v: "" },
      { k: "  Debt MFs",                       v: "₹3,00,00,000" },
      { k: "  Equity MFs",                      v: "₹2,00,00,000" },
      { k: "Pledgeable: debt @ 75%",            v: "₹2,25,00,000" },
      { k: "Pledgeable: equity @ 60%",          v: "₹1,20,00,000" },
      { k: "Total pledgeable",                  v: "₹3,45,00,000" },
      { k: "OD limit sanctioned",                v: "₹3,00,00,000", highlight: true },
      { k: "Lender",                            v: "Mirae Asset Financial", highlight: true },
      { k: "Rate",                              v: "9.50% floating" },
      { k: "AMC",                                v: "1% of sanction limit / yr" },
    ],
  },
  eligibility: {
    eyebrow: "When MF-heavy portfolio routes to Mirae",
    title: "Borrower + portfolio mix decides JioCredit vs Mirae.",
    qualifies: [
      "MF holdings ≥ ₹5 L (Mirae minimum)",
      "Portfolio is MF-heavy (60%+ MF by value)",
      "Demat is CDSL (Mirae handles), or NSDL with MF units pledgeable",
      "Indian resident, age 18+, individual demat (corporate / HUF case-by-case)",
      "Bank account in your name for OD credit",
    ],
    also: [
      "Mixed equity + MF portfolios: split-pledge across JioCredit (equities) + Mirae (MFs) for the optimal blended rate",
      "Mirae offers an Annual Maintenance Charge (AMC) of 1% / ₹2,500 (whichever higher) on the sanction limit — factor into total cost",
      "Larger tickets (₹5–10 Cr) almost always go to Mirae — JioCredit's ₹5 Cr cap is hard",
    ],
  },
  faqs: [
    { q: "Why is the equity LTV higher on Mirae (60%) vs JioCredit (50%)?",
      a: "Mirae prices equity MF units more aggressively because of the underlying diversification — a single MF unit is already a basket of 30–60 stocks, so concentration risk is lower than a single equity script." },
    { q: "What's the AMC and how does it affect total cost?",
      a: "Mirae charges 1% of sanction limit / year (or ₹2,500, whichever higher) as Annual Maintenance Charge. On a ₹3 Cr LAS, AMC = ₹3 L/yr. Total cost = interest on drawn balance + AMC. Worth running the math when comparing JioCredit (no AMC, slightly higher rate)." },
    { q: "Can I pledge SIP-active MF units?",
      a: "Yes — but the SIP needs to continue from a different bank account (not the OD credit account). The pledge applies to existing units; new SIP units land unpledged unless you actively re-pledge." },
    { q: "What about Index ETFs?",
      a: "Listed ETFs (Nifty, Bank Nifty, Gold) accepted at the same LTV as the underlying. Mirae's ETF script-list is broader than JioCredit's." },
    { q: "Can a HUF / family trust pledge MFs?",
      a: "Mirae case-by-case for HUF and trust demats. JioCredit is individual-demat only. Documentation overhead is higher (HUF deed, karta authorisation), but it's bankable." },
  ],
  cta: {
    headline: "MF-heavy portfolio? Mirae is almost always the right route.",
    body: "Send us your CAS / consolidated MF statement. We'll model the eligibility split (JioCredit + Mirae blended) and route to the optimal lender within one working day.",
    primary:   { label: "Get an MF-LAS quote", to: "/apply?family=LAS" },
    secondary: { label: "Read more on LAS",     to: "/las" },
  },
};

export default function LasMfHeavyPageV2() {
  return <MarketingLandingLayout family="LAS" parent={PARENT} config={config} />;
}
