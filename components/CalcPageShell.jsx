import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Phone } from "lucide-react";

/**
 * Shared shell for /calculators/* standalone pages.
 * Hero band on top, calculator slot, sticky-bottom Apply CTA.
 *
 * Props:
 *   tag        — short calc name (e.g. "OD → LAP")
 *   title      — h1 (string with optional "—" split)
 *   lede       — sub-headline
 *   children   — the actual calculator component instance
 *   explainer  — optional rich-text block under the calc
 *   applyHref  — defaults to /apply, can pre-fill family/variant
 *   applyText  — CTA copy
 *   related    — array of { to, title, body } for cross-sell
 */
export default function CalcPageShell({
  tag, title, lede, children, explainer,
  applyHref = "/apply", applyText = "Apply for a quote",
  related = [],
}) {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-1/3 -left-1/4 w-[820px] h-[820px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.4) 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white font-medium">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to home
            </Link>
            <Link href="/calculators" className="text-[13px] text-white/65 hover:text-white font-medium">
              All calculators →
            </Link>
          </div>
          <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-3">{tag}</div>
          <h1 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.05] font-extrabold tracking-[-0.03em] max-w-[820px]">
            {title}
          </h1>
          <p className="mt-4 text-[15px] lg:text-[16px] text-white/70 leading-relaxed max-w-[640px]">
            {lede}
          </p>
        </div>
      </section>

      {/* Calculator slot */}
      <section className="bg-surface-2 py-10 lg:py-14">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          {children}

          {explainer && (
            <div className="mt-10 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-12 rounded-2xl bg-white border border-rule p-6 lg:p-8">
                <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold mb-3">How this works</div>
                <div className="prose-explainer text-[14.5px] text-ink-2 leading-relaxed space-y-3">
                  {explainer}
                </div>
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-10">
              <div className="text-[11px] uppercase tracking-wider text-ink-soft font-bold mb-4">Related calculators</div>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.to} href={r.to}
                    className="group rounded-xl bg-white border border-rule p-4 hover:border-blue/30 hover:shadow-md transition flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[14px] font-bold text-ink mb-1">{r.title}</div>
                      <div className="text-[12px] text-ink-muted leading-snug">{r.body}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 mt-1 text-ink-soft group-hover:text-blue group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-t border-rule py-10">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8 grid sm:grid-cols-3 gap-4">
          {[
            { i: ShieldCheck, t: "0% Foreclosure",  s: "Statpro guarantee on every new sanction" },
            { i: Sparkles,    t: "₹0 our fee",      s: "Lender pays us, you pay nothing" },
            { i: Phone,       t: "Single RM",       s: "One person owns your file end-to-end" },
          ].map(({ i: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl bg-surface-2 border border-rule px-4 py-3">
              <Icon className="w-4 h-4 text-blue shrink-0" strokeWidth={2.4} />
              <div className="min-w-0">
                <div className="text-[13px] font-bold text-ink">{t}</div>
                <div className="text-[11.5px] text-ink-muted truncate">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer for sticky bar */}
      <div className="h-24" aria-hidden />

      {/* Sticky bottom Apply CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-rule shadow-lg">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="w-4 h-4 text-blue shrink-0" strokeWidth={2.4} />
            <div className="text-[13px] text-ink-2 truncate">
              <strong className="text-ink">Like the numbers?</strong> Get a real quote from 4–5 lenders in 1 working day.
            </div>
          </div>
          <Link
            href={applyHref}
            className="inline-flex items-center gap-2 bg-blue text-white hover:bg-blue-hover transition px-5 py-2.5 rounded-xl font-semibold text-[14px] shadow-lg shadow-blue/30 shrink-0"
          >
            {applyText} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
