import { BookOpen, Zap, Heart } from 'lucide-react'

export default function AreasHeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Decorative river-like shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute right-0 top-0 w-96 h-96 text-blue-100/30" viewBox="0 0 400 400" fill="none">
          <path d="M300 0 Q350 100 300 200 Q250 300 300 400" stroke="currentColor" strokeWidth="80" opacity="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Áreas de trabajo
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Articulamos tres ejes estratégicos: tecnología productiva, educación y salud, para impulsar el desarrollo integral en el Departamento de La Paz.
          </p>

          {/* Visual representation of three axes */}
          <div className="flex justify-center gap-4 md:gap-8 mt-8 md:mt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center">
                <Zap className="w-7 h-7 md:w-8 md:h-8 text-blue-700" />
              </div>
              <span className="text-xs md:text-sm font-medium text-primary">Tecnología</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center">
                <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-green-700" />
              </div>
              <span className="text-xs md:text-sm font-medium text-primary">Educación</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center">
                <Heart className="w-7 h-7 md:w-8 md:h-8 text-orange-700" />
              </div>
              <span className="text-xs md:text-sm font-medium text-primary">Salud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
