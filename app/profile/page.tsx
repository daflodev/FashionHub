"use client"

import { useState } from "react"
import { User, Package, Heart, Settings, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Importamos los componentes modulares
import { OrdersTab } from "@/components/profile/OrdersTab"
import { AddressesTab } from "@/components/profile/AddressesTab"
import { SettingsTab } from "@/components/profile/SettingsTab"
import { WishlistTab } from "@/components/profile/WishListTab"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders")

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* Header del Perfil */}
      <header className="bg-slate-900 text-white shadow-sm py-10">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center shadow-inner">
              <User className="h-7 w-7 text-slate-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Mi Perfil</h1>
              <p className="text-slate-400 text-sm mt-0.5">juan.perez@ejemplo.com</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 max-w-[1000px] -mt-4 relative z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white shadow-sm border border-slate-200 rounded-md p-1 h-auto">
            <TabsTrigger value="orders" className="flex items-center space-x-2 py-2.5 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Pedidos</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center space-x-2 py-2.5 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Favoritos</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center space-x-2 py-2.5 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Direcciones</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2 py-2.5 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-900">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Configuración</span>
            </TabsTrigger>
          </TabsList>

          {/* Inyección de los módulos independientes */}
          <TabsContent value="orders" className="focus-visible:outline-none">
            <OrdersTab />
          </TabsContent>

          <TabsContent value="wishlist" className="focus-visible:outline-none">
            <WishlistTab />
          </TabsContent>

          <TabsContent value="addresses" className="focus-visible:outline-none">
            <AddressesTab />
          </TabsContent>

          <TabsContent value="settings" className="focus-visible:outline-none">
            <SettingsTab />
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}