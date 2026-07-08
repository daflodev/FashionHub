"use client"

import { User, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SettingsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 tracking-tight">Configuración de Cuenta</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Info Personal */}
        <Card className="bg-white border-slate-200 shadow-sm rounded-md">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center space-x-2 text-base font-semibold text-slate-900">
              <User className="h-4 w-4 text-slate-500" />
              <span>Información Personal</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-4">
            <div className="grid grid-cols-3 gap-4 border-b border-slate-50 pb-4">
              <span className="text-sm font-medium text-slate-500 col-span-1">Nombre</span>
              <span className="text-sm text-slate-900 col-span-2 font-medium">Juan Pérez</span>
            </div>
            <div className="grid grid-cols-3 gap-4 border-b border-slate-50 pb-4">
              <span className="text-sm font-medium text-slate-500 col-span-1">Email</span>
              <span className="text-sm text-slate-900 col-span-2">juan.perez@ejemplo.com</span>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-2">
              <span className="text-sm font-medium text-slate-500 col-span-1">Teléfono</span>
              <span className="text-sm text-slate-900 col-span-2">+34 600 123 456</span>
            </div>
            <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50">
              Editar Información
            </Button>
          </CardContent>
        </Card>

        {/* Notificaciones */}
        <Card className="bg-white border-slate-200 shadow-sm rounded-md">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle className="flex items-center space-x-2 text-base font-semibold text-slate-900">
              <Bell className="h-4 w-4 text-slate-500" />
              <span>Preferencias de Notificación</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Ofertas y promociones</p>
                <p className="text-xs text-slate-500">Recibe descuentos exclusivos.</p>
              </div>
              <Button size="sm" variant="outline" className="border-slate-200 bg-slate-50 text-slate-900 w-24">
                Activado
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Estado de pedidos</p>
                <p className="text-xs text-slate-500">Actualizaciones de envío y entrega.</p>
              </div>
              <Button size="sm" variant="outline" className="border-slate-200 bg-slate-50 text-slate-900 w-24">
                Activado
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Nuevas colecciones</p>
                <p className="text-xs text-slate-500">Entérate antes que nadie.</p>
              </div>
              <Button size="sm" variant="ghost" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900 w-24">
                Desactivado
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}