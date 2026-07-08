import { notFound } from "next/navigation"
import { ProductClient } from "./ProductClient"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import { Metadata } from "next"
async function getProductById(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  try {
    const res = await fetch(`${baseUrl}/api/products/${id}`, { 
      cache: 'no-store' 
    })
    
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}


function ProductSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Skeleton className="h-[500px] w-full" />
      <div className="space-y-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  )
}


export async function generateMetadata(
  { params }: { params:Promise<{ id: string }> }):Promise<Metadata> {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    return {
      title: "Producto no encontrado",
    }
  }

  return {
    title: product.name,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0] }],
      type: "website",
    },
    alternates: {
      canonical: `/productos/${product.id}`,
    }
  }
}


export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductLoader id={resolvedParams.id} />
    </Suspense>
  )
}

async function ProductLoader({ id }: { id: string }) {
  const product = await getProductById(id)
  if (!product) notFound()
  return <ProductClient product={product} />
}