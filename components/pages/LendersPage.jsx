"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, X, Sparkles, ShieldCheck, Clock,
  Building2, Banknote, Landmark, Wallet, TrendingUp, MapPin, FileCheck, Scale,
  Layers, Filter, Phone, MinusCircle, PlusCircle, Gauge, Network, Award,
} from "lucide-react";
import { PARTNER_PANEL, CATEGORY_LABELS, FAMILY_LABELS } from "@/lib/lenders";

// ─────────────────────────────────────────────────────────────────────────────
// Page-specific data
// ─────────────────────────────────────────────────────────────────────────────
const PARTNER_COUNT = PARTNER_PANEL.length; // 19

const CATEGORY_META = {
  PRIVATE_BANK:        { icon: Landmark,   blurb: "Sharpest pricing on clean, salaried, RLLR-linked profiles.",    floor: "8.55%" },
  PSU_BANK:            { icon: Landmark,   blurb: "Long tenure, deep ticket capacity, slower TAT.",                 floor: "—"     },
  SMALL_FINANCE_BANK:  { icon: Building2,  blurb: "Tier-2/3 distribution, semi-formal income acceptance.",          floor: "10.50%" },
  HOUSING_FINANCE:     { icon: Building2,  blurb: "NHB-regulated. Long tenure, residential bias, gentle on CIBIL.", floor: "8.70%" },
  NBFC_LARGE:          { icon: Banknote,   blurb: "Wide collateral, fast TAT, parallel pitching sweet spot.",       floor: "9.00%" },
  NBFC_SME:            { icon: Wallet,     blurb: "Self-employed, business cash-flow underwriting, niche assets.",  floor: "10.50%" },
  NBFC_LAS:            { icon: TrendingUp, blurb: "T+1 sanction against listed equity, MF, bonds.",                 floor: "9.50%" },
};

const FEATURED = [
  { id: "hdfc-bank",       name: "HDFC Bank",          category: "Private Bank",      tag: "Sharpest LAP rate",   floor: "8.55%", families: ["LAP", "HL", "BL"], note: "RLLR-linked. Best for salaried + clean residential collateral." },
  { id: "kotak-bank",      name: "Kotak Mahindra",     category: "Private Bank",      tag: "RSU-friendly",        floor: "9.50%", families: ["LAP", "HL", "LAS"], note: "Funds RSU-heavy salaried profiles other banks decline." },
  { id: "bajaj-finserv",   name: "Bajaj Finserv",      category: "Large NBFC",        tag: "Largest ticket",      floor: "8.99%", families: ["LAP", "LRD", "BL", "PL"], note: "Up to ₹50 Cr single ticket, self-employed friendly." },
  { id: "tata-capital",    name: "Tata Capital",       category: "Large NBFC",        tag: "Digital sanction",    floor: "9.00%", families: ["LAP", "LRD", "HL", "BL"], note: "End-to-end digital, sanction in 72 hours." },
  { id: "lt-finance",      name: "L&T Finance",        category: "Large NBFC",        tag: "Industrial assets",   floor: "8.70%", families: ["LAP", "LRD", "BL"], note: "Strong on factories, warehouses, industrial sheds." },
  { id: "piramal",         name: "Piramal Finance",    category: "Large NBFC",        tag: "Special-purpose",     floor: "10.00%", families: ["LAP", "LRD"], note: "Hospitals, schools, hotels — assets banks decline." },
];

const COVERAGE = [
  { id: "hdfc-bank",        LAP: true,  LRD: false, LAS: false, HL: true,  BL: true,  PL: true  },
  { id: "kotak-bank",       LAP: true,  LRD: true,  LAS: true,  HL: true,  BL: true,  PL: true  },
  { id: "axis-finance",     LAP: true,  LRD: true,  LAS: true,  HL: false, BL: true,  PL: false },
  { id: "bajaj-finserv",    LAP: true,  LRD: true,  LAS: false, HL: true,  BL: true,  PL: true  },
  { id: "tata-capital",     LAP: true,  LRD: true,  LAS: false, HL: true,  BL: true,  PL: true  },
  { id: "lt-finance",       LAP: true,  LRD: true,  LAS: false, HL: true,  BL: true,  PL: false },
  { id: "aditya-birla",     LAP: true,  LRD: true,  LAS: true,  HL: true,  BL: true,  PL: true  },
  { id: "cholamandalam",    LAP: true,  LRD: true,  LAS: false, HL: true,  BL: true,  PL: false },
  { id: "piramal",          LAP: true,  LRD: true,  LAS: false, HL: false, BL: false, PL: false },
  { id: "poonawalla",       LAP: true,  LRD: false, LAS: false, HL: false, BL: true,  PL: true  },
  { id: "lic-housing",      LAP: true,  LRD: false, LAS: false, HL: true,  BL: false, PL: false },
  { id: "sammaan-finserve", LAP: true,  LRD: false, LAS: false, HL: true,  BL: false, PL: false },
  { id: "lendingkart",      LAP: false, LRD: false, LAS: false, HL: false, BL: true,  PL: false },
  { id: "protium",          LAP: true,  LRD: false, LAS: false, HL: false, BL: true,  PL: false },
  { id: "profectus",        LAP: true,  LRD: true,  LAS: false, HL: false, BL: true,  PL: false },
  { id: "jiocredit",        LAP: false, LRD: false, LAS: true,  HL: false, BL: false, PL: false },
  { id: "mirae-asset",      LAP: false, LRD: false, LAS: true,  HL: false, BL: false, PL: false },
  { id: "jana-sfb",         LAP: true,  LRD: false, LAS: false, HL: true,  BL: true,  PL: false },
  { id: "unity-sfb",        LAP: true,  LRD: false, LAS: false, HL: true,  BL: true,  PL: false },
];

const FAMILIES = ["LAP", "LRD", "LAS", "HL", "BL", "PL"];

const VALUE_PROPS = [
  { icon: Scale,    title: "Parallel pitching, not waterfall",
    body: "Your file goes to 4–5 right-fit lenders simultaneously. They negotiate against each other — you sign the sharpest offer." },
  { icon: Filter,   title: "Right-fit, not every-fit",
    body: "We don't shotgun your file across 19 lenders. Each pitch is matched to the lender most likely to fund your specific profile and collateral." },
  { icon: Layers,   title: "Wider collateral acceptance",
    body: "Hospitals, schools, hotels, banquet halls, cold storage, industrial sheds — funded by NBFCs that specialise where banks decline." },
  { icon: Gauge,    title: "TAT we can quote",
    body: "First sanctions in 3–7 days for clean files. We track each lender's actual TAT, not their brochure." },
  { icon: ShieldCheck, title: "DSA — not aggregator",
    body: "You sign your loan agreement directly with the lender. We don't sit between you and your money." },
  { icon: Network,  title: "Single RM, all 19 lenders",
    body: "One advisor handles every lender conversation, every counter-offer, every legal query — for the life of the deal." },
];

const STANDARDS = [
  { title: "RBI-regulated only",
    body: "Every panel partner is a scheduled bank, NHB-registered HFC, RBI-registered NBFC, or AMFI-registered intermediary. No P2P, no fintech wrappers." },
  { title: "Live origination, not nameplate",
    body: "Each partner has actively sanctioned a deal in the last 90 days. No 'on the panel' relationships that don't disburse." },
  { title: "Disclosed pricing floor",
    body: "We track each lender's panel-floor rate weekly and only quote what's actually achievable for your profile." },
  { title: "Foreclosure transparency",
    body: "Every sanction we place comes with the foreclosure clause spelled out — written into the letter, not buried in the MITC." },
  { title: "Grievance escalation path",
    body: "Single advisor for first-line, partner-bank ombudsman for second, RBI Banking Ombudsman as backstop. Documented at sanction." },
  { title: "Annual panel review",
    body: "We re-rank every partner annually on TAT, sanction-to-disbursal hit rate, and post-disbursal service. Three lenders left the panel last year." },
];

const GEO = [
  { region: "Kolkata & Howrah",      depth: "All 19" },
  { region: "Durgapur · Asansol",    depth: "16 of 19" },
  { region: "Siliguri · North BG",   depth: "14 of 19" },
  { region: "Burdwan · Kharagpur",   depth: "12 of 19" },
  { region: "Pan-India · Tier-1",    depth: "All 19 (digital)" },
  { region: "Tier-2/3 outside WB",   depth: "11 of 19 (digital + RM travel)" },
];

const PROCESS = [
  { stage: "Match",     title: "Profile-to-panel match",      body: "We score your file across 7 dimensions and shortlist 4–5 lenders most likely to sanction at the sharpest rate." },
  { stage: "Pitch",     title: "Parallel pitch",              body: "Same file, same day, four-to-five lenders. Each gets the credit memo we authored — no re-explaining." },
  { stage: "Negotiate", title: "Counter & compare",           body: "First sanctions land. We push each lender on rate, fees and processing — and bring you the side-by-side." },
  { stage: "Close",     title: "Legal, technical, disbursal", body: "We coordinate the lender's panel valuer, lawyer and operations — you only step in to sign at disbursal." },
];

const FAQS = [
  { q: "Why these 19 specifically?",
    a: "These are the lenders we've tested at scale across LAP, LRD, LAS, HL, BL and PL — and where our placement-to-disbursal hit rate is above 80%. We don't add a partner just because they have a brand; they have to actually fund our deals." },
  { q: "Do you take a fee from me?",
    a: "No. Our placement fee is paid by the lender on disbursal — disclosed upfront in the sanction letter. You sign your loan agreement directly with the lender at the rate we negotiated." },
  { q: "Can I just go to one of these lenders directly?",
    a: "Of course — and many do. The reason most promoters route through us is parallel pitching. One application reaches 4–5 right-fit lenders the same day, and they negotiate against each other. The rate you sign is sharper than any single bank would offer you cold." },
  { q: "What if my profile is borderline?",
    a: "That's exactly when the panel earns its keep. Our SME-NBFC and HFC partners fund profiles that banks decline — first-time self-employed borrowers, lower CIBIL, special-purpose collateral. Talk to us before assuming you don't qualify." },
  { q: "How often does the panel change?",
    a: "We review every partner annually on TAT, sanction-to-disbursal hit rate and post-disbursal service. Three lenders left the panel in the last cycle. Onboarding a new partner takes 60–90 days of test-deal vetting before they go live." },
  { q: "Is my data shared with all 19?",
    a: "No. Your file is shared only with the 4–5 lenders we shortlist after the intake call — and you approve that shortlist before we send anything. Every partner is bound by a data-handling agreement that mirrors the RBI / DPDP norms." },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function LendersPage() {
  return (
    <div>
      <Hero />
      <ByTheNumbers />
      <CategoryStrip />
      <FeaturedPartners />
      <CoverageMatrix />
      <ValueProps />
      <Standards />
      <Geography />
      <HowWeWork />
      <ComplianceBand />
      <Faq />
      <FinalCta />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-14">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.4) 0%, rgba(79,139,255,0.15) 30%, transparent 60%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[640px] h-[640px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.32) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }} />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-[11px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-2.5 py-1 rounded-md font-bold">PANEL</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-white/55 font-semibold">Lender network</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-4">19 partners · 6 product families</div>
            <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <span>The lenders we actually place with,</span>{" "}
              <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                ranked by where each one shines.
              </span>
            </h1>
            <p className="mt-5 text-[15px] lg:text-[16.5px] text-white/70 leading-relaxed max-w-[600px]">
              We're not an aggregator with a 100-lender directory. These are 19 banks, NBFCs and HFCs we've tested at scale — where our sanction-to-disbursal hit rate is above 80%. Each partner has actively funded a deal in the last 90 days.
            </p>
            <ul className="mt-6 space-y-2.5 max-w-[600px]">
              {[
                "Parallel pitching — 4–5 right-fit lenders see your file the same day.",
                "Single RM coordinates every lender conversation, end-to-end.",
                "Annual panel review — three lenders left in the last cycle.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-relaxed">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-bright/20 border border-blue-bright/40 grid place-items-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-blue-bright" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/apply" className="inline-flex items-center gap-2 bg-blue hover:bg-blue-hover text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
                Pitch my file to the panel <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#coverage" className="inline-flex items-center gap-1.5 text-white/85 hover:text-white px-5 py-3.5 font-semibold text-[15px] border border-white/15 rounded-xl hover:bg-white/[0.06] transition">
                See coverage matrix
              </a>
            </div>
          </div>

          {/* Right panel — partner snapshot */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="px-6 lg:px-7 pt-5 pb-4 border-b border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-bright animate-pulse" />
                    <span className="text-[10.5px] uppercase tracking-wider font-bold text-blue-bright">Panel snapshot</span>
                  </div>
                  <div className="font-bold text-[16px] tracking-tight text-white">19 partners, 4 categories.</div>
                </div>
                <Network className="w-6 h-6 text-blue-bright/80" strokeWidth={1.8} />
              </div>
              <div className="p-6 lg:p-7">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { v: "19",    l: "Active partner lenders" },
                    { v: "6",     l: "Product families covered" },
                    { v: "8.55%", l: "Sharpest panel-floor rate" },
                    { v: "₹50 Cr",l: "Largest single ticket" },
                  ].map((s) => (
                    <div key={s.l} className="border-l-2 border-blue-bright/40 pl-3">
                      <div className="text-[26px] lg:text-[30px] font-extrabold tabular tracking-tight leading-none text-white">{s.v}</div>
                      <div className="mt-2 text-[11.5px] text-white/65 leading-snug">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                  {[
                    { i: ShieldCheck, l: "RBI-regulated" },
                    { i: Clock,       l: "7-day sanction" },
                    { i: Phone,       l: "Single RM" },
                  ].map((t) => (
                    <div key={t.l} className="flex flex-col items-center gap-1.5">
                      <t.i className="w-4 h-4 text-blue-bright" strokeWidth={2.2} />
                      <span className="text-[11px] text-white/65 font-semibold">{t.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ByTheNumbers() {
  const items = [
    { v: "19",    l: "Active lenders on the panel",     sub: "Banks, HFCs, NBFCs, SFBs" },
    { v: "6",     l: "Product families we place",        sub: "LAP · LRD · LAS · HL · BL · PL" },
    { v: "₹50 Cr",l: "Largest single-ticket sanction",   sub: "Through our LAP panel" },
    { v: "80%+",  l: "Sanction-to-disbursal hit rate",   sub: "On files we shortlist" },
    { v: "3–7 d", l: "Typical first-sanction TAT",       sub: "On clean, ready files" },
    { v: "₹0",    l: "What you pay us",                  sub: "Lender pays on disbursal" },
  ];
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">By the numbers</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            What 19 lenders, six product families and four years of placements look like in numbers.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <div key={s.l} className="rounded-2xl bg-surface-2 border border-rule p-6 hover:border-blue/30 transition">
              <div className="text-[36px] lg:text-[42px] font-extrabold text-ink tabular tracking-tight leading-none">{s.v}</div>
              <div className="mt-3 text-[14px] font-semibold text-ink-2">{s.l}</div>
              <div className="mt-1 text-[12.5px] text-ink-muted">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function CategoryStrip() {
  const grouped = useMemo(() => {
    return PARTNER_PANEL.reduce((acc, p) => {
      (acc[p.category] = acc[p.category] || []).push(p);
      return acc;
    }, {});
  }, []);

  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">By category</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Four lender archetypes — each one earns its slot for a reason.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            We split the panel into four functional categories. The category your file goes to depends on profile, ticket and collateral — not on who's paying us a higher referral.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([cat, partners]) => {
            const meta = CATEGORY_META[cat] || {};
            const Icon = meta.icon || Building2;
            return (
              <div key={cat} className="rounded-2xl bg-white border border-rule p-6 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ink text-white grid place-items-center">
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                  </div>
                  <div className="text-right">
                    <div className="text-[20px] font-extrabold text-ink tabular leading-none">{partners.length}</div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-soft font-semibold mt-1">on panel</div>
                  </div>
                </div>
                <h3 className="text-[16px] font-bold text-ink mb-1.5 tracking-tight">{CATEGORY_LABELS[cat] || cat}</h3>
                <p className="text-[13px] text-ink-muted leading-relaxed mb-4 flex-1">{meta.blurb}</p>
                <ul className="space-y-1.5 pt-4 border-t border-rule">
                  {partners.map((p) => (
                    <li key={p.id} className="flex items-center justify-between text-[13px] text-ink-2">
                      <span className="font-medium">{p.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-soft" />
                    </li>
                  ))}
                </ul>
                {meta.floor && meta.floor !== "—" && (
                  <div className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-blue bg-blue-soft px-2.5 py-1 rounded-md self-start">
                    <Sparkles className="w-3 h-3" /> Floor {meta.floor}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
const CARD_GRADIENTS = [
  "from-blue-deep via-blue to-blue-bright",
  "from-navy-deep via-navy to-blue-deep",
  "from-blue-deep via-indigo-700 to-blue",
  "from-navy via-blue-deep to-blue",
  "from-slate-800 via-blue-deep to-blue",
  "from-navy-deep via-navy to-blue-deep",
];

function FeaturedPartners() {
  return (
    <section className="bg-gradient-to-b from-surface-2 to-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="max-w-[680px]">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Featured partners</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Six lenders that anchor most of our placements.
            </h2>
            <p className="mt-4 text-[15px] text-ink-muted leading-relaxed">
              Each card shows the panel-floor rate that lender will quote for a clean profile, plus where they shine.
            </p>
          </div>
          <Link href="/apply" className="text-[14px] font-semibold text-blue hover:text-blue-hover inline-flex items-center gap-1">
            Get matched to the right one <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED.map((p, i) => {
            const gradient = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
            const isSharpest = i === 0;
            return (
              <div key={p.id} className="group relative">
                {isSharpest && (
                  <div className="absolute -top-2.5 left-5 z-10 inline-flex items-center gap-1 bg-coral text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-lg shadow-coral/30">
                    <Sparkles className="w-2.5 h-2.5" /> {p.tag}
                  </div>
                )}
                <div className={`relative aspect-[1.586/1] rounded-2xl bg-gradient-to-br ${gradient} text-white p-5 overflow-hidden shadow-xl shadow-ink/20 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-ink/25 transition`}>
                  <div className="absolute inset-0 pointer-events-none opacity-50">
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/15 blur-2xl" />
                    <div className="absolute -bottom-16 -left-12 w-44 h-44 rounded-full bg-black/25 blur-2xl" />
                  </div>
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-300 to-amber-500 shadow-inner" />
                      <span className="font-mono text-[10.5px] text-white/75">#{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-1">
                      <div className="text-[10px] uppercase tracking-wider text-white/65 font-bold">Floor rate from</div>
                      <div className="text-[36px] lg:text-[42px] font-extrabold tabular tracking-tight leading-none mt-1">{p.floor}</div>
                    </div>
                    <div className="mt-auto pt-3 border-t border-white/15">
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="text-[14px] font-bold tracking-tight truncate">{p.name}</div>
                        <div className="text-[10.5px] text-white/85 font-mono shrink-0 ml-2">{p.families.join(" · ")}</div>
                      </div>
                      <div className="text-[10.5px] text-white/70">{p.category}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 px-1 text-[11.5px] text-ink-muted leading-snug">
                  <span className="font-semibold text-ink-2">{p.tag}:</span> {p.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function CoverageMatrix() {
  const [filter, setFilter] = useState("ALL");
  const rows = useMemo(() => {
    const byId = Object.fromEntries(PARTNER_PANEL.map((p) => [p.id, p]));
    return COVERAGE
      .map((c) => ({ ...c, partner: byId[c.id] }))
      .filter((r) => r.partner)
      .filter((r) => filter === "ALL" || r[filter]);
  }, [filter]);

  const familyCounts = useMemo(() => {
    const out = {};
    for (const f of FAMILIES) out[f] = COVERAGE.filter((c) => c[f]).length;
    return out;
  }, []);

  return (
    <section id="coverage" className="bg-white py-20 lg:py-24 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="max-w-[680px]">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Coverage matrix</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Who funds what — across 19 lenders, six product families.
            </h2>
            <p className="mt-4 text-[15px] text-ink-muted leading-relaxed">
              Filter by product family to see exactly which partners we'd shortlist for your file.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setFilter("ALL")}
              className={`text-[12px] font-semibold px-3 py-1.5 rounded-full border transition ${filter === "ALL" ? "bg-ink text-white border-ink" : "bg-white text-ink-2 border-rule hover:border-blue/40"}`}
            >
              All ({PARTNER_PANEL.length})
            </button>
            {FAMILIES.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[12px] font-semibold px-3 py-1.5 rounded-full border transition ${filter === f ? "bg-blue text-white border-blue" : "bg-white text-ink-2 border-rule hover:border-blue/40"}`}
              >
                {f} ({familyCounts[f]})
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-rule overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-[13.5px] min-w-[760px]">
              <thead className="bg-ink text-white">
                <tr className="text-left">
                  <th className="px-5 py-3.5 font-semibold sticky left-0 bg-ink">Lender</th>
                  <th className="px-5 py-3.5 font-semibold">Category</th>
                  {FAMILIES.map((f) => (
                    <th key={f} className="px-3 py-3.5 font-semibold text-center">{f}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-surface-2 transition">
                    <td className="px-5 py-3.5 font-semibold text-ink sticky left-0 bg-white">{r.partner.name}</td>
                    <td className="px-5 py-3.5 text-ink-muted text-[12.5px]">{CATEGORY_LABELS[r.partner.category]}</td>
                    {FAMILIES.map((f) => (
                      <td key={f} className="px-3 py-3.5 text-center">
                        {r[f]
                          ? <Check className="w-4 h-4 text-emerald-600 mx-auto" strokeWidth={3} />
                          : <X className="w-4 h-4 text-ink-soft/40 mx-auto" strokeWidth={2.5} />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 text-[11.5px] text-ink-soft">
          Coverage flags reflect lenders that actively fund the family on our panel — not just regulatory permission.
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ValueProps() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Why this panel</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            What 19 lenders give you that one bank cannot.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUE_PROPS.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white border border-rule p-6 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition">
              <div className="w-10 h-10 rounded-xl bg-ink text-white grid place-items-center mb-4">
                <v.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2 tracking-tight">{v.title}</h3>
              <p className="text-[14px] text-ink-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Standards() {
  return (
    <section className="bg-white py-20 lg:py-24 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Panel standards</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              How a lender earns — and keeps — a slot on this panel.
            </h2>
            <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
              Six standards. Every partner clears all six on onboarding and again at the annual review. No exceptions.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {STANDARDS.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-surface-2 border border-rule p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10.5px] text-blue bg-blue-soft px-2 py-1 rounded-md font-bold">RULE {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-[15.5px] font-bold text-ink mb-1.5 leading-tight">{s.title}</h3>
                <p className="text-[13px] text-ink-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Geography() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Geography</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Where the panel goes deep — and where it goes digital.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            Headquartered in Kolkata. Strongest in West Bengal. Pan-India reach through the digital-NBFC partners and travelling RM coverage for tier-2/3.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GEO.map((g) => (
            <div key={g.region} className="rounded-2xl bg-white border border-rule p-6 hover:border-blue/30 transition">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-ink text-white grid place-items-center">
                  <MapPin className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <h3 className="text-[15px] font-bold text-ink">{g.region}</h3>
              </div>
              <div className="text-[13px] text-ink-muted">Lender depth available</div>
              <div className="text-[20px] font-extrabold text-ink tabular tracking-tight mt-1">{g.depth}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function HowWeWork() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">How we use the panel</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Your file, four lenders, one signature.
          </h2>
        </div>
        <ol className="grid md:grid-cols-4 gap-4">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-surface-2 border border-rule p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-blue font-bold">STEP {String(i + 1).padStart(2, "0")}</span>
                <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider">{step.stage}</span>
              </div>
              <h3 className="text-[15px] font-bold text-ink mb-1.5 leading-tight">{step.title}</h3>
              <p className="text-[12.5px] text-ink-muted leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ComplianceBand() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white overflow-hidden p-8 lg:p-12 shadow-2xl shadow-emerald-700/20">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full opacity-50"
              style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.20) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full opacity-40"
              style={{ background: "radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
          </div>
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-white mb-5">
                <ShieldCheck className="w-3.5 h-3.5" /> Compliance & governance
              </div>
              <h2 className="text-[34px] lg:text-[44px] leading-[1.05] font-extrabold tracking-[-0.025em]">
                <span className="block">RBI-regulated lenders only.</span>
                <span className="block text-white/90">DPDP-aligned data handling.</span>
              </h2>
              <p className="mt-5 text-[15px] lg:text-[16px] text-white/85 leading-relaxed max-w-[620px]">
                Every partner on the panel is a scheduled commercial bank, NHB-registered HFC, RBI-registered NBFC or AMFI intermediary. Your file is shared only with the 4–5 lenders <em>you</em> approve from our shortlist — bound by data-handling agreements that mirror RBI and DPDP norms.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-white/95 px-6 py-3.5 rounded-xl font-bold text-[14px] shadow-lg transition">
                  Start a compliant application <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-1.5 px-5 py-3.5 font-semibold text-[14px] border border-white/30 rounded-xl hover:bg-white/10 transition">
                  Read our compliance posture
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "100%", l: "RBI-regulated partners" },
                  { v: "0",    l: "Aggregator middlemen" },
                  { v: "DPDP", l: "Aligned data handling" },
                  { v: "Annual", l: "Panel review cadence" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-white/[0.10] border border-white/20 backdrop-blur-sm p-5">
                    <div className="text-[26px] lg:text-[30px] font-extrabold tabular tracking-tight leading-none">{s.v}</div>
                    <div className="mt-2 text-[12px] text-white/85 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-black/20 border border-white/10 p-4 text-[12px] text-white/80 leading-relaxed">
                <strong className="text-white">Grievance escalation:</strong> single advisor first, partner-bank ombudsman second, RBI Banking Ombudsman as backstop — documented at sanction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">FAQ</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            About the panel — the questions promoters actually ask.
          </h2>
        </div>
        <div className="rounded-2xl border border-rule overflow-hidden">
          {FAQS.map((qa, i) => {
            const open = openIdx === i;
            return (
              <div key={qa.q} className={i > 0 ? "border-t border-rule" : ""}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 text-left px-5 lg:px-6 py-5 hover:bg-surface-2 transition"
                >
                  <span className="text-[15px] lg:text-[16px] font-semibold text-ink leading-snug">{qa.q}</span>
                  {open
                    ? <MinusCircle className="w-4 h-4 mt-1 text-blue shrink-0" strokeWidth={2.5} />
                    : <PlusCircle  className="w-4 h-4 mt-1 text-ink-soft shrink-0" strokeWidth={2.5} />
                  }
                </button>
                {open && (
                  <div className="px-5 lg:px-6 pb-5 -mt-1 text-[14px] text-ink-muted leading-relaxed max-w-[820px]">
                    {qa.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function FinalCta() {
  return (
    <section className="bg-surface-2 py-16 lg:py-20">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-deep via-blue to-blue-bright text-white p-10 lg:p-14 overflow-hidden shadow-2xl shadow-blue/20">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full opacity-50"
              style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full opacity-40"
              style={{ background: "radial-gradient(circle at center, rgba(11,17,51,0.4) 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
          </div>
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-white mb-4">
                <Sparkles className="w-3 h-3" /> One application, four lenders
              </div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.08] font-extrabold tracking-[-0.025em]">
                Pitch your file to the right four — not all 19.
              </h2>
              <p className="mt-4 text-[15px] lg:text-[16px] text-white/85 max-w-[620px] leading-relaxed">
                Share your numbers. We'll come back with a panel-comparison sheet within one working day — no commitment, ever.
                <strong className="text-white"> Our fee is paid by the lender on disbursal — you pay us nothing.</strong>
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-white text-blue-deep hover:bg-white/95 px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg transition">
                Get matched in one day <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-1.5 px-6 py-4 font-semibold text-[14px] border border-white/30 rounded-xl hover:bg-white/[0.10] text-white transition">
                More about Statpro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
