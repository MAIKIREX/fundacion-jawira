import Header from '@/components/header'
import Footer from '@/components/footer'
import TransparenciaHeroSection from '@/components/transparencia/transparencia-hero-section'
import CompromisoSection from '@/components/transparencia/compromiso-section'
import PresupuestoSection from '@/components/transparencia/presupuesto-section'
import FuentesFinanciamientoSection from '@/components/transparencia/fuentes-financiamiento-section'
import InformesDocumentosSection from '@/components/transparencia/informes-documentos-section'
import EvaluacionSeguimientoSection from '@/components/transparencia/evaluacion-seguimiento-section'
import PoliticasPrincipiosSection from '@/components/transparencia/politicas-principios-section'
import CtaTransparenciaSection from '@/components/transparencia/cta-transparencia-section'

export const metadata = {
  title: 'Transparencia | Fundación JAWIRA',
  description: 'Transparencia y rendición de cuentas de la Fundación JAWIRA. Información sobre presupuesto, financiamiento, informes y evaluación.',
}

export default function TransparenciaPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <TransparenciaHeroSection />
      <CompromisoSection />
      <PresupuestoSection />
      <FuentesFinanciamientoSection />
      <InformesDocumentosSection />
      <EvaluacionSeguimientoSection />
      <PoliticasPrincipiosSection />
      <CtaTransparenciaSection />
      <Footer />
    </main>
  )
}

