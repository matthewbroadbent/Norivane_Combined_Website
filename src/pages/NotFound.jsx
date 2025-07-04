import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue to-teal flex items-center justify-center p-4">
      <SEOHelmet 
        title="Page Not Found | Norivane"
        description="The page you're looking for doesn't exist. Return to Norivane's homepage."
        noIndex={true}
      />

      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search size={64} className="text-white/70" />
          </div>
          
          <h1 className="text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best AI systems sometimes take unexpected paths.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-white text-dark-blue px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 shadow-lg"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-white/60"
        >
          <p className="text-sm">
            Lost? Try navigating to one of our main sections:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/ai" className="text-white/80 hover:text-white transition-colors">
              AI Solutions
            </Link>
            <Link to="/exit-planning" className="text-white/80 hover:text-white transition-colors">
              Exit Planning
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
