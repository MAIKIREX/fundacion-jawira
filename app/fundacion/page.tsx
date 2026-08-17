import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FundacionHeroSection from '@/components/fundacion/fundacion-hero-section'
import SignificadoJawiraSection from '@/components/fundacion/significado-jawira-section'
import MisionVisionSection from '@/components/fundacion/mision-vision-section'
import ValoresSection from '@/components/fundacion/valores-section'
import PrincipiosSection from '@/components/fundacion/principios-section'
import EquipoAliadosSection from '@/components/fundacion/equipo-aliados-section'

export const metadata: Metadata = {
  title: 'La Fundación',
  description: 'Conoce la historia, misión, visión y el equipo detrás de la Fundación JAWIRA. Trabajamos por el desarrollo integral en Bolivia.',
}

export default function Fundacion() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FundacionHeroSection />
      <SignificadoJawiraSection />
      <MisionVisionSection />
      <ValoresSection />
      <PrincipiosSection />
      <EquipoAliadosSection />
      <Footer />
    </main>
  )
}


