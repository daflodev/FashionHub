import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight text-white">FashionHub</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tu destino para la moda más actual y accesorios exclusivos. Diseño pensado para profesionales.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Categorías</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/vestidos" className="hover:text-white transition-colors">Vestidos</Link></li>
              <li><Link href="/accesorios" className="hover:text-white transition-colors">Accesorios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/terms" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FashionHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}