import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import QuieroApoyarHeroSection from '@/components/quiero-apoyar/quiero-apoyar-hero-section'
import ModalidadesSection from '@/components/quiero-apoyar/modalidades-section'
import DestinoFondosSection from '@/components/quiero-apoyar/destino-fondos-section'
import CtaApoyoSection from '@/components/quiero-apoyar/cta-apoyo-section'

export const metadata: Metadata = {
  title: 'Quiero Apoyar | Fundación JAWIRA',
  description:
    'Descubre cómo puedes apoyar la misión de la Fundación JAWIRA. Donaciones, voluntariado y alianzas estratégicas para transformar comunidades en Bolivia.',
}

export default function QuieroApoyarPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <QuieroApoyarHeroSection />
      <ModalidadesSection />
      <DestinoFondosSection />
      <CtaApoyoSection />
      <Footer />
    </main>
  )
}
