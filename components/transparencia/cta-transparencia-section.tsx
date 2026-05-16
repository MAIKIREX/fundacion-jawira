import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CtaTransparenciaSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

          {/* Left: Main CTA */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Diálogo abierto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
              ¿Tienes dudas o quieres saber más?
            </h2>
            <p className="text-base text-foreground/70 leading-relaxed max-w-lg">
              La transparencia también es diálogo. Cualquier persona, institución o donante
              interesado en conocer más sobre la información financiera, programática o de impacto
              puede contactarnos para solicitar detalles o aclaraciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild variant="cta" size="lg">
                <Link href="/contacto">
                  Contactar a la Fundación
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/impacto">
                  Ver nuestro impacto
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="space-y-0">
            <div className="py-8">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50 block mb-3">
                Por correo
              </span>
              <p className="text-sm text-foreground/60 mb-3">
                Envíanos tus preguntas o solicitudes de información a:
              </p>
              <a
                href="mailto:info@fundacionjawira.org"
                className="text-base font-semibold text-primary hover:text-secondary transition-colors"
              >
                info@fundacionjawira.org
              </a>
            </div>

            <div className="py-8 border-t border-border/60">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/50 block mb-3">
                Colaborar o donar
              </span>
              <p className="text-sm text-foreground/60 mb-3">
                Si deseas conocer opciones para apoyar nuestro trabajo:
              </p>
              <Link
                href="/quiero-apoyar"
                className="text-base font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-2"
              >
                Ver opciones de apoyo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
