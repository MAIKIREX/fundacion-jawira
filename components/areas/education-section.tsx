import { BookOpen } from 'lucide-react'

const educationLines = [
  {
    title: 'Capacitación docente',
    description: 'Programas de formación continua para maestros en herramientas digitales, pedagogía innovadora y educación inclusiva.'
  },
  {
    title: 'Alfabetización digital',
    description: 'Formación para estudiantes y adultos en competencias digitales, pensamiento crítico y resolución de problemas.'
  },
  {
    title: 'Contenidos educativos',
    description: 'Desarrollo de materiales didácticos digitales, cursos en línea y recursos accesibles de código abierto.'
  },
  {
    title: 'Educación inclusiva',
    description: 'Programas especializados para poblaciones rurales, mujeres y grupos históricamente excluidos.'
  }
]

export default function EducationSection() {
  return (
    <section id="educacion" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Text Content & Header */}
          <div className="space-y-10 lg:sticky lg:top-32">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                  Eje de Acción 02
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
                Educación integral <br className="hidden sm:block" />y formativa
              </h2>
            </div>

            <div className="space-y-6 text-base text-foreground/70 leading-relaxed">
              <p className="text-lg font-medium text-foreground/90">
                Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.
              </p>
              <p>
                Este eje trabaja en formación docente continua, desarrollo de competencias digitales en niñas, niños, adolescentes y personas adultas, así como la integración estratégica de tecnología en el aula escolar.
              </p>
              <p>
                Generamos contenidos educativos innovadores y recursos digitales accesibles que responden a las necesidades locales. Nuestro trabajo democratiza el acceso al conocimiento preparando a las nuevas generaciones para un mundo en constante cambio.
              </p>
            </div>
          </div>

          {/* Right: Vertical Process List (Timeline style) */}
          <div className="relative pl-6 md:pl-8">
            {/* Vertical Line */}
            <div className="absolute left-0 top-2 bottom-6 w-px bg-border" />
            
            <div className="space-y-12">
              {educationLines.map((line, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-secondary ring-4 ring-background" />
                  
                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest text-secondary/60">
                      FASE 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {line.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                      {line.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
