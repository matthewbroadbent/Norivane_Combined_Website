import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import { aiFAQs } from '../data/faqData'

const AI = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'AI Solutions', url: '/ai' }
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
        title="AI Implementation Services | Transform Your Business with AI | Norivane"
        description="Implement AI solutions that deliver real ROI. From automation to predictive analytics, we help businesses leverage AI for growth. 40% productivity gains guaranteed."
        keywords="AI implementation, business automation, artificial intelligence consulting, AI solutions, machine learning, process automation, AI ROI"
        canonicalUrl="/ai"
      />
      
      <BreadcrumbNavigation breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              with <span className="text-teal">AI That Actually Works</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Skip the AI hype. We implement practical solutions that boost productivity by 40%, 
              reduce costs, and delight your customers. Real AI, real results, real ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Zap size={20} />
                <span>Start AI Transformation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>90-day results guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>No technical expertise required</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Section */}
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
              AI Solutions That Drive Results
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              We implement AI where it matters most—automating tasks, improving decisions, and enhancing customer experiences.
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
                <Users size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Customer Service AI</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                24/7 intelligent chatbots that handle 80% of customer inquiries, reducing response times from hours to seconds while maintaining personal touch.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Instant customer responses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Seamless human handoff</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Multi-channel support</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Predictive Analytics</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Turn your data into actionable insights. Predict customer behavior, optimize inventory, and identify growth opportunities before your competitors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Sales forecasting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Customer lifetime value</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Risk assessment</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Process Automation</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Eliminate repetitive tasks with intelligent automation. From invoice processing to appointment scheduling, free your team for strategic work.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Document processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Workflow optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Quality control</span>
                </li>
              </ul>
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
              Our AI implementations deliver measurable improvements within 90 days.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-teal mb-2">40%</div>
              <div className="text-medium-grey">Productivity Increase</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-teal mb-2">60%</div>
              <div className="text-medium-grey">Faster Response Times</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-teal mb-2">25%</div>
              <div className="text-medium-grey">Cost Reduction</div>
            </div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-teal mb-2">90</div>
              <div className="text-medium-grey">Days to ROI</div>
            </motion.div>
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
                "Norivane's AI chatbot handles 85% of our customer inquiries automatically. 
                Our team can now focus on complex issues while customers get instant help 24/7. 
                Customer satisfaction is up 30%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-teal" />
                </div>
                <div>
                  <div className="font-semibold text-dark-blue">Sarah Mitchell</div>
                  <div className="text-sm text-medium-grey">Operations Director, TechFlow Solutions</div>
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
                "The predictive analytics system has transformed our inventory management. 
                We've reduced waste by 35% and never run out of popular items. 
                The ROI was clear within 6 weeks."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp size={24} className="text-teal" />
                </div>
                <div>
                  <div className="font-semibold text-dark-blue">James Rodriguez</div>
                  <div className="text-sm text-medium-grey">CEO, RetailMax</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our AI Implementation Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              A proven methodology that delivers results in weeks, not months.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Assessment</h3>
              <p className="text-medium-grey">
                We analyze your business processes to identify the highest-impact AI opportunities.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Design</h3>
              <p className="text-medium-grey">
                Custom AI solutions designed specifically for your business needs and existing systems.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Implementation</h3>
              <p className="text-medium-grey">
                Seamless integration with comprehensive training and support for your team.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal">4</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Optimization</h3>
              <p className="text-medium-grey">
                Continuous monitoring and improvement to maximize your AI investment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={aiFAQs} title="AI Implementation FAQs" />

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
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join the businesses already seeing 40% productivity gains. 
              Book your free consultation and discover your AI opportunities.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
              >
                <span>Book Free AI Consultation</span>
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
        consultationType="AI Implementation Consultation"
      />
    </div>
  )
}

export default AI
