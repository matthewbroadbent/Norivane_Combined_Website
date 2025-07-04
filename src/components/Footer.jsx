import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: '#0A2342',
      color: 'white',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ marginBottom: '3rem' }}>
          {/* Company Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: 'white',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              <span>nor</span>
              <span style={{ 
                fontStyle: 'italic', 
                fontWeight: 400, 
                color: '#00B2A9' 
              }}>i</span>
              <span>vane</span>
            </Link>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              marginBottom: '1.5rem',
              maxWidth: '400px'
            }}>
              Transforming businesses through AI implementation and strategic exit planning. 
              Delivering measurable results for ambitious business owners.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} style={{ color: '#00B2A9' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>us@norivane.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} style={{ color: '#00B2A9' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>+44 7456 224125</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={16} style={{ color: '#00B2A9' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Swansea, UK</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 600, 
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Services
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link 
                to="/ai" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                AI Implementation
              </Link>
              <Link 
                to="/exit-planning" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Exit Planning
              </Link>
              <Link 
                to="/contact" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Consultation
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 600, 
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Resources
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link 
                to="/blog" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            color: 'rgba(255, 255, 255, 0.6)', 
            fontSize: '0.875rem' 
          }}>
            © {currentYear} Norivane. All rights reserved.
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="#"
              style={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              style={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00B2A9'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
