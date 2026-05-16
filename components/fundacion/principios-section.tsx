'use client'

import { useState } from 'react'
import { Shield, Heart } from 'lucide-react'

const tabs = [
  {
    id: 'ley045',
    icon: Shield,
    label: 'Ley 045',
    title: 'Ley Contra el Racismo y Toda Forma de Discriminación',
    principles: [
      {
        title: 'Igualdad',
        description: 'Garantizamos que todas las personas tienen iguales derechos y oportunidades, sin importar su origen étnico, género, edad o condición social.',
      },
      {
        title: 'No Discriminación',
        description: 'Rechazamos toda forma de discriminación y trabajamos activamente para eliminar barreras que afecten a poblaciones vulnerables.',
      },
      {
        title: 'Interculturalidad',
        description: 'Valoramos y respetamos la diversidad cultural, lingüística y de cosmovisiones de los pueblos originarios y comunidades.',
      },
      {
        title: 'Respeto a la Diversidad',
        description: 'Reconocemos que la diversidad es una fortaleza que enriquece nuestras acciones y visión institucional.',
      },
    ],
  },
  {
    id: 'ley348',
    icon: Heart,
    label: 'Ley 348',
    title: 'Ley Integral contra la Violencia hacia las Mujeres',
    principles: [
      {
        title: 'Vida Libre de Violencia',
        description: 'Trabajamos para garantizar que todas las mujeres puedan vivir sin violencia física, psicológica, sexual o patrimonial.',
      },
      {
        title: 'Equidad de Género',
        description: 'Promovemos la igualdad de derechos y oportunidades entre hombres y mujeres en todos nuestros proyectos.',
      },
      {
        title: 'Cultura de Paz',
        description: 'Fomentamos relaciones respetuosas, dialógicas y libres de violencia en todas las comunidades con las que trabajamos.',
      },
      {
        title: 'Respeto y Dignidad',
        description: 'Reconocemos la dignidad inherente de todas las personas y el derecho al trato respetuoso y sin discriminación.',
      },
    ],
  },
]

export default function PrincipiosSection() {
  const [activeTab, setActiveTab] = useState('ley045')
  const activeData = tabs.find(t => t.id === activeTab)!

  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
            Marco normativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
            Principios institucionales
          </h2>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            Alineados con la normativa boliviana y el compromiso con los derechos humanos.
          </p>
        </div>

        {/* Custom tab switcher */}
        <div className="flex gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-background text-muted-foreground hover:bg-background/80 border border-border/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="bg-background rounded-2xl border border-border/60 overflow-hidden">
          <div className="p-8 md:p-10 border-b border-border/60">
            <h3 className="text-xl font-bold text-primary tracking-tight">
              {activeData.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border/40">
            {activeData.principles.map((principle) => (
              <div key={principle.title} className="bg-background p-8 md:p-10 space-y-3">
                <h4 className="text-base font-semibold text-primary tracking-tight">
                  {principle.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
