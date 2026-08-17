'use client'

import ImpactSection, { ImpactCardItem } from '@/components/impact-section'

const resultadosItems: ImpactCardItem[] = [
  {
    number: "01",
    title: "Acceso a Salud & Telemedicina",
    subtitle: "Ampliación del acceso a servicios de salud preventiva y atención por telemedicina para comunidades urbanas, periurbanas y rurales de La Paz.",
    illustration: "tank-mixing",
    badgeLabel: "+100k",
  },
  {
    number: "02",
    title: "Reducción de Brechas Digitales",
    subtitle: "Disminución de la brecha digital y educativa mediante programas comunitarios de alfabetización y formación técnica continua.",
    illustration: "capsule-suspension",
  },
  {
    number: "03",
    title: "Soluciones Tecnológicas Adaptadas",
    subtitle: "Implementación y validación de herramientas digitales diseñadas específicamente para el contexto productivo y social local.",
    illustration: "nutrient-uptake",
  },
  {
    number: "04",
    title: "Fortalecimiento de Capacidades",
    subtitle: "Desarrollo del capital humano local mediante capacitaciones continuas a jóvenes, docentes y promotores comunitarios.",
    illustration: "tank-mixing",
  },
  {
    number: "05",
    title: "Articulación & Alianzas Locales",
    subtitle: "Consolidación de alianzas estratégicas con universidades, municipios y organizaciones locales para la sostenibilidad comunitaria.",
    illustration: "capsule-suspension",
  },
  {
    number: "06",
    title: "Modelo Piloto Replicable",
    subtitle: "Metodología validada en territorio lista para ser replicada e implementada en otros municipios y departamentos de Bolivia.",
    illustration: "nutrient-uptake",
  },
]

export default function ResultadosSection() {
  return (
    <ImpactSection
      tagline="Impacto proyectado"
      title="Resultados esperados"
      description="Seis resultados concretos, medibles y sostenibles que generará el Centro Integral JAWIRA como un modelo piloto replicable a nivel nacional."
      items={resultadosItems}
      background="sand"
    />
  )
}


