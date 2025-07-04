import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, CheckCircle } from 'lucide-react'

const AIHero = ({ onBookingClick }) => {
  return (
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
              onClick={onBookingClick}
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
  )
}

export default AIHero
