"use client";

import { Globe, Banknote, ShieldCheck } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main LRD page", to: "/lrd" };

const config = {
  hero: {
    eyebrow: "LRD · for NRI property owners",
    title: "Indian rental income?",
    accent: "Funded — even from abroad.",
    lede: "If you're an NRI owning rented commercial property in India, our LRD panel funds against the rental waterfall. Repatriable structure, NRO escrow, full PAN-OCI/PIO compliance — same panel-floor pricing residents get.",
    bullets: [
      "Up to 85% NPV discounting on Indian rental income.",
      "NRO-escrow structure routes rentals → EMI service.",
      "End-to-end FEMA + KYC documentation managed by us.",
    ],
    stats: [
      { v: "85% NPV", l: "Same as residents" },
      { v: "20 yrs",  l: "Maximum tenure" },
      { v: "NRO",     l: "Escrow account currency" },
      { v: "OCI/PIO", l: "Eligible borrower categories" },
    ],
  },
  pillars: {
    eyebrow: "Why NRI LRD needs a specialist desk",
    title: "Three things ordinary lender desks trip on with NRI files.",
    items: [
      { icon: Globe,        title: "Cross-border KYC",
        body: "Apostilled passport, OCI card, overseas address proof, NRE/NRO bank linkage — we handle the documentation shuttle so you don't fly in for paperwork." },
      { icon: Banknote,     title: "NRO-escrow setup",
        body: "Rentals deposit into a dedicated NRO escrow that auto-services the EMI. Surplus rental sweeps to your operating NRO account monthly." },
      { icon: ShieldCheck,  title: "FEMA-compliant repatriation",
        body: "If you want to repatriate the surplus, structure complies with FEMA Schedule 4 limits. We bring in the lender's FEMA team at sanction stage." },
    ],
  },
  numbers: {
    eyebrow: "NRI LRD vs resident LRD",
    title: "Mostly the same. A few cross-border-specific tweaks.",
    stats: [
      { v: "Same",    l: "Rate floor",                 sub: "8.20% on premium commercial" },
      { v: "+30 d",   l: "Sanction TAT",                sub: "vs resident LRD — KYC overhead" },
      { v: "85% NPV", l: "Discounting same as resident" },
      { v: "Repat",   l: "Surplus repatriable",         sub: "Per FEMA Schedule 4 limits" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹15 Cr LRD for a US-based OCI owner of a commercial office in Bengaluru.",
    narrative: "OCI cardholder in Texas, owned a 6,000 sq.ft. Grade-A office in Whitefield leased to a UK MNC for 10-yr lock-in at ₹4.8 L/month. Wanted ₹15 Cr LRD for an Indian residential investment. We routed to Bajaj Finserv's NRI desk; placed at 9.50% with 12-yr tenure, NRO escrow set up, all paperwork via apostille + courier — borrower never flew in.",
    ledger: [
      { k: "Borrower: OCI, Texas USA",            v: "" },
      { k: "Property: 6k sq.ft. Grade-A office",   v: "Whitefield, Bengaluru" },
      { k: "Property valuation",                    v: "₹25,00,00,000" },
      { k: "Tenant",                                v: "UK MNC, 10-yr lock-in" },
      { k: "Monthly rental",                        v: "₹4,80,000" },
      { k: "Eligible LRD (85% NPV)",                v: "₹16,80,00,000" },
      { k: "Sanction approved",                     v: "₹15,00,00,000", highlight: true },
      { k: "Lender",                                v: "Bajaj Finserv NRI desk", highlight: true },
      { k: "Rate",                                  v: "9.50% floating" },
      { k: "Tenure",                                v: "12 years" },
      { k: "Sanction TAT",                          v: "42 days end-to-end" },
    ],
  },
  eligibility: {
    eyebrow: "NRI LRD qualification",
    title: "Borrower categories + property + tenant rules.",
    qualifies: [
      "Indian passport holder (NRI), OCI cardholder, or PIO cardholder",
      "Property in India, in your name (clear title), commercial / industrial",
      "Tenant is a registered company under Companies Act (Pvt Ltd / Public Ltd / LLP / MNC)",
      "Registered lease deed with weighted-avg lock-in ≥ 36 months",
      "PAN issued to you (NRIs without PAN need to apply first — we help)",
      "NRO account in your name in India (we help open if not already)",
    ],
    also: [
      "Joint applications with resident family member (spouse, parent) accepted on most lenders — improves serviceability",
      "If the property is held in an Indian Pvt Ltd / SPV, the borrower entity is the SPV and the NRI is personal guarantor",
      "Repatriation of surplus rental is allowed per FEMA Schedule 4 — typically up to USD 1M per FY",
    ],
  },
  faqs: [
    { q: "Do I need to be physically in India for the LRD sanction?",
      a: "No. Apostilled documents + courier + video-KYC cover most of the process. The only physical step is original-document mortgage registration at the property's sub-registrar — we coordinate a Power of Attorney holder (usually your CA or a family member) to handle that." },
    { q: "Which currency does the EMI debit?",
      a: "INR — from your NRO account. The escrow auto-debits monthly. Surplus rental (after EMI) sweeps to your operating NRO account; from there you can repatriate per FEMA limits if needed." },
    { q: "What if my tenant pays rent in foreign currency?",
      a: "Tenant payments must come into your NRO/escrow in INR. If the tenant is foreign-domiciled and pays in USD/GBP, the conversion happens at the tenant's remittance side — your end always sees INR." },
    { q: "What's the FEMA repatriation limit?",
      a: "Schedule 4 of FEMA allows up to USD 1M per financial year for sale-of-assets / inherited-asset repatriation. Rental income surplus follows the same window. Talk to your CA on your specific limit." },
    { q: "How long does NRI LRD sanction take vs resident?",
      a: "30–45 days vs 14–21 for residents. Extra time covers cross-border KYC, NRO escrow setup, and POA execution for the property mortgage step. We pre-trigger all the time-consuming steps in parallel." },
  ],
  cta: {
    headline: "NRI / OCI? Send the lease + tenant details. We'll do the cross-border legwork.",
    body: "We coordinate KYC across jurisdictions, set up the NRO escrow with the lender, and handle FEMA documentation end-to-end. You can sign everything via apostille + courier — no India trip needed for sanction.",
    primary:   { label: "Talk to an NRI desk", to: "/apply?family=LRD" },
    secondary: { label: "See main LRD page",   to: "/lrd" },
  },
};

export default function LrdNriLandlordPageV2() {
  return <MarketingLandingLayout family="LRD" parent={PARENT} config={config} />;
}
