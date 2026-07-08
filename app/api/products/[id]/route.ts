import { NextResponse } from 'next/server'
import { mockDatabase } from '@/lib/data'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
  const resolvedParams = await params
  const productId = resolvedParams.id
  
  const product = mockDatabase.products.find((p) => p.id === productId)

  if (!product) {
    return NextResponse.json(
      { error: 'Producto no encontrado' }, 
      { status: 404 }
    )
  }

  return NextResponse.json(product)
}