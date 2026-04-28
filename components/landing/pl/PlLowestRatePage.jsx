"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Personal Loan", to: "/pl" };

export default function PlLowestRatePage() {
  return (
    <LandingPageLayout
      theme="pl"
      tag="PL · LOWEST RATE"
      parent={PARENT}
      hero={{
        eyebrow: "Personal Loan · panel-floor pricing",
        headline: "PL at /10.49%/ — not the 13.5% your salary account quoted.",
        lede: "Most salary-account banks quote 13–15% on personal loans by default. We benchmark your file across 6 panel lenders and pull the floor rate — sometimes 250–350 bps lower than your default offer. Sanctioned in 24 hours, NEFT in 48.",
        ctaPrimary: { label: "Get a panel-floor PL quote", to: "/apply?family=PL" },
        ctaSecondary: { label: "See PL main page", to: "/pl" },
        badge: "01 / 03",
        stats: [
          { v: "10.49%", l: "Sharpest panel-floor rate" },
          { v: "₹40 L",  l: "Maximum single ticket" },
          { v: "24 hr",  l: "Median sanction TAT" },
          { v: "₹0",     l: "Foreclosure penalty (RBI)" },
        ],
      }}
      problem={{
        eyebrow: "The salary-account default",
        title: "Your bank knows your salary. Your bank also overcharges you.",
        body: "When you tap the 'pre-approved PL' offer in your salary-account app, you're getting the bank's standard rate — not the panel-floor. There's no negotiation, no comparison, no shopping. Most borrowers leave 200–300 bps on the table because they took the first quote.",
        marks: [
          "Pre-approved offers are priced at the bank's full margin — not their competitive rate.",
          "Your CIBIL might qualify you for sharper pricing at a peer NBFC — you'll never know without comparing.",
          "Salary-account stickiness is a feature for the bank, not for you.",
          "RBI mandates 0% foreclosure on floating PL for individuals — most banks structure as fixed to bypass this.",
        ],
      }}
      solution={{
        eyebrow: "How we pull the floor rate",
        title: "Benchmark across 6 lenders, negotiate the spread, NEFT in 48 hours.",
        steps: [
          { n: "I",   title: "Profile scoring",       body: "PAN, salary credit, CIBIL, existing-EMI footprint. We map you to each lender's panel-floor rate band in 30 minutes." },
          { n: "II",  title: "Parallel pitch",         body: "6 lenders pitched simultaneously. Each gets the same file. They negotiate against each other for your business." },
          { n: "III", title: "NEFT in 48 hours",       body: "Sanction in 24, NEFT in 48. Loan agreement digitally signed; KFS (Key Facts Statement) shared with all charges line-itemed." },
        ],
      }}
      proof={{
        eyebrow: "What our PL files actually land at",
        title: "Across our 2025 PL placements.",
        stats: [
          { v: "10.49%", l: "Sharpest rate placed",       sub: "Salaried, CIBIL 800+, public sector" },
          { v: "11.99%", l: "Median rate placed",          sub: "Across our 2025 PL book" },
          { v: "₹40 L",  l: "Largest single ticket",       sub: "Salaried, premium private sector" },
          { v: "T+1",    l: "Median sanction TAT",         sub: "Floating-rate digital sanction" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹15 L PL at 10.99% vs the salary bank's 13.45% pre-approved offer.",
        narrative: "A salaried VP at a private-sector firm in Mumbai. Salary bank's pre-approved offer: ₹15 L at 13.45%, 5 years. We benchmarked across our PL panel and placed the file at 10.99% with an NBFC partner, same ticket, same tenure. Saving over the 5-year tenure: ₹98K — for one phone call.",
        ledger: [
          { k: "Loan ticket",              v: "₹15,00,000" },
          { k: "Salary-bank offer",        v: "13.45%" },
          { k: "Final placed rate",        v: "10.99% floating", highlight: true },
          { k: "Tenure",                   v: "5 years" },
          { k: "Salary-bank EMI",          v: "₹34,520" },
          { k: "Final placed EMI",         v: "₹32,610" },
          { k: "Monthly saving",           v: "₹1,910" },
          { k: "Total saving over tenure", v: "₹1,14,600", highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why a panel-floor PL beats your salary-bank pre-approved.",
        items: [
          { title: "Genuinely lowest rate",  body: "We benchmark across 6 lenders and pitch parallel. The rate that lands on your sanction is the lowest you'd qualify for anywhere." },
          { title: "Floating-rate, RBI-protected", body: "Floating-rate PL gets 0% foreclosure penalty under RBI norms — pre-pay any time, no charge." },
          { title: "Transparent KFS",          body: "Key Facts Statement shared with the sanction — every charge, every fee, every hidden line-item disclosed before you sign." },
          { title: "T+1 sanction, T+2 NEFT",   body: "Digital sanction with e-KYC and e-mandate. Sanction in 24 hours, NEFT in 48 — for clean files." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What floor-rate PL files actually need.",
        qualifies: [
          "Salaried with 1+ year of consistent salary credit at the same employer",
          "Net monthly take-home ₹35K+ (sweet spot ₹75K–₹3 L)",
          "CIBIL 750+ for the floor rate; 700+ for panel placement",
          "PAN, Aadhaar, last 3 salary slips, last 6 months' bank statement",
          "Existing EMI obligations under 50% of net take-home",
        ],
        also: [
          "Self-employed professionals (doctors, CAs, lawyers) with 3+ years of vintage",
          "First-time PL applicants — handled, with slightly conservative rate",
          "PL BT (refinance an existing high-rate PL to a sharper one)",
        ],
      }}
      process={[
        { stage: "Min 0–30",  title: "Profile scoring + pricing", body: "Send PAN, last 3 salary slips, last 6 months' bank statement. Indicative rate within 30 min." },
        { stage: "Hour 0–6",  title: "Parallel pitch",            body: "6 lenders pitched. Sanction terms — ROI, EMI, tenure, processing fee — confirmed within hours." },
        { stage: "Hour 6–24", title: "Sanction + e-mandate",      body: "Best offer locked. Loan agreement digitally signed; e-NACH set up for EMI auto-debit." },
        { stage: "Day 1–2",    title: "NEFT to bank account",     body: "Disbursal direct to your linked bank account. Use as needed; pre-pay any time." },
      ]}
      faqs={[
        { q: "How can the rate be lower than my salary bank's pre-approved offer?", a: "Pre-approved offers are priced at the bank's standard rate, not their competitive panel-floor rate. We force the lender to compete against 5 peers — that competitive pressure pulls the rate down 200–300 bps for the same profile." },
        { q: "Is there really a 0% foreclosure?",                                   a: "Yes — RBI mandates 0% foreclosure on floating-rate PL to individuals. We only place floating-rate PLs unless you explicitly request fixed (which carries 2–4% pre-payment penalty)." },
        { q: "What's the typical processing fee?",                                  a: "1–2% one-time, plus GST. Disclosed in the KFS upfront. Some lenders offer fee waivers on premium profiles — we ask for these by default." },
        { q: "Will multiple lender pitches damage my CIBIL?",                       a: "We use soft-pull credit checks at the comparison stage, which don't impact CIBIL. Hard pull happens only on the final 1–2 lenders we shortlist with you." },
        { q: "How fast can I get the money?",                                       a: "T+1 (next working day) for salaried, clean-file digital sanctions. T+2–3 if there are document discrepancies or co-applicant verification needed. Full timeline disclosed at intake." },
      ]}
      cta={{
        headline: "Send PAN + salary slips. We'll benchmark in 30 min.",
        body: "PAN + last 3 salary slips + last 6 months' bank statement. Indicative rate within 30 minutes — full sanction in 24 hours.",
        primary:   { label: "Get a panel-floor PL quote", to: "/apply?family=PL" },
        secondary: { label: "Read more on PL",             to: "/pl" },
      }}
    />
  );
}
