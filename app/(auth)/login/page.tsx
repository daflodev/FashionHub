import Link from "next/link"
import { CredentialsForm } from "@/components/auth/CredentialsForms"
// import { Button } from "@/components/ui/button" // Descomentar si usas los botones sociales
// import { signIn } from "@/lib/auth"

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center w-full max-w-md">
      <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Bienvenido de vuelta</h1>
      
      {/* Tarjeta de Cuenta Demo para el Portafolio */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 mt-4 text-left shadow-sm">
        <p className="text-sm text-slate-600 font-medium mb-2">
          👋 Para probar la plataforma, usa esta cuenta demo:
        </p>
        <div className="bg-slate-100 p-3 rounded text-xs font-mono text-slate-800 space-y-1">
          <p>Email: <span className="font-semibold">demo@correo.com</span></p>
          <p>Contraseña: <span className="font-semibold">password123</span></p>
          <p>Código 2FA: <span className="font-semibold text-blue-600">123456</span></p>
        </div>
      </div>

      {/* Botones Sociales Comentados */}
      {/* 
      <div className="space-y-3 mb-6">
        <form action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/productos" })
        }}>
          <Button type="submit" variant="outline" className="w-full h-11 flex items-center justify-center gap-2">
            <img src="https://authjs.dev/img/providers/google.svg" alt="Google" className="w-5 h-5" />
            Continuar con Google
          </Button>
        </form>
        ...
      </div> 
      */}

      <div className="mt-2 flex items-center justify-center text-sm relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <span className="bg-white px-3 text-slate-500 relative z-10">
          Ingresa con tu correo
        </span>
      </div>
      
      <CredentialsForm />

      {/* Enlace de Registro optimizado */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <p className="text-sm text-slate-500">
          ¿No tienes una cuenta?{" "}
          <Link href="/registro" className="font-semibold text-slate-900 hover:text-blue-600 transition-colors">
            Regístrate aquí
          </Link>
        </p>
      </div> 
    </div>
  )
}