"use client";

import { Heart, GraduationCap, Zap } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Personal Loan page", to: "/pl" };

const config = {
  hero: {
    eyebrow: "PL · Medical / education sub-products",
    title: "Medical bill or tuition fee?",
    accent: "Sanctioned same-day, sub-product pricing.",
    lede: "Use-case sub-products on Tata Capital and Bajaj Finserv with same-day sanction for medical emergencies. Sharper pricing than vanilla PL because the use-case is well-understood by the lender. Education sub-products bundle moratorium options.",
    bullets: [
      "Same-day sanction for medical emergencies (Tata, Bajaj).",
      "Sub-product pricing 25–75 bps below vanilla PL.",
      "Education variants offer moratorium till course-end.",
    ],
    stats: [
      { v: "Same-day", l: "Medical emergency sanction" },
      { v: "10.99%",   l: "Tata Capital Medical PL floor" },
      { v: "Moratorium", l: "Available on education PL" },
      { v: "₹50 L",    l: "Max ticket per lender" },
    ],
  },
  pillars: {
    eyebrow: "Why use-case sub-products beat vanilla PL",
    title: "Three structural advantages from purpose-tagged underwriting.",
    items: [
      { icon: Zap,            title: "Same-day medical sanction",
        body: "Tata Capital and Bajaj Finserv both run dedicated Medical Emergency desks with same-day sanction + direct-to-hospital disbursal. Genuine emergency use-case." },
      { icon: GraduationCap,  title: "Education with moratorium",
        body: "Education-tagged PL on most lenders offers interest-only moratorium till course completion. Repayment starts once you / your child is earning." },
      { icon: Heart,          title: "Sub-product pricing",
        body: "Use-case-tagged PL gets 25–75 bps lower rate than vanilla. The lender prices for use-case-specific default behaviour (medical / education default rates are below SME PL avg)." },
    ],
  },
  numbers: {
    eyebrow: "Sub-product rate card",
    title: "Where these variants sit vs vanilla PL.",
    stats: [
      { v: "10.99%", l: "Tata Capital Medical PL",    sub: "vs vanilla 11.50%" },
      { v: "11.50%", l: "Bajaj Finserv Medical PL",   sub: "Same-day disbursal" },
      { v: "11.99%", l: "HDFC Education PL",           sub: "With course-end moratorium" },
      { v: "12.50%", l: "Tata Capital Education PL",   sub: "With course-end moratorium" },
    ],
  },
  example: {
    eyebrow: "A worked medical example",
    title: "₹8 L same-day Medical PL for a Kolkata-based salaried borrower.",
    narrative: "Salaried borrower, ₹95 K net monthly, CIBIL 778. Mother diagnosed with surgery requirement; ₹8 L hospital bill due in 48 hours. Routed to Tata Capital Medical PL desk; sanction approved in 4 hours, direct disbursal to hospital next morning. Rate 10.99% × 5 yrs.",
    ledger: [
      { k: "Use case",                       v: "Mother's surgery — emergency" },
      { k: "Hospital bill",                  v: "₹8,00,000 (48-hr deadline)" },
      { k: "Borrower: Salaried, Kolkata",    v: "" },
      { k: "Net monthly income",              v: "₹95,000" },
      { k: "CIBIL",                          v: "778" },
      { k: "Lender",                         v: "Tata Capital Medical PL", highlight: true },
      { k: "Rate",                           v: "10.99% × 5 yrs", highlight: true },
      { k: "EMI",                            v: "₹17,400/mo" },
      { k: "Sanction TAT",                    v: "4 hours" },
      { k: "Disbursal mode",                 v: "Direct to hospital next morning" },
    ],
  },
  eligibility: {
    eyebrow: "Medical / education PL qualification",
    title: "Salaried-only — same hard rules as vanilla PL.",
    qualifies: [
      "Salaried with 2+ years' total experience (1+ year current employer)",
      "Net monthly income ≥ ₹35 K (banks) or ₹25 K (NBFCs)",
      "Age 21–58",
      "CIBIL 700+ (banks), 650+ (NBFCs)",
      "For medical: hospital bill / pre-admission letter as use-case proof",
      "For education: admission letter / fee structure as use-case proof",
    ],
    also: [
      "Education PL with moratorium: repayment starts at course completion + 6 months grace",
      "Medical PL: lender can disburse direct to hospital — eliminates use-of-funds verification overhead",
      "Both variants accept co-applicant (spouse / parent) for higher eligibility",
    ],
  },
  faqs: [
    { q: "Why is Medical PL cheaper than vanilla PL?",
      a: "Medical-emergency PL has lower historical default rates than discretionary-spend PL. Lenders price the use-case-specific risk, hence the 50–75 bps concession." },
    { q: "What's the moratorium on Education PL?",
      a: "Interest-only servicing during the course (typically 2–4 yrs) + 6-month grace post-completion. Principal EMI starts thereafter. Total tenure: course duration + grace + 5–7 yrs principal repayment." },
    { q: "Will the lender disburse direct to the hospital?",
      a: "Yes — most Medical PL desks (Tata, Bajaj, HDFC) offer direct-to-hospital disbursal once you provide the bill / pre-admission letter. Eliminates use-of-funds verification post-disbursal." },
    { q: "Is medical PL interest tax-deductible?",
      a: "Section 80DDB allows deduction up to ₹1 L for specified medical conditions (₹1.4 L for senior citizens). Personal Loan interest itself isn't deductible — but the medical expense it funded may be. Consult your CA." },
    { q: "Should I use LAS or LAP instead for medical emergencies?",
      a: "If you have securities — LAS at 9.25% disburses in 10 minutes. If you have property — OD-LAP at 8–9% disburses in 14 days (slower but cheapest). Medical PL is the right route only if you don't have either." },
  ],
  cta: {
    headline: "Medical emergency or tuition fee? Send the bill / admission letter.",
    body: "We'll route to the right Medical / Education PL desk. Same-day sanction for medical; education with moratorium options. One working day to a panel comparison.",
    primary:   { label: "Get a use-case PL quote", to: "/apply?family=PL" },
    secondary: { label: "See main PL page",         to: "/pl" },
  },
};

export default function PlMedicalEducationPageV2() {
  return <MarketingLandingLayout family="PL" parent={PARENT} config={config} />;
}
