import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Laptop, BookMarked } from 'lucide-react'

const educationLines = [
  {
    title: 'Capacitación docente en TIC y metodologías innovadoras',
    description: 'Programas de formación continua para maestros en herramientas digitales, pedagogía innovadora y educación inclusiva.',
    icon: BookOpen
  },
  {
    title: 'Programas de alfabetización digital y habilidades del siglo XXI',
    description: 'Formación para estudiantes, jóvenes y adultos en competencias digitales, pensamiento crítico y resolución de problemas.',
    icon: Laptop
  },
  {
    title: 'Producción de contenidos educativos y recursos abiertos',
    description: 'Desarrollo de materiales didácticos digitales, cursos en línea, plataformas educativas y recursos accesibles de código abierto.',
    icon: BookMarked
  },
  {
    title: 'Educación inclusiva para grupos vulnerables',
    description: 'Programas especializados para poblaciones rurales, mujeres, personas con discapacidad y otros grupos históricamente excluidos.',
    icon: Users
  }
]

export default function EducationSection() {
  return (
    <section id="educacion" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: Lines of work cards */}
          <div className="space-y-4">
            {educationLines.map((line, index) => {
              const Icon = line.icon
              return (
                <Card key={index} className="border-green-200 hover:shadow-md transition-all hover:border-green-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-700" />
                      </div>
                      <CardTitle className="text-primary text-lg">{line.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">{line.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Right column: Main content */}
          <div className="space-y-6">
            <div>
              <div className="w-14 h-14 rounded-lg bg-green-100 border-2 border-green-300 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-green-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Educación
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.
              </p>
            </div>

            <div className="space-y-4 text-foreground/75">
              <p>
                Este eje trabaja en formación docente continua, desarrollo de competencias digitales en niñas, niños, adolescentes y personas adultas, así como la integración estratégica de tecnología en el aula.
              </p>
              
              <p>
                Generamos contenidos educativos innovadores y recursos digitales accesibles que responden a las necesidades locales. Nos enfocamos especialmente en educación inclusiva para poblaciones vulnerables en contextos rurales, periurbanos y urbanos.
              </p>
              
              <p>
                Nuestro trabajo busca transformar la experiencia educativa, democratizando el acceso al conocimiento y preparando a las nuevas generaciones para participar activamente en un mundo digital y en constante cambio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
