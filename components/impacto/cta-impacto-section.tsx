import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CtaImpactoSection() {
  return (
    <section className="py-24 md:py-32 bg-primary border-t border-primary-foreground/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">

        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Colaboración
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-[1.08]">
            ¿Quieres ser parte <br className="hidden sm:block" />
            de este impacto?
          </h2>
        </div>

        <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl mx-auto leading-relaxed font-light">
          Puedes colaborar como voluntario, hacer donaciones, o explorar oportunidades de alianza institucional para ampliar nuestro alcance y profundidad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild variant="cta" size="lg">
            <Link href="/contacto">
              Quiero apoyar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/centro-integral">
              Conocer el Centro Integral
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
