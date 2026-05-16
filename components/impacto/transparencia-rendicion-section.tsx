import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function TransparenciaRendicionSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Compromiso institucional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              Transparencia y rendición de cuentas
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                La Fundación JAWIRA se compromete a usar los recursos de forma responsable, eficiente y
                ética. Cada peso que recibimos de donantes, gobiernos o aliados es destinado directamente
                al impacto en las comunidades.
              </p>
              <p>
                La transparencia es fundamental en nuestro trabajo. Creemos que la comunidad tiene derecho
                a conocer qué hacemos, cómo lo hacemos, cuánto gastamos y qué resultados logramos. Esta
                apertura genera confianza y nos responsabiliza ante las personas que nos apoyan y las
                comunidades que servimos.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild variant="cta" size="lg">
                <Link href="/transparencia">
                  Ver información de transparencia
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
