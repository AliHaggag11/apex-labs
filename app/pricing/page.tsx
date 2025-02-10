'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight, FaChevronDown, FaRocket, FaCloud, FaRobot, FaCalculator } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    title: "Cloud & Infrastructure",
    icon: FaCloud,
    description: "Scalable cloud solutions tailored to your business needs",
    items: [
      "Infrastructure assessment",
      "Cloud migration strategy",
      "Scalability planning",
      "24/7 monitoring & support",
      "Security implementation"
    ]
  },
  {
    title: "Business Automation",
    icon: FaRocket,
    description: "Streamline your operations with intelligent automation",
    items: [
      "Process analysis",
      "Workflow optimization",
      "Custom automation solutions",
      "Integration services",
      "Performance monitoring"
    ]
  },
  {
    title: "AI Solutions",
    icon: FaRobot,
    description: "Leverage AI to transform your business",
    items: [
      "AI readiness assessment",
      "Custom AI model development",
      "Data strategy planning",
      "ML pipeline setup",
      "AI integration services"
    ]
  }
];

const faqs = [
  {
    question: "How is pricing determined?",
    answer: "Our pricing is based on multiple factors including project scope, business scale, required features, integration complexity, and ongoing support needs. We provide custom quotes after understanding your specific requirements."
  },
  {
    question: "Do you offer flexible payment terms?",
    answer: "Yes, we offer flexible payment terms and can structure payment schedules based on project milestones or other arrangements that work best for your business."
  },
  {
    question: "Can pricing scale with my business?",
    answer: "Absolutely! Our solutions are designed to scale with your business. We can adjust services and support as your needs grow, ensuring you only pay for what you need at each stage of your business growth."
  },
  {
    question: "What's included in the initial consultation?",
    answer: "Our initial consultation includes a comprehensive assessment of your business needs, technical requirements, and growth objectives. We'll discuss your goals, analyze your current infrastructure, and provide preliminary recommendations."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages tailored to your needs. This includes regular maintenance, monitoring, updates, and technical support to ensure your solutions continue to perform optimally."
  }
];

const businessScales = [
  { label: 'Startup (1-10 employees)', value: 'startup', multiplier: 1 },
  { label: 'Small Business (11-50 employees)', value: 'small', multiplier: 1.5 },
  { label: 'Medium Business (51-200 employees)', value: 'medium', multiplier: 2 },
  { label: 'Enterprise (201+ employees)', value: 'enterprise', multiplier: 3 }
];

const serviceComplexity = [
  { label: 'Basic', value: 'basic', multiplier: 1 },
  { label: 'Standard', value: 'standard', multiplier: 1.5 },
  { label: 'Advanced', value: 'advanced', multiplier: 2 },
  { label: 'Custom Enterprise', value: 'enterprise', multiplier: 3 }
];

export default function Pricing() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [businessScale, setBusinessScale] = useState(businessScales[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [complexity, setComplexity] = useState(serviceComplexity[0]);

  const calculateEstimate = () => {
    if (selectedServices.length === 0) return 0;
    
    const basePrice = 5000; // Base price per service
    const servicesMultiplier = Math.max(1, selectedServices.length * 0.8); // Slight discount for multiple services
    const estimate = basePrice * servicesMultiplier * businessScale.multiplier * complexity.multiplier;
    
    return Math.round(estimate / 1000) * 1000; // Round to nearest thousand
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

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
              Flexible Pricing
            </motion.span>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl">
              Tailored Solutions for
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                Your Business Scale
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
              We believe in providing customized pricing that aligns with your business needs and scale. Our solutions are designed to grow with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-dark-card rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-400/5 dark:to-blue-400/5" />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center opacity-5" />
            </div>
            
            <div className="relative px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/10 to-blue-500/10 dark:from-primary-400/10 dark:to-blue-400/10 mb-6">
                  <FaCalculator className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
                  Estimate Calculator
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
                  Get a rough estimate for your project. Final pricing may vary based on specific requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Business Scale Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                    Business Scale
                  </label>
                  <div className="space-y-2">
                    {businessScales.map((scale) => (
                      <button
                        key={scale.value}
                        onClick={() => setBusinessScale(scale)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          businessScale.value === scale.value
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10'
                            : 'border-gray-200 dark:border-dark-border hover:border-primary-300'
                        } text-left transition-all duration-200`}
                      >
                        {scale.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Complexity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                    Service Complexity
                  </label>
                  <div className="space-y-2">
                    {serviceComplexity.map((level) => (
                      <button
                        key={level.value}
                        onClick={() => setComplexity(level)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          complexity.value === level.value
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10'
                            : 'border-gray-200 dark:border-dark-border hover:border-primary-300'
                        } text-left transition-all duration-200`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">
                  Select Services
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {features.map((feature) => (
                    <button
                      key={feature.title}
                      onClick={() => toggleService(feature.title)}
                      className={`p-4 rounded-xl border ${
                        selectedServices.includes(feature.title)
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10'
                          : 'border-gray-200 dark:border-dark-border hover:border-primary-300'
                      } text-left transition-all duration-200`}
                    >
                      <div className="flex items-center space-x-3">
                        <feature.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span className="font-medium">{feature.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimate Display */}
              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-dark-text">
                    Estimated Range
                  </h3>
                  <div className="mt-2 text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {selectedServices.length === 0 ? (
                      "Select services to see estimate"
                    ) : (
                      <>
                        ${(calculateEstimate() * 0.8).toLocaleString()} - ${(calculateEstimate() * 1.2).toLocaleString()}
                      </>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-dark-muted mb-6">
                  This is a rough estimate. Final pricing may vary based on specific requirements and customizations.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 dark:from-primary-500 dark:to-blue-500 dark:hover:from-primary-600 dark:hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-dark-bg transition-all duration-200"
                  >
                    Get Accurate Quote
                    <FaArrowRight className="ml-3 -mr-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-dark-card rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-400/5 dark:to-blue-400/5" />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center opacity-5" />
            </div>
            
            <div className="relative px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/10 to-blue-500/10 dark:from-primary-400/10 dark:to-blue-400/10 mb-6">
                  <FaRocket className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
                  Get a Custom Quote
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
                  Our pricing is based on your specific needs and business scale. Schedule a consultation to discuss your requirements and get a personalized quote.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex justify-center"
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

      {/* Features Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">
                Our Service Offerings
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
                Comprehensive solutions tailored to your business requirements
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/10 to-blue-500/10 dark:from-primary-400/10 dark:to-blue-400/10 text-primary-600 dark:text-primary-400 group-hover:from-primary-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-dark-muted mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <FaCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-dark-text">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-blue-500/5 dark:from-primary-400/5 dark:to-blue-400/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-blue-500/10 dark:from-primary-400/10 dark:to-blue-400/10 rounded-full blur-2xl" />
              
              <h2 className="text-4xl font-bold text-gray-900 dark:text-dark-text relative">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
                Everything you need to know about our pricing and services
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-start justify-between focus:outline-none group-hover:bg-gray-50/50 dark:group-hover:bg-dark-card/50 rounded-2xl transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg ${
                        openFaqIndex === index
                          ? 'bg-primary-500/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400'
                          : 'bg-gray-100 text-gray-500 dark:bg-dark-card/50 dark:text-dark-muted'
                      } transition-colors duration-200`}>
                        <motion.div
                          animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text pr-8">
                        {faq.question}
                      </h3>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                      >
                        <div className="px-8 pb-6">
                          <div className="pt-4 border-t border-gray-100 dark:border-dark-border">
                            <p className="text-gray-600 dark:text-dark-muted leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional help text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-dark-muted">
              Still have questions? {" "}
              <Link 
                href="/contact" 
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Get in touch with our team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 