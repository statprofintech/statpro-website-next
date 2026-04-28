"use client";

import { Sparkles, Briefcase, BadgePercent } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Business Loan page", to: "/bl" };

const config = {
  hero: {
    eyebrow: "Business Loan · Women-led variant",
    title: "Women-led business?",
    accent: "50–100 bps lower rate, lower processing fee.",
    lede: "Most NBFCs offer concessional pricing for businesses majority-owned by women. Bajaj, HDFC, Tata Capital and Lendingkart all run dedicated Women-Led Business desks with sharper rate and lower processing fee than vanilla SME BL.",
    bullets: [
      "50–100 bps lower ROI vs vanilla unsecured BL.",
      "Reduced processing fee on most lenders.",
      "Same eligibility band — no tighter underwriting penalty.",
    ],
    stats: [
      { v: "−75 bps",  l: "Typical rate concession" },
      { v: "₹75 L",    l: "Max per-lender ticket" },
      { v: "0.5–1%",   l: "Reduced processing fee band" },
      { v: "5–7 days", l: "Disbursal TAT" },
    ],
  },
  pillars: {
    eyebrow: "Why Women-Led BL is sharper",
    title: "Three structural concessions across the panel.",
    items: [
      { icon: BadgePercent,  title: "Rate concession",
        body: "50–100 bps lower than vanilla SME BL across most NBFCs. Bajaj 50 bps, HDFC 75 bps, Tata 75 bps. Stacks with profession-tagged variants (Doctor / CA)." },
      { icon: Sparkles,      title: "Processing fee discount",
        body: "Most lenders waive 50% of the standard processing fee for women-led — typically 1.5% becomes 0.75–1%. Saves ~₹30–50 K on a ₹50 L sanction." },
      { icon: Briefcase,     title: "Same eligibility band",
        body: "No tighter underwriting penalty — same vintage, turnover, CIBIL thresholds. The concession is at pricing, not eligibility." },
    ],
  },
  numbers: {
    eyebrow: "Women-led pricing across panel",
    title: "Where the concession lands.",
    stats: [
      { v: "14.75%", l: "HDFC Women-Led BL",       sub: "vs vanilla 15.50%" },
      { v: "15.75%", l: "Bajaj Women-Led BL",      sub: "vs vanilla 16.50%" },
      { v: "16.00%", l: "Tata Capital Women-Led",  sub: "vs vanilla 17.00%" },
      { v: "17.00%", l: "Lendingkart Women-Led",   sub: "vs vanilla 18.00%" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹40 L Women-Led BL for a Kolkata-based handicrafts exporter.",
    narrative: "Family-run handicrafts export business, 5-yr vintage, ₹4 Cr annual turnover, 100% owned by woman promoter. Wanted ₹40 L for festive-season inventory ramp. Routed to HDFC Women-Led BL desk; placed at 14.75% × 4 yrs, processing fee 0.75% (vs standard 1.5%).",
    ledger: [
      { k: "Business: Handicrafts exporter", v: "" },
      { k: "Vintage / turnover",              v: "5 yrs / ₹4 Cr" },
      { k: "Owner",                           v: "100% woman" },
      { k: "Loan requested",                  v: "₹40,00,000" },
      { k: "Lender",                          v: "HDFC Women-Led BL", highlight: true },
      { k: "Rate",                            v: "14.75% × 4 yrs", highlight: true },
      { k: "Processing fee",                  v: "0.75% (₹30,000)" },
      { k: "Vanilla comparison",               v: "15.50% × 4 yrs + 1.5% PF" },
      { k: "Saving on PF",                    v: "₹30,000" },
      { k: "Saving on lifetime interest",     v: "≈ ₹65,000" },
      { k: "Total saving vs vanilla",         v: "≈ ₹95,000", highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "Women-Led BL qualification",
    title: "Ownership + business profile.",
    qualifies: [
      "Business 50%+ owned by woman / women (single owner or partnership)",
      "Business vintage 3+ years (continuous, GST-compliant)",
      "Annual turnover ≥ ₹40 L",
      "Owner CIBIL 700+ (banks) or 650+ (NBFCs)",
      "Last 12 months' bank statement with no bounces",
      "Profitable in last 2 ITRs (mild loss acceptable)",
    ],
    also: [
      "Joint ownership 50/50 between woman + male partner — depends on lender; some require 51%+ female",
      "Profession-tagged stacking — Women + Doctor + CA can compound concessions",
      "Government schemes (Stand-Up India, Mudra Mahila) often complement private BL stack",
    ],
  },
  faqs: [
    { q: "Does my business need to be 100% woman-owned?",
      a: "Most lenders require 50%+ female ownership, though a few (HDFC, Bajaj) prefer 51%+. Sole-proprietorship women-owned businesses always qualify. Partnership / Pvt Ltd: depends on shareholding pattern." },
    { q: "Can I stack with profession-tagged variants?",
      a: "Yes — a woman doctor / CA gets both Women-Led + profession-tagged concessions stacked. HDFC Doctor Loan + Women-Led can land below 11% on a clean profile." },
    { q: "What government schemes complement Women-Led BL?",
      a: "Stand-Up India (₹10 L–₹1 Cr collateral-free, partial credit guarantee). Mudra Mahila (up to ₹10 L). Private BL stack covers the over-₹10 L portion. We help structure the combined facility." },
    { q: "Will my husband's CIBIL affect the loan?",
      a: "Only if he's a co-applicant or has a guarantor role. If the loan is solely in your name with the business 100% owned by you, only your CIBIL is checked." },
    { q: "What about TReDS or Receivables Financing?",
      a: "TReDS (Trade Receivables Discounting System) is open to women-led MSMEs as well. We can route MSME-registered women-led businesses to TReDS in addition to BL." },
  ],
  cta: {
    headline: "Women-led business? Send your shareholding + GST.",
    body: "We'll route to the right Women-Led BL desk and stack with any profession-tagged or government-scheme concession you qualify for. One working day to a panel-comparison.",
    primary:   { label: "Get a Women-Led BL quote", to: "/apply?family=BL&variant=Women-led" },
    secondary: { label: "See main BL page",          to: "/bl" },
  },
};

export default function BlWomenLedPageV2() {
  return <MarketingLandingLayout family="BL" parent={PARENT} config={config} />;
}
