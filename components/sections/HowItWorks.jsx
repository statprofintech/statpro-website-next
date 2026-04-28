import { ClipboardList, FolderArchive, Layers, ScrollText } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    n: "01",
    title: "Tell us your need",
    body: "Loan type, ticket size, collateral, timeline. 5 fields. 2 minutes.",
    detail: "Mobile OTP only. No hard credit pull. No paperwork yet.",
  },
  {
    icon: FolderArchive,
    n: "02",
    title: "We package one file",
    body: "KYC + income + property + business proofs. Pre-vetted by an RM.",
    detail: "You upload once. We standardise it for every lender's underwriting team.",
  },
  {
    icon: Layers,
    n: "03",
    title: "Parallel underwriting",
    body: "We pitch the file to 4–5 right-fit lenders simultaneously.",
    detail: "Different lenders, different appetites, different rates. We negotiate them against each other.",
  },
  {
    icon: ScrollText,
    n: "04",
    title: "You pick the best offer",
    body: "We hand you sanction letters side-by-side. You choose. We co-ordinate disbursal.",
    detail: "Single point of contact through disbursal — no chasing branches.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mb-14">
          <div className="text-[12px] uppercase tracking-[0.16em] text-coral font-bold mb-4">How it works</div>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
            One file, four lenders, <span className="text-ink-soft">best terms.</span>
          </h2>
          <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-[580px]">
            We don't just pass your file along — we structure it, negotiate it, and place it. RM-led from intake to disbursal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <article key={s.n} className="relative group">
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-[calc(100%-40px+24px)] h-px bg-rule pointer-events-none" />
              )}

              <div className="relative rounded-3xl bg-surface-2 border border-rule p-6 lg:p-7 h-full hover:border-coral/40 transition">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-rule grid place-items-center">
                    <s.icon className="w-5 h-5 text-coral" strokeWidth={2.3} />
                  </div>
                  <div className="font-mono text-[12px] font-bold text-ink-soft tabular">{s.n}</div>
                </div>
                <h3 className="text-[18px] font-bold text-ink leading-tight mb-2 tracking-tight">{s.title}</h3>
                <p className="text-[13.5px] text-ink-muted leading-relaxed mb-3">{s.body}</p>
                <p className="text-[12px] text-ink-soft leading-relaxed border-t border-rule pt-3 mt-auto">{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
