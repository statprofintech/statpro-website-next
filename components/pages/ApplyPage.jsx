"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Phone, Mail,
  AlertCircle, Loader2, Check, Banknote, Lock,
} from "lucide-react";
import { CRM_API_URL } from "@/lib/config";
import Logo from "@/components/Logo";

const FAMILIES = [
  { code: "LAP", label: "Loan Against Property" },
  { code: "LRD", label: "Loan Against Rental"   },
  { code: "LAS", label: "Loan Against Securities" },
  { code: "HL",  label: "Home Loan"             },
  { code: "BL",  label: "Business Loan"         },
  { code: "PL",  label: "Personal Loan"         },
];

const VARIANTS = {
  LAP: ["Fresh", "BT", "BT + Top-up", "Dropline OD"],
  LRD: ["Fresh", "BT", "BT + Top-up", "Multi-lessee"],
  LAS: ["Equities", "Mutual funds", "SGB / ETF"],
  HL:  ["Fresh", "BT", "BT + Top-up", "Construction"],
  BL:  ["Term Loan", "Dropline OD", "Doctor", "Women-led"],
  PL:  ["Salaried", "Wedding", "Medical", "Edu / Travel"],
};

const PURPOSES = [
  { value: "fresh_purchase", label: "Fresh purchase"  },
  { value: "bt",             label: "Balance Transfer" },
  { value: "bt_topup",       label: "BT + Top-up"      },
  { value: "top_up",         label: "Top-up only"      },
  { value: "lrd",            label: "Lease Rental Discounting" },
  { value: "wc",             label: "Working capital"  },
  { value: "other",          label: "Other"            },
];

const FAMILY_FLOORS = {
  LAP: "7.90%", LRD: "7.95%", LAS: "9.25%",
  HL:  "7.15%", BL:  "15.50%", PL: "9.90%",
};

const SECURED_FAMILIES = new Set(["LAP", "LRD", "HL"]);

const PROPERTY_TYPES = [
  "Residential apartment", "Residential villa / house",
  "Commercial office", "Commercial shop / showroom",
  "Industrial shed / factory", "Warehouse",
  "Hospital / school / hotel / banquet", "Vacant land", "Other",
];

const PAN_REGEX    = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PIN_REGEX    = /^\d{6}$/;

const STEPS = [
  { id: 1, title: "About you" },
  { id: 2, title: "Loan you need" },
  { id: 3, title: "Property & review" },
];

function familyLabel(code) {
  return FAMILIES.find((f) => f.code === code)?.label ?? code;
}

export default function ApplyPage() {
  const router = useRouter();
  const params = useSearchParams();

  const initialFamily  = (params.get("family") || "LAP").toUpperCase();
  const initialVariant = params.get("variant") || (VARIANTS[initialFamily]?.[0] ?? "");

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    ownerName: params.get("name")  || "",
    mobile:    (params.get("phone") || "").replace(/\D/g, "").slice(-10),
    email:     params.get("email") || "",
    pan: "",
    gstin: "", tradeName: "", entityType: "",
    family: FAMILIES.some((f) => f.code === initialFamily) ? initialFamily : "LAP",
    variant: initialVariant,
    purpose: "fresh_purchase",
    requestedAmountInr: (params.get("amount") || "").replace(/\D/g, ""),
    requestedTenureMonths: "",
    propertyType: "", propertyCity: "", propertyPincode: "",
    propertyAddress: "", indicativeValueInr: "",
    notes: params.get("notes") || "",
  });

  const [errors, setErrors]     = useState({});
  const [submitting, setSubmit] = useState(false);
  const [topError, setTopError] = useState(null);

  const isSecured = SECURED_FAMILIES.has(form.family);

  useEffect(() => {
    const list = VARIANTS[form.family] || [];
    if (!list.includes(form.variant)) {
      setForm((s) => ({ ...s, variant: list[0] || "" }));
    }
  }, [form.family]); // eslint-disable-line react-hooks/exhaustive-deps

  function set(k, v) { setForm((s) => ({ ...s, [k]: v })); }

  function validateStep(n) {
    const e = {};
    if (n === 1) {
      if (!form.ownerName.trim())             e.ownerName = "Required";
      if (!MOBILE_REGEX.test(form.mobile))    e.mobile    = "10-digit Indian mobile (starts 6–9)";
      if (!EMAIL_REGEX.test(form.email))      e.email     = "Valid email required";
      if (!PAN_REGEX.test(form.pan.toUpperCase())) e.pan  = "Valid PAN required (e.g. ABCDE1234F)";
    }
    if (n === 2) {
      if (!form.family)                       e.family    = "Select a loan family";
      if (!form.variant)                      e.variant   = "Select a variant";
      if (!form.purpose)                      e.purpose   = "Select a purpose";
      const amt = Number(form.requestedAmountInr);
      if (!amt || amt < 100000)               e.requestedAmountInr = "Min ₹1 Lakh";
      const tenureMo = Number(form.requestedTenureMonths);
      if (!tenureMo || tenureMo < 6 || tenureMo > 360) e.requestedTenureMonths = "6 – 360 months";
    }
    if (n === 3) {
      if (form.propertyPincode && !PIN_REGEX.test(form.propertyPincode)) {
        e.propertyPincode = "6-digit PIN";
      }
    }
    return e;
  }

  function handleNext() {
    setTopError(null);
    const v = validateStep(step);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setErrors({});
    setStep((s) => Math.min(3, s + 1));
  }

  function handleBack() {
    setTopError(null);
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit() {
    setTopError(null);
    const all = { ...validateStep(1), ...validateStep(2), ...validateStep(3) };
    setErrors(all);
    if (Object.keys(all).length > 0) {
      if (Object.keys(validateStep(1)).length) setStep(1);
      else if (Object.keys(validateStep(2)).length) setStep(2);
      return;
    }
    setSubmit(true);
    try {
      const r = await fetch(`${CRM_API_URL}/api/public/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pan: form.pan.toUpperCase().trim(),
          gstin: form.gstin.toUpperCase().trim(),
          requestedAmountInr: Number(form.requestedAmountInr),
          requestedTenureMonths: Number(form.requestedTenureMonths),
          indicativeValueInr: Number(form.indicativeValueInr) || 0,
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.status === 201) {
        // Stash payload for the thanks page (Next App-router has no
        // location.state, so we use sessionStorage as the bridge).
        try {
          sessionStorage.setItem("apply.thanks", JSON.stringify({
            refId: data.refId, family: form.family, mobile: form.mobile, email: form.email,
          }));
        } catch {}
        router.replace("/apply/thanks");
        return;
      }
      if (r.status === 400 && data.fieldErrors) {
        setErrors(data.fieldErrors);
        if (data.fieldErrors.ownerName || data.fieldErrors.mobile || data.fieldErrors.email || data.fieldErrors.pan) setStep(1);
        else if (data.fieldErrors.family || data.fieldErrors.variant || data.fieldErrors.purpose || data.fieldErrors.requestedAmountInr || data.fieldErrors.requestedTenureMonths) setStep(2);
        setTopError("Please fix the highlighted fields.");
        return;
      }
      if (r.status === 409) { setTopError(data.detail || "We already have an enquiry against this PAN. Our team will reach out shortly."); return; }
      if (r.status === 429) { setTopError("Too many requests in a short period. Please try again in a minute."); return; }
      setTopError(data.detail || data.error || "Something went wrong. Please try again.");
    } catch (err) {
      console.error(err);
      setTopError("We couldn't reach our servers. Check your network and retry.");
    } finally {
      setSubmit(false);
    }
  }

  const variantOptions = VARIANTS[form.family] || [];

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] bg-white">

      {/* ── LEFT: form pane ──────────────────────────────────────── */}
      <div className="flex flex-col min-h-screen">
        {/* Top brand bar */}
        <div className="px-8 lg:px-14 pt-8 pb-4 flex items-center justify-between">
          <Link href="/" aria-label="StatPro India home">
            <Logo size={42} />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-soft hover:text-ink font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
        </div>

        {/* Form container — vertically centered, generous padding */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-14 py-10">
          <div className="w-full max-w-[480px]">

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-[28px] lg:text-[32px] font-extrabold text-ink tracking-[-0.025em] leading-[1.15]">
                Apply for a quote
              </h1>
              <p className="mt-2 text-[14px] text-ink-muted leading-relaxed">
                Three quick steps. We pitch your file to 4–5 right-fit lenders.
              </p>
            </div>

            {/* Step pills */}
            <div className="mb-7 flex items-center gap-2">
              {STEPS.map((s) => {
                const done = s.id < step, active = s.id === step;
                return (
                  <div key={s.id} className="flex-1">
                    <div className={`h-1 rounded-full ${done ? "bg-emerald-500" : active ? "bg-blue" : "bg-rule"}`} />
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className={`font-mono text-[10.5px] font-bold ${done ? "text-emerald-600" : active ? "text-blue" : "text-ink-soft"}`}>
                        {String(s.id).padStart(2, "0")}
                      </span>
                      <span className={`text-[11.5px] font-semibold ${active ? "text-ink" : "text-ink-soft"}`}>
                        {s.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {topError && (
              <div className="mb-5 rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="text-[13px]">{topError}</div>
              </div>
            )}

            <form
              onSubmit={(e) => { e.preventDefault(); if (step < 3) handleNext(); else handleSubmit(); }}
              className="space-y-5"
            >
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <TextField label="Full name" value={form.ownerName} onChange={(v) => set("ownerName", v)} error={errors.ownerName} required placeholder="As per PAN" autoFocus />
                  <TextField label="PAN" value={form.pan} onChange={(v) => set("pan", v.toUpperCase())} error={errors.pan} placeholder="ABCDE1234F" required maxLength={10} mono />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField label="Mobile" value={form.mobile} onChange={(v) => set("mobile", v.replace(/\D/g, "").slice(0, 10))} error={errors.mobile} placeholder="9876543210" required type="tel" prefix="+91" />
                    <TextField label="Email" value={form.email} onChange={(v) => set("email", v)} error={errors.email} placeholder="you@example.com" required type="email" />
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SelectField label="Loan family" value={form.family} onChange={(v) => set("family", v)} error={errors.family} required
                      options={FAMILIES.map((f) => ({ value: f.code, label: f.label }))} />
                    <SelectField label="Variant" value={form.variant} onChange={(v) => set("variant", v)} error={errors.variant} required options={variantOptions} />
                  </div>
                  <SelectField label="Purpose" value={form.purpose} onChange={(v) => set("purpose", v)} error={errors.purpose} required
                    options={PURPOSES.map((p) => ({ value: p.value, label: p.label }))} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField label="Loan amount (₹)" value={form.requestedAmountInr} onChange={(v) => set("requestedAmountInr", v.replace(/\D/g, ""))} error={errors.requestedAmountInr} placeholder="2500000" required mono />
                    <TextField label="Tenure (months)" value={form.requestedTenureMonths} onChange={(v) => set("requestedTenureMonths", v.replace(/\D/g, "").slice(0, 3))} error={errors.requestedTenureMonths} placeholder="120" required mono />
                  </div>

                  <details className="group rounded-lg border border-rule">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-[12.5px] font-semibold text-ink-2 hover:text-ink">
                      <span>Add business details (optional)</span>
                      <span className="text-[18px] text-ink-soft group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 space-y-4">
                      <TextField label="Trade / business name" value={form.tradeName} onChange={(v) => set("tradeName", v)} placeholder="ABC Enterprises" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <TextField label="GSTIN" value={form.gstin} onChange={(v) => set("gstin", v.toUpperCase())} maxLength={15} mono placeholder="22AAAAA0000A1Z5" />
                        <SelectField label="Entity type" value={form.entityType} onChange={(v) => set("entityType", v)} options={["", "Proprietorship", "Partnership", "LLP", "Private Limited", "Public Limited"]} />
                      </div>
                    </div>
                  </details>
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <>
                  {isSecured && (
                    <>
                      <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold">Property details</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <SelectField label="Property type" value={form.propertyType} onChange={(v) => set("propertyType", v)} options={["", ...PROPERTY_TYPES]} />
                        <TextField label="Indicative value (₹)" value={form.indicativeValueInr} onChange={(v) => set("indicativeValueInr", v.replace(/\D/g, ""))} placeholder="10000000" mono />
                        <TextField label="City" value={form.propertyCity} onChange={(v) => set("propertyCity", v)} placeholder="Kolkata" />
                        <TextField label="PIN code" value={form.propertyPincode} onChange={(v) => set("propertyPincode", v.replace(/\D/g, "").slice(0, 6))} error={errors.propertyPincode} placeholder="700001" mono />
                      </div>
                      <TextField label="Address (optional)" value={form.propertyAddress} onChange={(v) => set("propertyAddress", v)} placeholder="Building, street, area" />
                    </>
                  )}

                  <div>
                    <label className="block text-[12px] font-semibold text-ink-2 mb-1.5">Anything else (optional)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      placeholder="Existing lender, urgency, special requirements…"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-rule bg-white text-[14.5px] text-ink placeholder:text-ink-soft focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 resize-none"
                    />
                  </div>

                  <ReviewStrip form={form} />
                </>
              )}

              {/* Buttons */}
              <div className="pt-2 flex items-center gap-3">
                {step > 1 && (
                  <button type="button" onClick={handleBack}
                    className="inline-flex items-center justify-center gap-1.5 text-[14px] font-semibold text-ink-2 hover:text-ink px-5 py-3 rounded-lg border border-rule hover:bg-surface-2 transition">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                )}
                {step < 3 ? (
                  <button type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-blue transition px-5 py-3 rounded-lg font-semibold text-[14.5px]">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit" disabled={submitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue text-white hover:bg-blue-hover transition px-5 py-3 rounded-lg font-semibold text-[14.5px] shadow-lg shadow-blue/30 disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Send my enquiry <ArrowRight className="w-4 h-4" /></>}
                  </button>
                )}
              </div>

              {step === 3 && (
                <p className="text-[11.5px] text-ink-soft leading-relaxed pt-2">
                  By submitting you consent to a callback and email follow-up per our DPDPA-compliant privacy policy.
                  Statpro is paid by the lender — you pay us nothing.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer trust line */}
        <div className="px-8 lg:px-14 pb-6 flex items-center gap-2 text-[11.5px] text-ink-soft">
          <Lock className="w-3.5 h-3.5" />
          <span>Encrypted submission · DPDPA-compliant · No spam, ever.</span>
        </div>
      </div>

      {/* ── RIGHT: brand pane (sticky full-height on lg+) ────────── */}
      <div className="hidden lg:block bg-navy-deep text-white relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        {/* Decorative backdrop */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-1/3 -right-1/4 w-[920px] h-[920px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.45) 0%, rgba(79,139,255,0.15) 30%, transparent 60%)" }} />
          <div className="absolute -bottom-32 -left-32 w-[680px] h-[680px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.32) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.10]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }} />
        </div>

        <BrandPane family={form.family} amount={form.requestedAmountInr} step={step} />
      </div>
    </div>
  );
}

// ── Right brand pane content ────────────────────────────────────────────
function BrandPane({ family, amount, step }) {
  const fam   = familyLabel(family);
  const floor = FAMILY_FLOORS[family] || "—";
  const amt   = Number(amount);
  const fmtAmt = (n) => {
    if (!n) return null;
    if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
    if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
    return `₹${n.toLocaleString("en-IN")}`;
  };
  const enquiryAmt = fmtAmt(amt);

  return (
    <div className="relative h-full flex flex-col px-12 xl:px-16 py-12">
      <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] font-semibold text-white/85 self-start">
        <Sparkles className="w-3 h-3 text-blue-bright" strokeWidth={2.5} />
        <span><span className="font-bold text-white">19</span> lender partners · DSA to RBI-regulated banks &amp; NBFCs</span>
      </div>

      <div className="mt-auto mb-auto pt-8">
        <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue-bright mb-3">
          Quotes from 4–5 lenders
        </div>
        <h2 className="text-[40px] xl:text-[46px] leading-[1.05] font-extrabold tracking-[-0.025em]">
          Lower your cost of capital,
          <span className="block bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">
            in one application.
          </span>
        </h2>
        <p className="mt-5 text-[15px] text-white/70 leading-relaxed max-w-[460px]">
          We pitch your file to 4–5 right-fit lenders simultaneously. They negotiate against each other; you sign the best terms — not the first offer.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 max-w-[460px]">
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
            <div className="text-[10.5px] uppercase tracking-wider text-white/55 font-bold">Panel floor for</div>
            <div className="mt-1 text-[12px] text-white/85 font-semibold truncate">{fam}</div>
            <div className="mt-2 text-[28px] font-extrabold text-blue-bright tabular tracking-tight leading-none">{floor}</div>
          </div>
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
            <div className="text-[10.5px] uppercase tracking-wider text-white/55 font-bold">Your enquiry</div>
            <div className="mt-1 text-[12px] text-white/85 font-semibold truncate">{enquiryAmt ? "amount" : "fill on Step 2"}</div>
            <div className="mt-2 text-[28px] font-extrabold text-white tabular tracking-tight leading-none">
              {enquiryAmt || "—"}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3">
        {[
          { Icon: ShieldCheck, t: "0% Foreclosure",  s: "Statpro guarantee" },
          { Icon: Banknote,    t: "₹0 our fee",      s: "Lender pays us" },
          { Icon: Phone,       t: "1 working day",   s: "Single RM call-back" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
            <Icon className="w-4 h-4 text-blue-bright mb-2" strokeWidth={2.4} />
            <div className="text-[12px] font-bold text-white leading-tight">{t}</div>
            <div className="text-[10.5px] text-white/55 mt-0.5">{s}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-white/45 flex items-center justify-between">
        <span>Step {step} of 3 · {STEPS[step - 1].title}</span>
        <span>Statpro Fintech Pvt. Ltd.</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function ReviewStrip({ form }) {
  const amt = Number(form.requestedAmountInr);
  const fmtAmt = (n) => {
    if (!n) return "—";
    if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
    if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
    return `₹${n.toLocaleString("en-IN")}`;
  };
  return (
    <div className="rounded-xl bg-blue-soft/40 border border-blue/15 p-4">
      <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold mb-2.5">Quick review</div>
      <dl className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-[12.5px]">
        <Item label="Name"     value={form.ownerName} />
        <Item label="Mobile"   value={form.mobile} />
        <Item label="PAN"      value={form.pan.toUpperCase()} />
        <Item label="Loan"     value={`${familyLabel(form.family)} · ${form.variant}`} />
        <Item label="Amount"   value={fmtAmt(amt)} />
        <Item label="Tenure"   value={form.requestedTenureMonths ? `${form.requestedTenureMonths} months` : "—"} />
      </dl>
    </div>
  );
}

function Item({ label, value }) {
  return (
    <div>
      <dt className="text-ink-soft font-semibold text-[10px] uppercase tracking-wider">{label}</dt>
      <dd className="text-ink font-semibold mt-0.5 text-[12.5px] truncate">{value || "—"}</dd>
    </div>
  );
}

// ── Field primitives ────────────────────────────────────────────────────
function TextField({ label, value, onChange, error, required, placeholder, type = "text", maxLength, mono = false, prefix, autoFocus }) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-ink-2 mb-1.5">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      <div className={`relative flex items-stretch rounded-lg border bg-white transition focus-within:ring-2 ${
        error ? "border-red-300 focus-within:border-red-400 focus-within:ring-red-100" : "border-rule focus-within:border-blue focus-within:ring-blue/20"
      }`}>
        {prefix && (
          <span className="inline-flex items-center px-3 text-[14px] font-semibold text-ink-soft border-r border-rule bg-surface-2 rounded-l-lg">
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus}
          className={`flex-1 px-4 py-3 bg-transparent text-[14.5px] text-ink placeholder:text-ink-soft focus:outline-none ${mono ? "font-mono tabular tracking-tight" : ""} ${prefix ? "rounded-r-lg" : "rounded-lg"}`}
        />
      </div>
      {error && <div className="text-[11.5px] text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</div>}
    </div>
  );
}

function SelectField({ label, value, onChange, error, required, options }) {
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o || "— Select —" } : o));
  return (
    <div>
      <label className="block text-[12px] font-semibold text-ink-2 mb-1.5">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-lg border bg-white text-[14.5px] text-ink focus:outline-none focus:ring-2 transition ${
          error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-rule focus:border-blue focus:ring-blue/20"
        }`}
      >
        {opts.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <div className="text-[11.5px] text-red-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</div>}
    </div>
  );
}
