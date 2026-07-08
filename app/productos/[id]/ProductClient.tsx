"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart, Truck, Shield, Minus, Plus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/useCartStore"
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

export function ProductClient({ product }: ProductClientProps) {
  // Estados interactivos
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

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans">
      
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <nav className="flex items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-300" />
            <Link href={`/productos?categoria=${product.category.toLowerCase()}`} className="hover:text-slate-900 transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-300" />
            <span className="text-slate-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1200px] mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            <div className="p-6 md:p-8 bg-slate-50/50 flex flex-col-reverse md:flex-row gap-4 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-20 flex-shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-16 h-16 md:w-full md:h-24 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === idx ? "border-slate-900" : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <Image src={img} alt={`Miniatura ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
              
              <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden bg-white border border-slate-200">
                <Image 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  fill 
                  className="object-cover mix-blend-multiply"
                  priority
                />
                {product.originalPrice > product.price && (
                  <Badge className="absolute top-4 left-4 bg-slate-900 text-white border-0 px-3 py-1">
                    Ahorras ${ (product.originalPrice - product.price).toFixed(0) }
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-slate-900 fill-slate-900" : "text-slate-200"}`} />
                    ))}
                    <span className="text-sm font-medium text-slate-600 ml-2">{product.rating} ({product.reviews} reseñas)</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <span className={`text-sm font-medium ${product.stock > 0 ? "text-emerald-600" : "text-red-600"}`}>
                    {product.stock > 0 ? `En Stock (${product.stock})` : "Agotado"}
                  </span>
                </div>

                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <Separator className="mb-6 bg-slate-200" />

              <div className="space-y-6 mb-8">
                {product.colors.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-slate-900">Color: <span className="text-slate-500 font-normal">{selectedColor}</span></span>
                    </div>
                    <div className="flex space-x-3">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                            selectedColor === color.name ? "border-slate-900" : "border-transparent hover:border-slate-300"
                          }`}
                        >
                          <span className="w-8 h-8 rounded-full shadow-inner border border-slate-200" style={{ backgroundColor: color.hex }} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-slate-900">Talla</span>
                      <button className="text-xs text-slate-500 underline hover:text-slate-900">Guía de tallas</button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-5 py-2.5 border rounded-md text-sm font-medium transition-colors ${
                            selectedSize === size 
                              ? "border-slate-900 bg-slate-900 text-white" 
                              : "border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <span className="text-sm font-semibold text-slate-900 block mb-3">Cantidad</span>
                  <div className="flex items-center w-32 border border-slate-200 rounded-md bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input 
                      type="number" 
                      value={quantity} 
                      readOnly 
                      className="w-full text-center font-medium text-slate-900 outline-none"
                    />
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-3 py-2 text-slate-500 hover:text-slate-900 transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-slate-900 text-white hover:bg-slate-800 h-12 text-base font-semibold"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al Carrito
                </Button>
                <Button variant="outline" className="h-12 w-full sm:w-12 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-red-600 flex-shrink-0 p-0 flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 mt-auto">
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Envío Gratuito</h4>
                    <p className="text-xs text-slate-500">En pedidos superiores a $100</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Garantía Segura</h4>
                    <p className="text-xs text-slate-500">Respaldado por la marca</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Especificaciones Técnicas */}
        {product.details && product.details.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Especificaciones Técnicas</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {product.details.map((detail, idx) => {
                  const parts = detail.split(":")
                  const title = parts[0]
                  const desc = parts.slice(1).join(":")
                  
                  return (
                    <li key={idx} className="flex flex-col py-2 border-b border-slate-100 last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                      <span className="text-sm font-medium text-slate-500">{title}</span>
                      <span className="text-base text-slate-900">{desc ? desc.trim() : ""}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}