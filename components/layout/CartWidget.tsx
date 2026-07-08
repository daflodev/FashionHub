"use client"

import Link from "next/link"
import { useCartStore } from "@/store/useCartStore"
import { CartButton } from "../ui/CartButton"

export function CartWidget() {
  const cartItems = useCartStore((state) => state.items)
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <Link href="/cart">
      <CartButton count={totalItems} className="text-slate-300 hover:text-white hover:bg-slate-800" />
    </Link>
  )
}