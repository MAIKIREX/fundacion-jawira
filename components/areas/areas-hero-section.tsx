import { BookOpen, Zap, Heart, ArrowDownRight } from 'lucide-react'

export default function AreasHeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden border-b border-border">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute right-0 top-0 w-full h-full text-primary opacity-[0.02]" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMaxYMin slice">
          <path d="M300 0 Q350 100 300 200 Q250 300 300 400" stroke="currentColor" strokeWidth="80" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left: Huge Title */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary block mb-6">
              Nuestro trabajo
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter leading-[1.05]">
              Áreas de <br className="hidden md:block" />
              trabajo
            </h1>
          </div>

          {/* Right: Editorial Content */}
          <div className="space-y-10 lg:pt-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Articulamos tres ejes estratégicos: tecnología productiva, educación y salud, 
              para impulsar el desarrollo integral en el Departamento de La Paz.
            </p>

            {/* Three axes indicator - Vertical list */}
            <div className="space-y-0 border-t border-border/60 pt-6">
              {[
                { icon: Zap, label: "Tecnología", desc: "Productiva y herramientas digitales", color: "bg-primary" },
                { icon: BookOpen, label: "Educación", desc: "Integral y formación de capacidades", color: "bg-secondary" },
                { icon: Heart, label: "Salud", desc: "Prevención y bienestar comunitario", color: "bg-accent" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className={`flex items-start gap-4 py-4 ${i !== 0 ? 'border-t border-border/40' : ''}`}>
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary tracking-tight">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-primary/60 uppercase tracking-widest pt-4">
              <ArrowDownRight className="w-4 h-4" />
              Explorar áreas
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
