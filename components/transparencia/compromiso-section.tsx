'use client'

import IntegralCenterSection from '@/components/integral-center-section'

export default function CompromisoSection() {
  return (
    <IntegralCenterSection
      id="compromiso"
      tagline="Principio Rector"
      title="Nuestro compromiso con la transparencia"
      description1="La Fundación JAWIRA se guía por principios fundamentales de integridad, responsabilidad social y rendición de cuentas programática y financiera."
      description2="La transparencia no es solo financiera, sino también programática: nos comprometemos a informar con claridad qué hacemos, cómo lo hacemos y qué resultados medibles generamos."
      badges={["Integridad Social", "Transparencia Programática", "Confianza Comunitaria"]}
      buttonText="Conocer Presupuesto Abierto"
      buttonHref="#presupuesto"
      imageSrc="/volunteers-working-together-community-teamwork.png"
      imagePosition="right"
    />
  )
}

