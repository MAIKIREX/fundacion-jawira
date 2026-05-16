"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Briefcase, Building2, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion"

const teamMembers = [
  { nombre: "Lic. Jose Tambo", rol: "Director", area: "Presidente Ejecutivo", image: "/images/jose_tambo.png" },
  {
    nombre: "Ing. Tupac Lima Chuquimia",
    rol: "Coordinador de Proyectos",
    area: "Tecnología",
    image: "/images/tupac_lima.png",
  },
  { nombre: "Dr. Henrry Patty", rol: "Coordinador de Proyectos", area: "Salud", image: "/images/henrry_patty.png" },
  {
    nombre: "Abg. Angel Quispe",
    rol: "Coordinador Jurídico",
    area: "Secretario General",
    image: "/images/angel_quispe.png",
  },
  { nombre: "Dra. Ana Ramos", rol: "Responsable de Investigación", area: "Investigación", image: "" },
  { nombre: "Lic. Carlos Pinto", rol: "Coordinador Territorial", area: "Territorio", image: "" },
]

const allies = [
  { nombre: "Fundación Qamañani Arka", image: "/images/logo_1.png" },
  { nombre: "Aliado 2" },
  { nombre: "Aliado 3" },
  { nombre: "Aliado 4" },
  { nombre: "Aliado 5" },
  { nombre: "Aliado 6" },
]

// --- 3D CAROUSEL CONSTANTS ---
const ITEM_WIDTH = 280
const ITEM_HEIGHT = 420
const TOTAL_ITEMS = teamMembers.length
const THETA = 360 / TOTAL_ITEMS
const RADIUS = 380

function RingItem({ member, index, rotation, onClick }: any) {
  const baseAngle = index * THETA;
  
  const cardGlobalAngle = useTransform(rotation, (r: number) => {
    let angle = (r + baseAngle) % 360
    if (angle < 0) angle += 360
    if (angle > 180) angle -= 360
    return angle
  })
  
  // IMMERSIVE CYLINDER (Concave room): Z is completely inverted (-cos) and Y rotation faces inward (-a)
  const x = useTransform(cardGlobalAngle, (a) => Math.sin((a * Math.PI) / 180) * RADIUS)
  const z = useTransform(cardGlobalAngle, (a) => -Math.cos((a * Math.PI) / 180) * RADIUS)
  const rotateY = useTransform(cardGlobalAngle, (a) => -a)

  // Visibility logic: soften items as they approach the camera edges 
  const opacity = useTransform(cardGlobalAngle, [-90, -60, -20, 20, 60, 90], [0, 0.4, 1, 1, 0.4, 0])
  const pointerEvents = useTransform(cardGlobalAngle, (a) => Math.abs(a) < 70 ? "auto" : "none")

  // Curve shading: diminish brightness heavily on the sides to amplify depth
  const brightness = useTransform(cardGlobalAngle, [-90, -45, 0, 45, 90], [0.1, 0.5, 1.1, 0.5, 0.1])
  const filter = useTransform(brightness, (b) => `brightness(${b})`)

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 overflow-hidden shadow-2xl cursor-pointer rounded-2xl border border-border/60 bg-muted/20"
      style={{
        width: ITEM_WIDTH, height: ITEM_HEIGHT,
        translateX: "-50%", translateY: "-50%",
        x, z, rotateY, opacity, pointerEvents, filter,
        transformStyle: "preserve-3d"
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {member.image ? (
        <img 
          src={member.image} 
          className="w-full h-full object-cover pointer-events-none select-none opacity-80" 
          alt={member.nombre} 
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5">
          <Briefcase className="w-16 h-16 text-primary/30 mb-4" />
        </div>
      )}

      {/* Info Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent p-6 pt-16">
        <h3 className="text-foreground font-bold text-xl leading-tight tracking-tight">
          {member.nombre}
        </h3>
        <p className="text-foreground/70 text-sm mt-1">{member.rol}</p>
        <div className="mt-4">
          <span className="inline-block px-2.5 py-1 bg-foreground/10 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest uppercase text-foreground border border-foreground/10">
            {member.area}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function EquipoAliadosSection() {
  const rotation = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)
  const lastPanTime = useRef(0)

  const handlePanStart = () => { setIsDragging(true) }
  
  const handlePan = (e: any, info: PanInfo) => { 
    rotation.set(rotation.get() + info.delta.x * 0.25) 
  }
  
  const handlePanEnd = (e: any, info: PanInfo) => {
    setIsDragging(false)
    lastPanTime.current = Date.now()
    const targetRot = rotation.get() + info.velocity.x * 0.05
    animate(rotation, Math.round(targetRot / THETA) * THETA, { type: "spring", stiffness: 150, damping: 25 })
  }

  const handleItemClick = (index: number) => {
    if (Date.now() - lastPanTime.current < 200) return
    const currentRot = rotation.get()
    const targetBase = -(index * THETA)
    let delta = (targetBase - currentRot) % 360
    if (delta > 180) delta -= 360
    if (delta < -180) delta += 360
    animate(rotation, currentRot + delta, { type: "spring", stiffness: 150, damping: 25, mass: 0.9 })
  }

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- EQUIPO --- */}
        <div className="mb-20 md:mb-28">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Nuestro equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
              Conoce a nuestros profesionales
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              La Fundación JAWIRA cuenta con un equipo{" "}
              <span className="font-medium text-foreground">interdisciplinario</span> compuesto
              por profesionales en salud, educación, tecnología, gestión social e investigación.
              Arrastra o haz clic en las tarjetas para rotar.
            </p>
          </div>

          {/* 3D Carousel */}
          <div className="relative mx-auto w-full select-none overflow-hidden">
            <div className="relative h-[600px] md:h-[650px] flex items-center justify-center">

              <motion.div 
                className={`absolute inset-0 flex items-center justify-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{ perspective: 1100 }} 
                onPanStart={handlePanStart}
                onPan={handlePan}
                onPanEnd={handlePanEnd}
              >
                <div className="relative w-full h-full scale-[0.6] sm:scale-75 md:scale-100 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                  {teamMembers.map((member, idx) => (
                    <RingItem 
                      key={idx} 
                      member={member} 
                      index={idx} 
                      rotation={rotation} 
                      onClick={() => handleItemClick(idx)} 
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Fade overlays for the edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />
            </div>

            {/* Mobile instructions hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md text-foreground/70 text-xs font-medium pointer-events-none border border-border/60">
              <ChevronLeft className="w-4 h-4" />
              Desliza para explorar
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Coming soon note */}
          <div className="mt-8 p-5 bg-muted/40 rounded-xl border border-border/40">
            <p className="text-sm text-muted-foreground text-center">
              <span className="font-medium text-primary">Próximamente</span> ampliaremos la información de
              nuestro equipo directivo y técnico.{" "}
              <Link href="/contacto" className="font-medium text-secondary hover:underline">
                Contáctanos
              </Link>{" "}
              si te interesa conocer más detalles.
            </p>
          </div>
        </div>

        {/* --- ALIADOS --- */}
        <div className="pt-16 md:pt-20 border-t border-border">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">
              Red de colaboración
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mt-3">
              Aliados institucionales
            </h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              La Fundación JAWIRA trabaja en{" "}
              <span className="font-medium text-foreground">alianza estratégica</span> con instituciones
              públicas, privadas y comunitarias para amplificar nuestro impacto.
            </p>
          </div>

          {/* Allies grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {allies.map((ally) => (
              <div
                key={ally.nombre}
                className="h-24 flex items-center justify-center bg-muted/30 rounded-xl border border-border/40 hover:border-border hover:bg-muted/50 transition-colors px-4"
              >
                {ally.image ? (
                  <Image
                    src={ally.image}
                    alt={ally.nombre}
                    width={100}
                    height={50}
                    className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1.5">
                    <Building2 className="w-5 h-5 text-muted-foreground/40" />
                    <span className="text-[10px] text-muted-foreground/50 font-medium text-center leading-tight">
                      {ally.nombre}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Alliance CTA */}
          <div className="mt-10 p-5 bg-muted/40 rounded-xl border border-border/40">
            <p className="text-sm text-muted-foreground text-center">
              Si tu organización comparte nuestra visión,{" "}
              <Link href="/contacto" className="font-medium text-secondary hover:underline">
                contáctanos
              </Link>{" "}
              para explorar oportunidades de colaboración.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
