'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full">
          <div className="w-[800px] h-[800px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full">
          <div className="w-[800px] h-[800px] bg-primary-300/30 dark:bg-primary-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-[600px] h-[600px] bg-primary-100/30 dark:bg-primary-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-dark-text sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span className="block">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                with Digitalization & AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-gray-600 dark:text-dark-muted sm:text-xl max-w-3xl"
            >
              Empower your organization with cutting-edge digital solutions and AI-driven automation. 
              Stay ahead of the competition with Apex Labs' innovative technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 md:text-lg shadow-lg shadow-primary-600/20 dark:shadow-primary-500/20"
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 dark:text-primary-400 bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-border md:text-lg shadow-lg shadow-gray-200/50 dark:shadow-dark-border/20 ring-1 ring-primary-600/20 dark:ring-primary-400/20"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: FaRocket, text: "Fast Implementation" },
                { icon: FaLightbulb, text: "Innovative Solutions" },
                { icon: FaChartLine, text: "Proven Results" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-600 dark:text-dark-muted"
                >
                  <feature.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 lg:mt-0 lg:col-span-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative w-full h-[400px] bg-gradient-to-br from-primary-500/5 to-primary-600/5 dark:from-primary-600/10 dark:to-primary-700/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-600/20 dark:to-primary-700/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-primary-600/10 dark:bg-primary-400/10 rounded-full flex items-center justify-center">
                      <FaRocket className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                    </div>
                    <p className="text-gray-600 dark:text-dark-muted text-sm">Interactive Demo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-dark-muted tracking-wide uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="mt-8 flex justify-center space-x-12">
            {['AWS', 'Microsoft', 'Google', 'SAP', 'Salesforce'].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 dark:text-dark-muted transition-all duration-300 filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100 font-semibold"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 