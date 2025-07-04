import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Users, Clock, CheckCircle, Star, Target, DollarSign, FileText } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import { exitFAQs } from '../data/faqData'

const ExitPlanning = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Exit Planning', url: '/exit-planning' }
  ]

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
        title="Strategic Exit Planning Services | Maximize Business Value | Norivane"
        description="Expert exit planning that maximizes your business value. From valuation to sale completion, we guide you through every step. 2-3x valuation increases achieved."
        keywords="exit planning, business sale, business valuation, strategic exit, business broker, sell business, exit strategy"
        canonicalUrl="/exit-planning"
      />
      
      <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-blue to-teal"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Exit Your Business<br />
              <span className="text-teal">Stronger Than Ever</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Strategic exit planning that maximizes your business value. From preparation to sale completion, 
              we guide you through every step to achieve the exit you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Target size={20} />
                <span>Start Exit Planning</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>2-3x valuation increases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Confidential process</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">3.2x</div>
                <div className="text-sm text-gray-300">Average Multiple</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">18</div>
                <div className="text-sm text-gray-300">Months Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">£50M+</div>
                <div className="text-sm text-gray-300">Value Created</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exit Planning Services */}
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
              Every successful exit starts with strategic planning. We optimize your business value and guide you through the entire process.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <DollarSign size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Business Valuation</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Accurate, defensible valuations using multiple methodologies. Understand your true business worth and identify value enhancement opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Multiple valuation methods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Market analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Value enhancement plan</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Value Optimization</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Strategic improvements to maximize your business value before sale. Focus on areas that buyers value most to achieve premium multiples.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Financial optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Operational efficiency</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Management systems</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Buyer Identification</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Access our extensive network of qualified buyers including strategic acquirers, private equity firms, and individual investors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Strategic buyers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Private equity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Individual investors</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6">
                <FileText size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Due Diligence Support</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Comprehensive preparation and management of the due diligence process to ensure smooth transactions and minimize deal risks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Data room preparation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Document organization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Buyer communication</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Transaction Management</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Expert guidance through negotiations, legal processes, and closing procedures to ensure optimal deal terms and successful completion.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Negotiation support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Legal coordination</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Closing management</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6">
                <Clock size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Post-Exit Planning</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Strategic planning for your post-exit life including wealth management, tax optimization, and new venture opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Wealth management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Tax optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Future opportunities</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
              Successful Exit Stories
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Real businesses, real exits, real results. See how our strategic approach maximizes value.
            </motion.p>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-medium-grey mb-6 italic">
                "Norivane's exit planning increased our business value by 280% over 18 months. 
                Their strategic approach and buyer network resulted in a competitive bidding situation 
                that exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                  <DollarSign size={24} className="text-teal" />
                </div>
                <div>
                  <div className="font-semibold text-dark-blue">Michael Thompson</div>
                  <div className="text-sm text-medium-grey">Former CEO, TechSolutions Ltd</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-medium-grey mb-6 italic">
                "The due diligence process was seamless thanks to Norivane's preparation. 
                They anticipated every buyer question and had all documentation ready. 
                The transaction closed 30% faster than industry average."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                  <Shield size={24} className="text-teal" />
                </div>
                <div>
                  <div className="font-semibold text-dark-blue">Emma Richardson</div>
                  <div className="text-sm text-medium-grey">Founder, GreenTech Innovations</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={exitFAQs} 
        title="Exit Planning FAQs"
        subtitle="Get answers to common questions about strategic exit planning and business sales."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-blue via-dark-blue to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Strategic Exit?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join the business owners who achieved 2-3x valuation increases. 
              Book your free consultation and discover your exit opportunities.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
              >
                <span>Book Free Exit Consultation</span>
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

export default ExitPlanning
