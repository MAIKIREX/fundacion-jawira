'use client'

import React from 'react'
import { Zap, BookOpen, Heart, Layers } from 'lucide-react'
import EditorialSplitSection from '@/components/ui/editorial-split-section'

const axesRows = [
  {
    id: 'tecnologia',
    metric: '01',
    title: 'TECNOLOGÍA PRODUCTIVA',
    description: 'Soluciones tecnológicas para impulsar la producción, proteger el medio ambiente y cerrar la brecha digital.',
    icon: Zap,
    href: '#tecnologia'
  },
  {
    id: 'educacion',
    metric: '02',
    title: 'EDUCACIÓN INTEGRAL',
    description: 'Fortalecemos capacidades educativas y digitales para docentes, estudiantes y comunidades.',
    icon: BookOpen,
    href: '#educacion'
  },
  {
    id: 'salud',
    metric: '03',
    title: 'SALUD PREVENTIVA',
    description: 'Promovemos salud preventiva, telemedicina y soluciones digitales para acercar la atención.',
    icon: Heart,
    href: '#salud'
  },
  {
    id: 'sinergia',
    metric: '100%',
    title: 'SINERGIA MULTIDIMENSIONAL',
    description: 'Cada eje se fortalece con los otros, generando sinergias que multiplican el impacto y promueven el desarrollo sostenible desde una perspectiva unificada.',
    icon: Layers,
    href: '#tecnologia'
  }
]

export default function AreasIntroductionSection() {
  return (
    <EditorialSplitSection
      imageSrc="/contenido/WhatsApp Image 2026-07-16 at 8.52.08 PM.jpeg"
      imageAlt="Desarrollo Integral Fundación Jawira"
      imageBadge="Fotografía Oficial JAWIRA"
      eyebrow="Visión Holística"
      title="Tres ejes para un desarrollo integral"
      description="Fundación JAWIRA integra tecnología productiva, educación y salud de forma coordinada, no como áreas aisladas. Nuestro enfoque integral busca reducir brechas en comunidades urbanas, periurbanas y rurales del Departamento de La Paz."
      rows={axesRows}
      footnote="* CADA EJE POTENCIA A LOS DEMÁS EN SINERGIA MULTIDIMENSIONAL. MODELO HOLÍSTICO DE DESARROLLO FUNDACIÓN JAWIRA."
    />
  )
}
