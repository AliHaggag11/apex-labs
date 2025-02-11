'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaKey, FaLock, FaUserShield } from 'react-icons/fa';

const authMethods = [
  {
    icon: FaKey,
    title: 'API Keys',
    description: 'Simple and secure way to authenticate API requests',
    example: `curl -X GET https://api.apexlabs.ai/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    details: [
      'Generate API keys from the dashboard',
      'Include in Authorization header',
      'Rotate keys periodically for security',
      'Different keys for different environments'
    ]
  },
  {
    icon: FaUserShield,
    title: 'OAuth 2.0',
    description: 'Secure user authentication for third-party applications',
    example: `// Initialize OAuth client
const client = new ApexLabs({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'https://your-app.com/callback'
});

// Generate authorization URL
const authUrl = client.getAuthorizationUrl();`,
    details: [
      'Secure user authorization',
      'Access and refresh tokens',
      'Scoped permissions',
      'Standard OAuth 2.0 flows'
    ]
  }
];

export default function Authentication() {
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
          Authentication
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-gray-600 dark:text-dark-muted"
        >
          Learn how to authenticate your requests to the Apex Labs API
        </motion.p>
      </div>

      {/* Security Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl border border-yellow-200 dark:border-yellow-700/30"
      >
        <div className="flex items-start">
          <FaLock className="w-6 h-6 text-yellow-600 dark:text-yellow-500 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
              Security Best Practices
            </h3>
            <ul className="mt-2 space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>Never share your API keys or client secrets</li>
              <li>Store credentials securely in environment variables</li>
              <li>Rotate API keys periodically</li>
              <li>Use different API keys for development and production</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Authentication Methods */}
      <div className="space-y-12">
        {authMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="p-6 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/10">
                <method.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                  {method.title}
                </h2>
                <p className="text-gray-600 dark:text-dark-muted">
                  {method.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-3">
                  Example Usage
                </h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-xl overflow-x-auto">
                  <code>{method.example}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {method.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <FaKey className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                      <span className="text-gray-700 dark:text-dark-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="p-6 bg-gray-50 dark:bg-dark-card/20 rounded-2xl">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">
          Additional Resources
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/api/errors" className="text-primary-600 dark:text-primary-400 hover:underline">
              Error handling and authentication errors →
            </Link>
          </li>
          <li>
            <Link href="/api/rate-limits" className="text-primary-600 dark:text-primary-400 hover:underline">
              Rate limiting and quotas →
            </Link>
          </li>
          <li>
            <Link href="/docs/security" className="text-primary-600 dark:text-primary-400 hover:underline">
              Security best practices →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 