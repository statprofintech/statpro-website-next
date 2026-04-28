"use client";

import { Hospital, GraduationCap, Hotel, Building, Layers } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAP page", to: "/lap" };

const config = {
  hero: {
    eyebrow: "Special-purpose collateral · what banks decline",
    title: "Hospitals, schools, hotels —",
    accent: "the property our 19-partner panel still funds.",
    lede: "Banks decline 80% of special-purpose property — they're built around residential and standard commercial. Our 11-NBFC LAP panel includes specialists who underwrite hospitals, schools, hotels, banquet halls, cold storage and other niche assets at competitive rates.",
    bullets: [
      "5–6 NBFCs on our panel actively fund special-purpose property.",
      "LTV typically 50–55% on niche, 65% on standard.",
      "Underwriting based on operating cash flow + collateral value.",
    ],
    stats: [
      { v: "8+",   l: "Special-purpose collateral types funded" },
      { v: "5–6",  l: "NBFCs underwriting these on our panel" },
      { v: "55%",  l: "Typical LTV on niche assets" },
      { v: "₹10 Cr", l: "Largest single ticket placed" },
    ],
  },
  pillars: {
    eyebrow: "Why special-purpose needs specialist NBFCs",
    title: "Banks need a comparable-sales benchmark; specialists don't.",
    items: [
      { icon: Hospital,       title: "Hospitals",
        body: "Operating ICUs, day-care centres and 50–200-bed multi-speciality hospitals — funded against operating cash flow + collateral. Bed strength + occupancy drive ticket size." },
      { icon: GraduationCap,  title: "Schools and colleges",
        body: "K-12 schools, professional institutes, vocational training centres — eligibility off enrollment + fee receivables + collateral." },
      { icon: Hotel,          title: "Hotels and banquet halls",
        body: "Mid-segment hotels (50–150 keys), banquet halls, marriage gardens, conference centres — RevPAR + booking-pipeline based." },
    ],
  },
  numbers: {
    eyebrow: "Comparison vs standard LAP",
    title: "Niche collateral: tighter LTV, slightly higher rate, deeper diligence.",
    stats: [
      { v: "50–55%", l: "Niche LTV",            sub: "vs 60–65% on standard residential / commercial" },
      { v: "+50 bps", l: "Niche rate premium",   sub: "vs panel-floor on standard collateral" },
      { v: "₹10 Cr",  l: "Max niche ticket",     sub: "Larger placeable on multi-property packages" },
      { v: "30–45 d", l: "Typical sanction TAT", sub: "vs 14–21 d on standard — extra diligence" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹4 Cr against a 60-bed multi-speciality hospital in Howrah.",
    narrative: "Doctor-promoter built a 60-bed hospital in Howrah, occupancy averaging 72%, cleared GMC + bio-medical waste licences. Sought ₹4 Cr LAP for ICU expansion. Three banks declined — no comparable sales for hospital property. Routed to Piramal Finance (specialist NBFC); placed at 10.0% with 15-year tenure.",
    ledger: [
      { k: "Property: 60-bed hospital, Howrah", v: "" },
      { k: "Property valuation",                v: "₹8,00,00,000" },
      { k: "Bed strength",                       v: "60 (45 ICU)" },
      { k: "Avg occupancy (last 12 mo)",        v: "72%" },
      { k: "Approved LTV @ 50%",                v: "₹4,00,00,000", highlight: true },
      { k: "Lender",                             v: "Piramal Finance", highlight: true },
      { k: "Rate",                               v: "10.0% floating" },
      { k: "Tenure",                             v: "15 years" },
      { k: "Use of funds",                       v: "ICU + dialysis unit + radiology expansion" },
      { k: "Sanction TAT",                       v: "32 days end-to-end" },
    ],
  },
  eligibility: {
    eyebrow: "Special-purpose qualification rules",
    title: "Property + operating profile both matter — neither alone is enough.",
    qualifies: [
      "Hospital: 30+ beds, all licences current (GMC, bio-medical waste, fire NOC), 24+ months of operating P&L",
      "School: K-12 or recognised institute, board affiliation in place, 2+ years' enrollment trail",
      "Hotel: 25+ keys, all licences (FSSAI, fire, liquor where applicable), 18+ months of bookings data",
      "Banquet hall: 200+ pax capacity, registered bookings register, fire + sound NOCs",
      "Cold storage: licensed NHB / state cold-storage registration, capacity utilisation 60%+",
      "Industrial shed: clear factory licence, pollution NOC if needed, leased to a credit-worthy tenant or self-occupied",
    ],
    also: [
      "Single-asset SPV ownership is acceptable — we structure the lending to the SPV with the promoter as personal guarantor.",
      "Multi-property packages (hospital + adjacent residential) get sharper LTV than single-asset niche deals.",
      "Lease-and-leaseback structures are bankable when the operating entity and property-owning entity are related-party.",
    ],
  },
  faqs: [
    { q: "Why do banks decline these assets?",
      a: "Banks need a comparable-sales benchmark for valuation, and special-purpose property has thin or zero comparable sales in the locality. Specialist NBFCs build their own valuation models around operating cash flow + replacement cost + alternate-use value — so they can underwrite where banks can't." },
    { q: "What's the rate spread vs standard LAP?",
      a: "Typically 50–100 bps above panel-floor. On a clean hospital file, expect 9.50–10.50% vs 8.50–9.00% on a standard commercial file. The spread reflects niche-asset risk + thinner exit-market for the lender." },
    { q: "Can I do BT + Top-up on a special-purpose LAP?",
      a: "Yes — the same NBFC panel handles BT + Top-up on niche assets. Often the trigger is: original lender's facility is too small as the operation scales; we re-pitch with a higher ticket and a sharper rate to a different specialist." },
    { q: "How long does sanction take vs standard LAP?",
      a: "30–45 days end-to-end vs 14–21 for standard. Extra diligence covers: operating P&L review, licence verification, alternate-use valuation, sometimes a site visit by a domain expert (e.g., a healthcare consultant for hospital files)." },
    { q: "Can the lender take equipment as additional security?",
      a: "Some specialist NBFCs take a hypothecation on key operating equipment (e.g., MRI, dialysis machines for hospitals) on top of the property mortgage — gives them a second lien and unlocks a sharper rate." },
    { q: "What if the licences lapse mid-tenure?",
      a: "Sanction T&Cs typically require licence currency throughout — a lapse triggers a covenant breach. Most lenders give a 60-day cure window before any acceleration clause kicks in. We help clients set up calendar reminders so this never trips." },
  ],
  cta: {
    headline: "Bank declined your hospital / school / hotel? We probably won't.",
    body: "Send the property type, operating P&L (last 24 months) and licence list. We'll match your file with the specialist NBFC most likely to fund it — within one working day.",
    primary:   { label: "Talk to a special-collateral advisor", to: "/apply?family=LAP&variant=Fresh" },
    secondary: { label: "See main LAP page",                     to: "/lap" },
  },
};

export default function LapSpecialPurposePageV2() {
  return <MarketingLandingLayout family="LAP" parent={PARENT} config={config} />;
}
