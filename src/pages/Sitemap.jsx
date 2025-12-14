import React, { useEffect, useState } from 'react'

const Sitemap = () => {
  const [sitemapXml, setSitemapXml] = useState('')

  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = 'https://norivane.com'
      const currentDate = new Date().toISOString()

      // Static routes
      const staticRoutes = [
        {
          url: '/',
          changefreq: 'weekly',
          priority: '1.0',
          lastmod: currentDate
        },
        {
          url: '/ai',
          changefreq: 'weekly',
          priority: '0.9',
          lastmod: currentDate
        },
        {
          url: '/exit',
          changefreq: 'weekly',
          priority: '0.9',
          lastmod: currentDate
        },
        {
          url: '/contact',
          changefreq: 'monthly',
          priority: '0.7',
          lastmod: currentDate
        }
      ]

      const allRoutes = [...staticRoutes]

      // Generate XML
      const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
      const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
      const urlsetClose = '</urlset>'

      const urlEntries = allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')

      const xml = `${xmlHeader}
${urlsetOpen}${urlEntries}
${urlsetClose}`

      setSitemapXml(xml)
    }

    generateSitemap()
  }, [])

  // Set proper content type for XML
  useEffect(() => {
    if (sitemapXml) {
      // This would ideally be handled by server-side rendering
      // For client-side, we'll return the XML as text
      document.title = 'Sitemap'
    }
  }, [sitemapXml])

  return (
    <div style={{
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {sitemapXml || 'Generating sitemap...'}
    </div>
  )
}

export default Sitemap
