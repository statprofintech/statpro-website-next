"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Mail, Loader2, CheckCircle2, AlertCircle, Lock,
  ShieldCheck, Sparkles, Phone,
} from "lucide-react";
import Logo from "@/components/Logo";
import { requestSignInLink } from "@/lib/clientAuth";

export default function ClientSignInPage() {
  const [email, setEmail]     = useState("");
  const [error, setError]     = useState(null);
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setLoading(true);
    try {
      await requestSignInLink(email);
      setSent(true);
    } catch (err) {
      setError(err.message || "Could not send sign-in link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] bg-white">

      {/* ── LEFT: form pane ──────────────────────────────────────── */}
      <div className="flex flex-col min-h-screen">
        <div className="px-8 lg:px-14 pt-8 pb-4 flex items-center justify-between">
          <Link href="/" aria-label="StatPro India home">
            <Logo size={42} />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-soft hover:text-ink font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-8 lg:px-14 py-10">
          <div className="w-full max-w-[420px]">
            <div className="mb-7">
              <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-2">Client portal</div>
              <h1 className="text-[28px] lg:text-[32px] font-extrabold text-ink tracking-[-0.025em] leading-[1.15]">
                Sign in to track your application.
              </h1>
              <p className="mt-2 text-[14px] text-ink-muted leading-relaxed">
                Use the email you submitted on your /apply form. We'll send you a secure sign-in link — no password needed.
              </p>
            </div>

            {sent ? (
              <SuccessCard email={email} onSendAgain={() => { setSent(false); setEmail(""); }} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <div className="text-[13px]">{error}</div>
                  </div>
                )}

                <div>
                  <label className="block text-[12px] font-semibold text-ink-2 mb-1.5">
                    Email <span className="text-coral">*</span>
                  </label>
                  <div className="relative flex items-stretch rounded-lg border border-rule bg-white focus-within:border-blue focus-within:ring-2 focus-within:ring-blue/20 transition">
                    <span className="inline-flex items-center px-3 text-ink-soft border-r border-rule bg-surface-2 rounded-l-lg">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoFocus
                      className="flex-1 px-4 py-3 bg-transparent text-[14.5px] text-ink placeholder:text-ink-soft focus:outline-none rounded-r-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue text-white hover:bg-blue-hover transition px-5 py-3 rounded-lg font-semibold text-[14.5px] shadow-lg shadow-blue/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending link…</>
                    : <>Email me a sign-in link <ArrowRight className="w-4 h-4" /></>}
                </button>

                <div className="pt-3 border-t border-rule text-center text-[12.5px] text-ink-muted">
                  New to Statpro?{" "}
                  <Link href="/apply" className="text-blue font-semibold hover:text-blue-hover">
                    Submit an enquiry first →
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="px-8 lg:px-14 pb-6 flex items-center gap-2 text-[11.5px] text-ink-soft">
          <Lock className="w-3.5 h-3.5" />
          <span>Encrypted · DPDPA-compliant · No spam, ever.</span>
        </div>
      </div>

      {/* ── RIGHT: brand pane ────────────────────────────────────── */}
      <div className="hidden lg:block bg-navy-deep text-white relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-1/3 -right-1/4 w-[920px] h-[920px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.45) 0%, transparent 60%)" }} />
          <div className="absolute -bottom-32 -left-32 w-[680px] h-[680px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.32) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.10]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }} />
        </div>

        <div className="relative h-full flex flex-col px-12 xl:px-16 py-12">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] font-semibold text-white/85 self-start">
            <Sparkles className="w-3 h-3 text-blue-bright" strokeWidth={2.5} />
            <span><span className="font-bold text-white">19</span> lender partners · DSA to RBI-regulated banks &amp; NBFCs</span>
          </div>

          <div className="mt-auto mb-auto pt-8">
            <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-3">Your client portal</div>
            <h2 className="text-[40px] xl:text-[46px] leading-[1.05] font-extrabold tracking-[-0.025em]">
              Track your loan,
              <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
                end to end.
              </span>
            </h2>
            <p className="mt-5 text-[15px] text-white/70 leading-relaxed max-w-[460px]">
              See where your file is in our pipeline, who's working on it, and upload the documents we need — all in one place.
            </p>

            <ul className="mt-8 space-y-3.5 max-w-[460px]">
              {[
                { t: "Real-time deal status",    s: "From Web Lead → Sanctioned → Disbursed." },
                { t: "Stage-by-stage timeline",  s: "Every move logged with timestamp and RM name." },
                { t: "Secure document upload",   s: "Same place we collect KYC, financials, property docs." },
              ].map((it) => (
                <li key={it.t} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-bright shrink-0" />
                  <div>
                    <div className="text-[13.5px] font-bold text-white">{it.t}</div>
                    <div className="text-[12px] text-white/60 mt-0.5">{it.s}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { Icon: ShieldCheck, t: "0% Foreclosure",  s: "Statpro guarantee" },
              { Icon: Sparkles,    t: "₹0 our fee",      s: "Lender pays us" },
              { Icon: Phone,       t: "Single RM",       s: "Owns your file" },
            ].map(({ Icon, t, s }) => (
              <div key={t} className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
                <Icon className="w-4 h-4 text-blue-bright mb-2" strokeWidth={2.4} />
                <div className="text-[12px] font-bold text-white leading-tight">{t}</div>
                <div className="text-[10.5px] text-white/55 mt-0.5">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessCard({ email, onSendAgain }) {
  return (
    <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6">
      <div className="w-10 h-10 rounded-xl bg-emerald-600 grid place-items-center mb-3">
        <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.4} />
      </div>
      <div className="text-[16px] font-bold text-emerald-900 mb-1">Check your inbox</div>
      <p className="text-[13.5px] text-emerald-800 leading-relaxed">
        If <strong>{email}</strong> matches an enquiry you submitted, we've sent a sign-in link.
        It's valid for 7 days. Open it on this device to land on your dashboard.
      </p>
      <button
        type="button"
        onClick={onSendAgain}
        className="mt-4 text-[12.5px] font-semibold text-emerald-900 underline hover:text-emerald-700"
      >
        Use a different email
      </button>
    </div>
  );
}
