"use client"

import { useState } from "react"
import { User, Package, Heart, Settings, MapPin, Bell, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders")

  const orders = [
    {
      id: "FH-2024-001",
      date: "2024-01-15",
      status: "Entregado",
      total: 245.97,
      items: [
        { name: "Vestido Floral Elegante", quantity: 2, price: 89.99 },
        { name: "Chaqueta Denim Vintage", quantity: 1, price: 65.99 },
      ],
    },
    {
      id: "FH-2024-002",
      date: "2024-01-10",
      status: "En tránsito",
      total: 149.99,
      items: [{ name: "Bolso Cuero Premium", quantity: 1, price: 149.99 }],
    },
    {
      id: "FH-2024-003",
      date: "2024-01-05",
      status: "Procesando",
      total: 95.99,
      items: [{ name: "Zapatos Deportivos Neon", quantity: 1, price: 95.99 }],
    },
  ]

  const wishlistItems = [
    {
      id: 1,
      name: "Collar Dorado Moderno",
      price: 45.99,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 2,
      name: "Pantalón Cargo Urbano",
      price: 75.99,
      image: "/placeholder.svg?height=100&width=100",
      inStock: false,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Entregado":
        return "bg-green-100 text-green-800"
      case "En tránsito":
        return "bg-blue-100 text-blue-800"
      case "Procesando":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const downloadInvoice = (orderId) => {
    // Simular descarga de factura
    const link = document.createElement("a")
    link.href = `data:text/plain;charset=utf-8,Factura ${orderId} - FashionHub`
    link.download = `factura-${orderId}.pdf`
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mi Perfil</h1>
              <p className="text-white/80">juan.perez@ejemplo.com</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Pedidos</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Favoritos</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Direcciones</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Configuración</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Historial de Pedidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">Pedido #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        <p className="text-lg font-bold text-purple-600 mt-1">${order.total.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Ver Detalles
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => downloadInvoice(order.id)}
                        className="flex items-center space-x-1"
                      >
                        <Download className="h-3 w-3" />
                        <span>Factura</span>
                      </Button>
                      {order.status === "Entregado" && (
                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                          Comprar de Nuevo
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Lista de Favoritos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg bg-white">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-lg font-bold text-purple-600">${item.price}</p>
                        <Badge variant={item.inStock ? "default" : "secondary"}>
                          {item.inStock ? "En Stock" : "Agotado"}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <Button size="sm" disabled={!item.inStock}>
                          Agregar al Carrito
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-500">
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Direcciones de Envío
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Casa</h3>
                    <Badge>Principal</Badge>
                  </div>
                  <p className="text-gray-600">
                    Juan Pérez
                    <br />
                    Calle Principal 123
                    <br />
                    Madrid, Madrid 28001
                    <br />
                    España
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500">
                      Eliminar
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Agregar Nueva Dirección</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-purple-600" />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Información Personal
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nombre Completo</label>
                    <p className="text-gray-600">Juan Pérez</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-gray-600">juan.perez@ejemplo.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Teléfono</label>
                    <p className="text-gray-600">+1 234 567 8900</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Editar Información</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-purple-600" />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Notificaciones
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Ofertas y promociones</span>
                    <Button size="sm" variant="outline">
                      Activado
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Actualizaciones de pedidos</span>
                    <Button size="sm" variant="outline">
                      Activado
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Nuevos productos</span>
                    <Button size="sm" variant="outline">
                      Desactivado
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
