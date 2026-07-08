import React from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button" // Asegúrate de que esta ruta apunte a tu componente Button
import { cn } from "@/lib/utils"

interface CartButtonProps extends React.ComponentProps<typeof Button> {
  count?: number
}

export const CartButton = React.forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ count = 0, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("relative hover:bg-slate-100", className)}
        {...props}
      >
        <ShoppingCart className="h-5 w-5" />
        
        {/* Badge del contador */}
        {count > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-md px-1.5 h-4 min-w-[1rem] flex items-center justify-center border-[1.5px] border-white shadow-sm pointer-events-none">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </Button>
    )
  }
)

CartButton.displayName = "CartButton"