import { NextResponse } from "next/server"
import Stripe from "stripe"

// Inicializamos Stripe con la clave secreta del entorno
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-06-24.dahlia",
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { amount } = body

    // Validamos que exista un monto válido
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Monto inválido" },
        { status: 400 }
      )
    }

    // Stripe procesa los montos en centavos para evitar errores de decimales.
    // Si cobras $100.50, a Stripe le envías 10050.
    const amountInCents = Math.round(amount * 100)

    // Creamos el PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd", // Cambia a "cop" si procesas pesos colombianos
      // Aquí puedes añadir metadatos para rastrear la orden después
      metadata: {
        integration_check: "accept_a_payment",
      },
    })

    // Retornamos el secreto al frontend para que el PaymentElement se desbloquee
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })

  } catch (error: any) {
    console.error("Error al crear el PaymentIntent:", error)
    return NextResponse.json(
      { error: error.message || "Error interno del servidor" },
      { status: 500 }
    )
  }
}