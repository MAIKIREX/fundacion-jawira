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

export const metadata = {
  title: 'Impacto y Cobertura | Fundación JAWIRA',
  description: 'Descubre cómo la Fundación JAWIRA genera impacto social medible en el Departamento de La Paz, con cobertura en zonas urbanas, periurbanas y rurales.',
}

export default function ImpactoPage() {
  return (
    <main>
      <Header />
      <ImpactoHeroSection />
      <VisionImpactoSection />
      <CoberturaTerritorialSection />
      <PoblacionObjetivoSection />
      <HorizonteTemporalSection />
      <IndicadoresEvaluacionSection />
      <ResultadosEsperadosSection />
      <TransparenciaRendicionSection />
      <CtaImpactoSection />
      <Footer />
    </main>
  )
}
