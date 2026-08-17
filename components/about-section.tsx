"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// Ilustración de arte lineal botánico/agrícola de fondo
function BotanicalContourArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M250 50 C240 120, 210 180, 200 240 C190 300, 200 360, 205 420 C210 480, 220 540, 230 600"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M250 50 C260 120, 290 180, 300 240 C310 300, 300 360, 295 420 C290 480, 280 540, 270 600"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M235 100 C245 95, 255 95, 265 100 M230 140 C245 135, 255 135, 270 140 M225 180 C245 175, 255 175, 275 180 M220 220 C245 215, 255 215, 280 220 M220 260 C245 255, 255 255, 280 260 M225 300 C245 295, 255 295, 275 300 M230 340 C245 335, 255 335, 270 340 M235 380 C245 375, 255 375, 265 380"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M200 320 C140 330, 80 390, 40 460 C20 495, 10 540, 5 600"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M210 350 C160 380, 110 440, 80 510 C65 545, 55 580, 50 600"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M300 320 C360 330, 420 390, 460 460 C480 495, 490 540, 495 600"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M290 350 C340 380, 390 440, 420 510 C435 545, 445 580, 450 600"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M230 200 C180 180, 130 160, 90 140 C60 125, 40 115, 20 110"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M270 200 C320 180, 370 160, 410 140 C440 125, 460 115, 480 110"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Parallax sutil de la imagen a la izquierda al hacer scroll
      gsap.to(imageRef.current, {
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      })

      // Revelación elegante del texto editorial
      gsap.from(".statement-text", {
        y: 60,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
      })

      // Revelación de la tarjeta flotante de video y fuente
      gsap.from(".statement-footer", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className="relative w-full min-h-[100dvh] bg-[#F5F2EB] dark:bg-[#0D1524] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[100dvh]">
        
        {/* =========================================================
            COLUMNA IZQUIERDA: IMAGEN ORIGINAL A SANGRE COMPLETA (0 PADDING)
            ========================================================= */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full min-h-[400px] lg:min-h-[100dvh] overflow-hidden">
          <div ref={imageRef} className="absolute inset-0 w-full h-full will-change-transform">
            <Image
              src="/contenido/andean-harvest-macro.jpg"
              alt="Cosecha y producción agrícola comunitaria en Bolivia"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* =========================================================
            COLUMNA DERECHA: TEXTO EDITORIAL DIRECTO & TARJETA FLOTANTE DE VIDEO
            ========================================================= */}
        <div 
          ref={textRef}
          className="relative flex flex-col justify-center p-8 sm:p-14 md:p-20 lg:p-20 xl:p-24 bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] overflow-hidden"
        >
          {/* Arte lineal botánico de fondo (marca de agua en esquina inferior derecha) */}
          <BotanicalContourArt className="absolute -bottom-8 -right-8 w-64 sm:w-80 md:w-96 lg:w-[28rem] pointer-events-none text-[#2C4C24]/15 dark:text-white/5 transition-transform duration-700" />

          <div className="relative z-10 max-w-2xl space-y-8">
            {/* Declaración editorial concisa y de alto impacto */}
            <h2 className="statement-text text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-sans font-medium leading-[1.08] tracking-[-0.03em] text-[#1B361F] dark:text-white">
              Hasta un 70% del potencial comunitario se transforma cuando la tecnología, la educación y la salud fluyen juntas.
            </h2>

            {/* Footer con Tarjeta Flotante de Video Interactivo */}
            <div className="statement-footer space-y-6 pt-2">
              
              {/* Tarjeta Flotante de Video acorde al estilo de la página */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center gap-4 p-3 pr-6 rounded-2xl bg-[#EBE6DB] dark:bg-[#142033] border border-[#1B361F]/15 dark:border-white/15 shadow-md hover:shadow-xl hover:border-[#50AA1E] transition-all duration-300 cursor-pointer active:scale-[0.98]"
              >
                {/* Botón Play Circular con Pulso */}
                <div className="w-12 h-12 rounded-xl bg-[#50AA1E] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#50AA1E] dark:text-[#68CE2B]">
                    Video Documental
                  </span>
                  <span className="text-sm font-sans font-medium text-[#1B361F] dark:text-white group-hover:text-[#50AA1E] transition-colors">
                    Ver video de impacto en comunidad ↗
                  </span>
                </div>
              </div>

              {/* Fuente / Cita de rigor */}
              <p className="text-xs sm:text-sm font-mono text-[#586F5C] dark:text-slate-400 tracking-wide block">
                Fuente: Fundación JAWIRA · Diagnóstico de Impacto Territorial, 2026
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================
          MODAL CINEMATOGRÁFICO DE VIDEO EN PANTALLA COMPLETA
          ========================================================= */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar Modal */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              aria-label="Cerrar video"
            >
              <X className="w-5 h-5" />
            </button>

            <iframe
              src="https://www.youtube-nocookie.com/embed/CGktogkJwvQ?autoplay=1&rel=0&modestbranding=1"
              title="Video Documental Fundación Jawira"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  )
}
