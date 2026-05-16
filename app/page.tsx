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
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <ScrollReveal yOffset={20}>
        <HeroSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <AxesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <IntegralCenterSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ImpactSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <SupportSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <QuieroApoyarSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal yOffset={20}>
        <Footer />
      </ScrollReveal>
    </main>
  )
}
