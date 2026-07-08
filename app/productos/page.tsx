import { Suspense } from "react"

import { CatalogSkeleton } from "@/components/product/CatalagSkeleton";
import { CatalogGrid } from "@/components/product/CatalogGrid";
import { CatalogHeader } from "@/components/product/CatalogHeader";
import { CatalogFilters } from "@/components/product/CatalogFilters";

interface PageProps {
  searchParams: Promise<{ categoria?: string; genero?: string }>
}

export default async function ProductosPage({ searchParams }: PageProps) {
  const { categoria, genero } = await searchParams

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white border-b py-8">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          {/* AQUÍ ES DONDE LO COLOCAMOS */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Catálogo</h1>
              <p className="text-slate-500 mt-1">Explora nuestra colección premium</p>
            </div>
            
       
            <CatalogFilters />
          </div>
        </div>
      </header>
      
      <main className="container max-w-[1400px] mx-auto px-4 md:px-6 py-12">
        <Suspense key={`${categoria}-${genero}`} fallback={<CatalogSkeleton />}>
          <CatalogGrid categoria={categoria} genero={genero} />
        </Suspense>
      </main>
    </div>
  )
}