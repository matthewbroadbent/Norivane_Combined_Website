import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Shield, CheckCircle, Target, Briefcase, GraduationCap } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'

const About = () => {
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
        title="About Norivane | Expert AI Implementation & Exit Planning Consultants"
        description="Meet the Deloitte-trained experts behind Norivane. Specializing in AI implementation and strategic exit planning with proven results for ambitious business owners."
        keywords="about norivane, AI consultants, exit planning experts, business transformation, deloitte experience, chartered accountant"
        canonicalUrl="/about"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-blue via-dark-blue/90 to-teal text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Businesses Through
              <span className="text-teal block">Expert Guidance</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              We're the Deloitte-trained experts helping ambitious business owners achieve 
              extraordinary results through AI implementation and strategic exit planning.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
                Our Story
              </h2>
              <p className="text-lg text-medium-grey mb-6 leading-relaxed">
                Norivane was founded on a simple belief: every business owner deserves access to 
                world-class expertise that drives real, measurable results. After years of working 
                with Fortune 500 companies at Deloitte, we saw a gap in the market.
              </p>
              <p className="text-lg text-medium-grey mb-6 leading-relaxed">
                Small and medium businesses were being left behind in the AI revolution and 
                struggling with complex exit planning processes. We decided to change that by 
                bringing enterprise-level expertise directly to ambitious business owners.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Today, we've helped hundreds of businesses implement AI solutions that deliver 
                40% productivity improvements and execute strategic exits with valuations 3x 
                higher than initial estimates.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal mb-2">500+</div>
                    <div className="text-sm text-medium-grey">Businesses Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dark-blue mb-2">£50M+</div>
                    <div className="text-sm text-medium-grey">Total Exit Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal mb-2">98%</div>
                    <div className="text-sm text-medium-grey">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-dark-blue mb-2">15+</div>
                    <div className="text-sm text-medium-grey">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Meet Our Leadership Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              Deloitte-trained experts with deep experience in AI implementation and strategic business exits.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Sarah Chen</h3>
              <p className="text-teal font-semibold mb-4">Founder & CEO</p>
              <p className="text-medium-grey mb-4">
                Former Deloitte Senior Manager with 12+ years in business transformation 
                and AI implementation. Chartered Accountant (ACA).
              </p>
              <div className="flex items-center justify-center space-x-2">
                <GraduationCap size={16} className="text-teal" />
                <span className="text-sm text-medium-grey">Oxford MBA, ACA</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-24 h-24 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Michael Rodriguez</h3>
              <p className="text-dark-blue font-semibold mb-4">Head of Exit Planning</p>
              <p className="text-medium-grey mb-4">
                Former Deloitte M&A specialist with 15+ years in strategic exits and 
                business valuations. Led 200+ successful transactions.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Briefcase size={16} className="text-dark-blue" />
                <span className="text-sm text-medium-grey">CFA, MBA</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-24 h-24 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Dr. James Wilson</h3>
              <p className="text-teal font-semibold mb-4">Head of AI Solutions</p>
              <p className="text-medium-grey mb-4">
                Former Deloitte AI Practice Lead with PhD in Machine Learning. 
                Implemented AI solutions for 300+ businesses.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Award size={16} className="text-teal" />
                <span className="text-sm text-medium-grey">PhD ML, MSc AI</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
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
                <Shield size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Results Guaranteed</h3>
              <p className="text-medium-grey">
                We stand behind our work with a 90-day results guarantee. 
                Your success is our success.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Transparency First</h3>
              <p className="text-medium-grey">
                Clear communication, honest assessments, and transparent 
                pricing in everything we do.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-teal" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Client-Centric</h3>
              <p className="text-medium-grey">
                Your business goals drive our strategy. We adapt our 
                approach to fit your unique needs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-4">Excellence Always</h3>
              <p className="text-medium-grey">
                We bring the same standards of excellence we learned 
                at Deloitte to every client engagement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Business Owners Choose Norivane
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-medium-grey max-w-3xl mx-auto">
              We combine world-class expertise with a personal touch that larger firms can't match.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Enterprise Expertise, Personal Service</h3>
              <p className="text-medium-grey mb-6">
                You get the same level of expertise that Fortune 500 companies pay millions for, 
                but with the personal attention and flexibility that only a boutique firm can provide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-teal" />
                  <span className="text-dark-grey">Direct access to senior partners</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-teal" />
                  <span className="text-dark-grey">Customized solutions for your business</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-teal" />
                  <span className="text-dark-grey">Rapid implementation and results</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Proven Track Record</h3>
              <p className="text-medium-grey mb-6">
                Our results speak for themselves. We've helped hundreds of businesses achieve 
                transformational growth and successful exits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-dark-blue" />
                  <span className="text-dark-grey">40% average productivity improvement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-dark-blue" />
                  <span className="text-dark-grey">3x higher exit valuations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-dark-blue" />
                  <span className="text-dark-grey">98% client satisfaction rate</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
