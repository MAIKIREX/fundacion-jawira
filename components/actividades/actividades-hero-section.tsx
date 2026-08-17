'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Search, Sparkles, SlidersHorizontal, CalendarDays, ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CategoriaActividad, CATEGORIAS_FILTRO } from './actividades-data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

interface ActividadesHeroSectionProps {
  categoriaActiva: CategoriaActividad
  onSelectCategoria: (cat: CategoriaActividad) => void
  busqueda: string
  onBusquedaChange: (val: string) => void
  totalCount: number
}

export default function ActividadesHeroSection({
  categoriaActiva,
  onSelectCategoria,
  busqueda,
  onBusquedaChange,
  totalCount,
}: ActividadesHeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

        // Animación suave para la imagen de fondo del río
        tl.fromTo(
          '.act-hero-river-bg',
          { scale: 1.06, opacity: 0 },
          { scale: 1, opacity: 0.25, duration: 1.6, ease: 'power2.out' },
          0
        )

        tl.fromTo(
          '.act-hero-reveal',
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            stagger: 0.08,
          },
          0.1
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20 bg-[#0D241C] text-white overflow-hidden border-b border-white/10"
    >
      {/* Atmósfera de Fondo Verde Orgánico con Imagen del Río */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-radial-[circle_at_30%_20%] from-[#2C5233]/70 via-[#1B361F]/90 to-[#0D241C]" />

        <div className="act-hero-river-bg absolute inset-0 w-full h-full mix-blend-overlay opacity-25">
          <Image
            src="/logo/rio_header.png"
            alt="Fondo Río Jawira"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </div>

        {/* Gradiente de atenuación inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D241C] via-transparent to-[#0D241C]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Eyebrow badge */}
        <div className="mb-6 overflow-hidden">
          <div className="act-hero-reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B]">
            <span className="w-2 h-2 rounded-full bg-[#68CE2B] animate-pulse" />
            <span>Fundación JAWIRA • Agenda & Bitácora Ciudadana</span>
          </div>
        </div>

        {/* Large Editorial Headline & Subtitle */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <h1 className="act-hero-reveal text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-sans font-medium leading-[0.98] tracking-[-0.03em] text-white">
              Actividades
            </h1>
            <p className="act-hero-reveal text-xl sm:text-2xl text-[#68CE2B] font-medium tracking-tight mt-3">
              Espacios de encuentro, tecnología y desarrollo comunitario
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="act-hero-reveal text-base sm:text-lg text-white/80 font-normal leading-relaxed">
              Descubre los diálogos ciudadanos, talleres prácticos de innovación y jornadas integrales de salud que impulsamos junto a comunidades en Bolivia.
            </p>
            <div className="act-hero-reveal flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white/60">
              <CalendarDays className="w-4 h-4 text-[#68CE2B]" />
              <span>Eventos presenciales con cupo limitado</span>
            </div>
          </div>
        </div>

        {/* Filter Pills & Live Search Bar (Frosted Glass UI on Green) */}
        <div className="act-hero-reveal flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-white/15">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {CATEGORIAS_FILTRO.map((cat) => {
              const isSelected = categoriaActiva === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategoria(cat.id)}
                  type="button"
                  className={`cursor-pointer whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                    isSelected
                      ? 'bg-[#68CE2B] text-[#0A2850] font-black shadow-lg shadow-[#68CE2B]/30 scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 hover:border-white/30 backdrop-blur-md'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => onBusquedaChange(e.target.value)}
              placeholder="Buscar por tema, expositor o lugar..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl text-xs font-mono tracking-wide bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#68CE2B] focus:border-[#68CE2B] transition-all"
            />
            {busqueda && (
              <button
                onClick={() => onBusquedaChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-white/60 hover:text-white p-1"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Counter and reset indicator */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-white/60">
          <span>
            Mostrando <strong className="text-white font-bold">{totalCount}</strong>{' '}
            {totalCount === 1 ? 'actividad' : 'actividades registradas'}
          </span>
          {categoriaActiva !== 'todos' && (
            <button
              onClick={() => onSelectCategoria('todos')}
              className="text-[#68CE2B] hover:underline font-bold transition-all"
            >
              Ver todas las categorías
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
