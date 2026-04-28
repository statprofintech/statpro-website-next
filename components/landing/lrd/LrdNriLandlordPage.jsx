"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LRD", to: "/lrd" };

export default function LrdNriLandlordPage() {
  return (
    <LandingPageLayout
      theme="lrd"
      tag="LRD · NRI LANDLORD"
      parent={PARENT}
      hero={{
        eyebrow: "For NRIs with rented property in India",
        headline: "Your /Indian rental yield/ is funding your bank — let it fund you.",
        lede: "If you're an NRI with a rented commercial property in India, an LRD lets you discount up to 20 years of rental into a lump sum today — repatriable through the proper FEMA-compliant channel, with the EMI auto-debited from the tenant escrow.",
        ctaPrimary: { label: "Discount my Indian rental", to: "/apply" },
        ctaSecondary: { label: "See LRD main page", to: "/lrd" },
        badge: "04 / 04",
        stats: [
          { v: "85%",   l: "Discounting on rental" },
          { v: "20 yr", l: "Maximum tenure on LRD" },
          { v: "FEMA",  l: "Compliant repatriation route" },
          { v: "9.40%", l: "Sharpest panel-floor rate" },
        ],
      }}
      problem={{
        eyebrow: "The NRI-landlord gap",
        title: "The asset is in India. The capital need is offshore.",
        body: "Your tenant pays rent into your NRO account every month. Repatriating that rental abroad is rule-bound and slow. Meanwhile, your offshore capital needs — a property purchase, a child's education, a business injection — sit waiting. An LRD unlocks the capital today, in a single sanction, through a FEMA-compliant channel.",
        marks: [
          "Rental income to NRO is fully repatriable — but capped at USD 1 M / year, not lump sum.",
          "Selling the asset is FEMA-heavy and forfeits a stable yield curve.",
          "Most banks don't underwrite NRI-landlord LRD because of the FEMA paperwork — the file gets quietly returned.",
          "We work with the 4 NBFC and HFC partners who actively place NRI-landlord LRDs end-to-end.",
        ],
      }}
      solution={{
        eyebrow: "How an NRI-landlord LRD works",
        title: "Tenant-rental escrow in India, EMI debited locally, principal repatriable through the right channel.",
        steps: [
          { n: "I",   title: "Local-channel disbursal",   body: "Disbursal lands in your NRE / NRO account in India. Repatriation done through an authorised dealer bank under the Liberalised Remittance Scheme or the rental-repatriation channel." },
          { n: "II",  title: "Tenant escrow operations",  body: "Tenants continue paying rent into the property escrow. EMI is debited from the escrow — you don't manage monthly cash flow from offshore." },
          { n: "III", title: "FEMA-clean documentation",   body: "All paperwork — lease deeds, escrow agreement, repatriation declarations — drafted to be cleanly compliant with FEMA and DTAA provisions." },
        ],
      }}
      proof={{
        eyebrow: "Across our NRI-landlord book",
        title: "What this asset class typically lands at on our panel.",
        stats: [
          { v: "85%",   l: "Discounting achieved",     sub: "On clean lease structures" },
          { v: "9.40%", l: "Sharpest rate placed",      sub: "Anchor-tenant complex, NRI owner" },
          { v: "USD 1M",l: "Annual repatriation cap",  sub: "Per LRS · standard channel" },
          { v: "20 yr", l: "Tenure available",          sub: "Aligned to lease residual + 3 yrs" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹12 Cr LRD on a Bengaluru office property — owner in Singapore, EMI from tenant escrow.",
        narrative: "An NRI based in Singapore owns a commercial office in Bengaluru, leased to an IT services company at ₹9 L/month with 7-year lock-in. We placed an LRD with an HFC partner at 9.65%, disbursed into the NRO account, repatriated USD 800K under the LRS in tranches over 12 months for an offshore property purchase. EMI auto-debited from the tenant escrow — owner does no monthly admin from Singapore.",
        ledger: [
          { k: "Monthly rental",            v: "₹9,00,000" },
          { k: "Lock-in",                    v: "7 years" },
          { k: "Discounting",                v: "85%", highlight: true },
          { k: "Loan ticket sanctioned",    v: "₹12,00,00,000", highlight: true },
          { k: "Final ROI",                  v: "9.65% floating" },
          { k: "Tenure",                     v: "15 years" },
          { k: "Disbursal account",          v: "NRO" },
          { k: "Repatriation channel",       v: "LRS · USD 800K", highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why this beats every other NRI-asset capital strategy.",
        items: [
          { title: "Asset stays, capital travels",   body: "You retain the property and any future appreciation. The LRD only consumes the rental cash flow — not the underlying real estate." },
          { title: "FEMA-clean, paperwork-handled",  body: "We handle every FEMA declaration, repatriation form and bank-channel coordination. You sign — we run the rest." },
          { title: "Tenant escrow = zero admin",     body: "EMI auto-debited from the rental escrow. You don't manage Indian cash flow from abroad. The structure runs itself." },
          { title: "Sharper than NRE-deposit-backed", body: "LRD rate (9–10%) is meaningfully cheaper than financing the same need through liquidating NRE FDs and paying break charges." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What we need from an NRI landlord at intake.",
        qualifies: [
          "NRI / OCI / PIO with valid passport and Indian property in your name (single or joint)",
          "Property currently rented to a credit-worthy tenant (Tier-1 corporate or 6+ tenants)",
          "Active NRE / NRO bank account in India for disbursal",
          "Lease deed registered, security deposit collected, rental routed through bank channel",
          "PAN, OCI/PIO card / passport copy for KYC; address proof from country of residence",
        ],
        also: [
          "Joint-property files (NRI + Indian-resident co-owner) — we handle the dual-KYC paperwork",
          "Files where the tenant is also an NRI / multinational entity",
          "First-time NRI-landlord LRDs (we walk you through the FEMA process end-to-end)",
        ],
      }}
      process={[
        { stage: "Day 0–3",   title: "FEMA + KYC scoping",    body: "We confirm your NRI status, property documents and FEMA-compliance posture. Indicative pricing in the same call." },
        { stage: "Day 3–10",  title: "Lender pitch",          body: "Pitch to the 4 NBFCs / HFCs that actively place NRI-landlord LRDs. Sanction terms within 7–10 days." },
        { stage: "Day 10–20", title: "Escrow + repatriation",  body: "Tenant escrow set up. Repatriation channel and forms aligned with your AD bank." },
        { stage: "Day 20–35", title: "Disbursal & remittance", body: "Disbursal to NRO/NRE. Repatriation in tranches per LRS schedule, coordinated with your offshore bank." },
      ]}
      faqs={[
        { q: "Can the entire loan be repatriated?", a: "Yes, under the appropriate channel — LRS allows up to USD 1 M per financial year per individual. Larger amounts are repatriated in tranches across financial years, or through alternative routes (sale-of-asset proceeds, NRO-deposit liquidation). We map the right channel for your ticket." },
        { q: "Do I need to fly to India for execution?",  a: "No — most lenders accept video-KYC and consular-attested document copies. Your AD bank may require one in-person visit at the time of opening the escrow account, but we can usually align it with an existing India trip." },
        { q: "Is the rental income still taxable in India?", a: "Yes — rental income is taxable in India under the Income Tax Act, regardless of NRI status, and a TDS is deducted at source by the tenant. The LRD doesn't change the tax treatment of the rental; it only discounts the future cash flow." },
        { q: "What happens to the loan if I become a resident again?", a: "The loan continues unchanged — the LRD is against the property, not against your residency status. You'd just stop using the NRE/NRO repatriation channel." },
        { q: "Is the rate higher for NRI-landlord LRDs?", a: "Marginally — typically 25–50 bps higher than a resident LRD on the same file, reflecting the additional FEMA / cross-border workflow. Still meaningfully cheaper than any offshore financing alternative." },
      ]}
      cta={{
        headline: "Send your property + tenant details. We'll size the LRD and the repatriation channel by Day 1.",
        body: "Share the property location, monthly rental and lease lock-in. We'll come back within one working day with the LRD ticket, ROI band, repatriation channel and a 4-lender shortlist.",
        primary:   { label: "Discount my Indian rental", to: "/apply" },
        secondary: { label: "Read more on LRD",          to: "/lrd" },
      }}
    />
  );
}
