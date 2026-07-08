import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomeVitrina() {
  return (
    <div className="bg-slate-900 text-white flex flex-col">
      
      {/* 1. HERO PRINCIPAL - Impacto inicial */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo con efecto Parallax */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')] 
          bg-cover bg-center bg-fixed opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Elegancia sin <br className="hidden md:block"/> Compromisos
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-light tracking-wide">
            Redefiniendo el estilo corporativo y urbano para la nueva generación de profesionales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/productos?genero=mujer">
              <Button className="bg-white text-slate-900 hover:bg-slate-200 h-12 px-8 text-sm uppercase tracking-widest font-semibold rounded-none w-full sm:w-auto transition-transform hover:scale-105">
                Colección Mujer
              </Button>
            </Link>
            <Link href="/productos?genero=hombre">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 h-12 px-8 text-sm uppercase tracking-widest font-semibold rounded-none w-full sm:w-auto transition-transform hover:scale-105 bg-transparent">
                Colección Hombre
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN RELOJES */}
      <section className="relative h-[70vh] flex items-center justify-start overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080')] 
          bg-cover bg-center bg-fixed opacity-70"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        
        <div className="container relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="max-w-xl">
            <span className="text-slate-300 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Alta Relojería</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">El Valor de tu Tiempo</h2>
            <p className="text-slate-200 mb-8 font-light text-lg">
              Cronógrafos y piezas minimalistas diseñadas para quienes dictan su propio ritmo. Precisión en cada segundo.
            </p>
            <Link href="/productos?categoria=relojes">
              <span className="group inline-flex items-center text-white uppercase tracking-widest text-sm font-semibold hover:text-slate-300 transition-colors cursor-pointer border-b border-white pb-1">
                Explorar Relojes
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN PERFUMES (Alineado a la derecha para romper la monotonía) */}
      <section className="relative h-[70vh] flex items-center justify-end overflow-hidden text-right">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000')] 
          bg-cover bg-center bg-fixed opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900/80 to-transparent" />
        
        <div className="container relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto flex justify-end">
          <div className="max-w-xl">
            <span className="text-slate-300 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Fragancias Exclusivas</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tu Firma Personal</h2>
            <p className="text-slate-200 mb-8 font-light text-lg">
              Esencias cautivadoras que dejan una impresión duradera. Encuentra el aroma que defina tu presencia.
            </p>
            <Link href="/productos?categoria=perfumes">
              <span className="group inline-flex items-center text-white uppercase tracking-widest text-sm font-semibold hover:text-slate-300 transition-colors cursor-pointer border-b border-white pb-1">
                <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-2 transition-transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Descubrir Esencias
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN ROPA (Grid de dos columnas para hombre/mujer) */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
        {/* Mujer */}
        <div className="relative flex items-center justify-center overflow-hidden group">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920')] 
            bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-500" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Moda Femenina</h3>
            <Link href="/productos?categoria=ropa&genero=mujer">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 uppercase tracking-widest rounded-none">
                Ver Femenino
              </Button>
            </Link>
          </div>
        </div>

        {/* Hombre */}
        <div className="relative flex items-center justify-center overflow-hidden group">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1920')] 
            bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-500" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Moda Masculina</h3>
            <Link href="/productos?categoria=ropa&genero=hombre">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 uppercase tracking-widest rounded-none">
                Ver Masculino
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}