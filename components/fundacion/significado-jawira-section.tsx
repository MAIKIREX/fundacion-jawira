export default function SignificadoJawiraSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
                Nuestro nombre
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
                ¿Qué significa JAWIRA?
              </h2>
            </div>

            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                <span className="font-semibold text-primary">JAWIRA</span> significa{" "}
                <span className="italic">&ldquo;río&rdquo;</span> en aymara, uno de los idiomas originarios de Bolivia.
                Esta palabra no es solo una etiqueta, sino una metáfora profunda de nuestra filosofía institucional.
              </p>
              <p>
                Un río representa el <span className="font-medium text-foreground">flujo de vida</span>, la{" "}
                <span className="font-medium text-foreground">conexión continua</span> entre diferentes espacios, y la
                capacidad de <span className="font-medium text-foreground">generar oportunidades</span> a su paso. De la
                misma manera, la Fundación JAWIRA actúa como un cauce que canaliza tecnología productiva, educación y
                salud hacia comunidades vulnerables.
              </p>
              <p>
                Así como el río nutre la tierra y conecta ecosistemas, nuestra fundación busca nutrir el potencial
                humano, conectar actores institucionales y crear caminos hacia el desarrollo sostenible e integral.
              </p>
            </div>
          </div>

          {/* Right: Refined river visualization */}
          <div className="relative h-[380px] flex items-center justify-center">
            <svg viewBox="0 0 280 380" className="w-full h-full max-w-[240px]">
              {/* River flow — main stream */}
              <path
                d="M120 20 Q130 60 110 100 Q120 140 105 180 Q130 220 115 280 Q120 340 125 370"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className="text-primary/20"
              />
              {/* Secondary stream */}
              <path
                d="M130 30 Q140 70 120 110 Q130 150 115 190 Q140 230 125 290 Q130 350 135 380"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                className="text-secondary/15"
              />

              {/* Flow dots */}
              <circle cx="125" cy="60" r="3" className="fill-primary/30" />
              <circle cx="118" cy="140" r="3" className="fill-secondary/30" />
              <circle cx="110" cy="220" r="3" className="fill-primary/30" />
              <circle cx="120" cy="310" r="3" className="fill-secondary/30" />

              {/* Axis labels along the river — clean, text-only */}
              <g transform="translate(180, 70)">
                <text fontSize="11" fontWeight="600" className="fill-primary">Tecnología</text>
                <text y="16" fontSize="9" className="fill-muted-foreground" opacity="0.6">Innovación digital</text>
              </g>

              <g transform="translate(30, 170)">
                <text fontSize="11" fontWeight="600" className="fill-primary" textAnchor="end" x="60">Educación</text>
                <text y="16" fontSize="9" className="fill-muted-foreground" textAnchor="end" x="60" opacity="0.6">Formación integral</text>
              </g>

              <g transform="translate(175, 260)">
                <text fontSize="11" fontWeight="600" className="fill-primary">Salud</text>
                <text y="16" fontSize="9" className="fill-muted-foreground" opacity="0.6">Prevención y bienestar</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
