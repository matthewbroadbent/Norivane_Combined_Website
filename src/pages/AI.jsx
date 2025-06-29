import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Brain, TrendingUp, Users, CheckCircle, ArrowRight, Download, Calendar, Cpu, BarChart3, MessageSquare } from 'lucide-react'

const AI = () => {
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
    "Boost productivity by 30-50% through intelligent automation",
    "Reduce operational costs while improving service quality",
    "Gain competitive advantages that are hard to replicate",
    "Improve customer experience with personalized interactions",
    "Make data-driven decisions with predictive insights",
    "Scale your expertise without scaling your headcount"
  ]

  const myths = [
    {
      myth: "AI will replace all my employees",
      reality: "AI augments human capabilities, making your team more effective and valuable."
    },
    {
      myth: "AI is too expensive for small businesses",
      reality: "Modern AI solutions offer excellent ROI, often paying for themselves within months."
    },
    {
      myth: "AI is too complex to implement",
      reality: "With the right guidance, AI integration can be smooth and straightforward."
    },
    {
      myth: "AI only works for tech companies",
      reality: "Every industry can benefit from AI—from accounting to architecture."
    }
  ]

  const process = [
    {
      icon: <Brain size={32} />,
      title: "Discovery",
      description: "We analyze your business processes and identify AI opportunities that deliver real ROI.",
      duration: "1-2 weeks"
    },
    {
      icon: <Cpu size={32} />,
      title: "Integration",
      description: "Implement AI solutions that seamlessly integrate with your existing systems and workflows.",
      duration: "4-8 weeks"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Optimization",
      description: "Monitor performance, refine algorithms, and scale successful implementations.",
      duration: "Ongoing"
    }
  ]

  const useCases = [
    {
      title: "Document Processing",
      description: "Automatically extract, categorize, and process documents with 99%+ accuracy.",
      icon: <MessageSquare className="text-teal" size={24} />
    },
    {
      title: "Customer Insights",
      description: "Analyze customer behavior to predict needs and personalize experiences.",
      icon: <Users className="text-teal" size={24} />
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks so your team can focus on high-value work.",
      icon: <Zap className="text-teal" size={24} />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, identify risks, and make proactive business decisions.",
      icon: <TrendingUp className="text-teal" size={24} />
    }
  ]

  const faqs = [
    {
      question: "How do I know if my business is ready for AI?",
      answer: "If you have repetitive processes, large amounts of data, or want to improve customer experience, you're ready. We'll assess your AI readiness in our consultation."
    },
    {
      question: "What's the typical ROI of AI implementation?",
      answer: "Most clients see 200-400% ROI within the first year through increased efficiency, cost savings, and new revenue opportunities. Results vary by implementation scope."
    },
    {
      question: "Will AI disrupt my current operations?",
      answer: "We design implementations to enhance, not disrupt. Our phased approach ensures smooth integration with minimal operational impact."
    },
    {
      question: "How long does AI implementation take?",
      answer: "Simple automations can be deployed in weeks, while complex systems may take 2-6 months. We'll provide a clear timeline during discovery."
    },
    {
      question: "Do I need technical expertise to use AI?",
      answer: "No! We design user-friendly solutions and provide comprehensive training. Your team will be confident using AI tools from day one."
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
              AI That Actually Works<br />
              for Your Business<br />
              <span className="text-teal">(Not Just in Sci-Fi)</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              No robots will steal your lunch. But they might make you a better sandwich. 
              We cut through the AI hype to deliver solutions that actually boost your bottom line.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book an AI Consultation</span>
              </Link>
              <button className="bg-teal/20 backdrop-blur-md border border-teal/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/30 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download AI Readiness Checklist</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why AI for Growth Section */}
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
                Why AI for Growth?
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Because working harder isn't the answer. Working smarter is.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-dark-blue mb-6 flex items-center">
                  <CheckCircle className="text-teal mr-3" size={28} />
                  Real Benefits, Real Results
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
                <h3 className="text-2xl font-bold text-dark-blue mb-6">
                  Common AI Use Cases
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">{useCase.icon}</div>
                      <div>
                        <h4 className="font-semibold text-dark-blue mb-1">{useCase.title}</h4>
                        <p className="text-sm text-medium-grey">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Myths vs Reality Section */}
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
                Myths vs. Reality
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Let's debunk the AI hype and focus on what actually matters for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {myths.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-red-600 mb-2">❌ Myth:</h3>
                    <p className="text-dark-grey italic">"{item.myth}"</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-teal mb-2">✅ Reality:</h3>
                    <p className="text-dark-grey">{item.reality}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Norivane AI Method Section */}
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
                The Norivane AI Method
              </h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Our proven 3-step approach ensures AI implementations that actually work 
                and deliver measurable results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-teal">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-blue mb-4">{item.title}</h3>
                  <p className="text-medium-grey mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-sm text-teal font-semibold">{item.duration}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-teal to-dark-blue rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Success Story: Legal Firm Automation
                </h2>
                <p className="text-lg mb-6 text-gray-200">
                  "Norivane's AI solution automated our document review process, 
                  saving us 15 hours per week and improving accuracy by 40%. 
                  The ROI was immediate and substantial."
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                    alt="Client testimonial"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">James Richardson</div>
                    <div className="text-sm text-gray-300">Managing Partner, Richardson Law</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15</div>
                  <div className="text-sm text-gray-300">Hours Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal">40%</div>
                  <div className="text-sm text-gray-300">Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">300%</div>
                  <div className="text-sm text-gray-300">ROI in Year 1</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal">6</div>
                  <div className="text-sm text-gray-300">Weeks to Deploy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
                Everything you need to know about AI for your business
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg"
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
              Ready to Supercharge Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Stop wondering if AI can help your business. Let's find out together. 
              Book a consultation and discover your AI opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book an AI Consultation</span>
              </Link>
              <button className="bg-teal/20 backdrop-blur-md border border-teal/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal/30 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Download size={20} />
                <span>Download AI Readiness Checklist</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AI
