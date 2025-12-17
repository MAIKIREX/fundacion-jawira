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
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Centro Integral JAWIRA</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Un espacio transformador que integra servicios de tecnología, educación y salud
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              El Centro Integral JAWIRA será un proyecto piloto ubicado en La Paz que integrará de manera holística
              servicios de tecnología productiva, educación de calidad y atención en salud. Este modelo se diseña como
              replicable para expandir su impacto a otras regiones, generando oportunidades de desarrollo para
              comunidades vulnerables, especialmente en zonas urbanas, periurbanas y rurales.
            </p>

            <div className="space-y-4">
              <p className="font-semibold text-lg text-primary">Servicios principales:</p>
              <ul className="grid grid-cols-1 gap-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl shadow-md hover:shadow-lg transition-all mt-6"
            >
              <Link href="/centro-integral">Conoce el Centro Integral</Link>
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-muted h-[480px]">
              <Image
                src="/integrated-center-facility-services-building-modern.png"
                alt="Centro Integral JAWIRA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                  CENTRO
                  <br />
                  INTEGRAL
                </div>
                <div className="text-secondary font-bold text-xl mb-2">JAWIRA</div>
                <p className="text-sm text-white/90 font-medium">Tecnología · Educación · Salud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
