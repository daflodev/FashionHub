
import { CredentialsForm } from "@/components/auth/CredentialsForms"
import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth"


export default function LoginPage() {
  return (
   
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center w-full max-w-md">
      <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Bienvenido de vuelta</h1>
      <p className="text-slate-500 mb-6 text-sm">Elige tu método de acceso preferido</p>
      
      <div className="space-y-3">
        <form action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/productos" })
        }}>
          <Button type="submit" variant="outline" className="w-full h-11 flex items-center justify-center gap-2">
            <img src="https://authjs.dev/img/providers/google.svg" alt="Google" className="w-5 h-5" />
            Continuar con Google
          </Button>
        </form>

        <form action={async () => {
          "use server"
          await signIn("azure-ad", { redirectTo: "/productos" })
        }}>
          <Button type="submit" variant="outline" className="w-full h-11 flex items-center justify-center gap-2">
            <img src="https://authjs.dev/img/providers/azure.svg" alt="Microsoft" className="w-5 h-5" />
            Continuar con Microsoft
          </Button>
        </form>
      </div>

      <div className="mt-6 flex items-center justify-center text-sm relative">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
        <span className="bg-white px-2 text-slate-500 relative z-10">O ingresa con tu correo</span>
      </div>
      <CredentialsForm />
    </div>
  )
}