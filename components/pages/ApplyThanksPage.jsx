"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, Phone, Mail, Calculator, ArrowRight, ShieldCheck } from "lucide-react";

const FAMILY_LABELS = {
  LAP: "Loan Against Property",
  LRD: "Loan Against Rental",
  LAS: "Loan Against Securities",
  HL:  "Home Loan",
  BL:  "Business Loan",
  PL:  "Personal Loan",
};

// In Next.js the App-router replacement for react-router's location-state is
// either query params or sessionStorage. ApplyPage now writes the post-submit
// payload to sessionStorage under "apply.thanks"; this page reads + clears it.
function readApplyState() {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("apply.thanks");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function ApplyThanksPage() {
  const router = useRouter();
  const [state, setState] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const s = readApplyState();
    if (!s || !s.refId) {
      router.replace("/apply");
      return;
    }
    setState(s);
    setHydrated(true);
  }, [router]);

  if (!hydrated || !state) return null;

  const { refId, family, mobile, email } = state;
  const familyLabel = FAMILY_LABELS[family] || family;

  return (
    <div>
      <section className="relative bg-navy-deep text-white overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(34,197,94,0.35) 0%, transparent 60%)" }} />
        </div>
        <div className="relative max-w-[860px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 grid place-items-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" strokeWidth={2.2} />
          </div>
          <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-emerald-300 mb-3">
            Enquiry received
          </div>
          <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em]">
            Thank you, your <br className="sm:hidden" />
            <span className="bg-gradient-to-br from-emerald-300 via-emerald-200 to-white bg-clip-text text-transparent">
              {familyLabel} enquiry is in.
            </span>
          </h1>
          <p className="mt-5 text-[15px] lg:text-[17px] text-white/75 leading-relaxed max-w-[640px] mx-auto">
            Your reference number is{" "}
            <strong className="font-mono bg-white/10 border border-white/20 rounded-md px-2 py-0.5 text-white">{refId}</strong>.
            A relationship manager will call you on <strong className="text-white">{mobile}</strong> within 1 working day.
          </p>
        </div>
      </section>

      <section className="bg-surface-2 py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-5">
          {[
            { Icon: Phone, t: "Single RM call-back",
              s: `We'll call you on ${mobile} within 1 working day.` },
            { Icon: Mail, t: "Confirmation email",
              s: `A summary plus reference ${refId} is on its way to ${email}.` },
            { Icon: ShieldCheck, t: "0% Foreclosure",
              s: "Statpro guarantee — locked into the sanction letter." },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="rounded-2xl bg-white border border-rule p-6">
              <div className="w-10 h-10 rounded-xl bg-blue text-white grid place-items-center mb-4">
                <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
              </div>
              <h3 className="text-[15.5px] font-bold text-ink mb-1.5 tracking-tight">{t}</h3>
              <p className="text-[13px] text-ink-muted leading-relaxed">{s}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[1080px] mx-auto px-6 lg:px-8 mt-10 grid sm:grid-cols-2 gap-4">
          <Link href="/" className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-white border border-rule p-5 hover:border-blue/40 hover:shadow-lg transition">
            <div>
              <div className="text-[14px] font-bold text-ink">Back to home</div>
              <div className="text-[12px] text-ink-muted mt-0.5">See what else we do.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-ink-soft group-hover:text-blue group-hover:translate-x-0.5 transition-all" />
          </Link>
          <Link href="/#calculator" className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-blue/5 border border-blue/20 p-5 hover:bg-blue/10 transition">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue text-white grid place-items-center">
                <Calculator className="w-4 h-4" strokeWidth={2.4} />
              </div>
              <div>
                <div className="text-[14px] font-bold text-ink">Run your numbers</div>
                <div className="text-[12px] text-ink-muted mt-0.5">5 calculators tuned for {familyLabel}.</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
      </section>
    </div>
  );
}
