"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface RiverFlowLinesProps {
  className?: string
  intensity?: number
}

export default function RiverFlowLines({ className = "", intensity = 1 }: RiverFlowLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!svgRef.current) return

    // Animación continua de flujo para las líneas con dasharray
    gsap.to(".river-stream-dash", {
      strokeDashoffset: -2000,
      duration: 25,
      repeat: -1,
      ease: "none",
    })

    gsap.to(".river-stream-dash-fast", {
      strokeDashoffset: -2000,
      duration: 16,
      repeat: -1,
      ease: "none",
    })

    // Ondulación sutil de respiración en la perspectiva
    gsap.to(".river-ribbon-group", {
      yPercent: 3,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Pulso de brillo en los nodos de energía
    gsap.to(".river-node", {
      scale: 1.4,
      opacity: 0.9,
      duration: 2.5,
      stagger: {
        each: 0.6,
        repeat: -1,
        yoyo: true,
      },
      ease: "power1.inOut",
    })
  }, { scope: containerRef })

  // Generamos una familia de 20 líneas de corriente (streamlines) que forman la superficie del río
  const numSurfaceLines = 22
  const surfaceLines = Array.from({ length: numSurfaceLines }, (_, i) => {
    const t = i / (numSurfaceLines - 1) // 0 a 1 (desde borde superior a borde inferior de la cinta)

    // Calculamos los puntos de control con perspectiva (estrecho en la distancia, ancho en el frente)
    // Coordenadas en viewBox de 1600 x 900
    
    // Ancho del río en cada etapa:
    // Inicio (horizonte arriba derecha): 35px
    // Curva 1: 70px
    // Curva 2: 130px
    // Curva 3: 240px
    // Desembocadura (frente abajo izquierda): 460px

    const spreadStart = (t - 0.5) * 45
    const spreadC1 = (t - 0.5) * 90
    const spreadC2 = (t - 0.5) * 160
    const spreadC3 = (t - 0.5) * 280
    const spreadEnd = (t - 0.5) * 520

    // Puntos de la curva basados en la geometría exacta de rio.png
    const x0 = 1580 + spreadStart * 0.4
    const y0 = 40 + spreadStart * 0.8

    const cp1x = 1380 + spreadC1 * 0.6
    const cp1y = 70 + spreadC1 * 0.9

    const cp2x = 1100 + spreadC1 * 0.8
    const cp2y = 170 + spreadC1 * 0.8

    const p1x = 1180 + spreadC1
    const p1y = 230 + spreadC1 * 0.6

    const cp3x = 1350 + spreadC2 * 0.8
    const cp3y = 330 + spreadC2 * 0.5

    const cp4x = 1200 + spreadC2 * 0.9
    const cp4y = 440 + spreadC2 * 0.7

    const p2x = 980 + spreadC2
    const p2y = 480 + spreadC2 * 0.8

    const cp5x = 720 + spreadC3 * 0.8
    const cp5y = 540 + spreadC3 * 0.9

    const cp6x = 520 + spreadEnd * 0.9
    const cp6y = 660 + spreadEnd * 0.8

    const xEnd = -80 + spreadEnd * 0.5
    const yEnd = 920 + spreadEnd

    const pathData = `M ${x0.toFixed(1)} ${y0.toFixed(1)} C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p1x.toFixed(1)} ${p1y.toFixed(1)} C ${cp3x.toFixed(1)} ${cp3y.toFixed(1)}, ${cp4x.toFixed(1)} ${cp4y.toFixed(1)}, ${p2x.toFixed(1)} ${p2y.toFixed(1)} C ${cp5x.toFixed(1)} ${cp5y.toFixed(1)}, ${cp6x.toFixed(1)} ${cp6y.toFixed(1)}, ${xEnd.toFixed(1)} ${yEnd.toFixed(1)}`

    // Variación de opacidad y color según posición en la cinta
    const isEdge = i === 0 || i === numSurfaceLines - 1
    const isCenter = Math.abs(t - 0.5) < 0.15
    const rawOpacity = isEdge ? 0.75 : 0.25 + Math.sin(t * Math.PI) * 0.45
    const opacity = Number(rawOpacity.toFixed(3))
    const strokeWidth = Number((isEdge ? 2.2 : 1.2 + (1 - Math.abs(t - 0.5) * 2) * 1.2).toFixed(3))

    return {
      id: `surface-${i}`,
      d: pathData,
      strokeWidth,
      opacity,
      isEdge,
      isCenter,
      isPulse: i % 4 === 0,
      isFast: i % 6 === 0,
      colorGradient: i % 3 === 0 ? "url(#riverGradientGreen)" : i % 2 === 0 ? "url(#riverGradientWhite)" : "url(#riverGradientCyan)",
    }
  })

  // Generamos 10 líneas de escarpa / relieve vertical para representar la pared 3D lateral de rio.png
  const numCliffLines = 12
  const cliffLines = Array.from({ length: numCliffLines }, (_, j) => {
    const vOffset = (j + 1) * 8.5 // Desplazamiento vertical hacia abajo

    // La pared lateral sigue la arista inferior del río
    const t = 1.0 // Borde inferior
    const spreadStart = (t - 0.5) * 45
    const spreadC1 = (t - 0.5) * 90
    const spreadC2 = (t - 0.5) * 160
    const spreadC3 = (t - 0.5) * 280
    const spreadEnd = (t - 0.5) * 520

    const x0 = 1580 + spreadStart * 0.4
    const y0 = 40 + spreadStart * 0.8 + vOffset * 0.4

    const cp1x = 1380 + spreadC1 * 0.6
    const cp1y = 70 + spreadC1 * 0.9 + vOffset * 0.5

    const cp2x = 1100 + spreadC1 * 0.8
    const cp2y = 170 + spreadC1 * 0.8 + vOffset * 0.6

    const p1x = 1180 + spreadC1
    const p1y = 230 + spreadC1 * 0.6 + vOffset * 0.7

    const cp3x = 1350 + spreadC2 * 0.8
    const cp3y = 330 + spreadC2 * 0.5 + vOffset * 0.8

    const cp4x = 1200 + spreadC2 * 0.9
    const cp4y = 440 + spreadC2 * 0.7 + vOffset * 0.9

    const p2x = 980 + spreadC2
    const p2y = 480 + spreadC2 * 0.8 + vOffset

    const cp5x = 720 + spreadC3 * 0.8
    const cp5y = 540 + spreadC3 * 0.9 + vOffset * 1.1

    const cp6x = 520 + spreadEnd * 0.9
    const cp6y = 660 + spreadEnd * 0.8 + vOffset * 1.2

    const xEnd = -80 + spreadEnd * 0.5
    const yEnd = 920 + spreadEnd + vOffset * 1.3

    const pathData = `M ${x0.toFixed(1)} ${y0.toFixed(1)} C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p1x.toFixed(1)} ${p1y.toFixed(1)} C ${cp3x.toFixed(1)} ${cp3y.toFixed(1)}, ${cp4x.toFixed(1)} ${cp4y.toFixed(1)}, ${p2x.toFixed(1)} ${p2y.toFixed(1)} C ${cp5x.toFixed(1)} ${cp5y.toFixed(1)}, ${cp6x.toFixed(1)} ${cp6y.toFixed(1)}, ${xEnd.toFixed(1)} ${yEnd.toFixed(1)}`

    const opacity = (1 - j / numCliffLines) * 0.45

    return {
      id: `cliff-${j}`,
      d: pathData,
      strokeWidth: 1.2,
      opacity,
    }
  })

  // Coordenadas para nodos de energía / estrellas fluviales a lo largo del cauce
  const riverNodes = [
    { cx: 1420, cy: 110, r: 4, color: "#50AA1E", label: "Innovación" },
    { cx: 1220, cy: 260, r: 5, color: "#EA9010", label: "Educación" },
    { cx: 1040, cy: 460, r: 5.5, color: "#50AA1E", label: "Salud" },
    { cx: 620, cy: 680, r: 6, color: "#FFFFFF", label: "Comunidad" },
  ]

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Resplandor ambiental de fondo */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(ellipse 65% 55% at 65% 45%, rgba(80, 170, 30, 0.18), transparent 70%), radial-gradient(ellipse 50% 50% at 35% 75%, rgba(2, 132, 199, 0.22), transparent 70%)"
        }}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
      >
        <defs>
          {/* Gradiente 1: Blanco Luminoso a Azul Translúcido */}
          <linearGradient id="riverGradientWhite" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#E2F0FE" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>

          {/* Gradiente 2: Verde Esperanza / Vida (Brand Secondary) */}
          <linearGradient id="riverGradientGreen" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#68CE2B" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#50AA1E" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#22C55E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0A2850" stopOpacity="0.1" />
          </linearGradient>

          {/* Gradiente 3: Turquesa / Cian Río Andino */}
          <linearGradient id="riverGradientCyan" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#0369A1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A2850" stopOpacity="0.05" />
          </linearGradient>

          {/* Gradiente para el relieve vertical (Cliff/Sombra 3D) */}
          <linearGradient id="riverCliffGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0A2850" stopOpacity="0.1" />
          </linearGradient>

          {/* Filtro de brillo sutil para las corrientes de luz */}
          <filter id="riverGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="river-ribbon-group">
          {/* 1. Líneas de relieve vertical (Pared 3D lateral de rio.png) */}
          <g className="river-cliff-lines">
            {cliffLines.map((line) => (
              <path
                key={line.id}
                d={line.d}
                fill="none"
                stroke="url(#riverCliffGradient)"
                strokeWidth={line.strokeWidth}
                strokeOpacity={line.opacity}
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* 2. Haz principal de líneas de flujo (Superficie del meandro) */}
          <g className="river-surface-lines">
            {surfaceLines.map((line) => (
              <React.Fragment key={line.id}>
                {/* Línea base continua */}
                <path
                  d={line.d}
                  fill="none"
                  stroke={line.colorGradient}
                  strokeWidth={line.strokeWidth}
                  strokeOpacity={line.opacity}
                  strokeLinecap="round"
                />

                {/* Corriente de pulso en movimiento con dasharray */}
                {line.isPulse && (
                  <path
                    d={line.d}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={line.strokeWidth * 1.4}
                    strokeOpacity={0.75}
                    strokeDasharray="40 160 80 200"
                    className={line.isFast ? "river-stream-dash-fast" : "river-stream-dash"}
                    strokeLinecap="round"
                    filter="url(#riverGlow)"
                  />
                )}
              </React.Fragment>
            ))}
          </g>

          {/* 3. Nodos luminosos a lo largo del cauce fluvial */}
          <g className="river-nodes">
            {riverNodes.map((node, idx) => (
              <g key={idx} transform={`translate(${node.cx}, ${node.cy})`}>
                {/* Aura exterior */}
                <circle
                  r={node.r * 2.8}
                  fill={node.color}
                  fillOpacity="0.25"
                  filter="url(#riverGlow)"
                  className="river-node"
                />
                {/* Núcleo brillante */}
                <circle
                  r={node.r}
                  fill={node.color}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  className="river-node"
                />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  )
}
