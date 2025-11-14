'use client'

import { Badge } from '@/components/ui/badge'

export default function TransparenciaHeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Decorative river curve */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-96 h-96 text-blue-100 opacity-30"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M50 50 Q100 100 50 150 Q80 160 100 140 Q110 130 105 110"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-300 px-4 py-2">
            Compromiso institucional
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Transparencia y rendición de cuentas
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
            Administramos los recursos con responsabilidad, claridad y compromiso con las comunidades a las que servimos.
          </p>

          <div className="pt-4">
            <p className="text-sm font-semibold text-primary">
              ✓ Presupuesto transparente • ✓ Evaluación continua • ✓ Auditorías externas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
