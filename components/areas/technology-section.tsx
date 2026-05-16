import { Cpu, Leaf, Smartphone, Lightbulb } from 'lucide-react'

const technologyLines = [
  {
    title: 'Innovación productiva',
    description: 'Tecnologías limpias para sectores productivos, monitoreo ambiental y trazabilidad.',
    icon: Leaf
  },
  {
    title: 'Soluciones digitales',
    description: 'Plataformas de gestión, aplicaciones móviles y herramientas de telemedicina.',
    icon: Smartphone
  },
  {
    title: 'Capacitación TIC',
    description: 'Formación en IA, IoT, ciberseguridad y alfabetización digital.',
    icon: Cpu
  },
  {
    title: 'Laboratorios Tech',
    description: 'Espacios de co-creación, prototipado y experimentación comunitaria.',
    icon: Lightbulb
  }
]

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Cpu className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Eje de Acción 01
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight max-w-3xl">
            Tecnología productiva <br className="hidden sm:block" />y digital
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          
          {/* Left: Text Content */}
          <div className="space-y-6 text-base text-foreground/70 leading-relaxed">
            <p className="text-lg font-medium text-foreground/90">
              Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital.
            </p>
            <p>
              Este eje se enfoca en desarrollar e implementar tecnologías innovadoras para sectores productivos clave como minería, agropecuaria e industria. Diseñamos herramientas digitales que apoyen la salud y educación mediante plataformas, sistemas y aplicaciones de impacto.
            </p>
            <p>
              Buscamos reducir el impacto ambiental de las actividades productivas y promover modelos de producción sostenible. Nuestro trabajo genera ecosistemas de innovación donde comunidades, empresas e instituciones colaboran.
            </p>
          </div>

          {/* Right: Bento Grid of lines */}
          <div className="grid sm:grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden">
            {technologyLines.map((line, index) => {
              const Icon = line.icon
              return (
                <div key={index} className="bg-background p-8 group hover:bg-muted/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary/70" />
                  </div>
                  <h3 className="text-base font-bold text-primary tracking-tight mb-2">
                    {line.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {line.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
