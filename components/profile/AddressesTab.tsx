"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AddressesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Direcciones de Envío</h2>
        <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 hidden sm:flex">
          Nueva Dirección
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white border-slate-200 shadow-sm rounded-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-900"></div>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-900">Oficina Principal</h3>
              <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 text-xs">
                Predeterminada
              </Badge>
            </div>
            <div className="text-slate-600 text-sm space-y-1 mb-5">
              <p className="font-medium text-slate-900">Juan Pérez</p>
              <p>Torre Empresarial, Piso 12</p>
              <p>Av. Castellana 123</p>
              <p>Madrid, Madrid 28046</p>
              <p>España</p>
            </div>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 flex-1">
                Editar
              </Button>
              <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Button className="w-full sm:hidden bg-slate-900 text-white hover:bg-slate-800">
        Agregar Nueva Dirección
      </Button>
    </div>
  )
}