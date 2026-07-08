// src/lib/data.ts

export const mockDatabase = {
  products: [
    { 
      id: "1", 
      name: "Reloj Cronógrafo Automático Élite", 
      price: 299.99, 
      originalPrice: 350.00, 
      description: "Diseñado para la precisión y la elegancia. Este cronógrafo automático cuenta con una caja de acero inoxidable de grado quirúrgico.",
      category: "Relojes", 
      gender: "Hombre", 
      rating: 4.9, 
      reviews: 128, 
      stock: 5, 
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800"
      ],
      colors: [
        { name: "Plata/Azul", hex: "#0f172a" },
        { name: "Acero Clásico", hex: "#cbd5e1" },
      ],
      sizes: ["Única"],
      details: ["Movimiento: Automático de 24 joyas", "Caja: Acero inoxidable 316L (42mm)"]
    },
    { 
      id: "2", 
      name: "Reloj Minimalista Rose Gold", 
      price: 189.99, 
      originalPrice: 220.0, 
      description: "Un diseño sutil y elegante para el día a día. Acabado en oro rosado de 18k.",
      category: "Relojes", 
      gender: "Mujer", 
      rating: 4.8, 
      reviews: 89,
      stock: 12,
      images: [
        "https://images.unsplash.com/photo-1508656937041-edc22eb430fc?q=80&w=800"
      ],
      colors: [{ name: "Rose Gold", hex: "#f43f5e" }],
      sizes: ["Única"],
      details: ["Movimiento: Cuarzo suizo", "Resistencia al agua: 5 ATM"]
    },
    { 
      id: "3", 
      name: "Eau de Parfum 'Midnight'", 
      price: 120.00, 
      originalPrice: 150.0, 
      description: "Fragancia nocturna y seductora con notas de madera, vainilla y especias exóticas.",
      category: "Perfumes", 
      gender: "Mujer", 
      rating: 4.7, 
      reviews: 156,
      stock: 20, 
      images: [
        "https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?q=80&w=800"
      ],
      colors: [],
      sizes: ["50ml", "100ml"],
      details: ["Familia Olfativa: Oriental Amaderada", "Duración: 8-10 horas"]
    },
    { 
      id: "4", 
      name: "Colonia 'Wood & Spice'", 
      price: 95.00, 
      originalPrice: 110.0, 
      description: "Una esencia robusta para el hombre moderno. Combina cedro, pimienta negra y un toque cítrico.",
      category: "Perfumes", 
      gender: "Hombre", 
      rating: 4.6, 
      reviews: 92,
      stock: 15, 
      images: [
        "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800"
      ],
      colors: [],
      sizes: ["100ml", "150ml"],
      details: ["Familia Olfativa: Amaderada Especiada", "Concentración: Eau de Toilette"]
    },
    { 
      id: "5", 
      name: "Traje Ejecutivo Slim Fit", 
      price: 350.00, 
      originalPrice: 400.0, 
      description: "Corte moderno que se adapta perfectamente a la silueta. Mezcla de lana premium transpirable.",
      category: "Ropa", 
      gender: "Hombre", 
      rating: 4.8, 
      reviews: 34,
      stock: 8,
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800"
      ],
      colors: [{ name: "Navy", hex: "#1e293b" }, { name: "Negro", hex: "#0f172a" }],
      sizes: ["46", "48", "50", "52", "54"],
      details: ["Material: 80% Lana, 20% Seda", "Forro interno transpirable", "Incluye saco y pantalón"]
    },
    { 
      id: "6", 
      name: "Blusa de Seda Corporativa", 
      price: 85.99, 
      originalPrice: 100.0, 
      description: "Blusa fluida de seda natural, ideal para la oficina o reuniones de negocios. Cuello elegante en V.",
      category: "Ropa", 
      gender: "Mujer", 
      rating: 4.5, 
      reviews: 112,
      stock: 25, 
      images: [
        "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=800"
      ],
      colors: [{ name: "Blanco", hex: "#ffffff" }, { name: "Perla", hex: "#e2e8f0" }],
      sizes: ["XS", "S", "M", "L", "XL"],
      details: ["Material: 100% Seda Natural", "Cuidado: Lavado en seco recomendado"]
    },
    { 
      id: "7", 
      name: "Bolso Tote de Cuero", 
      price: 145.00, 
      originalPrice: 180.0, 
      description: "Bolso espacioso y estructurado. Perfecto para llevar tu laptop y documentos con estilo.",
      category: "Accesorios", 
      gender: "Mujer", 
      rating: 4.9, 
      reviews: 205,
      stock: 10, 
      images: [
        "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800"
      ],
      colors: [{ name: "Taupe", hex: "#78716c" }, { name: "Negro Clásico", hex: "#000000" }],
      sizes: ["Única"],
      details: ["Material: Cuero vegano premium", "Compartimento acolchado para laptop de 14 pulgadas"]
    },
    { 
      id: "8", 
      name: "Cinturón de Cuero Reversible", 
      price: 45.00, 
      originalPrice: 60.0, 
      description: "Cinturón versátil de piel genuina. Un lado negro y otro marrón para combinar con cualquier traje.",
      category: "Accesorios", 
      gender: "Hombre", 
      rating: 4.7, 
      reviews: 78,
      stock: 30, 
      images: [
        "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800"
      ],
      colors: [{ name: "Negro/Marrón", hex: "#000000" }],
      sizes: ["90", "95", "100", "105", "110"],
      details: ["Material: 100% Cuero Genuino", "Hebilla: Aleación de zinc plateada", "Ancho: 3.5 cm"]
    }
  ]
}