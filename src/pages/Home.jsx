import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import { homeFAQs } from '../data/faqData'

const Home = () => {
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
        title="Norivane | AI Implementation & Strategic Exit Planning | Business Growth Experts"
        description="Transform your business with AI implementation and strategic exit planning. 40% productivity gains, 3x higher valuations. Expert consulting for ambitious business owners."
        keywords="AI implementation, business exit planning, business consulting, artificial intelligence, exit strategy, business valuation, productivity improvement"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
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
              Transform Your Business<br />
              with <span className="text-teal">AI & Strategic Exits</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              We help ambitious business owners implement AI for 40% productivity gains 
              and plan strategic exits for 3x higher valuations. Real results, not just advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Zap size={20} />
                <span>Book Free Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>90-day results guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>No long-term contracts</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">40%</div>
                <div className="text-sm text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">3x</div>
                <div className="text-sm text-gray-300">Higher Valuations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">90</div>
                <div className="text-sm text-gray-300">Days to Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">£2.4M</div>
                <div className="text-sm text-gray-300">Average Exit Value</div>
              </div>
            </div>
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
              Two Paths to Business Success
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Whether you're looking to grow with AI or planning your exit, we deliver results that matter.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} className="text-teal" />
              </div>
              <h3 className="text-3xl font-bold text-dark-blue mb-4">AI Implementation</h3>
              <p className="text-medium-grey mb-6 text-lg leading-relaxed">
                Transform your operations with practical AI solutions that deliver immediate ROI. 
                From customer service automation to predictive analytics.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-teal" />
                  <span className="text-dark-grey">40% productivity improvement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-teal" />
                  <span className="text-dark-grey">90-day implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-teal" />
                  <span className="text-dark-grey">No technical expertise required</span>
                </li>
              </ul>
              <a
                href="/ai"
                className="inline-flex items-center text-teal font-semibold hover:text-teal/80 transition-colors duration-200"
              >
                Learn More About AI Solutions
                <ArrowRight size={20} className="ml-2" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-3xl font-bold text-dark-blue mb-4">Strategic Exit Planning</h3>
              <p className="text-medium-grey mb-6 text-lg leading-relaxed">
                Maximize your business value and plan the perfect exit. From valuation 
                optimization to buyer identification and deal execution.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-dark-blue" />
                  <span className="text-dark-grey">3x higher valuations achieved</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-dark-blue" />
                  <span className="text-dark-grey">Confidential process</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-dark-blue" />
                  <span className="text-dark-grey">End-to-end support</span>
                </li>
              </ul>
              <a
                href="/exit"
                className="inline-flex items-center text-dark-blue font-semibold hover:text-dark-blue/80 transition-colors duration-200"
              >
                Learn More About Exit Planning
                <ArrowRight size={20} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
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
              Real Results from Real Businesses
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Our clients see measurable improvements within 90 days. Here's what they achieve.
            </motion.p>
          </motion.div>

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
              <p className="text-medium-grey mb-6 italic text-lg">
                "Norivane's AI implementation transformed our customer service. We now handle 
                3x more inquiries with the same team, and customer satisfaction is up 45%. 
                The ROI was clear within 6 weeks."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-teal" />
                </div>
                <div>
                  <div className="font-semibold text-dark-blue">Sarah Mitchell</div>
                  <div className="text-sm text-medium-grey">CEO, TechFlow Solutions</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-medium-grey mb-6 italic text-lg">
                "The exit planning process was flawless. Norivane helped us achieve a 
                valuation 2.8x higher than our initial estimate. Their expertise in 
                positioning and negotiation was invaluable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp size={24} className="text-dark-blue" />
                </div>
                <div>
                  <div className="font-semibold text-dark-blue">James Rodriguez</div>
                  <div className="text-sm text-medium-grey">Founder, RetailMax (Sold for £3.2M)</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Business Owners Choose Norivane
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              We're not just consultants—we're your partners in transformation and success.
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
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Results Guaranteed</h3>
              <p className="text-medium-grey">
                90-day results guarantee. If you don't see measurable improvements, 
                we'll work with you until you do—at no additional cost.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Expert Team</h3>
              <p className="text-medium-grey">
                Deloitte-trained chartered accountant with deep expertise in AI 
                implementation and strategic business exits.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Fast Implementation</h3>
              <p className="text-medium-grey">
                See results within 90 days, not months. Our proven methodologies 
                deliver rapid, sustainable improvements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={homeFAQs}
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our AI implementation and exit planning services."
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join the businesses already seeing 40% productivity gains and 3x higher valuations. 
              Book your free consultation today.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={20} />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-teal" />
                  <span>90-day results guarantee</span>
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
        consultationType="Business Transformation Consultation"
      />
    </div>
  )
}

export default Home
