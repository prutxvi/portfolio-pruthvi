import * as React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface GradientButtonProps extends ButtonProps {}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'from-primary via-primary/60 to-primary bg-transparent bg-gradient-to-r [background-size:200%_auto] hover:bg-transparent hover:bg-[99%_center] transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton }
