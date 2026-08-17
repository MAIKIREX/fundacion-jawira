"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { JawiraButton } from "@/components/ui/jawira-button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export interface IntegralCenterSectionProps {
  id?: string
  imagePosition?: "left" | "right"
  tagline?: string
  title?: string
  description1?: string
  description2?: string
  badges?: string[]
  buttonText?: string
  buttonHref?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export default function IntegralCenterSection({
  id,
  imagePosition = "right",
  tagline = "Proyecto Piloto · La Paz",
  title = "Centro Integral JAWIRA — Innovación y Bienestar Sin Barreras",
  description1 = "UN PROYECTO PILOTO EN LA PAZ QUE INTEGRA SERVICIOS DE TECNOLOGÍA PRODUCTIVA, EDUCACIÓN DE CALIDAD Y ATENCIÓN INTEGRAL EN SALUD PREVENTIVA.",
  description2 = "EQUIPADO CON LABORATORIOS DE INNOVACIÓN, AULAS TIC Y TELEMEDICINA COMUNITARIA PARA NIÑAS, NIÑOS, JÓVENES Y FAMILIAS EN SITUACIÓN VULNERABLE.",
  badges,
  buttonText = "CONOCE EL CENTRO",
  buttonHref = "/centro-integral",
  imageSrc = "/contenido/andean-potatoes-hands.jpg",
  imageAlt = "Manos comunitarias sosteniendo cosecha fresca en el campo andino",
  className = "",
}: IntegralCenterSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Parallax sutil de la imagen al hacer scroll
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

      // Revelación elegante del encabezado superior
      gsap.from(".centro-headline", {
        y: 50,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      })

      // Revelación de los bloques de texto inferiores
      gsap.from(".centro-details", {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        delay: 0.15,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      })
    })
  }, { scope: sectionRef })

  const isImageLeft = imagePosition === "left"

  return (
    <section
      id={id}
      ref={sectionRef}
      data-header-theme="light"
      className={`relative w-full min-h-[100dvh] bg-[#F5F2EB] dark:bg-[#0D1524] overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[100dvh]">
        
        {/* =========================================================
            COLUMNA DE CONTENIDO EDITORIAL DE ALTO IMPACTO
            ========================================================= */}
        <div 
          ref={contentRef}
          className={`flex flex-col justify-between p-8 sm:p-14 md:p-18 lg:p-20 xl:p-24 bg-[#F5F2EB] dark:bg-[#0D1524] text-[#1B361F] dark:text-[#F8FAFC] min-h-[500px] lg:min-h-[100dvh] ${
            isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
          }`}
        >
          {/* 1. Título Superior Masivo */}
          <div className="max-w-xl space-y-4">
            {tagline && (
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#50AA1E] dark:text-[#68CE2B] block">
                {tagline}
              </span>
            )}
            <h2 className="centro-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-sans font-medium leading-[1.08] tracking-[-0.03em] text-[#1B361F] dark:text-white">
              {title}
            </h2>
          </div>

          {/* 2. Textos Inferiores Estructurados & Botón Minimalista */}
          <div className="max-w-xl space-y-6 pt-10 sm:pt-16">
            {description1 && (
              <p className="centro-details text-xs sm:text-[13px] md:text-sm font-mono tracking-wider uppercase text-[#2D4A32] dark:text-slate-300 leading-relaxed">
                {description1}
              </p>
            )}
            
            {description2 && (
              <p className="centro-details text-xs sm:text-[13px] md:text-sm font-mono tracking-wider uppercase text-[#4A634E] dark:text-slate-400 leading-relaxed">
                {description2}
              </p>
            )}

            {badges && badges.length > 0 && (
              <div className="centro-details flex flex-wrap gap-2 pt-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded bg-[#50AA1E]/10 text-[#50AA1E] dark:text-[#68CE2B] border border-[#50AA1E]/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Botón de Acción Estilo JawiraButton */}
            {buttonText && buttonHref && (
              <div className="centro-details pt-2">
                <JawiraButton
                  href={buttonHref}
                  variant="outline-dark"
                  size="default"
                  bullets
                  className="w-fit"
                >
                  {buttonText}
                </JawiraButton>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================
            COLUMNA DE IMAGEN A SANGRE COMPLETA (0 PADDING)
            ========================================================= */}
        <div 
          className={`relative w-full h-[50vh] sm:h-[60vh] lg:h-full min-h-[420px] lg:min-h-[100dvh] overflow-hidden ${
            isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
          }`}
        >
          <div ref={imageRef} className="absolute inset-0 w-full h-full will-change-transform">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}

