'use client'

import MechanismSection, { MechanismStep } from '@/components/ui/mechanism-section'
import {
  SearchCheck,
  PencilRuler,
  Building2,
  GraduationCap,
  Globe,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react'

const pasosData: MechanismStep[] = [
  {
    id: 'diagnostico',
    number: '01',
    title: 'Diagnóstico Participativo',
    fullDesc: 'Realizamos diagnósticos en territorio para identificar de forma precisa las prioridades en educación, salud y desarrollo tecnológico con la participación activa de autoridades locales y familias.',
    tag: 'Fase 01 · Inmersión Territorial',
    icon: SearchCheck,
  },
  {
    id: 'diseno',
    number: '02',
    title: 'Diseño de Proyectos Piloto',
    fullDesc: 'Formulamos soluciones técnicas sostenibles que articulan tecnología, formación y servicios de salud preventiva, adaptándose a las particularidades socioculturales del entorno.',
    tag: 'Fase 02 · Co-Diseño Técnico',
    icon: PencilRuler,
  },
  {
    id: 'infraestructura',
    number: '03',
    title: 'Adecuación de Infraestructura',
    fullDesc: 'Adecuamos e instalamos aulas TIC, módulos de telemedicina y laboratorios de innovación comunitaria con conectividad e infraestructura modular de alta calidad.',
    tag: 'Fase 03 · Equipamiento y TICs',
    icon: Building2,
  },
  {
    id: 'capacitacion',
    number: '04',
    title: 'Capacitación Continua',
    fullDesc: 'Formamos de manera continua a facilitadores, promotores de salud, docentes y jóvenes en competencias digitales, gestión de proyectos e innovación productiva.',
    tag: 'Fase 04 · Desarrollo de Talento',
    icon: GraduationCap,
  },
  {
    id: 'plataformas',
    number: '05',
    title: 'Plataformas Tecnológicas',
    fullDesc: 'Desplegamos herramientas digitales de apoyo para la gestión educativa y telemedicina comunitaria, diseñadas para operar con alta eficiencia en red.',
    tag: 'Fase 05 · Ecosistema Digital',
    icon: Globe,
  },
  {
    id: 'participacion',
    number: '06',
    title: 'Participación Comunitaria',
    fullDesc: 'Fomentamos el liderazgo comunitario y la gobernanza compartida para asegurar que la población sea copropietaria del Centro Integral y de sus resultados.',
    tag: 'Fase 06 · Gobernanza Social',
    icon: HeartHandshake,
  },
  {
    id: 'monitoreo',
    number: '07',
    title: 'Monitoreo y Evaluación',
    fullDesc: 'Evaluamos de forma sistemática los avances en salud, aprendizaje y adopción tecnológica para retroalimentar la metodología y escalar el modelo a nivel regional.',
    tag: 'Fase 07 · Escalabilidad e Impacto',
    icon: TrendingUp,
  },
]

export default function MethodologySection() {
  return (
    <MechanismSection
      id="como-funciona"
      eyebrow="Proceso de Implementación"
      title="¿Cómo funciona el Centro Integral?"
      description="Nuestra metodología articula siete fases clave para asegurar la viabilidad técnica, la sostenibilidad comunitaria y la calidad en cada intervención."
      steps={pasosData}
      footerBadgeText="Garantía de Sostenibilidad Comunitaria"
    />
  )
}



