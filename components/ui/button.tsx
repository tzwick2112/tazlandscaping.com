import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  `inline-flex transition-all font-normal font-roboto z-[1] duration-300 rounded-md items-center justify-center duration-400 whitespace-nowrap !text-sm+ font-semibold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300
    relative border border-transparent overflow-hidden before:absolute before:w-[430px] before:h-[400px] before:z-[-1] before:top-1/2 before:left-1/2 before:rounded-[50%] before:scale-0 before:translate-y-[-40%] before:translate-x-[-30%] before:transition-all before:duration-500 before:ease-out hover:before:scale-100 hover:before:translate-y-[-50%] hover:before:translate-x-[-50%]
  `,
  {
    variants: {
      variant: {
        primary: "bg-primary before:bg-primary-dark hover:border-primary-dark text-white",
        secondary:
          "text-primary-dark bg-white hover:bg-secondary group-hover/button:bg-secondary hover:text-white group-hover/button:text-white",
        outline: "border border-white text-white before:bg-primary-dark hover:border-primary-dark",
        "outline-primary":
          "border border-primary text-primary before:bg-primary-dark hover:text-white hover:border-primary-dark",
        solid:
          "bg-secondary text-white hover:bg-white border border-secondary group-hover/button:bg-white hover:text-secondary group-hover/button:text-secondary  group-hover/button:bg-white",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        neutral: "bg-primary-light text-primary hover:text-white before:bg-primary-dark",
        dark: "bg-primary-dark text-white hover:text-white before:bg-secondary",
      },
      size: {
        default: "px-10 lg:px-12 py-3.5 lg:py-4",
        sm: "px-5 py-3.5 lg:py-3.5",
        lg: "px-6 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon = true, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className="relative group/button">
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

