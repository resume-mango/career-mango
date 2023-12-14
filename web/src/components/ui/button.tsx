import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r to-primary from-orange stroke-white text-white hover:text-white [&_a:focus]:text-white [&_a:hover]:text-white hover:from-primary hover:to-primary disabled:bg-none disabled:bg-gray",
        secondary:
          "bg-secondary text-white hover:bg-secondary-foreground disabled:bg-gray hover:text-white",

        link: "inline-block bg-gradient-to-r to-primary from-orange text-white hover:from-primary hover:to-primary bg-clip-text	text-transparent disabled:bg-none disabled:bg-lightGray",
        outline:
          "inline-block text-center bg-gradient-to-r from-orange to-primary bg-clip-text text-transparent relative before:inline-block before:content-[''] before:absolute before:inset-[1px] before:rounded-full before:bg-background before:-z-10 after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-orange after:to-primary before:h-[calc(100%-2px)] before:w-[calc(100%-2px)] after:-z-20",
      },
      size: {
        default: "w-fit py-2.5 px-6",
        sm: "w-fit py-2 px-4 text-xs",
        lg: "w-full py-3 px-8 text-base",
        icon: "h-10 w-10",
        link: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
