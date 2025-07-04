import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = ({ 
  faqs = [], 
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our services.",
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section className={`section bg-gray ${className}`}>
      <div className="container">
        <div className="text-center mb-16">
          <h2>{title}</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card"
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '2rem',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F8F9FA'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 600, 
                  color: '#0A2342',
                  margin: 0,
                  paddingRight: '1rem'
                }}>
                  {faq.question}
                </h4>
                <div style={{ flexShrink: 0 }}>
                  {openIndex === index ? (
                    <ChevronUp size={24} style={{ color: '#00B2A9' }} />
                  ) : (
                    <ChevronDown size={24} style={{ color: '#6B7280' }} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  style={{
                    padding: '0 2rem 2rem',
                    borderTop: '1px solid #E5E7EB'
                  }}
                >
                  <div style={{ 
                    color: '#6B7280', 
                    lineHeight: 1.7,
                    paddingTop: '1rem'
                  }}>
                    {typeof faq.answer === 'string' ? (
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": typeof faq.answer === 'string' ? faq.answer : faq.question
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}

export default FAQSection
