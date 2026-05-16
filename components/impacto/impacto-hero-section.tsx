import { ArrowDownRight, TrendingUp, Users, Map } from 'lucide-react'

export default function ImpactoHeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border">
      {/* Subtle decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute right-0 top-0 w-full h-full opacity-[0.02]"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M0,300 Q300,250 600,300 T1200,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="40"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Visión 2026 – 2034
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              Impacto y <br className="hidden md:block" />
              cobertura
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
              Trabajamos por el desarrollo integral en el Departamento de La Paz, con una visión de impacto sostenible y equitativo.
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Conoce los resultados
            </div>
          </div>

          {/* Right: Data/Metric Grid */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="text-xs font-bold tracking-widest uppercase text-secondary">Proyecciones principales</h3>
            
            <div className="grid gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
              <div className="bg-background p-6 flex items-center gap-5 group hover:bg-muted/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/6 flex items-center justify-center flex-shrink-0">
                  <Map className="w-5 h-5 text-primary/70" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary tracking-tight">La Paz</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-1">Foco territorial</p>
                </div>
              </div>

              <div className="bg-background p-6 flex items-center gap-5 group hover:bg-muted/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/8 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-secondary/70" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary tracking-tight">3 Áreas</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-1">Ejes de intervención</p>
                </div>
              </div>

              <div className="bg-background p-6 flex items-center gap-5 group hover:bg-muted/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/8 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-accent/70" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary tracking-tight">Largo plazo</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-1">Horizonte temporal</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
