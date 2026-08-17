'use client'

import AudienceSection, { AudienceItem } from '@/components/ui/audience-section'
import { HandHeart, Gift, Handshake } from 'lucide-react'

const opcionesColaboracion: AudienceItem[] = [
  {
    number: '01',
    icon: HandHeart,
    title: 'Voluntariado Social',
    description: 'Comparte tu conocimiento y talento profesional en proyectos comunitarios de tecnología, educación o salud.',
  },
  {
    number: '02',
    icon: Gift,
    title: 'Donaciones Directas',
    description: 'Financia equipamiento técnico, aulas TICs, insumos de telemedicina y becas comunitarias en La Paz.',
  },
  {
    number: '03',
    icon: Handshake,
    title: 'Alianzas Estratégicas',
    description: 'Co-crea programas e iniciativas de impacto social sostenible junto a tu institución, universidad o empresa.',
  },
]

export default function CtaImpactoSection() {
  return (
    <AudienceSection
      id="cta-impacto"
      eyebrow="Colaboración & Alianzas"
      title="¿Quieres ser parte de este impacto?"
      description="Existen múltiples formas de sumar tus capacidades al desarrollo integral en Bolivia. Tu apoyo transforma directamente la vida de miles de familias."
      ctaButtonText="QUIERO APOYAR AHORA"
      ctaButtonHref="/contacto"
      items={opcionesColaboracion}
    />
  )
}

