"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Layers, 
  Sparkles, 
  ArrowLeft, 
  Palette, 
  Eye, 
  ShieldCheck, 
  Code2, 
  Share2,
  CheckCircle2,
  Info,
  TrendingUp,
  Heart,
  Droplets,
  Sprout,
  Flame
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface ColorItem {
  id: string
  name: string
  role: string
  lightHex: string
  darkHex: string
  lightOklch: string
  darkOklch: string
  lightRgb: string
  darkRgb: string
  variable: string
  description: string
  association: string
  icon?: any
  contrastTextLight: string
  contrastTextDark: string
}

const BRAND_COLORS: ColorItem[] = [
  {
    id: "primary",
    name: "Azul Jawira Institucional",
    role: "Primario (Primary)",
    lightHex: "#0A2850",
    darkHex: "#235A9F",
    lightOklch: "oklch(0.25 0.06 260)",
    darkOklch: "oklch(0.45 0.14 260)",
    lightRgb: "rgb(10, 40, 80)",
    darkRgb: "rgb(35, 90, 159)",
    variable: "var(--primary)",
    description: "Color ancla institucional. Simboliza solidez, confianza y la profundidad del río Jawira.",
    association: "Encabezados principales, barras de navegación, botones principales y pie de página.",
    icon: Droplets,
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#FFFFFF",
  },
  {
    id: "secondary",
    name: "Verde Esperanza & Vida",
    role: "Secundario (Secondary)",
    lightHex: "#50AA1E",
    darkHex: "#68CE2B",
    lightOklch: "oklch(0.60 0.15 135)",
    darkOklch: "oklch(0.75 0.18 135)",
    lightRgb: "rgb(80, 170, 30)",
    darkRgb: "rgb(104, 206, 43)",
    variable: "var(--secondary)",
    description: "Crecimiento comunitario, naturaleza, proyectos productivos y acciones de impacto positivo.",
    association: "Botones de llamada a la acción (CTA 'Quiero Apoyar'), insignias activas y logros.",
    icon: Sprout,
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#0A2850",
  },
  {
    id: "accent",
    name: "Ámbar / Naranja Sol",
    role: "Acento (Accent)",
    lightHex: "#EA9010",
    darkHex: "#FFA826",
    lightOklch: "oklch(0.65 0.15 50)",
    darkOklch: "oklch(0.75 0.18 50)",
    lightRgb: "rgb(234, 144, 16)",
    darkRgb: "rgb(255, 168, 38)",
    variable: "var(--accent)",
    description: "Calidez humana, dinamismo, energía solar y empatía en el trabajo de campo.",
    association: "Puntos focales, métricas destacadas, indicadores de alerta constructiva y hovers.",
    icon: Flame,
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#131B2E",
  },
]

const NEUTRAL_COLORS: ColorItem[] = [
  {
    id: "background",
    name: "Fondo de Aplicación (Background)",
    role: "Superficie Base",
    lightHex: "#FBFDFE",
    darkHex: "#101726",
    lightOklch: "oklch(0.99 0 0)",
    darkOklch: "oklch(0.16 0.02 260)",
    lightRgb: "rgb(251, 253, 254)",
    darkRgb: "rgb(16, 23, 38)",
    variable: "var(--background)",
    description: "Lienzo general donde reposa todo el contenido.",
    association: "Body y contenedores de vista raíz.",
    contrastTextLight: "#0B132B",
    contrastTextDark: "#F8FAFC",
  },
  {
    id: "foreground",
    name: "Texto Principal (Foreground)",
    role: "Tipografía Primaria",
    lightHex: "#0B132B",
    darkHex: "#F8FAFC",
    lightOklch: "oklch(0.15 0.03 260)",
    darkOklch: "oklch(0.98 0.01 260)",
    lightRgb: "rgb(11, 19, 43)",
    darkRgb: "rgb(248, 250, 252)",
    variable: "var(--foreground)",
    description: "Máxima legibilidad y contraste para textos de lectura.",
    association: "Párrafos, títulos y etiquetas principales.",
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#0B132B",
  },
  {
    id: "card",
    name: "Tarjetas & Elevación (Card)",
    role: "Superficie de Componente",
    lightHex: "#FFFFFF",
    darkHex: "#151F33",
    lightOklch: "oklch(1.0 0 0)",
    darkOklch: "oklch(0.18 0.02 260)",
    lightRgb: "rgb(255, 255, 255)",
    darkRgb: "rgb(21, 31, 51)",
    variable: "var(--card)",
    description: "Bloques contenedores y módulos interactivos.",
    association: "Cards de proyectos, testimonios y modales.",
    contrastTextLight: "#0B132B",
    contrastTextDark: "#F8FAFC",
  },
  {
    id: "muted",
    name: "Superficie Atenuada (Muted)",
    role: "Fondo Secundario",
    lightHex: "#F1F5F9",
    darkHex: "#1C2740",
    lightOklch: "oklch(0.965 0.003 260)",
    darkOklch: "oklch(0.22 0.03 260)",
    lightRgb: "rgb(241, 245, 249)",
    darkRgb: "rgb(28, 39, 64)",
    variable: "var(--muted)",
    description: "Fondos secundarios para reducir saturación visual.",
    association: "Secciones alternadas, badges neutros y tablas.",
    contrastTextLight: "#334155",
    contrastTextDark: "#CBD5E1",
  },
  {
    id: "border",
    name: "Borde & Separadores (Border)",
    role: "Delimitación Estructural",
    lightHex: "#E2E8F0",
    darkHex: "#263554",
    lightOklch: "oklch(0.92 0.005 260)",
    darkOklch: "oklch(0.25 0.03 260)",
    lightRgb: "rgb(226, 232, 240)",
    darkRgb: "rgb(38, 53, 84)",
    variable: "var(--border)",
    description: "Líneas sutiles para delimitar sin sobrecargar.",
    association: "Contornos de tarjetas, divisores de sección e inputs.",
    contrastTextLight: "#0B132B",
    contrastTextDark: "#F8FAFC",
  },
]

const CHART_COLORS: ColorItem[] = [
  {
    id: "chart-1",
    name: "Dato 1: Azul Institucional",
    role: "Gráficos Primarios",
    lightHex: "#0A2850",
    darkHex: "#3B82F6",
    lightOklch: "oklch(0.25 0.06 260)",
    darkOklch: "oklch(0.45 0.14 260)",
    lightRgb: "rgb(10, 40, 80)",
    darkRgb: "rgb(59, 130, 246)",
    variable: "var(--chart-1)",
    description: "Métrica principal o serie dominante.",
    association: "Barras principales y líneas de tendencia.",
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#FFFFFF",
  },
  {
    id: "chart-2",
    name: "Dato 2: Verde Impacto",
    role: "Gráficos de Crecimiento",
    lightHex: "#50AA1E",
    darkHex: "#68CE2B",
    lightOklch: "oklch(0.60 0.15 135)",
    darkOklch: "oklch(0.75 0.18 135)",
    lightRgb: "rgb(80, 170, 30)",
    darkRgb: "rgb(104, 206, 43)",
    variable: "var(--chart-2)",
    description: "Métrica de éxito o beneficiarios alcanzados.",
    association: "Gráficos circulares y metas cumplidas.",
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#0A2850",
  },
  {
    id: "chart-3",
    name: "Dato 3: Ámbar Alerta / Foco",
    role: "Gráficos de Atención",
    lightHex: "#EA9010",
    darkHex: "#FFA826",
    lightOklch: "oklch(0.65 0.15 50)",
    darkOklch: "oklch(0.75 0.18 50)",
    lightRgb: "rgb(234, 144, 16)",
    darkRgb: "rgb(255, 168, 38)",
    variable: "var(--chart-3)",
    description: "Proyectos en curso o metas intermedias.",
    association: "Segmentos de distribución secundaria.",
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#131B2E",
  },
  {
    id: "chart-4",
    name: "Dato 4: Turquesa Andino",
    role: "Gráficos de Cobertura",
    lightHex: "#0284C7",
    darkHex: "#38BDF8",
    lightOklch: "oklch(0.55 0.12 200)",
    darkOklch: "oklch(0.68 0.16 200)",
    lightRgb: "rgb(2, 132, 199)",
    darkRgb: "rgb(56, 189, 248)",
    variable: "var(--chart-4)",
    description: "Salud comunitaria y recursos hídricos.",
    association: "Segmentos de distribución geográfica.",
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#0A2850",
  },
  {
    id: "chart-5",
    name: "Dato 5: Oro Solar",
    role: "Gráficos Especiales",
    lightHex: "#D97706",
    darkHex: "#FBBF24",
    lightOklch: "oklch(0.70 0.10 80)",
    darkOklch: "oklch(0.75 0.12 80)",
    lightRgb: "rgb(217, 119, 6)",
    darkRgb: "rgb(251, 191, 36)",
    variable: "var(--chart-5)",
    description: "Alianzas y recaudación especial.",
    association: "Métricas destacadas de donación.",
    contrastTextLight: "#FFFFFF",
    contrastTextDark: "#131B2E",
  },
]

export default function PaletaColoresPage() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [copiedValue, setCopiedValue] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"light" | "dark" | "split">("light")
  const [formatType, setFormatType] = useState<"hex" | "oklch" | "rgb" | "variable">("hex")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (resolvedTheme === "dark") {
      setViewMode("dark")
    }
  }, [resolvedTheme])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedValue(text)
    setTimeout(() => {
      setCopiedValue((prev) => (prev === text ? null : prev))
    }, 2200)
  }

  const exportAllAsJSON = () => {
    const data = {
      project: "Fundación Jawira",
      themeTokens: {
        brand: BRAND_COLORS.map((c) => ({
          name: c.name,
          role: c.role,
          light: { hex: c.lightHex, oklch: c.lightOklch, rgb: c.lightRgb },
          dark: { hex: c.darkHex, oklch: c.darkOklch, rgb: c.darkRgb },
          variable: c.variable,
        })),
        neutrals: NEUTRAL_COLORS.map((c) => ({
          name: c.name,
          role: c.role,
          light: { hex: c.lightHex, oklch: c.lightOklch, rgb: c.lightRgb },
          dark: { hex: c.darkHex, oklch: c.darkOklch, rgb: c.darkRgb },
          variable: c.variable,
        })),
        charts: CHART_COLORS.map((c) => ({
          name: c.name,
          role: c.role,
          light: { hex: c.lightHex, oklch: c.lightOklch, rgb: c.lightRgb },
          dark: { hex: c.darkHex, oklch: c.darkOklch, rgb: c.darkRgb },
          variable: c.variable,
        })),
      },
    }
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    setCopiedValue("JSON_EXPORT")
    setTimeout(() => setCopiedValue(null), 2500)
  }

  const exportAllAsCSS = () => {
    let css = `/* Paleta Fundación Jawira */\n:root {\n`
    BRAND_COLORS.concat(NEUTRAL_COLORS).concat(CHART_COLORS).forEach((c) => {
      css += `  --${c.id}: ${c.lightOklch}; /* ${c.lightHex} */\n`
    })
    css += `}\n\n.dark {\n`
    BRAND_COLORS.concat(NEUTRAL_COLORS).concat(CHART_COLORS).forEach((c) => {
      css += `  --${c.id}: ${c.darkOklch}; /* ${c.darkHex} */\n`
    })
    css += `}`
    navigator.clipboard.writeText(css)
    setCopiedValue("CSS_EXPORT")
    setTimeout(() => setCopiedValue(null), 2500)
  }

  const renderSwatchCard = (item: ColorItem, mode: "light" | "dark") => {
    const isLight = mode === "light"
    const hex = isLight ? item.lightHex : item.darkHex
    const oklch = isLight ? item.lightOklch : item.darkOklch
    const rgb = isLight ? item.lightRgb : item.darkRgb
    const contrastTextColor = isLight ? item.contrastTextLight : item.contrastTextDark
    const IconComponent = item.icon

    let activeDisplayValue = hex
    if (formatType === "oklch") activeDisplayValue = oklch
    if (formatType === "rgb") activeDisplayValue = rgb
    if (formatType === "variable") activeDisplayValue = item.variable

    const isCopied = copiedValue === activeDisplayValue || copiedValue === hex

    return (
      <div 
        key={`${item.id}-${mode}`}
        className={`group relative flex flex-col rounded-2xl border transition-all duration-300 hover:shadow-xl ${
          isLight 
            ? "bg-white border-slate-200/90 text-slate-900 shadow-sm" 
            : "bg-[#162035] border-slate-700/60 text-slate-100 shadow-md"
        }`}
      >
        {/* Color Block Preview */}
        <div 
          className="relative h-36 w-full rounded-t-2xl p-4 flex flex-col justify-between transition-transform duration-300"
          style={{ backgroundColor: hex }}
        >
          {/* Top Row inside Swatch */}
          <div className="flex items-center justify-between">
            <span 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md"
              style={{ 
                backgroundColor: isLight ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)",
                color: contrastTextColor 
              }}
            >
              {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
              {isLight ? "Light Mode" : "Dark Mode"}
            </span>

            {/* Quick Copy Hex Button floating inside badge */}
            <button
              onClick={() => copyToClipboard(hex)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 active:scale-95 shadow-sm"
              style={{
                backgroundColor: contrastTextColor === "#FFFFFF" ? "#FFFFFF" : "#0A2850",
                color: contrastTextColor === "#FFFFFF" ? "#0A2850" : "#FFFFFF",
              }}
              title="Copiar código HEX"
            >
              {copiedValue === hex ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar {hex}</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Row inside Swatch */}
          <div className="flex items-end justify-between">
            <span 
              className="text-2xl font-black font-mono tracking-tight drop-shadow-sm"
              style={{ color: contrastTextColor }}
            >
              {hex}
            </span>
            <span 
              className="text-[11px] font-mono px-2 py-0.5 rounded opacity-90 backdrop-blur-sm"
              style={{ 
                backgroundColor: isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.15)",
                color: contrastTextColor 
              }}
            >
              {item.variable}
            </span>
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-5 flex flex-col flex-grow justify-between gap-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-base leading-snug">
                {item.name}
              </h3>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                isLight ? "bg-slate-100 text-slate-700" : "bg-slate-800 text-slate-300"
              }`}>
                {item.role}
              </span>
            </div>

            <p className={`text-xs leading-relaxed line-clamp-2 mt-1 ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}>
              {item.description}
            </p>
          </div>

          {/* Value Inspector & Copy Trigger */}
          <div className={`p-3 rounded-xl border flex items-center justify-between gap-2 font-mono text-xs ${
            isLight ? "bg-slate-50 border-slate-200" : "bg-[#111A2C] border-slate-700/80"
          }`}>
            <div className="flex flex-col truncate">
              <span className={`text-[10px] uppercase font-bold tracking-wider ${
                isLight ? "text-slate-400" : "text-slate-400"
              }`}>
                {formatType.toUpperCase()}
              </span>
              <span className="font-medium truncate select-all">
                {activeDisplayValue}
              </span>
            </div>

            <Button
              size="sm"
              variant={isCopied ? "default" : "outline"}
              onClick={() => copyToClipboard(activeDisplayValue)}
              className={`h-8 px-3 text-xs gap-1.5 transition-all ${
                isCopied 
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                  : isLight 
                    ? "hover:bg-slate-200 text-slate-800" 
                    : "hover:bg-slate-800 text-slate-200 border-slate-700"
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Listo</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </Button>
          </div>

          {/* Usage hint */}
          <div className={`text-[11px] flex items-center gap-1.5 ${
            isLight ? "text-slate-500" : "text-slate-400"
          }`}>
            <Info className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
            <span className="truncate">{item.association}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver a Fundación Jawira</span>
          </Link>

          {/* Mode switch & Quick Export bar */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={exportAllAsJSON}
              className="text-xs h-8 gap-1.5"
            >
              {copiedValue === "JSON_EXPORT" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>JSON Copiado</span>
                </>
              ) : (
                <>
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Exportar JSON</span>
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={exportAllAsCSS}
              className="text-xs h-8 gap-1.5"
            >
              {copiedValue === "CSS_EXPORT" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>CSS Copiado</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5" />
                  <span>Variables CSS</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Presentation Header */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card/80 to-muted/40 p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                <Palette className="w-3.5 h-3.5" />
                <span>Guía Oficial de Identidad Visual</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
                Paleta de Colores & Sistema de Marca
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Este sistema cromático nace de los elementos identitarios del logotipo de la 
                <strong> Fundación Jawira</strong>: el caudal del río (azul profundo institucional), la fertilidad de las tierras comunitarias (verde esperanza) y la calidez del sol andino (naranja ámbar).
              </p>

              {/* Format Switcher Pills */}
              <div className="pt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground mr-1">
                  Formato de copia:
                </span>
                {(["hex", "oklch", "rgb", "variable"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormatType(fmt)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
                      formatType === fmt
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col: Logo Breakdown Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] bg-card rounded-2xl border border-border p-6 shadow-xl text-center space-y-4">
                <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden ring-2 ring-primary/20 bg-white p-2 shadow-inner">
                  <Image 
                    src="/logo/logo.jpeg" 
                    alt="Logo Fundación Jawira" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">Logotipo Fundación Jawira</h4>
                  <p className="text-xs text-muted-foreground">Origen del ADN cromático</p>
                </div>

                {/* Micro Swatches from Logo */}
                <div className="flex items-center justify-center gap-2 pt-2 border-t border-border">
                  <button 
                    onClick={() => copyToClipboard("#0A2850")}
                    className="w-7 h-7 rounded-full bg-[#0A2850] ring-2 ring-offset-2 ring-border shadow transition-transform hover:scale-110" 
                    title="Azul: #0A2850 (Click para copiar)"
                  />
                  <button 
                    onClick={() => copyToClipboard("#50AA1E")}
                    className="w-7 h-7 rounded-full bg-[#50AA1E] ring-2 ring-offset-2 ring-border shadow transition-transform hover:scale-110" 
                    title="Verde: #50AA1E (Click para copiar)"
                  />
                  <button 
                    onClick={() => copyToClipboard("#EA9010")}
                    className="w-7 h-7 rounded-full bg-[#EA9010] ring-2 ring-offset-2 ring-border shadow transition-transform hover:scale-110" 
                    title="Naranja: #EA9010 (Click para copiar)"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* View Mode Switcher (Light / Dark / Split) */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-muted/40 border border-border">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="font-bold text-sm text-foreground">
              Modo de Visualización de Paleta:
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-card rounded-xl border border-border shadow-sm">
            <button
              onClick={() => setViewMode("light")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "light"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Modo Claro (Light)</span>
            </button>

            <button
              onClick={() => setViewMode("dark")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "dark"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Modo Oscuro (Dark)</span>
            </button>

            <button
              onClick={() => setViewMode("split")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "split"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Comparación (Split)</span>
            </button>
          </div>
        </section>

        {/* SECTION 1: Brand Colors */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span>1. Colores Principales de Marca (Brand Core)</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Pilares identitarios que definen la jerarquía visual de Fundación Jawira.
              </p>
            </div>
            <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
              3 Tonos Principales
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND_COLORS.map((color) => (
              <React.Fragment key={color.id}>
                {viewMode === "light" && renderSwatchCard(color, "light")}
                {viewMode === "dark" && renderSwatchCard(color, "dark")}
                {viewMode === "split" && (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-3xl bg-muted/20 border border-border">
                    {renderSwatchCard(color, "light")}
                    {renderSwatchCard(color, "dark")}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* SECTION 2: Neutrals and Surfaces */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <Layers className="w-6 h-6 text-secondary" />
                <span>2. Superficies & Sistema Neutro (Tokens Semánticos)</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Fondos, tarjetas, bordes y textos optimizados para legibilidad y contraste WCAG AAA/AA.
              </p>
            </div>
            <span className="text-xs font-mono bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold">
              Tokens de UI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEUTRAL_COLORS.map((color) => (
              <React.Fragment key={color.id}>
                {viewMode === "light" && renderSwatchCard(color, "light")}
                {viewMode === "dark" && renderSwatchCard(color, "dark")}
                {viewMode === "split" && (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-3xl bg-muted/20 border border-border">
                    {renderSwatchCard(color, "light")}
                    {renderSwatchCard(color, "dark")}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* SECTION 3: Chart & Data Colors */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-accent" />
                <span>3. Paleta de Métricas & Visualización de Datos (Charts)</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Gama calibrada para reportes de transparencia, donaciones e indicadores de impacto social.
              </p>
            </div>
            <span className="text-xs font-mono bg-accent/10 text-accent px-3 py-1 rounded-full font-bold">
              5 Series de Datos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {CHART_COLORS.map((color) => (
              <React.Fragment key={color.id}>
                {viewMode === "light" && renderSwatchCard(color, "light")}
                {viewMode === "dark" && renderSwatchCard(color, "dark")}
                {viewMode === "split" && (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 p-3 rounded-2xl bg-muted/20 border border-border">
                    {renderSwatchCard(color, "light")}
                    {renderSwatchCard(color, "dark")}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* SECTION 4: Live Interactive UI Sandbox */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                <span>4. Simulador de Componentes en Vivo (UI Playground)</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Comprobación visual de cómo interactúan estos colores en componentes de la plataforma.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sandbox Light */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-slate-900 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  Entorno Light Mode
                </span>
                <span className="text-xs font-mono text-slate-400">#FBFDFE / #0B132B</span>
              </div>

              {/* Real UI Elements Light */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button className="px-5 py-2.5 rounded-xl bg-[#0A2850] text-white font-bold text-sm shadow-md hover:bg-[#081e3d] transition-all">
                    Botón Primario
                  </button>
                  <button className="px-5 py-2.5 rounded-xl bg-[#50AA1E] text-white font-bold text-sm shadow-md hover:bg-[#439217] transition-all">
                    Quiero Apoyar (CTA)
                  </button>
                  <button className="px-4 py-2.5 rounded-xl border border-[#EA9010] text-[#EA9010] font-bold text-sm hover:bg-[#EA9010]/10 transition-all">
                    Acento Destacado
                  </button>
                </div>

                {/* Metric Card Mockup */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Beneficiarios Directos</span>
                    <h4 className="text-2xl font-black text-[#0A2850]">+12,450</h4>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#50AA1E]/15 text-[#50AA1E] font-bold text-xs">
                    +24% este año
                  </div>
                </div>

                {/* Alert Bar */}
                <div className="p-3.5 rounded-xl bg-[#EA9010]/10 border border-[#EA9010]/30 text-slate-800 text-xs flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-[#EA9010] flex-shrink-0" />
                  <span>Campaña activa: Centro Integral Comunitario en fase de equipamiento.</span>
                </div>
              </div>
            </div>

            {/* Sandbox Dark */}
            <div className="rounded-3xl border border-slate-800 bg-[#101726] p-6 sm:p-8 text-slate-100 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-blue-400" />
                  Entorno Dark Mode
                </span>
                <span className="text-xs font-mono text-slate-500">#101726 / #F8FAFC</span>
              </div>

              {/* Real UI Elements Dark */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button className="px-5 py-2.5 rounded-xl bg-[#235A9F] text-white font-bold text-sm shadow-md hover:bg-[#1d4c88] transition-all">
                    Botón Primario
                  </button>
                  <button className="px-5 py-2.5 rounded-xl bg-[#68CE2B] text-[#0A2850] font-bold text-sm shadow-md hover:bg-[#5bb824] transition-all">
                    Quiero Apoyar (CTA)
                  </button>
                  <button className="px-4 py-2.5 rounded-xl border border-[#FFA826] text-[#FFA826] font-bold text-sm hover:bg-[#FFA826]/10 transition-all">
                    Acento Destacado
                  </button>
                </div>

                {/* Metric Card Mockup */}
                <div className="p-4 rounded-2xl bg-[#162035] border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Beneficiarios Directos</span>
                    <h4 className="text-2xl font-black text-white">+12,450</h4>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#68CE2B]/20 text-[#68CE2B] font-bold text-xs">
                    +24% este año
                  </div>
                </div>

                {/* Alert Bar */}
                <div className="p-3.5 rounded-xl bg-[#FFA826]/15 border border-[#FFA826]/30 text-slate-200 text-xs flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-[#FFA826] flex-shrink-0" />
                  <span>Campaña activa: Centro Integral Comunitario en fase de equipamiento.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Quick Reference Summary Table */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span>Tabla de Consulta Rápida (Hex & Variables)</span>
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground bg-muted/30">
                <tr>
                  <th className="py-3 px-4">Elemento / Token</th>
                  <th className="py-3 px-4">Light Hex</th>
                  <th className="py-3 px-4">Dark Hex</th>
                  <th className="py-3 px-4">Variable CSS</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-mono text-xs">
                {BRAND_COLORS.concat(NEUTRAL_COLORS).map((item) => (
                  <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-sans font-medium text-foreground flex items-center gap-2">
                      <span 
                        className="w-3.5 h-3.5 rounded-full inline-block border border-black/10"
                        style={{ backgroundColor: item.lightHex }}
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => copyToClipboard(item.lightHex)}
                        className="hover:underline text-primary font-bold inline-flex items-center gap-1"
                        title="Copiar Hex Light"
                      >
                        {item.lightHex}
                        <Copy className="w-3 h-3 opacity-60" />
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => copyToClipboard(item.darkHex)}
                        className="hover:underline text-primary font-bold inline-flex items-center gap-1"
                        title="Copiar Hex Dark"
                      >
                        {item.darkHex}
                        <Copy className="w-3 h-3 opacity-60" />
                      </button>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{item.variable}</td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(`${item.lightHex} (Light) / ${item.darkHex} (Dark)`)}
                        className="h-7 text-xs px-2"
                      >
                        Copiar Ambos
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
