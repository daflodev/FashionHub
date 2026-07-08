"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Importamos nuestros módulos
import { DashboardStats } from "@/components/admin/DashboardStats"
import { OrdersTab } from "@/components/admin/OrdersTab"
import { AmazonTab } from "@/components/admin/AmazonTab"
import { ProductsTab } from "@/components/admin/ProductTab"

export default function AdminPage() {
  const [products] = useState([
    { id: 1, name: "Vestido Floral Elegante", price: 89.99, stock: 15, category: "Vestidos", status: "Activo", image: "/placeholder.svg?height=50&width=50" },
    { id: 2, name: "Chaqueta Denim Vintage", price: 65.99, stock: 8, category: "Chaquetas", status: "Activo", image: "/placeholder.svg?height=50&width=50" },
    { id: 3, name: "Bolso Cuero Premium", price: 149.99, stock: 0, category: "Accesorios", status: "Agotado", image: "/placeholder.svg?height=50&width=50" },
  ])

  const [orders] = useState([
    { id: "FH-2024-001", customer: "Juan Pérez", date: "2024-01-15", status: "Entregado", total: 245.97, items: 3 },
    { id: "FH-2024-002", customer: "María García", date: "2024-01-14", status: "En tránsito", total: 149.99, items: 1 },
    { id: "FH-2024-003", customer: "Carlos López", date: "2024-01-13", status: "Procesando", total: 95.99, items: 1 },
  ])

  const stats = {
    totalProducts: products.length,
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
    lowStockProducts: products.filter((p) => p.stock < 10).length,
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      <div className="bg-white border-b border-slate-200 py-8 mb-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Panel de Administración
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Gestiona tu inventario, ventas e integraciones.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <DashboardStats stats={stats} />

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-white border border-slate-200 shadow-sm p-1 rounded-md h-auto">
            <TabsTrigger value="products" className="py-2 px-4 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              Productos
            </TabsTrigger>
            <TabsTrigger value="orders" className="py-2 px-4 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="amazon" className="py-2 px-4 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              Integración Amazon
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="focus-visible:outline-none">
            <ProductsTab products={products} />
          </TabsContent>

          <TabsContent value="orders" className="focus-visible:outline-none">
            <OrdersTab orders={orders} />
          </TabsContent>

          <TabsContent value="amazon" className="focus-visible:outline-none">
            <AmazonTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}