export default function FundacionHeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      
      {/* Decorative River Shape */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M50 20 Q80 40 60 80 Q70 120 50 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-blue-400"
          />
          <path
            d="M60 30 Q90 50 70 90 Q80 130 60 170"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-emerald-400"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-primary mb-6">
          La Fundación JAWIRA
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
          Una fundación sin fines de lucro que articula tecnología productiva, educación y salud para el desarrollo integral en el Departamento de La Paz, Bolivia.
        </p>
      </div>
    </section>
  )
}
