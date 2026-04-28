"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Home Loan", to: "/hl" };

export default function HlFirstTimeBuyerPage() {
  return (
    <LandingPageLayout
      theme="hl"
      tag="HL · FIRST-TIME BUYER"
      parent={PARENT}
      hero={{
        eyebrow: "Home Loan · for first-time buyers",
        headline: "Your /first home/ doesn't need a generic rate.",
        lede: "Most first-time buyers walk into the bank where their salary lands and accept the first quote. We pitch your file to 4 right-fit lenders in parallel — sharper rate, faster sanction, no second visit to the branch.",
        ctaPrimary: { label: "Get my first-home rate", to: "/apply" },
        ctaSecondary: { label: "See HL main page", to: "/hl" },
        badge: "01 / 03",
        stats: [
          { v: "8.55%", l: "Sharpest panel-floor rate" },
          { v: "30 yr", l: "Maximum tenure available" },
          { v: "90%",   l: "LTV on under-construction" },
          { v: "₹0",    l: "Pre-payment penalty (RBI)" },
        ],
      }}
      problem={{
        eyebrow: "The first-buyer trap",
        title: "Walking into one bank means accepting one quote.",
        body: "First-time buyers don't have a benchmark — you don't know if 8.85% is sharp or generous. The bank's RM has every incentive to quote a comfortable spread. We benchmark your file across 4 lenders and bring you the floor rate every time.",
        marks: [
          "RLLR-linked banks reset annually — your sticker rate doesn't stay sticker.",
          "PMAY subsidy is real money but is bank-officer-dependent — many files miss it because nobody filed the form.",
          "Builder-tied banks often push pre-EMI structures that are 50–80 bps more expensive than alternatives.",
          "Stamp duty, registration, and processing fee disclosures often only land at sanction — not before.",
        ],
      }}
      solution={{
        eyebrow: "How we structure a first HL",
        title: "Salary-profile match, RLLR floor pricing, PMAY route checked Day 1.",
        steps: [
          { n: "I",   title: "Salary-profile match",  body: "We map your CTC, employer category, salary credit pattern and liability footprint to find the sharpest pricing route — bank, HFC or salary-account NBFC." },
          { n: "II",  title: "PMAY eligibility check", body: "If your household income is under ₹18 L for the EWS/LIG/MIG bands, we check PMAY eligibility upfront — and file the form on Day 1, not Day 30." },
          { n: "III", title: "Disbursal + tax certs",  body: "Disbursal directly to the builder / seller. Section 80C and 24(b) certificates issued cleanly for your first ITR." },
        ],
      }}
      proof={{
        eyebrow: "What our first-buyer files land at",
        title: "Across our 2025 first-time HL placements.",
        stats: [
          { v: "8.55%", l: "Sharpest rate placed",     sub: "RLLR-linked bank, salaried" },
          { v: "30 yr", l: "Longest tenure",           sub: "Maximum on most lenders" },
          { v: "90%",   l: "LTV achieved",             sub: "Under-construction property" },
          { v: "₹2.67L",l: "PMAY interest subsidy",   sub: "On a ₹35 L LIG file" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹65 L HL on a Bengaluru flat — first-time buyer, salaried, RLLR-linked at 8.55%.",
        narrative: "A salaried IT professional in Bengaluru, taking her first home loan for a ₹78 L flat. Her bank quoted 8.95%; we placed the file with an RLLR-linked private bank at 8.55% — 40 bps lower on the same ticket, with PMAY-MIG II subsidy filed alongside.",
        ledger: [
          { k: "Property value",            v: "₹78,00,000" },
          { k: "Loan ticket",                v: "₹65,00,000" },
          { k: "Effective LTV",              v: "83%" },
          { k: "Bank's first quote",         v: "8.95%" },
          { k: "Final placed rate",          v: "8.55% RLLR-linked", highlight: true },
          { k: "Tenure",                     v: "25 years" },
          { k: "Saving over tenure",         v: "₹14.6 L vs first quote", highlight: true },
          { k: "PMAY subsidy filed",         v: "Yes — under MIG II" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why the first HL is worth a comparison sheet.",
        items: [
          { title: "RLLR floor, not bank-spread inflation", body: "We push for the lender's RLLR floor — not whatever spread the RM defaults to. The difference compounds over 25 years." },
          { title: "PMAY filed on Day 1",                    body: "₹2.67 L interest subsidy on MIG-I files — but only if filed at sanction. We don't let it slip." },
          { title: "Single sanction, multiple disbursals",   body: "Under-construction files get tranched disbursal aligned with the builder's milestones — interest only on the disbursed portion." },
          { title: "Tax-cert documentation",                  body: "Section 80C principal cert + Section 24(b) interest cert — issued cleanly for your first home-loan ITR." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What we need from a first-time buyer at intake.",
        qualifies: [
          "Salaried with 2+ years of consistent salary credit OR self-employed with 3+ years of vintage",
          "Age 23–55 at sanction (extends to 60–70 with co-applicant in some lenders)",
          "CIBIL 700+ for banks; 650+ for HFC route",
          "Property has approved building plan / Occupancy Certificate (OC) where applicable",
          "Down-payment of 10–25% of property value available",
        ],
        also: [
          "PMAY eligibility (EWS/LIG/MIG-I/II) — we check at intake and file alongside",
          "Joint applications (spouse, parent) for higher eligibility",
          "Files where one bank has already declined on borderline CIBIL or co-applicant income",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "Profile match",      body: "30-min discovery call. We map salary, employer, liability footprint, PMAY eligibility, property type." },
        { stage: "Day 2–7",   title: "Parallel pitch",      body: "4 right-fit lenders pitched in parallel. First sanctions land within the week." },
        { stage: "Day 7–14",  title: "Legal & technical",   body: "Title search, builder-document verification, technical valuation by lender's panel." },
        { stage: "Day 14–21", title: "Disbursal",            body: "Direct to builder / seller. Tranched for under-construction; lump-sum for ready-to-move." },
      ]}
      faqs={[
        { q: "Is PMAY still available in 2026?",      a: "PMAY-Urban 2.0 launched Sep 2024 with new income thresholds. Subsidy is filed at the lender level and credited to your loan account in 1–2 months. We check eligibility at intake and file alongside the loan application." },
        { q: "What's the minimum down-payment?",      a: "10% on properties under ₹30 L; 20% on ₹30–75 L; 25% above. RBI-mandated ceilings; some lenders fund the registration / stamp duty separately as a top-up loan." },
        { q: "Can I co-apply with my spouse / parent?", a: "Yes — co-applicants improve eligibility and qualify for a higher tax deduction split. Both incomes are counted; both CIBIL scores reviewed." },
        { q: "Is there a pre-payment penalty?",         a: "Zero on floating-rate home loans to individuals — RBI rule. You can pre-pay any time, partial or full, with no charge." },
        { q: "Do you charge me anything?",              a: "No. The lender pays our placement fee on disbursal — disclosed in the sanction letter. You only pay the lender's processing fee, stamp duty and registration." },
      ]}
      cta={{
        headline: "Send your salary slip + the property quote. We'll quote 4 lenders.",
        body: "Last 3 salary slips, the property cost sheet and your existing EMI footprint — that's it. We'll come back with a 4-lender comparison sheet within one working day.",
        primary:   { label: "Get my first-home rate", to: "/apply" },
        secondary: { label: "Read more on HL",         to: "/hl" },
      }}
    />
  );
}
