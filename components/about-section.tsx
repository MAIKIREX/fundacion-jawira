"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image and Badges */}
          <div className="flex flex-col gap-6">
            <Badge
              variant="secondary"
              className="w-fit bg-accent/10 text-accent hover:bg-accent/20 border-2 border-accent/20 text-base px-4 py-2 rounded-xl"
            >
              <MapPin className="w-4 h-4 mr-2" />
              La Paz, Bolivia
            </Badge>

            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border-2 border-muted">
              <Image
                src="/nonprofit-organization-community-bolivia-foundation.png"
                alt="Fundación JAWIRA trabajando con comunidades"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm border-t-2 border-muted">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-base text-primary">Organización Comunitaria</p>
                    <p className="text-sm text-muted-foreground">Sin fines de lucro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Quiénes somos</h2>

            <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                Fundación JAWIRA es una organización sin fines de lucro comprometida con el desarrollo integral y
                sostenible en el Departamento de La Paz, Bolivia. El nombre "JAWIRA" significa "río" en idioma aymara,
                simbolizando el flujo, la vida, la conexión y las oportunidades.
              </p>

              <p>
                Trabajamos articulando tres ejes estratégicos fundamentales: tecnología productiva y tecnológica,
                educación, y salud. Nuestro enfoque se centra en poblaciones vulnerables, promoviendo innovación,
                equidad de género, interculturalidad y respeto por los derechos humanos.
              </p>

              <p>
                Creemos en el poder transformador de conectar comunidades con oportunidades de desarrollo, generando
                impacto positivo y sostenible en zonas urbanas, periurbanas y rurales del departamento.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-2 border-secondary/20 text-sm px-4 py-1.5 rounded-xl">
                Sin fines de lucro
              </Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-2 border-primary/20 text-sm px-4 py-1.5 rounded-xl">
                Desarrollo sostenible
              </Badge>
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-2 border-accent/20 text-sm px-4 py-1.5 rounded-xl">
                Equidad e inclusión
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
