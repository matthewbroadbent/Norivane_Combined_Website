import React from 'react'
import { motion } from 'framer-motion'
import { Bot, BarChart3, Cog, Brain, MessageSquare, Target } from 'lucide-react'

const AISolutions = () => {
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
            AI Solutions That Drive Real Results
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
            We implement practical AI solutions that deliver immediate ROI and measurable business impact.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare size={24} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Customer Service AI</h3>
            <p className="text-medium-grey mb-4">
              24/7 intelligent chatbots that handle 80% of customer inquiries instantly.
            </p>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li>• Instant response times</li>
              <li>• Multilingual support</li>
              <li>• Seamless human handoff</li>
              <li>• 60% cost reduction</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 size={24} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Predictive Analytics</h3>
            <p className="text-medium-grey mb-4">
              Forecast sales, optimize inventory, and predict customer behavior with AI.
            </p>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li>• Sales forecasting</li>
              <li>• Inventory optimization</li>
              <li>• Customer insights</li>
              <li>• Risk assessment</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
              <Cog size={24} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Process Automation</h3>
            <p className="text-medium-grey mb-4">
              Automate repetitive tasks and workflows to free up your team for strategic work.
            </p>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li>• Data entry automation</li>
              <li>• Invoice processing</li>
              <li>• Report generation</li>
              <li>• Workflow optimization</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
              <Target size={24} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Marketing AI</h3>
            <p className="text-medium-grey mb-4">
              Personalize customer experiences and optimize marketing campaigns with AI.
            </p>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li>• Personalized content</li>
              <li>• Lead scoring</li>
              <li>• Campaign optimization</li>
              <li>• Customer segmentation</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
              <Brain size={24} className="text-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Business Intelligence</h3>
            <p className="text-medium-grey mb-4">
              AI-powered insights and automated reporting for better decision making.
            </p>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li>• Automated insights</li>
              <li>• Real-time dashboards</li>
              <li>• Anomaly detection</li>
              <li>• Performance monitoring</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-dark-blue/10 rounded-lg flex items-center justify-center mb-6">
              <Bot size={24} className="text-dark-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-4">Custom AI Solutions</h3>
            <p className="text-medium-grey mb-4">
              Tailored AI solutions designed specifically for your industry and business needs.
            </p>
            <ul className="space-y-2 text-sm text-medium-grey">
              <li>• Industry-specific AI</li>
              <li>• Custom algorithms</li>
              <li>• Integration support</li>
              <li>• Ongoing optimization</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AISolutions
