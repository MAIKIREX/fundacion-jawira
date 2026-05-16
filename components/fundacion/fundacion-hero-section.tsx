import { ArrowDownRight, Building2, FileCheck, Globe } from 'lucide-react'

export default function FundacionHeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background border-b border-border">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none -mr-[200px] -mt-[100px]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M50 20 Q80 40 60 80 Q70 120 50 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-primary"
          />
          <path
            d="M60 30 Q90 50 70 90 Q80 130 60 170"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-secondary"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Massive Typography */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Conócenos
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              La Fundación <br className="hidden md:block" />
              <span className="text-secondary">JAWIRA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
              Una fundación sin fines de lucro que articula tecnología productiva, educación y salud 
              para el desarrollo integral en el Departamento de La Paz, Bolivia.
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest mt-12">
              <ArrowDownRight className="w-4 h-4" />
              Nuestra historia
            </div>
          </div>

          {/* Right: Institutional Data */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="text-xs font-bold tracking-widest uppercase text-secondary">Identidad institucional</h3>
            
            <div className="grid gap-px bg-border/40 border border-border/40 rounded-xl overflow-hidden">
              <div className="bg-background p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4 text-primary/70" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary tracking-tight">Sede Principal</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Zona Gran Poder, La Paz, Bolivia.</p>
                </div>
              </div>

              <div className="bg-background p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-secondary/70" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary tracking-tight">Alcance Territorial</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Áreas urbanas, periurbanas y rurales del Departamento de La Paz.</p>
                </div>
              </div>

              <div className="bg-background p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileCheck className="w-4 h-4 text-accent/70" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary tracking-tight">Estatus Legal</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">Organización no gubernamental, sin fines de lucro, legalmente establecida.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
