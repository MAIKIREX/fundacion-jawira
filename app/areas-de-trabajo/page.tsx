import Header from '@/components/header'
import Footer from '@/components/footer'
import AreasHeroSection from '@/components/areas/areas-hero-section'
import AreasIntroductionSection from '@/components/areas/areas-introduction-section'
import TechnologySection from '@/components/areas/technology-section'
import EducationSection from '@/components/areas/education-section'
import HealthSection from '@/components/areas/health-section'
import IntegratedApproachSection from '@/components/areas/integrated-approach-section'
import AreasCtaSection from '@/components/areas/areas-cta-section'

export default function AreasDeTrabajo() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AreasHeroSection />
      <AreasIntroductionSection />
      <TechnologySection />
      <EducationSection />
      <HealthSection />
      <IntegratedApproachSection />
      <AreasCtaSection />
      <Footer />
    </main>
  )
}
