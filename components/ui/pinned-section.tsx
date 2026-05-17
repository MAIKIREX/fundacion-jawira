"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

interface PinnedSectionProps {
  children: ReactNode
  zIndex: number
}

export function PinnedSection({ children, zIndex }: PinnedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const sectionHeight = el.offsetHeight
      const viewportHeight = window.innerHeight

      if (sectionHeight <= viewportHeight) {
        // Section fits in viewport — pin it so the next section scrolls over
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        })
      } else {
        // Section is taller than viewport — pin at the END so the next
        // section covers it once the user has scrolled through all content
        ScrollTrigger.create({
          trigger: el,
          start: () => `bottom bottom`,
          end: () => `bottom top`,
          pin: true,
          pinSpacing: false,
        })
      }
    })
  }, { scope: ref, dependencies: [] })

  return (
    <div
      ref={ref}
      style={{ position: "relative", zIndex }}
    >
      {children}
    </div>
  )
}
