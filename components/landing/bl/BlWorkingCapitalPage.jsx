"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Business Loan", to: "/bl" };

export default function BlWorkingCapitalPage() {
  return (
    <LandingPageLayout
      theme="bl"
      tag="BL · WORKING CAPITAL"
      parent={PARENT}
      hero={{
        eyebrow: "Business Loan · cash conversion cycle funding",
        headline: "Pay your suppliers on Day 1. /Get paid by your customers in 90./",
        lede: "If your business runs a 60–120 day receivables cycle, you don't need a term loan — you need a working-capital line. We structure overdraft, invoice-discounting and cash-credit lines from our 9-lender panel to bridge exactly that gap, at panel-floor pricing.",
        ctaPrimary: { label: "Structure my WC line", to: "/apply?family=BL" },
        ctaSecondary: { label: "See BL main page", to: "/bl" },
        badge: "02 / 03",
        stats: [
          { v: "11.50%", l: "Sharpest panel-floor rate" },
          { v: "₹5 Cr",  l: "Largest WC line placed" },
          { v: "30%",    l: "Of turnover · typical limit" },
          { v: "On-tap", l: "Draw, repay, redraw" },
        ],
      }}
      problem={{
        eyebrow: "The receivables tax",
        title: "You ship Day 1. You get paid Day 90. The gap is your money — borrowed.",
        body: "Manufacturing, trading and B2B-services businesses live with structural cash gaps between supplier payments and customer receipts. A term BL is the wrong instrument — interest from Day 1 on idle capital. Working-capital lines (overdraft, cash-credit, invoice discounting) are sized for exactly this gap.",
        marks: [
          "Term BL pays interest from Day 1 even when capital is idle — wrong tool for cyclical needs.",
          "Bank cash-credit limits are notoriously slow to sanction and inflexible to scale up.",
          "Invoice-discounting platforms are quick but often expensive on small tickets.",
          "Right structure depends on your specific cash-conversion cycle — not a generic 'WC loan'.",
        ],
      }}
      solution={{
        eyebrow: "How we size the right WC instrument",
        title: "OD, CC, invoice discounting — match the structure to your cycle.",
        steps: [
          { n: "I",   title: "Cash-conversion mapping", body: "We map your last 24 months of bank statements + GST + AR/AP ageing to identify the structural cash gap." },
          { n: "II",  title: "Instrument match",         body: "OD for cyclical promoter-backed needs; CC for stock-and-debtor backed; invoice discounting for B2B receivables. Right instrument, not generic." },
          { n: "III", title: "Lender pitch",             body: "Pitched to 4–5 lenders with active appetite for your WC structure. Sanction in 7–10 days for unsecured; 14–21 for secured." },
        ],
      }}
      proof={{
        eyebrow: "What WC files actually land at",
        title: "Across our 2025 working-capital placements.",
        stats: [
          { v: "11.50%",l: "Sharpest panel-floor rate", sub: "On secured CC, strong vintage" },
          { v: "₹5 Cr", l: "Largest single line",        sub: "Manufacturing, secured CC" },
          { v: "30%",   l: "Of turnover · typical limit",sub: "Sanctioned line as % of GST turnover" },
          { v: "T+10",  l: "Median sanction-to-live",    sub: "On unsecured OD lines" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹2 Cr OD line for a B2B services firm — 90-day receivables cycle.",
        narrative: "A B2B IT services firm in Bengaluru with ₹12 Cr annual turnover, average receivable cycle of 90 days. Required ₹2 Cr to bridge the gap between paying salaries (Day 1) and collecting from clients (Day 90). We placed an OD line at 11.95% with an SME-NBFC partner — drawn against confirmed invoices, repaid as receivables came in.",
        ledger: [
          { k: "Annual turnover (GST)",  v: "₹12 Cr" },
          { k: "Receivable cycle",        v: "90 days" },
          { k: "OD line sanctioned",      v: "₹2,00,00,000", highlight: true },
          { k: "Final ROI",               v: "11.95%" },
          { k: "Average drawn balance",   v: "₹1.4 Cr" },
          { k: "Annual interest cost",    v: "≈ ₹16.7 L (on drawn)", highlight: true },
          { k: "Term-BL alternative cost",v: "≈ ₹23.9 L (full ticket)" },
          { k: "Annual saving vs term BL",v: "₹7.2 L", highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why a WC line beats a term loan for cyclical cash needs.",
        items: [
          { title: "Pay only on drawn balance",    body: "Daily interest computed on actual drawn balance, not sanctioned limit. Idle capital costs nothing." },
          { title: "Repay-and-redraw flexibility", body: "Once you've repaid (typically as receivables come in), you can redraw within the limit — no fresh underwriting." },
          { title: "Right-instrument selection",   body: "We pick OD vs CC vs invoice-discounting based on your actual cycle — not a generic 'BL' default." },
          { title: "Annual limit review",          body: "Sanctioned limit is reviewed annually against turnover growth. Top-up windows are routine, not extraordinary." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What working-capital files actually need.",
        qualifies: [
          "GST-registered business with 24+ months of consistent return filings",
          "Annual turnover ₹3 Cr+ (sweet spot ₹5–50 Cr)",
          "Last 12 months of business bank statements showing clear receivables cycle",
          "Promoter / partner / director CIBIL 700+",
          "Healthy AR / AP ageing — no chronic 90+ day delays in receivables",
        ],
        also: [
          "Files with seasonal cash flow (textile, agri, exports) — step-up limit structures",
          "Service businesses with confirmed Tier-1 client invoices — invoice-discounting route",
          "Manufacturers with stock-and-debtor backed CC requirement",
        ],
      }}
      process={[
        { stage: "Day 0–2",   title: "Cycle scoping",        body: "Discovery + 24-month bank statement + AR/AP ageing analysis. Structure recommendation in the same call." },
        { stage: "Day 2–7",   title: "Lender pitch",          body: "Pitch to 3–4 lenders with active appetite for your WC structure. Sanction terms within the week." },
        { stage: "Day 7–14",  title: "Documentation",          body: "KYC, GST verification, hypothecation paperwork. Sanction letter executed; loan agreement signed." },
        { stage: "Day 14–18", title: "Line activation",        body: "Sanctioned limit credited to your business bank account or made available as OD." },
      ]}
      faqs={[
        { q: "OD vs CC vs invoice discounting — which is right for me?", a: "OD: best for unsecured, cyclical promoter-backed cash needs. CC: best for stock-and-debtor backed, secured by inventory hypothecation. Invoice discounting: best for B2B receivables from credit-worthy clients. We'll recommend based on your file." },
        { q: "Is the line secured or unsecured?",                         a: "Most lenders offer both. Unsecured OD up to ₹2 Cr (12.5%+). Secured CC up to ₹10 Cr (11.5%+) against inventory + receivables hypothecation. Property-backed lines available at sharper rates." },
        { q: "How is the limit reviewed annually?",                       a: "Lenders review annually against your latest GST turnover, bank-statement utilisation, and DSO trends. Limit can be enhanced (top-up) or maintained — rarely reduced if utilisation is healthy." },
        { q: "What's the typical processing fee?",                         a: "Working-capital lines typically charge 0.5–1.5% one-time processing fee, plus annual renewal charges (0.25–0.5% on the limit). Disclosed upfront in the sanction." },
        { q: "Can I convert OD to a term loan later?",                    a: "Yes — most lenders allow conversion of OD to term BL after 12+ months of clean utilisation. Useful when your business stabilises into a fixed run-rate." },
      ]}
      cta={{
        headline: "Send your GST + bank statement + AR ageing. We'll size the line.",
        body: "Last 24 months of GSTR-3B + last 12 months of business bank statement + current AR ageing. We'll come back within one working day with structure, ticket and a 4-lender shortlist.",
        primary:   { label: "Structure my WC line",   to: "/apply?family=BL" },
        secondary: { label: "Read more on BL",         to: "/bl" },
      }}
    />
  );
}
