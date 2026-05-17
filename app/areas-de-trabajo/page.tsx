import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AreasHeroSection from '@/components/areas/areas-hero-section'
import AreasIntroductionSection from '@/components/areas/areas-introduction-section'
import TechnologySection from '@/components/areas/technology-section'
import EducationSection from '@/components/areas/education-section'
import HealthSection from '@/components/areas/health-section'
import IntegratedApproachSection from '@/components/areas/integrated-approach-section'
import AreasCtaSection from '@/components/areas/areas-cta-section'
import { PinnedSection } from "@/components/ui/pinned-section"

export const metadata: Metadata = {
  title: 'Áreas de Trabajo',
  description: 'Descubre nuestros 3 ejes principales: Tecnología Productiva, Educación Integral y Salud Preventiva.',
}

export default function AreasDeTrabajo() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <PinnedSection zIndex={1}>
        <AreasHeroSection />
      </PinnedSection>

      <PinnedSection zIndex={2}>
        <AreasIntroductionSection />
      </PinnedSection>

      <PinnedSection zIndex={3}>
        <TechnologySection />
      </PinnedSection>

      <PinnedSection zIndex={4}>
        <EducationSection />
      </PinnedSection>

      <PinnedSection zIndex={5}>
        <HealthSection />
      </PinnedSection>

      <PinnedSection zIndex={6}>
        <IntegratedApproachSection />
      </PinnedSection>

      <PinnedSection zIndex={7}>
        <AreasCtaSection />
      </PinnedSection>

      <div style={{ position: "relative", zIndex: 8 }}>
        <Footer />
      </div>
    </main>
  )
}
