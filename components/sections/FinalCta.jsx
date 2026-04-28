import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-navy-deep text-white overflow-hidden p-10 lg:p-16">
          {/* Decorative coral glows */}
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-coral/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-[12px] uppercase tracking-[0.16em] text-coral font-bold mb-4">Ready when you are</div>
              <h2 className="text-[36px] lg:text-[56px] leading-[1.05] font-extrabold tracking-[-0.025em]">
                Ready to lower your <span className="text-coral">cost of capital?</span>
              </h2>
              <p className="mt-6 text-[16px] text-white/65 leading-relaxed max-w-[480px]">
                Five fields. Three lender quotes within 48 hours. No charge to you.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white px-6 py-4 rounded-2xl font-semibold text-[15px] shadow-lg shadow-coral/30 transition w-full"
              >
                Get my quotes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 hover:bg-white/10 text-white px-6 py-4 rounded-2xl font-semibold text-[15px] transition w-full"
              >
                How we work
              </Link>
              <p className="mt-2 text-[11.5px] text-white/45 text-center leading-relaxed">
                DPDPA-compliant. No data sharing without your explicit consent. No spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
