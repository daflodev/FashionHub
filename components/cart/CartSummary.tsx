"use client"

import Link from "next/link"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface CartSummaryProps {
  subtotal: number
  shipping: number
  tax: number
  total: number
  itemCount: number
}

export function CartSummary({ subtotal, shipping, tax, total, itemCount }: CartSummaryProps) {
  return (
    <Card className="bg-white shadow-sm border border-slate-200 rounded-lg sticky top-24">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Resumen del Pedido
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="flex justify-between text-slate-600 text-sm">
          <span>Subtotal</span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-600 text-sm">
          <span>Envío</span>
          <span className={shipping === 0 ? "text-blue-600 font-medium" : "font-medium text-slate-900"}>
            {shipping === 0 ? "GRATIS" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-slate-600 text-sm">
          <span>Impuestos (10%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
        
        <Separator className="bg-slate-200 my-4" />
        
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold text-slate-900">Total</span>
          <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
        </div>

        {subtotal < 100 && itemCount > 0 && (
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mt-2">
            <p className="text-xs text-blue-800 text-center font-medium">
              Agrega ${(100 - subtotal).toFixed(2)} más para obtener envío gratuito.
            </p>
          </div>
        )}

        <div className="pt-4 space-y-3">
          <Link href="/checkout" className="block">
            <Button
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-md transition-colors"
              disabled={itemCount === 0}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Proceder al Pago
            </Button>
          </Link>

          <Link href="/productos" className="block">
            <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 py-2.5 rounded-md">
              Continuar Comprando
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}