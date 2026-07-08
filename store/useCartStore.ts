import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) => 
        set((state) => {
          const existingItem = state.items.find((item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size)
          if (existingItem) {
            return {
              items: state.items.map((item) => 
                item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
              )
            }
          }
          return { items: [...state.items, newItem] }
        }),
      removeItem: (id) => 
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      updateQuantity: (id, quantity) => 
        set((state) => ({
          items: state.items.map((item) => item.id === id ? { ...item, quantity } : item)
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'cart-storage' } // Esto hace que el carrito se guarde en el localStorage del navegador
  )
)