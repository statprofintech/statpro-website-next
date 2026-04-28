"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  ArrowRight, ArrowLeft, Loader2, AlertCircle, ShieldCheck, Sparkles, Phone,
  Banknote, FileText, Upload, Check, Clock, MapPin, LogOut, RefreshCw, Inbox,
} from "lucide-react";
import Logo from "@/components/Logo";
import {
  getBorrowerToken, setBorrowerToken, clearBorrowerToken,
  fetchBorrowerDashboard, uploadDocuments,
} from "@/lib/clientAuth";

export default function ClientDashboardPage() {
  const router = useRouter();
  const pathname = usePathname() || "/client/dashboard";
  const params = useSearchParams();
  const navigate = (path) => router.replace(path);
  // Helper to strip ?t= from the URL once we've captured the token.
  const setParams = (next) => {
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  };
  const [data, setData]     = useState(null);
  const [error, setError]   = useState(null);
  const [loading, setLoad]  = useState(true);

  // Establish token: prefer URL ?t=, else sessionStorage
  useEffect(() => {
    const fromUrl = params.get("t");
    if (fromUrl) {
      setBorrowerToken(fromUrl);
      const cleaned = new URLSearchParams(params);
      cleaned.delete("t");
      setParams(cleaned);
    }
    const tok = getBorrowerToken();
    if (!tok) { navigate("/client/sign-in"); return; }

    fetchBorrowerDashboard(tok)
      .then(setData)
      .catch((e) => setError(e.message || "Could not load your dashboard."))
      .finally(() => setLoad(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSignOut() {
    clearBorrowerToken();
    navigate("/client/sign-in");
  }

  async function reload() {
    setLoad(true);
    setError(null);
    try {
      const d = await fetchBorrowerDashboard(getBorrowerToken());
      setData(d);
    } catch (e) {
      setError(e.message || "Could not refresh.");
    } finally { setLoad(false); }
  }

  if (loading) return <FullPageState icon={Loader2} title="Loading your dashboard…" spin />;
  if (error)   return <ErrorPage error={error} onRetry={reload} onSignOut={handleSignOut} />;
  if (!data)   return <FullPageState icon={Inbox} title="No data found." />;

  return <Dashboard d={data} onReload={reload} onSignOut={handleSignOut} />;
}

// ─────────────────────────────────────────────────────────────────────────
function Dashboard({ d, onReload, onSignOut }) {
  const fmtAmt = (n) => {
    if (!n) return "—";
    if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
    if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
    return `₹${n.toLocaleString("en-IN")}`;
  };

  const lead = d.lead, deal = d.deal, b = d.borrower;

  return (
    <div className="min-h-screen bg-surface-2">
      {/* Top bar */}
      <header className="bg-white border-b border-rule sticky top-0 z-30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="StatPro India home"><Logo size={40} /></Link>
          <div className="flex items-center gap-3">
            <button onClick={onReload} className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] text-ink-2 hover:text-ink font-semibold px-3 py-2 rounded-lg hover:bg-surface-2">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2 border border-rule">
              <div className="w-7 h-7 rounded-full bg-blue text-white grid place-items-center text-[11px] font-bold">{b.nameInitials || "👤"}</div>
              <div className="text-[12.5px] text-ink-2 font-semibold leading-tight">
                {b.name || "Client"}<br />
                <span className="text-[10.5px] text-ink-soft font-normal">{b.email}</span>
              </div>
            </div>
            <button onClick={onSignOut} className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-2 hover:text-ink font-semibold px-3 py-2 rounded-lg hover:bg-surface-2">
              <LogOut className="w-3.5 h-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">

        {/* Hero strip */}
        <div className="mb-8">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-2">Your enquiry</div>
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <h1 className="text-[28px] lg:text-[34px] font-extrabold text-ink tracking-[-0.025em]">
              {lead.familyLabel || "Loan"} <span className="text-ink-soft font-medium">· {lead.variant || "—"}</span>
            </h1>
            <div className="flex items-center gap-2 text-[12px] text-ink-soft">
              <Clock className="w-3.5 h-3.5" /> Submitted on {fmtDate(lead.createdAt)}
            </div>
          </div>
          <p className="mt-2 text-[14px] text-ink-muted leading-relaxed max-w-[680px]">
            Below is the live status of your file. Upload the documents we need and your relationship manager will keep moving it through the panel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* ── Left col (2/3): status + timeline + docs ──────── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Status card */}
            <section className="rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-deep text-white p-7 lg:p-8 relative overflow-hidden shadow-xl shadow-navy/20">
              <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full opacity-50 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.35) 0%, transparent 70%)" }} />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="text-[10.5px] uppercase tracking-wider font-bold text-blue-bright">Current stage</div>
                  {deal?.probability != null && (
                    <div className="text-[10.5px] text-white/60 tabular">{deal.probability}% likely to close</div>
                  )}
                </div>
                <div className="text-[28px] lg:text-[32px] font-extrabold tabular tracking-tight leading-none">
                  {deal?.stageName || lead.status || "—"}
                </div>
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/10">
                  <Stat label="Reference" value={`#${(lead.id || "").slice(-10)}`} mono />
                  <Stat label="Loan amount" value={fmtAmt(lead.requestedAmountInr)} />
                  <Stat label="Tenure" value={lead.requestedTenureMonths ? `${lead.requestedTenureMonths} mo` : "—"} />
                  <Stat label="Status" value={prettyStatus(lead.status)} />
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="rounded-3xl bg-white border border-rule p-7 lg:p-8">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold">Stage history</div>
                  <h2 className="text-[18px] font-bold text-ink mt-1">Where your file has moved</h2>
                </div>
                <button onClick={onReload} className="text-[12px] text-ink-2 hover:text-ink font-semibold inline-flex items-center gap-1">
                  <RefreshCw className="w-3 h-3" /> Refresh
                </button>
              </div>
              {!deal || (deal.history?.length ?? 0) === 0 ? (
                <div className="text-[13.5px] text-ink-muted">
                  No stage moves yet. Your enquiry is in the <strong>{deal?.stageName || "Web Leads"}</strong> queue — expect a call within 1 working day.
                </div>
              ) : (
                <ol className="relative space-y-5 pl-6 border-l-2 border-blue/20">
                  {deal.history.map((h, i) => (
                    <li key={i} className="relative">
                      <span className={`absolute -left-[31px] top-0.5 w-5 h-5 rounded-full grid place-items-center ${
                        i === deal.history.length - 1 ? "bg-blue text-white" : "bg-emerald-500 text-white"
                      }`}>
                        {i === deal.history.length - 1 ? <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> : <Check className="w-3 h-3" strokeWidth={3} />}
                      </span>
                      <div className="font-mono text-[10.5px] text-ink-soft uppercase tracking-wider">{fmtDate(h.changedAt)}</div>
                      <div className="text-[14px] text-ink font-semibold mt-0.5">
                        Moved to <span className="text-blue">{h.stage}</span>
                      </div>
                      <div className="text-[12px] text-ink-muted mt-0.5">By {h.changedBy}</div>
                    </li>
                  ))}
                </ol>
              )}
            </section>

            {/* Documents */}
            <DocumentSection token={d.uploadToken} initial={d.documents} uploadsRemaining={d.uploadsRemaining} onAfterUpload={onReload} />

          </div>

          {/* ── Right col (1/3): contacts + property + trust ──── */}
          <aside className="space-y-5">
            <div className="rounded-2xl bg-white border border-rule p-6">
              <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold mb-3">Your details</div>
              <dl className="space-y-2.5 text-[12.5px]">
                <Row label="Name" value={b.name} />
                <Row label="Email" value={b.email} />
                <Row label="Mobile" value={b.mobile} />
              </dl>
            </div>

            {(lead.propertyType || lead.propertyCity) && (
              <div className="rounded-2xl bg-white border border-rule p-6">
                <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold mb-3">Property</div>
                <dl className="space-y-2.5 text-[12.5px]">
                  {lead.propertyType && <Row label="Type" value={lead.propertyType} />}
                  {lead.propertyCity && <Row label="City" value={lead.propertyCity} icon={MapPin} />}
                  {lead.indicativeValueInr ? <Row label="Indicative value" value={fmtAmt(lead.indicativeValueInr)} /> : null}
                </dl>
              </div>
            )}

            <div className="rounded-2xl bg-blue-soft/40 border border-blue/15 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-blue" strokeWidth={2.4} />
                <div className="text-[13px] font-bold text-ink">Need to talk?</div>
              </div>
              <p className="text-[12.5px] text-ink-muted leading-relaxed">
                Your relationship manager will call on the mobile we have. To reach us directly, email{" "}
                <a href="mailto:care@statproindia.com" className="text-blue font-semibold hover:text-blue-hover">care@statproindia.com</a>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { Icon: ShieldCheck, t: "0% Foreclosure", s: "Statpro guarantee" },
                { Icon: Sparkles,    t: "₹0 our fee",     s: "Lender pays us" },
              ].map(({ Icon, t, s }) => (
                <div key={t} className="rounded-xl bg-white border border-rule p-4">
                  <Icon className="w-4 h-4 text-blue mb-2" strokeWidth={2.4} />
                  <div className="text-[12px] font-bold text-ink leading-tight">{t}</div>
                  <div className="text-[10.5px] text-ink-soft mt-0.5">{s}</div>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-ink-soft text-center">
              Session expires {fmtDate(d.tokenExpiresAt)}. Sign in again to extend.
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function DocumentSection({ token, initial, uploadsRemaining, onAfterUpload }) {
  const [docs, setDocs]       = useState(initial || []);
  const [uploading, setUp]    = useState(false);
  const [uploadErr, setUpErr] = useState(null);
  const fileInput = useRef(null);

  async function onFiles(files) {
    setUpErr(null);
    if (!files || files.length === 0) return;
    setUp(true);
    try {
      const r = await uploadDocuments(token, Array.from(files));
      const newRows = (r.results || []).filter((x) => x.ok).map((x) => ({
        id: x.row?.id,
        name: x.row?.original_name || x.row?.originalName || "(uploaded)",
        category: x.row?.category,
        docType: x.row?.doc_type,
        status: x.row?.status || "uploaded",
        sizeBytes: x.row?.size_bytes,
        uploadedAt: new Date().toISOString(),
      }));
      setDocs((prev) => [...newRows, ...prev]);
      const failures = (r.results || []).filter((x) => !x.ok);
      if (failures.length) setUpErr(`${failures.length} file(s) failed: ${failures.map((f) => f.error).join("; ")}`);
      onAfterUpload?.();
    } catch (e) {
      setUpErr(e.message);
    } finally {
      setUp(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  return (
    <section className="rounded-3xl bg-white border border-rule p-7 lg:p-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[10.5px] uppercase tracking-wider text-blue font-bold">Documents</div>
          <h2 className="text-[18px] font-bold text-ink mt-1">Upload what we need</h2>
        </div>
        <div className="text-[11.5px] text-ink-soft">
          {uploadsRemaining} of 50 uploads remaining
        </div>
      </div>

      <label
        htmlFor="doc-upload"
        className={`group block rounded-2xl border-2 border-dashed p-7 text-center cursor-pointer transition ${
          uploading ? "border-blue bg-blue-soft/30" : "border-rule hover:border-blue/40 hover:bg-blue-soft/20"
        }`}
      >
        <input
          id="doc-upload"
          ref={fileInput}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => onFiles(e.target.files)}
          disabled={uploading || uploadsRemaining === 0}
        />
        <div className="w-11 h-11 mx-auto rounded-xl bg-blue text-white grid place-items-center mb-3">
          {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" strokeWidth={2.2} />}
        </div>
        <div className="text-[14px] font-bold text-ink">
          {uploading ? "Uploading…" : "Drop files here or click to browse"}
        </div>
        <div className="text-[12px] text-ink-muted mt-1">
          PAN, Aadhaar, ITR, bank statement, property docs · PDF / JPG / PNG · up to 25 MB each
        </div>
      </label>

      {uploadErr && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <div className="text-[13px]">{uploadErr}</div>
        </div>
      )}

      {/* Uploaded list */}
      <div className="mt-6">
        <div className="text-[10.5px] uppercase tracking-wider text-ink-soft font-bold mb-3">Uploaded ({docs.length})</div>
        {docs.length === 0 ? (
          <div className="text-[13px] text-ink-muted">No documents yet. Upload your first file above.</div>
        ) : (
          <ul className="divide-y divide-rule rounded-xl border border-rule overflow-hidden">
            {docs.map((d) => (
              <li key={d.id || d.name + d.uploadedAt} className="flex items-center gap-3 p-3.5 hover:bg-surface-2">
                <div className="w-9 h-9 rounded-lg bg-blue-soft text-blue grid place-items-center shrink-0">
                  <FileText className="w-4 h-4" strokeWidth={2.2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-ink truncate">{d.name}</div>
                  <div className="text-[11.5px] text-ink-soft truncate">
                    {d.category && <span>{d.category}{d.docType ? ` · ${d.docType}` : ""} · </span>}
                    {d.sizeBytes ? `${(d.sizeBytes / 1024).toFixed(0)} KB · ` : ""}
                    {fmtDate(d.uploadedAt)}
                  </div>
                </div>
                <span className={`text-[10.5px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                  d.status === "verified"     ? "bg-emerald-50 text-emerald-700"
                  : d.status === "rejected"   ? "bg-red-50 text-red-700"
                  : d.status === "drive_failed" ? "bg-amber-50 text-amber-700"
                  : "bg-blue-soft text-blue"
                }`}>{d.status || "uploaded"}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function FullPageState({ icon: Icon, title, spin }) {
  return (
    <div className="min-h-screen bg-surface-2 grid place-items-center">
      <div className="text-center">
        <Icon className={`w-8 h-8 text-ink-soft mx-auto mb-3 ${spin ? "animate-spin" : ""}`} />
        <div className="text-[14px] text-ink-2 font-semibold">{title}</div>
      </div>
    </div>
  );
}

function ErrorPage({ error, onRetry, onSignOut }) {
  const expired = error === "token_expired" || error === "token_not_found";
  return (
    <div className="min-h-screen bg-surface-2 grid place-items-center px-6">
      <div className="max-w-[460px] text-center">
        <div className="w-12 h-12 rounded-2xl bg-red-100 grid place-items-center mx-auto mb-4">
          <AlertCircle className="w-5 h-5 text-red-600" strokeWidth={2.4} />
        </div>
        <h1 className="text-[22px] font-bold text-ink mb-2">
          {expired ? "Your sign-in link expired" : "Something went wrong"}
        </h1>
        <p className="text-[13.5px] text-ink-muted mb-6 leading-relaxed">
          {expired
            ? "Sign-in links are valid for 7 days. Request a fresh link to get back in."
            : "We couldn't load your dashboard right now. Please retry, or sign in again."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={onRetry} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-2 hover:text-ink px-4 py-2.5 rounded-lg border border-rule hover:bg-white">
            <RefreshCw className="w-3.5 h-3.5" /> Retry
          </button>
          <button onClick={onSignOut} className="inline-flex items-center gap-1.5 bg-blue text-white hover:bg-blue-hover px-4 py-2.5 rounded-lg font-semibold text-[14px] shadow">
            Sign in again <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
function Stat({ label, value, mono = false }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-white/55 font-bold">{label}</div>
      <div className={`mt-1 text-[15px] font-bold text-white truncate ${mono ? "font-mono tabular tracking-tight" : ""}`}>{value}</div>
    </div>
  );
}

function Row({ label, value, icon: Icon }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-ink-soft font-semibold flex items-center gap-1.5">
        {Icon && <Icon className="w-3 h-3" />}
        {label}
      </dt>
      <dd className="text-ink font-semibold truncate text-right">{value || "—"}</dd>
    </div>
  );
}

function fmtDate(iso) {
  if (!iso) return "—";
  try { return new Date(iso).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }); }
  catch { return iso; }
}
function prettyStatus(s) {
  return ({ new: "Open", qualified: "Qualified", disqualified: "Disqualified", converted: "Converted to Deal" }[s] || s || "—");
}
