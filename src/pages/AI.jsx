import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, CheckCircle, Bot, BarChart3, Cog, Brain, MessageSquare, TrendingUp, Clock, Shield, Target } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import AIBenefits from '../components/AIBenefits'
import { aiFAQs } from '../data/faqData'

const AI = () => {
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
        title="AI Implementation Services | 40% Productivity Gains | Norivane"
        description="Transform your business with practical AI solutions. 40% productivity improvements, 90-day implementation, 300-500% ROI. Expert AI consulting for real results."
        keywords="AI implementation, artificial intelligence consulting, business automation, AI solutions, productivity improvement, chatbots, predictive analytics"
        canonicalUrl="/ai"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business<br />
              with <span className="text-teal">Practical AI Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Implement AI that delivers real results. 40% productivity improvements, 
              300-500% ROI, and measurable impact within 90 days—no technical expertise required.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Zap size={20} />
                <span>Start Your AI Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>90-day results guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>No technical team required</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">40%</div>
                <div className="text-sm text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">500%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">90</div>
                <div className="text-sm text-gray-300">Days to Results</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal mb-2">24/7</div>
                <div className="text-sm text-gray-300">AI Operations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions Section */}
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
              AI Solutions That Drive Real Results
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              We implement practical AI solutions that deliver immediate ROI and measurable business impact.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Customer Service AI</h3>
              <p className="text-medium-grey mb-4">
                24/7 intelligent chatbots that handle 80% of customer inquiries instantly.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Instant response times</li>
                <li>• Multilingual support</li>
                <li>• Seamless human handoff</li>
                <li>• 60% cost reduction</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={24} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Predictive Analytics</h3>
              <p className="text-medium-grey mb-4">
                Forecast sales, optimize inventory, and predict customer behavior with AI.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Sales forecasting</li>
                <li>• Inventory optimization</li>
                <li>• Customer insights</li>
                <li>• Risk assessment</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <Cog size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Process Automation</h3>
              <p className="text-medium-grey mb-4">
                Automate repetitive tasks and workflows to free up your team for strategic work.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Data entry automation</li>
                <li>• Invoice processing</li>
                <li>• Report generation</li>
                <li>• Workflow optimization</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Target size={24} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Marketing AI</h3>
              <p className="text-medium-grey mb-4">
                Personalize customer experiences and optimize marketing campaigns with AI.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Personalized content</li>
                <li>• Lead scoring</li>
                <li>• Campaign optimization</li>
                <li>• Customer segmentation</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <Brain size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Business Intelligence</h3>
              <p className="text-medium-grey mb-4">
                AI-powered insights and automated reporting for better decision making.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Automated insights</li>
                <li>• Real-time dashboards</li>
                <li>• Anomaly detection</li>
                <li>• Performance monitoring</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Bot size={24} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Custom AI Solutions</h3>
              <p className="text-medium-grey mb-4">
                Tailored AI solutions designed specifically for your industry and business needs.
              </p>
              <ul className="space-y-2 text-sm text-medium-grey">
                <li>• Industry-specific AI</li>
                <li>• Custom algorithms</li>
                <li>• Integration support</li>
                <li>• Ongoing optimization</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
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
              Our 90-Day AI Implementation Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              A proven methodology that delivers results quickly without disrupting your operations.
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
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Assessment</h3>
              <p className="text-medium-grey">
                Analyze your business processes and identify the highest-impact AI opportunities.
              </p>
              <div className="text-sm text-teal font-semibold mt-2">Week 1-2</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-dark-blue">2</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Strategy</h3>
              <p className="text-medium-grey">
                Develop a customized AI implementation roadmap tailored to your business goals.
              </p>
              <div className="text-sm text-teal font-semibold mt-2">Week 3-4</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Implementation</h3>
              <p className="text-medium-grey">
                Deploy AI solutions with minimal disruption to your existing operations.
              </p>
              <div className="text-sm text-teal font-semibold mt-2">Week 5-10</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-dark-blue">4</span>
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Optimization</h3>
              <p className="text-medium-grey">
                Monitor performance and continuously optimize for maximum ROI and efficiency.
              </p>
              <div className="text-sm text-teal font-semibold mt-2">Week 11-12</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Benefits Component */}
      <AIBenefits />

      {/* CTA Section */}
      <section className="py-20 bg-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join hundreds of businesses already benefiting from AI automation. 
              Get your free AI readiness assessment and implementation roadmap.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Zap size={20} />
                <span>Get Your Free AI Assessment</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-gray-300 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Free 30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Custom implementation roadmap</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={aiFAQs} />

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  )
}

export default AI
