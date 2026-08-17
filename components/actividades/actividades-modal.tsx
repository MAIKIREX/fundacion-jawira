'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  ExternalLink,
  Share2,
  Sparkles,
  MessageCircle,
} from 'lucide-react'
import { Actividad } from './actividades-data'

interface ActividadModalProps {
  actividad: Actividad | null
  onClose: () => void
}

export default function ActividadModal({ actividad, onClose }: ActividadModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (actividad) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [actividad])

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!actividad) return null

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: actividad.titulo,
          text: actividad.descripcion,
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('¡Enlace de la actividad copiado al portapapeles!')
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0B1E16]/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 lg:p-10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana de detalles"
          className="absolute right-5 top-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Poster / Flyer Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/20 shadow-2xl">
              <Image
                src={actividad.imagen}
                alt={`Afiche de ${actividad.titulo}`}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Quick Share and Status Pill */}
            <div className="flex items-center justify-between pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#68CE2B]/20 text-[#68CE2B] border border-[#68CE2B]/40">
                <Sparkles className="w-3.5 h-3.5" />
                {actividad.estado === 'proximo' ? 'Inscripciones Abiertas' : 'Evento Realizado'}
              </span>

              <button
                onClick={handleShare}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white transition-colors px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15"
              >
                <Share2 className="w-3.5 h-3.5" />
                Compartir
              </button>
            </div>
          </div>

          {/* Details & Information Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Tag & Title */}
            <div>
              <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[#68CE2B] mb-2">
                {actividad.categoriaTag} • {actividad.tipo}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {actividad.titulo}
              </h2>
              {actividad.subtitulo && (
                <p className="text-lg font-semibold text-[#68CE2B] mt-1">
                  {actividad.subtitulo}
                </p>
              )}
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              {actividad.descripcionCompleta || actividad.descripcion}
            </p>

            {/* Event Schedule & Location Box */}
            <div className="grid sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-white/[0.05] border border-white/15">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-[#68CE2B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/50">
                    Fecha
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {actividad.fecha}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#68CE2B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/50">
                    Horario
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {actividad.hora}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:col-span-2 pt-2.5 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#68CE2B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/50">
                    Lugar y Dirección
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {actividad.lugar}
                  </p>
                  {actividad.lugarDetalle && (
                    <p className="text-xs text-white/70 mt-0.5">
                      {actividad.lugarDetalle}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Ejes Temáticos */}
            {actividad.temas && actividad.temas.length > 0 && (
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-2.5">
                  Ejes Temáticos
                </p>
                <div className="flex flex-wrap gap-2">
                  {actividad.temas.map((tema) => (
                    <span
                      key={tema}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-white/90 border border-white/15"
                    >
                      {tema}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Expositores / Facilitadores */}
            {actividad.expositores && actividad.expositores.length > 0 && (
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-2.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#68CE2B]" />
                  Expositores & Facilitadores
                </p>
                <div className="space-y-2">
                  {actividad.expositores.map((exp) => (
                    <div
                      key={exp.nombre}
                      className="p-3 rounded-xl bg-white/[0.05] border border-white/15"
                    >
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {exp.nombre}
                      </p>
                      <p className="text-xs text-white/70 mt-0.5">
                        {exp.cargo} {exp.institucion ? `— ${exp.institucion}` : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Incluye */}
            {actividad.incluye && actividad.incluye.length > 0 && (
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-2.5">
                  El evento incluye
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {actividad.incluye.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-white/85 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#68CE2B] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action CTAs */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
              {actividad.registroUrl ? (
                <a
                  href={actividad.registroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#68CE2B] hover:bg-[#58b824] text-[#0A2850] text-xs font-mono font-black tracking-wider uppercase shadow-lg shadow-[#68CE2B]/30 hover:scale-[1.02] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Formulario de Inscripción
                </a>
              ) : (
                <a
                  href={`https://wa.me/59164208172?text=Hola%20Fundaci%C3%B3n%20Jawira,%20deseo%20inscribirme%20y%20conocer%20m%C3%A1s%20detalles%20de%20la%20actividad:%20${encodeURIComponent(actividad.titulo)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-lg hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inscribirse por WhatsApp
                </a>
              )}

              {actividad.ubicacionUrl && (
                <a
                  href={actividad.ubicacionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold tracking-wider uppercase border border-white/20 transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#68CE2B]" />
                  Ver Ubicación en Mapa
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
