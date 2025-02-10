'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-9xl font-extrabold">
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
              404
            </span>
          </div>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400/20 to-blue-400/20 dark:from-primary-400/10 dark:to-blue-400/10 blur-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-primary-400/20 dark:from-blue-400/10 dark:to-primary-400/10 blur-xl"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 space-y-4"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-dark-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 bg-white dark:bg-dark-card rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 border border-gray-200/50 dark:border-dark-border/50 group hover:bg-gradient-to-br hover:from-primary-50 hover:to-blue-50 dark:hover:from-primary-900/10 dark:hover:to-blue-900/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 rounded-xl bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:bg-white dark:group-hover:bg-dark-card transition-colors">
                  <FaHome className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                  Back to Home
                </span>
              </div>
            </motion.div>
          </Link>

          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 bg-white dark:bg-dark-card rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 border border-gray-200/50 dark:border-dark-border/50 group hover:bg-gradient-to-br hover:from-primary-50 hover:to-blue-50 dark:hover:from-primary-900/10 dark:hover:to-blue-900/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 rounded-xl bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:bg-white dark:group-hover:bg-dark-card transition-colors">
                  <FaSearch className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                  Browse Services
                </span>
              </div>
            </motion.div>
          </Link>

          <Link href="#contact">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 bg-white dark:bg-dark-card rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-dark-border/10 border border-gray-200/50 dark:border-dark-border/50 group hover:bg-gradient-to-br hover:from-primary-50 hover:to-blue-50 dark:hover:from-primary-900/10 dark:hover:to-blue-900/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 rounded-xl bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:bg-white dark:group-hover:bg-dark-card transition-colors">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-dark-text">
                  Contact Support
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Additional help text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-sm text-gray-500 dark:text-dark-muted"
        >
          If you believe this is a mistake, please{' '}
          <Link 
            href="#contact" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            contact our support team
          </Link>.
        </motion.p>
      </div>
    </div>
  );
} 