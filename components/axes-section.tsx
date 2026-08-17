"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { JawiraButton } from "@/components/ui/jawira-button"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// 116 fotogramas de alta densidad (paso de 2: scene00001.jpg a scene00231.jpg)
const TOTAL_FRAMES = 116
const FRAME_STEP = 2

// Genera la lista de rutas de los 116 fotogramas en /public/contenido/frames1/
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNumber = 1 + i * FRAME_STEP
  const padded = String(frameNumber).padStart(5, "0")
  return `/contenido/frames1/scene${padded}.jpg`
})

// Icono geométrico de 4 pétalos/rombos con animación en hover
function AxisGlyph({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className} 
      aria-hidden="true"
    >
      <path d="M12 2.5L14.5 8.5L12 10.5L9.8 8.5L12 2.5Z" />
      <path d="M12 21.5L9.8 15.5L12 13.5L14.2 15.5L12 21.5Z" />
      <path d="M2.5 12L8.5 9.8L10.5 12L8.5 14.2L2.5 12Z" />
      <path d="M21.5 12L15.5 14.2L13.5 12L15.5 9.8L21.5 12Z" />
    </svg>
  )
}

const AXES_DATA = [
  {
    step: "01",
    tagline: "EJE 01 · TECNOLOGÍA",
    title: "Tecnología Productiva",
    description:
      "IMPULSAMOS LA INNOVACIÓN TECNOLÓGICA Y DIGITAL PARA FORTALECER CAPACIDADES PRODUCTIVAS EN COMUNIDADES VULNERABLES, CERRANDO LA BRECHA DIGITAL.",
    href: "/areas-de-trabajo#tecnologia",
  },
  {
    step: "02",
    tagline: "EJE 02 · EDUCACIÓN",
    title: "Educación Integral",
    description:
      "PROMOVEMOS EL ACCESO EQUITATIVO A EDUCACIÓN DE CALIDAD MEDIANTE PROGRAMAS DE ALFABETIZACIÓN DIGITAL, FORMACIÓN TÉCNICA Y CAPACITACIÓN CONTINUA.",
    href: "/areas-de-trabajo#educacion",
  },
  {
    step: "03",
    tagline: "EJE 03 · SALUD",
    title: "Prevención de la Salud",
    description:
      "FACILITAMOS ACCESO A SERVICIOS DE SALUD PREVENTIVA, TELEMEDICINA COMUNITARIA Y PROGRAMAS DE BIENESTAR PARA POBLACIONES DESATENDIDAS.",
    href: "/areas-de-trabajo#salud",
  },
]

export default function AxesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const introTitleRef = useRef<HTMLDivElement>(null)
  const introDescRef = useRef<HTMLDivElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const lastDrawnFrameRef = useRef<number>(-1)

  // 1. Precarga en memoria de los 116 fotogramas
  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = []

    FRAME_PATHS.forEach((src, idx) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === 1 && canvasRef.current) {
          drawFrame(0)
        }
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true)
        }
      }
      loadedImages[idx] = img
    })

    imagesRef.current = loadedImages

    const handleResize = () => {
      lastDrawnFrameRef.current = -1
      drawFrame(Math.max(0, lastDrawnFrameRef.current))
    }

    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 2. Función de dibujo en Canvas de alto rendimiento a 60 FPS
  const drawFrame = (frameIndex: number) => {
    if (frameIndex === lastDrawnFrameRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const img = imagesRef.current[frameIndex]
    if (!img || !img.complete) return

    lastDrawnFrameRef.current = frameIndex

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1
    const displayWidth = canvas.clientWidth
    const displayHeight = canvas.clientHeight

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr
    }

    ctx.save()
    ctx.scale(dpr, dpr)

    const w = displayWidth
    const h = displayHeight
    const iw = img.naturalWidth || img.width
    const ih = img.naturalHeight || img.height

    const r = Math.max(w / iw, h / ih)
    const nw = iw * r
    const nh = ih * r
    const cx = (w - nw) * 0.5
    const cy = (h - nh) * 0.5

    ctx.drawImage(img, cx, cy, nw, nh)
    ctx.restore()
  }

  // 3. Animaciones GSAP optimizadas
  useGSAP(() => {
    if (!containerRef.current || !canvasRef.current) return

    const playhead = { frame: 0 }

    // ScrollTrigger para el video por fotogramas
    gsap.to(playhead, {
      frame: TOTAL_FRAMES - 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate: () => {
          const targetIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.round(playhead.frame))
          )
          drawFrame(targetIndex)
        },
      },
    })

    // Retención y desvanecimiento suave de la Introducción Diagonal
    if (introTitleRef.current && introDescRef.current) {
      gsap.fromTo(
        [introTitleRef.current, introDescRef.current],
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -60,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".axis-intro-stage",
            start: "top top",
            end: "bottom 35%",
            scrub: 0.8,
          },
        }
      )
    }

    // Animación fluida de subida de las tarjetas
    const stages = containerRef.current.querySelectorAll(".axis-stage-item")
    stages.forEach((stage) => {
      const cardInner = stage.querySelector(".axis-card-inner")
      if (cardInner) {
        gsap.fromTo(
          cardInner,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stage,
              start: "top 80%",
              end: "center 50%",
              scrub: 1,
            },
          }
        )
      }
    })
  }, { scope: containerRef, dependencies: [imagesLoaded] })

  return (
    <section
      ref={containerRef}
      data-header-theme="dark"
      className="relative w-full text-white min-h-[500vh]"
    >
      {/* =========================================================
          CANVAS FIJO DE FONDO: 116 FOTOGRAMAS NÍTIDOS AL SCROLL
          ========================================================= */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden z-0 pointer-events-none">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
        />
      </div>

      {/* =========================================================
          CONTENIDO NARRATIVO VERTICAL (PADDING ANCHO DE BORDE A BORDE)
          ========================================================= */}
      <div className="relative z-10 -mt-[100dvh] pointer-events-auto">
        
        {/* -------------------------------------------------------------
            PASO 1: INTRODUCCIÓN DIAGONAL CON MARGEN CERCANO A LAS ESQUINAS
            ------------------------------------------------------------- */}
        <div className="axis-intro-stage min-h-[160vh] relative">
          <div className="sticky top-0 h-[100dvh] flex flex-col justify-between px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 w-full pointer-events-none">
            
            {/* Parte Superior Izquierda: Título Principal muy cerca de la esquina */}
            <div 
              ref={introTitleRef} 
              className="max-w-2xl space-y-3 pointer-events-auto will-change-transform pt-4 sm:pt-8"
            >
              <span className="inline-block text-xs font-mono font-bold tracking-[0.25em] uppercase text-white/90 drop-shadow-sm">
                Nuestros Ejes de Trabajo
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-sans font-medium text-white tracking-[-0.03em] leading-[1.03] drop-shadow-md">
                Tres áreas
                <br />
                clave para el
                <br />
                desarrollo.
              </h2>
            </div>

            {/* Parte Inferior Derecha: Descripción muy cerca de la esquina inferior derecha */}
            <div 
              ref={introDescRef} 
              className="max-w-lg self-end space-y-4 pointer-events-auto will-change-transform pb-4 sm:pb-8 text-left"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal drop-shadow-sm">
                Articulamos tecnología productiva, educación integral y salud preventiva para generar impacto sostenible en las comunidades de La Paz.
              </p>

              <div className="pt-1 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/70">
                <span className="w-2 h-2 rounded-full bg-[#68CE2B] animate-ping" />
                <span>Desplaza para explorar cada eje</span>
              </div>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------------------
            PASOS 2, 3 Y 4: LAS 3 TARJETAS ALINEADAS CON PADDING ANCHO
            ------------------------------------------------------------- */}
        {AXES_DATA.map((axis, index) => {
          const isEven = index % 2 === 1

          return (
            <div
              key={axis.step}
              className={`axis-stage-item min-h-[120vh] flex items-center ${
                isEven ? "justify-end" : "justify-start"
              } px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 w-full py-16`}
            >
              {/* Tarjeta con efecto hover dinámico, glifo animado y entrada fluida */}
              <div className="axis-card-inner group max-w-xl w-full bg-[#F5F2EB] text-[#1B361F] rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl space-y-6 will-change-transform border border-white/60 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:border-white">
                
                {/* Glifo superior izquierdo ❖ con rotación y resplandor al hacer hover */}
                <div className="text-[#55733A] inline-block transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:scale-110">
                  <AxisGlyph className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                {/* Título de la tarjeta */}
                <h3 className="text-3xl sm:text-4xl md:text-[2.6rem] font-sans font-medium text-[#1B361F] tracking-[-0.03em] leading-tight">
                  {axis.title}
                </h3>

                {/* Descripción estructurada en mayúsculas */}
                <p className="text-xs sm:text-[13px] md:text-sm font-mono tracking-wider uppercase text-[#2D4A32] leading-relaxed font-normal">
                  {axis.description}
                </p>

                {/* Enlace de acción con JawiraButton */}
                <div className="pt-3 border-t border-[#1B361F]/10">
                  <JawiraButton
                    href={axis.href}
                    variant="outline-dark"
                    size="sm"
                    bullets
                    className="w-full sm:w-auto"
                  >
                    CONOCER MÁS
                  </JawiraButton>
                </div>

              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}
