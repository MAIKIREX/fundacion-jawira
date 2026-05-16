import Link from 'next/link'
import { BookOpen, Zap, Heart, ArrowRight } from 'lucide-react'

const axes = [
  {
    id: 'tecnologia',
    title: 'Tecnología',
    description: 'Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital.',
    icon: Zap,
  },
  {
    id: 'educacion',
    title: 'Educación',
    description: 'Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.',
    icon: BookOpen,
  },
  {
    id: 'salud',
    title: 'Salud',
    description: 'Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención.',
    icon: Heart,
  },
]

export default function AreasIntroductionSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          
          {/* Left: Intro Text */}
          <div className="space-y-6 lg:sticky lg:top-32">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Visión holística
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                Tres ejes para un desarrollo integral
              </h2>
            </div>
            
            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                Fundación JAWIRA integra tecnología productiva, educación y salud de forma coordinada, no como áreas aisladas. Nuestro enfoque integral busca reducir brechas tecnológicas, educativas y sanitarias en comunidades urbanas, periurbanas y rurales del Departamento de La Paz.
              </p>
              <p>
                Cada eje se fortalece con los otros, generando sinergias que multiplican el impacto y promueven el desarrollo sostenible desde una perspectiva unificada.
              </p>
            </div>
          </div>

          {/* Right: Axes List */}
          <div className="flex flex-col">
            {axes.map((axis, i) => {
              const Icon = axis.icon
              return (
                <div 
                  key={axis.id}
                  className={`group flex items-start gap-6 py-8 ${i !== 0 ? 'border-t border-border/60' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {axis.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {axis.description}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`#${axis.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors group/link"
                      >
                        Explorar área
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
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
