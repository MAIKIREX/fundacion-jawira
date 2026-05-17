"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Z. Gran Poder, C. Jose Astete, nº 104",
    detail: "La Paz, Bolivia",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+591 64208172",
    detail: "Mensajes y llamadas",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "fundacion.jawira@gmail.com",
    detail: "Respuesta en 24-48 horas",
  },
  {
    icon: Clock,
    label: "Horarios de atención",
    value: "Lunes a Viernes: 9:00 – 18:00",
    detail: "Sábados: 9:00 – 13:00",
  },
]

export default function ContactoInfo() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Header animation
      gsap.from(".info-header", {
        scrollTrigger: {
          trigger: ".info-header",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })

      // Items stagger
      gsap.from(".info-item", {
        scrollTrigger: {
          trigger: ".info-items-container",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      })

      // Map parallax
      gsap.fromTo(".info-map", 
        { yPercent: -10 },
        { 
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".info-map-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      )
    })
  }, { scope: container })

  return (
    <div ref={container} className="space-y-16">
      <div className="info-header space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none">
          Información de contacto
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[45ch] pt-2">
          Puedes contactarnos a través de cualquiera de estos medios. Nuestro equipo responderá a la brevedad posible.
        </p>
      </div>

      <div className="info-items-container space-y-2">
        {contactInfo.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className={`info-item flex items-start gap-6 py-6 group ${
                i !== 0 ? "border-t border-border/40" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary/10 transition-colors duration-500">
                <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground/60">
                  {item.label}
                </span>
                <p className="text-lg font-semibold text-primary tracking-tight">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Map placeholder */}
      <div className="info-map-container rounded-[2rem] overflow-hidden bg-muted/30 h-[250px] relative border border-border/40 group">
        <div className="info-map absolute inset-0 flex items-center justify-center scale-110">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-background shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 ease-out">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-muted-foreground/60 font-medium tracking-wide">
              La Paz, Bolivia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
