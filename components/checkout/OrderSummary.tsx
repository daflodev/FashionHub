import { Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// 1. Definimos qué estructura tiene un "Item"
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

// 2. Definimos las Props que recibe el componente
interface OrderSummaryProps {
  items: OrderItem[];
  total: number;
  subtotal: number;
  tax: number;
}

// 3. Se las asignamos al componente
export function OrderSummary({ items, total, subtotal, tax }: OrderSummaryProps) {
  return (
    <Card className="bg-white shadow-sm border border-slate-200 sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-slate-900">
          Resumen del Pedido
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between text-slate-600">
            <span className="text-sm">
              {item.name} x{item.quantity}
            </span>
            <span className="text-sm font-medium text-slate-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <Separator className="bg-slate-200" />

        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Envío</span>
          <span className="text-emerald-600 font-medium">GRATIS</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Impuestos</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <Separator className="bg-slate-200" />

        <div className="flex justify-between text-lg font-bold text-slate-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center space-x-2 mt-4">
          <Shield className="h-4 w-4 text-emerald-600" />
          <span className="text-sm text-slate-700">Pago 100% encriptado y seguro</span>
        </div>
      </CardContent>
    </Card>
  )
}