"use client";

import { Warehouse, Layers, Snowflake, Building } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LAP page", to: "/lap" };

const config = {
  hero: {
    eyebrow: "Industrial property · for manufacturers + distributors",
    title: "Loan Against Industrial Property —",
    accent: "the SME-NBFC desks that actually understand factories.",
    lede: "Industrial sheds, factories, warehouses and cold storage rarely fit the standard LAP form. Our SME-NBFC panel — Protium, Profectus, Cholamandalam, L&T Finance — has dedicated industrial-property desks that price the asset off operating use, not just brick-and-mortar value.",
    bullets: [
      "Operating-cash-flow underwriting (not just collateral valuation).",
      "Tier-2 / tier-3 industrial belts on the panel — not just metros.",
      "Sheds + machinery package financing available alongside.",
    ],
    stats: [
      { v: "55–60%", l: "LTV on industrial sheds" },
      { v: "5",      l: "Industrial-active NBFCs on panel" },
      { v: "₹15 Cr", l: "Largest single industrial LAP" },
      { v: "Tier-3", l: "Cities served (manufacturing belts)" },
    ],
  },
  pillars: {
    eyebrow: "Why industrial files need a specialist desk",
    title: "Three blockers that ordinary LAP underwriters trip on.",
    items: [
      { icon: Warehouse, title: "Niche valuation",
        body: "Sheds + warehouses don't have residential-style comparable sales. Our panel uses replacement cost + alternate use + operating revenue to triangulate fair value." },
      { icon: Layers,    title: "Pollution + factory licences",
        body: "Lender legal teams flag missing pollution NOC or factory-act licence as deal-breakers. Our SME desks have in-house compliance support to clear most issues at sanction." },
      { icon: Snowflake, title: "Cold storage / processing units",
        body: "NHB-licensed cold storage, agri-processing, dairy plants — funded against capacity utilisation + cold-chain certifications. Specialised, not boilerplate." },
    ],
  },
  numbers: {
    eyebrow: "Industrial vs standard commercial LAP",
    title: "Tighter LTV, comparable rates — same underlying property logic.",
    stats: [
      { v: "55–60%", l: "Industrial LTV",          sub: "vs 65% on standard commercial" },
      { v: "+25 bps", l: "Industrial rate premium", sub: "vs panel-floor on standard" },
      { v: "₹15 Cr",  l: "Max industrial ticket",   sub: "Larger via multi-property packages" },
      { v: "20 yrs",  l: "Maximum tenure",          sub: "Same as standard LAP" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹3.5 Cr against a ₹6 Cr industrial shed in Howrah jute belt.",
    narrative: "Engineering-goods manufacturer, family-owned, owned a 12,000 sq.ft. industrial shed leased to their own operating entity. Two banks declined — no comparable industrial sales nearby. We routed to Profectus Capital (specialist SME NBFC); placed at 10.25% with 12-year tenure for a working-capital cum capex package.",
    ledger: [
      { k: "Property: 12,000 sq.ft. industrial shed", v: "" },
      { k: "Location",                                v: "Liluah, Howrah" },
      { k: "Property valuation (replacement + use)",  v: "₹6,00,00,000" },
      { k: "Approved LTV @ 58%",                      v: "₹3,48,00,000", highlight: true },
      { k: "Lender",                                  v: "Profectus Capital", highlight: true },
      { k: "Rate",                                    v: "10.25% floating" },
      { k: "Tenure",                                  v: "12 years" },
      { k: "Use of funds",                            v: "Working capital + 2 new CNCs" },
      { k: "Sanction TAT",                            v: "28 days" },
    ],
  },
  eligibility: {
    eyebrow: "What clears industrial-LAP underwriting",
    title: "Property + licences + operating profile.",
    qualifies: [
      "Industrial shed / factory with clear factory-act licence",
      "Pollution NOC current (or path-to-clearance documented)",
      "Property ownership ≥ 3 years (to validate operating use)",
      "Operating entity (self-occupied or related-party leased) profitable in last 2 ITRs",
      "Property location in a recognised industrial belt or LIA / SIDC notified zone",
      "Borrower CIBIL 700+ (banks decline anyway), 650+ on SME-NBFC panel",
    ],
    also: [
      "Multi-property package (industrial shed + adjacent residential + small commercial) gets a sharper LTV and a single-MOD structure.",
      "Plant + machinery hypothecation as additional security can shave 25–50 bps off the ROI.",
      "If your property is leased to a third-party operating entity, LRD + LAP hybrid often beats vanilla LAP on rate.",
    ],
  },
  faqs: [
    { q: "Why do banks decline industrial sheds?",
      a: "Banks need a comparable-sales benchmark, and industrial sheds in tier-2/3 belts have thin or zero comps. SME-NBFCs (Protium, Profectus, Cholamandalam) build their own valuation models around replacement cost + alternate use + operating revenue, so they can underwrite where banks decline." },
    { q: "What's the rate vs standard LAP?",
      a: "Typically 25–75 bps higher. Panel-floor on standard residential LAP is 8.55%; clean industrial files clear at 9.00–10.25% on our SME-NBFC desks. The spread reflects niche-asset risk + thinner exit market." },
    { q: "Can I package machinery + property in one loan?",
      a: "Yes — the SME-NBFC panel offers combo facilities: term loan against shed + machinery hypothecation as additional security. Often gets you 25 bps off the ROI vs property-only." },
    { q: "What if my pollution NOC is pending renewal?",
      a: "Lenders accept files with a renewal in process if you can show the application receipt + a likely-clearance window of 60 days. Sanction can proceed; disbursal waits for the NOC. We coordinate with the pollution control board on your behalf." },
    { q: "Tier-3 industrial belt — is that an issue?",
      a: "Banks yes, our SME-NBFC panel no. Profectus and Protium both actively underwrite tier-2 and tier-3 industrial property. Cholamandalam goes deepest into rural and semi-urban industrial." },
    { q: "Can I get BT + Top-up on industrial property?",
      a: "Yes — same panel handles BT and BT+Top-up on industrial files. Often the trigger is: existing facility is from a regional NBFC at 12%+; we re-pitch with a national SME desk at 10.25–10.75% and stack a top-up for capex." },
  ],
  cta: {
    headline: "Industrial shed declined by your bank? Let's re-pitch it.",
    body: "Send the shed details, factory-act licence and last 24 months of operating P&L. We'll route to the SME-NBFC most likely to fund — typical sanction in 28–35 days.",
    primary:   { label: "Talk to an industrial-LAP advisor", to: "/apply?family=LAP&variant=Fresh" },
    secondary: { label: "See main LAP page",                  to: "/lap" },
  },
};

export default function LapIndustrialPropertyPageV2() {
  return <MarketingLandingLayout family="LAP" parent={PARENT} config={config} />;
}
