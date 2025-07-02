import React from 'react'
import { Helmet } from 'react-helmet-async'

const StructuredData = ({ type, data }) => {
  const generateSchema = () => {
    const baseUrl = "https://norivane.com"
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Norivane",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Expert business consulting for AI implementation and strategic exit planning. Scale smarter or sell stronger with Norivane.",
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
          ]
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Norivane",
          "url": baseUrl,
          "description": "Scale Smarter or Sell Stronger - Expert business consulting for AI implementation and strategic exit planning",
          "publisher": {
            "@type": "Organization",
            "name": "Norivane"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Norivane",
            "url": baseUrl
          },
          "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
          },
          "serviceType": data.serviceType,
          "url": `${baseUrl}${data.url}`
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "Norivane"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Norivane",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${data.id}`
          },
          "image": data.image || `${baseUrl}/default-blog-image.jpg`,
          "articleSection": data.category || "Business Consulting",
          "wordCount": data.wordCount || 1000
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.url}`
          }))
        }

      default:
        return null
    }
  }

  const schema = generateSchema()
  
  if (!schema) return null

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default StructuredData
