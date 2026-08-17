'use client'

import React, { useState, useRef, useMemo } from 'react'
import Image from 'next/image'
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  ExternalLink,
  PlusCircle,
  HelpCircle,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Actividad, CategoriaActividad } from './actividades-data'
import ActividadModal from './actividades-modal'
import { JawiraButton } from '@/components/ui/jawira-button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface ActividadesListSectionProps {
  actividades: Actividad[]
  categoriaActiva: CategoriaActividad
  busqueda: string
}

export default function ActividadesListSection({
  actividades,
  categoriaActiva,
  busqueda,
}: ActividadesListSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedActividad, setSelectedActividad] = useState<Actividad | null>(null)

  // Filter activities based on active category and search query
  const filteredActividades = useMemo(() => {
    return actividades.filter((act) => {
      const matchCategoria =
        categoriaActiva === 'todos' || act.categoria === categoriaActiva
      const matchBusqueda =
        !busqueda ||
        act.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.subtitulo?.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.lugar.toLowerCase().includes(busqueda.toLowerCase()) ||
        act.temas.some((t) => t.toLowerCase().includes(busqueda.toLowerCase()))
      return matchCategoria && matchBusqueda
    })
  }, [actividades, categoriaActiva, busqueda])

  // Featured trio logic: top hero (1), top right (2), bottom right (3)
  const isDefaultView = categoriaActiva === 'todos' && !busqueda
  const heroPrincipal = isDefaultView
    ? filteredActividades.find((a) => a.ordenDestacado === 1) || filteredActividades[0]
    : null
  const heroSide1 = isDefaultView
    ? filteredActividades.find((a) => a.ordenDestacado === 2) || filteredActividades[1]
    : null
  const heroSide2 = isDefaultView
    ? filteredActividades.find((a) => a.ordenDestacado === 3) || filteredActividades[2]
    : null

  // Remaining activities for bottom grid
  const remainingActividades = useMemo(() => {
    if (isDefaultView && heroPrincipal && heroSide1 && heroSide2) {
      const heroIds = [heroPrincipal.id, heroSide1.id, heroSide2.id]
      return filteredActividades.filter((a) => !heroIds.includes(a.id))
    }
    return filteredActividades
  }, [filteredActividades, isDefaultView, heroPrincipal, heroSide1, heroSide2])

  // GSAP Entrance animation
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.act-editorial-card', {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })
      })
    },
    { scope: sectionRef, dependencies: [filteredActividades] }
  )

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="py-14 sm:py-20 lg:py-24 bg-[#0D241C] text-white relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-[#50AA1E]/10 blur-[130px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* =========================================================================
            1. TRÍO EDITORIAL DESTACADO (Estructura de la imagen de referencia en fondo verde)
           ========================================================================= */}
        {isDefaultView && heroPrincipal && heroSide1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* --- Columna Izquierda: Tarjeta Principal Hero (lg:col-span-7) --- */}
            <article
              onClick={() => setSelectedActividad(heroPrincipal)}
              className="act-editorial-card lg:col-span-7 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#68CE2B]/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-500 shadow-2xl group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Gran contenedor de foto panorámica */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg">
                  <Image
                    src={heroPrincipal.imagen}
                    alt={`Fotografía de ${heroPrincipal.titulo}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Píldora de Categoría (Estilo salvia/lima brillante sobre verde oscuro) */}
                <div className="mt-6 mb-3">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#68CE2B]/20 text-[#68CE2B] border border-[#68CE2B]/40 shadow-sm">
                    {heroPrincipal.categoriaTag}
                  </span>
                </div>

                {/* Titular Grande y Contundente */}
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white tracking-tight leading-[1.15] group-hover:text-[#68CE2B] transition-colors">
                  {heroPrincipal.titulo}{' '}
                  {heroPrincipal.subtitulo && (
                    <span className="block font-medium text-white/80 mt-1 text-xl sm:text-2xl lg:text-3xl">
                      {heroPrincipal.subtitulo}
                    </span>
                  )}
                </h2>

                {/* Extracto Descriptivo */}
                <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                  {heroPrincipal.descripcion}
                </p>
              </div>

              {/* Pie de Tarjeta: Fecha, Hora y Botón de Acción */}
              <div className="mt-8 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-white/70">
                  <span className="flex items-center gap-2 font-bold text-white">
                    <Calendar className="w-4 h-4 text-[#68CE2B]" />
                    {heroPrincipal.fecha}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#68CE2B]" />
                    {heroPrincipal.hora}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#68CE2B] group-hover:translate-x-1 transition-transform">
                  Ver Detalles & Registro
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>

            {/* --- Columna Derecha: Tarjetas Horizontales Apiladas (lg:col-span-5) --- */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-7">
              {/* Tarjeta Apilada 1 (Superior) */}
              {heroSide1 && (
                <article
                  onClick={() => setSelectedActividad(heroSide1)}
                  className="act-editorial-card bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#68CE2B]/60 rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-500 group cursor-pointer flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col-reverse sm:flex-row gap-5 items-start sm:items-center justify-between">
                    {/* Contenido Izquierdo */}
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase bg-[#68CE2B]/20 text-[#68CE2B] border border-[#68CE2B]/40 mb-3">
                        {heroSide1.categoriaTag}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#68CE2B] transition-colors leading-snug mb-2">
                        {heroSide1.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-3 mb-3">
                        {heroSide1.descripcion}
                      </p>
                    </div>

                    {/* Foto Miniatura Derecha */}
                    <div className="relative w-full sm:w-36 lg:w-40 aspect-[16/10] sm:aspect-square rounded-2xl overflow-hidden shrink-0 bg-black/40 border border-white/15 shadow-md">
                      <Image
                        src={heroSide1.imagenThumb || heroSide1.imagen}
                        alt={`Miniatura de ${heroSide1.titulo}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <Calendar className="w-3.5 h-3.5 text-[#68CE2B]" />
                      {heroSide1.fechaCorta}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#68CE2B] font-bold group-hover:translate-x-1 transition-transform">
                      Detalles <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              )}

              {/* Tarjeta Apilada 2 (Inferior) */}
              {heroSide2 && (
                <article
                  onClick={() => setSelectedActividad(heroSide2)}
                  className="act-editorial-card bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#68CE2B]/60 rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-500 group cursor-pointer flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col-reverse sm:flex-row gap-5 items-start sm:items-center justify-between">
                    {/* Contenido Izquierdo */}
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase bg-[#68CE2B]/20 text-[#68CE2B] border border-[#68CE2B]/40 mb-3">
                        {heroSide2.categoriaTag}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#68CE2B] transition-colors leading-snug mb-2">
                        {heroSide2.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-3 mb-3">
                        {heroSide2.descripcion}
                      </p>
                    </div>

                    {/* Foto Miniatura Derecha */}
                    <div className="relative w-full sm:w-36 lg:w-40 aspect-[16/10] sm:aspect-square rounded-2xl overflow-hidden shrink-0 bg-black/40 border border-white/15 shadow-md">
                      <Image
                        src={heroSide2.imagenThumb || heroSide2.imagen}
                        alt={`Miniatura de ${heroSide2.titulo}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <Calendar className="w-3.5 h-3.5 text-[#68CE2B]" />
                      {heroSide2.fechaCorta}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#68CE2B] font-bold group-hover:translate-x-1 transition-transform">
                      Detalles <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            2. REJILLA DE ACTIVIDADES COMPLEMENTARIAS
           ========================================================================= */}
        {remainingActividades.length > 0 && (
          <div className="space-y-8 pt-4">
            {isDefaultView && (
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B] block">
                    Formación, Salud y Comunidad
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                    Otras Actividades en Agenda
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/60">
                  {remainingActividades.length} actividades disponibles
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {remainingActividades.map((act) => (
                <article
                  key={act.id}
                  onClick={() => setSelectedActividad(act)}
                  className="act-editorial-card bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#68CE2B]/60 rounded-3xl overflow-hidden p-6 backdrop-blur-md transition-all duration-500 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Foto de Cabecera */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-5">
                      <Image
                        src={act.imagen}
                        alt={`Fotografía de ${act.titulo}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0D241C]/80 backdrop-blur-md text-[#68CE2B] border border-[#68CE2B]/30 shadow-xs">
                          {act.categoriaTag}
                        </span>
                      </div>
                    </div>

                    {/* Texto Informativo */}
                    <div className="space-y-2.5">
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#68CE2B] transition-colors leading-tight">
                        {act.titulo}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-3">
                        {act.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Pie de Tarjeta */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                    <span className="flex items-center gap-1.5 font-bold text-white">
                      <Calendar className="w-3.5 h-3.5 text-[#68CE2B]" />
                      {act.fechaCorta}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#68CE2B] font-bold group-hover:translate-x-1 transition-transform">
                      Ver más <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Estado Vacío de Búsqueda */}
        {filteredActividades.length === 0 && (
          <div className="text-center py-16 px-6 rounded-3xl bg-white/[0.03] border border-dashed border-white/20 max-w-xl mx-auto">
            <HelpCircle className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              No se encontraron actividades
            </h3>
            <p className="text-sm text-white/70 mb-6">
              No hay actividades que coincidan con los criterios de búsqueda o categoría seleccionada.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-[#68CE2B] text-[#0A2850] text-xs font-mono font-black uppercase tracking-wider hover:bg-[#58b824] transition-all"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

        {/* =========================================================================
            3. BLOQUE DE CO-ORGANIZACIÓN CIUDADANA (Fondo con Gradiente Institucional)
           ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1B361F] via-[#244229] to-[#0A2850] p-8 sm:p-10 lg:p-12 border border-white/20 text-white shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#68CE2B] text-xs font-mono font-bold tracking-widest uppercase border border-white/20">
                <PlusCircle className="w-4 h-4" />
                Iniciativas Comunitarias
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                ¿Deseas co-organizar un taller o encuentro en tu comunidad?
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl font-normal leading-relaxed">
                Articulamos con juntas vecinales, unidades educativas y organizaciones ciudadanas para llevar talleres de robótica, salud preventiva, liderazgo y agroecología a comunidades de Bolivia.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <JawiraButton
                href="/contacto"
                variant="green"
                size="lg"
                className="w-full justify-center"
              >
                Proponer Actividad
              </JawiraButton>
              <JawiraButton
                href="/fundacion"
                variant="outline-white"
                size="lg"
                className="w-full justify-center"
              >
                Conocer la Fundación
              </JawiraButton>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Interactivo de Detalle */}
      <ActividadModal
        actividad={selectedActividad}
        onClose={() => setSelectedActividad(null)}
      />
    </section>
  )
}
