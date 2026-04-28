"use client";

import { Stethoscope, BadgePercent, Briefcase } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Business Loan page", to: "/bl" };

const config = {
  hero: {
    eyebrow: "Business Loan · Doctor's loan variant",
    title: "Doctor / medical professional?",
    accent: "Profession-tagged BL — 50–150 bps sharper than vanilla.",
    lede: "Most NBFCs run a dedicated Doctor's Loan desk with sharper pricing than vanilla unsecured BL. Sized off practice income (not just ITR), with optional equipment-finance bundling. HDFC Doctor Loan from 11.25%; Bajaj from 13.5%.",
    bullets: [
      "Practice-income underwriting (vs just personal ITR).",
      "Equipment-finance bundling — MRI, dialysis, ultrasound.",
      "Sharper pricing: 11.25% (HDFC) vs vanilla BL 15.50%+.",
    ],
    stats: [
      { v: "11.25%",  l: "HDFC Doctor Loan floor" },
      { v: "₹1 Cr",   l: "Maximum unsecured ticket" },
      { v: "8 yrs",   l: "Maximum tenure (96 months)" },
      { v: "3 yrs",   l: "Min practice vintage" },
    ],
  },
  pillars: {
    eyebrow: "Why Doctor's Loan beats vanilla BL",
    title: "Three structural advantages built around medical practice.",
    items: [
      { icon: Stethoscope,  title: "Practice-income underwriting",
        body: "Lender sizes the loan off your medical-council registration + clinic / hospital income trail, not just personal ITR. Eligibility ladder is significantly higher." },
      { icon: BadgePercent, title: "50–150 bps sharper rate",
        body: "HDFC Doctor Loan 11.25% (vs vanilla 15.50%+). Bajaj Doctor Loan 13.5%. The premium of medical-profession credit risk is below market." },
      { icon: Briefcase,    title: "Equipment finance bundle",
        body: "MRI, dialysis, ultrasound, dental chair financing bundled with working capital — single sanction, single EMI, hypothecation-backed pricing." },
    ],
  },
  numbers: {
    eyebrow: "Doctor's Loan rate card",
    title: "Across our active panel.",
    stats: [
      { v: "11.25%", l: "HDFC Doctor Loan",      sub: "5+ yr practice, MCI registered" },
      { v: "13.50%", l: "Bajaj Doctor Loan",      sub: "Includes equipment-finance variant" },
      { v: "13.50%", l: "Tata Capital Healthcare", sub: "Hospitals + standalone clinics" },
      { v: "14.00%", l: "Aditya Birla Doctor",     sub: "Mid-market practice" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹65 L Doctor's Loan for a Kolkata-based pathologist (clinic + diagnostic lab).",
    narrative: "Pathologist, 7-yr practice vintage, MCI + WBMC registered, runs an own clinic + diagnostic lab. Wanted ₹65 L for new MRI machine + 3-month working capital ramp. Routed to HDFC Doctor Loan; placed at 11.25% with 7-yr tenure, MRI hypothecated as additional security.",
    ledger: [
      { k: "Borrower: Pathologist, Kolkata", v: "" },
      { k: "Practice vintage",                v: "7 years" },
      { k: "Practice net income (last 2 ITRs avg)", v: "₹1.05 Cr/yr" },
      { k: "Loan requested",                  v: "₹65,00,000" },
      { k: "Use of funds",                    v: "MRI machine + 3-mo WC" },
      { k: "Lender",                          v: "HDFC Doctor Loan", highlight: true },
      { k: "Rate",                            v: "11.25% floating", highlight: true },
      { k: "Tenure",                          v: "7 years" },
      { k: "Additional security",             v: "MRI machine hypothecation" },
      { k: "EMI",                             v: "₹1,12,000/mo" },
      { k: "Sanction TAT",                    v: "9 days" },
    ],
  },
  eligibility: {
    eyebrow: "Doctor's Loan qualification",
    title: "Profession + practice + clean trail.",
    qualifies: [
      "MBBS / BDS / BAMS / BHMS / BPT / BPharma / postgrad — MCI / WBMC / equivalent council registered",
      "Practice vintage 3+ years (own clinic, hospital partnership, or salaried in hospital)",
      "Annual income ≥ ₹15 L (some lenders ≥ ₹25 L)",
      "Owner CIBIL 700+ (banks) or 650+ (NBFCs)",
      "Last 12 months' bank statement with no bounces",
      "Last 2 ITRs filed + computation, no significant variances",
    ],
    also: [
      "Equipment-finance variant: MRI / dialysis / ultrasound / dental chair hypothecation can shave 50–75 bps off ROI",
      "Multi-doctor partnership clinics: lender sizes off the partnership P&L, not individual ITRs",
      "Hospital-employed doctors (salaried) qualify on 2+ years' continuous employment + practice income from private consultations",
    ],
  },
  faqs: [
    { q: "Why is Doctor's Loan rate so much lower than vanilla BL?",
      a: "Medical profession is one of the lowest-default segments in India. NBFCs price for actual experienced loss rates — HDFC's published floor of 11.25% reflects this. Vanilla BL prices for SME default rates which run 3–5x higher." },
    { q: "Can I get equipment finance bundled?",
      a: "Yes — Bajaj, HDFC and Tata all offer combo facilities. Working capital + equipment-finance in one sanction with single EMI. Equipment hypothecation as additional security typically shaves 50–75 bps off the ROI." },
    { q: "I'm a salaried hospital doctor — can I still get this?",
      a: "Yes — 2+ years' continuous hospital employment + private-practice income from consultations qualifies. Some HFCs (Bajaj) do dedicated Salaried Doctor sub-products with sharper rates than vanilla salaried PL." },
    { q: "Can I include partnership-clinic income?",
      a: "Yes — lender sizes off the partnership P&L share + your individual ITR. Multi-doctor partnership clinics often get higher ticket sizes than single-doctor practices." },
    { q: "What if my practice is in a tier-2/3 city?",
      a: "Most banks decline tier-3; HDFC, Bajaj and Tata all actively underwrite tier-2. Cholamandalam goes deepest into tier-3 medical practices." },
  ],
  cta: {
    headline: "Doctor / medical professional? Send your registration + ITR.",
    body: "We'll route to the right Doctor's Loan desk and bring you the sharpest rate within one working day. Equipment-finance bundling included if you need it.",
    primary:   { label: "Get a Doctor Loan quote", to: "/apply?family=BL&variant=Doctor%27s%20loan" },
    secondary: { label: "See main BL page",          to: "/bl" },
  },
};

export default function BlDoctorLoanPageV2() {
  return <MarketingLandingLayout family="BL" parent={PARENT} config={config} />;
}
