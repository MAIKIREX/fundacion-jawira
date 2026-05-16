import { Globe, Building2, Heart, Package } from 'lucide-react'

const fuentes = [
  {
    icon: Globe,
    titulo: 'Cooperación internacional',
    descripcion: 'Convenios con ONG y organizaciones internacionales comprometidas con el desarrollo sostenible en América Latina.',
  },
  {
    icon: Building2,
    titulo: 'Instituciones públicas y privadas',
    descripcion: 'Proyectos colaborativos con entidades gubernamentales y empresas para impulsar iniciativas de impacto social.',
  },
  {
    icon: Heart,
    titulo: 'Donaciones de personas naturales',
    descripcion: 'Contribuciones voluntarias de individuos que creen en nuestra misión de transformar comunidades vulnerables.',
  },
  {
    icon: Package,
    titulo: 'Aportes en especie',
    descripcion: 'Equipos, servicios, materiales y recursos que contribuyen al funcionamiento eficiente de nuestras actividades.',
  },
]

export default function FuentesFinanciamientoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header + Sustainability */}
          <div className="lg:sticky lg:top-32 space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Recursos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                Fuentes de financiamiento
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Buscamos recursos a través de múltiples canales para asegurar la sostenibilidad de nuestras iniciativas.
            </p>

            {/* Sustainability callout */}
            <div className="pt-6 border-t border-border space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-accent">
                Objetivo: Sostenibilidad a 3 años
              </span>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Nuestra meta es asegurar un mínimo de tres años de sostenibilidad financiera
                para el funcionamiento de la Fundación y el Centro Integral JAWIRA.
              </p>
              <span className="text-xs font-medium text-muted-foreground">
                Período meta: 2024 – 2027
              </span>
            </div>
          </div>

          {/* Right: Sources list */}
          <div className="space-y-0">
            {fuentes.map((fuente, i) => {
              const Icon = fuente.icon
              return (
                <div
                  key={i}
                  className={`flex items-start gap-5 py-8 group ${
                    i !== 0 ? 'border-t border-border/60' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {fuente.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {fuente.descripcion}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
