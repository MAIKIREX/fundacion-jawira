import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ArticulacionSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Articulación estratégica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Parte del modelo integral de JAWIRA
          </h2>

          <p className="text-lg text-foreground/70 mt-6 leading-relaxed">
            El Centro Integral JAWIRA es el{" "}
            <span className="font-medium text-foreground">corazón operativo</span> de la Fundación JAWIRA. Aquí
            convergen y se articulan nuestras tres{" "}
            <span className="font-medium text-foreground">áreas de trabajo estratégicas</span>: tecnología productiva,
            educación y salud, generando sinergias que multiplican el impacto en comunidades vulnerables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button asChild variant="cta" size="lg">
              <Link href="/areas-de-trabajo">
                Ver áreas de trabajo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-2">
              <Link href="/fundacion">
                Conocer la fundación
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
