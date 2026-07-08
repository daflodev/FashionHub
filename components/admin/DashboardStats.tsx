import { Package, ShoppingCart, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface DashboardStatsProps {
  stats: {
    totalProducts: number
    totalOrders: number
    totalRevenue: number
    lowStockProducts: number
  }
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="bg-white border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Productos</p>
              <p className="text-2xl font-bold text-slate-900">{stats.totalProducts}</p>
            </div>
            <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
              <Package className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Pedidos</p>
              <p className="text-2xl font-bold text-slate-900">{stats.totalOrders}</p>
            </div>
            <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
              <ShoppingCart className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Ingresos Totales</p>
              <p className="text-2xl font-bold text-slate-900">${stats.totalRevenue.toFixed(2)}</p>
            </div>
            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Stock Bajo</p>
              <p className="text-2xl font-bold text-slate-900">{stats.lowStockProducts}</p>
            </div>
            <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
              <Package className="h-5 w-5 text-red-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}