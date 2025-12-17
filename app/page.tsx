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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <AxesSection />
      <IntegralCenterSection />
      <ImpactSection />
      <SupportSection />
      <QuieroApoyarSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
