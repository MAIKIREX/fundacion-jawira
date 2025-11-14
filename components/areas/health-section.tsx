import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Smartphone, Users, BarChart3 } from 'lucide-react'

const healthLines = [
  {
    title: 'Telemedicina y salud digital',
    description: 'Plataformas para consultas a distancia, seguimiento remoto de pacientes y acceso a servicios de salud desde zonas remotas.',
    icon: Smartphone
  },
  {
    title: 'Programas de prevención y promoción de la salud',
    description: 'Iniciativas en nutrición, salud mental, salud sexual y reproductiva, prevención de enfermedades y estilos de vida saludables.',
    icon: Heart
  },
  {
    title: 'Capacitación para personal de salud y promotores comunitarios',
    description: 'Formación continua en atención primaria, primeros auxilios, manejo de plataformas de salud digital y competencias interculturales.',
    icon: Users
  },
  {
    title: 'Sistemas de información y análisis de datos en salud',
    description: 'Desarrollo de herramientas para recolección, análisis y visualización de datos que mejoren la toma de decisiones en salud pública.',
    icon: BarChart3
  }
]

export default function HealthSection() {
  return (
    <section id="salud" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: Main content */}
          <div className="space-y-6">
            <div>
              <div className="w-14 h-14 rounded-lg bg-orange-100 border-2 border-orange-300 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-orange-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Salud
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención a las comunidades.
              </p>
            </div>

            <div className="space-y-4 text-foreground/75">
              <p>
                Este eje busca mejorar el acceso a servicios de salud en áreas urbanas, periurbanas y rurales del departamento. Impulsamos programas de prevención y promoción en nutrición, salud mental y salud sexual y reproductiva.
              </p>
              
              <p>
                Implementamos soluciones de telemedicina y salud digital que permiten consultas a distancia, seguimiento remoto y acceso a información de salud. Desarrollamos plataformas de información y gestión en salud que optimizan recursos y mejoran la atención.
              </p>
              
              <p>
                Capacitamos a personal de salud y promotores comunitarios, fortaleciendo la cadena de atención. Nuestro enfoque es integral, considerando determinantes sociales de la salud y promoviendo participación comunitaria en la búsqueda del bienestar colectivo.
              </p>
            </div>
          </div>

          {/* Right column: Lines of work cards */}
          <div className="space-y-4">
            {healthLines.map((line, index) => {
              const Icon = line.icon
              return (
                <Card key={index} className="border-orange-200 hover:shadow-md transition-all hover:border-orange-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded bg-orange-100 border border-orange-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-700" />
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
        </div>
      </div>
    </section>
  )
}
