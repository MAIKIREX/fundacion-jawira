"use client"

import Image from "next/image"
import { useRef } from "react"
import { JawiraButton } from "@/components/ui/jawira-button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP)
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Coreografía cinematográfica de entrada
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

      // Animación sutil de entrada para la imagen de fondo del río
      tl.fromTo(".hero-river-bg",
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
        0
      )

      // 1. Revelación del título superior izquierdo
      tl.fromTo(".reveal-title", 
        { yPercent: 100, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1.3,
          stagger: 0.08,
        }, 0.1)

      // 2. Revelación de la descripción y botones inferiores derechos
      tl.fromTo(".reveal-desc", 
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.12,
        }, 0.3)
    })
  }, { scope: containerRef, dependencies: [] })

  return (
    <section
      ref={containerRef}
      data-header-theme="dark"
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#1B361F]"
    >
      {/* Atmósfera de Fondo con Verde Orgánico e Imagen del Río */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-radial-[circle_at_20%_20%] from-[#2C5233] via-[#1B361F] to-[#122415]" />
        
        {/* Imagen del río colocada delante del color verde */}
        <div className="hero-river-bg absolute inset-0 w-full h-full">
          <Image
            src="/logo/rio_header.png"
            alt="Río Jawira de fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#122415]/70 via-transparent to-[#1B361F]/30" />
      </div>

      {/* Contenedor Principal con Distribución Diagonal (Título Arriba Izquierda / Descripción Abajo Derecha) */}
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 relative z-10 min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14">
        
        {/* =========================================================
            1. BLOQUE SUPERIOR IZQUIERDO: TÍTULO PRINCIPAL & EYEBROW
            ========================================================= */}
        <div className="max-w-3xl space-y-4">
          {/* Eyebrow badge */}
          <div className="overflow-hidden">
            <span className="reveal-title inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B]">
              <span className="w-2 h-2 rounded-full bg-[#50AA1E] animate-pulse" />
              <span>Fundación sin fines de lucro — La Paz, Bolivia</span>
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium leading-[1.06] tracking-[-0.03em] text-white">
            <div className="overflow-hidden">
              <span className="reveal-title block">Tecnología, educación</span>
            </div>
            <div className="overflow-hidden pb-1">
              <span className="reveal-title block">y salud que fluyen</span>
            </div>
            <div className="overflow-hidden">
              <span className="reveal-title block text-[#68CE2B]">hacia el desarrollo</span>
            </div>
          </h1>
        </div>

        {/* =========================================================
            2. ESPACIO CENTRAL
            ========================================================= */}
        <div className="flex-1 my-4 pointer-events-none" />

        {/* =========================================================
            3. BLOQUE INFERIOR DERECHO: DESCRIPCIÓN & BOTONES JAWIRABUTTON
            ========================================================= */}
        <div className="self-end max-w-xl w-full space-y-6 pt-4">
          <div className="overflow-hidden">
            <p className="reveal-desc text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-normal">
              Articulamos tecnología productiva, educación integral y prevención de la salud para comunidades vulnerables, promoviendo desarrollo sostenible en zonas urbanas, periurbanas y rurales.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="reveal-desc flex flex-wrap items-center gap-4">
              <JawiraButton
                href="/fundacion"
                variant="white"
                size="lg"
                bullets
                className="shadow-xl"
              >
                CONOCE LA FUNDACIÓN
              </JawiraButton>

              <JawiraButton
                href="/quiero-apoyar"
                variant="outline-white"
                size="lg"
                bullets
              >
                QUIERO APOYAR
              </JawiraButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
