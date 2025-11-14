import Header from '@/components/header'
import Footer from '@/components/footer'
import FundacionHeroSection from '@/components/fundacion/fundacion-hero-section'
import SignificadoJawiraSection from '@/components/fundacion/significado-jawira-section'
import MisionVisionSection from '@/components/fundacion/mision-vision-section'
import ValoresSection from '@/components/fundacion/valores-section'
import PrincipiosSection from '@/components/fundacion/principios-section'
import EnfoqueSection from '@/components/fundacion/enfoque-section'
import DondeTrabajamoSection from '@/components/fundacion/donde-trabajamos-section'
import EquipoAliadosSection from '@/components/fundacion/equipo-aliados-section'

export default function Fundacion() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FundacionHeroSection />
      <SignificadoJawiraSection />
      <MisionVisionSection />
      <ValoresSection />
      <PrincipiosSection />
      <EnfoqueSection />
      <DondeTrabajamoSection />
      <EquipoAliadosSection />
      <Footer />
    </main>
  )
}
