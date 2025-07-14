import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import BookingModal from '../components/BookingModal'
import { sendContactForm } from '../utils/emailService'

const Contact = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'general'
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactForm(formData)
      
      if (result.success) {
        setFormStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          interest: 'general'
        })
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+44 (0) 7356 224 125",
      description: "Mon-Fri, 9am-6pm GMT",
      action: "tel:+44-7356-224125"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "us@norivane.com",
      description: "We'll respond within 24 hours",
      action: "mailto:us@norivane.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Office",
      details: "Swansea, United Kingdom",
      description: "Available for in-person meetings",
      action: null
    }
  ]

  const breadcrumbs = [
    { label: 'Contact', url: null }
  ]

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Contact Norivane | Get in Touch for Business Consulting | AI & Exit Planning"
        description="Contact Norivane for expert business consulting. AI implementation, exit planning, and strategic growth advice. Book a free consultation today."
        keywords="contact norivane, business consulting contact, AI consulting contact, exit planning consultation, business strategy contact"
        canonicalUrl="/contact"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

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
              Let's Build Something 
              <span className="text-teal"> Unstoppable</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Ready to transform your business? Whether you're exploring AI solutions, 
              planning your exit, or just want to chat about possibilities, we're here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Free Consultation</span>
              </button>
              
              <a
                href="#contact-form"
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>Send Message</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal mb-1">24hrs</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal mb-1">Free</div>
                <div className="text-sm text-gray-300">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal mb-1">100%</div>
                <div className="text-sm text-gray-300">Confidential</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-medium-grey max-w-2xl mx-auto">
              Choose the way that works best for you. We're here and ready to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 text-teal">
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-2">
                  {method.title}
                </h3>
                
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-lg font-semibold text-teal hover:text-teal/80 transition-colors duration-200 block mb-2"
                  >
                    {method.details}
                  </a>
                ) : (
                  <div className="text-lg font-semibold text-dark-blue mb-2">
                    {method.details}
                  </div>
                )}
                
                <p className="text-medium-grey">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-medium-grey">
              Tell us about your business and how we can help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent!</h3>
                <p className="text-green-700 mb-6">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus('')}
                  className="bg-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark-blue mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-dark-blue mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="ai">AI Implementation</option>
                    <option value="exit">Exit Planning</option>
                    <option value="both">Both AI and Exit Planning</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark-blue mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    placeholder="What's this about?"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-vertical"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">
                      Something went wrong. Please try again or contact us directly on us@norivane.com.
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <p className="text-sm text-medium-grey">
                    * Required fields. We'll never share your information.
                  </p>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-medium-grey">
              Quick answers to common questions about working with us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the free consultation?",
                answer: "We'll discuss your business goals, current challenges, and explore how AI implementation or exit planning could benefit you. No sales pressure—just valuable insights tailored to your situation."
              },
              {
                question: "How long does a typical engagement last?",
                answer: "AI implementations typically take 3-6 months, while exit planning can range from 6-18 months depending on complexity. We'll provide a clear timeline during our initial consultation."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "We primarily work with established SMEs (£1M-£50M revenue) that are ready to scale with AI or considering an exit. Every business is unique, so let's discuss your specific situation."
              },
              {
                question: "What makes Norivane different?",
                answer: "Our founder's Deloitte background combined with hands-on MD SME experience means you get Big 4 expertise with practical, implementable solutions. We focus on measurable results, not just recommendations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-dark-blue mb-3">
                  {faq.question}
                </h3>
                <p className="text-medium-grey leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Your business transformation is just one conversation away. 
              Let's explore what's possible together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={20} />
              </button>
              
              <a
                href="tel:+44-123-456-7890"
                className="text-white hover:text-teal border-b-2 border-transparent hover:border-teal font-semibold text-lg transition-all duration-300"
              >
                Or call us directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        consultationType="General Consultation"
      />
    </div>
  )
}

export default Contact
