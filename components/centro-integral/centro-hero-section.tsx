import { Zap, BookOpen, Heart, MapPin, Building2, ArrowDownRight } from 'lucide-react'

export default function CentroHeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border">
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full -mr-[400px] -mt-[400px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded bg-secondary/10 text-secondary">
            Proyecto piloto
          </span>
          <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded bg-primary/8 text-primary">
            Modelo replicable
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              Centro <br className="hidden sm:block" />
              Integral <span className="text-secondary">JAWIRA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
              Un espacio que integra tecnología productiva, educación y salud para el desarrollo 
              integral de las comunidades del Departamento de La Paz.
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Descubrir el centro
            </div>
          </div>

          {/* Right: Metadata & Axes Grid */}
          <div className="space-y-8 lg:pt-2">
            
            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
              <div className="bg-background p-5 space-y-1">
                <MapPin className="w-4 h-4 text-muted-foreground mb-2" />
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60">Ubicación</p>
                <p className="text-sm font-semibold text-primary">La Paz, Bolivia</p>
              </div>
              <div className="bg-background p-5 space-y-1">
                <Building2 className="w-4 h-4 text-muted-foreground mb-2" />
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60">Enfoque</p>
                <p className="text-sm font-semibold text-primary">Articulación Integral</p>
              </div>
            </div>

            {/* Three axes indicator */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-secondary">Pilares del Centro</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "Tecnología", color: "bg-primary" },
                  { icon: BookOpen, label: "Educación", color: "bg-secondary" },
                  { icon: Heart, label: "Salud", color: "bg-accent" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="p-4 rounded-xl border border-border/60 bg-muted/20 flex flex-col items-center text-center gap-3 hover:bg-muted/40 transition-colors">
                      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-primary">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
