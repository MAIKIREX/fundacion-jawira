import Header from '@/components/header'
import Footer from '@/components/footer'
import CentroHeroSection from '@/components/centro-integral/centro-hero-section'
import WhatIsCentroSection from '@/components/centro-integral/what-is-centro-section'
import ComponentesSection from '@/components/centro-integral/componentes-section'
import ServiciosSection from '@/components/centro-integral/servicios-section'
import MethodologySection from '@/components/centro-integral/methodology-section'
import ResultadosSection from '@/components/centro-integral/resultados-section'
import PublicoObjetivoSection from '@/components/centro-integral/publico-objetivo-section'
import ArticulacionSection from '@/components/centro-integral/articulacion-section'
import CTASection from '@/components/centro-integral/cta-section'

export default function CentroIntegralPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CentroHeroSection />
      <WhatIsCentroSection />
      <ComponentesSection />
      <ServiciosSection />
      <MethodologySection />
      <ResultadosSection />
      <PublicoObjetivoSection />
      <ArticulacionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
