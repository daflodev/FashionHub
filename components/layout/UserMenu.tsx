"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function UserMenu({ user }: { user: { name?: string | null; image?: string | null } }) {
  return (
    <div className="flex items-center space-x-4">
      <img 
        src={user.image || "/default-avatar.png"} 
        alt="Avatar" 
        className="h-8 w-8 rounded-full border border-slate-700" 
      />
      <Button 
        variant="ghost" 
        onClick={() => signOut({ callbackUrl: '/' })} 
        className="text-sm text-slate-300 hover:text-white"
      >
        Salir
      </Button>
    </div>
  )
}