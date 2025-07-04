import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Users } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import SEOHelmet from '../components/SEOHelmet'

const Contact = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Contact Norivane | Get Your Free Business Consultation"
        description="Contact Norivane for strategic business consulting, AI implementation, and exit planning. Free consultation available. Multiple ways to reach our expert team."
        keywords="contact business consultant, free consultation, AI implementation contact, exit planning consultation, business strategy contact"
        canonicalUrl="/contact"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-blue to-dark-blue/90 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-6">
              Let's Transform Your Business <span className="text-teal">Together</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Ready to unlock your business potential? Get in touch for a free consultation 
              and discover how we can accelerate your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl"
              >
                <Calendar size={20} />
                <span>Book Free Consultation</span>
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2 variants={fadeInUp} className="heading-lg mb-8">
                Get In Touch
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-body mb-12 text-lg">
                We're here to help you transform your business. Choose the method that works best for you, 
                and we'll respond promptly to discuss your needs and objectives.
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Phone Consultation</h3>
                    <p className="text-medium-grey mb-2">Speak directly with our experts</p>
                    <a href="tel:+1-555-0123" className="text-teal font-semibold hover:text-teal/80 transition-colors">
                      +1 (555) 012-3456
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Email Support</h3>
                    <p className="text-medium-grey mb-2">Detailed inquiries and documentation</p>
                    <a href="mailto:hello@norivane.com" className="text-teal font-semibold hover:text-teal/80 transition-colors">
                      hello@norivane.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Office Location</h3>
                    <p className="text-medium-grey mb-2">Visit us for in-person consultations</p>
                    <address className="text-dark-blue not-italic">
                      123 Business District<br />
                      Suite 456<br />
                      New York, NY 10001
                    </address>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue mb-2">Business Hours</h3>
                    <p className="text-medium-grey mb-2">We're available when you need us</p>
                    <div className="text-dark-blue">
                      <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                      <div>Saturday: 10:00 AM - 2:00 PM EST</div>
                      <div>Sunday: By appointment only</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <motion.div variants={fadeInUp} className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-dark-blue mb-4">Why Choose Our Consultation?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal mb-1">24hrs</div>
                    <div className="text-sm text-medium-grey">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal mb-1">100%</div>
                    <div className="text-sm text-medium-grey">Free Initial Call</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal mb-1">500+</div>
                    <div className="text-sm text-medium-grey">Businesses Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal mb-1">98%</div>
                    <div className="text-sm text-medium-grey">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div variants={fadeInUp} className="card">
                <h3 className="heading-sm mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark-blue mb-2">Message Sent Successfully!</h4>
                    <p className="text-medium-grey">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-blue mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-blue mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-dark-blue mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-dark-blue mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark-blue mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-implementation">AI Implementation</option>
                        <option value="strategic-consulting">Strategic Consulting</option>
                        <option value="exit-planning">Exit Planning</option>
                        <option value="general-consultation">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-blue mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors resize-vertical"
                        placeholder="Tell us about your business challenges and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal hover:bg-teal/90 disabled:bg-teal/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="heading-lg mb-6">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey">
              Quick answers to common questions about our consultation process.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="card">
              <h3 className="font-semibold text-dark-blue mb-3">How long is the initial consultation?</h3>
              <p className="text-medium-grey">
                Our initial consultation typically lasts 45-60 minutes. This gives us enough time to understand 
                your business challenges, discuss potential solutions, and outline a strategic approach tailored to your needs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card">
              <h3 className="font-semibold text-dark-blue mb-3">What should I prepare for the consultation?</h3>
              <p className="text-medium-grey">
                Come prepared with information about your current business challenges, goals, and any specific 
                areas where you're seeking improvement. Financial statements, organizational charts, and current 
                process documentation can be helpful but aren't required for the initial discussion.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card">
              <h3 className="font-semibold text-dark-blue mb-3">Do you work with businesses of all sizes?</h3>
              <p className="text-medium-grey">
                Yes, we work with businesses ranging from startups to large enterprises. Our approach is 
                scalable and customized to fit your specific size, industry, and growth stage.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card">
              <h3 className="font-semibold text-dark-blue mb-3">What's your typical project timeline?</h3>
              <p className="text-medium-grey">
                Project timelines vary based on scope and complexity. Strategic consulting projects typically 
                range from 3-6 months, while AI implementation can show results within 90 days. We'll provide 
                a detailed timeline during your consultation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Don't wait to transform your business. Schedule your free consultation today 
              and take the first step toward extraordinary results.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
              >
                <Users size={20} />
                <span>Schedule Consultation</span>
              </button>
              
              <a 
                href="tel:+1-555-0123"
                className="text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-blue transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        consultationType="General Business Consultation"
      />
    </div>
  )
}

export default Contact
