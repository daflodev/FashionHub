"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/store/useCartStore"
import { useState } from "react"
import { toast } from "sonner"

interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  description: string
  category: string
  gender: string
  rating: number
  reviews: number
  stock: number
  images: string[]
  colors: { name: string; hex: string }[]
  sizes: string[]
  details: string[]
}

interface ProductClientProps {
  product: Product
}
export function ProductCard({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "")
  const [quantity, setQuantity] = useState(1)

  const addItem = useCartStore((state) => state.addItem)
  const handleAddToCart = () => {
  addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    quantity: quantity,
    color: selectedColor,
    size: selectedSize
  })
  toast.success("¡Producto añadido!", {
    description: `${product.name} ha sido agregado a tu carrito.`,
    action: {
      label: "Ver carrito",
      onClick: () => window.location.href = '/cart'
    },
  })
}

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault() 
    console.log("Añadido a favoritos:", product.name)
  }

  return (
    <Card className="group hover:shadow-md transition-all duration-200 bg-white border-slate-200 overflow-hidden rounded-md">
      <CardContent className="p-0">
        
        <Link href={`/productos/${product.id}`} className="block relative overflow-hidden bg-slate-50">
          <Image
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            width={250}
            height={250}
            className="w-full h-52 object-cover group-hover:opacity-95 transition-opacity duration-300 mix-blend-multiply"
          />
          
          <div className="absolute top-3 right-3 z-10">
            <Button
              size="icon"
              variant="ghost"
              onClick={handleFavorite}
              className="h-7 w-7 bg-white/90 hover:bg-white text-slate-400 hover:text-red-500 rounded-full shadow-sm"
            >
              <Heart className="h-3.5 w-3.5" />
            </Button>
          </div>
          
          {product.originalPrice && product.originalPrice > product.price && (
            <Badge className="absolute top-3 left-3 bg-slate-900 text-white border-0 rounded-sm px-1.5 py-0 text-[10px] z-10">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </Link>

        <div className="p-4">
          
          <Link href={`/productos/${product.id}`}>
            <h3 className="font-medium text-sm text-slate-900 mb-1 group-hover:text-blue-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center mb-2.5">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) ? "text-slate-800 fill-current" : "text-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-slate-500 ml-1.5">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-lg font-bold text-slate-900">${product.price}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium h-8 rounded-md transition-colors"
          >
            <ShoppingCart className="h-3.5 w-3.5 mr-2" />
            Añadir
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}