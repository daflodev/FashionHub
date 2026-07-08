"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const wishlistItems = [
  {
    id: 1,
    name: "Collar Minimalista Plata",
    price: 45.99,
    image: "/placeholder.svg?height=100&width=100",
    inStock: true,
  },
  {
    id: 2,
    name: "Pantalón Cargo Ejecutivo",
    price: 75.99,
    image: "/placeholder.svg?height=100&width=100",
    inStock: false,
  },
]

export function WishlistTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">Lista de Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="bg-white border-slate-200 shadow-sm rounded-md">
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="bg-slate-50 p-1 rounded-md border border-slate-100">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-sm object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-900 truncate">{item.name}</h3>
                <p className="text-lg font-bold text-slate-900 mt-1">${item.price}</p>
                <div className="mt-2">
                  <Badge 
                    variant="outline" 
                    className={item.inStock ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"}
                  >
                    {item.inStock ? "En Stock" : "Agotado"}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Button size="sm" disabled={!item.inStock} className="bg-slate-900 text-white hover:bg-slate-800 w-full">
                  Añadir
                </Button>
                <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 w-full h-8">
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}