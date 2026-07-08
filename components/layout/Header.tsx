import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { auth } from "@/lib/auth"
import { UserMenu } from "./UserMenu"
import { CartWidget } from "./CartWidget"

export async function Header() {
  // Petición segura desde el servidor
  const session = await auth()

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-slate-300">
            {siteConfig.name}
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 w-64 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
            
            {/* Lógica de Renderizado Condicional delegada a los Client Components */}
            {session?.user ? (
              <UserMenu user={session.user} />
            ) : (
              <Link href="/login">
                <Button className="bg-white text-slate-900 hover:bg-slate-100">
                  Iniciar sesión
                </Button>
              </Link>
            )}
            
            <CartWidget />
          </div>
        </div>
      </div>
    </header>
  )
}