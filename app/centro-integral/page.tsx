import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CentroHeroSection from '@/components/centro-integral/centro-hero-section'
import WhatIsCentroSection from '@/components/centro-integral/what-is-centro-section'
import ComponentesSection from '@/components/centro-integral/componentes-section'
import MethodologySection from '@/components/centro-integral/methodology-section'
import ResultadosSection from '@/components/centro-integral/resultados-section'
import PublicoObjetivoSection from '@/components/centro-integral/publico-objetivo-section'
import ArticulacionSection from '@/components/centro-integral/articulacion-section'
import CTASection from '@/components/centro-integral/cta-section'

export const metadata: Metadata = {
  title: 'Centro Integral JAWIRA',
  description: 'Conoce nuestro Centro Integral Comunitario, un espacio de encuentro y transformación para la educación, salud y tecnología en La Paz.',
}

export default function CentroIntegralPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <CentroHeroSection />
      <WhatIsCentroSection />
      <ComponentesSection />
      <MethodologySection />
      <ResultadosSection />
      <PublicoObjetivoSection />
      <ArticulacionSection />
      <CTASection />
      <Footer />
    </main>
  )
}


