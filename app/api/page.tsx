'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaKey, FaCode, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: FaKey,
    title: 'Authentication',
    description: 'Learn how to authenticate your requests using API keys and OAuth 2.0.',
    href: '/api/authentication'
  },
  {
    icon: FaCode,
    title: 'API Endpoints',
    description: 'Explore our comprehensive list of API endpoints and their functionalities.',
    href: '/api/endpoints'
  },
  {
    icon: FaRocket,
    title: 'Quick Start',
    description: 'Get started quickly with our API using our step-by-step guide.',
    href: '/api/quickstart'
  }
];

const codeExample = `curl -X POST https://api.apexlabs.ai/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Project",
    "description": "A test project"
  }'`;

export default function APIReference() {
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
          API Reference
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-xl text-gray-600 dark:text-dark-muted"
        >
          Build powerful applications with our comprehensive API
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

      {/* Quick Example */}
      <div className="prose dark:prose-invert max-w-none">
        <h2>Quick Example</h2>
        <p>
          Here's a simple example of how to create a new project using our API:
        </p>
        <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto">
          <code>{codeExample}</code>
        </pre>

        <h2 className="mt-12">Base URL</h2>
        <p>
          All API requests should be made to:
        </p>
        <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl">
          <code>https://api.apexlabs.ai/v1</code>
        </pre>

        <h2 className="mt-12">Authentication</h2>
        <p>
          Apex Labs API uses API keys to authenticate requests. You can view and manage your API keys in the{' '}
          <Link href="/dashboard/settings" className="text-primary-600 dark:text-primary-400 hover:underline">
            Dashboard
          </Link>.
        </p>
        <p>
          All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
        </p>

        <h2 className="mt-12">Request Format</h2>
        <p>
          The API accepts request data in JSON format. Make sure to include the following header in your requests:
        </p>
        <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl">
          <code>Content-Type: application/json</code>
        </pre>

        <h2 className="mt-12">Next Steps</h2>
        <ul>
          <li>
            Learn about <Link href="/api/authentication" className="text-primary-600 dark:text-primary-400 hover:underline">authentication methods</Link>
          </li>
          <li>
            Explore <Link href="/api/endpoints" className="text-primary-600 dark:text-primary-400 hover:underline">available endpoints</Link>
          </li>
          <li>
            Read our <Link href="/api/errors" className="text-primary-600 dark:text-primary-400 hover:underline">error handling guide</Link>
          </li>
          <li>
            Check <Link href="/api/rate-limits" className="text-primary-600 dark:text-primary-400 hover:underline">rate limits</Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 