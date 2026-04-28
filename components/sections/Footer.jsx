import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";

const COL_SOLUTIONS = [
  { label: "Loan Against Property", to: "/lap" },
  { label: "Loan Against Rental", to: "/lrd" },
  { label: "Loan Against Securities", to: "/las" },
  { label: "Home Loan", to: "/hl" },
  { label: "Business Loan", to: "/bl" },
  { label: "Personal Loan", to: "/pl" },
];

const COL_COMPANY = [
  { label: "About Statpro", to: "/about" },
  { label: "Lender Network", to: "/lenders" },
  { label: "Apply Now", to: "/apply" },
];

const COL_LEGAL = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Grievance Redressal", to: "/grievance" },
  { label: "Disclosures", to: "/disclosures" },
  { label: "Cookie Policy", to: "/cookies" },
];

const OFFICES = [
  {
    tag: "Head Office",
    city: "Kolkata",
    lines: ["503, Saltee Plaza", "Jessore Road", "Kolkata — 700 080"],
  },
  {
    tag: "Registered Office",
    city: "Durgapur",
    lines: ["B-205, Kalpataru Building", "City Centre, Bengal Srishti", "Durgapur — 713 216"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white/80 overflow-hidden">
      {/* Hero-style decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/3 -left-1/4 w-[900px] h-[900px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle at center, rgba(79,139,255,0.32) 0%, rgba(79,139,255,0.10) 30%, transparent 60%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[640px] h-[640px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.28) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center top, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center top, black 30%, transparent 80%)",
        }} />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-20 lg:pt-24 pb-10">
        {/* Top CTA strip */}
        <div className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 lg:p-8 mb-16 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-blue-bright/10 border border-blue-bright/20 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider font-bold text-blue-bright mb-3">
              <Sparkles className="w-3 h-3" /> One application, four lenders
            </div>
            <h3 className="text-[22px] lg:text-[28px] font-extrabold text-white tracking-[-0.02em] leading-tight">
              Pitch your file to{" "}
              <span className="bg-gradient-to-br from-blue-bright via-blue-glow to-white bg-clip-text text-transparent">the right four lenders.</span>
            </h3>
            <p className="mt-2 text-[13.5px] text-white/65 leading-relaxed max-w-[560px]">
              Single advisor, parallel pitch, panel-comparison sheet within one working day. Lender pays our fee — you pay nothing.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue hover:bg-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-[14px] shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition">
              Apply now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/lenders" className="inline-flex items-center justify-center gap-1.5 px-5 py-3 font-semibold text-[14px] border border-white/20 rounded-xl hover:bg-white/[0.06] text-white/85 hover:text-white transition">
              See lender network
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex mb-5" aria-label="StatPro Fintech home">
              <Logo size={36} dark />
            </Link>
            <div className="text-[11px] uppercase tracking-[0.2em] text-blue-bright font-bold mb-4">
              Reinventing Finance
            </div>
            <p className="text-[14px] text-white/65 leading-relaxed max-w-[380px]">
              Corporate-credit advisory and AMFI-registered MF distributor. Structuring LAP, LRD, LAS, HL, BL and PL across 19 partner lenders.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-[380px]">
              <a href="tel:+919233355500" className="rounded-xl bg-white/[0.04] border border-white/10 px-3 py-2.5 hover:bg-white/[0.08] hover:border-white/20 transition group">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-blue-bright font-bold mb-0.5">
                  <Phone className="w-3 h-3" strokeWidth={2.4} /> Call
                </div>
                <div className="text-[13px] font-semibold text-white tabular">+91 92333 55500</div>
              </a>
              <a href="mailto:care@statproindia.com" className="rounded-xl bg-white/[0.04] border border-white/10 px-3 py-2.5 hover:bg-white/[0.08] hover:border-white/20 transition group">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-blue-bright font-bold mb-0.5">
                  <Mail className="w-3 h-3" strokeWidth={2.4} /> Write
                </div>
                <div className="text-[12.5px] font-semibold text-white truncate">care@statproindia.com</div>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol title="Solutions" items={COL_SOLUTIONS} />
            <FooterCol title="Company" items={COL_COMPANY} />
            <FooterCol title="Legal" items={COL_LEGAL} />
          </div>

          {/* Trust strip */}
          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-wider text-blue-bright font-bold mb-4">By the numbers</div>
            <div className="grid grid-cols-2 gap-3">
              <Stat n="19" label="Lender partners" />
              <Stat n="₹50 Cr" label="Largest ticket" />
              <Stat n="30–50%" label="Interest cut" />
              <Stat n="72 hrs" label="First sanction" />
            </div>
          </div>
        </div>

        {/* Office addresses */}
        <div className="mt-16 pt-10 border-t border-white/10 grid sm:grid-cols-2 gap-5">
          {OFFICES.map((o) => (
            <div key={o.city} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:border-white/20 transition">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-3.5 h-3.5 text-blue-bright" strokeWidth={2.4} />
                <span className="text-[10.5px] uppercase tracking-[0.18em] text-blue-bright font-bold">{o.tag}</span>
                <span className="text-[10.5px] uppercase tracking-wider text-white/40 font-semibold">· {o.city}</span>
              </div>
              <address className="not-italic text-[13px] text-white/75 leading-relaxed space-y-0.5">
                {o.lines.map((l) => (<div key={l}>{l}</div>))}
              </address>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12.5px] text-white/55">
            <div>
              © 2026 <span className="font-semibold text-white/85">Statpro Fintech Pvt. Ltd.</span> · CIN U65999MHXXXXPTCXXXXX
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-white/65">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-bright" strokeWidth={2.4} />
                <span>DSA · RBI-regulated lenders</span>
              </span>
              <a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-1">
                RBI Sachet <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
          <p className="mt-5 text-[11.5px] text-white/40 leading-relaxed max-w-[960px]">
            Statpro Fintech Pvt. Ltd. acts as a sourcing partner (DSA) for partner banks and NBFCs and is an AMFI-registered Mutual Fund Distributor. Final loan approval is at the lender's discretion. Interest rates and fees shown are indicative; final terms are subject to your profile and lender policy. Mutual fund investments are subject to market risks — read all scheme-related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Stat({ n, label }) {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 px-3 py-2.5">
      <div className="text-[18px] font-extrabold text-white tabular tracking-tight leading-none">{n}</div>
      <div className="text-[10.5px] text-white/55 mt-1.5 leading-snug">{label}</div>
    </div>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-blue-bright font-bold mb-4">{title}</div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.label}>
            <Link href={it.to} className="text-[13px] text-white/70 hover:text-white transition inline-flex items-center gap-1 group">
              <span>{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
