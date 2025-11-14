'use client'

import { Building2 } from 'lucide-react'

export default function WhatIsCentroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              ¿Qué es el Centro Integral JAWIRA?
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                El Centro Integral JAWIRA es un proyecto transformador creado por la Fundación JAWIRA para articular, en un mismo lugar, servicios de tecnología productiva, educación de calidad y salud preventiva. Es un espacio físico y digital diseñado para brindar atención integral a poblaciones urbanas, periurbanas y rurales del Departamento de La Paz.
              </p>

              <p className="leading-relaxed">
                Se presenta como un <span className="font-semibold text-primary">proyecto piloto replicable</span>, cuyo modelo y metodología pueden adaptarse e implementarse en otras regiones del país, generando oportunidades de desarrollo sostenible y fortalecimiento de capacidades comunitarias a nivel nacional.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-700">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">Centro comunitario</h3>
                <p className="text-sm text-foreground/70">Espacio accesible y acogedor para la población</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-teal-50 to-green-100 rounded-2xl p-12 shadow-lg border-2 border-teal-300 h-80 flex flex-col items-center justify-center space-y-4">
              <div className="text-6xl">🏢</div>
              <h3 className="text-2xl font-bold text-primary text-center">
                Centro Integral
              </h3>
              <div className="flex gap-3 justify-center text-sm font-medium">
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Tecnología</span>
                <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">Educación</span>
                <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full">Salud</span>
              </div>
              <p className="text-xs text-foreground/60 text-center mt-2">En La Paz, Bolivia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
