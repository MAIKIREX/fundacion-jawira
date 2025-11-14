'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const features = [
  'Laboratorios de innovación tecnológica',
  'Aulas TIC y programas de alfabetización digital',
  'Telemedicina y programas de salud preventiva',
  'Formación para comunidades vulnerables',
  'Atención integral a niñas, niños y adolescentes',
  'Servicios especializados en salud comunitaria'
]

export default function IntegralCenterSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Centro Integral JAWIRA
              </h2>
              <p className="text-lg text-foreground/70">
                Un espacio transformador que integra servicios de tecnología, educación y salud
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              El Centro Integral JAWIRA será un proyecto piloto ubicado en La Paz que integrará de manera holística servicios de tecnología productiva, educación de calidad y atención en salud. Este modelo se diseña como replicable para expandir su impacto a otras regiones, generando oportunidades de desarrollo para comunidades vulnerables, especialmente en zonas urbanas, periurbanas y rurales.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-primary mb-4">Servicios principales:</p>
              <ul className="grid grid-cols-1 gap-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg mt-6">
              <Link href="/centro-integral">Conoce el Centro Integral</Link>
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 rounded-2xl p-8 md:p-12 shadow-lg border-2 border-yellow-300 h-96 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-5xl font-bold text-gradient bg-gradient-to-r from-primary via-teal-500 to-green-600 bg-clip-text text-transparent">
                  CENTRO<br />INTEGRAL
                </div>
                <div className="text-yellow-600 font-semibold text-lg">JAWIRA</div>
                <p className="text-sm text-foreground/70 max-w-xs mx-auto">
                  Tecnología · Educación · Salud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
