import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export function AmazonTab() {
  return (
    <Card className="bg-white shadow-sm border border-slate-200 rounded-md">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">
          Integración con Amazon para Dropshipping
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Formulario API */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="amazonApiKey" className="text-slate-700">Amazon API Key</Label>
              <Input id="amazonApiKey" placeholder="Ingresa tu Amazon API Key" className="border-slate-200" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="amazonSecretKey" className="text-slate-700">Amazon Secret Key</Label>
              <Input id="amazonSecretKey" type="password" placeholder="Ingresa tu Amazon Secret Key" className="border-slate-200" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="amazonAssociateTag" className="text-slate-700">Amazon Associate Tag</Label>
              <Input id="amazonAssociateTag" placeholder="Ingresa tu Amazon Associate Tag" className="border-slate-200" />
            </div>
          </div>

          {/* Panel de Estado e Instrucciones */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-md flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Estado de Conexión</h3>
                <p className="text-xs text-slate-500">Última sincronización: Nunca</p>
              </div>
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                No Conectado
              </Badge>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-md p-4">
              <h4 className="font-semibold text-slate-900 text-sm mb-2">Instrucciones de Configuración</h4>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-600">
                <li>Regístrate en Amazon Associates Program.</li>
                <li>Obtén tus credenciales desde la consola de desarrollador.</li>
                <li>Configura los productos que deseas importar.</li>
                <li>Activa la sincronización automática de inventario.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100">
          <Button className="bg-slate-900 text-white hover:bg-slate-800">Conectar con Amazon</Button>
          <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">Sincronizar Productos</Button>
          <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">Configurar Automatización</Button>
        </div>
      </CardContent>
    </Card>
  )
}