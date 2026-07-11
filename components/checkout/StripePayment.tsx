import { useState } from "react"
import { CreditCard } from "lucide-react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// 1. Definimos las Props
interface StripePaymentProps {
  total: number;
  onPaymentSuccess: () => void;
}

// 2. Se las asignamos al componente
export function StripePayment({ total, onPaymentSuccess }: StripePaymentProps) {


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