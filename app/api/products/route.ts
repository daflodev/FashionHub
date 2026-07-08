import { NextResponse } from 'next/server'
import { mockDatabase } from '@/lib/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoria = searchParams.get('categoria')
  const genero = searchParams.get('genero')

  let filteredProducts = mockDatabase.products

  if (categoria) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === categoria.toLowerCase()
    )
  }

  if (genero) {
    filteredProducts = filteredProducts.filter(
      (p) => p.gender.toLowerCase() === genero.toLowerCase()
    )
  }

  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(filteredProducts)
}