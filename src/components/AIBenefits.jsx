import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star, DollarSign, Clock, Shield, Users } from 'lucide-react'

const AIBenefits = () => {
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
            Why Businesses Choose Our AI Solutions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
            Real results from real businesses. See the measurable impact of strategic AI implementation.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-4xl font-bold text-teal mb-2">40%</div>
            <div className="text-medium-grey">Average Productivity Increase</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-4xl font-bold text-teal mb-2">500%</div>
            <div className="text-medium-grey">Average ROI Within 12 Months</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-4xl font-bold text-teal mb-2">90</div>
            <div className="text-medium-grey">Days to See Results</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <div className="text-4xl font-bold text-teal mb-2">24/7</div>
            <div className="text-medium-grey">AI Operations</div>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
              <DollarSign size={24} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Cost Reduction</h3>
            <p className="text-medium-grey mb-4">
              Reduce operational costs by 30-60% through intelligent automation and optimization.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Lower labor costs</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Reduced errors</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Optimized resources</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
              <Clock size={24} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Time Savings</h3>
            <p className="text-medium-grey mb-4">
              Free up 20-40 hours per week by automating repetitive tasks and processes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Automated workflows</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Instant processing</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">24/7 operations</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8">
            <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
              <Users size={24} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Better Customer Experience</h3>
            <p className="text-medium-grey mb-4">
              Deliver personalised, instant service that exceeds customer expectations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Instant responses</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Personalised service</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-teal" />
                <span className="text-dark-grey text-sm">Consistent quality</span>
              </li>
            </ul>
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
              "Our AI chatbot now handles 85% of customer inquiries instantly. Customer satisfaction
              increased by 40% while our support costs dropped by 60%. The ROI was incredible."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mr-4">
                <Users size={24} className="text-teal" />
              </div>
              <div>
                <div className="font-semibold text-dark-blue">Sarah Mitchell</div>
                <div className="text-sm text-medium-grey">CEO, RetailTech Solutions</div>
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
              "The predictive analytics transformed our inventory management. We reduced waste by 35%
              and improved cash flow significantly. The insights are incredibly accurate."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-dark-blue/10 rounded-full flex items-center justify-center mr-4">
                <DollarSign size={24} className="text-dark-blue" />
              </div>
              <div>
                <div className="font-semibold text-dark-blue">James Rodriguez</div>
                <div className="text-sm text-medium-grey">Operations Director, FreshMart</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIBenefits
