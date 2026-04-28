"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Mail, Phone, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/company";
export { COMPANY };

/**
 * Shared layout for legal pages. Pass:
 *   - tag         (e.g. "PRIVACY")
 *   - eyebrow     (e.g. "Legal · Privacy Policy")
 *   - title       (split on em-dash for gradient styling)
 *   - lede        (one paragraph)
 *   - lastUpdated (string, e.g. "27 April 2026")
 *   - sections    (array of { id, title, body: ReactNode })
 *   - relatedLinks (optional array of { label, to })
 */
export default function LegalPageLayout({
  tag,
  eyebrow,
  title,
  lede,
  lastUpdated,
  sections,
  relatedLinks = [
    { label: "Privacy Policy",       to: "/privacy" },
    { label: "Terms of Service",     to: "/terms" },
    { label: "Grievance Redressal",  to: "/grievance" },
    { label: "Disclosures",          to: "/disclosures" },
    { label: "Cookie Policy",        to: "/cookies" },
  ],
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div>
      <Hero tag={tag} eyebrow={eyebrow} title={title} lede={lede} lastUpdated={lastUpdated} />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* TOC */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="text-[11px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Contents</div>
                <ol className="space-y-1 border-l border-rule">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block pl-4 py-1.5 text-[13px] leading-snug border-l-2 -ml-px transition ${
                          activeId === s.id
                            ? "border-blue text-ink font-semibold"
                            : "border-transparent text-ink-muted hover:text-ink hover:border-blue/40"
                        }`}
                      >
                        <span className="font-mono text-[10.5px] text-ink-soft mr-2">{String(i + 1).padStart(2, "0")}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-9">
              <article className="space-y-12">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-mono text-[11px] text-blue bg-blue-soft px-2 py-1 rounded-md font-bold">
                        §{String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-[22px] lg:text-[26px] font-extrabold text-ink tracking-tight leading-tight">
                        {s.title}
                      </h2>
                    </div>
                    <div className="prose-legal text-[14.5px] text-ink-2 leading-[1.7] space-y-4">
                      {s.body}
                    </div>
                  </section>
                ))}
              </article>

              <div className="mt-14 pt-8 border-t border-rule grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-blue font-bold mb-2">Questions?</div>
                  <p className="text-[13.5px] text-ink-muted leading-relaxed">
                    Write to us at{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-blue font-semibold hover:text-blue-hover">
                      {COMPANY.email}
                    </a>{" "}
                    or call{" "}
                    <a href={`tel:${COMPANY.phoneHref}`} className="text-blue font-semibold hover:text-blue-hover tabular">
                      {COMPANY.phone}
                    </a>
                    . We respond within one working day.
                  </p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-blue font-bold mb-2">Other policies</div>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-ink-2">
                    {relatedLinks.map((l) => (
                      <li key={l.to}>
                        <Link href={l.to} className="hover:text-blue underline decoration-rule hover:decoration-blue/60 underline-offset-2">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </div>
  );
}

function Hero({ tag, eyebrow, title, lede, lastUpdated }) {
  const dashIdx = title.indexOf("—");
  let first = title;
  let rest = "";
  if (dashIdx !== -1) {
    first = title.slice(0, dashIdx).trim();
    if (!/[.,?!:;]$/.test(first)) first += ",";
    rest = title.slice(dashIdx + 1).trim();
    rest = rest.charAt(0).toUpperCase() + rest.slice(1);
  }

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
            <span className="font-mono text-[11px] text-blue-bright bg-blue-bright/10 border border-blue-bright/20 px-2.5 py-1 rounded-md font-bold">{tag}</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-white/55 font-semibold">Legal</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-4">{eyebrow}</div>
            <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em]">
              {rest ? (
                <>
                  <span>{first}</span>{" "}
                  <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                    {rest}
                  </span>
                </>
              ) : (
                <span>{first}</span>
              )}
            </h1>
            <p className="mt-5 text-[15px] lg:text-[16.5px] text-white/70 leading-relaxed max-w-[640px]">{lede}</p>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 p-5 lg:p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-blue-bright" strokeWidth={2.2} />
                <div className="text-[10.5px] uppercase tracking-wider font-bold text-blue-bright">Document</div>
              </div>
              <dl className="space-y-2.5 text-[12.5px]">
                <Row k="Issued by" v={COMPANY.legalName} />
                <Row k="Last updated" v={lastUpdated} />
                <Row k="Jurisdiction" v="India · Courts of Kolkata" />
                <Row k="Governing law" v="Laws of India" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-white/55 shrink-0">{k}</dt>
      <dd className="text-white font-semibold text-right">{v}</dd>
    </div>
  );
}

function ContactBand() {
  return (
    <section className="bg-surface-2 py-16 lg:py-20 border-t border-rule">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white overflow-hidden p-8 lg:p-12 shadow-2xl shadow-emerald-700/20">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full opacity-50"
              style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.20) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full opacity-40"
              style={{ background: "radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />
          </div>
          <div className="relative grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-white mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Reach the company
              </div>
              <h2 className="text-[26px] lg:text-[34px] leading-[1.1] font-extrabold tracking-[-0.02em]">
                Questions about this policy? Talk to us.
              </h2>
              <p className="mt-3 text-[14px] text-white/85 leading-relaxed">
                Single mailbox, single number — we respond within one working day.
              </p>
              <div className="mt-5 flex flex-col gap-2 text-[14px]">
                <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 text-white hover:text-white/85">
                  <Mail className="w-4 h-4" strokeWidth={2.4} /> <span className="font-semibold">{COMPANY.email}</span>
                </a>
                <a href={`tel:${COMPANY.phoneHref}`} className="inline-flex items-center gap-2 text-white hover:text-white/85">
                  <Phone className="w-4 h-4" strokeWidth={2.4} /> <span className="font-semibold tabular">{COMPANY.phone}</span>
                </a>
              </div>
              <Link href="/apply" className="mt-6 inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-white/95 px-5 py-3 rounded-xl font-bold text-[14px] shadow-lg transition">
                Talk to an advisor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              <AddressCard tag="Head Office" lines={COMPANY.headOffice} />
              <AddressCard tag="Registered Office" lines={COMPANY.regdOffice} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AddressCard({ tag, lines }) {
  return (
    <div className="rounded-2xl bg-white/[0.10] border border-white/20 backdrop-blur-sm p-5">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-3.5 h-3.5" strokeWidth={2.4} />
        <div className="text-[10.5px] uppercase tracking-wider font-bold">{tag}</div>
      </div>
      <address className="not-italic text-[12.5px] leading-relaxed text-white/85 space-y-0.5">
        {lines.map((l) => (<div key={l}>{l}</div>))}
      </address>
    </div>
  );
}
