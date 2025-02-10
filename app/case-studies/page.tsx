'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaShoppingCart, FaHospital, FaUniversity, FaTruck, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const industries = [
  {
    icon: FaShoppingCart,
    title: "Retail & E-Commerce",
    description: "Digital transformation solutions for retail businesses",
    count: 12
  },
  {
    icon: FaHospital,
    title: "Healthcare",
    description: "AI-powered solutions for healthcare providers",
    count: 8
  },
  {
    icon: FaChartLine,
    title: "Finance & Banking",
    description: "Secure and efficient financial technology solutions",
    count: 10
  },
  {
    icon: FaUniversity,
    title: "Education",
    description: "Digital learning and educational technology",
    count: 6
  },
  {
    icon: FaTruck,
    title: "Logistics & Supply Chain",
    description: "Smart logistics and supply chain optimization",
    count: 9
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    description: "Advanced security and threat protection",
    count: 7
  }
];

const caseStudies = [
  {
    title: "E-Commerce Transformation for Major Retail Chain",
    category: "Digital Transformation",
    industry: "Retail & E-Commerce",
    challenge: "A leading retail chain with 50+ physical stores needed to establish a strong online presence and integrate their offline and online operations.",
    solution: "Implemented a comprehensive e-commerce solution with integrated inventory management, AI-powered recommendations, and omnichannel customer experience.",
    results: [
      "300% increase in online sales within 6 months",
      "50% reduction in inventory management time",
      "85% customer satisfaction rate",
      "Seamless integration of offline and online channels"
    ],
    tags: ["E-Commerce", "AI Integration", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
  },
  {
    title: "AI-Powered Healthcare Diagnostics Platform",
    category: "AI Automation",
    industry: "Healthcare",
    challenge: "A healthcare provider struggled with long diagnosis times and needed to improve accuracy in medical image analysis.",
    solution: "Developed an AI-powered diagnostic platform using computer vision and machine learning for rapid image analysis and diagnosis assistance.",
    results: [
      "75% reduction in diagnosis time",
      "99.2% accuracy in image analysis",
      "40% cost reduction in diagnostic processes",
      "Improved patient outcomes"
    ],
    tags: ["Healthcare", "AI", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80"
  },
  {
    title: "Supply Chain Optimization with IoT and AI",
    category: "Digital Transformation",
    industry: "Logistics & Supply Chain",
    challenge: "A logistics company faced inefficiencies in their supply chain and needed real-time visibility into their operations.",
    solution: "Implemented IoT sensors and AI-powered analytics for real-time tracking and predictive maintenance.",
    results: [
      "40% reduction in delivery delays",
      "60% improvement in inventory accuracy",
      "30% cost savings in operations",
      "Real-time visibility across the supply chain"
    ],
    tags: ["Logistics", "IoT", "AI Analytics"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
            >
              Success Stories
            </motion.span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl">
              Transforming Businesses
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
              Explore how we&apos;ve helped businesses across industries achieve digital transformation and embrace AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              Solutions by Industry
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Discover how we create impact across different sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl overflow-hidden p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/10">
                    <industry.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-dark-muted">
                      {industry.count} case studies
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-dark-muted mt-4">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
              Featured Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Real results from our innovative solutions
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 rounded-full">
                        {study.category}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-dark-muted bg-gray-100 dark:bg-dark-card/50 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">
                      {study.title}
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
                          Challenge
                        </h4>
                        <p className="text-gray-600 dark:text-dark-muted">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
                          Solution
                        </h4>
                        <p className="text-gray-600 dark:text-dark-muted">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaRocket className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-dark-muted">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-400/5 dark:to-blue-400/5" />
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-dark-card rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-400/5 dark:to-blue-400/5" />
            <div className="relative px-6 py-12 sm:px-12 lg:px-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 dark:text-dark-muted mb-8">
                Let&apos;s discuss how we can help you achieve similar results.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 dark:from-primary-500 dark:to-blue-500 dark:hover:from-primary-600 dark:hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-dark-bg transition-all duration-200"
                >
                  Schedule a Consultation
                  <FaArrowRight className="ml-3 -mr-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 