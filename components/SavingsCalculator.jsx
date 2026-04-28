"use client";

import { useMemo, useState } from "react";
import { TrendingDown, ArrowRight, Info, Check, Sparkles } from "lucide-react";
import { compareODtoLAP, fmtINR, fmtINRFull, fmtPct } from "@/lib/finance";

const DEFAULTS = {
  odLimit: 20000000,
  utilizationPct: 90,
  odRatePct: 11.5,
  lapRatePct: 8.9,
  tenureYears: 10,
};

export default function SavingsCalculator() {
  const [odLimit, setOdLimit]               = useState(DEFAULTS.odLimit);
  const [utilizationPct, setUtilizationPct] = useState(DEFAULTS.utilizationPct);
  const [odRatePct, setOdRatePct]           = useState(DEFAULTS.odRatePct);
  const [lapRatePct, setLapRatePct]         = useState(DEFAULTS.lapRatePct);
  const [tenureYears, setTenureYears]       = useState(DEFAULTS.tenureYears);

  const result = useMemo(
    () => compareODtoLAP({ odLimit, utilizationPct, odRatePct, lapRatePct, tenureYears }),
    [odLimit, utilizationPct, odRatePct, lapRatePct, tenureYears]
  );
  const savingsBarPct = Math.max(0, Math.min(100, result.interestSavingPct));

  // Year-by-year cumulative interest curve + LAP outstanding principal
  const chartData = useMemo(() => {
    const drawn = odLimit * (utilizationPct / 100);
    const odPerYear = drawn * (odRatePct / 100);
    const r = lapRatePct / 12 / 100;
    const m = tenureYears * 12;
    const lapEmi = r > 0 ? (drawn * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1) : drawn / m;
    const points = [];
    let lapBalance = drawn;
    let lapInterestCum = 0;
    for (let yr = 0; yr <= tenureYears; yr++) {
      if (yr > 0) {
        for (let k = 0; k < 12; k++) {
          const i = lapBalance * r;
          lapInterestCum += i;
          lapBalance -= (lapEmi - i);
        }
      }
      points.push({
        year: yr,
        od: odPerYear * yr,
        lap: lapInterestCum,
        lapBalance: Math.max(0, lapBalance),
        odBalance: drawn,
      });
    }
    return points;
  }, [odLimit, utilizationPct, odRatePct, lapRatePct, tenureYears]);

  const drawn = odLimit * (utilizationPct / 100);

  return (
    <div className="rounded-3xl bg-white border border-rule overflow-hidden shadow-2xl shadow-navy/15">
      <div className="grid lg:grid-cols-[480px_1fr]">
        {/* ── INPUTS ──────────────────────────────────────────── */}
        <div className="p-7 lg:p-8 lg:border-r border-rule bg-white flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-coral">
              Live Comparator
            </span>
            <span className="h-1 w-1 rounded-full bg-coral animate-pulse" />
          </div>
          <h3 className="text-[22px] font-bold text-ink leading-tight tracking-tight mb-1">
            OD → LAP, see the real saving.
          </h3>
          <p className="text-[12.5px] text-ink-muted mb-5 leading-relaxed">
            Overdraft pays interest forever. LAP pays interest <em>and</em> principal — so it ends.
          </p>

          {/* 2-col slider grid */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <Slider
              label="OD limit"
              valueDisplay={fmtINR(odLimit, { decimals: 0 })}
              min={1000000} max={500000000} step={500000}
              value={odLimit} onChange={setOdLimit}
            />
            <Slider
              label="Utilization"
              valueDisplay={`${utilizationPct}%`}
              min={10} max={100} step={5}
              value={utilizationPct} onChange={setUtilizationPct}
            />
            <Slider
              label="OD rate (today)"
              valueDisplay={fmtPct(odRatePct, 2)}
              min={6} max={20} step={0.05}
              value={odRatePct} onChange={setOdRatePct}
            />
            <Slider
              label="LAP rate (after refinance)"
              valueDisplay={fmtPct(lapRatePct, 2)}
              min={6} max={20} step={0.05}
              value={lapRatePct} onChange={setLapRatePct}
              accent="coral"
            />
            <div className="col-span-2">
              <Slider
                label="Horizon"
                valueDisplay={`${tenureYears} years`}
                min={3} max={20} step={1}
                value={tenureYears} onChange={setTenureYears}
                last
              />
            </div>
          </div>

          {/* Drawn-amount summary chip */}
          <div className="mt-5 rounded-xl bg-surface-2 border border-rule p-4 flex items-baseline justify-between">
            <div>
              <div className="text-[10.5px] uppercase tracking-wider font-bold text-ink-soft">Effective drawn balance</div>
              <div className="mt-1 text-[20px] font-extrabold text-ink tabular tracking-tight leading-none">
                {fmtINR(drawn, { decimals: 0 })}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10.5px] uppercase tracking-wider font-bold text-coral">Recommended LAP rate</div>
              <div className="mt-1 text-[16px] font-bold text-ink tabular leading-none">{fmtPct(lapRatePct, 2)}</div>
            </div>
          </div>

          {/* Recommendation card */}
          <div className="mt-5 rounded-xl border border-coral/30 bg-coral/5 p-4 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-coral" strokeWidth={2.5} />
              <span className="text-[10.5px] uppercase tracking-wider font-bold text-coral">What we'd recommend</span>
            </div>
            <ul className="space-y-2">
              {recommendationsFor({ drawn, odRatePct, lapRatePct, tenureYears }).map((r) => (
                <li key={r} className="flex items-start gap-2 text-[12.5px] text-ink-2 leading-relaxed">
                  <Check className="w-3.5 h-3.5 mt-0.5 text-coral shrink-0" strokeWidth={3} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── OUTPUT ──────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-navy via-navy to-navy-deep text-white p-7 lg:p-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-20 w-[320px] h-[320px] bg-coral/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[220px] h-[220px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />

          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-4 h-4 text-coral" strokeWidth={2.5} />
              <span className="text-[11px] uppercase tracking-wider font-bold text-coral">
                Lifetime interest saved
              </span>
            </div>

            <div className="text-[40px] lg:text-[56px] font-bold tabular tracking-tight leading-none mb-2">
              {fmtINR(result.interestSaving, { decimals: 0 })}
            </div>
            <div className="text-coral text-[14px] font-semibold tabular mb-1">
              ↓ {fmtPct(result.interestSavingPct, 1)} of interest, over {tenureYears} years on {fmtINR(result.drawn, { decimals: 0 })} drawn
            </div>

            <div className="mt-5 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-coral to-coral-hover transition-all duration-300"
                style={{ width: `${savingsBarPct}%` }}
              />
            </div>

            {/* Rich chart */}
            <InterestChart data={chartData} tenureYears={tenureYears} drawn={drawn} />

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Pathway
                label="Stay on OD"
                rate={fmtPct(odRatePct, 2)}
                rateNote="interest-only, principal stays"
                interest={result.od.interestTotal}
                detail={`+ ${fmtINR(result.od.principalOutstandingAtEnd, { decimals: 0 })} still owed at year ${tenureYears}`}
                tone="muted"
              />
              <Pathway
                label="Move to LAP"
                rate={fmtPct(lapRatePct, 2)}
                rateNote={`EMI ${fmtINRFull(result.lap.emi)}, principal extinguished`}
                interest={result.lap.interestTotal}
                detail="₹0 outstanding at year-end"
                tone="positive"
              />
            </div>

            <div className="mt-5 flex items-start gap-2 text-[11.5px] text-white/55 leading-relaxed">
              <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-coral/70" />
              <span>
                Even at the same rate, LAP saves ~40% on interest because EMIs amortise the principal. Lower the rate and the gap widens.
              </span>
            </div>

            <a
              href="/apply"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-coral hover:bg-coral-hover text-white px-5 py-3.5 rounded-xl font-semibold text-[14px] transition shadow-lg shadow-coral/30"
            >
              Get this rate from our 19 lenders <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function recommendationsFor({ drawn, odRatePct, lapRatePct, tenureYears }) {
  const out = [];
  const spread = odRatePct - lapRatePct;
  if (spread >= 2) out.push(`You're paying ${spread.toFixed(2)}% over market — refinance is a no-brainer.`);
  else if (spread >= 0.5) out.push(`Modest ${spread.toFixed(2)}% spread, but the EMI structure does the heavy lifting.`);
  else out.push("LAP wins on structure even at the same rate — principal actually retires.");
  if (drawn >= 50000000) out.push("At this ticket size, expect 3–4 NBFCs to bid + at least one bank.");
  else if (drawn >= 10000000) out.push("Sweet spot for our SME-NBFC panel — 5–6 lenders will bid in parallel.");
  else out.push("Smaller ticket — SFB/NBFC panel will move fastest.");
  if (tenureYears >= 12) out.push("Long horizon — fix the rate for the first 3 years to lock the saving.");
  return out;
}

function Slider({ label, valueDisplay, min, max, step, value, onChange, accent = "navy", last = false }) {
  return (
    <div className={last ? "" : ""}>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-[11.5px] font-semibold text-ink-2">{label}</label>
        <span className={`text-[13px] font-bold tabular ${
          accent === "coral" ? "text-coral" : "text-ink"
        }`}>{valueDisplay}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1.5 bg-rule rounded-lg appearance-none cursor-pointer ${
          accent === "coral" ? "accent-coral" : "accent-navy"
        }`}
      />
    </div>
  );
}

function InterestChart({ data, tenureYears, drawn }) {
  const W = 520, H = 220, PADL = 52, PADR = 56, PADT = 18, PADB = 30;
  const maxY = Math.max(...data.map((d) => Math.max(d.od, d.lap, drawn))) || 1;

  const sx = (yr) => PADL + ((W - PADL - PADR) * yr) / tenureYears;
  const sy = (v) => H - PADB - ((H - PADT - PADB) * v) / maxY;

  const odPath = data.map((d, i) => `${i === 0 ? "M" : "L"}${sx(d.year).toFixed(1)},${sy(d.od).toFixed(1)}`).join(" ");
  const lapPath = data.map((d, i) => `${i === 0 ? "M" : "L"}${sx(d.year).toFixed(1)},${sy(d.lap).toFixed(1)}`).join(" ");
  const lapBalPath = data.map((d, i) => `${i === 0 ? "M" : "L"}${sx(d.year).toFixed(1)},${sy(d.lapBalance).toFixed(1)}`).join(" ");
  const lapArea = `${lapPath} L${sx(tenureYears).toFixed(1)},${(H - PADB).toFixed(1)} L${sx(0).toFixed(1)},${(H - PADB).toFixed(1)} Z`;
  const odArea = `${odPath} L${sx(tenureYears).toFixed(1)},${(H - PADB).toFixed(1)} L${sx(0).toFixed(1)},${(H - PADB).toFixed(1)} Z`;

  const fmtAxis = (v) => (v >= 1e7 ? `₹${(v / 1e7).toFixed(1)} Cr` : v >= 1e5 ? `₹${(v / 1e5).toFixed(0)} L` : `₹${Math.round(v / 1e3)} K`);
  const last = data[data.length - 1];
  const yearTicks = tenureYears <= 6 ? data.map((d) => d.year) : data.filter((d) => d.year % 2 === 0).map((d) => d.year);

  return (
    <div className="mt-6 rounded-2xl bg-white/[0.04] border border-white/10 p-4 lg:p-5">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="text-[11px] uppercase tracking-wider font-bold text-coral">Cumulative interest paid</div>
        <div className="flex items-center gap-3 text-[11px] text-white/65">
          <Legend swatch="dashed" color="rgba(255,255,255,0.55)" label={`OD @ ${data.length > 1 ? "" : ""}interest-only`} />
          <Legend swatch="solid" color="rgb(244,99,131)" label="LAP @ amortising" />
          <Legend swatch="dotted" color="rgba(120,200,255,0.7)" label="LAP balance" />
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Cumulative interest over time">
        <defs>
          <linearGradient id="lapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(244,99,131,0.35)" />
            <stop offset="100%" stopColor="rgba(244,99,131,0)" />
          </linearGradient>
          <linearGradient id="odGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Y-axis gridlines + labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line x1={PADL} x2={W - PADR} y1={sy(maxY * f)} y2={sy(maxY * f)} stroke="rgba(255,255,255,0.07)" strokeWidth={1} />
            <text x={PADL - 8} y={sy(maxY * f) + 3} fill="rgba(255,255,255,0.5)" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace,monospace">
              {fmtAxis(maxY * f)}
            </text>
          </g>
        ))}

        {/* X-axis ticks */}
        {yearTicks.map((yr) => (
          <g key={yr}>
            <line x1={sx(yr)} x2={sx(yr)} y1={H - PADB} y2={H - PADB + 4} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
            <text x={sx(yr)} y={H - PADB + 16} fill="rgba(255,255,255,0.5)" fontSize="9.5" textAnchor="middle" fontFamily="ui-monospace,monospace">
              Y{yr}
            </text>
          </g>
        ))}
        <line x1={PADL} x2={W - PADR} y1={H - PADB} y2={H - PADB} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />

        {/* Areas */}
        <path d={odArea} fill="url(#odGrad)" />
        <path d={lapArea} fill="url(#lapGrad)" />

        {/* Saving band: between OD and LAP curves */}
        {data.length > 1 && (
          <path
            d={`${odPath} ${data.slice().reverse().map((d, i) => `${i === 0 ? "L" : "L"}${sx(d.year).toFixed(1)},${sy(d.lap).toFixed(1)}`).join(" ")} Z`}
            fill="rgba(244,99,131,0.10)"
          />
        )}

        {/* OD line (dashed) */}
        <path d={odPath} stroke="rgba(255,255,255,0.65)" strokeWidth={1.7} fill="none" strokeDasharray="5 4" />
        {/* LAP interest line (solid) */}
        <path d={lapPath} stroke="rgb(244,99,131)" strokeWidth={2.2} fill="none" strokeLinecap="round" />
        {/* LAP balance (dotted) */}
        <path d={lapBalPath} stroke="rgba(120,200,255,0.7)" strokeWidth={1.5} fill="none" strokeDasharray="2 3" />

        {/* End-of-chart annotation dots */}
        <circle cx={sx(last.year)} cy={sy(last.od)} r="3.5" fill="rgba(255,255,255,0.85)" stroke="rgba(11,17,51,1)" strokeWidth={1.5} />
        <circle cx={sx(last.year)} cy={sy(last.lap)} r="4" fill="rgb(244,99,131)" stroke="rgba(11,17,51,1)" strokeWidth={1.5} />

        {/* End labels */}
        <text x={sx(last.year) + 8} y={sy(last.od) + 3} fill="rgba(255,255,255,0.85)" fontSize="9.5" fontWeight="600" fontFamily="ui-monospace,monospace">
          {fmtAxis(last.od)}
        </text>
        <text x={sx(last.year) + 8} y={sy(last.lap) + 3} fill="rgb(244,99,131)" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace,monospace">
          {fmtAxis(last.lap)}
        </text>
      </svg>

      <div className="mt-2 flex items-center justify-between text-[10.5px] text-white/45 font-mono tabular">
        <span>Year 0 · principal drawn</span>
        <span>Year {tenureYears} · LAP cleared, OD principal still owed</span>
      </div>
    </div>
  );
}

function Legend({ swatch, color, label }) {
  const swatchEl =
    swatch === "dashed" ? (
      <svg width="14" height="2"><line x1="0" y1="1" x2="14" y2="1" stroke={color} strokeWidth={2} strokeDasharray="3 2" /></svg>
    ) : swatch === "dotted" ? (
      <svg width="14" height="2"><line x1="0" y1="1" x2="14" y2="1" stroke={color} strokeWidth={2} strokeDasharray="2 2" /></svg>
    ) : (
      <span className="w-3.5 h-0.5 inline-block" style={{ background: color }} />
    );
  return (
    <span className="flex items-center gap-1.5">
      {swatchEl}
      <span className="text-[10.5px]">{label}</span>
    </span>
  );
}

function Pathway({ label, rate, rateNote, interest, detail, tone }) {
  const positive = tone === "positive";
  return (
    <div className={`rounded-xl border ${positive ? "border-coral/40 bg-coral/10" : "border-white/10 bg-white/5"} px-3.5 py-3.5 backdrop-blur-sm`}>
      <div className={`text-[10.5px] uppercase tracking-wider font-bold ${positive ? "text-coral" : "text-white/55"}`}>{label}</div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className={`text-[22px] font-bold tabular leading-none ${positive ? "text-white" : "text-white/80"}`}>{rate}</span>
      </div>
      <div className="mt-1 text-[10.5px] text-white/55">{rateNote}</div>
      <div className="mt-3 pt-3 border-t border-white/10">
        <div className="text-[10.5px] uppercase tracking-wider text-white/45 font-semibold mb-1">Interest paid</div>
        <div className={`text-[14px] font-bold tabular leading-tight ${positive ? "text-coral" : "text-white/85"}`}>
          {fmtINR(interest, { decimals: 0 })}
        </div>
        <div className="mt-1.5 text-[10.5px] text-white/50 leading-tight">{detail}</div>
      </div>
    </div>
  );
}
