import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fundacionjawira.org'

  // Rutas estáticas de la aplicación
  const routes = [
    '',
    '/fundacion',
    '/areas-de-trabajo',
    '/centro-integral',
    '/impacto',
    '/transparencia',
    '/quiero-apoyar',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/impacto') ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
