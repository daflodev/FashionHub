"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CartItem({ item }: { item: any }) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex items-center p-4 bg-white border rounded-lg gap-4">
      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-slate-500">{item.color} / {item.size}</p>
        <p className="font-bold">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
        <Input className="w-12 text-center" value={item.quantity} readOnly />
        <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
        <Button variant="ghost" className="text-red-500" onClick={() => removeItem(item.id)}><Trash2 className="h-4 w-4" /></Button>
      </div>
    </div>
  )
}