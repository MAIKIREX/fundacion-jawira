import Image from 'next/image'

export default function WhatIsCentroSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Proyecto transformador
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                ¿Qué es el Centro Integral JAWIRA?
              </h2>
            </div>

            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                El Centro Integral JAWIRA es un proyecto transformador creado por la Fundación JAWIRA para articular,
                en un mismo lugar, servicios de tecnología productiva, educación de calidad y salud preventiva. Es un
                espacio físico y digital diseñado para brindar atención integral a poblaciones urbanas, periurbanas y
                rurales del Departamento de La Paz.
              </p>
              <p>
                Se presenta como un{" "}
                <span className="font-medium text-foreground">proyecto piloto replicable</span>, cuyo modelo y
                metodología pueden adaptarse e implementarse en otras regiones del país, generando oportunidades de
                desarrollo sostenible y fortalecimiento de capacidades comunitarias a nivel nacional.
              </p>
            </div>

            {/* Key attributes */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-border">
              {["Espacio físico y digital", "Modelo piloto", "Replicable a nivel nacional"].map((item) => (
                <span key={item} className="text-xs font-medium text-muted-foreground tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual — photo with overlay */}
          <div className="relative rounded-2xl overflow-hidden h-[380px] lg:h-[440px]">
            <Image
              src="/integrated-center-facility-services-building-modern.png"
              alt="Centro Integral JAWIRA — Espacio de tecnología, educación y salud"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight block leading-tight">
                Centro Integral
              </span>
              <span className="text-secondary font-bold text-base mt-1 block">JAWIRA</span>
              <span className="text-[10px] text-white/60 font-medium tracking-widest uppercase mt-2 block">
                Tecnología · Educación · Salud
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
