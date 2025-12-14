import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Zap, Shield, Users, Award, ChevronDown } from 'lucide-react'
import { sendLeadMagnetRequest } from '../utils/emailService'
import BookingModal from '../components/BookingModal'
import SEOHelmet from '../components/SEOHelmet'

const Home = () => {
  const [progressData, setProgressData] = useState({
    ai: 45,
    exit: 35,
    both: 20
  })
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [leadMagnetEmail, setLeadMagnetEmail] = useState('')
  const [leadMagnetStatus, setLeadMagnetStatus] = useState('')
  const [isSubmittingLead, setIsSubmittingLead] = useState(false)

  useEffect(() => {
    // Simulate dynamic progress data
    const interval = setInterval(() => {
      setProgressData(prev => ({
        ai: Math.max(30, Math.min(60, prev.ai + (Math.random() - 0.5) * 4)),
        exit: Math.max(20, Math.min(50, prev.exit + (Math.random() - 0.5) * 4)),
        both: Math.max(10, Math.min(30, prev.both + (Math.random() - 0.5) * 2))
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleLeadMagnetSubmit = async (e) => {
    e.preventDefault()
    setIsSubmittingLead(true)

    try {
      const result = await sendLeadMagnetRequest(leadMagnetEmail)

      if (result.success) {
        setLeadMagnetStatus('success')
        setLeadMagnetEmail('')
        setTimeout(() => setLeadMagnetStatus(''), 3000)
      } else {
        setLeadMagnetStatus('error')
        setTimeout(() => setLeadMagnetStatus(''), 3000)
      }
    } catch (error) {
      setLeadMagnetStatus('error')
      setTimeout(() => setLeadMagnetStatus(''), 3000)
    } finally {
      setIsSubmittingLead(false)
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
    <div className="min-h-screen">
      <SEOHelmet
        title="Norivane - Scale Smarter or Sell Stronger | Business Consulting"
        description="Unlock hidden business value with AI implementation or strategic exit planning. Expert guidance from Deloitte-trained consultants for unstoppable business growth."
        keywords="business consulting, AI implementation, exit planning, business valuation, strategic consulting, business growth, AI solutions"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Is Your Business<br />
              Running You, or Are<br />
              You <span className="text-teal">Running It?</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Take the 5-minute AI Readiness Assessment
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/assessment"
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Zap size={20} />
                <span>Take The Free Assessment</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                to="/exit"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Target size={20} />
                <span>Plot My Exit</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <button
                onClick={() => setShowBookingModal(true)}
                className="group text-white hover:text-teal border-b-2 border-transparent hover:border-teal font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Let's Chat First</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </motion.div>

          {/* Dynamic Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6">What are business owners choosing today?</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Scaling with AI</span>
                <span className="text-sm font-bold">{Math.round(progressData.ai)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-teal h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressData.ai}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Planning their exit</span>
                <span className="text-sm font-bold">{Math.round(progressData.exit)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressData.exit}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Doing both</span>
                <span className="text-sm font-bold">{Math.round(progressData.both)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal to-white h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressData.both}%` }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="animate-bounce text-white/70" />
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
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
              How We Help
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Two paths, one destination: a more valuable business that works for you, not against you.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">AI for Growth</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Transform your business with AI that actually works. We cut through the hype to implement
                solutions that boost productivity, reduce costs, and delight your customers.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-dark-grey">Process automation that saves hours daily</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-dark-grey">Customer insights that drive revenue</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-dark-grey">Competitive advantages that stick</span>
                </li>
              </ul>
              <Link
                to="/ai"
                className="inline-flex items-center space-x-2 text-teal font-semibold hover:text-teal/80 transition-colors duration-200"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Exit Planning</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Ready to sell? We make your business irresistible to buyers. From valuation optimisation
                to deal structuring, we handle the stress so you can focus on your victory lap.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue rounded-full"></div>
                  <span className="text-dark-grey">Maximise your business valuation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue rounded-full"></div>
                  <span className="text-dark-grey">Navigate complex deal structures</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue rounded-full"></div>
                  <span className="text-dark-grey">Ensure smooth transition and legacy</span>
                </li>
              </ul>
              <Link
                to="/exit"
                className="inline-flex items-center space-x-2 text-dark-blue font-semibold hover:text-dark-blue/80 transition-colors duration-200"
              >
                <span>Plan Your Exit</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Norivane Section */}
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
              Why Norivane?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              We're not just consultants. We're your strategic partners in building unstoppable value.
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
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={40} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Proven Results</h3>
              <p className="text-medium-grey leading-relaxed">
                Our clients see measurable improvements within 90 days. From 40% productivity gains
                to 3x valuation increases, we deliver results that matter.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Expert Guidance</h3>
              <p className="text-medium-grey leading-relaxed">
                Led by a Deloitte chartered accountant with deep expertise in business
                transformation, AI implementation, and strategic exit planning.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={40} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Personal Approach</h3>
              <p className="text-medium-grey leading-relaxed">
                No cookie-cutter solutions. We take time to understand your unique business,
                goals, and challenges to create a strategy that's perfectly tailored to you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
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
              Success Stories
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Real businesses, real transformations, real results.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                  <Award size={24} className="text-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue">Manufacturing Firm</h4>
                  <p className="text-sm text-medium-grey">AI Implementation</p>
                </div>
              </div>
              <p className="text-medium-grey mb-4">
                "Norivane's AI solutions reduced our production planning time by 60% and
                increased efficiency by 35%. The ROI was clear within 8 weeks."
              </p>
              <div className="text-teal font-semibold">40% cost reduction</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center mr-4">
                  <Target size={24} className="text-dark-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue">Tech Startup</h4>
                  <p className="text-sm text-medium-grey">Exit Planning</p>
                </div>
              </div>
              <p className="text-medium-grey mb-4">
                "Their strategic exit planning helped us achieve a valuation 3x higher than
                our initial expectations. The process was smooth and stress-free."
              </p>
              <div className="text-dark-blue font-semibold">£2.4M exit value</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal to-dark-blue/20 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue">Service Business</h4>
                  <p className="text-sm text-medium-grey">AI + Exit Strategy</p>
                </div>
              </div>
              <p className="text-medium-grey mb-4">
                "We implemented AI to streamline operations while preparing for sale.
                The dual approach maximised our business value significantly."
              </p>
              <div className="text-gradient font-semibold">Both paths, maximum value</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Ready to Unlock Your Business Value?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey mb-8 max-w-2xl mx-auto">
              Get our free "Business Value Accelerator" guide—discover the 7 strategies that
              increase business value by 40% or more.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">
                Free Download: Business Value Accelerator Guide
              </h3>
              <p className="text-medium-grey mb-6">
                Learn the exact strategies we use to help businesses increase their value,
                whether they're scaling with AI or preparing for exit.
              </p>

              {leadMagnetStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award size={24} className="text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-green-800 mb-2">Guide Sent!</h4>
                  <p className="text-green-700">
                    Check your email for the Business Value Accelerator guide.
                    We'll also send you exclusive insights to help grow your business value.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadMagnetSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={leadMagnetEmail}
                    onChange={(e) => setLeadMagnetEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="bg-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmittingLead ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Guide</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}

              {leadMagnetStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please try again or contact us directly on us@norivane.com.
                  </p>
                </div>
              )}

              <p className="text-sm text-medium-grey mt-4">
                No spam, ever. Unsubscribe anytime. We respect your privacy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              Your Business Deserves to Be Unstoppable
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Whether you're ready to scale with AI or plan your perfect exit,
              the time to act is now. Let's build something extraordinary together.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={20} />
              </button>

              <Link
                to="/contact"
                className="text-white hover:text-teal border-b-2 border-transparent hover:border-teal font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Send us a Message</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
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

export default Home
