"use client";

import { Receipt, Scale, Layers } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LRD page", to: "/lrd" };

const config = {
  hero: {
    eyebrow: "LRD vs LAP · the structure decision",
    title: "Rented commercial property?",
    accent: "LRD beats LAP — almost always.",
    lede: "If your property is rented, an LRD typically gets you a sharper rate, a longer tenure and a higher ticket than a generic LAP — because the lender underwrites the rental cash flow, not just the brick. 75 bps × ₹5 Cr × 15 years compounds to ₹56 L of avoidable interest. Here's exactly when one beats the other.",
    bullets: [
      "75 bps sharper rate on the same property — typical.",
      "15% higher ticket via 85% NPV vs 65% LTV.",
      "Up to 5 extra years of tenure (20 yr LRD vs 15 yr LAP).",
    ],
    stats: [
      { v: "75 bps", l: "LRD rate edge over LAP" },
      { v: "+15%",   l: "Higher ticket on LRD" },
      { v: "5 yrs",  l: "Extra tenure available" },
      { v: "85%",    l: "Discounting (vs 65% LAP LTV)" },
    ],
  },
  pillars: {
    eyebrow: "Why the structure matters more than the bank",
    title: "Three things every rented-property owner should know.",
    items: [
      { icon: Receipt, title: "Different underwriting basis",
        body: "LAP discounts property valuation. LRD discounts rental NPV. The lender prices risk differently → different rate." },
      { icon: Scale,   title: "Tenant credit halo on LRD",
        body: "Tier-1 tenant on long lease → lender treats the file as quasi-corporate. Sub-9.5% achievable. Vanilla LAP rarely clears 9.75%." },
      { icon: Layers,  title: "Tenure follows the lease",
        body: "LAP capped at 15 yrs. LRD anchored to lease residual — up to 20 yrs. More tenure = lower EMI = better cash-flow alignment." },
    ],
  },
  numbers: {
    eyebrow: "Side-by-side, on a typical file",
    title: "₹5 Cr commercial property with rented tenants.",
    stats: [
      { v: "75 bps",   l: "Sharper rate (LRD)",    sub: "9.40% vs 10.15% on a clean file" },
      { v: "₹56 L",    l: "Saved over 15 yrs",     sub: "Same ticket, sharper rate" },
      { v: "+15%",     l: "Higher ticket size",     sub: "85% discounting vs 65% LTV" },
      { v: "5 yrs",    l: "Extra tenure",           sub: "Up to 20 yrs LRD vs 15 yrs LAP" },
    ],
  },
  example: {
    eyebrow: "A worked comparison",
    title: "Same ₹8 Cr commercial property with ₹5.2 L/month rental — LRD vs LAP.",
    narrative: "Commercial floor in EM Bypass Kolkata, valued at ₹8 Cr, currently rented to two corporate tenants for ₹5.2 L/month combined, with 7-yr lock-ins remaining. Owner walked in for a standard LAP. We re-routed to LRD — sharper rate, longer tenure, larger ticket.",
    ledger: [
      { k: "Property value",            v: "₹8,00,00,000" },
      { k: "Monthly rental",            v: "₹5,20,000" },
      { k: "LAP ticket (65% LTV)",      v: "₹5,20,00,000" },
      { k: "LRD ticket (85% NPV)",      v: "₹6,00,00,000", highlight: true },
      { k: "LAP rate (typical)",        v: "10.15% floating" },
      { k: "LRD rate (placed)",         v: "9.40% floating", highlight: true },
      { k: "LAP tenure",                v: "15 years" },
      { k: "LRD tenure",                v: "18 years" },
      { k: "Saving over residual term", v: "≈ ₹56,00,000", highlight: true },
    ],
  },
  compare: {
    eyebrow: "When to pick which",
    title: "The clear LRD case vs the clear LAP case.",
    columns: ["LAP wins", "LRD wins"],
    rows: [
      { dim: "Property status",    a: "Vacant or owner-occupied",          b: "Rented commercial / industrial" },
      { dim: "Tenant",              a: "N/A",                               b: "Registered company (Pvt Ltd / Public / LLP)" },
      { dim: "Rental size",         a: "N/A",                               b: "Monthly rental ≥ ₹3 L (sweet spot ₹10 L+)" },
      { dim: "Lock-in residual",    a: "N/A",                               b: "Weighted residual ≥ 36 months" },
      { dim: "Rate",                 a: "9.0–11.0% floating",                b: "8.20–9.50% floating" },
      { dim: "Max LTV / discounting", a: "65% of property value",            b: "85% of NPV (capped at 50% prop value)" },
      { dim: "Max tenure",           a: "15 years",                          b: "20 years (anchored to lease residual)" },
      { dim: "Structure flexibility", a: "Term loan + Dropline OD available", b: "Term loan only (escrow-backed)" },
    ],
  },
  faqs: [
    { q: "Can I have both an LRD and an LAP on the same property?",
      a: "Yes — hybrid placement on the same asset is possible, with LRD against the rented portion and LAP against the vacant portion. Both lenders sit pari-passu on the MOD. We've structured several such files." },
    { q: "If my property is rented to a related party, does LRD still apply?",
      a: "Trickier. Lenders discount related-party rentals at 50–60% of receivable, or sometimes decline. We'd typically recommend LAP — unless the related-party tenant is itself a credit-worthy operating entity." },
    { q: "What if my rental is partially in cash?",
      a: "Not LRD-bankable. Structure requires 100% of rentals to flow through bank channel and reflect in property statements. We can help you formalise rentals over 6 months before approaching LRD lenders." },
    { q: "Can I switch from LAP to LRD later?",
      a: "Yes — and we do this regularly. Once your property starts generating qualifying rental, we re-pitch the file as an LRD with the same or different lender. Typical saving: 75–100 bps on the same ticket." },
    { q: "Does LRD allow a top-up like LAP does?",
      a: "Yes — most LRD lenders allow top-ups against incremental rental (new tenants, lease renewals at higher rent). Same single-sanction mechanism as LAP top-up." },
  ],
  cta: {
    headline: "Send the rental status. We'll route to the right structure on call one.",
    body: "Tell us if the property is rented, the monthly rent and tenant lock-in. We'll come back within one working day with the LRD-vs-LAP comparison for your file.",
    primary:   { label: "Compare on my file",  to: "/apply" },
    secondary: { label: "Read more on LRD",    to: "/lrd" },
  },
};

export default function LrdVsLapPageV2() {
  return <MarketingLandingLayout family="LRD" parent={PARENT} config={config} />;
}
