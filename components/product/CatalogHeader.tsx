import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CatalogHeader({ categoria, genero }: { categoria?: string; genero?: string }) {
  const title = categoria || genero 
    ? `${categoria || "Moda"} para ${genero || "Todos"}` 
    : "Toda la Colección"

  return (
    <header className="bg-white border-b border-slate-200 py-10">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
        {(categoria || genero) && (
          <Link href="/productos">
            <Button variant="outline" className="rounded-none uppercase text-xs">Ver Todo</Button>
          </Link>
        )}
      </div>
    </header>
  )
}