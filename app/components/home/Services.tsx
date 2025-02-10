'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaRobot, FaShoppingCart, FaChartLine, FaDatabase, FaIndustry} from 'react-icons/fa';
import clsx from 'clsx';

const services = [
  {
    title: 'IT Infrastructure & Cloud',
    description: 'Cloud migration, hybrid deployment, VPN, cybersecurity, and disaster recovery solutions.',
    icon: FaCloud,
    href: '/services/infrastructure',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Business Process Automation',
    description: 'ERP, CRM, HR automation, e-signatures, and automated customer support systems.',
    icon: FaRobot,
    href: '/services/automation',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom online stores, digital payments, POS, and QR-based ordering systems.',
    icon: FaShoppingCart,
    href: '/services/ecommerce',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, AI-driven marketing, automated campaigns, and intelligent chatbots.',
    icon: FaChartLine,
    href: '/services/marketing',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Data Management',
    description: 'AI-based market research, BI dashboards, and comprehensive data digitization.',
    icon: FaDatabase,
    href: '/services/data',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Industry Solutions',
    description: 'Specialized solutions for retail, healthcare, finance, legal, and manufacturing.',
    icon: FaIndustry,
    href: '/services/industry',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-dark-muted">
            Transform your business with our cutting-edge services and industry expertise
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.3) }}
              className={clsx(
                'group relative overflow-hidden rounded-3xl bg-white dark:bg-dark-card shadow-lg hover:shadow-xl dark:shadow-dark-border/10 dark:hover:shadow-dark-border/20 transition-all duration-300',
                {
                  'md:col-span-2 md:row-span-2': service.size === 'large',
                  'md:col-span-1 md:row-span-2': service.size === 'medium' && service.title !== 'E-Commerce Solutions',
                  'md:col-span-1 md:row-span-3': service.title === 'E-Commerce Solutions',
                  'md:col-span-1 md:row-span-1': service.size === 'small'
                }
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 dark:from-black/90 dark:to-black/50" />
              </div>

              <div className="relative h-full flex flex-col p-8">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-200 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-500 dark:to-blue-500 rounded-xl hover:shadow-lg hover:shadow-primary-600/20 dark:hover:shadow-primary-500/20 transition-all duration-300"
          >
            Explore All Solutions
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 