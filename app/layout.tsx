import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fundacionjawira.org'),
  title: {
    default: 'Fundación JAWIRA | Tecnología, Educación y Salud',
    template: '%s | Fundación JAWIRA'
  },
  description: 'Fundación sin fines de lucro en La Paz, Bolivia dedicada al desarrollo integral mediante tecnología productiva, educación y salud para comunidades vulnerables.',
  keywords: ['Fundación', 'JAWIRA', 'Bolivia', 'La Paz', 'Educación', 'Salud', 'Tecnología Productiva', 'ONG', 'Desarrollo Integral', 'Ayuda Social'],
  authors: [{ name: 'Fundación JAWIRA' }],
  creator: 'Fundación JAWIRA',
  openGraph: {
    type: 'website',
    locale: 'es_BO',
    url: 'https://fundacionjawira.org',
    title: 'Fundación JAWIRA | Tecnología, Educación y Salud',
    description: 'Fundación sin fines de lucro en La Paz, Bolivia dedicada al desarrollo integral de comunidades vulnerables.',
    siteName: 'Fundación JAWIRA',
    images: [
      {
        url: '/logo/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Logotipo de Fundación JAWIRA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundación JAWIRA | Tecnología, Educación y Salud',
    description: 'ONG en La Paz, Bolivia dedicada al desarrollo integral.',
    images: ['/logo/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://fundacionjawira.org/#website",
                  "url": "https://fundacionjawira.org",
                  "name": "Fundación JAWIRA",
                  "description": "Tecnología, Educación y Salud en Bolivia",
                  "publisher": {
                    "@id": "https://fundacionjawira.org/#organization"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://fundacionjawira.org/#organization",
                  "name": "Fundación JAWIRA",
                  "url": "https://fundacionjawira.org",
                  "logo": "https://fundacionjawira.org/icon.png",
                  "sameAs": []
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
