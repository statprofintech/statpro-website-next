"use client";

import LandingPageLayout from "@/components/LandingPageLayout";

const PARENT = { label: "All LAP", to: "/lap" };

export default function LapSpecialPurposePage() {
  return (
    <LandingPageLayout
      theme="lap"
      tag="LAP · SPECIAL-PURPOSE"
      parent={PARENT}
      hero={{
        eyebrow: "Hospitals · Schools · Hotels · Industrial",
        headline: "Funded what /your bank just declined./",
        lede: "Banks cap LAP at 'standard' residential and commercial. Hospitals, schools, hotels, banquet halls, cold storage, industrial sheds — these get filed under 'special-purpose' and quietly returned. Our NBFC and HFC partners specialise in exactly these.",
        ctaPrimary: { label: "Talk to a specialist", to: "/apply" },
        ctaSecondary: { label: "See the panel", to: "/lenders" },
        badge: "02 / 03",
        stats: [
          { v: "55%",  l: "LTV on niche collateral" },
          { v: "₹50 Cr", l: "Largest single ticket" },
          { v: "11 d", l: "Sanction on a hospital file" },
          { v: "6+",   l: "NBFCs that fund this asset class" },
        ],
      }}
      problem={{
        eyebrow: "Why banks decline",
        title: "Special-purpose buildings spook standard underwriting.",
        body: "Banks underwrite property as collateral, not as an operating asset. A hospital is 80% medical equipment, 20% real estate — banks cannot price the equipment and refuse to underwrite the building alone. Same story for schools, hotels and cold storage.",
        marks: [
          "Resale-value uncertainty: who buys a 60-bed hospital structure if it stops operating?",
          "Title chains for school land are often part-trust, part-society, part-individual.",
          "Hotel and banquet collateral is priced as 'going concern' — banks don't underwrite EBITDA, only built-up area.",
          "Cold storage and warehouse files trigger industrial-zone permission queries banks rarely complete.",
        ],
      }}
      solution={{
        eyebrow: "How we route the file",
        title: "Specialist NBFCs underwrite the asset class — not just the brick.",
        steps: [
          { n: "I",   title: "Asset-class match", body: "We tag the collateral type at intake and route only to lenders with a live panel for that asset — not the generic LAP desk." },
          { n: "II",  title: "Operating-asset valuation", body: "Specialist NBFCs use both built-up valuation and going-concern indicators. Your file lands on a desk that already knows how to price it." },
          { n: "III", title: "Realistic LTV, faster TAT", body: "55% LTV on niche collateral, 65% on standard — disclosed upfront. No bank-style 'reduce by 20% at sanction'." },
        ],
      }}
      proof={{
        eyebrow: "What the panel actually funds",
        title: "Asset classes our specialist partners fund without flinching.",
        stats: [
          { v: "Hospitals",    l: "6 NBFCs", sub: "Up to 55% LTV on built-up + plant" },
          { v: "Schools",      l: "5 NBFCs", sub: "Society / trust ownership accepted" },
          { v: "Hotels",       l: "4 NBFCs", sub: "Going-concern valuation accepted" },
          { v: "Industrial",   l: "8 NBFCs", sub: "Sheds, warehouses, cold storage" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹18 Cr LAP on a 110-bed hospital — five banks declined, sanctioned in 11 working days.",
        narrative: "A growing hospital in Durgapur needed ₹18 Cr to fund a 40-bed expansion. Five banks declined on collateral type — they couldn't price the operating-equipment value. Our specialist NBFC partner underwrote it as an operating-asset file, sanctioned at 10.10% in 11 working days.",
        ledger: [
          { k: "Property value",         v: "₹38 Cr (built-up + equipment)" },
          { k: "Loan ticket",            v: "₹18 Cr", highlight: true },
          { k: "Effective LTV",          v: "47%" },
          { k: "Final ROI",              v: "10.10% floating", highlight: true },
          { k: "Tenure",                 v: "12 years" },
          { k: "Banks that declined",    v: "5" },
          { k: "NBFCs that competed",    v: "3" },
          { k: "Sanction TAT",           v: "11 working days", highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why a specialist NBFC beats a generic bank for this.",
        items: [
          { title: "Panel built for this asset class",  body: "Our 6 hospital-active and 5 school-active NBFCs have done hundreds of these files. Yours isn't a 'first case' on their desk." },
          { title: "Operating-asset underwriting",      body: "EBITDA, occupancy, footfall — credible operating signals reduce LTV haircuts banks would otherwise apply." },
          { title: "Realistic LTV, disclosed Day 1",    body: "55% on niche collateral, 65% on standard. We tell you the lender's actual ceiling at intake — not after a wasted week." },
          { title: "Faster than a bank's 90-day cycle", body: "Specialist desks run lighter committee processes. Most files close in 14–28 days versus 60–90 at a bank." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What needs to be true before we can route the file.",
        qualifies: [
          "Property in your name or in the operating entity (society, trust, partnership, company)",
          "Operating asset with at least 24 months of audited operations",
          "Approved building plan, OC and use-permission certificate",
          "Title clear of partition, litigation or 3-party encumbrance",
          "Promoter / borrower CIBIL 700+ (banks) or 650+ (NBFC route)",
        ],
        also: [
          "Pre-OC files where OC is in process — handled with conditional sanction",
          "Society / trust collateral with strong governance documentation",
          "Files where 1–2 banks have already declined on collateral type",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "Asset-class scoring",   body: "We tag the collateral, score against each NBFC's active appetite, and shortlist the 3–4 desks most likely to sanction." },
        { stage: "Day 2–7",   title: "Operating-asset memo",  body: "We write the credit memo around your operating story — not just the brick — so the underwriter sees what the building actually does." },
        { stage: "Day 7–14",  title: "Legal & technical",     body: "Specialist valuer who knows the asset class is appointed by the lender. Title search runs in parallel." },
        { stage: "Day 14–28", title: "Sanction & disbursal",  body: "Sanction lands. Stamp duty, MOD and disbursal in the next 7–10 days." },
      ]}
      faqs={[
        { q: "Does my property need to be currently operating?", a: "Strongly preferred — at least 24 months of clean operations. We can also work with under-construction expansions if anchored to an operating unit on the same land." },
        { q: "What's the realistic LTV I should expect?", a: "55% on hospitals, schools, hotels and banquet halls. Up to 65% on standard commercial and clean residential. Industrial sheds and warehouses sit at 60%. We disclose the lender's specific ceiling at intake." },
        { q: "What if my title is part-society, part-individual?", a: "Handled regularly. We work with title chains involving trusts, societies and partnerships — provided the chain documents and current governance approvals are in place. We'll flag what's missing at intake." },
        { q: "Are the rates higher than standard LAP?",         a: "Modestly — typically 50–150 bps higher than a clean residential LAP, reflecting the asset risk. Still meaningfully cheaper than equipment-finance or business-loan alternatives that would otherwise fund a similar ticket." },
        { q: "How long is sanction-to-disbursal?",              a: "Most files close in 14–28 working days from a clean intake. The ₹18 Cr hospital file closed in 11 — fast end of the range with paperwork ready on Day 1." },
      ]}
      cta={{
        headline: "Send us the property type. We'll tell you which NBFC funds it — by Day 1.",
        body: "Specialist desks, real LTV ceilings, no wasted bank-cycle. Share the asset class and the ticket; we'll come back with a 4-lender shortlist and an indicative pricing band the next working day.",
        primary:   { label: "Talk to a specialist",  to: "/apply" },
        secondary: { label: "See the lender panel",  to: "/lenders" },
      }}
    />
  );
}
