"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Laboratorios de innovación tecnológica",
  "Aulas TIC y programas de alfabetización digital",
  "Telemedicina y programas de salud preventiva",
  "Formación para comunidades vulnerables",
  "Atención integral a niñas, niños y adolescentes",
  "Servicios especializados en salud comunitaria",
]

export default function IntegralCenterSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Proyecto piloto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                Centro Integral JAWIRA
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Un espacio transformador que integra servicios de tecnología, educación y salud
              </p>
            </div>

            <p className="text-base text-foreground/70 leading-relaxed">
              El Centro Integral JAWIRA será un proyecto piloto ubicado en La Paz que integrará de manera holística
              servicios de tecnología productiva, educación de calidad y atención en salud. Este modelo se diseña como
              replicable para expandir su impacto a otras regiones.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-primary tracking-wide">Servicios principales</p>
              <ul className="grid grid-cols-1 gap-2.5">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-foreground/70 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild variant="cta" size="lg">
              <Link href="/centro-integral">Conoce el Centro Integral</Link>
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[520px]">
              <Image
                src="/integrated-center-facility-services-building-modern.png"
                alt="Centro Integral JAWIRA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight block">
                  Centro
                  <br />
                  Integral
                </span>
                <span className="text-secondary font-bold text-lg mt-2 block">JAWIRA</span>
                <span className="text-xs text-white/70 font-medium tracking-wider uppercase mt-1 block">
                  Tecnología · Educación · Salud
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
