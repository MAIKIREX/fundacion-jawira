'use client'

import IntegralCenterSection from '@/components/integral-center-section'

export default function WhatIsCentroSection() {
  return (
    <IntegralCenterSection
      imagePosition="right"
      tagline="Proyecto Transformador · La Paz"
      title="¿Qué es el Centro Integral JAWIRA?"
      description1="EL CENTRO INTEGRAL JAWIRA ES UN PROYECTO TRANSFORMADOR CREADO POR LA FUNDACIÓN JAWIRA PARA ARTICULAR, EN UN MISMO LUGAR, SERVICIOS DE TECNOLOGÍA PRODUCTIVA, EDUCACIÓN DE CALIDAD Y ATENCIÓN INTEGRAL EN SALUD PREVENTIVA."
      description2="UN ESPACIO FÍSICO Y DIGITAL DISEÑADO PARA BRINDAR ATENCIÓN INTEGRAL A POBLACIONES URBANAS, PERIURBANAS Y RURALES DEL DEPARTAMENTO DE LA PAZ COMO UN MODELO PILOTO REPLICABLE EN BOLIVIA."
      badges={["Espacio físico y digital", "Modelo piloto", "Replicable a nivel nacional"]}
      buttonText="VER COMPONENTES Y SERVICIOS"
      buttonHref="#componentes"
      imageSrc="/urban-rural-landscape-bolivia-coverage-areas-map.png"
      imageAlt="Centro Integral JAWIRA - Cobertura y espacios de transformación"
    />
  )
}

