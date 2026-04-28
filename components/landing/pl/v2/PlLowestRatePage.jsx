"use client";

import { Wallet, BadgePercent, Zap } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Personal Loan page", to: "/pl" };

const config = {
  hero: {
    eyebrow: "PL · Lowest-rate route",
    title: "Floor 9.90%,",
    accent: "but only on a genuinely clean profile.",
    lede: "Personal Loan rates fan out wider than any other product on our panel — 9.90% to 24% depending on CIBIL, salary, account-vintage, employer category. We pull from 3–4 lenders simultaneously and bring you the actual offer, not the marketing-floor rate.",
    bullets: [
      "Pre-approved offers pulled from 3–4 lenders in parallel.",
      "9.90% achievable on CIBIL 800+, salary > ₹1 L, salary-account holder.",
      "10-second disbursal on HDFC pre-approved profiles.",
    ],
    stats: [
      { v: "9.90%",   l: "HDFC Bank floor (pre-approved)" },
      { v: "10 sec",  l: "Disbursal claim (pre-approved)" },
      { v: "₹50 L",   l: "Max per-lender ticket" },
      { v: "8",       l: "PL-active lenders on panel" },
    ],
  },
  pillars: {
    eyebrow: "Why our PL hits the actual floor",
    title: "Three structural advantages over a single bank-app application.",
    items: [
      { icon: Zap,           title: "Multi-lender parallel pull",
        body: "We pull pre-approved offers from 3–4 lenders simultaneously. Your in-app HDFC offer is rarely the sharpest — comparing across the panel typically gets 50–150 bps better." },
      { icon: BadgePercent,  title: "Sub-product matching",
        body: "Wedding / medical / travel / education sub-products typically save 25–75 bps over vanilla PL. We tag the use-case at intake and route to the lender with the deepest sub-product concession." },
      { icon: Wallet,        title: "Salary-account leverage",
        body: "If you have a salary account at HDFC / Kotak, those banks' pre-approved offers are typically 50 bps below their published floor. We surface this discount automatically." },
    ],
  },
  numbers: {
    eyebrow: "What the floor actually looks like",
    title: "PL rate card across our panel.",
    stats: [
      { v: "9.90%",   l: "HDFC Bank pre-approved",      sub: "Salary account · CIBIL 800+" },
      { v: "10.99%",  l: "Kotak Mahindra",               sub: "Salary + bonus / RSU profile" },
      { v: "10.99%",  l: "Tata Capital",                 sub: "10-min digital sanction" },
      { v: "11.00%",  l: "Bajaj Finserv",                sub: "Sub-product variants available" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹15 L PL for a tech professional with an HDFC salary account.",
    narrative: "Salaried tech professional, ₹2.1 L net monthly, CIBIL 815, HDFC salary account holder for 4 years. Wanted ₹15 L for a 4-year tenure. We pulled pre-approved offers — HDFC, Kotak, Bajaj, Tata. HDFC's pre-approved offer landed at 9.90% (50 bps below their published floor for non-account-holders).",
    ledger: [
      { k: "Borrower: Tech professional, Bengaluru", v: "" },
      { k: "Net monthly income",                      v: "₹2,10,000" },
      { k: "CIBIL",                                   v: "815" },
      { k: "HDFC salary account vintage",              v: "4 years" },
      { k: "Loan requested",                          v: "₹15,00,000" },
      { k: "Tenure",                                  v: "4 years" },
      { k: "Lender",                                  v: "HDFC Bank pre-approved", highlight: true },
      { k: "Rate",                                    v: "9.90% reducing", highlight: true },
      { k: "EMI",                                     v: "₹38,000/mo" },
      { k: "Total interest over 4 yrs",                v: "₹3,24,000" },
      { k: "Sanction TAT",                            v: "10 seconds (pre-approved)" },
    ],
  },
  eligibility: {
    eyebrow: "Lowest-rate PL qualification",
    title: "Hard rules for the 9.90% floor.",
    qualifies: [
      "Salaried with 2+ years' total experience (1+ year current employer)",
      "Net monthly income ≥ ₹1 L for the 9.90% floor; ≥ ₹50 K for the next band",
      "CIBIL 800+ for the floor; 750+ for sub-12% rates; 700+ for sub-15%",
      "Salary account at HDFC / Kotak for an additional 50 bps off",
      "Employer in the lender's preferred-list (most large IT, finance, manufacturing companies)",
      "FOIR < 50% (existing EMIs ≤ 50% of net income)",
    ],
    also: [
      "Profession-tagged sub-products (Doctor / CA) get sharper rates than vanilla salaried PL — even sharper than the 9.90% floor",
      "Government / defence employees: separate desk with sharper rates regardless of CIBIL band",
      "PL Balance Transfer typically doesn't make sense — see PL → LAP comparison if you have property",
    ],
  },
  faqs: [
    { q: "Why do PL rates fan so wide (9.90% to 24%)?",
      a: "PL is unsecured, so the lender prices for individual credit risk + employer concentration risk + salary-cycle stability. CIBIL 800+ vs 700 alone moves the rate by 200–400 bps. Salary band, employer, account-vintage all add to the spread." },
    { q: "How does the 10-second pre-approved disbursal work?",
      a: "Banks like HDFC maintain pre-approved PL offers for salary-account holders — they've already evaluated salary credits, FOIR and CIBIL. Acceptance is just an in-app tap; disbursal is auto-credit to the same salary account." },
    { q: "What if I'm not on a pre-approved offer?",
      a: "Standard PL sanction TAT is 24–48 hours — still fast vs anything else. CIBIL 800+ profiles often get 11–12% even without pre-approval. We'll always check pre-approval status before pitching the standard route." },
    { q: "Should I do a PL or use my LAS?",
      a: "If you have a securities portfolio (equity / MF / SGB), LAS is almost always cheaper (9.25% vs 9.90% PL floor) AND more flexible (OD revolving vs fixed EMI). PL only wins on speed (10-sec vs 10-min for LAS)." },
    { q: "What's your fee?",
      a: "₹0 to you — Statpro is paid by the lender on disbursal. The lender's processing fee (0.99–2.5% of ticket) is the only cost. We negotiate it down where we can." },
  ],
  cta: {
    headline: "Want the actual floor? Let us pull pre-approved offers across 3–4 lenders.",
    body: "Send your salary slip + CIBIL band. We'll come back within minutes with the sharpest pre-approved offer — and the standard-route alternatives if you don't have one.",
    primary:   { label: "Get a sharp PL quote", to: "/apply?family=PL" },
    secondary: { label: "See main PL page",      to: "/pl" },
  },
};

export default function PlLowestRatePageV2() {
  return <MarketingLandingLayout family="PL" parent={PARENT} config={config} />;
}
