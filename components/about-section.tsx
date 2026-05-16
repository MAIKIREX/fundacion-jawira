"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[420px] lg:h-[480px]">
              <Image
                src="/nonprofit-organization-community-bolivia-foundation.png"
                alt="Fundación JAWIRA trabajando con comunidades"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-2">
                  Organización comunitaria
                </span>
                <p className="text-sm text-white/80 leading-relaxed max-w-[40ch]">
                  Sin fines de lucro, con sede en La Paz, Bolivia
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Sobre nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                Quiénes somos
              </h2>
            </div>

            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                Fundación JAWIRA es una organización sin fines de lucro comprometida con el desarrollo integral y
                sostenible en el Departamento de La Paz, Bolivia. El nombre &ldquo;JAWIRA&rdquo; significa &ldquo;río&rdquo; en idioma aymara,
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

            {/* Key attributes as minimal list */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-border">
              {["Sin fines de lucro", "Desarrollo sostenible", "Equidad e inclusión"].map((item) => (
                <span key={item} className="text-xs font-medium text-muted-foreground tracking-wide">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
