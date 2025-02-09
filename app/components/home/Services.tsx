'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaRobot, FaShoppingCart, FaChartLine, FaDatabase, FaIndustry } from 'react-icons/fa';

const services = [
  {
    title: 'IT Infrastructure & Cloud',
    description: 'Cloud migration, hybrid deployment, VPN, cybersecurity, and disaster recovery solutions.',
    icon: FaCloud,
    href: '/services/infrastructure'
  },
  {
    title: 'Business Process Automation',
    description: 'ERP, CRM, HR automation, e-signatures, and automated customer support systems.',
    icon: FaRobot,
    href: '/services/automation'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom online stores, digital payments, POS, and QR-based ordering systems.',
    icon: FaShoppingCart,
    href: '/services/ecommerce'
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, AI-driven marketing, automated campaigns, and intelligent chatbots.',
    icon: FaChartLine,
    href: '/services/marketing'
  },
  {
    title: 'Data Management',
    description: 'AI-based market research, BI dashboards, and comprehensive data digitization.',
    icon: FaDatabase,
    href: '/services/data'
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions for retail, healthcare, finance, legal, and manufacturing.',
    icon: FaIndustry,
    href: '/services/industry'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-dark-text sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-dark-muted">
            Comprehensive digital transformation solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={service.href}
                className="block p-6 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg dark:shadow-dark-border/10 dark:hover:shadow-dark-border/20 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary-600 dark:bg-primary-500 rounded-md shadow-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-dark-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-dark-muted">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 