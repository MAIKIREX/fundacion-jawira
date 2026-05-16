import { Target, Eye } from 'lucide-react'

export default function MisionVisionSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Nuestra brújula
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Misión y Visión
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            La brújula que guía nuestro trabajo y compromiso institucional.
          </p>
        </div>

        {/* Two-column split */}
        <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {/* Misión */}
          <div className="bg-background p-8 md:p-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary tracking-tight">Nuestra Misión</h3>
            </div>
            <p className="text-base text-foreground/70 leading-relaxed">
              Promover el desarrollo integral y sostenible de comunidades vulnerables en el Departamento de La Paz,
              mediante la articulación de tecnología productiva, educación y salud. Buscamos generar oportunidades a
              través de la investigación, innovación y proyectos participativos que fomenten la equidad, inclusión y
              empoderamiento con un enfoque interdisciplinario.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-background p-8 md:p-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary tracking-tight">Nuestra Visión</h3>
            </div>
            <p className="text-base text-foreground/70 leading-relaxed">
              Ser una institución líder en el Departamento de La Paz, reconocida por su innovación integral, impacto
              social transformador y contribución a la equidad territorial. Aspiramos a ser un modelo de organización
              inclusiva que articule actores públicos, privados y comunitarios para construir una Bolivia más justa,
              equitativa y sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
