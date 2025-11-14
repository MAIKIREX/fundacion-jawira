'use client'

import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import Link from 'next/link'

export default function TransparenciaRendicionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Transparencia y rendición de cuentas
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8 md:p-12 border border-primary/20 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              La Fundación JAWIRA se compromete a usar los recursos de forma responsable, eficiente y ética. Cada peso que recibimos de donantes, gobiernos o aliados es destinado directamente al impacto en las comunidades.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              La transparencia es fundamental en nuestro trabajo. Creemos que la comunidad tiene derecho a conocer qué hacemos, cómo lo hacemos, cuánto gastamos y qué resultados logramos. Esta apertura genera confianza, mejora nuestros procesos y nos responsabiliza ante las personas que nos apoyan y las comunidades que servimos.
            </p>

            <div className="pt-6 border-t border-primary/20">
              <Link href="/transparencia">
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 h-auto rounded-lg">
                  <Eye className="w-5 h-5" />
                  Ver información de transparencia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
