"use client";

// MarketingPage — internal/password-gated gallery. Full design tree (164 files
// under src/pages/marketing/designs/) will be bulk-ported in a follow-up pass.
// For now this stub renders a "coming soon" notice so the rest of the site
// can deploy. Real port replaces this file.

import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground grid place-items-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[12px] uppercase tracking-[0.18em] font-bold text-blue mb-4">
          Internal · marketing gallery
        </div>
        <h1 className="text-3xl font-extrabold mb-4">Coming soon to Vercel</h1>
        <p className="text-ink-soft mb-6">
          The infographic gallery is still on the legacy build. We will port
          the design tree in a follow-up commit. The live OVH site has it.
        </p>
        <Link href="/" className="text-blue font-semibold hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
