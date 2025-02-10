'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFlask, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
    }, 1000);
  };

  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'Cloud Infrastructure', href: '/services#cloud' },
        { name: 'Business Process', href: '/services#process' },
        { name: 'E-Commerce', href: '/services#ecommerce' },
        { name: 'Data Analytics', href: '/services#analytics' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Partner Program', href: '/partners' },
        { name: 'Press Kit', href: '/press' }
      ]
    }
  ];

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 dark:from-primary-400 dark:to-blue-500">
                <FaFlask className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-dark-text">
                Apex Labs
              </span>
            </Link>
            <p className="text-gray-600 dark:text-dark-muted max-w-sm">
              Transforming businesses through cutting-edge AI and automation solutions. Stay updated with our latest innovations.
            </p>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text">
                Subscribe to our newsletter
              </h3>
              {isSubscribed ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-sm"
                >
                  Thank you for subscribing! 🎉
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {[
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaLinkedin, href: 'https://linkedin.com' },
                { icon: FaGithub, href: 'https://github.com' },
                { icon: FaEnvelope, href: 'mailto:contact@apexlabs.ai' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-dark-muted hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600 dark:text-dark-muted">
              <span>© 2024 Apex Labs. All rights reserved.</span>
              <div className="flex items-center space-x-8">
                <Link href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 