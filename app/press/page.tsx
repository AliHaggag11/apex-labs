'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDownload, FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const companyInfo = {
  founded: '2020',
  headquarters: 'San Francisco, CA',
  employees: '100+',
  funding: '$50M+ in funding',
  investors: ['Sequoia Capital', 'Andreessen Horowitz', 'Y Combinator'],
  description: 'Apex Labs is a leading provider of digital transformation and AI automation solutions, helping businesses modernize their operations through innovative technology.',
};

const brandAssets = [
  {
    title: 'Logo Package',
    description: 'Full logo kit including primary, secondary, and monochrome versions',
    format: 'AI, SVG, PNG, JPG',
    size: '12.4 MB',
    link: '/assets/apex-labs-logo-kit.zip'
  },
  {
    title: 'Brand Guidelines',
    description: 'Complete brand style guide with color palette, typography, and usage rules',
    format: 'PDF',
    size: '3.2 MB',
    link: '/assets/apex-labs-brand-guidelines.pdf'
  },
  {
    title: 'Product Screenshots',
    description: 'High-resolution screenshots of our platform and key features',
    format: 'PNG, JPG',
    size: '45.8 MB',
    link: '/assets/apex-labs-product-screenshots.zip'
  },
  {
    title: 'Executive Headshots',
    description: 'Professional photos of our leadership team',
    format: 'JPG',
    size: '28.6 MB',
    link: '/assets/apex-labs-executive-photos.zip'
  }
];

const pressReleases = [
  {
    date: 'March 15, 2024',
    title: 'Apex Labs Raises $30M Series B to Accelerate AI Innovation',
    description: 'Funding round led by Sequoia Capital will fuel product development and global expansion',
    link: '/press/releases/series-b-funding'
  },
  {
    date: 'February 1, 2024',
    title: 'Apex Labs Launches Revolutionary AI Automation Platform',
    description: 'New platform helps enterprises achieve 10x efficiency gains through intelligent automation',
    link: '/press/releases/platform-launch'
  },
  {
    date: 'December 12, 2023',
    title: 'Apex Labs Named to Forbes AI 50 List',
    description: "Recognition highlights company's innovative approach to enterprise AI solutions",
    link: '/press/releases/forbes-ai-50'
  }
];

export default function PressKit() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-blue-600/20 dark:from-primary-900/40 dark:to-blue-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl"
            >
              Press Kit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-3xl mx-auto"
            >
              Everything you need to know about Apex Labs, including company information, brand assets, and media resources.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2>About Apex Labs</h2>
            <p className="text-lg">{companyInfo.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">Founded</h3>
                <p className="text-gray-600 dark:text-dark-muted">{companyInfo.founded}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                <p className="text-gray-600 dark:text-dark-muted">{companyInfo.headquarters}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Employees</h3>
                <p className="text-gray-600 dark:text-dark-muted">{companyInfo.employees}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Funding</h3>
                <p className="text-gray-600 dark:text-dark-muted">{companyInfo.funding}</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Backed By</h3>
              <div className="flex flex-wrap gap-4">
                {companyInfo.investors.map((investor) => (
                  <span
                    key={investor}
                    className="px-4 py-2 bg-gray-100 dark:bg-dark-border rounded-lg text-gray-700 dark:text-dark-text"
                  >
                    {investor}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">Brand Assets</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Download official Apex Labs logos, screenshots, and brand guidelines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-2xl shadow-sm p-6 flex items-start space-x-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                    {asset.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-muted mb-4">
                    {asset.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-dark-muted">
                    <span>{asset.format}</span>
                    <span>•</span>
                    <span>{asset.size}</span>
                  </div>
                </div>
                <a
                  href={asset.link}
                  className="flex items-center justify-center w-12 h-12 bg-primary-50 dark:bg-primary-900/10 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <FaDownload className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">Latest News</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Recent press releases and company announcements
            </p>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 ml-4"
              >
                <span className="text-sm text-gray-500 dark:text-dark-muted">
                  {release.date}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-dark-text">
                  <Link href={release.link} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {release.title}
                  </Link>
                </h3>
                <p className="mt-2 text-gray-600 dark:text-dark-muted">
                  {release.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/press/releases"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              <span>View all press releases</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-8">
            Press Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-muted mb-8">
            For press inquiries, please contact our communications team:
          </p>
          
          <div className="inline-flex flex-col items-center space-y-4">
            <a
              href="mailto:press@apexlabs.ai"
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>press@apexlabs.ai</span>
            </a>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/apexlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/apexlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 