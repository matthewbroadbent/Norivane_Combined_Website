import React from 'react'
import { motion } from 'framer-motion'
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react'

const AIProcess = () => {
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
              <Search size={32} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Assessment</h3>
            <p className="text-medium-grey mb-4">
              Analyze your business processes and identify the highest-impact AI opportunities.
            </p>
            <div className="text-sm text-teal font-semibold">Week 1-2</div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench size={32} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Development</h3>
            <p className="text-medium-grey mb-4">
              Build and configure AI solutions tailored to your specific business needs.
            </p>
            <div className="text-sm text-teal font-semibold">Week 3-8</div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Deployment</h3>
            <p className="text-medium-grey mb-4">
              Launch AI solutions with comprehensive training and support for your team.
            </p>
            <div className="text-sm text-teal font-semibold">Week 9-10</div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={32} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Optimization</h3>
            <p className="text-medium-grey mb-4">
              Monitor performance and continuously optimize for maximum ROI and efficiency.
            </p>
            <div className="text-sm text-teal font-semibold">Week 11-12</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIProcess
