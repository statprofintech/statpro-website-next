import { Building, GraduationCap, Hospital, Hotel, Warehouse, Snowflake, Boxes, KeyRound, Store, Layers } from "lucide-react";

// Rare/unusual collateral types — what most banks decline.
// We lead with these because "wide collateral acceptance" is a brand pillar.
const RARE = [
  { name: "Hospitals & nursing homes", lenders: 6,  icon: Hospital },
  { name: "Schools & colleges",        lenders: 5,  icon: GraduationCap },
  { name: "Hotels",                    lenders: 4,  icon: Hotel },
  { name: "Banquet halls & hostels",   lenders: 3,  icon: Building },
  { name: "Cold storage facilities",   lenders: 5,  icon: Snowflake },
  { name: "Warehouses",                lenders: 9,  icon: Warehouse },
  { name: "Lease-rental receivables",  lenders: 4,  icon: KeyRound },
  { name: "Inventory / stock",         lenders: 3,  icon: Boxes },
  { name: "Industrial sheds",          lenders: 8,  icon: Layers },
  { name: "Mixed-use properties",      lenders: 5,  icon: Store },
];

const COLUMNS = [
  {
    title: "Residential",
    items: [
      { name: "Self-occupied flat / villa", lenders: 19 },
      { name: "Rented residential",         lenders: 17 },
      { name: "Vacant residential",         lenders: 12 },
      { name: "Plot — residential",         lenders: 9  },
      { name: "Under-construction",         lenders: 8  },
    ],
  },
  {
    title: "Commercial",
    items: [
      { name: "Office / IT space",          lenders: 18 },
      { name: "Retail shop",                lenders: 15 },
      { name: "Showroom",                   lenders: 13 },
      { name: "Plot — commercial",          lenders: 7  },
      { name: "Mixed-use",                  lenders: 5  },
    ],
  },
  {
    title: "Industrial",
    items: [
      { name: "Factory / manufacturing",    lenders: 11 },
      { name: "Warehouse",                  lenders: 9  },
      { name: "Cold storage",               lenders: 5  },
      { name: "Industrial shed",            lenders: 8  },
      { name: "Inventory (stock)",          lenders: 3  },
    ],
  },
  {
    title: "Special-purpose",
    items: [
      { name: "Hospital / nursing home",    lenders: 6 },
      { name: "School / college",           lenders: 5 },
      { name: "Hotel",                      lenders: 4 },
      { name: "Banquet / hostel",           lenders: 3 },
      { name: "Lease rental receivables",   lenders: 4 },
    ],
  },
  {
    title: "Securities",
    items: [
      { name: "Top-100 listed equity",      lenders: 2 },
      { name: "Top-500 listed equity",      lenders: 2 },
      { name: "Debt mutual funds",          lenders: 2 },
      { name: "Equity mutual funds",        lenders: 2 },
      { name: "Listed bonds / FDs",         lenders: 2 },
    ],
  },
];

export default function CollateralsMatrix() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Collaterals we accept</div>
          <h2 className="text-[36px] lg:text-[52px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
            Your bank said no? <span className="bg-gradient-to-br from-blue to-blue-deep bg-clip-text text-transparent">We have a lender for that.</span>
          </h2>
          <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-[640px]">
            Most lenders fund only standard residential or commercial property. Our 19-partner panel includes specialists who underwrite the unusual — hospitals, hostels, cold storage, lease receivables, even your inventory.
          </p>
        </div>

        {/* HERO STRIP: rare collaterals lead the section */}
        <div className="rounded-3xl bg-gradient-to-br from-navy-deep to-navy text-white p-8 lg:p-10 mb-10 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />

          <div className="relative">
            <div className="flex items-baseline justify-between gap-6 flex-wrap mb-7">
              <div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-blue-bright font-bold mb-2">What banks decline</div>
                <h3 className="text-[24px] lg:text-[28px] font-bold leading-tight tracking-tight">
                  10 unusual collaterals our specialist NBFCs fund.
                </h3>
              </div>
              <div className="text-[12.5px] text-white/55">
                Hover to see how many of our 19 partners fund this.
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {RARE.map((r) => (
                <div
                  key={r.name}
                  className="group relative rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md p-4 lg:p-5 hover:bg-white/[0.1] hover:border-blue-bright/40 transition cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-bright/15 border border-blue-bright/20 grid place-items-center mb-3">
                    <r.icon className="w-4.5 h-4.5 text-blue-bright" strokeWidth={2.2} />
                  </div>
                  <div className="text-[13px] font-semibold text-white leading-tight mb-1.5">{r.name}</div>
                  <div className="text-[11px] text-white/55 tabular">
                    <span className="font-bold text-blue-bright">{r.lenders}</span> of 19 lenders
                  </div>

                  {/* Bottom progress bar showing coverage */}
                  <div className="mt-3 h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-bright to-blue-glow group-hover:from-blue-bright group-hover:to-white transition"
                      style={{ width: `${(r.lenders / 19) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full matrix — comprehensive view */}
        <div className="text-[11px] uppercase tracking-wider text-ink-soft font-bold mb-4">Full collateral matrix</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COLUMNS.map((col) => (
            <div key={col.title} className="rounded-2xl bg-surface-2 border border-rule p-5">
              <div className="text-[12px] uppercase tracking-wider text-blue font-bold mb-4 pb-4 border-b border-rule">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.items.map((it) => (
                  <li key={it.name} className="flex items-baseline justify-between gap-2 text-[12.5px]">
                    <span className="text-ink-2 leading-snug">{it.name}</span>
                    <span className="font-mono font-bold text-ink-soft tabular shrink-0">{it.lenders}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[11.5px] text-ink-soft max-w-[760px]">
          Numbers indicate how many of our 19 lender partners actively fund that collateral type. Updated weekly from our partner catalogue.
        </p>
      </div>
    </section>
  );
}
