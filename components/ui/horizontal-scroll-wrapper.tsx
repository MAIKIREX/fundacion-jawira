"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface HorizontalScrollWrapperProps {
  children: ReactNode
  className?: string
  contentClassName?: string
  zIndex?: number
}

export function HorizontalScrollWrapper({ 
  children, 
  className = "bg-background", 
  contentClassName = "gap-20 px-8",
  zIndex = 1 
}: HorizontalScrollWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const container = containerRef.current
      const scrollWrapper = scrollWrapperRef.current
      if (!container || !scrollWrapper) return

      // 1. Línea de tiempo principal: Desplazamiento Horizontal
      const scrollTween = gsap.to(scrollWrapper, {
        x: () => -(scrollWrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollWrapper.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      })

      // 2. Automagia de Animaciones Internas
      // Busca todos los elementos hijos que tengan el atributo `data-horizontal-reveal`
      // Esto soluciona el problema de pasar el `scrollTween` a los componentes hijos en React.
      const revealGroups = gsap.utils.toArray<HTMLElement>("[data-horizontal-group]", container)
      
      // Animar por grupos (ej. tarjetas)
      revealGroups.forEach((group) => {
        const elements = group.querySelectorAll("[data-horizontal-reveal]")
        if (elements.length === 0) return

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            containerAnimation: scrollTween, // Vincula la animación al scroll horizontal
            start: "left 85%", // Dispara cuando el grupo entra al 85% de la pantalla
          }
        })

        // Iterar sobre los elementos del grupo para mantener el orden
        elements.forEach((el) => {
          const effect = el.getAttribute("data-horizontal-reveal")

          if (effect === "fade-up") {
            tl.fromTo(el,
              { y: 40, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" },
              "<0.1" // Stagger simulado
            )
          } else if (effect === "clip-image") {
            // Animamos el contenedor recortándolo
            tl.fromTo(el,
              { clipPath: "inset(20% 20% 20% 20%)", autoAlpha: 0 },
              { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1, duration: 1.5, ease: "power4.out" },
              0
            )
            // Si hay una imagen adentro, le hacemos un zoom-out simultáneo
            const innerImg = el.querySelector(".axis-img-inner, img")
            if (innerImg) {
              tl.fromTo(innerImg,
                { scale: 1.3 },
                { scale: 1, duration: 1.5, ease: "power4.out" },
                0
              )
            }
          } else if (effect === "scale-up") {
            tl.fromTo(el,
              { scale: 0, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, duration: 0.8, ease: "back.out(1.5)" },
              "<0.2"
            )
          }
        })
      })

      // Animaciones individuales sueltas (sin grupo)
      const looseElements = gsap.utils.toArray<HTMLElement>("[data-horizontal-reveal]:not([data-horizontal-group] [data-horizontal-reveal])", container)
      looseElements.forEach((el) => {
        const effect = el.getAttribute("data-horizontal-reveal")
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            containerAnimation: scrollTween,
            start: "left 80%",
          }
        })

        if (effect === "fade-up") {
          tl.fromTo(el, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" })
        }
      })
    })
  }, { scope: containerRef, dependencies: [] })

  return (
    <section 
      ref={containerRef} 
      className={`relative h-[100svh] overflow-hidden flex items-center will-change-transform ${className}`}
      style={{ zIndex }}
    >
      <div 
        ref={scrollWrapperRef} 
        className={`flex h-full items-center w-max ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  )
}
