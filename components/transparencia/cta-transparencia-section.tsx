'use client'

import AudienceSection, { AudienceItem } from '@/components/ui/audience-section'
import { Mail, HandHeart } from 'lucide-react'

const opcionesContacto: AudienceItem[] = [
  {
    number: '01',
    icon: Mail,
    title: 'Consultas por Correo',
    description: 'Envía tus preguntas sobre estados financieros o informes programáticos a info@fundacionjawira.org.',
  },
  {
    number: '02',
    icon: HandHeart,
    title: 'Colaboración & Alianzas',
    description: 'Explora opciones para apoyar directamente el Centro Integral JAWIRA o sumar a tu institución como aliada.',
  },
]

export default function CtaTransparenciaSection() {
  return (
    <AudienceSection
      id="cta-transparencia"
      eyebrow="Diálogo Abierto"
      title="¿Tienes dudas o deseas información adicional?"
      description="La transparencia también significa estar abiertos al diálogo constante. Estamos a tu disposición para brindar detalles sobre la gestión de nuestros recursos."
      ctaButtonText="CONTACTAR A LA FUNDACIÓN"
      ctaButtonHref="/contacto"
      items={opcionesContacto}
    />
  )
}

