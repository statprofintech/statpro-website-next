import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

// Canonical city list from the StatPro CRM (business360 CompaniesStagingPage), normalised.
// "kolkata_north/south/east" consolidated into Kolkata. Title-cased. Hubs flagged.
// 12 major cities — full panel of 25+ tracked separately in CRM.
const CITIES = [
  { name: "Kolkata",     hub: true },
  { name: "Howrah" },
  { name: "Salt Lake" },
  { name: "New Town" },
  { name: "Barasat" },
  { name: "Hooghly" },
  { name: "Chandannagar" },
  { name: "Bardhaman" },
  { name: "Durgapur",    hub: true },
  { name: "Asansol" },
  { name: "Murshidabad" },
  { name: "Siliguri",    hub: true },
];

export default function WestBengalCities() {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute -top-20 -left-32 w-[480px] h-[480px] bg-blue-soft rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="text-[12px] uppercase tracking-[0.16em] text-blue font-bold mb-4">Our footprint</div>
            <h2 className="text-[36px] lg:text-[48px] leading-[1.05] font-extrabold text-ink tracking-[-0.025em]">
              We are active across <span className="bg-gradient-to-br from-blue to-blue-deep bg-clip-text text-transparent">25+ cities</span> in West Bengal.
            </h2>
            <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-[540px]">
              Headquartered in Kolkata. We place deals from Hooghly to Murshidabad, Bardhaman to Siliguri — wherever your property is, wherever your business runs.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="inline-flex items-center gap-2 bg-blue-soft text-blue px-3.5 py-2 rounded-full text-[12px] font-bold">
              <MapPin className="w-3.5 h-3.5" />
              25+ cities · 3 hubs (Kolkata · Durgapur · Siliguri)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {CITIES.map((c) => (
            <Link
              key={c.name}
              href="/apply"
              className={`group relative flex items-center gap-3 rounded-xl border p-3.5 transition ${
                c.hub
                  ? "bg-blue-soft border-blue/30 hover:border-blue hover:shadow-lg hover:shadow-blue/15"
                  : "bg-surface-2 border-rule hover:border-blue/40 hover:bg-white hover:shadow-md hover:shadow-blue/5"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg grid place-items-center transition ${
                c.hub
                  ? "bg-blue text-white"
                  : "bg-white border border-rule text-blue group-hover:bg-blue group-hover:border-blue group-hover:text-white"
              }`}>
                <MapPin className="w-3.5 h-3.5" strokeWidth={2.3} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className={`font-bold text-[13px] truncate ${c.hub ? "text-blue-deep" : "text-ink"}`}>{c.name}</span>
                  {c.hub && <span className="text-[8px] font-bold text-blue bg-white px-1.5 py-0.5 rounded">HUB</span>}
                </div>
              </div>
              <ArrowUpRight className={`w-3.5 h-3.5 shrink-0 transition ${
                c.hub ? "text-blue" : "text-ink-soft group-hover:text-blue"
              }`} />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-[12.5px] text-ink-soft">
          Don't see your city?{" "}
          <Link href="/apply" className="text-blue font-semibold hover:text-blue-hover">Tell us where you are →</Link>
        </div>
      </div>
    </section>
  );
}
