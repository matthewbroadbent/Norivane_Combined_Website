import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  FileText,
  Award
} from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import BookingModal from '../components/BookingModal'

const Exit = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const exitServices = [
    {
      icon: <DollarSign size={32} />,
      title: "Business Valuation",
      description: "Comprehensive valuation analysis to maximise your business worth and identify value drivers.",
      benefits: ["Professional valuation report", "Value optimisation strategies", "Market positioning analysis"]
    },
    {
      icon: <FileText size={32} />,
      title: "Exit Strategy Planning",
      description: "Develop a comprehensive exit strategy tailored to your goals, timeline, and market conditions.",
      benefits: ["Custom exit roadmap", "Tax optimisation", "Risk mitigation planning"]
    },
    {
      icon: <Award size={32} />,
      title: "Deal Execution",
      description: "Expert guidance through negotiations, due diligence, and closing to ensure optimal outcomes.",
      benefits: ["Buyer identification", "Negotiation support", "Transaction management"]
    }
  ]

  const exitOptions = [
    {
      title: "Strategic Sale",
      description: "Sell to a strategic buyer who values your business synergies",
      timeline: "6-12 months",
      valuation: "Premium valuations",
      bestFor: "Established businesses with unique assets"
    },
    {
      title: "Financial Sale",
      description: "Sell to private equity or financial buyers focused on returns",
      timeline: "4-8 months", 
      valuation: "Market valuations",
      bestFor: "Profitable businesses with growth potential"
    },
    {
      title: "Management Buyout",
      description: "Transfer ownership to existing management team",
      timeline: "3-6 months",
      valuation: "Fair market value",
      bestFor: "Businesses with strong management teams"
    },
    {
      title: "Employee Ownership",
      description: "Transition to employee ownership through EOT or similar",
      timeline: "6-18 months",
      valuation: "Tax-advantaged",
      bestFor: "Businesses with engaged workforce"
    }
  ]

  const valuationFactors = [
    "Financial performance and trends",
    "Market position and competitive advantages", 
    "Management team strength",
    "Customer base diversity and loyalty",
    "Operational efficiency and scalability",
    "Industry growth prospects",
    "Asset quality and condition",
    "Risk factors and mitigation strategies"
  ]

  const breadcrumbs = [
    { label: 'Exit Planning', url: null }
  ]

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title="Business Exit Planning Services | Maximise Your Business Sale | Norivane"
        description="Expert business exit planning and valuation services. Maximise your business sale value with strategic exit planning. 3x higher valuations achieved."
        keywords="business exit planning, business valuation, sell business, exit strategy, business sale, transaction advisory, business broker, exit consulting"
        canonicalUrl="/exit"
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
                Plan Your Perfect 
                <span className="text-teal"> Business Exit</span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Ready to sell? We help you maximise your business value and navigate 
                the complex exit process. From valuation optimisation to deal closure, 
                we ensure you get the best possible outcome for your life's work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Business Valuation</span>
                  <ArrowRight size={20} />
                </button>
                
                <a
                  href="#exit-options"
                  className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore Exit Options</span>
                  <Target size={20} />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-teal mb-1">3x</div>
                  <div className="text-sm text-gray-300">Higher Valuations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal mb-1">95%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal mb-1">£2.4M</div>
                  <div className="text-sm text-gray-300">Average Exit Value</div>
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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business exit planning and strategy consultation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center">
                    <Target size={24} className="text-dark-blue" />
                  </div>
                  <div>
                    <div className="font-bold text-dark-blue">Strategic</div>
                    <div className="text-sm text-medium-grey">Exit Planning</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exit Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Comprehensive Exit Planning Services
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              From initial valuation to final handshake, we guide you through every 
              step of your business exit journey with expert precision and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {exitServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6 text-dark-blue">
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
                      <CheckCircle size={16} className="text-dark-blue flex-shrink-0" />
                      <span className="text-dark-grey">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Options Section */}
      <section id="exit-options" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
              Choose Your Exit Path
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Different exit strategies suit different goals. We help you choose 
              the path that maximises value and aligns with your objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {exitOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-dark-blue mb-4">
                  {option.title}
                </h3>
                
                <p className="text-medium-grey mb-6 leading-relaxed">
                  {option.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-dark-blue mb-1">Timeline</div>
                    <div className="text-medium-grey">{option.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark-blue mb-1">Valuation</div>
                    <div className="text-medium-grey">{option.valuation}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-dark-blue mb-2">Best For:</div>
                  <div className="text-medium-grey">{option.bestFor}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                What Drives Your Business Value?
              </h2>
              <p className="text-xl text-medium-grey mb-8 leading-relaxed">
                Understanding the key factors that influence your business valuation 
                is crucial for maximising your exit value. We analyse every aspect 
                to identify opportunities for improvement.
              </p>

              <div className="space-y-3">
                {valuationFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-teal flex-shrink-0" />
                    <span className="text-dark-grey">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business valuation analysis and financial planning"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              <div className="absolute -top-6 -right-6 bg-teal text-white rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">£2.4M</div>
                  <div className="text-sm opacity-90">Average Exit</div>
                </div>
              </div>
            </motion.div>
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
              Ready to Plan Your Perfect Exit?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Your business represents years of hard work. Let us help you maximise 
              its value and ensure a smooth, profitable exit that secures your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Get Free Business Valuation</span>
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
        consultationType="Business Exit Planning Consultation"
      />
    </div>
  )
}

export default Exit
