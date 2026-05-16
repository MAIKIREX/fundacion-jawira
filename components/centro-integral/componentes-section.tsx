import { Zap, BookOpen, Heart } from 'lucide-react'

const componentes = [
  {
    title: 'Tecnología Productiva',
    description: 'Desarrollo y prueba de soluciones tecnológicas para minería, agropecuaria e industria.',
    details: [
      'Laboratorios de innovación y diseño de prototipos',
      'Herramientas digitales y desarrollo de software',
      'Aplicaciones y plataformas para educación y salud'
    ],
    icon: Zap,
    accent: 'border-primary/30',
  },
  {
    title: 'Educación',
    description: 'Aulas TIC y espacios de formación continua para comunidades.',
    details: [
      'Programas de alfabetización digital básica y avanzada',
      'Talleres, cursos y diplomados en competencias del siglo XXI',
      'Contenidos educativos digitales adaptados'
    ],
    icon: BookOpen,
    accent: 'border-secondary/30',
  },
  {
    title: 'Salud',
    description: 'Servicios de salud preventiva y telemedicina para comunidades.',
    details: [
      'Consultas presenciales y por telemedicina',
      'Programas de prevención y promoción de la salud',
      'Formación de promotores/as de salud comunitaria'
    ],
    icon: Heart,
    accent: 'border-accent/30',
  },
]

export default function ComponentesSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — left aligned */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Estructura del centro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Tres componentes que trabajan juntos
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            El Centro Integral JAWIRA se organiza alrededor de tres componentes interconectados que generan impacto integral.
          </p>
        </div>

        {/* Vertical stack — editorial list */}
        <div className="space-y-0">
          {componentes.map((comp, i) => {
            const Icon = comp.icon
            return (
              <div
                key={comp.title}
                className={`grid lg:grid-cols-[auto_1fr_1.2fr] gap-6 lg:gap-10 items-start py-10 ${
                  i !== 0 ? 'border-t border-border/60' : ''
                }`}
              >
                {/* Number */}
                <div className="hidden lg:flex items-start pt-1">
                  <span className="text-5xl font-bold text-border tracking-tighter">
                    0{i + 1}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary/70" />
                    </div>
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {comp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                    {comp.description}
                  </p>
                </div>

                {/* Details list */}
                <div className="space-y-3">
                  {comp.details.map((detail, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground/70 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
