'use client'

import AudienceSection, { AudienceItem } from '@/components/ui/audience-section'
import { Globe, Building2, Heart, Package } from 'lucide-react'

const fuentesItems: AudienceItem[] = [
  {
    number: '01',
    icon: Globe,
    title: 'Cooperación Internacional',
    description: 'Convenios con organismos multilaterales y fundaciones internacionales comprometidas con el desarrollo humano sostenible.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Instituciones Públicas y Privadas',
    description: 'Proyectos colaborativos de responsabilidad social y co-financiamiento para infraestructura técnica en educación y salud.',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Donaciones de Personas Naturales',
    description: 'Contribuciones voluntarias y recurrentes de personas que creen firmemente en la equidad de oportunidades en Bolivia.',
  },
  {
    number: '04',
    icon: Package,
    title: 'Aportes en Especie & Tecnología',
    description: 'Equipamiento de laboratorios, licencias de software, infraestructura de conectividad y suministros médicos.',
  },
]

export default function FuentesFinanciamientoSection() {
  return (
    <AudienceSection
      id="fuentes-financiamiento"
      eyebrow="Diversificación de Recursos"
      title="Fuentes de financiamiento"
      description="Buscamos recursos a través de múltiples canales éticos y transparentes para garantizar una sostenibilidad operativa a tres años (2026–2029)."
      items={fuentesItems}
    />
  )
}

