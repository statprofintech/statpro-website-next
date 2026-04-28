import Link from "next/link";
import { ArrowUpRight, Landmark, Building2, Home, Briefcase, LineChart, Wallet } from "lucide-react";
import { PARTNER_PANEL, CATEGORY_LABELS } from "@/lib/lenders";

const CATEGORY_META = {
  PRIVATE_BANK:       { icon: Landmark,   accent: "from-blue to-blue-deep",       chip: "bg-blue/10 text-blue" },
  NBFC_LARGE:         { icon: Building2,  accent: "from-indigo-500 to-blue-deep", chip: "bg-indigo-500/10 text-indigo-600" },
  HOUSING_FINANCE:    { icon: Home,       accent: "from-emerald-500 to-emerald-700", chip: "bg-emerald-500/10 text-emerald-700" },
  NBFC_SME:           { icon: Briefcase,  accent: "from-amber-500 to-orange-600", chip: "bg-amber-500/10 text-amber-700" },
  NBFC_LAS:           { icon: LineChart,  accent: "from-violet-500 to-purple-700", chip: "bg-violet-500/10 text-violet-700" },
  SMALL_FINANCE_BANK: { icon: Wallet,     accent: "from-teal-500 to-cyan-700",    chip: "bg-teal-500/10 text-teal-700" },
};

const CATEGORY_ORDER = ["PRIVATE_BANK", "NBFC_LARGE", "HOUSING_FINANCE", "NBFC_SME", "NBFC_LAS", "SMALL_FINANCE_BANK"];

function initials(name) {
  return name
    .replace(/\b(Bank|Finance|Financial|Capital|Fincorp|Finserv|Finserve|Small|Mahindra)\b/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Partners() {
  const byCategory = PARTNER_PANEL.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});
  const total = PARTNER_PANEL.length;

  return (
    <section id="partners" className="bg-surface-2 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-blue-soft rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[480px] h-[480px] bg-navy-soft rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Lender network</div>
            <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
              <span className="tabular">{total}</span> lender partners,
              <br />
              <span className="bg-gradient-to-br from-blue to-blue-deep bg-clip-text text-transparent">one application.</span>
            </h2>
            <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-[560px]">
              Private banks, NBFCs, housing finance companies, small finance banks, and securities specialists.
              We pitch the same file to 4–5 right-fit lenders simultaneously — the best terms win.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="grid grid-cols-3 gap-3 max-w-[420px] lg:ml-auto">
              {[
                { v: "19", l: "Partners" },
                { v: "6",  l: "Categories" },
                { v: "13+", l: "Collateral types" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-white border border-rule px-3 py-3 text-center lg:text-right">
                  <div className="text-[24px] font-extrabold text-ink tabular tracking-tight leading-none">{s.v}</div>
                  <div className="mt-1 text-[11px] text-ink-soft font-semibold">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-2 gap-5">
          {CATEGORY_ORDER.map((cat) => {
            const partners = byCategory[cat];
            if (!partners) return null;
            const meta = CATEGORY_META[cat];
            const Icon = meta.icon;

            return (
              <div
                key={cat}
                className="group relative rounded-2xl bg-white border border-rule overflow-hidden hover:border-blue/30 hover:shadow-xl hover:shadow-blue/5 transition"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${meta.accent}`} />
                <div className="p-6 lg:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.accent} grid place-items-center text-white shadow-md`}>
                        <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-ink">{CATEGORY_LABELS[cat]}</div>
                        <div className="text-[11.5px] text-ink-soft mt-0.5">
                          {partners.length} partner{partners.length > 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>
                    <span className={`text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${meta.chip}`}>
                      {cat === "NBFC_LAS" ? "LAS only" : cat === "NBFC_SME" ? "SME focus" : "Active"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {partners.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-2.5 rounded-lg bg-surface-2 border border-rule px-3 py-2.5 hover:bg-white hover:border-blue/30 transition"
                      >
                        <div className="w-7 h-7 rounded-md bg-white border border-rule grid place-items-center text-[10px] font-extrabold text-ink-2 tabular tracking-tighter shrink-0">
                          {initials(p.name)}
                        </div>
                        <span className="text-[12.5px] font-semibold text-ink truncate">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-rule">
          <p className="text-[13px] text-ink-muted max-w-[640px]">
            All partners are RBI-regulated banks or NBFCs. We are a registered DSA — you sign your loan agreement directly with the lender.
          </p>
          <Link
            href="/lenders"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue hover:text-blue-hover transition"
          >
            See full lender network <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
