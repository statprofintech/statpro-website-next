"use client";

import { Zap, Wallet, BadgePercent } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Personal Loan page", to: "/pl" };

const config = {
  hero: {
    eyebrow: "PL · Salary-account pre-approved",
    title: "Salary account at HDFC / Kotak / Bajaj?",
    accent: "10-second sanction, 50 bps below published floor.",
    lede: "Salary-account holders at HDFC, Kotak, Bajaj and ICICI almost always have a pre-approved PL offer running silently. Acceptance is in-app, sanction in seconds, disbursal to the same salary account in minutes — at 50 bps below the published rate floor.",
    bullets: [
      "10-second sanction for HDFC pre-approved profiles.",
      "50 bps discount vs published floor (account-vintage benefit).",
      "₹0 paperwork — fully in-app via salary-account banking app.",
    ],
    stats: [
      { v: "10 sec",  l: "Sanction TAT (pre-approved)" },
      { v: "−50 bps", l: "Discount vs published floor" },
      { v: "9.40%",   l: "HDFC pre-approved floor" },
      { v: "₹50 L",   l: "Max ticket per lender" },
    ],
  },
  pillars: {
    eyebrow: "Why salary-account pre-approval is the cleanest PL route",
    title: "Three structural advantages built into bank infrastructure.",
    items: [
      { icon: Zap,           title: "10-second sanction",
        body: "Banks have already evaluated your salary credits, FOIR and CIBIL. Pre-approval is a silent score; acceptance is just an in-app tap. Sanction in seconds, disbursal in minutes." },
      { icon: BadgePercent,  title: "50 bps account-vintage discount",
        body: "1+ year salary account vintage at HDFC / Kotak / Bajaj unlocks 50 bps below their published PL floor. Compounds over loan life — ~₹35 K saved on a ₹15 L × 5 yr PL." },
      { icon: Wallet,        title: "EMI auto-debit from salary account",
        body: "EMI debits from the same salary account that received the disbursal. No NACH setup, no missed-EMI risk from account-mismatch issues." },
    ],
  },
  numbers: {
    eyebrow: "Salary-account pre-approved rates",
    title: "Across the panel — for clean profiles with 1+ year vintage.",
    stats: [
      { v: "9.40%",  l: "HDFC pre-approved floor",       sub: "vs published 9.90%" },
      { v: "10.49%", l: "Kotak pre-approved floor",       sub: "vs published 10.99%" },
      { v: "10.50%", l: "Bajaj pre-approved floor",       sub: "vs published 11.00%" },
      { v: "10.99%", l: "ICICI pre-approved (case-by-case)", sub: "vs published 11.50%" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹20 L pre-approved PL for a salaried professional with 6-yr HDFC salary-account vintage.",
    narrative: "Salaried tech professional, ₹2.5 L net monthly, CIBIL 822, HDFC salary account holder for 6 years (high vintage). Wanted ₹20 L for a one-time investment. Pre-approved offer in HDFC app showed ₹35 L limit at 9.40%. Accepted ₹20 L × 5 yrs; sanctioned in seconds, credited to same account in minutes.",
    ledger: [
      { k: "Borrower: Tech professional, Bengaluru", v: "" },
      { k: "Net monthly income",                      v: "₹2,50,000" },
      { k: "CIBIL",                                   v: "822" },
      { k: "HDFC salary account vintage",              v: "6 years" },
      { k: "Pre-approved offer in app",                v: "₹35,00,000 limit" },
      { k: "Accepted ticket",                          v: "₹20,00,000" },
      { k: "Tenure",                                   v: "5 years" },
      { k: "Lender",                                   v: "HDFC pre-approved", highlight: true },
      { k: "Rate",                                     v: "9.40% reducing", highlight: true },
      { k: "EMI",                                      v: "₹42,000/mo" },
      { k: "Sanction TAT",                             v: "10 seconds" },
      { k: "Disbursal TAT",                            v: "Same minute (to salary account)" },
    ],
  },
  eligibility: {
    eyebrow: "Pre-approved PL qualification",
    title: "Hard rules for the discount.",
    qualifies: [
      "Salary account at HDFC / Kotak / Bajaj / ICICI for 1+ year (longer = better)",
      "Net monthly income ≥ ₹50 K (banks: ₹35 K minimum, ₹50 K for the 50 bps discount)",
      "CIBIL 750+ (800+ for HDFC's 9.40% floor)",
      "No salary-credit gaps in last 12 months",
      "Existing FOIR < 50% (after the new PL EMI)",
      "Employer in the lender's preferred-list (most large IT, finance, manufacturing companies)",
    ],
    also: [
      "Account-vintage interacts with rate — 1 yr = 25 bps below published, 3+ yrs = 50 bps below",
      "If you've moved jobs but kept the salary account, vintage continues — only the credit pattern changes",
      "Bajaj Salaried Pro Bundle (BSPB) gives an additional 25 bps off if you have a Bajaj credit card too",
    ],
  },
  faqs: [
    { q: "How do I check if I have a pre-approved PL offer?",
      a: "Open your salary-account bank app — pre-approved offers are usually surfaced on the home screen or under 'Loans / Quick PL'. Doesn't always mean the cheapest offer though — we always cross-check against 2–3 other lenders." },
    { q: "Will accepting the in-app offer hurt my CIBIL?",
      a: "Pre-approved acceptance triggers a soft pull (not hard). The new loan account does add a credit line to your report, but the impact is minimal for clean profiles. Most users see CIBIL stable or slightly up post-acceptance." },
    { q: "Can I negotiate the pre-approved rate further?",
      a: "Sometimes — call the lender's relationship-manager line and ask for the 'salary-account vintage rate'. Some lenders give an additional 10–15 bps off for HNI profiles. We help you ask the right question." },
    { q: "What if my employer isn't on the preferred list?",
      a: "Pre-approved offers may not surface, but standard PL is still available — typically at published floor (no vintage discount). Smaller employer = tighter underwriting on TAT and ticket, but rate is the same." },
    { q: "Should I use LAS or LAP instead?",
      a: "If you have securities → LAS at 9.25% is comparable to HDFC pre-approved 9.40% AND more flexible (OD revolving). If you have property → OD-LAP at 8–9% is cheapest by miles. PL pre-approved wins only on speed (10 sec)." },
  ],
  cta: {
    headline: "Salary account at HDFC / Kotak / Bajaj? Tap your in-app offer.",
    body: "We compare pre-approved across the panel + standard-route alternatives in parallel. One working day to confirm your sharpest rate.",
    primary:   { label: "Get a pre-approved PL quote", to: "/apply?family=PL" },
    secondary: { label: "See main PL page",             to: "/pl" },
  },
};

export default function PlSalaryAccountPageV2() {
  return <MarketingLandingLayout family="PL" parent={PARENT} config={config} />;
}
