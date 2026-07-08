"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { LayoutGrid, Users } from "lucide-react" // Importamos iconos
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CatalogFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "todos") params.delete(key)
    else params.set(key, value)
    router.replace(`/productos?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap gap-6 items-end">
      
      {/* Filtro de Género */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
          <Users className="h-3.5 w-3.5" /> Género
        </label>
        <Select 
          defaultValue={searchParams.get("genero") || "todos"} 
          onValueChange={(v) => handleFilter("genero", v)}
        >
          <SelectTrigger className="w-[160px] bg-white">
            <SelectValue placeholder="Seleccionar..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="hombre">Hombre</SelectItem>
            <SelectItem value="mujer">Mujer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filtro de Categoría */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
          <LayoutGrid className="h-3.5 w-3.5" /> Categoría
        </label>
        <Select 
          defaultValue={searchParams.get("categoria") || "todos"} 
          onValueChange={(v) => handleFilter("categoria", v)}
        >
          <SelectTrigger className="w-[160px] bg-white">
            <SelectValue placeholder="Seleccionar..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas</SelectItem>
            <SelectItem value="relojes">Relojes</SelectItem>
            <SelectItem value="ropa">Ropa</SelectItem>
            <SelectItem value="accesorios">Accesorios</SelectItem>
          </SelectContent>
        </Select>
      </div>

    </div>
  )
}