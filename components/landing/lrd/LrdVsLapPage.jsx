"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LRD", to: "/lrd" };

export default function LrdVsLapPage() {
  return (
    <LandingPageLayout
      theme="lrd"
      tag="LRD · vs · LAP"
      parent={PARENT}
      hero={{
        eyebrow: "Choosing the right structure",
        headline: "Rented commercial property? /LRD beats LAP — almost always./",
        lede: "If your property is rented out, an LRD typically gets you a sharper rate, a longer tenure and a higher ticket than a generic LAP — because the lender is underwriting the rental cash flow, not just the brick. Here's exactly when one beats the other.",
        ctaPrimary: { label: "Compare on my file", to: "/apply" },
        ctaSecondary: { label: "See LRD main page", to: "/lrd" },
        badge: "03 / 03",
        stats: [
          { v: "75 bps", l: "LRD rate edge over LAP" },
          { v: "5 yrs",  l: "Extra tenure on LRD" },
          { v: "+15%",   l: "Higher ticket on LRD" },
          { v: "85%",    l: "Discounting (vs 65% LTV)" },
        ],
      }}
      problem={{
        eyebrow: "Where promoters lose money",
        title: "Most rented assets get LAP'd by default — quietly leaving 75 bps on the table.",
        body: "Walking into your bank with a rented commercial property usually triggers an LAP form. Nobody asks if a rental-discounting structure (LRD) would price the file sharper. The default option is often 50–100 bps more expensive on a smaller ticket — every year, for the entire tenure.",
        marks: [
          "An LAP underwrites the property valuation. Your tenant's rental income doesn't count.",
          "An LRD underwrites the rental waterfall. Property valuation matters less; tenant credit matters more.",
          "Banks default to LAP because their LAP desks are larger — not because LAP is right for your file.",
          "The difference compounds: 75 bps × ₹5 Cr × 15 years ≈ ₹56 L of avoidable interest.",
        ],
      }}
      solution={{
        eyebrow: "How we choose between LRD and LAP",
        title: "A 3-question filter — built into our intake call.",
        steps: [
          { n: "I",   title: "Is the property rented?",      body: "If yes, and the tenant has been on a registered lease for 12+ months with rentals routed through bank channel — LRD is on the table." },
          { n: "II",  title: "Is the rental band-able?",     body: "Total monthly rent ≥ ₹3 L typically clears most LRD desks. Below that, LAP is usually the cleaner placement." },
          { n: "III", title: "Are the leases lock-in solid?", body: "Weighted-avg residual lock-in of 36+ months unlocks LRD pricing. Below that — LAP, with a re-evaluation when leases extend." },
        ],
      }}
      proof={{
        eyebrow: "What the structure actually changes",
        title: "On a typical ₹5 Cr commercial-property file with rented tenants.",
        stats: [
          { v: "75 bps", l: "Sharper rate (LRD)",           sub: "9.40% vs 10.15% on a clean file" },
          { v: "₹56 L",  l: "Saved over 15 years",          sub: "Same ticket, sharper rate" },
          { v: "+15%",   l: "Higher ticket size",            sub: "85% discounting vs 65% LTV" },
          { v: "5 yrs",  l: "Extra tenure available",        sub: "Up to 20 yrs LRD vs 15 yrs LAP" },
        ],
      }}
      example={{
        eyebrow: "A worked comparison",
        title: "Same ₹8 Cr commercial property with ₹5.2 L/month rental — LRD vs LAP.",
        narrative: "A commercial floor in EM Bypass Kolkata, valued at ₹8 Cr, currently rented to two corporate tenants for ₹5.2 L/month combined, with 7-year lock-ins remaining. The owner walked in for a standard LAP. We re-routed the file to an LRD structure with a specialist NBFC — sharper rate, longer tenure, larger ticket.",
        ledger: [
          { k: "Property value",            v: "₹8,00,00,000" },
          { k: "Monthly rental",            v: "₹5,20,000" },
          { k: "LAP ticket (65% LTV)",      v: "₹5,20,00,000" },
          { k: "LRD ticket (85% discount)", v: "₹6,00,00,000", highlight: true },
          { k: "LAP rate (typical)",        v: "10.15% floating" },
          { k: "LRD rate (placed)",         v: "9.40% floating", highlight: true },
          { k: "LAP tenure",                 v: "15 years" },
          { k: "LRD tenure",                 v: "18 years" },
          { k: "Saving over residual term", v: "≈ ₹56,00,000", highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why we re-route rented files into the LRD structure.",
        items: [
          { title: "Sharper rate",           body: "Tenant credit drives the pricing — anchor tenants get sub-9.5% on our panel. Generic LAP rarely clears 9.75%." },
          { title: "Longer tenure",          body: "LRD tenure is anchored to lease residuals — up to 20 years. LAP caps at 15 years." },
          { title: "Larger ticket",          body: "85% rental discounting beats 65% LTV on most rented commercial files. More capital, same property." },
          { title: "Cash-flow-aligned EMI",  body: "EMI is debited from the tenant-rental escrow — no monthly cash-flow management on your side. The structure pays itself." },
        ],
      }}
      eligibility={{
        eyebrow: "When to choose what",
        title: "The clear LRD case vs the clear LAP case.",
        qualifies: [
          "LRD wins: rented commercial, tenant on registered lease, monthly rent ≥ ₹3 L, weighted lock-in 36+ months",
          "LRD wins: multi-tenant complex with anchor tenant of Tier-1 credit",
          "LRD wins: long-tenure preference (15–20 years)",
          "LAP wins: vacant or owner-occupied property with no rental cash flow",
          "LAP wins: short-tenure / Dropline OD requirement (LRD doesn't structure as OD)",
        ],
        also: [
          "Hybrid placements possible — LRD against rented portion, LAP against vacant portion of the same asset",
          "BT from existing LAP into LRD on a property that started getting rented after the original sanction",
          "LRD top-up against incremental rental as new tenants come in",
        ],
      }}
      process={[
        { stage: "Day 0–1", title: "Structure call",     body: "30-min call: rental status, tenant mix, ticket need, tenure preference. We tell you LRD vs LAP at the end of the call." },
        { stage: "Day 1–7", title: "Parallel pitch",     body: "Right-fit lenders pitched in parallel — LRD desks for LRD files, LAP desks for LAP files. No mixed routing." },
        { stage: "Day 7–14", title: "Comparison sheet",  body: "If you're borderline, we get sanction letters from both LRD and LAP routes — one-page side-by-side before you sign." },
        { stage: "Day 14–35", title: "Legal & disbursal", body: "Whichever structure wins — escrow + MOD or just MOD — coordinated end-to-end." },
      ]}
      faqs={[
        { q: "Can I have both an LRD and an LAP on the same property?", a: "Yes — a hybrid placement on the same asset is possible, with LRD against the rented portion and LAP against the vacant portion. Both lenders sit pari-passu on the MOD. We've structured several such files." },
        { q: "If my property is rented to a related party, does LRD still apply?", a: "Trickier. Lenders discount related-party rentals at 50–60% of the receivable, or sometimes decline. We'd typically recommend LAP in that case — unless the related-party tenant is itself a credit-worthy operating entity." },
        { q: "What if my rental is partially in cash?",                  a: "Not LRD-bankable. The structure requires 100% of rentals to flow through the bank channel and be reflected in property statements. We can help you formalise rentals over 6 months before approaching LRD lenders." },
        { q: "Can I switch from LAP to LRD later?",                       a: "Yes — and we do this regularly. Once your property starts generating qualifying rental, we re-pitch the file as an LRD with the same or a different lender. Often gets you 75–100 bps lower on the same ticket." },
        { q: "Does LRD allow a top-up like LAP does?",                    a: "Yes — most LRD lenders allow top-ups against incremental rental (new tenants, lease renewals at higher rent). Same single-sanction mechanism as LAP." },
      ]}
      cta={{
        headline: "Send the rental status. We'll route to the right structure on call one.",
        body: "Tell us if the property is rented, the monthly rent and the tenant lock-in. We'll come back within one working day with the LRD-vs-LAP comparison for your file.",
        primary:   { label: "Compare on my file",  to: "/apply" },
        secondary: { label: "Read more on LRD",    to: "/lrd" },
      }}
    />
  );
}
