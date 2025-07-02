import React, { useEffect } from 'react'
import { useBlog } from '../contexts/BlogContext'
import { getBlogPostsForSitemap } from '../utils/sitemap'

const SitemapGenerator = () => {
  const { getPublishedPosts } = useBlog()

  useEffect(() => {
    // Generate and serve sitemap
    const generateDynamicSitemap = () => {
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
      const blogRoutes = getBlogPostsForSitemap(blogPosts)
      
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

      const sitemapXml = `${xmlHeader}
${urlsetOpen}${urlEntries}
${urlsetClose}`

      // Store sitemap in sessionStorage for the sitemap route to access
      sessionStorage.setItem('dynamicSitemap', sitemapXml)
    }

    generateDynamicSitemap()
  }, [getPublishedPosts])

  return null // This component doesn't render anything
}

export default SitemapGenerator
