import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Shield, Users, CheckCircle, ArrowRight, Download, Calendar } from 'lucide-react'

const Exit = () => {
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

  const benefits = [
    "Maximize your business valuation by 20-40%",
    "Reduce time to sale by months, not years",
    "Navigate complex deal structures with confidence",
    "Minimize tax implications and maximize proceeds",
    "Ensure business continuity and protect your legacy",
    "Avoid common pitfalls that derail transactions"
  ]

  const pitfalls = [
    "Waiting too long to start planning",
    "Overvaluing your business without market validation",
    "Poor financial record-keeping and documentation",
    "Lack of management depth and succession planning",
    "Ignoring tax optimization strategies",
    "Emotional decision-making during negotiations"
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Valuation",
      description: "We assess your business value and identify optimization opportunities.",
      duration: "2-4 weeks"
    },
    {
      step: "2",
      title: "Value Enhancement",
      description: "Implement strategies to maximize your business worth and appeal.",
      duration: "3-12 months"
    },
    {
      step: "3",
      title: "Market Preparation",
      description: "Prepare marketing materials and identify potential buyers.",
      duration: "4-8 weeks"
    },
    {
      step: "4",
      title: "Transaction Management",
      description: "Guide you through negotiations, due diligence, and closing.",
      duration: "3-6 months"
    }
  ]

  const faqs = [
    {
      question: "When should I start planning my exit?",
      answer: "Ideally, 3-5 years before you want to sell. This gives us time to optimize your business value and prepare for a successful transaction. However, we can help at any stage."
    },
    {
      question: "How much is my business worth?",
      answer: "Business valuation depends on many factors including revenue, profitability, growth trends, market conditions, and industry multiples. We provide comprehensive valuations as part of our exit planning process."
    },
    {
      question: "What if I'm not ready to sell yet?",
      answer: "Perfect! Exit planning isn't just about selling—it's about building a more valuable, efficient business. Many of our strategies improve your business whether you sell or keep it."
    },
    {
      question: "How long does the exit process take?",
      answer: "From decision to close, typically 6-18 months depending on business complexity, market conditions, and buyer type. Preparation can take longer if value enhancement is needed."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We specialize in professional services firms, but work with any business generating £1M+ in revenue. Our expertise spans various industries and business models."
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Sell?<br />
              Let's Make Your Business <span className="text-teal">Irresistible</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              We take the stress out of selling, so you can focus on your victory lap. 
              From valuation to closing, we're your strategic partner every step of the way.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Your Exit Strategy Session</span>
              </Link>
              <button className="bg-teal/20 backdrop-blur-md border border-teal/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/30 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download Exit Planning Guide</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Plan Your Exit Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                Why Plan Your Exit?
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Most business owners leave millions on the table. Don't be one of them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-dark-blue mb-6 flex items-center">
                  <CheckCircle className="text-teal mr-3" size={28} />
                  Benefits of Exit Planning
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-dark-grey">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-dark-blue mb-6 flex items-center">
                  <Shield className="text-red-500 mr-3" size={28} />
                  Common Pitfalls to Avoid
                </h3>
                <div className="space-y-4">
                  {pitfalls.map((pitfall, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-dark-grey">{pitfall}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Norivane Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                The Norivane Approach
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Chartered accountancy meets business psychology. We understand both the numbers 
                and the emotions behind your biggest business decision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-3">{item.title}</h3>
                  <p className="text-medium-grey mb-4">{item.description}</p>
                  <div className="text-sm text-teal font-semibold">{item.duration}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-dark-blue to-teal rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Success Story: Professional Services Firm
                </h2>
                <p className="text-lg mb-6 text-gray-200">
                  "Norivane helped us increase our valuation by 35% and complete our exit 
                  in just 8 months. Their strategic approach and emotional support made 
                  all the difference."
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                    alt="Client testimonial"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm text-gray-300">Former CEO, Mitchell & Associates</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal">35%</div>
                  <div className="text-sm text-gray-300">Valuation Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-sm text-gray-300">Months to Close</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal">£2.4M</div>
                  <div className="text-sm text-gray-300">Final Sale Price</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-medium-grey">
                Everything you need to know about planning your exit
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-dark-blue mb-3">{faq.question}</h3>
                  <p className="text-medium-grey leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Exit Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Every day you wait is value left on the table. Let's unlock your business's 
              full potential and plan the exit you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Your Exit Strategy Session</span>
              </Link>
              <button className="bg-teal/20 backdrop-blur-md border border-teal/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/30 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download Exit Planning Guide</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Exit
