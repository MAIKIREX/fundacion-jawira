import Header from '@/components/header'
import Footer from '@/components/footer'
import ImpactoHeroSection from '@/components/impacto/impacto-hero-section'
import VisionImpactoSection from '@/components/impacto/vision-impacto-section'
import CoberturaTerritorialSection from '@/components/impacto/cobertura-territorial-section'
import PoblacionObjetivoSection from '@/components/impacto/poblacion-objetivo-section'
import HorizonteTemporalSection from '@/components/impacto/horizonte-temporal-section'
import IndicadoresEvaluacionSection from '@/components/impacto/indicadores-evaluacion-section'
import ResultadosEsperadosSection from '@/components/impacto/resultados-esperados-section'
import TransparenciaRendicionSection from '@/components/impacto/transparencia-rendicion-section'
import CtaImpactoSection from '@/components/impacto/cta-impacto-section'
import { PinnedSection } from "@/components/ui/pinned-section"

export const metadata = {
  title: 'Impacto y Cobertura',
  description: 'Descubre cómo la Fundación JAWIRA genera impacto social medible en el Departamento de La Paz, con cobertura en zonas urbanas, periurbanas y rurales.',
}

export default function ImpactoPage() {
  return (
    <main>
      <Header />
      
      <PinnedSection zIndex={1}>
        <ImpactoHeroSection />
      </PinnedSection>

      <PinnedSection zIndex={2}>
        <VisionImpactoSection />
      </PinnedSection>

      <PinnedSection zIndex={3}>
        <CoberturaTerritorialSection />
      </PinnedSection>

      <PinnedSection zIndex={4}>
        <PoblacionObjetivoSection />
      </PinnedSection>

      <PinnedSection zIndex={5}>
        <HorizonteTemporalSection />
      </PinnedSection>

      <PinnedSection zIndex={6}>
        <IndicadoresEvaluacionSection />
      </PinnedSection>

      <PinnedSection zIndex={7}>
        <ResultadosEsperadosSection />
      </PinnedSection>

      <PinnedSection zIndex={8}>
        <TransparenciaRendicionSection />
      </PinnedSection>

      <PinnedSection zIndex={9}>
        <CtaImpactoSection />
      </PinnedSection>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Footer />
      </div>
    </main>
  )
}
