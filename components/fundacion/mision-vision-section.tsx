import { Card } from '@/components/ui/card'
import { Target, Eye } from 'lucide-react'

export default function MisionVisionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Misión y Visión
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La brújula que guía nuestro trabajo y compromiso institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <Card className="p-8 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Nuestra Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Promover el desarrollo integral y sostenible de comunidades vulnerables en el Departamento de La Paz, mediante la articulación de tecnología productiva, educación y salud. Buscamos generar oportunidades a través de la investigación, innovación y proyectos participativos que fomenten la equidad, inclusión y empoderamiento con un enfoque interdisciplinario.
            </p>
          </Card>

          {/* Visión */}
          <Card className="p-8 border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                <Eye className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Nuestra Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser una institución líder en el Departamento de La Paz, reconocida por su innovación integral, impacto social transformador y contribución a la equidad territorial. Aspiramos a ser un modelo de organización inclusiva que articule actores públicos, privados y comunitarios para construir una Bolivia más justa, equitativa y sostenible.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
