import { useState } from "react"
import { CreditCard } from "lucide-react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function StripePayment({ total, onPaymentSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
      redirect: "if_required",
    })

    if (error) {
      setErrorMessage(error.message || "Ocurrió un error inesperado")
      setIsProcessing(false)
    } else {
      // Si el pago es exitoso, llamamos a la función del componente padre
      onPaymentSuccess()
    }
  }

  return (
    <Card className="bg-white shadow-sm border border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-slate-900">
          <CreditCard className="h-5 w-5 text-slate-600" />
          <span>Método de Pago Seguro</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* El PaymentElement renderiza automáticamente los campos de tarjeta, Apple Pay o Google Pay según la configuración de tu cuenta Stripe */}
          <PaymentElement />
          
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}

          <Button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg shadow-sm transition-all"
          >
            {isProcessing ? "Procesando..." : `Pagar $${total.toFixed(2)}`}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}