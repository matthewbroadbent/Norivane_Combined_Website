import React, { useEffect, useState } from 'react'
import { useBlog } from '../contexts/BlogContext'

const Sitemap = () => {
  const { getPublishedPosts } = useBlog()
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
          url: '/blog',
          changefreq: 'daily',
          priority: '0.8',
          lastmod: currentDate
        },
        {
          url: '/contact',
          changefreq: 'monthly',
          priority: '0.7',
          lastmod: currentDate
        }
      ]

      // Dynamic blog routes
      const blogPosts = getPublishedPosts()
      const blogRoutes = blogPosts.map(post => ({
        url: `/blog/${post.id}`,
        changefreq: 'monthly',
        priority: '0.6',
        lastmod: post.updatedAt || post.date || currentDate
      }))
      
      const allRoutes = [...staticRoutes, ...blogRoutes]

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
  }, [getPublishedPosts])

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
