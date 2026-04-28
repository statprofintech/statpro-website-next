// InfographicShell — full design tree pending port. Stub for now.
import Link from "next/link";

export default function InfographicShell() {
  return (
    <div className="min-h-screen bg-background text-foreground grid place-items-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Infographic preview pending</h1>
        <p className="text-ink-soft mb-6">
          Designs are being ported. Live previews are still on the OVH build.
        </p>
        <Link href="/" className="text-blue font-semibold hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
