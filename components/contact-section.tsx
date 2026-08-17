"use client"

import React, { useState } from "react"
import { JawiraButton } from "@/components/ui/jawira-button"
import { Map, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map"
import { MapPin, CheckCircle2 } from "lucide-react"

interface ContactSectionProps {
  isStandalone?: boolean
  showMap?: boolean
}

export default function ContactSection({ isStandalone = false, showMap = false }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section
      data-header-theme="dark"
      className={`relative ${isStandalone ? "py-16 md:py-24" : "py-24 md:py-32"} bg-[#0D241C] text-white overflow-hidden`}
    >
      {/* Subtle organic background ambient glow */}
      <div className="absolute inset-0 bg-radial from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Minimalist Info */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light tracking-tight leading-none text-white">
                Contacto
              </h2>
            </div>

            <div className="space-y-8 font-mono text-xs sm:text-sm tracking-widest uppercase text-white/80 leading-relaxed">
              <div className="space-y-1">
                <p className="text-[10px] text-white/50 tracking-[0.25em]">CORREO ELECTRÓNICO</p>
                <a 
                  href="mailto:fundacion.jawira@gmail.com" 
                  className="hover:text-white transition-colors block text-white font-medium"
                >
                  FUNDACION.JAWIRA@GMAIL.COM
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-white/50 tracking-[0.25em]">TELÉFONO / WHATSAPP</p>
                <a 
                  href="tel:+59164208172" 
                  className="hover:text-white transition-colors block text-white font-medium"
                >
                  +591 64208172
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-white/50 tracking-[0.25em]">DIRECCIÓN</p>
                <p className="text-white font-medium leading-normal">
                  Z. GRAN PODER, C. JOSE ASTETE, N° 104<br />
                  LA PAZ, BOLIVIA
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <p className="text-[10px] text-white/40 tracking-[0.25em]">HORARIOS DE ATENCIÓN</p>
                <p className="text-white/70 text-xs font-medium">
                  LUNES A VIERNES: 9:00 – 18:00 <br />
                  SÁBADOS: 9:00 – 13:00
                </p>
              </div>

              {/* Map Preview when enabled */}
              {showMap && (
                <div className="pt-2">
                  <div className="rounded-2xl overflow-hidden h-[200px] sm:h-[220px] relative border border-white/15 shadow-2xl bg-black/20">
                    <Map
                      viewport={{
                        center: [-68.14210001210378, -16.50149341510601],
                        zoom: 15,
                      }}
                      theme="dark"
                      className="absolute inset-0"
                    >
                      <MapMarker
                        longitude={-68.14210001210378}
                        latitude={-16.50149341510601}
                      >
                        <MarkerContent>
                          <div className="w-9 h-9 rounded-full bg-[#50AA1E] text-white shadow-xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 border-2 border-white/80">
                            <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
                          </div>
                        </MarkerContent>
                        <MarkerPopup className="bg-[#0D241C] text-white border-white/20 w-max shadow-2xl rounded-xl p-3">
                          <p className="text-xs font-semibold text-white">
                            Fundación JAWIRA<br/>
                            <span className="text-white/70 font-mono text-[10px]">
                              Z. Gran Poder, C. Jose Astete, N° 104
                            </span>
                          </p>
                        </MarkerPopup>
                      </MapMarker>
                    </Map>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Form matching reference */}
          <div className="lg:col-span-7 pt-4 lg:pt-2">
            {isSubmitted ? (
              <div className="py-16 px-8 rounded-3xl bg-white/5 border border-white/10 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#50AA1E]/20 text-[#50AA1E] mx-auto flex items-center justify-center border border-[#50AA1E]/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-white tracking-tight">¡Mensaje enviado con éxito!</h3>
                  <p className="text-sm font-light text-white/70 max-w-md mx-auto leading-relaxed">
                    Gracias por comunicarte con la Fundación JAWIRA. Nos pondremos en contacto contigo a la brevedad.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ firstName: "", lastName: "", email: "", message: "" })
                    }}
                    className="font-mono text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Row 1: Nombre and Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                  <div className="space-y-2">
                    <label 
                      htmlFor="contact-first-name" 
                      className="block font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80"
                    >
                      NOMBRE
                    </label>
                    <input
                      id="contact-first-name"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 focus:border-white text-white py-2.5 px-0 text-base font-sans focus:outline-none transition-colors duration-200 rounded-none shadow-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="contact-last-name" 
                      className="block font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80"
                    >
                      APELLIDO
                    </label>
                    <input
                      id="contact-last-name"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 focus:border-white text-white py-2.5 px-0 text-base font-sans focus:outline-none transition-colors duration-200 rounded-none shadow-none"
                    />
                  </div>
                </div>

                {/* Row 2: Correo Electrónico */}
                <div className="space-y-2">
                  <label 
                    htmlFor="contact-email-input" 
                    className="block font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80"
                  >
                    CORREO ELECTRÓNICO
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/30 focus:border-white text-white py-2.5 px-0 text-base font-sans focus:outline-none transition-colors duration-200 rounded-none shadow-none"
                  />
                </div>

                {/* Row 3: Mensaje */}
                <div className="space-y-2">
                  <label 
                    htmlFor="contact-message-input" 
                    className="block font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/80"
                  >
                    ¿CÓMO PODEMOS AYUDARTE?
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/30 focus:border-white text-white py-2.5 px-0 text-base font-sans focus:outline-none transition-colors duration-200 resize-none rounded-none shadow-none"
                  />
                </div>

                {/* Submit Button using JawiraButton */}
                <div className="pt-4">
                  <JawiraButton
                    type="submit"
                    variant="white"
                    size="md"
                    bullets
                    className="w-full sm:w-auto"
                  >
                    ENVIAR
                  </JawiraButton>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}


