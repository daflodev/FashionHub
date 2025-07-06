"use client"

import { useState } from "react"
import { Package, ShoppingCart, TrendingUp, Plus, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function AdminPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Vestido Floral Elegante",
      price: 89.99,
      stock: 15,
      category: "Vestidos",
      status: "Activo",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Chaqueta Denim Vintage",
      price: 65.99,
      stock: 8,
      category: "Chaquetas",
      status: "Activo",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Bolso Cuero Premium",
      price: 149.99,
      stock: 0,
      category: "Accesorios",
      status: "Agotado",
      image: "/placeholder.svg?height=50&width=50",
    },
  ])

  const [orders] = useState([
    {
      id: "FH-2024-001",
      customer: "Juan Pérez",
      date: "2024-01-15",
      status: "Entregado",
      total: 245.97,
      items: 3,
    },
    {
      id: "FH-2024-002",
      customer: "María García",
      date: "2024-01-14",
      status: "En tránsito",
      total: 149.99,
      items: 1,
    },
    {
      id: "FH-2024-003",
      customer: "Carlos López",
      date: "2024-01-13",
      status: "Procesando",
      total: 95.99,
      items: 1,
    },
  ])

  const stats = {
    totalProducts: products.length,
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
    lowStockProducts: products.filter((p) => p.stock < 10).length,
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800"
      case "Agotado":
        return "bg-red-100 text-red-800"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Panel de Administración
          </h1>
          <p className="text-white/80 mt-2">Gestiona tu tienda FashionHub</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total Productos</p>
                  <p className="text-3xl font-bold">{stats.totalProducts}</p>
                </div>
                <Package className="h-12 w-12 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total Pedidos</p>
                  <p className="text-3xl font-bold">{stats.totalOrders}</p>
                </div>
                <ShoppingCart className="h-12 w-12 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Ingresos Totales</p>
                  <p className="text-3xl font-bold">${stats.totalRevenue.toFixed(2)}</p>
                </div>
                <TrendingUp className="h-12 w-12 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Stock Bajo</p>
                  <p className="text-3xl font-bold">{stats.lowStockProducts}</p>
                </div>
                <Package className="h-12 w-12 text-white/80" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="amazon">Amazon Integration</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Gestión de Productos
                  </CardTitle>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                    <Plus className="h-4 w-4 mr-2" />
                    Nuevo Producto
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Imagen</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Precio</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Categoría</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={50}
                            height={50}
                            className="rounded-lg object-cover"
                          />
                        </TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                          <Badge variant={product.stock < 10 ? "destructive" : "default"}>{product.stock}</Badge>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="icon" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Gestión de Pedidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID Pedido</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell className="font-bold">${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="icon" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Amazon Integration Tab */}
          <TabsContent value="amazon" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Integración con Amazon para Dropshipping
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amazonApiKey">Amazon API Key</Label>
                      <Input id="amazonApiKey" placeholder="Ingresa tu Amazon API Key" />
                    </div>
                    <div>
                      <Label htmlFor="amazonSecretKey">Amazon Secret Key</Label>
                      <Input id="amazonSecretKey" type="password" placeholder="Ingresa tu Amazon Secret Key" />
                    </div>
                    <div>
                      <Label htmlFor="amazonAssociateTag">Amazon Associate Tag</Label>
                      <Input id="amazonAssociateTag" placeholder="Ingresa tu Amazon Associate Tag" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-2">Estado de Conexión</h3>
                      <Badge className="bg-yellow-500 text-white">No Conectado</Badge>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Productos Sincronizados</h4>
                      <p className="text-sm text-gray-600">0 productos importados desde Amazon</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Última Sincronización</h4>
                      <p className="text-sm text-gray-600">Nunca</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500">Conectar con Amazon</Button>
                  <Button variant="outline">Sincronizar Productos</Button>
                  <Button variant="outline">Configurar Automatización</Button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Instrucciones de Configuración</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
                    <li>Regístrate en Amazon Associates Program</li>
                    <li>Obtén tus credenciales de API desde Amazon Developer Console</li>
                    <li>Configura los productos que deseas importar</li>
                    <li>Establece márgenes de ganancia automáticos</li>
                    <li>Activa la sincronización automática de inventario</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
