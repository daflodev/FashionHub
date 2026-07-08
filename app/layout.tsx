import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "FashionHub | Tu tienda de moda online",
    template: "%s | FashionHub" // Esto añade el nombre de la tienda al final de cada página
  },
  description: "Descubre la última colección de moda, zapatos y accesorios. Envíos gratis en pedidos superiores a $100.",
  keywords: ["moda", "ropa", "tienda online", "accesorios", "zapatos", "ecommerce"],
  authors: [{ name: "FashionHub Team" }],
  creator: "FashionHub",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "FashionHub | Tu tienda de moda online",
    description: "Descubre la última colección de moda con las mejores ofertas.",
    siteName: "FashionHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FashionHub Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FashionHub | Tu tienda de moda online",
    description: "Descubre la última colección de moda con las mejores ofertas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}