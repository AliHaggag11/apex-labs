'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  {
    title: 'Installation',
    description: 'Install the Apex Labs SDK and set up your development environment.',
    code: `npm install @apex-labs/sdk
# or
yarn add @apex-labs/sdk`,
    details: [
      'Requires Node.js 14 or higher',
      'Compatible with all major JavaScript frameworks',
      'Includes TypeScript support out of the box'
    ]
  },
  {
    title: 'Configuration',
    description: 'Configure your API credentials and initialize the SDK.',
    code: `import { ApexLabs } from '@apex-labs/sdk';

const client = new ApexLabs({
  apiKey: 'your-api-key',
  environment: 'production' // or 'development'
});`,
    details: [
      'Get your API key from the dashboard',
      'Choose between production and development environments',
      'Set optional configuration parameters'
    ]
  },
  {
    title: 'Make Your First API Call',
    description: 'Test the SDK with a simple API call.',
    code: `// Example: Create a new project
const project = await client.projects.create({
  name: 'My First Project',
  description: 'A test project using Apex Labs SDK'
});

console.log('Project created:', project.id);`,
    details: [
      'Verify your API credentials',
      'Handle responses and errors properly',
      'Explore available API endpoints'
    ]
  }
];

export default function QuickStart() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-dark-text"
        >
          Quick Start Guide
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-gray-600 dark:text-dark-muted"
        >
          Get up and running with Apex Labs in minutes. Follow this guide to make your first integration.
        </motion.p>
      </div>

      {/* Prerequisites */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 bg-primary-50 dark:bg-primary-900/10 rounded-2xl"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">Prerequisites</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <FaCheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
            <span className="text-gray-700 dark:text-dark-muted">Node.js 14 or higher installed</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
            <span className="text-gray-700 dark:text-dark-muted">
              An <Link href="/docs/installation" className="text-primary-600 dark:text-primary-400 hover:underline">Apex Labs account</Link> with API access
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
            <span className="text-gray-700 dark:text-dark-muted">Basic knowledge of JavaScript/TypeScript</span>
          </li>
        </ul>
      </motion.div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="p-6 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">
              {index + 1}. {step.title}
            </h2>
            <p className="text-gray-600 dark:text-dark-muted mb-6">
              {step.description}
            </p>
            <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto">
              <code>{step.code}</code>
            </pre>
            <ul className="mt-6 space-y-2">
              {step.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <FaCheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                  <span className="text-gray-700 dark:text-dark-muted">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-gray-50 dark:bg-dark-card/20 rounded-2xl">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">Next Steps</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/docs/architecture" className="text-primary-600 dark:text-primary-400 hover:underline">
              Learn about our architecture →
            </Link>
          </li>
          <li>
            <Link href="/docs/api/overview" className="text-primary-600 dark:text-primary-400 hover:underline">
              Explore the API documentation →
            </Link>
          </li>
          <li>
            <Link href="/docs/integration/examples" className="text-primary-600 dark:text-primary-400 hover:underline">
              View integration examples →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 