"use client"

import { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { ShippingForm } from "@/components/checkout/ShippingForm"
import { OrderSummary } from "@/components/checkout/OrderSummary"
import { StripePayment } from "@/components/checkout/StripePayment"

// Inicializamos Stripe fuera del ciclo de renderizado para evitar recreaciones
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const [orderComplete, setOrderComplete] = useState(false)
  const [clientSecret, setClientSecret] = useState("")

  // Datos simulados (en un caso real, esto viene de Zustand o la base de datos)
  const orderItems = [
    { name: "Vestido Floral Elegante", price: 89.99, quantity: 2 },
    { name: "Chaqueta Denim Vintage", price: 65.99, quantity: 1 },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  // Cuando el componente carga, pedimos al backend el "Intento de Pago"
  useEffect(() => {
    // Simularemos la llamada al backend. 
    // En el siguiente paso, crearemos esta API real en Next.js
    fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error("Aún no hemos creado el backend de Stripe:", err))
  }, [total])

  // Pantalla de Éxito
  if (orderComplete) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 p-4">
        <Card className="max-w-md w-full border-slate-200 shadow-sm text-center p-8">
          <CardContent className="space-y-6 pt-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">¡Pedido Confirmado!</h2>
              <p className="text-slate-500 mt-2">Tu pedido #FH-{Math.floor(Math.random() * 10000)} ha sido procesado exitosamente.</p>
            </div>
            <div className="space-y-3 pt-4">
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">Ver detalles del pedido</Button>
              <Button variant="outline" className="w-full border-slate-200 text-slate-700">Volver a la tienda</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Pantalla Principal de Checkout
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Finalizar Compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 space-y-6">
            <ShippingForm />
            
            {/* Solo mostramos el formulario de Stripe cuando el backend nos responde */}
            {clientSecret ? (
              <Elements options={{ clientSecret, appearance: { theme: 'stripe' } }} stripe={stripePromise}>
                <StripePayment 
                  total={total} 
                  onPaymentSuccess={() => setOrderComplete(true)} 
                />
              </Elements>
            ) : (
              <div className="p-8 text-center bg-white border border-slate-200 rounded-lg text-slate-500">
                Cargando pasarela de pago segura...
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <OrderSummary items={orderItems} total={total} subtotal={subtotal} tax={tax} />
          </div>

        </div>
      </div>
    </div>
  )
}