export default function IntegratedApproachSection() {
  const benefits = [
    'Mayor impacto y sostenibilidad',
    'Sinergia inter-disciplinaria',
    'Participación comunitaria activa',
    'Respuesta multidimensional',
    'Mejora de indicadores base',
    'Ecosistemas de innovación'
  ]

  return (
    <section className="py-24 md:py-32 bg-primary overflow-hidden relative">
      {/* Abstract Architectural SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] text-primary-foreground max-w-none">
          <circle cx="400" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="250" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="550" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Connection lines to center */}
          <line x1="400" y1="300" x2="400" y2="440" stroke="currentColor" strokeWidth="1" />
          <line x1="250" y1="500" x2="380" y2="460" stroke="currentColor" strokeWidth="1" />
          <line x1="550" y1="500" x2="420" y2="460" stroke="currentColor" strokeWidth="1" />
          
          <circle cx="400" cy="450" r="10" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Punto de convergencia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight leading-tight mt-4 mb-8">
            Un enfoque estructuralmente integrado
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed font-light">
            Los tres ejes no funcionan de manera aislada. Su intersección crea espacios de innovación donde cada área fortalece y potencia a las otras, generando soluciones sistémicas, efectivas y sostenibles.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 py-3 border-b border-primary-foreground/10">
                <span className="text-xs font-bold text-secondary">
                  0{index + 1}
                </span>
                <span className="text-sm font-medium text-primary-foreground/90">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
