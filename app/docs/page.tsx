'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaBook, FaCode } from 'react-icons/fa';
import Link from 'next/link';

const features = [
  {
    icon: FaRocket,
    title: 'Quick Start',
    description: 'Get up and running with our platform in minutes. Follow our step-by-step guide to start building.',
    href: '/docs/quickstart'
  },
  {
    icon: FaBook,
    title: 'Core Concepts',
    description: 'Learn about the fundamental concepts and architecture that power our platform.',
    href: '/docs/architecture'
  },
  {
    icon: FaCode,
    title: 'API Reference',
    description: 'Explore our comprehensive API documentation with examples and use cases.',
    href: '/docs/api/overview'
  }
];

export default function Documentation() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl"
        >
          Documentation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-xl text-gray-600 dark:text-dark-muted"
        >
          Everything you need to know about our platform
        </motion.p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            <Link href={feature.href}>
              <div className="h-full p-6 bg-white dark:bg-dark-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-dark-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-muted">
                  {feature.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Getting Started Section */}
      <div className="prose dark:prose-invert max-w-none">
        <h2>Getting Started</h2>
        <p>
          Welcome to the Apex Labs documentation! Here you&apos;ll find comprehensive guides and documentation to help you start working with our platform as quickly as possible, as well as support if you get stuck.
        </p>

        <h3>What is Apex Labs?</h3>
        <p>
          Apex Labs is a cutting-edge digital solutions platform that helps businesses transform their operations through innovative technology. Our platform provides powerful tools and services for:
        </p>
        <ul>
          <li>Digital Transformation</li>
          <li>AI &amp; Automation Solutions</li>
          <li>Custom Software Development</li>
          <li>Cloud Infrastructure Management</li>
          <li>Data Analytics &amp; Insights</li>
        </ul>

        <h3>Prerequisites</h3>
        <p>
          Before you begin, make sure you have:
        </p>
        <ul>
          <li>An active Apex Labs account</li>
          <li>Basic understanding of web technologies</li>
          <li>Development environment setup (see <Link href="/docs/installation" className="text-primary-600 dark:text-primary-400 hover:underline">Installation Guide</Link>)</li>
        </ul>

        <h3>Next Steps</h3>
        <p>
          To get started with Apex Labs:
        </p>
        <ol>
          <li>Follow our <Link href="/docs/quickstart" className="text-primary-600 dark:text-primary-400 hover:underline">Quick Start Guide</Link></li>
          <li>Explore the <Link href="/docs/architecture" className="text-primary-600 dark:text-primary-400 hover:underline">Core Concepts</Link></li>
          <li>Check out our <Link href="/docs/api/overview" className="text-primary-600 dark:text-primary-400 hover:underline">API Documentation</Link></li>
        </ol>
      </div>
    </div>
  );
} 