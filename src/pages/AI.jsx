import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Lightbulb,
  Cog
} from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import BookingModal from '../components/BookingModal'

const AI = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const aiServices = [
    {
      icon: <BarChart3 size={32} />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation that saves hours daily.",
      benefits: ["40% time savings", "Reduced errors", "24/7 operation"]
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Customer Intelligence",
      description: "Unlock deep customer insights with AI-powered analytics that drive revenue growth.",
      benefits: ["Personalized experiences", "Predictive analytics", "Higher conversion rates"]
    },
    {
      icon: <Cog size={32} />,
      title: "Operational Optimization",
      description: "Optimize your operations with AI that identifies inefficiencies and suggests improvements.",
      benefits: ["Cost reduction", "Performance insights", "Competitive advantage"]
    }
  ]

  const implementationSteps = [
    {
      step: "01",
      title: "AI Readiness Assessment",
      description: "We evaluate your current processes and identify the highest-impact AI opportunities."
    },
    {
      step: "02", 
      title: "Custom AI Strategy",
      description: "Develop a tailored AI implementation roadmap aligned with your business goals."
    },
    {
      step: "03",
      title: "Pilot Implementation",
      description: "Start with a focused pilot project to demonstrate value and build confidence."
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description: "Expand successful AI solutions across your organization with ongoing optimization."
    }
  ]

  const caseStudies = [
    {
      industry: "Manufacturing",
      challenge: "Manual production planning taking 8 hours daily",
      solution: "AI-powered demand forecasting and production optimization",
      results: ["60% planning time reduction", "35% efficiency increase", "£200K annual savings"]
    },
    {
      industry: "Professional Services",
      challenge: "Inconsistent client communication and follow-up",
      solution: "Automated client engagement and intelligent scheduling",
      results: ["50% faster response times", "30% more client meetings", "25% revenue increase"]
    },
    {
      industry: "E-commerce",
      challenge: "Poor product recommendations and inventory management",
      solution: "AI-driven personalization and demand prediction",
      results: ["45% higher conversion rates", "20% inventory reduction", "£500K revenue boost"]
    }
  ]

  const breadcrumbs = [
    { label: 'AI Solutions', url: null }
  ]

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="AI Implementation Services | Scale Your Business with AI | Norivane"
        description="Transform your business with expert AI implementation. Process automation, customer intelligence, and operational optimization. 40% efficiency gains guaranteed."
        keywords="AI implementation, business automation, artificial intelligence consulting, process automation, AI solutions, business intelligence, operational optimization"
        canonicalUrl="/ai"
      />

      <BreadcrumbNavigation customBreadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Supercharge Your Business with 
                <span className="text-teal"> AI That Actually Works</span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Stop wondering if AI can help your business. We implement proven AI solutions 
                that deliver measurable results within 90 days. From process automation to 
                customer intelligence, we make AI work for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get AI Assessment</span>
                  <ArrowRight size={20} />
                </button>
                
                <a
                  href="#case-studies"
                  className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>See Success Stories</span>
                  <TrendingUp size={20} />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal mb-1">40%</div>
                  <div className="text-sm text-gray-300">Average Time Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal mb-1">90</div>
                  <div className="text-sm text-gray-300">Days to ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal mb-1">500%</div>
                  <div className="text-sm text-gray-300">Typical ROI</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI and automation technology visualization"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Zap size={24} className="text-teal" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-blue">AI-Powered</div>
                    <div className="text-sm text-medium-grey">Business Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              AI Solutions That Drive Results
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              We don't just implement AI—we deliver measurable business outcomes 
              through strategic AI integration tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6 text-teal">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  {service.title}
                </h3>
                
                <p className="text-medium-grey mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-teal flex-shrink-0" />
                      <span className="text-dark-grey">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              A systematic approach that ensures successful AI adoption with minimal disruption to your operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-4">
                  {step.title}
                </h3>
                
                <p className="text-medium-grey leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results through strategic AI implementation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="text-sm font-semibold text-teal mb-2">
                  {study.industry}
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-4">
                  Challenge
                </h3>
                <p className="text-medium-grey mb-6">
                  {study.challenge}
                </p>

                <h4 className="text-lg font-semibold text-dark-blue mb-3">
                  Our Solution
                </h4>
                <p className="text-medium-grey mb-6">
                  {study.solution}
                </p>

                <h4 className="text-lg font-semibold text-dark-blue mb-3">
                  Results
                </h4>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-teal flex-shrink-0" />
                      <span className="text-dark-grey font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Supercharge Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Don't let your competitors get ahead. Start your AI transformation today 
              with a free assessment and custom strategy session.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Book Free AI Assessment</span>
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
        consultationType="AI Implementation Assessment"
      />
    </div>
  )
}

export default AI
