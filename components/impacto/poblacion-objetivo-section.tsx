'use client'

import AudienceSection, { AudienceItem } from '@/components/ui/audience-section'
import { Users, Zap, Home, BookOpen, Stethoscope } from 'lucide-react'

const poblacionItems: AudienceItem[] = [
  {
    number: '01',
    icon: Users,
    title: 'Niñas, niños y adolescentes',
    description: 'Acceso a educación de calidad, competencias digitales del siglo XXI y servicios de salud preventiva integral.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Mujeres y lideresas comunitarias',
    description: 'Empoderamiento socioeconómico mediante programas de formación técnica, salud y autonomía productiva.',
  },
  {
    number: '03',
    icon: Home,
    title: 'Comunidades rurales y periurbanas',
    description: 'Cierre efectivo de brechas de desarrollo mediante el acceso a tecnología sustentable y atención en telemedicina.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Instituciones educativas',
    description: 'Fortalecimiento docente, equipamiento de aulas digitales e integración de metodologías pedagógicas modernas.',
  },
  {
    number: '05',
    icon: Stethoscope,
    title: 'Centros y redes de salud',
    description: 'Ampliación de la capacidad instalada, digitalización de fichas médicas y teleconsultas en municipios de La Paz.',
  },
]

export default function PoblacionObjetivoSection() {
  return (
    <AudienceSection
      id="poblacion-objetivo"
      eyebrow="Grupos Beneficiarios"
      title="Población objetivo del impacto"
      description="El trabajo de la Fundación JAWIRA se enfoca prioritariamente en grupos vulnerables que requieren soluciones integrales para superar brechas en salud, educación y tecnología."
      items={poblacionItems}
    />
  )
}

