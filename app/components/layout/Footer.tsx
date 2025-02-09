'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navigation = {
    solutions: [
      { name: 'Cloud & Infrastructure', href: '/services/cloud' },
      { name: 'Business Automation', href: '/services/automation' },
      { name: 'AI Solutions', href: '/services/ai' },
      { name: 'E-Commerce', href: '/services/ecommerce' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Partners', href: '/partners' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: FaLinkedin,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: FaTwitter,
      },
      {
        name: 'GitHub',
        href: '#',
        icon: FaGithub,
      },
      {
        name: 'Email',
        href: 'mailto:contact@apexlabs.com',
        icon: FaEnvelope,
      },
    ],
  };

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Apex Labs</h2>
              <p className="mt-4 text-gray-600 dark:text-dark-muted text-sm">
                Transforming businesses through digitalization and AI automation. 
                Stay ahead of the competition with our innovative solutions.
              </p>
            </motion.div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500 dark:text-dark-muted dark:hover:text-dark-text"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-dark-muted tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.href}
                        className="text-base text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-dark-muted tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.href}
                        className="text-base text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-dark-muted tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.href}
                        className="text-base text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-dark-border pt-8">
          <p className="text-base text-gray-400 dark:text-dark-muted text-center">
            &copy; {new Date().getFullYear()} Apex Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 