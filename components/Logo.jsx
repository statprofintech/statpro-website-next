// StatPro Fintech logo — uses the official PNG asset at /public/statpro-logo.png.
// `dark` variant: invert luminance for dark backgrounds (footer / dark sections).
//
// Brand colours are baked into the PNG asset itself — the icon was
// recoloured pink → brand blue (#2563EB) via Pillow on 2026-04-28.
// "REINVENTING FINANCE" tagline kept its original pink (per spec).
// No CSS filter needed.

export default function Logo({ height, size, dark = false, className = "" }) {
  // Accept either prop — `size` is the more common naming on the site.
  const h = height ?? size ?? 32;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/statpro-logo-200.webp 200w, /statpro-logo-320.webp 320w, /statpro-logo-480.webp 480w, /statpro-logo-640.webp 640w"
        sizes={`${h * 4}px`}
      />
      <img
        src="/statpro-logo-320.png"
        srcSet="/statpro-logo-200.png 200w, /statpro-logo-320.png 320w, /statpro-logo-480.png 480w, /statpro-logo-640.png 640w"
        sizes={`${h * 4}px`}
        alt="StatPro Fintech — Reinventing Finance"
        width={h * 4}
        height={h}
        style={{ height: `${h}px`, width: "auto" }}
        className={`${className} ${dark ? "brightness-0 invert" : ""}`}
        draggable={false}
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}
