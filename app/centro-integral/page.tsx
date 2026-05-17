import { Metadata } from 'next'
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
import { PinnedSection } from "@/components/ui/pinned-section"

export const metadata: Metadata = {
  title: 'Centro Integral JAWIRA',
  description: 'Conoce nuestro Centro Integral Comunitario, un espacio de encuentro y transformación para la educación, salud y tecnología en La Paz.',
}

export default function CentroIntegralPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <PinnedSection zIndex={1}>
        <CentroHeroSection />
      </PinnedSection>

      <PinnedSection zIndex={2}>
        <WhatIsCentroSection />
      </PinnedSection>

      <PinnedSection zIndex={3}>
        <ComponentesSection />
      </PinnedSection>

      <PinnedSection zIndex={4}>
        <ServiciosSection />
      </PinnedSection>

      <PinnedSection zIndex={5}>
        <MethodologySection />
      </PinnedSection>

      <PinnedSection zIndex={6}>
        <ResultadosSection />
      </PinnedSection>

      <PinnedSection zIndex={7}>
        <PublicoObjetivoSection />
      </PinnedSection>

      <PinnedSection zIndex={8}>
        <ArticulacionSection />
      </PinnedSection>

      <PinnedSection zIndex={9}>
        <CTASection />
      </PinnedSection>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Footer />
      </div>
    </main>
  )
}
