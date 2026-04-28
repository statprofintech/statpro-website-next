"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Business Loan", to: "/bl" };

export default function BlEquipmentFinancePage() {
  return (
    <LandingPageLayout
      theme="bl"
      tag="BL · EQUIPMENT FINANCE"
      parent={PARENT}
      hero={{
        eyebrow: "Business Loan · for plant, machinery, vehicles",
        headline: "The /machine itself/ is the collateral.",
        lede: "Equipment finance — also called asset-backed finance — funds 80–90% of your machinery, plant or commercial-vehicle purchase, with the asset itself as collateral. No property mortgage, sharper rates than unsecured BL, sanctioned in 7–14 days.",
        ctaPrimary: { label: "Get an equipment-finance quote", to: "/apply?family=BL" },
        ctaSecondary: { label: "See BL main page", to: "/bl" },
        badge: "03 / 03",
        stats: [
          { v: "10.50%", l: "Sharpest panel-floor rate" },
          { v: "90%",    l: "LTV on new equipment" },
          { v: "7 yrs",  l: "Maximum tenure" },
          { v: "14 d",   l: "Median sanction-to-disbursal" },
        ],
      }}
      problem={{
        eyebrow: "Why generic BL is the wrong tool",
        title: "An unsecured BL at 13% to fund equipment is leaving 250 bps on the table.",
        body: "When you're buying a piece of machinery, the asset itself is collateralisable — the lender can hypothecate the machine and recover its value if needed. That's what equipment finance is built for: lower rate, longer tenure, higher LTV than a generic unsecured BL — without touching your property.",
        marks: [
          "Unsecured BL caps at ₹75 L per lender; equipment finance scales to ₹10 Cr+ on a single asset.",
          "Equipment finance is sized off the asset value (not your turnover) — useful when equipment cost > eligibility band.",
          "Tenure is matched to asset useful life — typically 5–7 years vs 3–5 years on unsecured BL.",
          "Most banks have weak equipment-finance desks; specialist NBFCs (LTF, Cholamandalam, Tata Capital) lead this asset class.",
        ],
      }}
      solution={{
        eyebrow: "How equipment finance works",
        title: "Asset-backed underwriting at NBFCs that price the equipment correctly.",
        steps: [
          { n: "I",   title: "Asset valuation",       body: "We confirm the equipment make, model, OEM and price. The lender's panel valuer (or the OEM invoice) fixes the asset value." },
          { n: "II",  title: "LTV-based sanction",    body: "80% LTV on new equipment, 60–70% on refurbished. Sanction sized off asset value with a margin from your contribution." },
          { n: "III", title: "Hypothecation + disbursal", body: "Asset is hypothecated to the lender (registered with the RTO for vehicles, with the lender's panel for machinery). Disbursal direct to the OEM / dealer." },
        ],
      }}
      proof={{
        eyebrow: "What equipment-finance files actually land at",
        title: "Across our 2025 equipment-finance placements.",
        stats: [
          { v: "10.50%", l: "Sharpest rate placed",         sub: "Specialist NBFC, 5-yr vintage borrower" },
          { v: "90%",    l: "Max LTV achieved",              sub: "On new equipment, strong borrower" },
          { v: "₹4 Cr",  l: "Largest single-asset placement",sub: "CNC machine for an OEM supplier" },
          { v: "14 d",   l: "Median sanction-to-disbursal",  sub: "On clean files with OEM invoice" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹2.4 Cr equipment-finance loan on a CNC machine for a Pune auto-parts manufacturer.",
        narrative: "An auto-parts manufacturer in Pune buying a ₹3 Cr CNC machine to expand precision capacity. His bank quoted an unsecured ₹50 L at 13.5% and asked for property collateral on the rest. We routed the file as equipment finance to a specialist NBFC — 80% LTV on the asset, 11.25% rate, 6-year tenure, no property pledge.",
        ledger: [
          { k: "Equipment value",         v: "₹3,00,00,000" },
          { k: "Loan ticket (80% LTV)",   v: "₹2,40,00,000", highlight: true },
          { k: "Promoter contribution",   v: "₹60,00,000" },
          { k: "Bank's first quote",      v: "₹50 L unsecured + collateral" },
          { k: "Final placed rate",       v: "11.25% floating", highlight: true },
          { k: "Tenure",                  v: "6 years" },
          { k: "EMI",                     v: "₹4,67,800" },
          { k: "Collateral",              v: "Hypothecation on the machine only" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why equipment finance beats generic BL for asset purchases.",
        items: [
          { title: "Sharper rate than unsecured BL", body: "10.50% on equipment finance vs 12.5% on unsecured BL — the asset hypothecation reduces the lender's risk and the price reflects it." },
          { title: "Higher LTV, lower contribution", body: "80–90% LTV on new equipment means you put in 10–20% rather than 30–40% of project cost." },
          { title: "Tenure matched to asset life",   body: "5–7 year EMI matched to the equipment's useful life — payments come from the cash flow the asset generates." },
          { title: "No property mortgage",           body: "Your property stays free. Hypothecation is on the machine itself; default recovery is via asset re-possession." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What equipment-finance files actually need.",
        qualifies: [
          "GST-registered business with 24+ months of consistent return filings",
          "Annual turnover ₹2 Cr+ (sweet spot ₹5–50 Cr)",
          "OEM-direct or authorised-dealer purchase with clear invoice and asset specs",
          "Promoter / partner / director CIBIL 700+",
          "Last 2 years' ITRs filed; business profitable in at least one of them",
        ],
        also: [
          "Refurbished equipment (60–70% LTV, lender-specific approved-list)",
          "Imported equipment with proper L/C and customs documentation",
          "Multi-asset packages (e.g., entire production line) on a single sanction",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "Asset + cash-flow scoping", body: "Discovery + OEM invoice + GST + bank statement. Indicative LTV and pricing in the same call." },
        { stage: "Day 2–7",   title: "Specialist NBFC pitch",      body: "Pitch to 3–4 NBFCs with active appetite for your equipment class. Sanction terms within the week." },
        { stage: "Day 7–12",  title: "Documentation + valuation",   body: "KYC, OEM invoice verification, lender's valuer (if used). Hypothecation documentation prepared." },
        { stage: "Day 12–14", title: "Disbursal to OEM",            body: "Disbursal direct to the OEM / dealer against invoice. Asset delivered with hypothecation flag." },
      ]}
      faqs={[
        { q: "What kinds of equipment qualify?",                  a: "Plant and machinery (CNC, presses, printing), commercial vehicles, construction equipment, medical equipment (MRI, CT, dialysis), IT hardware (servers, storage), F&B equipment (industrial kitchens, refrigeration). Each NBFC has its own approved-list." },
        { q: "Is the rate fixed or floating?",                     a: "Most equipment-finance loans are floating-rate, indexed to the lender's RLLR or MCLR. Some NBFCs offer fixed-rate variants at a 50–100 bps premium for certainty." },
        { q: "Can I include installation costs?",                  a: "Yes — most lenders include installation, commissioning, freight and insurance in the sanction (typically 5–10% above the bare asset cost)." },
        { q: "What happens if the asset depreciates faster than EMI repayment?", a: "Standard structure — the lender prices the LTV against the asset's expected depreciation curve. If you default, the lender recovers via asset re-possession; you don't owe more than the outstanding loan minus recovery." },
        { q: "Can I refinance an existing equipment loan to a sharper rate?", a: "Yes — equipment-finance balance transfers are routine. Most lenders accept hypothecation transfer with a fresh sanction. Foreclosure penalty on the old loan applies (typically 2–4%)." },
      ]}
      cta={{
        headline: "Send the OEM invoice + your GST. We'll quote in 24 hours.",
        body: "Equipment OEM invoice (or quote) + last 24 months of GSTR-3B + last 12 months of business bank statement. We'll come back within one working day with LTV, ROI, tenure and a 4-NBFC shortlist.",
        primary:   { label: "Get an equipment-finance quote", to: "/apply?family=BL" },
        secondary: { label: "Read more on BL",                 to: "/bl" },
      }}
    />
  );
}
