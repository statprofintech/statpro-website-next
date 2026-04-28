"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LRD", to: "/lrd" };

export default function LrdMultiTenantPage() {
  return (
    <LandingPageLayout
      theme="lrd"
      tag="LRD · MULTI-TENANT"
      parent={PARENT}
      hero={{
        eyebrow: "Multi-tenant complexes · 6+ tenants",
        headline: "Tenant-mix risk? /That's our specialist desk./",
        lede: "Banks decline multi-tenant complexes because the underwriting model can't handle 8 different leases. We map every tenant, score the credit profile of each, and place the file with NBFCs whose desks specialise in exactly this.",
        ctaPrimary: { label: "Map my rent roll", to: "/apply" },
        ctaSecondary: { label: "See LRD main page", to: "/lrd" },
        badge: "02 / 03",
        stats: [
          { v: "6+",     l: "Tenants in our typical file" },
          { v: "₹5–40 Cr", l: "Ticket band placed" },
          { v: "85%",     l: "Discounting on rental" },
          { v: "3",       l: "NBFCs that lead this asset class" },
        ],
      }}
      problem={{
        eyebrow: "Why banks struggle here",
        title: "A 14-tenant complex doesn't fit a generic LRD template.",
        body: "Bank LRD desks are built for clean, single-tenant or two-tenant files. The moment your file has 8 tenants — different lease terms, different security deposits, different escalation clauses — the credit officer hits a wall. The file gets routed up the committee chain and quietly returned.",
        marks: [
          "Generic LRD models assume one lease end date — they break with 14.",
          "Tenant-mix risk (anchor-only vs retail-mix vs F&B-heavy) gets a generic risk weight, not a tenant-by-tenant assessment.",
          "Security-deposit reconciliation across many tenants is non-trivial — banks would rather decline than build the workflow.",
          "Escalation clauses (5%/year vs 15%/3yrs vs CPI-linked) need to be modelled into the rental-discounting curve — most banks just take the current rent.",
        ],
      }}
      solution={{
        eyebrow: "How specialist NBFCs solve this",
        title: "Tenant-by-tenant credit memo, escrow tied to each rental, escalation modelled into pricing.",
        steps: [
          { n: "I",   title: "Per-tenant scoring",       body: "Every tenant is scored individually — credit standing, vintage, GST footprint, security deposit posture. Anchor tenants get a different weight than retail." },
          { n: "II",  title: "Escalation-aware pricing", body: "Future rent escalation is built into the discounting curve — your sanction reflects what you'll actually collect, not just today's rent." },
          { n: "III", title: "Tripartite escrow",        body: "All tenant rentals route through a single escrow. Lender debits EMI from escrow, residual flows to you. Clean, auditable, lender-comfortable." },
        ],
      }}
      proof={{
        eyebrow: "Across our multi-tenant book",
        title: "What this asset class typically lands at on our panel.",
        stats: [
          { v: "85%",    l: "Discounting achieved",        sub: "Vs 70–75% on banks" },
          { v: "₹5–40 Cr", l: "Ticket size band",          sub: "Sweet spot for our 3 lead NBFCs" },
          { v: "9.40%",   l: "Sharpest rate placed",       sub: "Anchor-tenant complex, 2025" },
          { v: "11 yrs",  l: "Median tenure",              sub: "Aligned to weighted-avg lock-in" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹14 Cr LRD on an 11-tenant retail-and-office complex in New Town.",
        narrative: "A mixed-use complex in New Town with 11 tenants — 3 retail anchors, 5 office occupants, 3 F&B. Total monthly rent ~₹13.5 L, weighted-avg residual lock-in 5.4 years. Two banks declined on the F&B-heavy mix. Specialist NBFC partner sanctioned at 9.85%, 14-year tenure, 82% discounting on the gross rental.",
        ledger: [
          { k: "Total monthly rental",    v: "₹13,50,000" },
          { k: "Tenants",                  v: "11 (3 retail · 5 office · 3 F&B)" },
          { k: "Weighted lock-in",         v: "5.4 years" },
          { k: "Discounting",              v: "82%", highlight: true },
          { k: "Loan ticket sanctioned",   v: "₹14,00,00,000", highlight: true },
          { k: "Final ROI",                v: "9.85% floating" },
          { k: "Tenure",                   v: "14 years" },
          { k: "Banks that declined",      v: "2" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why we route multi-tenant files to specialist NBFCs first.",
        items: [
          { title: "Tenant-mix actually scored",     body: "Retail-heavy, F&B-heavy, anchor-only — each gets a calibrated discounting rate, not a generic decline." },
          { title: "Escalation in the price",         body: "Your future rent escalation is modelled into the LRD ticket — not ignored. Larger sanction, same property." },
          { title: "Clean escrow operations",         body: "We set up the tripartite escrow with the lender. Tenant communication, account opening, debit instructions — all coordinated." },
          { title: "Top-up as tenants stabilise",     body: "When a vacant unit fills or an anchor renews early, we re-run the rental base and place a top-up against the increment." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What needs to be in place before we pitch the file.",
        qualifies: [
          "6+ tenants OR a single anchor tenant with Tier-1 credit standing",
          "Each tenant on a registered lease deed with security deposit collected",
          "Weighted-average residual lock-in of 36+ months",
          "GST-registered tenants with rental routed through bank channel",
          "Promoter / SPV CIBIL 700+ (banks) or 650+ (NBFC route)",
        ],
        also: [
          "Files with 1–2 vacant units (we size off occupied rental, with re-leasing buffer)",
          "Files where 1–2 banks have already declined on tenant-mix",
          "Pre-acquisition LRD aligned with property purchase",
        ],
      }}
      process={[
        { stage: "Day 0–3",   title: "Rent roll + per-tenant memo", body: "We map each lease into a per-tenant credit memo before we approach any lender." },
        { stage: "Day 3–10",  title: "Specialist NBFC pitch",        body: "Pitch to the 3–4 lenders with active multi-tenant LRD appetite. First sanctions in the week." },
        { stage: "Day 10–20", title: "Escrow + tripartite agreement", body: "Escrow account opened. Tripartite agreement (you, tenants, lender) executed." },
        { stage: "Day 20–35", title: "Legal & disbursal",            body: "Title search, technical, MOD creation. Disbursal lump-sum or tranched." },
      ]}
      faqs={[
        { q: "What's the maximum number of tenants you've placed?", a: "14 — a Salt Lake commercial complex placed at ₹38 Cr in 2025. The structure scales — we have lenders with appetite up to 25 tenants on a single asset." },
        { q: "Can I include tenants on lease-deed renewal?", a: "Yes, with a slightly conservative discount. Tenants with leases expiring in the next 12 months are weighted at 60–70% versus tenants on long lock-ins. The structure absorbs the renewal risk." },
        { q: "How do you handle a tenant terminating mid-LRD?", a: "Sanction letter typically allows 30–60 days to bring in a replacement before the lender flags an event. We help you re-lease the unit through our network — this is a service we provide, not a charge." },
        { q: "What if rentals are received in cash?",            a: "Cash rentals are not LRD-bankable. All tenant rentals must be received through a bank channel and reflected in the property's bank statement. We can structure a 6-month transition where you formalise rentals before approaching lenders." },
        { q: "Do you handle the escrow paperwork?",              a: "Yes — escrow account opening, tripartite agreement drafting, debit-instruction coordination with each tenant. End-to-end, included in the placement service." },
      ]}
      cta={{
        headline: "Send us your rent roll. We'll place it where banks can't.",
        body: "Share your full tenant list, lease end dates and current rentals. We'll come back within one working day with discounting, ticket, ROI band and a specialist-NBFC shortlist.",
        primary:   { label: "Map my rent roll",    to: "/apply" },
        secondary: { label: "Read more on LRD",    to: "/lrd" },
      }}
    />
  );
}
