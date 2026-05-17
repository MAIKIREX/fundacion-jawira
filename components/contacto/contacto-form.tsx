"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ContactoForm() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".form-card", {
        scrollTrigger: {
          trigger: ".form-card",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      // Inputs stagger entry
      gsap.from(".form-element", {
        scrollTrigger: {
          trigger: ".form-card",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      })
    })
  }, { scope: container })

  // Button Magnetic hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.4,
      ease: "power2.out"
    })
    
    // Move the icon slightly more
    const icon = btn.querySelector('.btn-icon')
    if (icon) {
      gsap.to(icon, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out"
      })
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)"
    })
    
    const icon = btn.querySelector('.btn-icon')
    if (icon) {
      gsap.to(icon, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      })
    }
  }

  return (
    <div ref={container} className="lg:sticky lg:top-28">
      {/* Outer Shell for Double-Bezel */}
      <div className="form-card rounded-[2.5rem] bg-muted/10 p-2 border border-border/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
        {/* Inner Core */}
        <div className="rounded-[2rem] bg-background border border-border/40 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="p-8 md:p-10 border-b border-border/20 bg-muted/10">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">
              Envíanos un mensaje
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo pronto.
            </p>
          </div>

          <div className="p-8 md:p-10">
            <form className="space-y-6">
              <div className="form-element space-y-2">
                <Label htmlFor="name" className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground ml-1">
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="h-14 rounded-2xl border-border/40 focus:border-primary/50 bg-muted/5 transition-all duration-300 px-5"
                  required
                />
              </div>

              <div className="form-element space-y-2">
                <Label htmlFor="email" className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground ml-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="h-14 rounded-2xl border-border/40 focus:border-primary/50 bg-muted/5 transition-all duration-300 px-5"
                  required
                />
              </div>

              <div className="form-element space-y-2">
                <Label htmlFor="subject" className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground ml-1">
                  Asunto
                </Label>
                <Input
                  id="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  className="h-14 rounded-2xl border-border/40 focus:border-primary/50 bg-muted/5 transition-all duration-300 px-5"
                  required
                />
              </div>

              <div className="form-element space-y-2">
                <Label htmlFor="message" className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground ml-1">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[140px] rounded-2xl border-border/40 focus:border-primary/50 bg-muted/5 transition-all duration-300 p-5 resize-none"
                  required
                />
              </div>

              <div className="form-element pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group relative overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="relative z-10 flex items-center font-medium">
                    Enviar mensaje
                    <div className="btn-icon w-8 h-8 rounded-full bg-background/10 flex items-center justify-center ml-3 group-hover:bg-background/20 transition-colors">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </span>
                </Button>
              </div>
            </form>

            <div className="form-element mt-8 pt-6 border-t border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground/60">Nota:</span> Tus datos serán
                tratados de manera confidencial y utilizados únicamente para responder a tu
                consulta. Normalmente respondemos en un plazo de 24–48 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
