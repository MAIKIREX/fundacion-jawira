import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contacto | Fundación JAWIRA",
  description: "Contacta con la Fundación JAWIRA. Estamos aquí para escucharte y responder tus consultas.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#0D241C] text-white flex flex-col justify-between">
      <Header />
      <div className="pt-20 sm:pt-24 md:pt-28 flex-1">
        <ContactSection isStandalone showMap />
      </div>
      <Footer />
    </main>
  )
}

