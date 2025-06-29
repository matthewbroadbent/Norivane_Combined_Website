import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Target, Zap, Shield, Users, Award, ChevronDown } from 'lucide-react'

const Home = () => {
  const [progressData, setProgressData] = useState({
    ai: 45,
    exit: 35,
    both: 20
  })

  useEffect(() => {
    // Simulate dynamic progress data
    const interval = setInterval(() => {
      setProgressData(prev => ({
        ai: Math.max(30, Math.min(60, prev.ai + (Math.random() - 0.5) * 4)),
        exit: Math.max(20, Math.min(50, prev.exit + (Math.random() - 0.5) * 4)),
        both: Math.max(10, Math.min(30, prev.both + (Math.random() - 0.5) * 2))
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
              Scale Smarter or<br />
              <span className="text-teal">Sell Stronger?</span><br />
              Either Way, Make Your<br />
              Business <span className="text-white">Unstoppable</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Norivane unlocks hidden value—whether you're integrating AI for next-level growth 
              or plotting the perfect exit. Become the business everyone's watching (in a good way).
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/ai"
                className="group bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Zap size={20} />
                <span>Supercharge with AI</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                to="/exit"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Target size={20} />
                <span>Plot My Exit</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                to="/contact"
                className="group text-white hover:text-teal border-b-2 border-transparent hover:border-teal font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Let's Chat First</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Dynamic Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6">What are business owners choosing today?</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Scaling with AI</span>
                <span className="text-sm font-bold">{Math.round(progressData.ai)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-teal h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressData.ai}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Planning their exit</span>
                <span className="text-sm font-bold">{Math.round(progressData.exit)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressData.exit}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Doing both</span>
                <span className="text-sm font-bold">{Math.round(progressData.both)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal to-white h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressData.both}%` }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="animate-bounce text-white/70" />
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
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
              How We Help
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Two paths, one destination: a more valuable business that works for you, not against you.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Zap size={32} className="text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">AI for Growth</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Transform your business with AI that actually works. We cut through the hype to implement 
                solutions that boost productivity, reduce costs, and delight your customers.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-dark-grey">Process automation that saves hours daily</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-dark-grey">Customer insights that drive revenue</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-dark-grey">Competitive advantages that stick</span>
                </li>
              </ul>
              <Link
                to="/ai"
                className="inline-flex items-center space-x-2 text-teal font-semibold hover:text-teal/80 transition-colors duration-200"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Exit Planning</h3>
              <p className="text-medium-grey mb-6 leading-relaxed">
                Ready to sell? We make your business irresistible to buyers. From valuation optimization 
                to deal structuring, we handle the stress so you can focus on your victory lap.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue rounded-full"></div>
                  <span className="text-dark-grey">Maximize your business valuation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue rounded-full"></div>
                  <span className="text-dark-grey">Navigate complex deal structures</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-dark-blue rounded-full"></div>
                  <span className="text-dark-grey">Ensure smooth transition and legacy</span>
                </li>
              </ul>
              <Link
                to="/exit"
                className="inline-flex items-center space-x-2 text-dark-blue font-semibold hover:text-dark-blue/80 transition-colors duration-200"
              >
                <span>Plan Your Exit</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Norivane Section */}
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
              Why Norivane?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              We're not just consultants—we're your strategic partners in building unstoppable value.
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
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={40} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Proven Results</h3>
              <p className="text-medium-grey leading-relaxed">
                Our clients see measurable improvements in efficiency, profitability, and business value. 
                We don't just talk strategy—we deliver outcomes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Expert Guidance</h3>
              <p className="text-medium-grey leading-relaxed">
                Chartered accountancy meets business psychology. We understand both the numbers 
                and the human side of business transformation.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={40} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Personal Approach</h3>
              <p className="text-medium-grey leading-relaxed">
                Every business is unique. We craft bespoke solutions that fit your goals, 
                timeline, and vision for the future.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Award size={48} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get the Value Accelerator Checklist
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              7 Ways to Make Your Business Scale-Ready or Sale-Ready
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-dark-blue px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Download Free Checklist
                </button>
              </form>
              <p className="text-sm text-gray-300 mt-4">
                No spam, just valuable insights. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
              The best time to build value? Right now.
            </h2>
            <p className="text-xl text-medium-grey mb-8 max-w-2xl mx-auto">
              Whether you're planning to scale or sell, every day you wait is value left on the table. 
              Let's change that.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
