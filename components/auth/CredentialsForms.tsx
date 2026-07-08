"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function CredentialsForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showOTP, setShowOTP] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const otp = formData.get("otp") as string

    // redirect: false evita que NextAuth rompa la página si hay un error
    const res = await signIn("credentials", {
      email,
      password,
      otp,
      redirect: false,
    })

    if (res?.error) {
      toast.error(res.error) // "Código OTP incorrecto" o "Credenciales inválidas"
      setLoading(false)
    } else {
      toast.success("¡Inicio de sesión exitoso!")
      router.push("/productos")
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full mt-6">
      <div className="space-y-2">
        <Input name="email" type="email" placeholder="demo@correo.com" required className="bg-slate-50" />
        <Input name="password" type="password" placeholder="Contraseña (password123)" required className="bg-slate-50" />
        
        {showOTP && (
          <Input name="otp" type="text" placeholder="Código de 6 dígitos (123456)" required className="bg-slate-50 border-blue-300" />
        )}
      </div>

      {!showOTP ? (
        <Button type="button" variant="outline" onClick={() => setShowOTP(true)} className="w-full">
          Tengo un código 2FA
        </Button>
      ) : (
        <Button type="submit" disabled={loading} className="w-full bg-slate-900 text-white">
          {loading ? "Verificando..." : "Ingresar"}
        </Button>
      )}
    </form>
  )
}