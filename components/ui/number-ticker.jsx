"use client";

// Animated number counter — vanilla rAF, no motion dependency.
// Counts up to `value` once when the element scrolls into view.
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function NumberTicker({
  value = 0,
  duration = 1500,
  delay = 0,
  decimalPlaces = 0,
  className,
  prefix = "",
  suffix = "",
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startAt = performance.now() + delay;
            let raf = 0;
            const tick = (now) => {
              const t = Math.max(0, now - startAt);
              const progress = Math.min(1, t / duration);
              const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
              setDisplay(eased * value);
              if (progress < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(raf);
          }
        }
      },
      { threshold: 0 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)}>
      {prefix}
      {Intl.NumberFormat("en-IN", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(decimalPlaces > 0 ? display : Math.round(display))}
      {suffix}
    </span>
  );
}
