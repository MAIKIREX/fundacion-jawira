"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { JawiraButton } from "@/components/ui/jawira-button"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface SupportCardItem {
  id: string | number
  title: string
  tagline: string
  description: string
  image: string
  cardBg?: string
  linkText: string
  href: string
}

export interface SupportSectionProps {
  tagline?: string
  title?: React.ReactNode
  cards?: SupportCardItem[]
  className?: string
}

const DEFAULT_CARDS: SupportCardItem[] = [
  {
    id: 1,
    title: "Donar",
    tagline: "Aporte Directo a Proyectos",
    description: "FINANCIA DIRECTAMENTE TECNOLOGÍA PRODUCTIVA, AULAS TIC Y ATENCIÓN EN SALUD PREVENTIVA PARA COMUNIDADES EN LA PAZ.",
    image: "/people-donating-helping-charity-hands.png",
    cardBg: "bg-[#5D7C3F] dark:bg-[#1E3822]",
    linkText: "Quiero donar",
    href: "/quiero-apoyar",
  },
  {
    id: 2,
    title: "Voluntariado",
    tagline: "Comparte tu Conocimiento",
    description: "SUMA TUS HABILIDADES Y TIEMPO EN TERRENO APOYANDO TALLERES EDUCATIVOS, JORNADAS MÉDICAS Y CAPACITACIÓN DIGITAL.",
    image: "/volunteers-working-together-community-teamwork.png",
    cardBg: "bg-[#55733A] dark:bg-[#18301B]",
    linkText: "Ser voluntario",
    href: "/contacto",
  },
  {
    id: 3,
    title: "Alianzas",
    tagline: "Co-creación Institucional",
    description: "ESTABLECE ALIANZAS ESTRATÉGICAS CON TU EMPRESA U ORGANIZACIÓN PARA MULTIPLICAR EL DESARROLLO SOSTENIBLE.",
    image: "/business-partnership-handshake-collaboration-profe.png",
    cardBg: "bg-[#4D6934] dark:bg-[#132715]",
    linkText: "Crear alianza",
    href: "/contacto",
  },
]

export default function SupportSection({
  tagline = "Súmate a nuestra misión",
  title = (
    <>
      Por más oportunidades.
      <br />
      Por un futuro más justo.
    </>
  ),
  cards = DEFAULT_CARDS,
  className = "",
}: SupportSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const card2 = cardRefs.current[1]
      const card3 = cardRefs.current[2]

      if (card2) {
        gsap.fromTo(
          card2,
          { y: 150 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 15%",
              end: "bottom 80%",
              scrub: 1.2,
            },
          }
        )
      }

      if (card3) {
        gsap.fromTo(
          card3,
          { y: 300 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 15%",
              end: "bottom 80%",
              scrub: 1.2,
            },
          }
        )
      }
    })
  }, { scope: sectionRef, dependencies: [cards] })

  return (
    <section
      ref={sectionRef}
      data-header-theme="light"
      className={`relative pt-28 pb-40 md:pt-36 md:pb-52 bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] overflow-hidden ${className}`}
    >
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        
        {/* =========================================================
            1. ENCABEZADO EDITORIAL MASIVO
            ========================================================= */}
        <div className="max-w-3xl space-y-4 mb-20 md:mb-28">
          {tagline && (
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
              {tagline}
            </span>
          )}
          {title && (
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-sans font-medium text-[#1B361F] dark:text-white tracking-[-0.03em] leading-[1.05]">
              {title}
            </h2>
          )}
        </div>

        {/* =========================================================
            2. TARJETAS CON ESCALONAMIENTO NOTORIO Y ALINEACIÓN EN SALIDA
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-end pt-12 pb-16">
          {cards.map((card, index) => {
            const cardBgColor = card.cardBg || "bg-[#55733A] dark:bg-[#18301B]"

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className="w-full flex flex-col will-change-transform"
              >
                {/* Contenedor Verde de la Tarjeta */}
                <div
                  className={`${cardBgColor} rounded-3xl p-6 sm:p-8 text-white relative shadow-xl overflow-visible flex flex-col justify-between min-h-[380px] lg:min-h-[440px] group transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Imagen 3D flotante que sobresale del borde superior */}
                  <div className="relative -mt-20 sm:-mt-24 md:-mt-28 w-full h-[220px] sm:h-[250px] lg:h-[270px] rounded-2xl overflow-hidden shadow-2xl mb-6 bg-black/20 ring-1 ring-white/20 flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Botón flotante de acción con flecha ↗ en la esquina superior de la tarjeta */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/70">
                      {card.tagline}
                    </span>

                    <Link
                      href={card.href}
                      aria-label={`Acceder a ${card.title}`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 active:scale-95 flex-shrink-0"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Título & Párrafo Estructurado en Mayúsculas */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-sans font-medium tracking-tight text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono tracking-wider uppercase text-white/80 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Enlace inferior de acción */}
                  <div className="pt-4 border-t border-white/15 mt-4">
                    <JawiraButton
                      href={card.href}
                      variant="outline-white"
                      size="sm"
                      bullets
                      className="w-full"
                    >
                      {card.linkText}
                    </JawiraButton>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

