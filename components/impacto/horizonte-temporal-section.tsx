const fases = [
  {
    periodo: '2026 – 2028',
    titulo: 'Fase inicial y piloto',
    objetivos: [
      'Implementación del Centro Integral JAWIRA en La Paz',
      'Puesta en marcha de programas en tecnología, educación y salud',
      'Validación de metodologías y modelos de intervención',
      'Construcción de alianzas iniciales con instituciones locales',
      'Establecimiento de sistemas de monitoreo y evaluación',
    ],
  },
  {
    periodo: '2029 – 2034',
    titulo: 'Fase de consolidación y expansión',
    objetivos: [
      'Ampliación de cobertura a más municipios del Departamento',
      'Fortalecimiento y réplica del modelo del Centro Integral',
      'Escalamiento de programas con resultados comprobados',
      'Búsqueda de alianzas nacionales e internacionales',
      'Consolidación como referencia de innovación social en la región',
    ],
  },
]

export default function HorizonteTemporalSection() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Planificación estratégica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight leading-tight mt-3">
            Horizonte temporal 2026 – 2034
          </h2>
          <p className="text-base text-primary-foreground/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Dos fases estratégicas que permiten crecer de manera ordenada y sostenible.
          </p>
        </div>

        {/* Two phases — gap-px split */}
        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
          {fases.map((fase, index) => (
            <div key={index} className="bg-primary p-8 md:p-10 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-secondary">
                  {fase.periodo}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground tracking-tight">
                  {fase.titulo}
                </h3>
              </div>

              <div className="space-y-4">
                {fase.objetivos.map((objetivo, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 py-3 ${
                      i !== 0 ? 'border-t border-primary-foreground/8' : ''
                    }`}
                  >
                    <span className="text-xs font-bold text-primary-foreground/25 mt-0.5 w-5 flex-shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-primary-foreground/70 leading-relaxed">
                      {objetivo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
