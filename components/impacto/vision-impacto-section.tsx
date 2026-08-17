'use client'

import IntegralCenterSection from '@/components/integral-center-section'

export default function VisionImpactoSection() {
  return (
    <IntegralCenterSection
      id="vision-impacto"
      tagline="Visión de Impacto"
      title="Impacto social real, medible y sostenible"
      description1="La Fundación JAWIRA busca generar un impacto social real, medible y sostenible en el Departamento de La Paz. Nuestro trabajo se orienta hacia poblaciones vulnerables, especialmente niñas, niños, adolescentes y mujeres que enfrentan brechas significativas en acceso a tecnología, educación y servicios de salud."
      description2="No trabajamos en sectores aislados. Nuestro enfoque es sistémico e integrado: la tecnología sirve para potenciar la educación y la salud; la educación fortalece el uso responsable de la innovación; y la salud es la base fundamental para el desarrollo humano."
      badges={["Foco en La Paz", "Enfoque Sistémico", "Sinergias Integradas"]}
      buttonText="Conocer Cobertura Territorial"
      buttonHref="#cobertura-territorial"
      imageSrc="/community-development-people-working-together-bolivia.png"
      imagePosition="right"
    />
  )
}

