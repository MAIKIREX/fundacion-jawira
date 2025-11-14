import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cpu, Leaf, Smartphone, Lightbulb } from 'lucide-react'

const technologyLines = [
  {
    title: 'Innovación para minería y agro',
    description: 'Tecnologías limpias y sostenibles para sectores productivos, herramientas de monitoreo ambiental y sistemas de trazabilidad.',
    icon: Leaf
  },
  {
    title: 'Soluciones digitales para salud y educación',
    description: 'Plataformas de información, sistemas de gestión, aplicaciones móviles y herramientas de telemedicina.',
    icon: Smartphone
  },
  {
    title: 'Capacitación en TIC e innovación',
    description: 'Talleres de programación, alfabetización digital, formación en IA, IoT, ciberseguridad y competencias tecnológicas.',
    icon: Cpu
  },
  {
    title: 'Laboratorios de innovación tecnológica',
    description: 'Espacios de co-creación, prototipado, experimentación y desarrollo de soluciones tecnológicas con participación comunitaria.',
    icon: Lightbulb
  }
]

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: Main content */}
          <div className="space-y-6">
            <div>
              <div className="w-14 h-14 rounded-lg bg-blue-100 border-2 border-blue-300 flex items-center justify-center mb-4">
                <Cpu className="w-7 h-7 text-blue-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Tecnología productiva y tecnológica
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital.
              </p>
            </div>

            <div className="space-y-4 text-foreground/75">
              <p>
                Este eje se enfoca en desarrollar e implementar tecnologías innovadoras para sectores productivos clave como minería, agropecuaria e industria. Diseñamos herramientas digitales que apoyten la salud y educación mediante plataformas, sistemas y aplicaciones de impacto.
              </p>
              
              <p>
                Buscamos reducir el impacto ambiental de las actividades productivas y promover modelos de producción sostenible. Además, trabajamos en alfabetización digital, competencias en inteligencia artificial, IoT, ciberseguridad y otras habilidades tecnológicas esenciales para el siglo XXI.
              </p>
              
              <p>
                Nuestro trabajo genera ecosistemas de innovación donde comunidades, empresas e instituciones colaboran para crear soluciones tecnológicas relevantes y contextualizadas.
              </p>
            </div>
          </div>

          {/* Right column: Lines of work cards */}
          <div className="space-y-4">
            {technologyLines.map((line, index) => {
              const Icon = line.icon
              return (
                <Card key={index} className="border-blue-200 hover:shadow-md transition-all hover:border-blue-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded bg-blue-100 border border-blue-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-700" />
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
