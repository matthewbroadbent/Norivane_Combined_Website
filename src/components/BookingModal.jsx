import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, CheckCircle } from 'lucide-react'

const BookingModal = ({ isOpen, onClose, consultationType = "Free Consultation" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    revenue: '',
    challenge: '',
    preferredDate: '',
    preferredTime: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        revenue: '',
        challenge: '',
        preferredDate: '',
        preferredTime: ''
      })
      onClose()
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {!isSubmitted ? (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-dark-blue">Book Your {consultationType}</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>
                <p className="text-medium-grey mt-2">
                  Let's discuss how we can help transform your business with AI or plan your strategic exit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-blue mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-blue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-blue mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-blue mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-blue mb-2">
                    Annual Revenue Range
                  </label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-500k">Under £500K</option>
                    <option value="500k-1m">£500K - £1M</option>
                    <option value="1m-5m">£1M - £5M</option>
                    <option value="5m-10m">£5M - £10M</option>
                    <option value="over-10m">Over £10M</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-blue mb-2">
                    Primary Challenge or Goal *
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                    placeholder="Describe your main business challenge or what you'd like to achieve..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-blue mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-blue mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal transition-colors duration-200"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 7PM)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-dark-blue mb-2">What to Expect:</h4>
                  <ul className="space-y-1 text-sm text-medium-grey">
                    <li>• 30-minute consultation call</li>
                    <li>• Business assessment and recommendations</li>
                    <li>• No sales pressure or obligations</li>
                    <li>• Actionable insights you can implement immediately</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal hover:bg-teal/90 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book My Free Consultation</span>
                </button>
              </form>
            </>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Booking Confirmed!</h3>
              <p className="text-medium-grey mb-6">
                Thank you for booking your consultation. We'll be in touch within 24 hours to confirm your appointment details.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-medium-grey">
                  Check your email for confirmation details and a calendar invite.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default BookingModal
