// Server component — no 'use client'. The only stateful child (FAQ accordion)
// is imported from MarketingLandingFaq.jsx which carries its own 'use client'.
// This means the H1 in every /lp/* page is server-rendered → immediate LCP.
import Link from "next/link";
import MarketingLandingFaq from "@/components/MarketingLandingFaq";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles, ShieldCheck, Phone,
  Clock,
} from "lucide-react";

/**
 * Main-site-themed landing layout.
 *
 * Uses the same Tailwind tokens as the home/product pages — navy-deep hero,
 * blue/blue-bright accents, surface-2 alternating sections, Inter font.
 * Distinct from `LandingPageLayout` (serif/themed) — that one stays for legacy.
 *
 * Config shape (every section optional except hero + cta):
 *   {
 *     family:   "LAP" | "LRD" | "LAS" | "HL" | "BL" | "PL",
 *     parent:   { label, to },
 *     hero:     { eyebrow, title, accent, lede, bullets[], stats:[{v,l}] },
 *     pillars:  { eyebrow, title, items:[{icon, title, body}] },
 *     numbers:  { eyebrow, title, stats:[{v, l, sub?}] },
 *     howItWorks: { eyebrow, title, steps:[{n,title,body}] },
 *     example:  { eyebrow, title, narrative, ledger:[{k,v,highlight?}] },
 *     compare:  { eyebrow, title, columns:[2 obj], rows:[{dim, a, b}] },
 *     eligibility: { eyebrow, title, qualifies[], also[] },
 *     faqs:     [{ q, a }],
 *     cta:      { headline, body, primary, secondary }
 *   }
 */
export default function MarketingLandingLayout({ family = "LAP", parent, config }) {
  const c = config || {};
  return (
    <div className="bg-white text-ink">
      <Hero family={family} parent={parent} c={c.hero} />
      {c.pillars     && <Pillars c={c.pillars} />}
      {c.numbers     && <Numbers c={c.numbers} />}
      {c.howItWorks  && <HowItWorks c={c.howItWorks} />}
      {c.example     && <Example c={c.example} />}
      {c.compare     && <Compare c={c.compare} />}
      {c.eligibility && <Eligibility c={c.eligibility} />}
      {c.faqs        && <MarketingLandingFaq items={c.faqs} />}
      {c.cta         && <FinalCta c={c.cta} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Hero({ family, parent, c = {} }) {
  return (
    <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.45) 0%, rgba(79,139,255,0.18) 30%, transparent 60%)" }} />
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
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
          {parent && (
            <Link href={parent.to} className="inline-flex items-center gap-1 text-[13px] text-white/65 hover:text-white font-semibold">
              {parent.label} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-[11px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-2.5 py-1 rounded-md font-bold">{family}</span>
              {c.eyebrow && <span className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">{c.eyebrow}</span>}
            </div>

            <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <span>{c.title}</span>
              {c.accent && (
                <>
                  <br />
                  <span className="bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                    {c.accent}
                  </span>
                </>
              )}
            </h1>

            {c.lede && (
              <p className="mt-5 text-[15px] lg:text-[16.5px] text-white/70 leading-relaxed max-w-[620px]">
                {c.lede}
              </p>
            )}

            {c.bullets && c.bullets.length > 0 && (
              <ul className="mt-6 space-y-2.5 max-w-[600px]">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-relaxed">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-bright/20 border border-blue-bright/40 grid place-items-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-blue-bright" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={`/apply?family=${family}`} className="inline-flex items-center gap-2 bg-blue hover:bg-blue-hover text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/lenders" className="inline-flex items-center gap-1.5 text-white/85 hover:text-white px-5 py-3.5 font-semibold text-[15px] border border-white/15 rounded-xl hover:bg-white/[0.06] transition">
                See lender network
              </Link>
            </div>
          </div>

          {c.stats && c.stats.length > 0 && (
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/[0.05] backdrop-blur-md border border-white/10 p-6 lg:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-blue-bright animate-pulse" />
                  <span className="text-[10.5px] uppercase tracking-wider font-bold text-blue-bright">Highlights</span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {c.stats.map((s) => (
                    <div key={s.l} className="border-l-2 border-blue-bright/40 pl-3">
                      <div className="text-[24px] lg:text-[28px] font-extrabold tabular tracking-tight leading-none">{s.v}</div>
                      <div className="mt-2 text-[11.5px] text-white/65 leading-snug">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                  <Trust icon={ShieldCheck} label="0% Foreclosure" />
                  <Trust icon={Clock}        label="7-day sanction" />
                  <Trust icon={Phone}        label="Single RM" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Trust({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <Icon className="w-4 h-4 text-blue-bright" strokeWidth={2.2} />
      <span className="text-[11px] text-white/65 font-semibold leading-tight">{label}</span>
    </div>
  );
}

function SectionHeader({ eyebrow, title, lede, max = "680px" }) {
  return (
    <div className="mb-10" style={{ maxWidth: max }}>
      {eyebrow && <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-3">{eyebrow}</div>}
      <h2 className="text-[28px] lg:text-[38px] leading-[1.1] font-extrabold text-ink tracking-[-0.025em]">{title}</h2>
      {lede && <p className="mt-4 text-[14.5px] text-ink-muted leading-relaxed">{lede}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Pillars({ c }) {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
        <div className="grid md:grid-cols-3 gap-5">
          {c.items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-surface-2 border border-rule p-6 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition">
              {it.icon && (
                <div className="w-10 h-10 rounded-xl bg-ink text-white grid place-items-center mb-4">
                  <it.icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                </div>
              )}
              <h3 className="text-[17px] font-bold text-ink mb-2 tracking-tight">{it.title}</h3>
              <p className="text-[13.5px] text-ink-muted leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Numbers({ c }) {
  return (
    <section className="bg-surface-2 py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.stats.map((s) => (
            <div key={s.l} className="rounded-2xl bg-white border border-rule p-6">
              <div className="text-[36px] lg:text-[44px] font-extrabold text-ink tabular tracking-[-0.03em] leading-none">{s.v}</div>
              <div className="mt-3 text-[13.5px] font-bold text-ink">{s.l}</div>
              {s.sub && <div className="mt-1 text-[11.5px] text-ink-soft leading-snug">{s.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function HowItWorks({ c }) {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} lede={c.lede} />
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-surface-2 border border-rule p-5 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-blue font-bold">STEP {String(i + 1).padStart(2, "0")}</span>
                {s.duration && <span className="text-[11px] font-semibold text-ink-soft tabular">{s.duration}</span>}
              </div>
              <h3 className="text-[15px] font-bold text-ink mb-1.5 leading-tight">{s.title}</h3>
              <p className="text-[12.5px] text-ink-muted leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Example({ c }) {
  return (
    <section className="bg-surface-2 py-16 lg:py-20">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        {c.narrative && (
          <p className="text-[14.5px] text-ink-muted leading-relaxed mb-6 max-w-[820px]">{c.narrative}</p>
        )}
        <div className="rounded-2xl bg-white border border-rule overflow-hidden">
          <table className="w-full text-[13.5px]">
            <tbody className="divide-y divide-rule">
              {c.ledger.map((row) => (
                <tr key={row.k} className={row.highlight ? "bg-blue-soft/40" : ""}>
                  <td className="px-5 py-3.5 text-ink-2 w-[55%]">{row.k}</td>
                  <td className={`px-5 py-3.5 text-right tabular ${row.highlight ? "font-extrabold text-ink" : "font-semibold text-ink"}`}>{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Compare({ c }) {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="rounded-2xl border border-rule overflow-hidden">
          <table className="w-full text-[13.5px]">
            <thead className="bg-ink text-white">
              <tr className="text-left">
                <th className="px-5 py-3.5 font-semibold w-[34%]">Dimension</th>
                <th className="px-5 py-3.5 font-semibold">{c.columns?.[0] || "Option A"}</th>
                <th className="px-5 py-3.5 font-semibold bg-blue/15">{c.columns?.[1] || "Option B"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {c.rows.map((row) => (
                <tr key={row.dim}>
                  <td className="px-5 py-3.5 font-semibold text-ink">{row.dim}</td>
                  <td className="px-5 py-3.5 text-ink-muted">{row.a}</td>
                  <td className="px-5 py-3.5 text-ink bg-blue-soft/30">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Eligibility({ c }) {
  return (
    <section className="bg-surface-2 py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/40 p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white grid place-items-center">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <h3 className="text-[15.5px] font-bold text-ink">You qualify if</h3>
            </div>
            <ul className="space-y-2.5">
              {c.qualifies.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-[13px] text-ink-2 leading-relaxed">
                  <Check className="w-3.5 h-3.5 mt-0.5 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
          {c.also && c.also.length > 0 && (
            <div className="rounded-2xl border border-rule bg-white p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue text-white grid place-items-center">
                  <Sparkles className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <h3 className="text-[15.5px] font-bold text-ink">Also good to know</h3>
              </div>
              <ul className="space-y-2.5">
                {c.also.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-[13px] text-ink-2 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
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

// ─────────────────────────────────────────────────────────────────────────
function FinalCta({ c }) {
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
                <Sparkles className="w-3 h-3" /> Ready when you are
              </div>
              <h2 className="text-[28px] lg:text-[38px] leading-[1.08] font-extrabold tracking-[-0.025em]">{c.headline}</h2>
              {c.body && (
                <p className="mt-4 text-[14.5px] lg:text-[16px] text-white/85 max-w-[620px] leading-relaxed">{c.body}</p>
              )}
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              {c.primary && (
                <Link href={c.primary.to} className="inline-flex items-center justify-center gap-2 bg-white text-blue-deep hover:bg-white/95 px-6 py-3.5 rounded-xl font-bold text-[14.5px] shadow-lg transition">
                  {c.primary.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {c.secondary && (
                <Link href={c.secondary.to} className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 font-semibold text-[14px] border border-white/30 rounded-xl hover:bg-white/[0.10] text-white transition">
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
