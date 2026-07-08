import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      
      <div className="w-full max-w-md text-center mb-8">
        <Link href="/" className="text-3xl font-extrabold tracking-tight text-slate-900 hover:text-slate-700 transition-colors">
          {siteConfig.name || "FashionHub"}
        </Link>
      </div>

      {children}
      
    </div>
  )
}