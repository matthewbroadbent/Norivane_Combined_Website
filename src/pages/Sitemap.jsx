import React from 'react'

const Sitemap = () => {
  const baseUrl = 'https://norivane.com'
  
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/ai', priority: '0.9', changefreq: 'monthly' },
    { path: '/exit', priority: '0.9', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' }
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  // Set content type for XML
  React.useEffect(() => {
    document.querySelector('meta[name="content-type"]')?.setAttribute('content', 'application/xml')
  }, [])

  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      {sitemapXml}
    </pre>
  )
}

export default Sitemap
