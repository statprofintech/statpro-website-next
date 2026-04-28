"use client";

import { Briefcase, ShieldCheck, BarChart3 } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAS page", to: "/las" };

const config = {
  hero: {
    eyebrow: "LAS · for promoter / founder pledges",
    title: "Promoter holdings,",
    accent: "pledged for liquidity — without losing voting rights.",
    lede: "If you're a promoter or founder with concentrated equity holdings in your own listed company, you can pledge those holdings via LAS without selling — keep voting rights, keep dividend income, keep alignment with shareholders. Specialist desks handle promoter-pledge disclosures.",
    bullets: [
      "Voting + dividend rights stay with you (pledge is non-economic).",
      "SEBI promoter-pledge disclosure handled by lender's compliance team.",
      "Up to 40% LTV on promoter equity (lower than diversified portfolios).",
    ],
    stats: [
      { v: "40%",     l: "Typical LTV on promoter equity" },
      { v: "Voting",  l: "Rights stay with you" },
      { v: "SEBI",    l: "Promoter-pledge filing handled" },
      { v: "₹5 Cr+",  l: "Sweet-spot ticket band" },
    ],
  },
  pillars: {
    eyebrow: "Why promoter pledges go to specialist desks",
    title: "Three SEBI-aware tweaks that vanilla LAS desks miss.",
    items: [
      { icon: Briefcase,    title: "SEBI disclosure handling",
        body: "Promoter pledges trigger SEBI Reg 31 disclosures within 7 working days. Specialist lenders coordinate with your CS / RTA to file on time — zero compliance overhead on your side." },
      { icon: ShieldCheck,  title: "Voting + dividend rights",
        body: "The pledge is non-economic — your shares stay in your demat with the lender lien. You keep all voting rights, AGM participation, and dividend income." },
      { icon: BarChart3,    title: "Tighter LTV, cleaner pricing",
        body: "Promoter holdings get 40% LTV (vs 50% for diversified). The lender prices for concentration risk + insider-trading-window restrictions on liquidation." },
    ],
  },
  numbers: {
    eyebrow: "Promoter LAS — what to expect",
    title: "Tighter LTV, but no friction on voting / dividends.",
    stats: [
      { v: "40%",      l: "LTV on promoter equity",  sub: "vs 50% on diversified portfolios" },
      { v: "9.50%+",   l: "Typical rate",             sub: "Slight premium for concentration risk" },
      { v: "7 days",   l: "SEBI disclosure deadline", sub: "Lender's compliance handles" },
      { v: "Voting",   l: "Rights retained",          sub: "Pledge is non-economic" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "Founder of a listed mid-cap pledges ₹15 Cr of own holdings for ₹6 Cr LAS.",
    narrative: "Founder of a listed mid-cap company (~₹2,000 Cr m-cap) with 12% personal stake worth ₹240 Cr. Wanted ₹6 Cr LAS for an acquisition opportunity in another sector. Routed to Mirae's specialist promoter-LAS desk; placed at 9.75% with full SEBI disclosure cycle managed end-to-end. Borrower retained all voting and dividend rights.",
    ledger: [
      { k: "Promoter holding (12% stake)",  v: "₹240,00,00,000 m-cap" },
      { k: "Pledged for LAS",                v: "₹15,00,00,000 (6.25% of holding)" },
      { k: "Eligible LAS (40% LTV)",         v: "₹6,00,00,000", highlight: true },
      { k: "Lender",                         v: "Mirae specialist desk", highlight: true },
      { k: "Rate",                           v: "9.75% floating" },
      { k: "Tenure",                          v: "3 years (renewable OD)" },
      { k: "SEBI Reg 31 disclosure",         v: "Filed by lender within 7 days" },
      { k: "Voting rights",                  v: "Retained by borrower", highlight: true },
      { k: "Dividend income",                v: "Retained by borrower", highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "Promoter-pledge LAS qualification",
    title: "Listed-company position + clean compliance trail.",
    qualifies: [
      "Promoter / promoter-group holding in a listed company on NSE / BSE",
      "Holding registered as 'promoter' in the company's shareholding pattern",
      "Total promoter holding (post-pledge) above any minimum-promoter-stake covenant in your debt instruments",
      "PAN linked to demat (mandatory)",
      "No SEBI / Sebi-action against the promoter or company",
      "Bank account in your name for OD credit",
    ],
    also: [
      "If your company has existing pledge covenants (banking facility, NCD), check headroom before adding LAS pledge",
      "Insider-trading windows restrict pledge timing — lender's compliance team will time the filing around the company's trading window",
      "Family-promoter pledges (mother / spouse / HUF in promoter group) routed similarly with consolidated SEBI disclosure",
    ],
  },
  faqs: [
    { q: "Will my pledge be public?",
      a: "Yes — promoter pledges trigger SEBI Reg 31 disclosure within 7 working days, which lands on the company's BSE/NSE filing. The disclosure shows the count and percentage of pledged shares, not the lender or use of funds." },
    { q: "Will it affect the share price?",
      a: "It depends on size + market context. Modest pledges (< 5% of promoter holding) typically don't move the price. Larger pledges (10%+) can be read as promoter stress. We size + time pledges to minimise market signal." },
    { q: "Can I keep voting rights?",
      a: "Yes — the pledge is purely a security interest, not a transfer of ownership. You retain all voting, AGM participation, dividend rights, and bonus / rights entitlement. Only on default does the lender step in." },
    { q: "What if my company's stock moves down — does the pledge auto-liquidate?",
      a: "Same cure-window logic as standard LAS — 5–7 working days to either pledge more securities or pay down the OD. Forced liquidation is a last resort and would be timed around the trading window." },
    { q: "Can I pledge ESOP shares as a founder?",
      a: "Once vested and credited to demat, yes — same treatment as bought shares. Unvested ESOPs aren't pledgeable until they vest." },
  ],
  cta: {
    headline: "Promoter holdings? We'll structure the LAS without disrupting your cap table.",
    body: "Send us your demat snapshot + existing-debt covenant overview. We'll size the LAS, time the SEBI disclosure window, and route to the right specialist desk — within one working day.",
    primary:   { label: "Talk to a promoter-LAS advisor", to: "/apply?family=LAS" },
    secondary: { label: "Read more on LAS",                to: "/las" },
  },
};

export default function LasPromoterPledgePageV2() {
  return <MarketingLandingLayout family="LAS" parent={PARENT} config={config} />;
}
