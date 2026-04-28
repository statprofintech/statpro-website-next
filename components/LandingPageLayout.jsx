"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, Plus, Minus, Sparkles,
} from "lucide-react";
import { THEMES } from "@/lib/landingThemes";
import Logo from "./Logo";

/**
 * Landing page layout — distinct from the main-site product pages.
 * Editorial / magazine feel: serif display headers, oversized numerals,
 * asymmetric grids, per-family colour theme.
 *
 * Pass:
 *   theme:   key into THEMES (e.g. "lap")
 *   tag:     short URL slug-style tag (e.g. "BT + TOP-UP")
 *   parent:  { label, to } back-link (e.g. { label: "All LAP", to: "/lap" })
 *   hero:    { eyebrow, headline (uses /em/ to italicise), serif (true|false),
 *              lede, ctaPrimary, ctaSecondary, stats: [{v,l}], badge: "01 / 03" }
 *   problem: { eyebrow, title, body, marks: [string] }
 *   solution:{ eyebrow, title, steps: [{n, title, body}] }
 *   proof:   { eyebrow, title, stats: [{v,l,sub}] }
 *   example: { eyebrow, title, narrative, ledger: [{k,v}] }
 *   benefits:{ eyebrow, title, items: [{title, body}] }
 *   eligibility:{ eyebrow, title, qualifies:[], also:[] }
 *   process: [{ stage, title, body }]
 *   faqs:    [{q,a}]
 *   cta:     { headline, body, primary, secondary }
 */
export default function LandingPageLayout({ theme, tag, parent, hero, problem, solution, proof, example, benefits, eligibility, process, faqs, cta }) {
  const t = THEMES[theme];
  if (!t) return null;
  return (
    <div style={t.vars} className="bg-[var(--ld-bg)] text-[color:var(--ld-ink)]">
      <Hero tag={tag} parent={parent} hero={hero} />
      {problem && <Problem c={problem} />}
      {solution && <Solution c={solution} />}
      {proof && <Proof c={proof} />}
      {example && <Example c={example} />}
      {benefits && <Benefits c={benefits} />}
      {eligibility && <Eligibility c={eligibility} />}
      {process && <Process steps={process} />}
      {faqs && <Faq items={faqs} />}
      {cta && <FinalCta c={cta} />}
      <LandingDisclaimer />
    </div>
  );
}

// Disclaimer strip — same on every landing page regardless of theme.
// Sits just above the main-site Footer.
function LandingDisclaimer() {
  return (
    <section className="bg-surface-2 border-t border-rule">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-6">
        <p className="text-[11.5px] text-ink-soft leading-relaxed">
          <strong className="text-ink-2 font-semibold">Disclaimer:</strong>{" "}
          Statpro Fintech Pvt. Ltd. acts as a Direct Selling Agent (DSA) for partner banks, NBFCs and HFCs, and as an AMFI-registered Mutual Fund Distributor.
          Interest rates, ticket sizes, fees and any savings figures shown on this page are <em>indicative</em> only — final terms are at the sole discretion of the partner lender,
          subject to your profile, collateral and the lender's then-current credit policy. Mutual fund investments are subject to market risks; please read all scheme-related
          documents carefully. Past outcomes are not a guarantee of future results.
        </p>
      </div>
    </section>
  );
}

// Minimalist, theme-neutral ribbon. Same on every landing page regardless of family.
// White background, hairline border, no gradient, no logo (logo moves into the hero).
function TopBar() {
  return (
    <div className="bg-white text-ink-2 text-[12.5px] border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-11 flex items-center justify-between">
        <a href="tel:+919233355500" className="tabular text-ink-soft hover:text-ink transition font-medium">
          +91 92333 55500
        </a>
        <nav className="flex items-center gap-6 text-[12.5px] font-medium">
          <Link href="/lenders" className="text-ink-soft hover:text-ink transition">Lenders</Link>
          <Link href="/about"   className="text-ink-soft hover:text-ink transition">About</Link>
          <Link href="/apply"   className="inline-flex items-center gap-1 bg-ink hover:bg-ink-2 text-white px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition">
            Apply
          </Link>
        </nav>
      </div>
    </div>
  );
}

function LandingFooter() {
  return (
    <footer className="bg-[color:var(--ld-hero-bg)] text-[color:var(--ld-hero-ink)]/70 relative overflow-hidden">
      <div className="absolute -top-20 right-1/3 w-[420px] h-[420px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, var(--ld-glow) 0%, transparent 70%)" }} />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex" aria-label="Statpro home">
              <Logo size={36} dark />
            </Link>
            <p className="mt-4 text-[13px] leading-[1.65] max-w-[380px]">
              Corporate-credit advisory and AMFI-registered MF distributor — placing capital across 19 partner lenders.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12.5px]">
              <a href="mailto:care@statproindia.com" className="hover:text-[color:var(--ld-hero-ink)] transition">care@statproindia.com</a>
              <a href="tel:+919233355500" className="tabular hover:text-[color:var(--ld-hero-ink)] transition">+91 92333 55500</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[color:var(--ld-accent)] mb-3">Solutions</div>
            <ul className="space-y-1.5 text-[13px]">
              <li><Link href="/lap" className="hover:text-[color:var(--ld-hero-ink)] transition">Loan Against Property</Link></li>
              <li><Link href="/lrd" className="hover:text-[color:var(--ld-hero-ink)] transition">Loan Against Rental</Link></li>
              <li><Link href="/las" className="hover:text-[color:var(--ld-hero-ink)] transition">Loan Against Securities</Link></li>
              <li><Link href="/hl"  className="hover:text-[color:var(--ld-hero-ink)] transition">Home Loan</Link></li>
              <li><Link href="/bl"  className="hover:text-[color:var(--ld-hero-ink)] transition">Business Loan</Link></li>
              <li><Link href="/pl"  className="hover:text-[color:var(--ld-hero-ink)] transition">Personal Loan</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[color:var(--ld-accent)] mb-3">Company</div>
            <ul className="space-y-1.5 text-[13px]">
              <li><Link href="/about"   className="hover:text-[color:var(--ld-hero-ink)] transition">About</Link></li>
              <li><Link href="/lenders" className="hover:text-[color:var(--ld-hero-ink)] transition">Lenders</Link></li>
              <li><Link href="/apply"   className="hover:text-[color:var(--ld-hero-ink)] transition">Apply</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[color:var(--ld-accent)] mb-3">Legal</div>
            <ul className="space-y-1.5 text-[13px]">
              <li><Link href="/privacy"     className="hover:text-[color:var(--ld-hero-ink)] transition">Privacy</Link></li>
              <li><Link href="/terms"       className="hover:text-[color:var(--ld-hero-ink)] transition">Terms</Link></li>
              <li><Link href="/grievance"   className="hover:text-[color:var(--ld-hero-ink)] transition">Grievance</Link></li>
              <li><Link href="/disclosures" className="hover:text-[color:var(--ld-hero-ink)] transition">Disclosures</Link></li>
              <li><Link href="/cookies"     className="hover:text-[color:var(--ld-hero-ink)] transition">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11.5px] text-white/45">
          <div>© 2026 Statpro Fintech Pvt. Ltd. · DSA partner to RBI-regulated lenders · CIN U65999MHXXXXPTCXXXXX</div>
        </div>

        {/* Disclaimer — same on every landing page, theme-neutral */}
        <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] text-white/55 leading-relaxed">
          <strong className="text-white/80 font-semibold">Disclaimer:</strong>{" "}
          Statpro Fintech Pvt. Ltd. acts as a Direct Selling Agent (DSA) for partner banks, NBFCs and HFCs, and as an AMFI-registered Mutual Fund Distributor.
          Interest rates, ticket sizes, fees and any savings figures shown on this page are <em>indicative</em> only — final terms are at the sole discretion of the partner lender,
          subject to your profile, collateral and the lender's then-current credit policy. Mutual fund investments are subject to market risks; please read all scheme-related
          documents carefully. Past outcomes are not a guarantee of future results.
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function HeadlineRender({ text, serif = true }) {
  // Allow /italic/ markers in the headline.
  const parts = text.split(/(\/[^/]+\/)/g).filter(Boolean);
  return (
    <h1 className={`${serif ? "font-serif" : ""} text-[40px] sm:text-[54px] lg:text-[72px] leading-[0.98] tracking-[-0.025em] font-bold`}>
      {parts.map((p, i) =>
        p.startsWith("/") && p.endsWith("/")
          ? <em key={i} className="italic font-light text-[color:var(--ld-accent)]">{p.slice(1, -1)}</em>
          : <span key={i}>{p}</span>
      )}
    </h1>
  );
}

function Hero({ tag, parent, hero }) {
  return (
    <section className="relative bg-[color:var(--ld-hero-bg)] text-[color:var(--ld-hero-ink)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-20 w-[640px] h-[640px] rounded-full opacity-60"
          style={{ background: `radial-gradient(circle at center, var(--ld-glow) 0%, transparent 65%)` }} />
        <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full opacity-50"
          style={{ background: `radial-gradient(circle at center, var(--ld-glow) 0%, transparent 70%)` }} />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Hero header row — back-link left, tag/slide indicator right */}
        <div className="flex items-center justify-between mb-10 text-[12px]">
          <Link href={parent.to} className="inline-flex items-center gap-1.5 text-[color:var(--ld-hero-ink)]/65 hover:text-[color:var(--ld-hero-ink)] font-medium tracking-wide">
            <ArrowLeft className="w-3.5 h-3.5" /> {parent.label}
          </Link>
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--ld-hero-ink)]/60">{tag}</span>
            {hero.badge && (
              <span className="font-mono text-[10.5px] tabular text-[color:var(--ld-hero-ink)]/40">{hero.badge}</span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            {hero.eyebrow && (
              <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[color:var(--ld-accent)] mb-6">
                {hero.eyebrow}
              </div>
            )}
            <HeadlineRender text={hero.headline} serif={hero.serif !== false} />
            {hero.lede && (
              <p className="mt-7 text-[16px] lg:text-[18px] text-[color:var(--ld-hero-ink)]/75 leading-[1.6] max-w-[640px]">
                {hero.lede}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {hero.ctaPrimary && (
                <Link href={hero.ctaPrimary.to}
                  className="inline-flex items-center gap-2 bg-[color:var(--ld-accent)] hover:bg-[color:var(--ld-accent-2)] text-white px-7 py-3.5 rounded-full font-semibold text-[14.5px] transition shadow-lg"
                  style={{ boxShadow: "0 12px 36px var(--ld-glow)" }}
                >
                  {hero.ctaPrimary.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {hero.ctaSecondary && (
                <Link href={hero.ctaSecondary.to}
                  className="inline-flex items-center gap-1.5 text-[color:var(--ld-hero-ink)] px-5 py-3.5 font-semibold text-[14.5px] border border-white/15 rounded-full hover:bg-white/[0.06] transition"
                >
                  {hero.ctaSecondary.label}
                </Link>
              )}
            </div>
          </div>

          {hero.stats && (
            <div className="lg:col-span-4">
              <div className="border-t border-[color:var(--ld-hero-ink)]/15 pt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                {hero.stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-[40px] lg:text-[48px] leading-none tracking-tight font-bold text-[color:var(--ld-accent)]">
                      {s.v}
                    </div>
                    <div className="mt-2 text-[11.5px] uppercase tracking-[0.14em] text-[color:var(--ld-hero-ink)]/60 font-semibold leading-snug">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, align = "left", serif = true, lede }) {
  return (
    <div className={`max-w-[760px] ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[color:var(--ld-accent)] mb-5">
          {eyebrow}
        </div>
      )}
      <h2 className={`${serif ? "font-serif" : ""} text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.05] font-bold tracking-[-0.02em] text-[color:var(--ld-ink)]`}>
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-[15.5px] text-[color:var(--ld-ink-soft)] leading-[1.65]">{lede}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Problem({ c }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg)]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionHeader eyebrow={c.eyebrow} title={c.title} />
            <p className="mt-6 text-[16px] text-[color:var(--ld-ink-soft)] leading-[1.7] max-w-[540px]">
              {c.body}
            </p>
          </div>
          <div className="lg:col-span-6">
            <ul className="space-y-3">
              {c.marks.map((m, i) => (
                <li key={m} className="flex items-start gap-4 bg-[color:var(--ld-surface)] border border-[color:var(--ld-rule)] rounded-xl p-5">
                  <span className="font-mono text-[11px] tabular text-[color:var(--ld-accent)] font-bold pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14.5px] text-[color:var(--ld-ink)] leading-[1.55]">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Solution({ c }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg-2)] border-y border-[color:var(--ld-rule)]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {c.steps.map((s, i) => (
            <div key={s.title} className="relative bg-[color:var(--ld-surface)] border border-[color:var(--ld-rule)] rounded-2xl p-7">
              <div className="absolute -top-5 left-7 font-serif text-[56px] leading-none italic text-[color:var(--ld-accent)] font-bold">
                {s.n || (i + 1)}
              </div>
              <div className="pt-8">
                <h3 className="font-serif text-[22px] font-bold text-[color:var(--ld-ink)] mb-3 leading-tight">{s.title}</h3>
                <p className="text-[14px] text-[color:var(--ld-ink-soft)] leading-[1.65]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Proof({ c }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg)]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-[color:var(--ld-rule)] pt-10">
          {c.stats.map((s) => (
            <div key={s.l}>
              <div className="font-serif text-[60px] lg:text-[72px] leading-none font-bold text-[color:var(--ld-accent)] tracking-tight">
                {s.v}
              </div>
              <div className="mt-3 text-[14px] font-semibold text-[color:var(--ld-ink)]">{s.l}</div>
              {s.sub && <div className="mt-1 text-[12.5px] text-[color:var(--ld-ink-mute)] leading-snug">{s.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Example({ c }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-hero-bg)] text-[color:var(--ld-hero-ink)] relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full opacity-50 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, var(--ld-glow) 0%, transparent 70%)` }} />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[color:var(--ld-accent)] mb-5">
            {c.eyebrow}
          </div>
          <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.05] font-bold tracking-[-0.02em]">
            {c.title}
          </h2>
          <p className="mt-6 text-[16px] lg:text-[17px] text-[color:var(--ld-hero-ink)]/80 leading-[1.7] max-w-[600px]">
            {c.narrative}
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md p-7">
            <div className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[color:var(--ld-accent)] mb-5">
              The maths
            </div>
            <dl className="divide-y divide-white/10">
              {c.ledger.map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[13px] text-[color:var(--ld-hero-ink)]/65">{row.k}</dt>
                  <dd className={`text-[15.5px] font-semibold tabular ${row.highlight ? "text-[color:var(--ld-accent)]" : "text-[color:var(--ld-hero-ink)]"}`}>
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Benefits({ c }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg-2)]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-[1080px]">
          {c.items.map((b, i) => (
            <div key={b.title} className="border-t border-[color:var(--ld-rule)] pt-6">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-[11px] tabular font-bold text-[color:var(--ld-accent)]">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[20px] lg:text-[22px] font-bold text-[color:var(--ld-ink)] leading-tight">
                  {b.title}
                </h3>
              </div>
              <p className="text-[14.5px] text-[color:var(--ld-ink-soft)] leading-[1.65] pl-9">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Eligibility({ c }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg)] border-y border-[color:var(--ld-rule)]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-[color:var(--ld-ink)] mb-4">You qualify if</div>
            <ul className="space-y-2.5">
              {c.qualifies.map((q) => (
                <li key={q} className="flex items-start gap-3 text-[14.5px] text-[color:var(--ld-ink)] leading-[1.6]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--ld-accent)] shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          {c.also && c.also.length > 0 && (
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-[color:var(--ld-ink-soft)] mb-4">We can also work with</div>
              <ul className="space-y-2.5">
                {c.also.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-[14px] text-[color:var(--ld-ink-soft)] leading-[1.6]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--ld-ink-mute)]/60 shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Process({ steps }) {
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg-2)]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow="The path" title="From file to disbursal." />
        <ol className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="font-mono text-[11px] tabular text-[color:var(--ld-accent)] font-bold mb-3">
                STEP {String(i + 1).padStart(2, "0")} · {s.stage}
              </div>
              <h3 className="font-serif text-[20px] font-bold text-[color:var(--ld-ink)] mb-2 leading-tight">{s.title}</h3>
              <p className="text-[13.5px] text-[color:var(--ld-ink-soft)] leading-[1.6]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function Faq({ items }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="py-20 lg:py-28 bg-[color:var(--ld-bg)]">
      <div className="max-w-[920px] mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow="FAQ" title="What promoters ask." />
        <div className="mt-10 border-t border-[color:var(--ld-rule)]">
          {items.map((qa, i) => {
            const open = openIdx === i;
            return (
              <div key={qa.q} className="border-b border-[color:var(--ld-rule)]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-start justify-between gap-6 text-left py-6 hover:opacity-80 transition"
                >
                  <span className="font-serif text-[18px] lg:text-[20px] font-bold text-[color:var(--ld-ink)] leading-snug">{qa.q}</span>
                  <span className="shrink-0 mt-1.5 w-7 h-7 rounded-full grid place-items-center bg-[color:var(--ld-accent-soft)] text-[color:var(--ld-accent)]">
                    {open ? <Minus className="w-3.5 h-3.5" strokeWidth={2.5} /> : <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />}
                  </span>
                </button>
                {open && (
                  <div className="pb-6 -mt-1 text-[14.5px] text-[color:var(--ld-ink-soft)] leading-[1.7] max-w-[760px]">
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
function FinalCta({ c }) {
  return (
    <section className="py-16 lg:py-20 bg-[color:var(--ld-bg)]">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl bg-[color:var(--ld-hero-bg)] text-[color:var(--ld-hero-ink)] p-10 lg:p-14 overflow-hidden">
          <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full opacity-60 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, var(--ld-glow) 0%, transparent 70%)` }} />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-[10.5px] uppercase tracking-[0.18em] font-bold text-[color:var(--ld-hero-ink)] mb-4">
                <Sparkles className="w-3 h-3 text-[color:var(--ld-accent)]" /> One working day
              </div>
              <h2 className="font-serif text-[30px] lg:text-[42px] leading-[1.05] font-bold tracking-[-0.02em]">
                {c.headline}
              </h2>
              <p className="mt-4 text-[15px] lg:text-[16px] text-[color:var(--ld-hero-ink)]/80 leading-[1.65] max-w-[620px]">
                {c.body}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href={c.primary.to}
                className="inline-flex items-center justify-center gap-2 bg-[color:var(--ld-accent)] hover:bg-[color:var(--ld-accent-2)] text-white px-6 py-4 rounded-full font-bold text-[15px] transition"
                style={{ boxShadow: "0 12px 36px var(--ld-glow)" }}
              >
                {c.primary.label} <ArrowRight className="w-4 h-4" />
              </Link>
              {c.secondary && (
                <Link href={c.secondary.to}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-4 font-semibold text-[14px] border border-white/20 rounded-full hover:bg-white/[0.08] text-[color:var(--ld-hero-ink)] transition"
                >
                  {c.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
