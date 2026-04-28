"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Home Loan", to: "/hl" };

export default function HlSelfEmployedPage() {
  return (
    <LandingPageLayout
      theme="hl"
      tag="HL · SELF-EMPLOYED"
      parent={PARENT}
      hero={{
        eyebrow: "Home Loan · for self-employed promoters",
        headline: "Self-employed? /HFC desks underwrite cash flow./ Banks just count salary slips.",
        lede: "Most banks load 100–200 bps on self-employed home loans because their underwriting is salary-anchored. Our 4 HFC partners underwrite ITR + GST + bank statement and price your file off real cash flow — sharper rate, faster sanction.",
        ctaPrimary: { label: "Get an HFC HL quote", to: "/apply?family=HL" },
        ctaSecondary: { label: "See HL main page", to: "/hl" },
        badge: "03 / 03",
        stats: [
          { v: "8.70%",  l: "Sharpest HFC-floor rate" },
          { v: "85%",    l: "LTV achieved" },
          { v: "30 yr",  l: "Maximum tenure" },
          { v: "21 d",   l: "Median sanction TAT" },
        ],
      }}
      problem={{
        eyebrow: "The self-employed gap",
        title: "Banks read your ITR — not your business cash flow.",
        body: "Most banks underwrite self-employed HL on the gross-profit line of your ITR — which often understates real income because of depreciation and notional expenses. HFC desks underwrite the bank statement, GST returns and operating cash flow, and price your file 50–100 bps sharper than the bank quote.",
        marks: [
          "Banks take ITR-declared income at face value — depreciation reduces it artificially.",
          "GST-registered businesses with healthy GSTR-1 / GSTR-3B history get sharper underwriting at HFCs.",
          "Bank-statement-based underwriting captures real cash flow — sales receipts, supplier payments, EMI servicing.",
          "Self-employed files at banks routinely take 30–45 days; HFC route closes in 14–21.",
        ],
      }}
      solution={{
        eyebrow: "How we structure a self-employed HL",
        title: "Bank-statement + GST + ITR underwriting at HFC desks built for it.",
        steps: [
          { n: "I",   title: "Cash-flow scoring",  body: "We map your last 24 months of business bank statements, GST returns and ITRs into a credit memo built around real cash flow — not just declared income." },
          { n: "II",  title: "HFC desk match",      body: "We pitch only to HFCs with active self-employed appetite for your profession (manufacturing, trading, professional services, retail). Generic banks not approached." },
          { n: "III", title: "Disbursal + tax certs", body: "Disbursal direct to builder / seller. Section 80C and 24(b) certificates issued cleanly for your ITR." },
        ],
      }}
      proof={{
        eyebrow: "What our self-employed HL files land at",
        title: "Across our 2025 self-employed HL placements.",
        stats: [
          { v: "8.70%",  l: "Sharpest rate placed",        sub: "HFC desk, manufacturing promoter" },
          { v: "85%",    l: "LTV achieved",                 sub: "On clean files with strong GST" },
          { v: "₹4.5 Cr",l: "Largest single ticket",       sub: "Self-employed HL on Bombay flat" },
          { v: "21 d",   l: "Median sanction-to-disbursal", sub: "Vs 45+ at most banks" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹2.2 Cr self-employed HL on a ₹2.8 Cr Pune flat — manufacturing promoter, 4-yr GST history.",
        narrative: "A manufacturing promoter in Pune buying a ₹2.8 Cr flat. His bank quoted 9.45% — citing 'self-employed risk premium.' We pitched the file to an HFC partner with strong manufacturing appetite, who underwrote on bank-statement + GST basis at 8.85%. Sanction in 14 working days, ₹2.2 Cr at 80% LTV.",
        ledger: [
          { k: "Property value",              v: "₹2,80,00,000" },
          { k: "Loan ticket",                  v: "₹2,20,00,000" },
          { k: "Effective LTV",                v: "79%" },
          { k: "Bank's first quote",           v: "9.45%" },
          { k: "Final placed rate",            v: "8.85% RLLR-equivalent", highlight: true },
          { k: "Tenure",                       v: "20 years" },
          { k: "Saving over 20 yrs",           v: "≈ ₹38,40,000", highlight: true },
          { k: "Sanction TAT",                 v: "14 working days" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why HFC desks beat banks for self-employed HL.",
        items: [
          { title: "Real-cash-flow underwriting",    body: "Bank statement + GST returns drive the credit memo. ITR is a reference, not the ceiling." },
          { title: "Sharper rate on the same file",  body: "HFC self-employed rates start at 8.70% vs bank quotes routinely above 9.25% for the same profile." },
          { title: "Faster TAT",                      body: "21-day median from intake to disbursal versus 45+ days at most banks." },
          { title: "Top-up windows post-disbursal",   body: "Once your loan account matures, top-ups against incremental property value or business growth are sanctioned in days." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What self-employed HL files actually need.",
        qualifies: [
          "Self-employed promoter / professional / partner with 3+ years of business vintage",
          "Last 2 years' ITRs filed; last 24 months' GST returns where applicable",
          "Last 12 months' business + personal bank statements",
          "Business CIBIL 700+ (banks); 650+ (HFC route)",
          "Clear title on the property; OC where applicable",
        ],
        also: [
          "Doctors, lawyers, CAs and other licensed professionals — special HFC desks exist",
          "Commission-income promoters (insurance, MF distribution) with 2+ years' track",
          "First-time HL for self-employed — handled, with slightly conservative LTV",
        ],
      }}
      process={[
        { stage: "Day 0–3",   title: "Cash-flow scoping",   body: "Discovery call + last 12 months' bank statements + last 24 months' GST returns. Indicative pricing in the same call." },
        { stage: "Day 3–10",  title: "HFC pitch",            body: "Pitch to 3–4 HFCs with active self-employed appetite. Sanction terms within 7–10 days." },
        { stage: "Day 10–17", title: "Legal & technical",    body: "Title search, builder verification, technical valuation by HFC's panel." },
        { stage: "Day 17–21", title: "Disbursal",             body: "Direct to builder / seller. Lump-sum or tranched per construction stage." },
      ]}
      faqs={[
        { q: "Why is the bank's rate higher for self-employed?", a: "Banks apply a generic 'self-employed risk premium' (typically 50–100 bps) because their underwriting is salary-anchored. HFCs underwrite cash flow directly and price the actual risk — not the category." },
        { q: "What if my GST registration is recent?",          a: "We can place HLs with 18 months of GST history at most HFCs; below that, the underwriting leans more on ITRs and bank statements. Files under 12 months are harder but not impossible." },
        { q: "Can I include rental income from my other property?", a: "Yes — rental income (with lease deeds and bank credit history) adds to your eligibility. We map all income streams during the cash-flow scoping." },
        { q: "How is the rate compared to a salaried HL?",        a: "On our HFC panel, self-employed rates are typically 15–35 bps above clean salaried rates — much narrower than the 75–100 bps gap most banks impose." },
        { q: "Can I co-apply with my salaried spouse?",            a: "Yes — and we recommend it where applicable. Salaried co-applicant improves the eligibility band and often pulls rate sharper. Income tax deduction can be split between co-borrowers." },
      ]}
      cta={{
        headline: "Send your bank statement + GST. We'll quote 4 HFC desks.",
        body: "Last 12 months of business bank statement + last 8 quarters of GST returns. We'll come back within one working day with a 4-HFC comparison sheet — no commitment.",
        primary:   { label: "Get an HFC HL quote", to: "/apply?family=HL" },
        secondary: { label: "Read more on HL",      to: "/hl" },
      }}
    />
  );
}
