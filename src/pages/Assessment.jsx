import React from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'

const Assessment = () => {
    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            <SEOHelmet
                title="AI Readiness Assessment | Norivane"
                description="Take our free 5-minute AI readiness assessment to see how your business operations stack up and get a personalized roadmap."
                keywords="AI assessment, business readiness, AI litmus test, scalable operations, Norivane"
                canonicalUrl="/assessment"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-4">
                        Is Your Business Running You, <br className="hidden md:block" />
                        Or Are You Running It?
                    </h1>
                    <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                        Take our free 5-minute assessment to discover your AI readiness score and get a personalized roadmap for growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="relative w-full h-[800px] md:h-[600px]">
                        <iframe
                            src="https://ai-litmus-test.norivane.co.uk"
                            title="AI Litmus Test"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allow="clipboard-write"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Assessment
