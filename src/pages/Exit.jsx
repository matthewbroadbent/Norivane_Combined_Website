import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Target, TrendingUp, Shield, Users, CheckCircle, Star, Award } from 'lucide-react'
import BookingModal from '../components/BookingModal'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation'
import FAQSection from '../components/FAQSection'
import SEOHelmet from '../components/SEOHelmet'
import { exitFAQs } from '../data/faqData'

const Exit = () => {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Exit Planning', url: '/exit' }
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
        title="Strategic Exit Planning Services | Maximize Business Value | Norivane"
        description="Expert exit planning to maximize your business sale value. From valuation optimization to buyer identification, we ensure your perfect exit strategy."
        keywords="exit planning, business valuation, sell business, business sale, strategic exit, business broker, exit strategy"
        canonicalUrl="/exit"
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
              Plan Your Perfect Exit<br />
              <span className="text-teal">Maximize Your Legacy</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Ready to sell? We make your business irresistible to buyers. Strategic exit planning 
              that maximizes value, minimizes stress, and ensures your perfect transition.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setShowBookingModal(true)}
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Target size={20} />
                <span>Start Exit Planning</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <div className="text-white/80 text-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Confidential process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-teal" />
                  <span>Maximize business value</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exit Services Section */}
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
              Complete Exit Planning Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              From initial valuation to final handover, we guide you through every step of your exit journey.
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
                <TrendingUp size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Business Valuation</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Comprehensive valuation using multiple methodologies to determine your business's true worth and identify value enhancement opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Market-based analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Financial modeling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Value optimization plan</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Buyer Identification</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Strategic buyer identification and qualification to ensure the best fit for your business and maximum sale value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={16} className="text-teal" />
                  <span className="text-dark-grey text-sm">Strategic buyers</span>
                </li>
                <li