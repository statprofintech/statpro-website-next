"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, X, Sparkles, ShieldCheck, Clock, Phone,
  Building2, Banknote, Scale, Compass, Award, Users, MapPin, Mail, FileCheck,
  TrendingUp, Network, Target, Heart, BookOpen, MinusCircle, PlusCircle, Quote,
  Briefcase, Layers,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Page-specific data
// ─────────────────────────────────────────────────────────────────────────────
const STATS = [
  { v: "₹1,200 Cr+", l: "Capital placed since inception",  sub: "Across LAP · LRD · LAS · HL · BL · PL" },
  { v: "19",          l: "Active partner lenders",          sub: "Banks · NBFCs · HFCs · SFBs" },
  { v: "6",           l: "Product families",                sub: "Secured + unsecured credit" },
  { v: "₹1,800 Cr",   l: "Mutual fund AUM advised",         sub: "AMFI-registered distributor" },
  { v: "4",           l: "Years of placements",             sub: "Founded 2022 · Kolkata" },
  { v: "80%+",        l: "Sanction-to-disbursal hit rate",  sub: "On files we shortlist" },
];

const PILLARS = [
  { icon: Building2, title: "Secured corporate credit",
    body: "Our specialisation: Loan Against Property, Loan Against Rental, and Loan Against Securities. Where we negotiate the sharpest rate and structure the cleanest deal.",
    families: ["LAP", "LRD", "LAS"] },
  { icon: Banknote, title: "Cash-flow & retail credit",
    body: "Home Loan, Business Loan and Personal Loan, placed through the same panel. Useful when bundled with the secured-credit plays for a promoter household.",
    families: ["HL", "BL", "PL"] },
  { icon: TrendingUp, title: "Wealth & mutual funds",
    body: "AMFI-registered MF distributor. Direct AUM, not a referral relationship. We treat liquid wealth as a complement to credit — not a separate sales motion.",
    families: ["MF AUM"] },
];

const COMPARISON = [
  { dim: "Lenders pitched per file", you: "1 (whoever you walked into)", agg: "30+ (algorithm shotgun)",       us: "4–5 right-fit, parallel" },
  { dim: "Negotiation",              you: "You vs the bank's RM",          agg: "Algorithm — no negotiation",   us: "We counter every offer on rate, fees, processing" },
  { dim: "File ownership",           you: "Bank's RM (rotates)",           agg: "Call-centre ticket queue",     us: "Single advisor end-to-end" },
  { dim: "Collateral acceptance",    you: "Whatever that one bank funds",  agg: "Generic underwriting rules",   us: "Hospitals, schools, hotels — funded by NBFC partners" },
  { dim: "Fee disclosure",           you: "Buried in MITC",                agg: "Hidden in lender pricing",     us: "On the sanction letter, lender-paid, you pay ₹0" },
  { dim: "Post-disbursal",           you: "Annual rate reset surprise",    agg: "File closes — relationship ends", us: "BT, top-up, foreclosure timing — we keep watching" },
  { dim: "Wealth + credit on one shelf", you: "Two separate banks",       agg: "Credit only",                  us: "AMFI-reg MF distributor + DSA — one advisor" },
];

const VALUES = [
  { icon: Scale, title: "Pitch parallel, not waterfall",
    body: "Your file goes to 4–5 right-fit lenders the same day. They negotiate against each other. You sign the sharpest offer." },
  { icon: ShieldCheck, title: "Disclose the fee, always",
    body: "Our placement fee is paid by the lender on disbursal — disclosed in the sanction letter. You sign your loan directly with the bank, at the rate we negotiated." },
  { icon: Target, title: "Right-fit, not every-fit",
    body: "We turn down deals that don't sit cleanly with our panel. Saying no upfront protects your time and your CIBIL footprint." },
  { icon: Phone, title: "Single advisor, end-to-end",
    body: "One person owns your file from intake to disbursal. No call-centre handoff, no deal-room ticket queue." },
  { icon: BookOpen, title: "Numbers in writing",
    body: "Every quote, every fee, every clause — in a one-page comparison sheet before you commit. Verbal-only offers don't count." },
  { icon: Heart, title: "Stay invested post-disbursal",
    body: "BT eligibility, top-up windows, foreclosure timing — we keep watching after the disbursal. Most clients come back for their second deal because we kept showing up between deals." },
];

const TIMELINE = [
  { year: "2022", title: "Calcutta first",
    body: "Founded as a corporate-credit advisory in Kolkata. First placement: a ₹4 Cr LAP for a manufacturing promoter the bank had quietly declined." },
  { year: "2023", title: "Panel scales to 12",
    body: "Onboard L&T Finance, Bajaj Finserv, Tata Capital and three HFCs. Cross ₹250 Cr in placements within the year." },
  { year: "2024", title: "AMFI registration · Durgapur office",
    body: "Become an AMFI-registered Mutual Fund Distributor. Wealth and credit now sit on a single advisory shelf. Open the Durgapur office to deepen industrial-belt coverage." },
  { year: "2025", title: "Pan-India digital reach",
    body: "Add JioCredit, Mirae Asset, Sammaan Finserve. Panel hits 19. Tier-2/3 reach via digital sanction with travelling RM coverage." },
  { year: "2026", title: "₹1,200 Cr placed",
    body: "Cross ₹1,200 Cr in cumulative placements and ₹1,800 Cr in MF AUM. Launch the rebuilt advisor desk and partner-portal stack." },
];

const SIGNATURE = [
  { tag: "LAP · BT + Top-up", ticket: "₹12 Cr", saving: "₹62 L over 7 yrs",
    body: "Manufacturing promoter, Howrah. Existing LAP at 11.25% with a PSU bank — we refinanced at 8.85% with an HFC partner and added a ₹3 Cr top-up in the same sanction.",
    lender: "HFC partner" },
  { tag: "LRD",               ticket: "₹38 Cr", saving: "Funded what 3 banks declined",
    body: "Commercial complex in Salt Lake with 14 tenants. Three banks declined on tenant-mix risk. We structured the rental waterfall and placed it with a large NBFC at 9.40%.",
    lender: "Large NBFC" },
  { tag: "LAS",               ticket: "₹6 Cr",  saving: "T+2 sanction",
    body: "Family office liquidity event. Sanction T+2 against a listed equity portfolio — funds drawn the next morning to settle the underlying transaction.",
    lender: "LAS specialist" },
  { tag: "LAP · Special-purpose", ticket: "₹18 Cr", saving: "5 banks declined",
    body: "Hospital expansion in Durgapur. Five banks turned it down on collateral type. Funded by a specialist NBFC at 10.10%, sanctioned in 11 working days.",
    lender: "Specialist NBFC" },
];

const LEADERSHIP = [
  { name: "Founding partners", role: "Credit advisory · placements",
    body: "Two decades of corporate-banking and credit-underwriting backgrounds, across private banks and large NBFCs. Hands-on with every file above ₹2 Cr." },
  { name: "Credit operations", role: "Underwriting · file assembly",
    body: "Ex-bank credit officers who know exactly how each lender's underwriting team thinks — what passes, what gets stuck, what to pre-empt." },
  { name: "Wealth advisory", role: "MF distribution · planning",
    body: "AMFI-certified advisors who treat your wealth as a complement to your credit — same shelf, same advisor, no second sales motion." },
];

const COMPLIANCE = [
  { label: "DSA partner",       val: "RBI-regulated banks & NBFCs", icon: ShieldCheck, note: "Direct Selling Agent under each lender's DSA framework. Lender pays our placement fee on disbursal." },
  { label: "AMFI registration", val: "ARN-registered distributor",  icon: Award,       note: "Mutual fund distribution registered with AMFI. Direct AUM, not a referral arrangement." },
  { label: "Data handling",     val: "DPDP-aligned",                icon: FileCheck,   note: "Customer files shared only with your-approved lender shortlist. Bound by data-handling agreements that mirror DPDP norms." },
  { label: "Grievance redress", val: "Documented escalation path",  icon: Phone,       note: "Single advisor first, partner-bank ombudsman second, RBI Banking Ombudsman as backstop." },
];

const ECOSYSTEM = [
  { type: "Banks",        items: ["HDFC Bank", "Kotak Mahindra Bank", "Jana SFB", "Unity SFB"] },
  { type: "Large NBFCs",  items: ["Bajaj Finserv", "Tata Capital", "L&T Finance", "Aditya Birla Capital", "Cholamandalam", "Axis Finance", "Piramal", "Poonawalla"] },
  { type: "HFCs",         items: ["LIC Housing Finance", "Sammaan Finserve"] },
  { type: "SME / LAS",    items: ["Lendingkart", "Protium", "Profectus", "JioCredit", "Mirae Asset"] },
];

const OFFICES = [
  {
    city: "Kolkata",
    role: "Head Office",
    address: ["503, Saltee Plaza", "Jessore Road", "Kolkata — 700 080"],
    hours: "Mon–Sat · 10:00–19:00",
    phone: "+91 92333 55500",
    email: "care@statproindia.com",
    note: "Head Office desk. Credit advisory, wealth advisory, partner relationships and operations. Walk-ins by appointment.",
  },
  {
    city: "Durgapur",
    role: "Registered Office",
    address: ["1st Floor, B-205, Kalpataru Building", "Bengal Srishti Complex, City Centre", "Durgapur, Paschim Bardhaman", "West Bengal — 713 216"],
    hours: "Mon–Sat · 10:00–18:30",
    phone: "+91 92333 55500",
    email: "care@statproindia.com",
    note: "Registered Office. Asansol–Durgapur–Burdwan industrial-belt coverage; manufacturing, mid-market and SME credit specialisation.",
  },
];

const FAQS = [
  { q: "What kind of business is Statpro, exactly?",
    a: "We are a corporate-credit advisor. We are a Direct Selling Agent (DSA) to 19 RBI-regulated banks, NBFCs and HFCs across LAP, LRD, LAS, HL, BL and PL — and an AMFI-registered Mutual Fund Distributor for wealth. We negotiate, structure, and place; you sign your loan agreement directly with the lender." },
  { q: "Do I pay you anything?",
    a: "No. Our placement fee is paid by the lender on disbursal — disclosed upfront in the sanction letter. If a deal doesn't disburse, you owe us nothing." },
  { q: "How are you different from an aggregator?",
    a: "Aggregators run a directory and route your file by algorithm. We run a curated 19-lender panel and assign a single advisor who personally pitches your file to 4–5 right-fit lenders, negotiates each counter, and stays with the file through legal, technical and disbursal." },
  { q: "Where do you operate?",
    a: "We have two offices — Kolkata (headquarters) and Durgapur (industrial-belt office). We place deals across India through our partner network, with on-ground presence concentrated in West Bengal and digital sanction reach pan-India." },
  { q: "Are you regulated?",
    a: "Every lender on our panel is an RBI-regulated bank, NHB-registered HFC or RBI-registered NBFC. Statpro itself is registered as a DSA under each lender's DSA framework, and as an AMFI-registered Mutual Fund Distributor for wealth distribution." },
  { q: "How do I get in touch?",
    a: "Start with the apply form — we'll respond within one working day with a panel-comparison sheet for your file. For grievances, write to our Grievance Redressal Officer at care@statproindia.com." },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div>
      <Hero />
      <ByTheNumbers />
      <Mission />
      <Pillars />
      <Comparison />
      <Values />
      <Timeline />
      <SignaturePlacements />
      <Leadership />
      <Ecosystem />
      <Offices />
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
            <span className="font-mono text-[11px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-2.5 py-1 rounded-md font-bold">ABOUT</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-white/55 font-semibold">StatPro Fintech</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-4">A corporate-credit advisor — not an aggregator.</div>
            <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <span>We negotiate the loan,</span>{" "}
              <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                so promoters spend less on debt service and more on building.
              </span>
            </h1>
            <p className="mt-5 text-[15px] lg:text-[16.5px] text-white/70 leading-relaxed max-w-[600px]">
              StatPro Fintech structures and places corporate credit across 19 partner lenders, and distributes mutual funds as an AMFI-registered intermediary. We pitch your file in parallel, negotiate every counter, and stay with the deal through disbursal — and through the next refinance.
            </p>
            <ul className="mt-6 space-y-2.5 max-w-[600px]">
              {[
                "DSA to 19 RBI-regulated banks, NBFCs and HFCs.",
                "AMFI-registered Mutual Fund Distributor for wealth.",
                "Two offices — Kolkata (HQ) and Durgapur. Pan-India placement reach.",
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
                Talk to an advisor <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lenders" className="inline-flex items-center gap-1.5 text-white/85 hover:text-white px-5 py-3.5 font-semibold text-[15px] border border-white/15 rounded-xl hover:bg-white/[0.06] transition">
                See lender network
              </Link>
            </div>
          </div>

          {/* Right panel — at-a-glance */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="px-6 lg:px-7 pt-5 pb-4 border-b border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-bright animate-pulse" />
                    <span className="text-[10.5px] uppercase tracking-wider font-bold text-blue-bright">Statpro at a glance</span>
                  </div>
                  <div className="font-bold text-[16px] tracking-tight text-white">A four-line introduction.</div>
                </div>
                <Compass className="w-6 h-6 text-blue-bright/80" strokeWidth={1.8} />
              </div>
              <div className="p-6 lg:p-7">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { v: "2022",      l: "Founded · Kolkata" },
                    { v: "₹1,200 Cr+",l: "Capital placed lifetime" },
                    { v: "₹1,800 Cr", l: "MF AUM advised" },
                    { v: "19",        l: "Lender partners" },
                  ].map((s) => (
                    <div key={s.l} className="border-l-2 border-blue-bright/40 pl-3">
                      <div className="text-[24px] lg:text-[28px] font-extrabold tabular tracking-tight leading-none text-white">{s.v}</div>
                      <div className="mt-2 text-[11.5px] text-white/65 leading-snug">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                  {[
                    { i: ShieldCheck, l: "DSA · RBI-reg" },
                    { i: Award,       l: "AMFI-reg" },
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
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">By the numbers</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Four years of placements, in plain figures.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATS.map((s) => (
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
function Mission() {
  return (
    <section className="bg-gradient-to-br from-navy via-navy to-navy-deep text-white py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] bg-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 backdrop-blur-sm rounded-full pl-3 pr-4 py-1 text-[11.5px] font-medium text-white/85 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blue-bright" strokeWidth={2.5} />
              <span>The mission · why we exist</span>
            </div>
            <h2 className="text-[32px] lg:text-[44px] leading-[1.05] font-extrabold tracking-[-0.025em] mb-5">
              Promoters overpay for debt because<br />
              <span className="bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">no one's actually negotiating for them.</span>
            </h2>
            <p className="text-[15px] lg:text-[16.5px] text-white/75 leading-relaxed max-w-[640px]">
              Most banks quote a sticker rate and wait for you to accept. Most aggregators dump your file across 50 lenders and let the algorithm pick. Neither model treats your file as a thing worth negotiating over. We do — that's the whole job. Fewer lenders, deeper relationships, parallel pitches, single advisor. The result: a sharper rate, on a structure built around your actual cash flow.
            </p>
            <Link href="/apply" className="mt-7 inline-flex items-center gap-2 bg-blue hover:bg-blue-hover px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
              Start a negotiation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "100–300 bps", l: "Typical saving on a refinance" },
                { v: "₹38L",        l: "Saved on ₹1.5 Cr / 7 yrs LAP" },
                { v: "4–5",         l: "Lenders that actually pitch your file" },
                { v: "1",           l: "Advisor end-to-end" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/[0.05] border border-white/10 p-5">
                  <div className="text-[24px] font-extrabold text-blue-bright tabular tracking-tight leading-none">{s.v}</div>
                  <div className="mt-2 text-[12px] text-white/65 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Pillars() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">What we do</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Three pillars on one advisory shelf.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            Secured corporate credit is our edge. We add cash-flow credit and wealth on the same shelf so a promoter household has one advisor — not three sales pitches.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white border border-rule p-6 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-ink text-white grid place-items-center mb-4">
                <p.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2 tracking-tight">{p.title}</h3>
              <p className="text-[14px] text-ink-muted leading-relaxed mb-4 flex-1">{p.body}</p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-rule">
                {p.families.map((f) => (
                  <span key={f} className="font-mono text-[10.5px] text-blue bg-blue-soft px-2 py-1 rounded-md font-bold">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Comparison() {
  return (
    <section className="bg-white py-20 lg:py-24 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Statpro vs the alternatives</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Where the difference actually shows up.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            The honest comparison — what you get walking into your bank, what you get on a generic aggregator, and what we do differently across seven dimensions.
          </p>
        </div>

        <div className="rounded-2xl border border-rule overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-[13.5px] min-w-[820px]">
              <thead>
                <tr className="text-left">
                  <th className="px-5 py-4 font-semibold bg-ink text-white">Dimension</th>
                  <th className="px-5 py-4 font-semibold bg-surface-3 text-ink-2">Your bank, alone</th>
                  <th className="px-5 py-4 font-semibold bg-surface-3 text-ink-2">A generic aggregator</th>
                  <th className="px-5 py-4 font-semibold bg-blue text-white">StatPro Fintech</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {COMPARISON.map((row) => (
                  <tr key={row.dim} className="bg-white">
                    <td className="px-5 py-4 font-semibold text-ink">{row.dim}</td>
                    <td className="px-5 py-4 text-ink-muted">
                      <span className="inline-flex items-start gap-2">
                        <X className="w-3.5 h-3.5 mt-1 text-ink-soft/60 shrink-0" strokeWidth={3} />
                        <span>{row.you}</span>
                      </span>
                    </td>
                    <td className="px-5 py-4 text-ink-muted">
                      <span className="inline-flex items-start gap-2">
                        <X className="w-3.5 h-3.5 mt-1 text-ink-soft/60 shrink-0" strokeWidth={3} />
                        <span>{row.agg}</span>
                      </span>
                    </td>
                    <td className="px-5 py-4 text-ink bg-blue-soft/40">
                      <span className="inline-flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 mt-1 text-blue shrink-0" strokeWidth={3} />
                        <span className="font-medium">{row.us}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-coral-soft/40 border border-coral/20 p-4 text-[13px] text-ink-2 leading-relaxed">
          <Sparkles className="w-4 h-4 mt-0.5 text-coral shrink-0" strokeWidth={2.5} />
          <span>
            <strong className="text-ink">The honest part:</strong> on small, plain-vanilla files (₹50 L home loan, salaried, clean property) your bank may quote you the same rate we'd negotiate. We earn our keep on the files banks decline, the refinances banks don't surface, and the structures aggregators can't engineer.
          </span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Values() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">How we work</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Six rules we won't break — even when it costs us a deal.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v) => (
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
function Timeline() {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Our story</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Four years, one panel, ₹1,200 Cr placed.
            </h2>
            <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
              Started as a single-advisor practice in Kolkata. Grew into a 19-lender panel covering six product families and ₹1,800 Cr in MF AUM — without ever moving away from a single-advisor relationship for each client.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="relative space-y-6 pl-6 border-l-2 border-blue/20">
              {TIMELINE.map((t, i) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[33px] top-1 w-5 h-5 rounded-full bg-blue text-white text-[10px] font-bold grid place-items-center shadow-md shadow-blue/30">
                    {i + 1}
                  </span>
                  <div className="rounded-2xl bg-surface-2 border border-rule p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] text-blue font-bold tracking-wider">{t.year}</span>
                      <span className="text-[10.5px] uppercase tracking-wider font-semibold text-ink-soft">Milestone</span>
                    </div>
                    <h3 className="text-[16px] font-bold text-ink mb-1.5 leading-tight">{t.title}</h3>
                    <p className="text-[13.5px] text-ink-muted leading-relaxed">{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function SignaturePlacements() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div className="max-w-[680px]">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Signature placements</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              Four files that show what we actually do.
            </h2>
            <p className="mt-4 text-[15px] text-ink-muted leading-relaxed">
              Anonymised but real. Lender names withheld for confidentiality — happy to share references on call.
            </p>
          </div>
          <Link href="/apply" className="text-[14px] font-semibold text-blue hover:text-blue-hover inline-flex items-center gap-1">
            Bring us your file <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SIGNATURE.map((s, i) => (
            <div key={s.body} className="relative rounded-2xl bg-white border border-rule p-6 lg:p-7 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10.5px] text-blue bg-blue-soft px-2 py-1 rounded-md font-bold">{s.tag}</span>
                <span className="font-mono text-[10.5px] text-ink-soft">CASE {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-[10.5px] uppercase tracking-wider text-ink-soft font-bold">Ticket</div>
                  <div className="text-[24px] font-extrabold text-ink tabular tracking-tight leading-none mt-1">{s.ticket}</div>
                </div>
                <div>
                  <div className="text-[10.5px] uppercase tracking-wider text-ink-soft font-bold">Outcome</div>
                  <div className="text-[14px] font-bold text-blue leading-tight mt-1">{s.saving}</div>
                </div>
              </div>
              <Quote className="w-4 h-4 text-blue/30 mb-2" strokeWidth={2.4} />
              <p className="text-[13.5px] text-ink-muted leading-relaxed mb-4">{s.body}</p>
              <div className="pt-4 border-t border-rule text-[11.5px] text-ink-soft">
                Placed with: <span className="font-semibold text-ink-2">{s.lender}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Leadership() {
  return (
    <section className="bg-white py-20 lg:py-24 border-y border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">The team</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Ex-bankers, credit officers, AMFI advisors — under one roof.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            We don't hire generalists. Every advisor on the desk has spent time inside an underwriting team — they know exactly how each lender's credit officer thinks before they pitch your file.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {LEADERSHIP.map((p) => (
            <div key={p.name} className="rounded-2xl bg-surface-2 border border-rule p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-deep via-blue to-blue-bright text-white grid place-items-center mb-4 shadow-lg shadow-blue/20">
                <Users className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-[16px] font-bold text-ink leading-tight">{p.name}</h3>
              <div className="text-[12px] uppercase tracking-wider font-semibold text-blue mt-1 mb-3">{p.role}</div>
              <p className="text-[13.5px] text-ink-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Ecosystem() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div className="max-w-[680px]">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Ecosystem</div>
            <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
              19 lenders, four archetypes — one curated panel.
            </h2>
          </div>
          <Link href="/lenders" className="text-[14px] font-semibold text-blue hover:text-blue-hover inline-flex items-center gap-1">
            See full lender comparison <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ECOSYSTEM.map((g) => (
            <div key={g.type} className="rounded-2xl bg-white border border-rule p-6 hover:border-blue/30 transition">
              <div className="flex items-baseline justify-between mb-4">
                <div className="text-[12px] uppercase tracking-wider text-ink-soft font-semibold">{g.type}</div>
                <div className="text-[18px] font-extrabold text-ink tabular leading-none">{g.items.length}</div>
              </div>
              <ul className="space-y-2">
                {g.items.map((p) => (
                  <li key={p} className="flex items-center justify-between text-[13px] text-ink-2 bg-surface-2 rounded-lg px-2.5 py-2 border border-rule">
                    <span className="font-medium truncate">{p}</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-soft shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Offices() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Where to find us</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            Two offices in West Bengal — placements pan-India.
          </h2>
          <p className="mt-5 text-[15px] text-ink-muted leading-relaxed">
            Our credit and wealth desks operate out of Kolkata and Durgapur. We place deals across India through our 19-lender partner network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {OFFICES.map((o, i) => (
            <div key={o.city} className="relative rounded-3xl border border-rule overflow-hidden bg-white hover:border-blue/30 hover:shadow-xl hover:shadow-blue/5 transition flex flex-col">
              {/* Banner */}
              <div className="relative h-32 bg-gradient-to-br from-navy-deep via-navy to-blue-deep overflow-hidden">
                <div className="absolute inset-0 opacity-[0.18]" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-blue-bright/20 blur-3xl" />
                <div className="relative h-full px-7 py-6 flex items-end justify-between">
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-blue-bright font-bold">Office {String(i + 1).padStart(2, "0")}</div>
                    <div className="text-[26px] font-extrabold text-white tracking-tight mt-1 leading-none">{o.city}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-[10.5px] font-bold text-white uppercase tracking-wider">
                    <MapPin className="w-3 h-3" /> {o.role}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-ink-soft font-bold mb-1.5">Address</div>
                    <ul className="text-[13px] text-ink-2 leading-relaxed space-y-0.5">
                      {o.address.map((line) => (<li key={line}>{line}</li>))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-wider text-ink-soft font-bold mb-1.5">Hours</div>
                    <div className="text-[13px] text-ink-2">{o.hours}</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  <a href={`tel:${o.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2.5 rounded-xl bg-surface-2 border border-rule p-3 hover:border-blue/40 transition">
                    <Phone className="w-4 h-4 text-blue shrink-0" strokeWidth={2.2} />
                    <span className="text-[13px] font-semibold text-ink truncate">{o.phone}</span>
                  </a>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2.5 rounded-xl bg-surface-2 border border-rule p-3 hover:border-blue/40 transition">
                    <Mail className="w-4 h-4 text-blue shrink-0" strokeWidth={2.2} />
                    <span className="text-[13px] font-semibold text-ink truncate">{o.email}</span>
                  </a>
                </div>

                <p className="text-[13px] text-ink-muted leading-relaxed pt-4 border-t border-rule">{o.note}</p>
              </div>
            </div>
          ))}
        </div>
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
          <div className="relative grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-white mb-5">
                <ShieldCheck className="w-3.5 h-3.5" /> Compliance
              </div>
              <h2 className="text-[32px] lg:text-[44px] leading-[1.05] font-extrabold tracking-[-0.025em]">
                <span className="block">Regulated where it matters.</span>
                <span className="block text-white/90">Documented where it should be.</span>
              </h2>
              <p className="mt-5 text-[15px] lg:text-[16px] text-white/85 leading-relaxed">
                We are a DSA to RBI-regulated banks and NBFCs and an AMFI-registered MF distributor. Customer files move only with documented consent and bank-grade data handling.
              </p>
              <p className="mt-4 text-[13px] text-white/80 leading-relaxed">
                Grievance Redressal Officer: <a href="mailto:care@statproindia.com" className="underline decoration-white/40 hover:decoration-white">care@statproindia.com</a> · See our <a href="/grievance" className="underline decoration-white/40 hover:decoration-white">Grievance Redressal Policy</a>
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {COMPLIANCE.map((c) => (
                <div key={c.label} className="rounded-2xl bg-white/[0.10] border border-white/20 backdrop-blur-sm p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <c.icon className="w-4 h-4 text-white" strokeWidth={2.4} />
                    <div className="text-[11px] uppercase tracking-wider font-bold text-white/90">{c.label}</div>
                  </div>
                  <div className="text-[15px] font-bold leading-tight">{c.val}</div>
                  <p className="mt-2 text-[12px] text-white/80 leading-relaxed">{c.note}</p>
                </div>
              ))}
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
    <section className="bg-white py-20 lg:py-24 border-y border-rule">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-10">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">FAQ</div>
          <h2 className="text-[32px] lg:text-[42px] leading-[1.08] font-extrabold text-ink tracking-[-0.025em]">
            About Statpro — answered straight.
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
                <Sparkles className="w-3 h-3" /> Single-advisor relationship
              </div>
              <h2 className="text-[30px] lg:text-[40px] leading-[1.08] font-extrabold tracking-[-0.025em]">
                Talk to a Statpro advisor.
              </h2>
              <p className="mt-4 text-[15px] lg:text-[16px] text-white/85 max-w-[620px] leading-relaxed">
                Share your numbers — credit, refinance, top-up or a wealth conversation. We'll come back within one working day with a panel-comparison sheet and a single advisor who'll own the file end-to-end.
                <strong className="text-white"> Our placement fee is paid by the lender on disbursal — you pay us nothing.</strong>
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-white text-blue-deep hover:bg-white/95 px-6 py-4 rounded-xl font-bold text-[15px] shadow-lg transition">
                Talk to an advisor <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lenders" className="inline-flex items-center justify-center gap-1.5 px-6 py-4 font-semibold text-[14px] border border-white/30 rounded-xl hover:bg-white/[0.10] text-white transition">
                See lender network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
