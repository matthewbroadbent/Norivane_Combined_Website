import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Zap, Target, Brain, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import SEOHelmet from '../components/SEOHelmet'

const Home = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <div>
      <SEOHelmet 
        title="Norivane | Strategic Business Consulting & AI Implementation"
        description="Transform your business with strategic consulting, AI implementation, and exit planning. 40% productivity gains, 300-500% ROI. Expert guidance for sustainable growth."
        keywords="business consulting, AI implementation, exit planning, strategic consulting, business growth, productivity improvement"
        canonicalUrl="/"
      />

      {/* Navigation Spacer */}
      <div className="nav-spacer"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Transform Your Business<br />
            with <span style={{ color: '#00B2A9' }}>Strategic Excellence</span>
          </h1>
          
          <p>
            Expert consulting in AI implementation, strategic planning, and exit preparation. 
            Delivering measurable results that drive sustainable growth and maximize business value.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Service Choice Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
              maxWidth: '600px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <Link
                  to="/ai"
                  className="btn btn-white"
                  style={{ 
                    fontSize: '1rem', 
                    padding: '1rem 1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Brain size={20} />
                  <span>AI Implementation</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link
                  to="/exit-planning"
                  className="btn btn-white"
                  style={{ 
                    fontSize: '1rem', 
                    padding: '1rem 1.5rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Target size={20} />
                  <span>Exit Planning</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              <button
                onClick={() => setShowBookingModal(true)}
                className="btn btn-secondary"
                style={{ 
                  fontSize: '1.125rem', 
                  padding: '1rem 2rem',
                  borderColor: 'white',
                  color: 'white'
                }}
              >
                <Zap size={20} />
                <span>Book Free Consultation</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <CheckCircle size={16} style={{ color: '#00B2A9' }} />
                <span>Free initial consultation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} style={{ color: '#00B2A9' }} />
                <span>Results guaranteed</span>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500%</span>
              <span className="stat-label">Average ROI</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Productivity Increase</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">90</span>
              <span className="stat-label">Days to Results</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Businesses Transformed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2>Strategic Solutions for Modern Businesses</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              We deliver comprehensive consulting services that drive real results. From AI implementation 
              to strategic exit planning, we're your partner in sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-3">
            <div className="card">
              <div className="card-icon teal">
                <Brain size={32} />
              </div>
              <h3>AI Implementation</h3>
              <p>
                Transform your operations with practical AI solutions. 40% productivity improvements 
                and 300-500% ROI within 90 days.
              </p>
              <Link 
                to="/ai" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  color: '#00B2A9',
                  textDecoration: 'none',
                  marginTop: '1rem'
                }}
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card">
              <div className="card-icon slate">
                <TrendingUp size={32} />
              </div>
              <h3>Strategic Consulting</h3>
              <p>
                Comprehensive business strategy development, operational optimization, 
                and growth planning for sustainable success.
              </p>
              <Link 
                to="/about" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  color: '#00B2A9',
                  textDecoration: 'none',
                  marginTop: '1rem'
                }}
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card">
              <div className="card-icon teal">
                <Target size={32} />
              </div>
              <h3>Exit Planning</h3>
              <p>
                Strategic exit planning that maximizes business value. 2-3x valuation increases 
                through expert preparation and execution.
              </p>
              <Link 
                to="/exit-planning" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  color: '#00B2A9',
                  textDecoration: 'none',
                  marginTop: '1rem'
                }}
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray">
        <div className="container">
          <div className="text-center mb-16">
            <h2>Why Leading Businesses Choose Norivane</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              Our proven methodology and expert team deliver results that matter to your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-4">
            <div className="text-center">
              <div className="card-icon teal" style={{ margin: '0 auto 1.5rem' }}>
                <Shield size={32} />
              </div>
              <h4>Proven Results</h4>
              <p>
                Track record of delivering measurable improvements across diverse industries and business sizes.
              </p>
            </div>

            <div className="text-center">
              <div className="card-icon slate" style={{ margin: '0 auto 1.5rem' }}>
                <Users size={32} />
              </div>
              <h4>Expert Team</h4>
              <p>
                Seasoned consultants with deep industry expertise and hands-on implementation experience.
              </p>
            </div>

            <div className="text-center">
              <div className="card-icon teal" style={{ margin: '0 auto 1.5rem' }}>
                <MessageSquare size={32} />
              </div>
              <h4>Tailored Approach</h4>
              <p>
                Custom solutions designed specifically for your business needs, challenges, and objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="card-icon slate" style={{ margin: '0 auto 1.5rem' }}>
                <TrendingUp size={32} />
              </div>
              <h4>Ongoing Support</h4>
              <p>
                Continuous guidance and optimization to ensure sustained success and maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2>Client Success Stories</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              Real businesses achieving extraordinary results through strategic transformation.
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div className="card">
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} style={{ color: '#FCD34D', fill: '#FCD34D' }} />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "Norivane's AI implementation transformed our customer service operations. 
                We achieved 60% cost reduction while improving response times by 90%. 
                The ROI exceeded 400% within the first year."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="card-icon teal" style={{ width: '3rem', height: '3rem', margin: 0 }}>
                  <Users size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0A2342' }}>Sarah Mitchell</div>
                  <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>CEO, TechFlow Solutions</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} style={{ color: '#FCD34D', fill: '#FCD34D' }} />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "The exit planning process was exceptional. Norivane increased our business 
                valuation by 250% and guided us through a seamless sale. Their expertise 
                made all the difference in achieving our goals."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="card-icon slate" style={{ width: '3rem', height: '3rem', margin: 0 }}>
                  <Target size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0A2342' }}>James Rodriguez</div>
                  <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>Founder, GreenTech Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient">
        <div className="container text-center">
          <h2 style={{ marginBottom: '1.5rem' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join the businesses achieving extraordinary results. Book your free consultation 
            and discover how we can accelerate your success.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => setShowBookingModal(true)}
              className="btn btn-white"
              style={{ fontSize: '1.125rem' }}
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={20} />
            </button>
            
            <Link 
              to="/about"
              className="btn btn-secondary"
              style={{ 
                borderColor: 'white', 
                color: 'white',
                fontSize: '1.125rem'
              }}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        consultationType="Strategic Business Consultation"
      />
    </div>
  )
}

export default Home
