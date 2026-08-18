"use client"

import React, { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, Building2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const teamMembers = [
  {
    nombre: "Lic. Jose Tambo",
    rol: "Director Ejecutivo",
    area: "Presidente Ejecutivo",
    image: "/images/jose_tambo.jpeg",
    bio: "LIDERAZGO INSTITUCIONAL Y DIRECCIÓN DE PROYECTOS INTEGRALES DE IMPACTO SOCIAL EN BOLIVIA.",
  },
  {
    nombre: "Dra. Marisol Perez",
    rol: "Sub directora",
    area: "Subdirección Ejecutiva",
    image: "/images/WhatsApp Image 2026-07-17 at 11.47.52 AM.jpeg",
    bio: "GESTIÓN INSTITUCIONAL, COORDINACIÓN DE EQUIPOS Y SUPERVISIÓN ESTRATÉGICA DE PROGRAMAS INTEGRALES.",
  },
  {
    nombre: "Ing. Tupac Lima Chuquimia",
    rol: "Coordinador en Desarrollo Productivo",
    area: "Tecnología Productiva",
    image: "/images/tupac_lima.jpeg",
    bio: "INNOVACIÓN Y ARTICULACIÓN DE TECNOLOGÍAS PRODUCTIVAS EN COMUNIDADES URBANAS Y RURALES.",
  },
  {
    nombre: "Dr. Henrry Patty",
    rol: "Coordinador de Salud Preventiva",
    area: "Salud Integral",
    image: "/images/henrry_patty.png",
    bio: "PLANIFICACIÓN Y EJECUCIÓN DE JORNADAS DE ATENCIÓN Y PREVENCIÓN EN SALUD COMUNITARIA.",
  },
  {
    nombre: "Abg. Angel Quispe",
    rol: "Coordinador Jurídico",
    area: "Secretario General",
    image: "/images/angel_quispe.png",
    bio: "ASISTENCIA Y MARCO REGULATORIO NORMATIVO EN PROYECTOS SOCIALES E INSTITUCIONALES.",
  },
  {
    nombre: "Lic. Gabriel Vera",
    rol: "Responsable de la Red de Voluntarios",
    area: "Red de Voluntarios",
    image: "/images/Gabriel_Vera.jpeg",
    bio: "COORDINACIÓN, ARTICULACIÓN Y GESTIÓN ACTIVA DE LA RED DE VOLUNTARIOS EN ACCIONES COMUNITARIAS.",
  },
  {
    nombre: "Lic. Paola Guachalla",
    rol: "Coordinadora de Comunicaciones y Difusión",
    area: "Comunicaciones y Difusión",
    image: "/images/Paola_Guachalla.jpeg",
    bio: "ESTRATEGIAS DE COMUNICACIÓN, DIFUSIÓN INSTITUCIONAL Y COBERTURA DE PROYECTOS TERRITORIALES.",
  },
]

const allies = [
  { nombre: "Aliado Institucional 1", image: "/aliados/aliado-1.jpeg" },
  { nombre: "Aliado Institucional 2", image: "/aliados/aliado-2.jpeg" },
  { nombre: "Aliado Institucional 3", image: "/aliados/aliado-3.jpeg" },
  { nombre: "Aliado Institucional 4", image: "/aliados/aliado-4.jpeg" },
  { nombre: "Aliado Estratégico 5", image: "/aliados/WhatsApp Image 2026-07-16 at 8.39.31 PM.jpeg" },
  { nombre: "Aliado Estratégico 6", image: "/aliados/WhatsApp Image 2026-07-16 at 9.01.03 PM.jpeg" },
  { nombre: "Aliado Estratégico 7", image: "/aliados/WhatsApp Image 2026-08-16 at 9.49.40 PM.jpeg" },
  { nombre: "Aliado Estratégico 8", image: "/aliados/WhatsApp Image 2026-08-16 at 9.49.51 PM.jpeg" },
  { nombre: "Aliado Estratégico 9", image: "/aliados/WhatsApp Image 2026-08-16 at 9.50.00 PM.jpeg" },
  { nombre: "Aliado Estratégico 10", image: "/aliados/WhatsApp Image 2026-08-16 at 9.51.13 PM.jpeg" },
  { nombre: "Aliado Estratégico 11", image: "/aliados/WhatsApp Image 2026-08-16 at 9.51.24 PM.jpeg" },
  { nombre: "Aliado Estratégico 12", image: "/aliados/WhatsApp Image 2026-08-16 at 9.51.42 PM.jpeg" },
  { nombre: "Aliado Estratégico 13", image: "/aliados/WhatsApp Image 2026-08-16 at 9.51.53 PM.jpeg" },
]

const marqueeAllies = [...allies, ...allies]

export default function EquipoAliadosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [api, setApi] = useState<CarouselApi>()
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const handlePrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const handleNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".equipo-left-header", {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".equipo-left-header",
            start: "top 85%",
            once: true,
          },
        })

        gsap.from(".team-card-image-style", {
          y: 50,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".carousel-offset-container",
            start: "top 85%",
            once: true,
          },
        })
      })
    },
    { scope: sectionRef, dependencies: [] }
  )

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="relative w-full py-24 md:py-32 bg-[#1B361F] text-white overflow-hidden"
    >
      {/* Background Landscape with Dark Overlay (Exact reference image style) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/urban-rural-landscape-bolivia-coverage-areas-map.png"
          alt="Paisaje de Bolivia"
          fill
          className="object-cover opacity-25 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122415]/95 via-[#1B361F]/85 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">

        {/* =========================================================
            1. LAYOUT PRINCIPAL: COLUMNA IZQUIERDA (TÍTULO Y BOTONES EN ESQUINA INFERIOR IZQUIERDA) 
               Y COLUMNA DERECHA (CAROUSEL DESPLAZADO A LA DERECHA)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 md:mb-28">

          {/* Columna Izquierda: Encabezado + Botones de Navegación en Esquina Inferior Izquierda */}
          <div className="equipo-left-header lg:col-span-4 flex flex-col justify-between space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#68CE2B] block">
                DIRECTORIO Y EQUIPO TÉCNICO
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-sans font-medium text-white tracking-[-0.03em] leading-[1.05]">
                Profesionales que <br />
                impulsan el cambio.
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-sm leading-relaxed font-normal pt-2">
                Un equipo multidisciplinario en salud, educación, tecnología e investigación comprometido con Bolivia.
              </p>
            </div>

            {/* Botones de Navegación Cuadrados Blancos en la Esquina Inferior Izquierda (Estilo Imagen Referencia) */}
            <div className="flex items-center gap-2 pt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white text-[#1B361F] hover:bg-white/90 shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Anterior miembro del equipo"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-white text-[#1B361F] hover:bg-white/90 shadow-md flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Siguiente miembro del equipo"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Columna Derecha: Carousel Desplazado hacia la Derecha */}
          <div className="carousel-offset-container lg:col-span-8 overflow-visible">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full cursor-grab active:cursor-grabbing"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
            >
              <CarouselContent className="-ml-6 md:-ml-8">
                {teamMembers.map((member, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-6 md:pl-8 basis-[85%] sm:basis-[320px] md:basis-[360px] lg:basis-[380px]"
                  >
                    <div className="team-card-image-style relative group w-full h-[480px] sm:h-[520px] md:h-[560px] overflow-hidden bg-[#162418] shadow-2xl transition-transform duration-500 hover:-translate-y-1">

                      {/* Fotografías Retrato de Fondo a Sangre */}
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.nombre}
                          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#1B361F]">
                          <Briefcase className="w-12 h-12 text-white/30 mb-4" />
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/40">
                            {member.nombre}
                          </span>
                        </div>
                      )}

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* CAJA DE TEXTO SUPERPUESTA EN LA ESQUINA INFERIOR DERECHA (ESTILO EXACTO DE LA IMAGEN) */}
                      <div className="absolute bottom-0 right-0 w-[88%] sm:w-[82%] bg-[#FAF8F5] text-[#1B361F] p-6 sm:p-7 shadow-2xl space-y-3 transition-transform duration-300">
                        <div>
                          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#50AA1E] block mb-1">
                            {member.rol}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-[#1B361F] uppercase leading-tight">
                            {member.nombre}
                          </h3>
                        </div>

                        <p className="text-xs font-mono tracking-wider uppercase text-[#4A634E] leading-relaxed font-normal pt-1 border-t border-[#1B361F]/10">
                          {member.bio}
                        </p>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>

        {/* =========================================================
            2. SECCIÓN DE ALIADOS INSTITUCIONALES
            ========================================================= */}
        <div className="aliados-section pt-16 sm:pt-24 border-t border-white/10">
          <div className="mb-12 max-w-2xl">
            <span className="block text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#68CE2B] mb-3">
              RED DE COLABORACIÓN
            </span>
            <h3 className="text-3xl md:text-4xl font-sans font-medium text-white tracking-[-0.03em] leading-tight">
              Aliados institucionales
            </h3>
            <p className="text-base text-white/80 mt-3 leading-relaxed">
              Trabajamos en alianza estratégica con instituciones públicas, privadas y comunitarias para multiplicar nuestro impacto.
            </p>
          </div>

          {/* Marquee de Aliados */}
          <div className="group/marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="ally-marquee-track flex w-max items-stretch gap-4">
              {marqueeAllies.map((ally, idx) => (
                <div
                  key={idx}
                  className="h-24 w-44 md:w-52 flex-shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 hover:bg-white/20 transition-all duration-300 px-6 group"
                >
                  {ally.image ? (
                    <div className="relative w-full h-14 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={ally.image}
                        alt={ally.nombre}
                        fill
                        className="object-contain filter brightness-110"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5">
                      <Building2 className="w-5 h-5 text-white/60" />
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white/70 text-center">
                        {ally.nombre}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <style jsx>{`
              .ally-marquee-track {
                animation: ally-marquee 40s linear infinite;
              }
              .group\\/marquee:hover .ally-marquee-track {
                animation-play-state: paused;
              }
              @keyframes ally-marquee {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>

          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B] hover:underline"
            >
              <span>Explorar colaboración</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
