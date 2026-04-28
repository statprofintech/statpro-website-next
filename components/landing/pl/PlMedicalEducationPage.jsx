"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Personal Loan", to: "/pl" };

export default function PlMedicalEducationPage() {
  return (
    <LandingPageLayout
      theme="pl"
      tag="PL · MEDICAL · EDUCATION"
      parent={PARENT}
      hero={{
        eyebrow: "Personal Loan · for medical & education needs",
        headline: "When the timing /isn't negotiable./",
        lede: "Medical emergencies and education-fee deadlines don't wait for a 14-day loan cycle. Our PL panel runs T+1 sanction with NEFT in 48 hours — at panel-floor rates that respect the urgency without overcharging for it.",
        ctaPrimary: { label: "Get an urgent PL quote", to: "/apply?family=PL" },
        ctaSecondary: { label: "See PL main page", to: "/pl" },
        badge: "03 / 03",
        stats: [
          { v: "T+1",    l: "Sanction TAT" },
          { v: "11.49%", l: "Sharpest panel-floor rate" },
          { v: "₹40 L",  l: "Maximum single ticket" },
          { v: "₹0",     l: "Foreclosure penalty (RBI)" },
        ],
      }}
      problem={{
        eyebrow: "When the clock is non-negotiable",
        title: "Hospital admission tomorrow. School fees due Friday.",
        body: "Medical emergencies and education-fee deadlines run on their own clock — the loan needs to land within 48–72 hours, not 7–14 days. Most banks treat all PLs the same and run the standard cycle. Our specialist NBFC desks have express-track digital workflows for time-critical PLs.",
        marks: [
          "Hospital pre-admission deposits often need to be wired within 24 hours of confirmation.",
          "International school / college fee deadlines are non-negotiable; rolling them over forfeits the seat.",
          "Family-event timing (wedding, last-rites) doesn't shift; the PL needs to land on time.",
          "Express-track PL exists at our 4 specialist NBFC desks — but most aggregators don't surface it.",
        ],
      }}
      solution={{
        eyebrow: "How express-track PL works",
        title: "Digital sanction, e-mandate, NEFT — all inside 48 hours.",
        steps: [
          { n: "I",   title: "Profile + use-case scoring", body: "PAN, salary credit, CIBIL, plus the use-case document (hospital invoice, fee challan). Indicative rate within 30 minutes." },
          { n: "II",  title: "Express-track NBFC pitch",    body: "We pitch only to the 4 NBFCs with active express-track appetite. Sanction terms in 12 hours, agreement digitally signed." },
          { n: "III", title: "NEFT + use-case payout",      body: "NEFT to your linked bank account, OR direct payout to the hospital / institution if the lender supports it." },
        ],
      }}
      proof={{
        eyebrow: "What express-track PL files actually deliver",
        title: "Across our 2025 medical / education PL placements.",
        stats: [
          { v: "T+1",    l: "Median sanction TAT",         sub: "Express-track NBFC desks" },
          { v: "11.49%", l: "Sharpest rate placed",         sub: "Salaried, premium private sector" },
          { v: "T+2",    l: "NEFT to bank or institution",  sub: "Disbursal turnaround" },
          { v: "₹40 L",  l: "Largest urgent ticket",        sub: "International med-school fee" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹8 L emergency medical PL — sanction in 18 hours, NEFT to hospital in 30.",
        narrative: "A salaried IT manager whose father needed emergency cardiac surgery in Hyderabad. Hospital required a ₹6 L admission deposit within 24 hours; total post-surgery cost ~₹8 L. We placed the PL with an express-track NBFC at 12.49%, sanction in 18 hours, NEFT split: ₹6 L direct to the hospital + ₹2 L to the borrower's bank account.",
        ledger: [
          { k: "Loan ticket",              v: "₹8,00,000" },
          { k: "Use case",                  v: "Emergency cardiac surgery" },
          { k: "Sanction TAT",              v: "18 hours", highlight: true },
          { k: "NEFT TAT",                  v: "30 hours total", highlight: true },
          { k: "Final placed rate",         v: "12.49% floating" },
          { k: "Tenure",                    v: "3 years" },
          { k: "EMI",                       v: "₹26,800" },
          { k: "Foreclosure penalty",       v: "₹0 (RBI)" },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why express-track PL respects both urgency and price.",
        items: [
          { title: "T+1 sanction, T+2 NEFT",     body: "End-to-end digital — e-KYC, e-mandate, e-sign on agreement. No physical visits, no paper handoffs." },
          { title: "Direct payout to institution", body: "Most lenders support direct disbursal to hospitals / educational institutions — useful when the borrower can't manage the wire personally." },
          { title: "No urgency-premium pricing",   body: "Express-track rates are within 50–100 bps of standard PL — not the 200–300 bps premium some emergency-loan apps charge." },
          { title: "Pre-pay any time",              body: "Floating-rate PL = 0% foreclosure (RBI). When insurance reimbursement or fee refund lands, pre-pay any time at no charge." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What express-track PL files actually need.",
        qualifies: [
          "Salaried with 1+ year of consistent salary credit",
          "Net monthly take-home ₹50K+",
          "CIBIL 700+ (700–750 sweet spot for express-track NBFC desks)",
          "PAN, Aadhaar, last 3 salary slips, last 6 months' bank statement",
          "Use-case document (hospital invoice, fee challan, admission letter)",
        ],
        also: [
          "Self-employed with 3+ years of vintage (slightly conservative ticket size)",
          "Joint applications (spouse co-applicant) for higher emergency ticket",
          "Out-of-cycle medical PL on the family's existing PL relationship — top-up route",
        ],
      }}
      process={[
        { stage: "Hour 0–1",  title: "Use-case + profile scoping", body: "Send PAN, last 3 salary slips, last 6 months' bank statement, plus the hospital / institution document. Indicative rate in 30 min." },
        { stage: "Hour 1–6",  title: "Express-track pitch",        body: "Pitch to 3–4 NBFC express-track desks. Sanction terms within hours." },
        { stage: "Hour 6–18", title: "Sanction + e-mandate",       body: "Loan agreement digitally signed; e-NACH for EMI auto-debit." },
        { stage: "Hour 18–30",title: "NEFT to bank / institution", body: "Disbursal direct to your bank account or to the hospital / institution as required." },
      ]}
      faqs={[
        { q: "Can the disbursal go directly to the hospital?", a: "Yes — most express-track NBFCs support direct payment to the hospital / institution against an invoice. Useful when the borrower cannot personally manage the wire (e.g., is in surgery, abroad)." },
        { q: "Is the rate higher because it's urgent?",          a: "Express-track rates sit 50–100 bps above standard PL on the same profile — modest premium for the speed. Far below the 200–300 bps premium that emergency-loan-app players charge." },
        { q: "Can I get this for international medical / education?", a: "Yes — international medical bills (with hospital invoice + visa proof) and international education (with admission letter + visa) are accepted by most express-track desks. Tickets up to ₹40 L. Forex remittance handled separately through your AD bank." },
        { q: "What if my employer's PF / gratuity covers it later?",  a: "Common scenario. Pre-pay the PL any time at zero penalty (floating-rate, RBI rule) when the PF / gratuity lands. We structure the EMI to be sustainable in the meantime." },
        { q: "Can I add a co-applicant for higher ticket?",            a: "Yes — spouse / parent co-applicant improves the urgent-need ticket size. Both incomes are counted; both CIBIL scores reviewed." },
      ]}
      cta={{
        headline: "Send the use-case document. NEFT in 48 hours.",
        body: "PAN + last 3 salary slips + last 6 months' bank statement + hospital invoice / fee challan. We'll come back within 30 minutes with indicative rate — sanction in 24 hours, NEFT in 48.",
        primary:   { label: "Get an urgent PL quote", to: "/apply?family=PL" },
        secondary: { label: "Read more on PL",         to: "/pl" },
      }}
    />
  );
}
