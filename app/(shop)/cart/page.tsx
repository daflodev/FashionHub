"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import { CartItem } from "@/components/cart/CartItem"
import { CartSummary } from "@/components/cart/CartSummary"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { items } = useCartStore()
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 15
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <Link href="/productos" className="flex items-center text-slate-500 mb-4 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver
          </Link>
          <h1 className="text-3xl font-bold">Carrito de Compras</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] mt-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg border">
              <p className="text-slate-500 mb-4">Tu carrito está vacío</p>
              <Link href="/productos"><Button>Ir a la tienda</Button></Link>
            </div>
          ) : (
            items.map((item) => <CartItem key={`${item.id}-${item.color}`} item={item} />)
          )}
        </div>
        
        <CartSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} itemCount={items.length} />
      </div>
    </div>
  )
}