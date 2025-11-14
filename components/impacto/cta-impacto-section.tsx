'use client'

import { Button } from '@/components/ui/button'
import { Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CtaImpactoSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient and river-like curves */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50/50 to-yellow-50">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 Q300,250 600,300 T1200,300"
            fill="none"
            stroke="#00aa66"
            strokeWidth="40"
          />
          <path
            d="M0,350 Q300,380 600,350 T1200,350"
            fill="none"
            stroke="#0066cc"
            strokeWidth="30"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              ¿Quieres ser parte de este impacto?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Puedes colaborar como voluntario, hacer donaciones, o explorar oportunidades de alianza institucional para ampliar nuestro alcance y profundidad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contacto">
              <Button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto rounded-lg w-full sm:w-auto">
                <Heart className="w-5 h-5" />
                Quiero apoyar
              </Button>
            </Link>
            <Link href="/centro-integral">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 h-auto rounded-lg w-full sm:w-auto"
              >
                Conocer el Centro Integral JAWIRA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
