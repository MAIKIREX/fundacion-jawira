import { Heart } from 'lucide-react'

const healthLines = [
  {
    title: 'Telemedicina digital',
    description: 'Plataformas para consultas a distancia y acceso a servicios desde zonas remotas.'
  },
  {
    title: 'Prevención y bienestar',
    description: 'Iniciativas en nutrición, salud mental, y estilos de vida saludables.'
  },
  {
    title: 'Capacitación comunitaria',
    description: 'Formación continua en atención primaria y primeros auxilios para promotores locales.'
  },
  {
    title: 'Análisis de datos',
    description: 'Herramientas para recolección y visualización que mejoran la toma de decisiones en salud pública.'
  }
]

export default function HealthSection() {
  return (
    <section id="salud" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Eje de Acción 03
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
              Prevención de <br className="hidden sm:block" />la salud comunitaria
            </h2>
          </div>

          <div className="max-w-md text-base text-foreground/70 leading-relaxed md:pb-2">
            <p>
              Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención. Implementamos sistemas de gestión que optimizan recursos, capacitando promotores locales bajo un enfoque integral que considera determinantes sociales.
            </p>
          </div>
        </div>

        {/* Large Number Editorial List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {healthLines.map((line, index) => (
            <div key={index} className="group">
              <div className="text-5xl md:text-6xl font-bold text-border group-hover:text-accent transition-colors mb-6 tracking-tighter">
                0{index + 1}
              </div>
              <div className="space-y-3 pt-6 border-t border-border">
                <h3 className="text-lg font-bold text-primary tracking-tight">
                  {line.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {line.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
