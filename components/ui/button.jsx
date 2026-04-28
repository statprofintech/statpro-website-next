import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy text-white shadow-lg shadow-navy/20 hover:bg-navy-light hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide",
        cyan: "bg-cyan text-navy font-bold shadow-lg shadow-cyan/25 hover:bg-cyan-dark hover:shadow-xl hover:-translate-y-0.5",
        emerald: "bg-emerald text-white font-bold shadow-lg shadow-emerald/25 hover:bg-emerald/90 hover:shadow-xl hover:-translate-y-0.5",
        outline: "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
        outlineLight: "border border-white/20 text-white/70 bg-transparent hover:bg-white/5 hover:border-white/40 hover:text-white",
        ghost: "text-navy hover:bg-navy/5",
        link: "text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
