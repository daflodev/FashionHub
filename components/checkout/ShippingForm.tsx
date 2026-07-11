import { Truck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ShippingForm() {
  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-slate-900">
          <Truck className="h-5 w-5 text-slate-600" />
          <span>Información de Envío</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" placeholder="Juan" className="bg-slate-50" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" placeholder="Pérez" className="bg-slate-50" />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="address">Dirección completa</Label>
          <Input id="address" placeholder="Calle Principal 123" className="bg-slate-50" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label htmlFor="city">Ciudad</Label>
            <Input id="city" placeholder="Cartagena" className="bg-slate-50" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="state">Estado/Depto</Label>
            <Input id="state" placeholder="Bolívar" className="bg-slate-50" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="zip">C.P.</Label>
            <Input id="zip" placeholder="130001" className="bg-slate-50" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}