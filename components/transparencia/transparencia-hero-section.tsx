import { ArrowDownRight, CheckCircle2, ShieldCheck, FileSearch } from 'lucide-react'

export default function TransparenciaHeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border">
      {/* Subtle decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute right-0 top-0 w-[600px] h-[600px] text-primary opacity-[0.02] -mr-[100px] -mt-[100px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M50 50 Q100 100 50 150 Q80 160 100 140 Q110 130 105 110"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Compromiso institucional
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              Transparencia y <br className="hidden md:block" />
              rendición
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
              Administramos los recursos con responsabilidad, claridad y compromiso con las comunidades a las que servimos.
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Ver información financiera
            </div>
          </div>

          {/* Right: Key pillars */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="text-xs font-bold tracking-widest uppercase text-secondary">Estándares de gestión</h3>
            
            <div className="grid gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
              <div className="bg-background p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-primary/70" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary tracking-tight">Presupuesto Abierto</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Publicación de asignación de recursos y fuentes de financiamiento.</p>
                </div>
              </div>

              <div className="bg-background p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary/70" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary tracking-tight">Evaluación Continua</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Medición rigurosa de impacto y resultados en todos los proyectos.</p>
                </div>
              </div>

              <div className="bg-background p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileSearch className="w-4 h-4 text-accent/70" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary tracking-tight">Auditorías Externas</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Revisión independiente para garantizar el uso óptimo de fondos.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
