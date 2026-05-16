"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Comunidad trabajando junta en desarrollo"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary">
                Fundación sin fines de lucro — La Paz, Bolivia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-primary-foreground">
                Tecnología, educación
                <br className="hidden md:block" />
                y salud que fluyen
                <br className="hidden md:block" />
                <span className="text-secondary">hacia el desarrollo</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-[52ch]">
              Articulamos tecnología productiva, educación integral y prevención de la salud para comunidades vulnerables, promoviendo desarrollo sostenible en zonas urbanas, periurbanas y rurales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild variant="cta" size="lg">
                <Link href="/fundacion">Conoce la fundación</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/quiero-apoyar">Quiero apoyar</Link>
              </Button>
            </div>
          </div>

          {/* Right: Stats/Impact Summary */}
          <div className="hidden lg:grid grid-cols-1 gap-5">
            {[
              { value: "+2.8M", label: "Población objetivo en La Paz", accent: "border-secondary/40" },
              { value: "3 ejes", label: "Tecnología · Educación · Salud", accent: "border-accent/40" },
              { value: "2026–2034", label: "Horizonte de impacto proyectado", accent: "border-primary-foreground/20" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`border-l-2 ${stat.accent} pl-6 py-4`}
              >
                <p className="text-2xl font-bold text-primary-foreground tracking-tight">{stat.value}</p>
                <p className="text-sm text-primary-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
