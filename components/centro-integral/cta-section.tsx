import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const opciones = [
  { titulo: 'Voluntariado', descripcion: 'Aporta tu tiempo y talento en alguna de las áreas del Centro Integral.' },
  { titulo: 'Donaciones', descripcion: 'Apoya infraestructura, equipos o programas específicos del centro.' },
  { titulo: 'Alianzas', descripcion: 'Colabora como institución aliada con nuestros proyectos integrales.' },
]

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community-development-people-working-together-bolivia.png"
          alt="Comunidad trabajando junta"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/92" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left: Message */}
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Súmate al proyecto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight">
              ¿Quieres apoyar el Centro Integral JAWIRA?
            </h2>
            <p className="text-base text-primary-foreground/60 leading-relaxed max-w-lg">
              Existen múltiples formas de ser parte de este proyecto transformador. Tu participación fortalece directamente nuestros programas de tecnología, educación y salud.
            </p>
            <div className="pt-2">
              <Button asChild variant="cta" size="lg">
                <Link href="/contacto">
                  Quiero apoyar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Support options as simple list */}
          <div className="space-y-0">
            {opciones.map((opcion, i) => (
              <div
                key={i}
                className={`py-6 ${
                  i !== 0 ? 'border-t border-primary-foreground/10' : ''
                }`}
              >
                <h3 className="text-lg font-bold text-primary-foreground tracking-tight mb-2">
                  {opcion.titulo}
                </h3>
                <p className="text-sm text-primary-foreground/45 leading-relaxed">
                  {opcion.descripcion}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
