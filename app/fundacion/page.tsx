import { Metadata } from 'next'
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
import { PinnedSection } from "@/components/ui/pinned-section"

export const metadata: Metadata = {
  title: 'La Fundación',
  description: 'Conoce la historia, misión, visión y el equipo detrás de la Fundación JAWIRA. Trabajamos por el desarrollo integral en Bolivia.',
}

export default function Fundacion() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <PinnedSection zIndex={1}>
        <FundacionHeroSection />
      </PinnedSection>

      <PinnedSection zIndex={2}>
        <SignificadoJawiraSection />
      </PinnedSection>

      <PinnedSection zIndex={3}>
        <MisionVisionSection />
      </PinnedSection>

      <PinnedSection zIndex={4}>
        <ValoresSection />
      </PinnedSection>

      <PinnedSection zIndex={5}>
        <PrincipiosSection />
      </PinnedSection>

      <PinnedSection zIndex={6}>
        <EnfoqueSection />
      </PinnedSection>

      <PinnedSection zIndex={7}>
        <DondeTrabajamoSection />
      </PinnedSection>

      <PinnedSection zIndex={8}>
        <EquipoAliadosSection />
      </PinnedSection>

      <div style={{ position: "relative", zIndex: 9 }}>
        <Footer />
      </div>
    </main>
  )
}
