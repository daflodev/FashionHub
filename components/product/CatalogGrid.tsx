import { ProductCard } from "./ProductCard"

async function fetchProducts(categoria?: string, genero?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = new URL(`${baseUrl}/api/products`)
  
  if (categoria && categoria !== 'todos') url.searchParams.append('categoria', categoria)
  if (genero && genero !== 'todos') url.searchParams.append('genero', genero)

  const res = await fetch(url.toString(), { cache: 'no-store' })
  return res.ok ? res.json() : []
}

export async function CatalogGrid({ categoria, genero }: { categoria?: string; genero?: string }) {
  const products = await fetchProducts(categoria, genero)

  if (products.length === 0) {
    return <div className="text-center py-20 text-slate-500">No hay productos.</div>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p: any) => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}