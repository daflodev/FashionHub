import { Eye, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  customer: string
  date: string
  status: string
  total: number
  items: number
}

export function OrdersTab({ orders }: { orders: Order[] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregado": return "bg-emerald-50 text-emerald-700 border-emerald-200"
      case "En tránsito": return "bg-blue-50 text-blue-700 border-blue-200"
      case "Procesando": return "bg-amber-50 text-amber-700 border-amber-200"
      default: return "bg-slate-100 text-slate-500 border-slate-200"
    }
  }

  return (
    <Card className="bg-white shadow-sm border border-slate-200 rounded-md">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">Gestión de Pedidos</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-semibold text-slate-600">ID Pedido</TableHead>
              <TableHead className="font-semibold text-slate-600">Cliente</TableHead>
              <TableHead className="font-semibold text-slate-600">Fecha</TableHead>
              <TableHead className="font-semibold text-slate-600">Estado</TableHead>
              <TableHead className="font-semibold text-slate-600">Items</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">Total</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-medium text-slate-900">{order.id}</TableCell>
                <TableCell className="text-slate-600">{order.customer}</TableCell>
                <TableCell className="text-slate-600">{order.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-600">{order.items}</TableCell>
                <TableCell className="font-bold text-slate-900 text-right">${order.total.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-1">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-slate-900">
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
  )
}