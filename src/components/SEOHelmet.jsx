import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHelmet = ({ 
  title = "Norivane - Scale Smarter or Sell Stronger",
  description = "Unlock hidden business value with AI implementation or strategic exit planning. Expert guidance for unstoppable business growth.",
  keywords = "business consulting, AI implementation, exit planning, business valuation, strategic consulting",
  canonicalUrl,
  ogImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  ogType = "website",
  twitterCard = "summary_large_image",
  author = "Norivane",
  publishedTime,
  modifiedTime
}) => {
  const baseUrl = "https://norivane.com"
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content={author} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Norivane" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Article specific Open Graph tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Business Consulting" />
          <meta property="article:tag" content="AI Implementation" />
          <meta property="article:tag" content="Exit Planning" />
          <meta property="article:tag" content="Business Strategy" />
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@norivane" />
      <meta name="twitter:creator" content="@norivane" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#00B2A9" />
      <meta name="msapplication-TileColor" content="#00B2A9" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="https://images.pexels.com" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Norivane",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": description,
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": `${baseUrl}/contact`,
            "availableLanguage": "English"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
          },
          "serviceType": [
            "Business Consulting",
            "AI Implementation", 
            "Exit Planning",
            "Business Valuation"
          ],
          "sameAs": [
            // Add social media URLs when available
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEOHelmet
