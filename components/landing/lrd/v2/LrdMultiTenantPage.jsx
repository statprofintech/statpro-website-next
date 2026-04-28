"use client";

import { Building, Receipt, Layers } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LRD page", to: "/lrd" };

const config = {
  hero: {
    eyebrow: "LRD · for multi-tenant complexes",
    title: "Multi-tenant building?",
    accent: "Weighted-average underwriting, single sanction.",
    lede: "Mall, mixed-use complex, IT park, retail high-street — multiple tenants on different lease terms. Our 6-lender LRD panel computes a weighted-average lessee credit + lock-in to size your loan, instead of pricing each tenant separately.",
    bullets: [
      "Weighted-avg rental + lessee-credit underwriting.",
      "Anchor + non-anchor tenant mix priced together.",
      "Floor-by-floor lessee NOC bundled at sanction.",
    ],
    stats: [
      { v: "₹50 Cr",  l: "Largest multi-tenant LRD" },
      { v: "85%",     l: "NPV discounting (weighted)" },
      { v: "Wgt-avg", l: "Lessee credit basis" },
      { v: "Floor-by-floor", l: "NOC handling" },
    ],
  },
  pillars: {
    eyebrow: "How multi-tenant LRD differs",
    title: "Three things specialist desks handle that vanilla LAP doesn't.",
    items: [
      { icon: Layers,  title: "Weighted lessee credit",
        body: "Anchor tenants drive sharper pricing; non-anchor tenants get discounted in the NPV computation. The mix matters — we model it before pitching." },
      { icon: Receipt, title: "Multi-lease deed handling",
        body: "Each tenant has a separate lease deed with different lock-in. Lender computes a weighted-avg residual lock-in to set tenor and DSRA buffer." },
      { icon: Building, title: "Vacancy buffer in DSRA",
        body: "Multi-tenant deals carry higher DSRA (4–6 months EMI) to absorb individual tenant exits without triggering covenant breach." },
    ],
  },
  numbers: {
    eyebrow: "Multi-tenant pricing logic",
    title: "What changes vs single-tenant LRD.",
    stats: [
      { v: "+25 bps", l: "Multi-tenant rate premium",  sub: "vs single-tenant on same gross rental" },
      { v: "4–6 mo",  l: "DSRA buffer",                 sub: "vs 3 months on single-tenant" },
      { v: "85%",     l: "NPV discounting still applies", sub: "Weighted by tenant credit + lock-in" },
      { v: "20 yrs",  l: "Max tenure",                   sub: "Capped at weighted residual + buffer" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹22 Cr LRD against a 5-tenant retail complex on EM Bypass.",
    narrative: "Family-owned 30,000 sq.ft. retail complex with 5 tenants — 1 anchor (national QSR chain, 12-yr lock-in) + 4 non-anchor (local shops, 3–5 yr lock-ins). Total rental ₹28 L/month. We routed to L&T Finance LRD; placed at 9.50% with 12-yr tenure + 5-month DSRA.",
    ledger: [
      { k: "Property: 30k sq.ft. retail complex", v: "" },
      { k: "Property valuation",                   v: "₹40,00,00,000" },
      { k: "Anchor tenant rental (QSR)",            v: "₹15,00,000/mo · 12-yr lock" },
      { k: "Non-anchor rental (4 tenants)",         v: "₹13,00,000/mo · avg 4-yr lock" },
      { k: "Weighted lock-in",                      v: "8 years" },
      { k: "Weighted NPV (9.5% discount)",          v: "₹26,00,00,000" },
      { k: "Eligible LRD (85% × 0.95 multi-tenant)", v: "₹22,00,00,000", highlight: true },
      { k: "Lender",                                v: "L&T Finance LRD", highlight: true },
      { k: "Rate",                                  v: "9.50% floating" },
      { k: "DSRA buffer",                           v: "5 months EMI" },
    ],
  },
  eligibility: {
    eyebrow: "Multi-tenant LRD qualification",
    title: "Lessee mix + lease terms drive eligibility.",
    qualifies: [
      "Multi-tenant property with at least one Tier-1 anchor tenant (or two Tier-2 anchors)",
      "Weighted-avg lock-in residual ≥ 36 months",
      "Total monthly rental ≥ ₹10 L (sweet spot)",
      "All tenants are registered companies (Pvt Ltd / Public Ltd / LLP)",
      "Last 12 months' rental credits visible in bank channel for each tenant",
      "Property has approved building plan / OC + clear title",
    ],
    also: [
      "Vacant floors excluded from NPV — but LAP against vacant portion + LRD against rented portion is a valid hybrid placement",
      "Anchor tenant's MNC parentage unlocks the HDFC/Kotak preferred-rate desk",
      "Tenant exits during tenure typically absorbed by DSRA + 90-day re-lease grace; only large concentrated exits trigger covenant",
    ],
  },
  faqs: [
    { q: "What's an 'anchor tenant' in LRD context?",
      a: "Tenant with significant share of total rent (typically 25%+) AND Tier-1 credit (MNC, listed company, large unlisted with audited financials). The anchor's credit halo lowers the blended risk premium and unlocks sharper pricing." },
    { q: "Can I include retail / proprietary tenants?",
      a: "Hard. Most LRD lenders accept only registered company lessees. Proprietorship/individual tenants are excluded from NPV. Mixed buildings: we'd LRD against the company-tenant portion and separately consider the non-company portion via LAP." },
    { q: "How is the DSRA sized?",
      a: "Multi-tenant DSRA = 4–6 months of total EMI, parked upfront in the escrow. Higher than single-tenant (3 months) to absorb individual tenant exits during tenure without triggering covenant breach." },
    { q: "Tenant churn is a concern — does the lender share that risk?",
      a: "DSRA absorbs short-term churn. For longer vacancy, lender allows a 90-day re-lease grace window before any acceleration. The vacancy itself doesn't trigger default, just an LTV recheck." },
    { q: "Can I do an LRD top-up as new tenants come in?",
      a: "Yes — incremental rental from new leases or contractual escalations supports a top-up. We re-pitch the file as the rental grows." },
  ],
  cta: {
    headline: "Multi-tenant building? Send the rent roll. We'll model the eligibility.",
    body: "Email us your tenant list, lease terms and rental amounts. We'll come back with a panel-comparison sheet within one working day, modelling the weighted lessee credit + DSRA buffer.",
    primary:   { label: "Get a multi-tenant LRD quote", to: "/apply?family=LRD&variant=Multi-lessee" },
    secondary: { label: "See main LRD page",             to: "/lrd" },
  },
};

export default function LrdMultiTenantPageV2() {
  return <MarketingLandingLayout family="LRD" parent={PARENT} config={config} />;
}
