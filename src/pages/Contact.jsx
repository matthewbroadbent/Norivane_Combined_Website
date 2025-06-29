import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from 'lucide-react'
import { sendContactMessage } from '../utils/emailService'
import BookingModal from '../components/BookingModal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactMessage(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            interest: '',
            message: ''
          })
          setIsSubmitted(false)
        }, 3000)
      } else {
        setSubmitMessage(result.message)
      }
    } catch (error) {
      setSubmitMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-teal">Unstoppable</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Ready to unlock your business's hidden value? Whether you're scaling with AI 
              or planning your exit, let's start the conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-medium-grey mb-8 leading-relaxed">
                Every great transformation starts with a conversation. Let's discuss your goals, 
                challenges, and how we can help you build a more valuable business.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Mail className="text-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Email</h3>
                    <p className="text-medium-grey">us@norivane.co.uk</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Phone className="text-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Phone</h3>
                    <p className="text-medium-grey">+44 (0) 7356 224125</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Location</h3>
                    <p className="text-medium-grey">Swansea, Wales, UK</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Calendar className="text-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-blue">Book a Call</h3>
                    <p className="text-medium-grey">Schedule a free consultation</p>
                  </div>
                </div>
              </div>

              {/* Quick Booking */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold text-dark-blue mb-4">
                  Prefer to Book Directly?
                </h3>
                <p className="text-medium-grey mb-4">
                  Skip the form and book a 30-minute consultation directly in our calendar.
                </p>
                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="bg-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book Now</span>
                </button>
              </div>

              {/* Credentials */}
              <div className="mt-8 p-6 bg-teal/5 rounded-xl border border-teal/20">
                <h3 className="text-lg font-bold text-dark-blue mb-2">
                  Expert Guidance You Can Trust
                </h3>
                <p className="text-medium-grey">
                  Led by a <strong>Deloitte-trained chartered accountant</strong> with deep expertise 
                  in business transformation, AI implementation, and strategic exit planning.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-dark-blue mb-2">Message Sent!</h4>
                  <p className="text-medium-grey">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark-blue mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-dark-blue mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    >
                      <option value="">Select your interest</option>
                      <option value="ai">AI Solutions & Implementation</option>
                      <option value="exit">Exit Planning & Business Sale</option>
                      <option value="both">Both AI and Exit Planning</option>
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
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                      placeholder="Tell us about your business goals, challenges, or questions..."
                    ></textarea>
                  </div>

                  {submitMessage && !isSubmitted && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{submitMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-teal/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

                  <p className="text-sm text-medium-grey text-center">
                    We respect your privacy and will never share your information. 
                    Expect a response within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
                Before You Reach Out
              </h2>
              <p className="text-xl text-medium-grey">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-dark-blue mb-2">
                  What's the typical engagement timeline?
                </h3>
                <p className="text-medium-grey">
                  AI implementations typically take 4-12 weeks, while exit planning can span 6-18 months 
                  depending on your goals and business complexity.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-dark-blue mb-2">
                  Do you work with businesses outside the UK?
                </h3>
                <p className="text-medium-grey">
                  Yes! While we're based in Swansea, we work with clients globally through virtual 
                  consultations and digital collaboration tools.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-dark-blue mb-2">
                  What's the investment for your services?
                </h3>
                <p className="text-medium-grey">
                  Investment varies based on scope and complexity. We'll provide transparent pricing 
                  after understanding your specific needs during our initial consultation.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-dark-blue mb-2">
                  Can you help if I'm not sure which path to take?
                </h3>
                <p className="text-medium-grey">
                  Absolutely! Many clients aren't sure whether to focus on growth or exit planning. 
                  Our initial consultation helps clarify your best path forward.
                </p>
              </motion.div>
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
