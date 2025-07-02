import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import { contactFAQs } from '../data/faqData'

const Contact = () => {
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

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]

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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
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

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Contact Norivane | AI Implementation & Exit Planning Consultation"
        description="Get in touch with Norivane for AI implementation and strategic exit planning consultation. Free 30-minute consultation available. Expert business transformation advice."
        keywords="contact norivane, business consultation, AI implementation consultation, exit planning consultation, business transformation"
        canonicalUrl="/contact"
      />
      
      <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Transform Your Business
              <span className="text-teal"> Together</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Ready to implement AI or plan your strategic exit? Get in touch for a free consultation 
              and discover how we can help you achieve your business goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone size={32} className="text-teal mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-200">+44 (0) 123 456 7890</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail size={32} className="text-teal mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-200">hello@norivane.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock size={32} className="text-teal mb-4 mx-auto" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-200">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-dark-blue mb-6">
                Get Your Free Consultation
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-medium-grey mb-8">
                Tell us about your business and goals. We'll provide tailored recommendations 
                and discuss how we can help you succeed.
              </motion.p>

              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-blue mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-blue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark-blue mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark-blue mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-dark-blue mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-implementation">AI Implementation</option>
                    <option value="exit-planning">Strategic Exit Planning</option>
                    <option value="both">Both AI & Exit Planning</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200 resize-none"
                    placeholder="Tell us about your business, current challenges, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-medium-grey">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="lg:pl-8"
            >
              <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-dark-blue mb-6">
                Why Choose Norivane?
              </motion.h3>

              <motion.div variants={fadeInUp} className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-blue mb-2">Expert Guidance</h4>
                    <p className="text-medium-grey">
                      Deloitte-trained chartered accountant with deep expertise in AI and strategic exits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-blue mb-2">Proven Results</h4>
                    <p className="text-medium-grey">
                      40% productivity gains with AI, 3x higher valuations with strategic exits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-blue mb-2">90-Day Guarantee</h4>
                    <p className="text-medium-grey">
                      See measurable results within 90 days or we'll work with you until you do.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-dark-blue mb-4">Office Hours</h4>
                <div className="space-y-2 text-medium-grey">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-medium-grey">
                    <strong>Emergency consultations:</strong> Available 24/7 for existing clients
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={contactFAQs}
        title="Contact & Consultation FAQs"
        subtitle="Common questions about getting started with Norivane."
        className="bg-gray-50"
      />
    </div>
  )
}

export default Contact
