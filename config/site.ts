export const siteConfig = {
  name: "FashionHub",
  shortName: "FH",
  description: "Elegancia que inspira. Ropa y accesorios modernos para el profesional de hoy.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tudominio.com",
  contact: {
    email: "contacto@fashionhub.com",
    phone: "+1234567890",
    whatsapp: "1234567890", // Solo números para el enlace de la API
    whatsappMessage: "Hola, estoy interesado en sus productos corporativos.",
    address: "Torre Empresarial, Piso 12, Madrid, España",
  },
  links: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  currency: {
    code: "USD",
    symbol: "$",
  },
  features: {
    enableBlog: false,
    enableAmazonDropshipping: true,
  }
}

export type SiteConfig = typeof siteConfig