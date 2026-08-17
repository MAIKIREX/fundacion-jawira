'use client'

import AudienceSection, { AudienceItem } from '@/components/ui/audience-section'
import { Users, Heart, Home, Building } from 'lucide-react'

const publicos: AudienceItem[] = [
  {
    icon: Users,
    number: '01',
    title: 'Niñas, niños y adolescentes',
    description: 'Acceso a educación digital, formación en competencias del siglo XXI y servicios de salud preventiva.',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Mujeres y grupos vulnerables',
    description: 'Oportunidades de formación, empoderamiento socioeconómico y acceso a servicios de salud integral.',
  },
  {
    icon: Home,
    number: '03',
    title: 'Población urbana, periurbana y rural',
    description: 'Del Departamento de La Paz, con énfasis prioritario en comunidades con acceso limitado a servicios de desarrollo.',
  },
  {
    icon: Building,
    number: '04',
    title: 'Instituciones y organizaciones',
    description: 'Unidades educativas, centros de salud y organizaciones comunitarias que buscan fortalecer capacidades en territorio.',
  },
]

export default function PublicoObjetivoSection() {
  return (
    <AudienceSection
      id="a-quien-beneficia"
      eyebrow="Alcance Social"
      title="¿A quién beneficia el Centro Integral?"
      description="Nuestros servicios están diseñados para poblaciones específicas del Departamento de La Paz, priorizando comunidades vulnerables que requieren una atención integral en salud, educación y tecnología."
      items={publicos}
    />
  )
}


