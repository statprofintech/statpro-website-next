import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors",
  {
    variants: {
      variant: {
        default: "bg-navy text-white",
        cyan: "bg-cyan/10 text-cyan-dark border border-cyan/20",
        emerald: "bg-emerald/10 text-emerald border border-emerald/20",
        outline: "border-2 border-navy text-navy",
        steel: "bg-steel/10 text-steel",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
));
Badge.displayName = "Badge";

export { Badge, badgeVariants };
