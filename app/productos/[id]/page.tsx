import { Suspense } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductClient } from "./ProductClient"
import { Skeleton } from "@/components/ui/skeleton"

async function getProduct(id: string) {
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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)

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

function ProductSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Skeleton className="h-[500px] w-full rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  )
}

async function ProductLoader({ id }: { id: string }) {
  const product = await getProduct(id)
  
  if (!product) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images[0],
    description: product.description,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'FashionHub',
    },
    offers: {
      '@type': 'Offer',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/productos/${product.id}`,
      priceCurrency: 'COP', 
      price: product.price,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    ...(product.reviews > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviews,
      }
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductClient product={product} />
    </>
  )
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductLoader id={resolvedParams.id} />
    </Suspense>
  )
}