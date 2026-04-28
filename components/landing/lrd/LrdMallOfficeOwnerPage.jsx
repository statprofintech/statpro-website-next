"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LRD", to: "/lrd" };

export default function LrdMallOfficeOwnerPage() {
  return (
    <LandingPageLayout
      theme="lrd"
      tag="LRD · MALL · OFFICE"
      parent={PARENT}
      hero={{
        eyebrow: "Loan Against Rental · for asset owners",
        headline: "Unlock /20 years of rent/ as capital today.",
        lede: "Your mall, office tower or commercial complex generates a steady rental waterfall. We discount that future rental against an LRD — and place it at the sharpest rate from the 4–5 NBFCs that actually understand multi-tenant cash flow.",
        ctaPrimary: { label: "Discount my rental", to: "/apply" },
        ctaSecondary: { label: "See LRD main page", to: "/lrd" },
        badge: "01 / 03",
        stats: [
          { v: "85%", l: "Discounting on monthly rental" },
          { v: "20 yr", l: "Maximum tenure on LRD" },
          { v: "₹38 Cr", l: "Largest single LRD placed" },
          { v: "9.40%", l: "Sharpest panel-floor rate" },
        ],
      }}
      problem={{
        eyebrow: "The asset-rich, cash-thin paradox",
        title: "Your rental yield is 7%. Your next acquisition needs 9% capital.",
        body: "Owners of large commercial assets are perpetually capital-constrained — the building generates ₹3–5 Cr/year of rent, but every expansion needs capital up front. Selling the asset is a ₹100 Cr decision. An LRD lets you keep the asset and unlock the next 15–20 years of rental as today's lump sum, at a rate that's almost always cheaper than equity dilution.",
        marks: [
          "Banks underwrite real estate by valuation, not by cash flow — your ₹3 Cr rental matters less than your tenant's lease term.",
          "Most lenders cap LRD at 75% of monthly rental discounting — we negotiate to 85%.",
          "Tenant-mix risk (anchor-only, single-anchor, retail-heavy) gets penalised by generic underwriting — specialist NBFCs price it correctly.",
          "Lease lock-in periods are evaluated unevenly: a 5-year lock with a Tier-1 tenant is a different file than a 5-year lock with a startup.",
        ],
      }}
      solution={{
        eyebrow: "How we structure an LRD",
        title: "We discount the rental, escrow the inflow, and price the file off tenant credit.",
        steps: [
          { n: "I",   title: "Rental waterfall mapping",  body: "We map every tenant's lease — start, end, lock-in, escalation, security deposit. The credit memo is built around the rental cash flow, not the brick." },
          { n: "II",  title: "Tenant credit scoring",     body: "Anchor tenants (Tata, Reliance, public-sector) score sharper than mid-market. Tenant credit becomes a discounting variable, not an afterthought." },
          { n: "III", title: "Escrow & disbursal",        body: "Tenant rentals route through an escrow account; the lender debits EMI from escrow. The structure protects the lender — and lets us push for a sharper rate." },
        ],
      }}
      proof={{
        eyebrow: "What an LRD actually unlocks",
        title: "Numbers across our 2025 LRD placements.",
        stats: [
          { v: "85%",   l: "Discounting achieved",     sub: "Vs the typical 75% lender ceiling" },
          { v: "₹38 Cr",l: "Largest single ticket",   sub: "On a 14-tenant Salt Lake complex" },
          { v: "9.40%", l: "Sharpest panel rate",     sub: "On a clean anchor-tenant file" },
          { v: "20 yr", l: "Longest tenure placed",   sub: "Capped at residual lease + 3 yrs" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹3.2 Cr/year rental discounted to a ₹38 Cr LRD on a 14-tenant Salt Lake commercial complex.",
        narrative: "A commercial building in Salt Lake with 14 tenants, total monthly rent ~₹26.7 L, weighted-average residual lock-in of 6.8 years. Three banks declined on tenant-mix risk. We structured the rental waterfall, set up an escrow account, and placed the file with a large NBFC at 9.40% — 20-year tenure, 85% discounting on the gross rental.",
        ledger: [
          { k: "Total monthly rental",        v: "₹26,72,000" },
          { k: "Annual rental",                v: "₹3,20,64,000" },
          { k: "Weighted avg lock-in",         v: "6.8 years" },
          { k: "Discounting rate",             v: "85%", highlight: true },
          { k: "Loan ticket sanctioned",       v: "₹38,00,00,000", highlight: true },
          { k: "Final ROI",                    v: "9.40% floating" },
          { k: "Tenure",                       v: "20 years" },
          { k: "EMI from escrow",              v: "₹35,18,000" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why LRD beats a sale or fresh equity for a commercial asset owner.",
        items: [
          { title: "Keep the asset, unlock the cash",  body: "You retain 100% ownership and any future appreciation. The LRD only consumes the rental cash flow — not the underlying real estate." },
          { title: "Tenant-credit-priced rates",       body: "Anchor tenants drive a sharper rate than your bank would price you at — we get the lender to underwrite the tenant, not just you." },
          { title: "Long tenure, escrow-protected",    body: "Up to 20 years against the residual rental. EMI is debited from a tenant-rental escrow account — no monthly cash-flow management on your side." },
          { title: "Top-up as leases extend",          body: "When tenants renew or new tenants come in, the rental base expands — and we can negotiate a top-up against the additional rental in a single sanction." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What needs to be true for a clean LRD placement.",
        qualifies: [
          "Commercial asset owned in your name or in an SPV / partnership / company",
          "Minimum 6+ tenants OR a single anchor tenant of Tier-1 credit standing",
          "Weighted-average residual lock-in of 36+ months",
          "Lease agreements registered, with security deposits collected and visible",
          "GST-registered tenants with rental routed through bank channel",
        ],
        also: [
          "Files where 1–2 banks have already declined on tenant-mix risk",
          "Single-anchor properties (one tenant, public-sector or large corporate)",
          "Pre-LRD acquisitions — sanction-to-disbursal aligned with property purchase",
        ],
      }}
      process={[
        { stage: "Day 0–3",   title: "Tenant scoring",       body: "We map every lease and score the tenant credit profile. Anchor-tenant flags are surfaced upfront." },
        { stage: "Day 3–10",  title: "Lender match & pitch", body: "Pitch to 4–5 LRD-active NBFCs and HFCs. Sanction terms typically land within 7–10 days." },
        { stage: "Day 10–18", title: "Escrow setup",         body: "Tenant-rental escrow account is opened and tripartite agreement signed with the lender." },
        { stage: "Day 18–35", title: "Legal & disbursal",    body: "Title search, technical, MOD creation. Disbursal in lump sum or tranches per your preference." },
      ]}
      faqs={[
        { q: "What if a tenant terminates the lease mid-tenure?", a: "The escrow structure absorbs short-term tenant churn. We size the LRD off the weighted-average residual lock-in, with a buffer for 1–2 tenant exits. Most sanction letters allow 30–60 days to bring in a replacement before the lender flags an event." },
        { q: "Can I get a top-up if my rental base expands?", a: "Yes — most of our LRD lenders allow a top-up against incremental rental in a single sanction, without re-running the full underwriting cycle. We track lease renewals on your behalf and proactively flag top-up windows." },
        { q: "What happens at the end of the lease term?",     a: "Tenure is capped at residual lock-in + 3 years (typical) — the structure assumes lease renewal in the buffer years. If renewal doesn't happen, the lender may require a partial pre-payment or new lease commitment." },
        { q: "Is GST a concern on tenant rentals?",             a: "Tenants with GSTIN are mandatory for clean LRD underwriting — GST returns are part of the tenant-credit memo. Residential rentals can also be discounted but pricing differs (typically 50–100 bps higher)." },
        { q: "Can my SPV (special-purpose vehicle) own the asset?", a: "Yes — most LRD placements are on assets owned by an SPV or a partnership. The SPV's books and the underlying owner's KYC are both required. We handle the structure at intake." },
      ]}
      cta={{
        headline: "Send us your lease deeds. We'll size the LRD by Day 1.",
        body: "Share your monthly rent roll and the top three tenant lease agreements. We'll come back within one working day with the discounting rate, ticket size, ROI band and a 4-lender shortlist.",
        primary:   { label: "Discount my rental", to: "/apply" },
        secondary: { label: "Read more on LRD",   to: "/lrd" },
      }}
    />
  );
}
