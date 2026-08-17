'use client'

import AudienceSection, { AudienceItem } from '@/components/ui/audience-section'
import { HandHeart, Gift, Handshake } from 'lucide-react'

const opcionesApoyo: AudienceItem[] = [
  {
    number: '01',
    icon: HandHeart,
    title: 'Voluntariado',
    description: 'Aporta tu tiempo y talento profesional en alguna de las tres áreas estratégicas del Centro Integral.',
  },
  {
    number: '02',
    icon: Gift,
    title: 'Donaciones',
    description: 'Apoya el equipamiento de laboratorios, infraestructura técnica o becas de formación para comunidades.',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Alianzas Institucionales',
    description: 'Colabora como institución, universidad o empresa aliada con nuestros proyectos integrales de impacto social.',
  },
]

export default function CTASection() {
  return (
    <AudienceSection
      id="quiero-apoyar"
      eyebrow="Súmate al Proyecto"
      title="¿Quieres apoyar el Centro Integral JAWIRA?"
      description="Existen múltiples formas de ser parte de este proyecto transformador. Tu participación fortalece directamente nuestras iniciativas de tecnología, educación y salud en el Departamento de La Paz."
      ctaButtonText="QUIERO APOYAR AHORA"
      ctaButtonHref="/contacto"
      items={opcionesApoyo}
    />
  )
}

