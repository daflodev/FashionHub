"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: "FH-2024-001",
    date: "15 Ene 2024",
    status: "Entregado",
    total: 245.97,
    items: [
      { name: "Vestido Floral Elegante", quantity: 2, price: 89.99 },
      { name: "Chaqueta Denim Vintage", quantity: 1, price: 65.99 },
    ],
  },
  {
    id: "FH-2024-002",
    date: "10 Ene 2024",
    status: "En tránsito",
    total: 149.99,
    items: [{ name: "Bolso Cuero Premium", quantity: 1, price: 149.99 }],
  },
]

export function OrdersTab() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregado":
        return "bg-emerald-50 text-emerald-700 border-emerald-200"
      case "En tránsito":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Procesando":
        return "bg-amber-50 text-amber-700 border-amber-200"
      default:
        return "bg-slate-50 text-slate-700 border-slate-200"
    }
  }

  const downloadInvoice = (orderId: string) => {
    const link = document.createElement("a")
    link.href = `data:text/plain;charset=utf-8,Factura ${orderId} - FashionHub`
    link.download = `factura-${orderId}.pdf`
    link.click()
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">Historial de Pedidos</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="bg-white border-slate-200 shadow-sm overflow-hidden rounded-md">
            <CardContent className="p-0">
              <div className="bg-slate-50 border-b border-slate-100 p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">Pedido {order.id}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Realizado el {order.date}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <Badge variant="outline" className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                  <p className="text-lg font-bold text-slate-900">${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div className="p-4 sm:px-6 space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-slate-700">
                      <span className="font-medium text-slate-900">{item.quantity}x</span> {item.name}
                    </span>
                    <span className="text-slate-900 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border-t border-slate-100 p-4 sm:px-6 flex flex-wrap gap-3">
                <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">
                  Ver Detalles
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => downloadInvoice(order.id)}
                  className="flex items-center space-x-1 border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <Download className="h-3.5 w-3.5 mr-1" />
                  <span>Factura</span>
                </Button>
                <div className="flex-grow"></div>
                {order.status === "Entregado" && (
                  <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">
                    Comprar de Nuevo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}