import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, FileText, Target, CheckCircle } from 'lucide-react'
import SEOHelmet from '../components/SEOHelmet'

const Assessment = () => {
    const benefits = [
        {
            icon: <Clock className="w-6 h-6 text-teal" />,
            title: "5 Minutes",
            description: "Quick multiple-choice questions about your current operations."
        },
        {
            icon: <Target className="w-6 h-6 text-teal" />,
            title: "AI Readiness Score",
            description: "Get a clear 0-100 score benchmarking your business maturity."
        },
        {
            icon: <FileText className="w-6 h-6 text-teal" />,
            title: "Personalized Roadmap",
            description: "Receive actionable next steps tailored to your specific score."
        }
    ]

    return (
        <div className="min-h-screen pt-20 pb-10 bg-gray-50">
            <SEOHelmet
                title="AI Readiness Assessment | Norivane"
                description="Take our free 5-minute AI readiness assessment. Get your personalized score and a roadmap to scalable operations."
                keywords="AI assessment, business readiness, AI litmus test, scalable operations, Norivane"
                canonicalUrl="/assessment"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
                        Free Business Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-dark-blue mb-6 leading-tight">
                        Is Your Business Running You, <br />
                        Or Are You Running It?
                    </h1>
                    <p className="text-xl text-medium-grey max-w-2xl mx-auto leading-relaxed">
                        Discover your "Scalable Ops" score in under 5 minutes. Identify the bottlenecks slowing you down and the AI opportunities that will speed you up.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
                >
                    <div className="p-8 md:p-12 text-center">
                        <div className="grid md:grid-cols-3 gap-8 mb-10 text-left">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-bold text-dark-blue mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-medium-grey">{benefit.description}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://ai-litmus-test.norivane.co.uk"
                            className="inline-flex items-center justify-center space-x-2 bg-teal text-white text-lg font-bold px-10 py-5 rounded-full shadow-lg hover:bg-teal/90 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                        >
                            <span>Start Free Assessment</span>
                            <ArrowRight size={22} className="group-hover:translate-x-1" />
                        </a>
                        <p className="mt-4 text-sm text-gray-400">
                            No login required to start • Instant results
                        </p>
                    </div>
                </motion.div>

                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-lg font-semibold text-dark-blue mb-6">What we measure:</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Process Maturity", "Tech Stack Integration", "Data Readiness", "Team Capability", "Automation Potential"].map((item, i) => (
                            <span key={i} className="flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 text-sm text-medium-grey shadow-sm">
                                <CheckCircle size={14} className="text-teal mr-2" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assessment
