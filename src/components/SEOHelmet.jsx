import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHelmet = ({ 
  title = "Norivane - Scale Smarter or Sell Stronger",
  description = "Unlock hidden business value with AI implementation or strategic exit planning. Expert guidance for unstoppable business growth.",
  keywords = "business consulting, AI implementation, exit planning, business valuation, strategic consulting",
  canonicalUrl,
  ogImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const baseUrl = "https://norivane.com"
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Norivane" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Norivane" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Norivane",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": `${baseUrl}/contact`
          },
          "sameAs": [
            // Add social media URLs when available
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEOHelmet
