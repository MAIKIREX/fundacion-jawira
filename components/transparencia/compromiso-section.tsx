'use client'

import { Card } from '@/components/ui/card'
import { ShieldCheck } from 'lucide-react'

export default function CompromisoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Icon Card */}
          <div className="flex justify-center">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 w-full max-w-sm">
              <ShieldCheck className="w-20 h-20 text-blue-600 mx-auto mb-6" />
              <p className="text-center text-sm font-semibold text-blue-900">
                Integridad y responsabilidad en cada acción
              </p>
            </Card>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Nuestro compromiso con la transparencia
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p>
                La Fundación JAWIRA se guía por principios fundamentales de integridad, responsabilidad social y rendición de cuentas. Entendemos que la confianza es el cimiento de nuestro trabajo con las comunidades, instituciones aliadas y donantes.
              </p>

              <p>
                La transparencia en JAWIRA no es solo financiera, sino también programática. Nos comprometemos a informar de forma clara qué hacemos, dónde lo hacemos, con quién colaboramos y qué resultados generamos. Esta información es fundamental para mejorar continuamente nuestras acciones y asegurar que los recursos se usen de forma óptima en beneficio de las poblaciones vulnerables.
              </p>

              <p>
                Buscamos generar relaciones de confianza basadas en la comunicación honesta, la documentación clara y la disposición a rendir cuentas de nuestras gestión ante cualquier persona, institución o donante interesado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
