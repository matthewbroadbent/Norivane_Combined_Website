// Sitemap generation utility
export const generateSitemap = () => {
  const baseUrl = 'https://norivane.com'
  const currentDate = new Date().toISOString()
  
  // Define all site routes with their properties
  const routes = [
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

  // Generate blog post URLs dynamically
  const getBlogPosts = () => {
    // This would typically fetch from your blog context or API
    // For now, we'll use sample blog post IDs
    const blogPostIds = [
      'ai-transformation-guide',
      'exit-planning-checklist', 
      'business-valuation-secrets',
      'ai-roi-calculator',
      'exit-strategy-mistakes'
    ]
    
    return blogPostIds.map(id => ({
      url: `/blog/${id}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate
    }))
  }

  const blogRoutes = getBlogPosts()
  const allRoutes = [...routes, ...blogRoutes]

  // Generate XML sitemap
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

  return `${xmlHeader}
${urlsetOpen}${urlEntries}
${urlsetClose}`
}

// Function to get blog posts from context (for dynamic sitemap)
export const getBlogPostsForSitemap = (blogPosts) => {
  const baseUrl = 'https://norivane.com'
  const currentDate = new Date().toISOString()
  
  return blogPosts.map(post => ({
    url: `/blog/${post.id}`,
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: post.updatedAt || post.date || currentDate
  }))
}
