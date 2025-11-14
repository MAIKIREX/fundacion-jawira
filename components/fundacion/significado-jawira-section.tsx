export default function SignificadoJawiraSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              ¿Qué significa JAWIRA?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-primary">JAWIRA</span> significa <span className="italic">"río"</span> en aymara, uno de los idiomas originarios de Bolivia. Esta palabra no es solo una etiqueta, sino una metáfora profunda de nuestra filosofía institucional.
              </p>
              <p>
                Un río representa el <span className="font-semibold">flujo de vida</span>, la <span className="font-semibold">conexión continua</span> entre diferentes espacios, y la capacidad de <span className="font-semibold">generar oportunidades</span> a su paso. De la misma manera, la Fundación JAWIRA actúa como un cauce que canaliza tecnología productiva, educación y salud hacia comunidades vulnerables.
              </p>
              <p>
                Así como el río nutre la tierra y conecta ecosistemas, nuestra fundación busca nutrir el potencial humano, conectar actores institucionales y crear caminos hacia el desarrollo sostenible e integral.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-96 flex items-center justify-center">
            <svg viewBox="0 0 300 400" className="w-full h-full max-w-xs">
              {/* River flow */}
              <path
                d="M100 20 Q110 60 90 100 Q100 140 85 180 Q110 220 95 280 Q100 340 105 380"
                fill="none"
                stroke="#0066cc"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M110 30 Q120 70 100 110 Q110 150 95 190 Q120 230 105 290 Q110 350 115 390"
                fill="none"
                stroke="#00aa66"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Flow elements */}
              <circle cx="105" cy="60" r="4" fill="#0066cc" opacity="0.7" />
              <circle cx="100" cy="130" r="4" fill="#00aa66" opacity="0.7" />
              <circle cx="90" cy="200" r="4" fill="#0066cc" opacity="0.7" />
              <circle cx="100" cy="280" r="4" fill="#00aa66" opacity="0.7" />

              {/* Icons along the river */}
              {/* Book icon */}
              <g transform="translate(200, 80)">
                <rect x="0" y="0" width="25" height="20" rx="2" fill="none" stroke="#00aa66" strokeWidth="1.5" />
                <line x1="12.5" y1="0" x2="12.5" y2="20" stroke="#00aa66" strokeWidth="1.5" />
              </g>

              {/* Gear icon */}
              <g transform="translate(40, 140)">
                <circle cx="12.5" cy="12.5" r="6" fill="none" stroke="#0066cc" strokeWidth="1.5" />
                <circle cx="12.5" cy="12.5" r="3" fill="#0066cc" />
              </g>

              {/* Health cross icon */}
              <g transform="translate(210, 240)">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#ff6b35" strokeWidth="1.5" />
                <line x1="10" y1="6" x2="10" y2="14" stroke="#ff6b35" strokeWidth="1.5" />
                <line x1="6" y1="10" x2="14" y2="10" stroke="#ff6b35" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
