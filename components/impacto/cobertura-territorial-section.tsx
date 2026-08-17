'use client'

import HealthSection from '@/components/areas/health-section'
import { Building2, Home, Trees } from 'lucide-react'

const coberturaRows = [
  {
    id: 'zonas-urbanas',
    metric: '01',
    title: 'ZONAS URBANAS',
    description: '~2.100.000 habitantes en la mancha urbana de La Paz y El Alto con enfoque en infraestructura educativa y digital.',
    icon: Building2,
    href: '#cobertura-territorial',
  },
  {
    id: 'zonas-periurbanas',
    metric: '02',
    title: 'ZONAS PERIURBANAS',
    description: '~400.000 personas en distritos periurbanos de rápida expansión que requieren atención médica preventiva y TICs.',
    icon: Home,
    href: '#cobertura-territorial',
  },
  {
    id: 'zonas-rurales',
    metric: '03',
    title: 'ZONAS RURALES',
    description: '~375.000 personas en municipios rurales del departamento beneficiadas con soluciones de telemedicina y tecnología productiva.',
    icon: Trees,
    href: '#cobertura-territorial',
  },
]

export default function CoberturaTerritorialSection() {
  return (
    <HealthSection
      id="cobertura-territorial"
      eyebrow="Alcance Geográfico"
      title="Cobertura territorial en La Paz."
      description="La Fundación JAWIRA tiene su sede en La Paz y trabaja con un modelo piloto enfocado en articular áreas urbanas, periurbanas y rurales para un impacto de ~2.8M de personas."
      imageSrc="/urban-rural-landscape-bolivia-coverage-areas-map.png"
      imageAlt="Cobertura Territorial La Paz"
      imageBadge="COBERTURA DEPARTAMENTO DE LA PAZ — 2.8M HABITANTES"
      rows={coberturaRows}
      reverse={true}
    />
  )
}

