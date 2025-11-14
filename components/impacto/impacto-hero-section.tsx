'use client'

import { Badge } from '@/components/ui/badge'

export default function ImpactoHeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient and river-like curves */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-100/20">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 Q300,250 600,300 T1200,300"
            fill="none"
            stroke="#0066cc"
            strokeWidth="40"
          />
          <path
            d="M0,350 Q300,380 600,350 T1200,350"
            fill="none"
            stroke="#00aa66"
            strokeWidth="30"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-yellow-100 text-primary hover:bg-yellow-200 border-yellow-300 text-sm font-semibold"
          >
            Visión 2026–2034
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Impacto y Cobertura
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Trabajamos por el desarrollo integral en el Departamento de La Paz, con una visión de impacto sostenible y equitativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
