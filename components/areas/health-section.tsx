'use client'

import React from 'react'
import { Heart, Activity, Stethoscope, ShieldPlus } from 'lucide-react'
import EditorialSplitSection, { MetricRowItem } from '@/components/ui/editorial-split-section'

export const defaultHealthRows: MetricRowItem[] = [
  {
    id: 'telemedicina-digital',
    metric: '01',
    title: 'TELEMEDICINA DIGITAL',
    description: 'Plataformas para consultas a distancia y acceso a servicios desde zonas remotas.',
    icon: Activity,
    href: '#salud'
  },
  {
    id: 'prevencion-bienestar',
    metric: '02',
    title: 'PREVENCIÓN Y BIENESTAR',
    description: 'Iniciativas en nutrición, salud mental, y estilos de vida saludables en comunidades.',
    icon: Heart,
    href: '#salud'
  },
  {
    id: 'capacitacion-comunitaria',
    metric: '03',
    title: 'CAPACITACIÓN COMUNITARIA',
    description: 'Formación continua en atención primaria y primeros auxilios para promotores locales.',
    icon: Stethoscope,
    href: '#salud'
  },
  {
    id: 'analisis-datos',
    metric: '04',
    title: 'ANÁLISIS DE DATOS EN SALUD',
    description: 'Herramientas para recolección que mejoran la toma de decisiones en salud pública.',
    icon: ShieldPlus,
    href: '#salud'
  }
]

export interface HealthSectionProps {
  id?: string
  imageSrc?: string
  imageAlt?: string
  imageBadge?: string
  eyebrow?: string
  title?: string
  description?: string
  rows?: MetricRowItem[]
  footnote?: string
  reverse?: boolean
  className?: string
}

export function HealthSection({
  id = 'salud',
  imageSrc = '/healthcare-wellness-doctors-prevention-medical.png',
  imageAlt = 'Salud Preventiva Fundación Jawira',
  imageBadge = 'FOTOGRAFÍA OFICIAL SALUD JAWIRA',
  eyebrow = 'Eje de Acción 03',
  title = 'Prevención de la salud comunitaria.',
  description = 'Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención médica en zonas urbanas, periurbanas y rurales.',
  rows = defaultHealthRows,
  footnote = '* EJE 03 — PREVENCIÓN, TELEMEDICINA Y BIENESTAR COMUNITARIO FUNDACIÓN JAWIRA.',
  reverse = false,
  className,
}: HealthSectionProps) {
  return (
    <div id={id} className={className}>
      <EditorialSplitSection
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        imageBadge={imageBadge}
        eyebrow={eyebrow}
        title={title}
        description={description}
        rows={rows}
        footnote={footnote}
        reverse={reverse}
      />
    </div>
  )
}

export default HealthSection
