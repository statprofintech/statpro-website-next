"use client";

import { Hospital, Hotel, Building } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LRD page", to: "/lrd" };

const config = {
  hero: {
    eyebrow: "LRD · for hospital + hotel landlords",
    title: "Hospital or hotel building leased out?",
    accent: "LRD against the operator's rental.",
    lede: "If you own a hospital or hotel building leased to an operating entity (often a related-party SPV), an LRD discounts the rental into capital today. Our specialist NBFC desks understand hospital/hotel cash-flow drivers — bed strength, ARR, RevPAR — not just brick value.",
    bullets: [
      "Hospitals + hotels routed to specialist NBFCs (Piramal, AB).",
      "Operator credit + property value both underwritten.",
      "Up to 75% of NPV (vs 85% for standard commercial).",
    ],
    stats: [
      { v: "75% NPV", l: "Discounting on niche-asset LRD" },
      { v: "₹20 Cr",  l: "Largest single hospital/hotel LRD" },
      { v: "15 yrs",  l: "Maximum tenure" },
      { v: "9.50%",   l: "Typical floor on niche LRD" },
    ],
  },
  pillars: {
    eyebrow: "Why specialist NBFCs handle these",
    title: "Hospital + hotel rentals don't fit vanilla LRD desks.",
    items: [
      { icon: Hospital, title: "Operator-credit underwriting",
        body: "Lender models rental sustainability via hospital occupancy / ARR / OPD volume — not just lease deed strength. Specialist NBFCs have in-house healthcare-finance teams." },
      { icon: Hotel,    title: "Hotel-specific cash flow",
        body: "RevPAR + booking pipeline + STR data feed into the underwriting. Hotels in tourist-distressed micro-markets get tighter LTV; established business-hotel circuits unlock sharper terms." },
      { icon: Building, title: "Related-party structures",
        body: "Owner-SPV → operator-SPV related-party leases bankable when both entities are formally registered + audited. We structure the underwriting so both sides clear." },
    ],
  },
  numbers: {
    eyebrow: "Niche LRD vs standard commercial LRD",
    title: "Tighter LTV, slightly higher rate, deeper diligence.",
    stats: [
      { v: "75% NPV",  l: "Niche discounting",          sub: "vs 85% on standard commercial" },
      { v: "+50 bps",  l: "Niche rate premium",          sub: "9.50% vs 9.00% panel-floor" },
      { v: "₹20 Cr",   l: "Max niche ticket",            sub: "Larger via multi-property packages" },
      { v: "30–45 d",  l: "Sanction TAT",                sub: "vs 21–30 d on standard commercial LRD" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹12 Cr LRD against a 80-bed multi-speciality hospital leased to operator-SPV.",
    narrative: "Family-owned hospital building (4 floors, 80 beds) in Howrah, leased to an operator-SPV (also owned by the same family) on a 12-yr lease at ₹6 L/month. Operator: 7-yr vintage, 78% occupancy, GMC + bio-medical waste licence current. We routed to Piramal Finance (specialist NBFC); placed at 9.75% with 12-yr tenure.",
    ledger: [
      { k: "Owner: family SPV; Operator: family SPV", v: "" },
      { k: "Property: 80-bed hospital, Howrah",       v: "" },
      { k: "Property valuation",                       v: "₹20,00,00,000" },
      { k: "Monthly rental (operator → owner)",        v: "₹6,00,000" },
      { k: "Operator vintage",                         v: "7 years" },
      { k: "Operator avg occupancy (12 mo)",           v: "78%" },
      { k: "NPV (9.75% × 12-yr lease residual)",       v: "₹16,80,00,000" },
      { k: "Eligible LRD (75% NPV)",                   v: "₹12,60,00,000", highlight: true },
      { k: "Lender",                                   v: "Piramal Finance", highlight: true },
      { k: "Rate",                                     v: "9.75% floating" },
      { k: "Sanction TAT",                             v: "38 days" },
    ],
  },
  eligibility: {
    eyebrow: "Hospital + hotel LRD qualification",
    title: "Property + operator + licences all matter.",
    qualifies: [
      "Hospital: ≥ 30 beds, 24+ months operating P&L, all licences current (GMC, bio-medical waste, fire NOC)",
      "Hotel: ≥ 25 keys, 18+ months booking trail, all licences (FSSAI, fire, liquor where applicable)",
      "Banquet hall: ≥ 200 pax capacity, registered bookings register, fire + sound NOCs",
      "Operator entity formally registered (Pvt Ltd / Public Ltd / LLP) — proprietorship operators don't qualify",
      "Lease deed registered with operator paying rent through bank channel for ≥ 12 months",
      "Owner CIBIL 700+ for banks, 650+ for NBFCs",
    ],
    also: [
      "Related-party operator (owner-family SPV → operator-family SPV) acceptable when both entities are formally registered + audited",
      "Multi-property packages (hospital + adjacent residential + small commercial) often unlock a sharper LTV",
      "Equipment hypothecation (MRI, dialysis machines) as additional security can shave 25–50 bps off the rate",
    ],
  },
  faqs: [
    { q: "Why niche LRD pricing is higher than standard commercial LRD?",
      a: "Specialist NBFCs price for the operator-credit risk + thinner exit market for hospital/hotel property. The +50 bps premium reflects this. On the flip side: banks decline these files entirely, so the 9.75% specialist rate is your actual market price." },
    { q: "What if the operator is a related-party SPV?",
      a: "Bankable when both entities (owner + operator) are formally registered + audited + have a registered lease deed. The lender will look through the related-party structure to underwrite the operating cash flow." },
    { q: "Can I get LRD against a hotel in a tourist-distressed market?",
      a: "Tighter LTV (60% NPV vs 75%) and a higher rate (10.5–11%) but yes. Our panel doesn't blanket-decline; we model the file on actual booking trail." },
    { q: "What licences must be current at sanction?",
      a: "Hospital: GMC + bio-medical waste + fire NOC + Clinical Establishments Act registration. Hotel: FSSAI + fire + state liquor licence (if bar) + tourism dept approval. We coordinate with the operator side to verify currency at sanction." },
    { q: "Can the lender take operating equipment as additional security?",
      a: "Yes — MRI, dialysis, kitchen equipment hypothecation is common on hospital + hotel LRD files. Gives the lender a second lien and unlocks sharper rate (25–50 bps off)." },
  ],
  cta: {
    headline: "Hospital or hotel building leased to your operator? We can place it.",
    body: "Send the property + operator details + last 24 months of operator P&L. We'll route to the specialist NBFC most likely to fund — typical sanction in 38–45 days.",
    primary:   { label: "Talk to a niche-LRD advisor", to: "/apply?family=LRD" },
    secondary: { label: "See main LRD page",            to: "/lrd" },
  },
};

export default function LrdHospitalHotelPageV2() {
  return <MarketingLandingLayout family="LRD" parent={PARENT} config={config} />;
}
