'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaChartBar, FaCamera, FaUsers, FaCogs } from 'react-icons/fa';

const aiSolutions = [
  {
    title: 'AI-Powered Process Automation',
    description: 'Streamline operations with RPA, AI chatbots, and intelligent workflow automation.',
    icon: FaBrain,
    features: ['Robotic Process Automation', 'AI Chatbots', 'Workflow Optimization']
  },
  {
    title: 'Business Intelligence & Analytics',
    description: 'Make data-driven decisions with predictive analytics and fraud detection systems.',
    icon: FaChartBar,
    features: ['Predictive Analytics', 'Fraud Detection', 'Market Analysis']
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Implement advanced image processing and recognition systems.',
    icon: FaCamera,
    features: ['Object Detection', 'OCR Technology', 'Quality Control']
  },
  {
    title: 'AI-Driven Customer Engagement',
    description: 'Enhance customer experience with personalized recommendations and interactions.',
    icon: FaUsers,
    features: ['Smart Recommendations', 'Customer Segmentation', 'Behavior Analysis']
  },
  {
    title: 'Industry-Specific AI Solutions',
    description: 'Tailored AI solutions for healthcare, finance, retail, and more.',
    icon: FaCogs,
    features: ['Healthcare AI', 'Financial Analytics', 'Retail Intelligence']
  }
];

const AIAutomation = () => {
  return (
    <section id="ai-automation" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-dark-bg dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-dark-text sm:text-4xl">
            AI Automation Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-dark-muted">
            Transform your business with cutting-edge AI and automation technologies
          </p>
        </motion.div>

        <div className="mt-20">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary-600 dark:bg-primary-500 rounded-lg">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">{solution.title}</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-dark-muted mb-6">{solution.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-gray-700 dark:text-dark-text"
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg
                        className="h-5 w-5 text-primary-600 dark:text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="flex-1 p-8 bg-white dark:bg-dark-card rounded-2xl shadow-lg dark:shadow-dark-border/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-dark-border rounded-lg">
                  <div className="flex items-center justify-center h-full text-gray-400 dark:text-dark-muted">
                    Solution Preview
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutomation; 