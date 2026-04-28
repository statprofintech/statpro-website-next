"use client";

import LandingPageLayout from "@/components/LandingPageLayout";

const PARENT = { label: "All LAP", to: "/lap" };

export default function LapDroplineOdPage() {
  return (
    <LandingPageLayout
      theme="lap"
      tag="LAP · DROPLINE OD"
      parent={PARENT}
      hero={{
        eyebrow: "Working capital · pay-as-you-use",
        headline: "Pay interest only on /what you actually drew./",
        lede: "A Dropline OD is an overdraft sublimit against your property — the limit drops down quarterly, you pay interest only on the drawn balance. Right when your cash flow is lumpy and a term loan would be paying interest on idle capital.",
        ctaPrimary: { label: "Structure my OD", to: "/apply" },
        ctaSecondary: { label: "See LAP main page", to: "/lap" },
        badge: "03 / 03",
        stats: [
          { v: "₹13.5L", l: "Annual interest saved vs term loan" },
          { v: "0%",     l: "Penalty on under-utilisation" },
          { v: "Q1–Q4",  l: "Limit step-down cadence" },
          { v: "Convert",l: "Switch to term loan anytime" },
        ],
      }}
      problem={{
        eyebrow: "The term-loan tax",
        title: "A regular LAP charges interest from Day 1 — even when you don't need the money.",
        body: "If your business cash flow is cyclical or project-driven, you don't need ₹2 Cr sitting in your account from Day 1 of disbursal. You need access to it. A term loan charges interest on the full ticket from Day 1. That's the term-loan tax — and it's avoidable.",
        marks: [
          "EMI on a ₹2 Cr term LAP at 9% is ~₹2.55 L/month — payable from Month 1, whether you've used the money or not.",
          "Cyclical revenue businesses (trading, contracting, agri-allied) sit on idle capital 4–6 months a year.",
          "Pre-payment doesn't fully solve it — partial pre-pay reduces principal but you've already paid the full interest for the period.",
          "Under a term loan, redrawing the principal you repaid is a fresh underwriting cycle, not a click.",
        ],
      }}
      solution={{
        eyebrow: "How a Dropline OD works",
        title: "An overdraft sublimit against your property — quarterly step-down, interest only on the drawn balance.",
        steps: [
          { n: "I",   title: "Sanctioned limit",        body: "We negotiate the full LAP eligibility as a Dropline OD limit — same property, same ticket, same lender appetite as a term loan." },
          { n: "II",  title: "Interest on drawn only",  body: "Daily interest is computed on the actual drawn balance, not the sanctioned limit. Repay any time, redraw any time, within the limit." },
          { n: "III", title: "Quarterly step-down",     body: "The sanctioned limit drops by a fixed schedule (quarterly or half-yearly). Discipline is built into the structure — you can't roll the limit indefinitely." },
        ],
      }}
      proof={{
        eyebrow: "What an OD actually saves",
        title: "The maths on a typical ₹2 Cr Dropline OD versus a ₹2 Cr term LAP.",
        stats: [
          { v: "₹13.5 L", l: "Annual interest saved", sub: "vs term loan at the same rate" },
          { v: "0%",      l: "Penalty when under-used", sub: "Quarterly limit step-down only" },
          { v: "T+0",     l: "Redraw turnaround",     sub: "Within sanctioned limit" },
          { v: "Convert", l: "Switchable later",      sub: "OD → term loan once needs stabilise" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹2 Cr Dropline OD on a Salt Lake commercial property — average drawn balance ₹50 L.",
        narrative: "A trading business in Kolkata with seasonal inventory swings. Old setup: ₹2 Cr term LAP at 9%, EMI ~₹2.55 L/month — interest cost ₹18 L/year on capital sitting idle for half the year. New setup: ₹2 Cr Dropline OD at 9%, drawn ₹80 L in Q1, repaid ₹40 L by Q2-end, redraw ₹50 L in Q3. Average drawn balance: ~₹50 L.",
        ledger: [
          { k: "Sanctioned limit",          v: "₹2,00,00,000" },
          { k: "Average drawn balance",     v: "₹50,00,000" },
          { k: "Rate",                       v: "9.00% floating" },
          { k: "Annual interest (OD)",       v: "₹4,50,000", highlight: true },
          { k: "Annual interest (term loan)",v: "₹18,00,000" },
          { k: "Annual saving",              v: "₹13,50,000", highlight: true },
          { k: "Penalty on un-drawn limit",  v: "₹0" },
          { k: "Convertible to term later",  v: "Yes — anytime" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why we steer cyclical businesses to Dropline OD.",
        items: [
          { title: "Capital you can sleep on",       body: "Limit is sanctioned and ready. You don't have to call us when a working-capital crunch hits — you transfer." },
          { title: "Interest discipline by design",  body: "Pay only when you draw. Idle capital costs nothing. The structure naturally discourages over-borrowing." },
          { title: "Repay without re-applying",      body: "Repay any time, redraw within the limit. No fresh underwriting, no committee, no friction." },
          { title: "Convertible later",              body: "When your needs stabilise into a fixed run-rate, the OD can be converted to a term loan with the same lender — no fresh property, no fresh valuation." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "When a Dropline OD beats a term loan for you.",
        qualifies: [
          "Cyclical or project-based business cash flow (trading, EPC, contracting, exports, agri-allied)",
          "Existing or fresh LAP eligibility on a residential, commercial or industrial property",
          "CIBIL 700+ (banks) or 650+ (NBFC route)",
          "GST-registered business with at least 24 months of audited financials",
          "Comfort with quarterly limit step-down discipline",
        ],
        also: [
          "Hybrid structure — part term loan, part OD, on the same property (some lenders)",
          "Real-estate intermediate funding — bridge between selling one property and acquiring the next",
          "Promoter-account smoothing — milestone receipts on EPC or IT-services contracts",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "Cash-flow scoring",     body: "We map your last 24 months of bank statements to identify the actual drawn-balance pattern an OD would hold." },
        { stage: "Day 2–7",   title: "Lender match",          body: "Not every lender offers Dropline OD. We pitch only to the 4–5 with active OD appetite for your collateral and ticket." },
        { stage: "Day 7–14",  title: "Sanction & MOD",        body: "OD sanction lands. Legal, technical, MOD creation in parallel." },
        { stage: "Day 14–18", title: "Activation",            body: "Limit goes live. First draw within 24 hours of activation — by NEFT to your operating account." },
      ]}
      faqs={[
        { q: "Is the rate higher on a Dropline OD vs a term LAP?", a: "Marginally — typically 25–50 bps higher. The trade-off is paying interest only on what's drawn, which more than offsets the rate gap if your average utilisation is below 60% of the sanctioned limit." },
        { q: "What does 'limit step-down' mean exactly?", a: "The sanctioned limit reduces on a fixed quarterly or half-yearly schedule (e.g., 5% per quarter). It doesn't mean your drawn balance must reduce — only the maximum you can draw to. Discipline is built into the structure; you can't roll the limit indefinitely." },
        { q: "Can I convert it to a term loan later?",      a: "Yes, with most of our lenders. Once your business stabilises into a fixed run-rate and you no longer need OD flexibility, the structure can be converted to a term loan against the same property — no fresh valuation." },
        { q: "What's the penalty if I don't draw?",          a: "Zero on most lenders. A few charge a small commitment fee (10–25 bps annually on the un-drawn limit). We disclose it at sanction." },
        { q: "Can I use OD funds for personal expenses?",    a: "Dropline OD is structured for business or commercial use. For personal-use refinance or top-up, a term-loan LAP is the cleaner structure. Talk to us about which fits your situation." },
      ]}
      cta={{
        headline: "Map your cash flow against an OD structure.",
        body: "Send us your last 12 months of bank statements. We'll model what an OD would have saved you over that period and what the sanctioned limit could realistically be — within one working day.",
        primary:   { label: "Structure my OD",      to: "/apply" },
        secondary: { label: "Read more on LAP",     to: "/lap" },
      }}
    />
  );
}
