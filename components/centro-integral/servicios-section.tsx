'use client'

import { useState } from 'react'
import { Zap, BookOpen, Heart } from 'lucide-react'

const tabs = [
  {
    id: 'tecnologia',
    label: 'Tecnología',
    icon: Zap,
    title: 'Servicios de Tecnología Productiva',
    servicios: [
      'Laboratorios de innovación tecnológica',
      'Desarrollo de herramientas para minería, agropecuaria e industria',
      'Plataformas y soluciones digitales para educación y salud',
      'Asesoría y acompañamiento técnico en implementación de tecnología',
      'Diseño e iteración de prototipos adaptados al contexto local'
    ],
  },
  {
    id: 'educacion',
    label: 'Educación',
    icon: BookOpen,
    title: 'Servicios de Educación',
    servicios: [
      'Alfabetización digital básica y avanzada',
      'Programas de formación docente en TIC',
      'Diplomados, cursos y talleres sobre competencias digitales',
      'Acompañamiento a unidades educativas y organizaciones sociales',
      'Contenidos educativos abiertos y accesibles'
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    icon: Heart,
    title: 'Servicios de Salud',
    servicios: [
      'Consultas presenciales y telemedicina',
      'Programas de prevención (nutrición, salud mental, salud sexual y reproductiva)',
      'Capacitación de promotores/as comunitarios de salud',
      'Uso de plataformas digitales para seguimiento y orientación',
      'Servicios de orientación en salud preventiva'
    ],
  },
]

export default function ServiciosSection() {
  const [activeTab, setActiveTab] = useState('tecnologia')
  const activeData = tabs.find(t => t.id === activeTab)!

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Oferta de servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Servicios del Centro Integral
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Acceso a servicios especializados en cada una de nuestras áreas de trabajo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">

          {/* Left: Tab Switcher */}
          <div className="flex lg:flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold text-left transition-all w-full ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted/40 text-muted-foreground hover:bg-muted/70 border border-border/40'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-xl font-bold text-primary tracking-tight mb-8">
              {activeData.title}
            </h3>

            <div className="space-y-0">
              {activeData.servicios.map((servicio, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 py-5 ${
                    i !== 0 ? 'border-t border-border/50' : ''
                  }`}
                >
                  <span className="text-xs font-bold text-muted-foreground/40 mt-0.5 w-6 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-base text-foreground/80 leading-relaxed">
                    {servicio}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
