import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, User, Mail, Phone, Building, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { sendConsultationRequest } from '../utils/emailService'

const BookingModal = ({ isOpen, onClose, consultationType = 'General Consultation' }) => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    preferredTime: '',
    message: '',
    consultationType
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

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
      const result = await sendConsultationRequest(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            interest: '',
            preferredTime: '',
            message: '',
            consultationType
          })
          setIsSubmitted(false)
          setShowForm(false)
          onClose()
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-dark-blue">Book Your Consultation</h2>
                <p className="text-medium-grey">{consultationType}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} className="text-medium-grey" />
              </button>
            </div>

            {!showForm ? (
              <div>
                {/* Google Calendar Widget */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-dark-blue mb-4">
                    Choose Your Preferred Time
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <iframe 
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dDhVTC6nmAqTpQ744WdiVX5HYpBpJuieMFd2Bsk7-iFlARlw8EuBzT7ulHmXKp3ja2DPIdPsS?gv=true" 
                      style={{ border: 0 }} 
                      width="100%" 
                      height="600" 
                      frameBorder="0"
                      title="Norivane Appointment Scheduler"
                    ></iframe>
                  </div>
                </div>

                {/* Alternative Contact Option */}
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-dark-blue mb-2">
                    Prefer to Send Details First?
                  </h4>
                  <p className="text-medium-grey mb-4">
                    Tell us about your goals and we'll reach out to schedule the perfect time.
                  </p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-teal/90 transition-colors duration-200 flex items-center space-x-2 mx-auto"
                  >
                    <MessageSquare size={20} />
                    <span>Send Details</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">Details Sent!</h3>
                    <p className="text-medium-grey mb-4">{submitMessage}</p>
                    <p className="text-sm text-medium-grey">
                      We'll contact you within 24 hours to schedule your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-dark-blue">Send Your Details</h3>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="text-teal hover:text-teal/80 font-medium"
                      >
                        ← Back to Calendar
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-dark-blue mb-2">
                          <User size={16} className="inline mr-2" />
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
                          <Mail size={16} className="inline mr-2" />
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-dark-blue mb-2">
                          <Phone size={16} className="inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                          placeholder="+44 7356 224125"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-dark-blue mb-2">
                          <Building size={16} className="inline mr-2" />
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
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-semibold text-dark-blue mb-2">
                        <Calendar size={16} className="inline mr-2" />
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
                      <label htmlFor="preferredTime" className="block text-sm font-semibold text-dark-blue mb-2">
                        <Clock size={16} className="inline mr-2" />
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 7PM)</option>
                        <option value="flexible">I'm flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        Tell us about your goals *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                        placeholder="What are your main business goals and challenges? What would you like to achieve?"
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
                          <span>Send Details</span>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-medium-grey text-center">
                      We respect your privacy and will never share your information. 
                      Expect a response within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal
