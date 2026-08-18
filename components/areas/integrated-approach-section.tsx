'use client'

import React from 'react'
import { Zap, BookOpen, Sparkles } from 'lucide-react'

export default function IntegratedApproachSection() {
  return (
    <section 
      id="enfoque-integrado"
      data-header-theme="light"
      className="py-20 md:py-28 lg:py-32 bg-[#FAF8F5] dark:bg-background border-t border-border/50 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-mono font-bold tracking-widest uppercase text-secondary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sinergia Territorial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B361F] dark:text-foreground leading-[1.05] font-sans">
            Un enfoque estructuralmente integrado
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-foreground/80 font-normal leading-relaxed pt-1">
            <p>
              Fundación JAWIRA articula tecnología productiva, educación integral y salud de forma coordinada, no como áreas aisladas. La intersección de estos tres ejes genera un modelo de desarrollo sostenible y replicable.
            </p>
            <p className="text-sm sm:text-base text-foreground/70 font-normal">
              Los indicadores respaldan la efectividad de nuestro enfoque en comunidades urbanas, periurbanas y rurales del Departamento de La Paz, multiplicando el alcance y la resiliencia territorial.
            </p>
          </div>
        </div>

        {/* 3-Column Card Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Tecnología Productiva */}
          <div className="bg-[#F3EFE9] dark:bg-[#111827] p-7 sm:p-8 md:p-9 rounded-3xl border border-[#E0DBCF] dark:border-border/60 flex flex-col justify-between shadow-sm">
            {/* Top Category Icon & Title */}
            <div className="text-center mb-8">
              <Zap className="w-8 h-8 text-[#516337] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#233215] dark:text-foreground tracking-tight">
                Tecnología Productiva
              </h3>
            </div>

            {/* 3 Green Metric Square Boxes */}
            <div className="grid grid-cols-3 gap-3 my-auto">
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#627446] text-white p-4 rounded-xl text-center shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold font-mono block">↑3.5x</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-medium text-foreground/75 text-center mt-2.5 leading-tight">
                  Eficiencia productiva
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full bg-[#627446] text-white p-4 rounded-xl text-center shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold font-mono block">↑85%</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-medium text-foreground/75 text-center mt-2.5 leading-tight">
                  Adopción digital
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full bg-[#627446] text-white p-4 rounded-xl text-center shadow-sm">
                  <span className="text-xl sm:text-2xl font-bold font-mono block">↓40%</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-medium text-foreground/75 text-center mt-2.5 leading-tight">
                  Huella ambiental
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Educación & Salud (1 Big Green Tile) */}
          <div className="bg-[#F3EFEC] dark:bg-[#111827] p-8 sm:p-9 rounded-2xl border border-[#E0DBCF] dark:border-border/60 flex flex-col justify-between shadow-sm">
            {/* Top Category Icon & Title */}
            <div className="text-center mb-8">
              <BookOpen className="w-8 h-8 text-[#516337] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#233215] dark:text-foreground tracking-tight">
                Educación & Salud
              </h3>
            </div>

            {/* 1 Big Green Metric Box & Description */}
            <div className="my-auto space-y-4 flex flex-col items-center">
              <div className="w-full bg-[#627446] text-white p-6 rounded-xl text-center shadow-sm">
                <span className="text-3xl sm:text-4xl font-bold font-mono block">↑100%</span>
              </div>
              <p className="text-xs sm:text-sm font-mono font-medium text-foreground/75 text-center leading-relaxed max-w-xs">
                Cobertura e integración continua en escuelas, centros comunitarios y telemedicina regional.
              </p>
            </div>
          </div>

          {/* Card 3: Resultados Compartidos (Editorial Text Box) */}
          <div className="bg-[#F3EFEC] dark:bg-[#111827] p-8 sm:p-9 rounded-2xl border border-[#E0DBCF] dark:border-border/60 flex flex-col justify-between shadow-sm">
            {/* Top Category Icon & Title */}
            <div className="text-center mb-8">
              <Sparkles className="w-8 h-8 text-[#516337] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#233215] dark:text-foreground tracking-tight">
                Resultados Compartidos
              </h3>
            </div>

            {/* Editorial Summary Content */}
            <div className="my-auto p-4 text-center">
              <p className="text-sm sm:text-base text-foreground/85 font-medium leading-relaxed">
                Desarrollo territorial equitativo, mayor resiliencia comunitaria y fortalecimiento continuo de capacidades locales en La Paz sin asistencialismo pasivo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
