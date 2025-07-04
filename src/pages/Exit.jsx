import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight, CheckCircle, Users, Shield, Clock, Target, DollarSign, FileText, Handshake } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import { exitFAQs } from '../data/faqData'

const Exit = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

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
    <div className="min-h-screen">
      <SEOHelmet 
        title="Strategic Exit Planning | Maximize Business Value | Norivane"
        description="Expert exit planning services to maximize your business valuation. 3x higher valuations, confidential process, end-to-end support. Plan your perfect business exit."
        keywords="exit planning, business valuation, sell business, M&A advisory, business exit strategy, company sale"
        canonicalUrl="/exit"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Maximize Your Business Value<br />
              with <span className="text-teal">Strategic Exit Planning</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Plan the perfect exit strategy and achieve 3x higher valuations. From business 
              optimization to buyer identification and deal execution—we handle everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <TrendingUp size={20} />
                <span>Get Your Business Valued</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Confidential process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>No upfront fees</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">3x</div>
                <div className="text-sm text-gray-300">Higher Valuations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">£2.4M</div>
                <div className="text-sm text-gray-300">Average Exit Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">18</div>
                <div className="text-sm text-gray-300">Months Average Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">95%</div>
                <div className="text-sm text-gray-300">Successful Exits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Our Proven Exit Planning Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              A systematic approach to maximizing your business value and ensuring a successful exit.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">1. Assessment</h3>
              <p className="text-medium-grey">
                Comprehensive business valuation and identification of value optimization opportunities.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">2. Optimization</h3>
              <p className="text-medium-grey">
                Strategic improvements to operations, financials, and market positioning to maximize value.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">3. Marketing</h3>
              <p className="text-medium-grey">
                Confidential buyer identification and competitive marketing to qualified prospects.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">4. Execution</h3>
              <p className="text-medium-grey">
                Negotiation, due diligence management, and deal closure with optimal terms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Comprehensive Exit Planning Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Everything you need for a successful business exit, from initial planning to final closure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
                <DollarSign size={24} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Business Valuation</h3>
              <p className="text-medium-grey mb-4">
                Professional valuation using multiple methodologies to determine accurate market value.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Discounted cash flow analysis</li>
                <li>• Market comparable assessment</li>
                <li>• Asset-based valuation</li>
                <li>• Strategic value identification</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Value Optimization</h3>
              <p className="text-medium-grey mb-4">
                Strategic improvements to maximize your business value before going to market.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Revenue growth strategies</li>
                <li>• Cost optimization</li>
                <li>• Process systematization</li>
                <li>• Management team development</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Buyer Identification</h3>
              <p className="text-medium-grey mb-4">
                Access to our extensive network of qualified buyers and strategic partners.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Strategic buyers</li>
                <li>• Private equity firms</li>
                <li>• Individual investors</li>
                <li>• International buyers</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <FileText size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Due Diligence</h3>
              <p className="text-medium-grey mb-4">
                Comprehensive preparation and management of the due diligence process.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Data room preparation</li>
                <li>• Financial documentation</li>
                <li>• Legal compliance review</li>
                <li>• Buyer question management</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Handshake size={24} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Deal Negotiation</h3>
              <p className="text-medium-grey mb-4">
                Expert negotiation to secure the best possible terms and deal structure.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Price negotiation</li>
                <li>• Deal structure optimization</li>
                <li>• Terms and conditions</li>
                <li>• Risk mitigation</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Post-Sale Support</h3>
              <p className="text-medium-grey mb-4">
                Ongoing support to ensure a smooth transition and successful integration.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Transition planning</li>
                <li>• Integration support</li>
                <li>• Earnout management</li>
                <li>• Ongoing advisory</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Why Choose Norivane for Your Exit
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Our expertise and proven track record deliver superior results for business owners.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Expert Team</h3>
              <p className="text-medium-grey">
                Deloitte-trained chartered accountants with deep M&A experience and proven track record.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Confidential Process</h3>
              <p className="text-medium-grey">
                Strict confidentiality protocols to protect your business and employees throughout the process.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Proven Results</h3>
              <p className="text-medium-grey">
                95% success rate with average valuations 3x higher than initial estimates.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={exitFAQs}
        title="Exit Planning Questions"
        subtitle="Get answers to common questions about our strategic exit planning process."
      />

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Exit?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Get a confidential business valuation and learn how we can help you achieve 
              the exit you deserve. No obligations, just expert insights.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
              >
                <span>Get Your Free Valuation</span>
                <ArrowRight size={20} />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-teal" />
                  <span>Completely confidential</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBookingModal} 
        onClose={() => setShowBookingModal(false)}
        consultationType="Exit Planning Consultation"
      />
    </div>
  )
}

export default Exit
