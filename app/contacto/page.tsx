import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactoHero from "@/components/contacto/contacto-hero"
import ContactoInfo from "@/components/contacto/contacto-info"
import ContactoForm from "@/components/contacto/contacto-form"
import { PinnedSection } from "@/components/ui/pinned-section"

export const metadata = {
  title: "Contacto",
  description: "Contacta con la Fundación JAWIRA. Estamos aquí para escucharte y responder tus consultas.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-[100dvh] bg-background">
      <Header />

      <PinnedSection zIndex={1}>
        <ContactoHero />
      </PinnedSection>

      <PinnedSection zIndex={2}>
        {/* Contact Content */}
        <section className="py-24 md:py-40 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">
              <ContactoInfo />
              <ContactoForm />
            </div>
          </div>
        </section>
      </PinnedSection>

      <div style={{ position: "relative", zIndex: 3 }}>
        <Footer />
      </div>
    </main>
  )
}
