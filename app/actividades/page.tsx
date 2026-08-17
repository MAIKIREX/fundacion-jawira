import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ActividadesClient from '@/components/actividades/actividades-client'

export const metadata: Metadata = {
  title: 'Actividades & Agenda Comunitaria | Fundación JAWIRA',
  description:
    'Explora los encuentros ciudadanos, talleres prácticos de tecnología productiva, jornadas de salud comunitaria y laboratorios cívicos organizados por Fundación JAWIRA en Bolivia.',
  keywords: [
    'Actividades Fundación Jawira',
    'Encuentros Ciudadanos La Paz',
    'Talleres Robótica Bolivia',
    'Salud Comunitaria',
    'Democracia Bolivia',
    'Capacitación Productiva',
  ],
  openGraph: {
    title: 'Actividades & Agenda Comunitaria | Fundación JAWIRA',
    description:
      'Participa en los encuentros cívicos, talleres de robótica y jornadas de salud organizadas por Fundación JAWIRA en Bolivia.',
    url: 'https://fundacionjawira.org/actividades',
    siteName: 'Fundación JAWIRA',
    type: 'website',
  },
}

export default function ActividadesPage() {
  return (
    <main className="min-h-screen bg-[#0D241C] text-white flex flex-col justify-between selection:bg-[#68CE2B] selection:text-[#0A2850]">
      <Header />
      <div className="flex-1">
        <ActividadesClient />
      </div>
      <Footer />
    </main>
  )
}
