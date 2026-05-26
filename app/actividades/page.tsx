import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ActividadesHeroSection from '@/components/actividades/actividades-hero-section'
import ActividadesListSection from '@/components/actividades/actividades-list-section'

export const metadata: Metadata = {
  title: 'Actividades',
  description: 'Conoce los encuentros, talleres y eventos organizados por Fundación Jawira para fortalecer la participación ciudadana y el desarrollo comunitario en Bolivia.',
}

export default function Actividades() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ActividadesHeroSection />
      <ActividadesListSection />
      <Footer />
    </main>
  )
}
