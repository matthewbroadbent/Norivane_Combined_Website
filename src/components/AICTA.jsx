import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, CheckCircle } from 'lucide-react'

const AICTA = ({ onBookingClick }) => {
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
            Join the businesses achieving 40% productivity gains and 500% ROI. 
            Book your free consultation and discover your AI opportunities.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={onBookingClick}
              className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-xl"
            >
              <Zap size={20} />
              <span>Book Free AI Consultation</span>
              <ArrowRight size={20} />
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AICTA
