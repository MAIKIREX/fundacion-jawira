import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AxesSection from "@/components/axes-section"
import IntegralCenterSection from "@/components/integral-center-section"
import ImpactSection from "@/components/impact-section"
import SupportSection from "@/components/support-section"
import QuieroApoyarSection from "@/components/quiero-apoyar-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { PinnedSection } from "@/components/ui/pinned-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PinnedSection zIndex={1}>
        <HeroSection />
      </PinnedSection>

      <PinnedSection zIndex={2}>
        <AboutSection />
      </PinnedSection>

      <AxesSection />

      <PinnedSection zIndex={4}>
        <IntegralCenterSection />
      </PinnedSection>

      <PinnedSection zIndex={5}>
        <ImpactSection />
      </PinnedSection>

      <PinnedSection zIndex={6}>
        <SupportSection />
      </PinnedSection>

      <PinnedSection zIndex={7}>
        <QuieroApoyarSection />
      </PinnedSection>

      <PinnedSection zIndex={8}>
        <ContactSection />
      </PinnedSection>

      <div style={{ position: "relative", zIndex: 9 }}>
        <Footer />
      </div>
    </main>
  )
}
