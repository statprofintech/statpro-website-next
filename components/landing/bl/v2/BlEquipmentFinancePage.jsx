"use client";

import { Briefcase, ShieldCheck, BadgePercent } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Business Loan page", to: "/bl" };

const config = {
  hero: {
    eyebrow: "Business Loan · Equipment finance variant",
    title: "Fund the equipment,",
    accent: "the equipment funds the loan.",
    lede: "Equipment-finance variant on our BL panel — the asset itself acts as collateral, so rates are sharper than vanilla unsecured BL. Used for medical equipment, manufacturing machinery, commercial vehicles, IT infrastructure, kitchen equipment for restaurants.",
    bullets: [
      "Asset-backed pricing — 200–400 bps below unsecured BL.",
      "Up to 100% of equipment cost (clean profiles).",
      "5–7 year tenure aligned to equipment useful life.",
    ],
    stats: [
      { v: "11–14%", l: "Equipment-finance rate range" },
      { v: "100%",   l: "Max LTV (clean files)" },
      { v: "7 yrs",  l: "Maximum tenure" },
      { v: "₹5 Cr",  l: "Largest single EF facility" },
    ],
  },
  pillars: {
    eyebrow: "Why equipment finance beats unsecured BL",
    title: "Three structural advantages from asset-backed pricing.",
    items: [
      { icon: ShieldCheck,  title: "Asset hypothecation",
        body: "Equipment itself acts as collateral. Lender prices the risk lower because they have a physical asset to fall back on — 200–400 bps below unsecured BL." },
      { icon: Briefcase,    title: "Up to 100% of cost",
        body: "Clean profiles can fund the entire equipment cost (vs 70–80% on standard equipment loans). Down-payment can be funded via term-loan top-up." },
      { icon: BadgePercent, title: "Tenure aligned to useful life",
        body: "5–7 year tenure typical, matched to the equipment's depreciation schedule. EMI lower than 3-yr unsecured BL → cash-flow positive on the equipment from year 1." },
    ],
  },
  numbers: {
    eyebrow: "Equipment finance vs unsecured BL",
    title: "Same ticket, very different rate.",
    stats: [
      { v: "11–14%", l: "Equipment finance rate",   sub: "Asset-backed" },
      { v: "15–18%", l: "Vanilla unsecured BL",      sub: "No collateral" },
      { v: "300 bps", l: "Typical spread",            sub: "Equipment finance below unsecured" },
      { v: "₹3.5 L",  l: "Annual interest saved",    sub: "On a ₹50 L equipment loan, 5 yrs" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹50 L CNC machine financing for a Kolkata SME engineering business.",
    narrative: "Engineering goods SME, 6-yr vintage, wanted to fund a new ₹50 L CNC machine. Vanilla unsecured BL quoted at 16.5%. Equipment-finance variant via Tata Capital placed at 13.0% with 5-yr tenure, machine hypothecated. Total interest saving over 5 years: ~₹4.5 L.",
    ledger: [
      { k: "Business: Engineering goods SME", v: "" },
      { k: "Equipment: CNC milling machine",   v: "₹50,00,000 cost" },
      { k: "Vanilla BL quote (Bajaj)",         v: "16.50% × 5 yrs" },
      { k: "Equipment finance quote (Tata)",    v: "13.00% × 5 yrs", highlight: true },
      { k: "Lender",                           v: "Tata Capital Equipment Finance", highlight: true },
      { k: "EMI (vanilla BL)",                  v: "₹1,23,000/mo" },
      { k: "EMI (equipment finance)",           v: "₹1,14,000/mo" },
      { k: "5-yr interest (vanilla BL)",        v: "₹23,80,000" },
      { k: "5-yr interest (equipment finance)", v: "₹18,40,000" },
      { k: "Saved over 5 years",                v: "≈ ₹5,40,000", highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "Equipment finance qualification",
    title: "Borrower + business + equipment all matter.",
    qualifies: [
      "Business vintage 3+ years (continuous, GST-compliant)",
      "Equipment from approved manufacturer (most major OEMs covered)",
      "New equipment or used equipment ≤ 5 yrs old",
      "Owner CIBIL 700+ (banks) or 650+ (NBFCs)",
      "Last 2 ITRs profitable (mild loss acceptable case-by-case)",
      "Equipment cost ≥ ₹10 L (sweet spot ₹25 L+)",
    ],
    also: [
      "Used / refurbished equipment from authorised reseller — bankable but with tighter LTV (70% vs 100%)",
      "Imported equipment — bankable; lender adds GST + customs to the financed amount, doesn't ask for separate working capital",
      "Multi-machine packages get sharper pricing than single-machine financing",
    ],
  },
  faqs: [
    { q: "Why is equipment finance cheaper than unsecured BL?",
      a: "Asset hypothecation gives the lender a physical asset to fall back on. Their loss-given-default is meaningfully lower, so they price the loan at 11–14% (asset-backed) vs 15–18% (unsecured)." },
    { q: "What if I want to upgrade the equipment mid-tenure?",
      a: "Most lenders allow equipment swap mid-tenure — old equipment unhypothecated against full / partial repayment, new equipment hypothecated for the residual + top-up. Bajaj and Tata are flexible here; banks more rigid." },
    { q: "Can I get equipment finance for used equipment?",
      a: "Yes — but with tighter LTV (70% vs 100%) and slightly higher rate (+50–100 bps). Used equipment must be from authorised reseller with valid invoice + warranty transfer documentation." },
    { q: "Is GST on equipment financed too?",
      a: "Yes — equipment cost + GST + customs (if imported) all financed under the same sanction. Lender treats the all-in cost as the asset value for hypothecation." },
    { q: "What about Section 32 depreciation benefit?",
      a: "You claim depreciation as the equipment owner; the loan structure doesn't change tax treatment. Talk to your CA on the specific depreciation schedule for your equipment class." },
  ],
  cta: {
    headline: "Buying equipment? Don't fund it with unsecured BL — use the equipment-finance route.",
    body: "Send the equipment quote (manufacturer + cost + delivery timeline) and your business profile. We'll bring 3–4 equipment-finance quotes within one working day.",
    primary:   { label: "Get an equipment-finance quote", to: "/apply?family=BL" },
    secondary: { label: "See main BL page",                 to: "/bl" },
  },
};

export default function BlEquipmentFinancePageV2() {
  return <MarketingLandingLayout family="BL" parent={PARENT} config={config} />;
}
