'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHandshake, FaRocket, FaGraduationCap, FaTrophy, FaChartLine, FaUsers, FaCertificate, FaAward, FaCheckCircle } from 'react-icons/fa';

const benefits = [
  {
    icon: FaRocket,
    title: 'Go-to-Market Support',
    description: 'Access marketing resources, joint promotional opportunities, and lead-sharing programs.'
  },
  {
    icon: FaGraduationCap,
    title: 'Technical Training',
    description: 'Comprehensive training programs and certification paths for your team.'
  },
  {
    icon: FaHandshake,
    title: 'Dedicated Support',
    description: 'Priority support and dedicated partner success manager for your business.'
  },
  {
    icon: FaChartLine,
    title: 'Revenue Share',
    description: 'Competitive commission rates and recurring revenue opportunities.'
  }
];

const tiers = [
  {
    name: 'Silver Partner',
    icon: FaCertificate,
    benefits: [
      'Basic partner portal access',
      '10% revenue share',
      'Email support',
      'Partner directory listing',
      'Basic training resources'
    ],
    requirements: [
      'Annual revenue: $100k+',
      '1 certified team member',
      '2 customer references'
    ]
  },
  {
    name: 'Gold Partner',
    icon: FaAward,
    benefits: [
      'Advanced partner portal access',
      '20% revenue share',
      'Priority support',
      'Co-marketing opportunities',
      'Advanced training resources',
      'Quarterly business reviews'
    ],
    requirements: [
      'Annual revenue: $250k+',
      '2 certified team members',
      '5 customer references',
      'Joint business plan'
    ]
  },
  {
    name: 'Platinum Partner',
    icon: FaTrophy,
    benefits: [
      'Full partner portal access',
      '30% revenue share',
      'Dedicated partner manager',
      'Joint marketing funds',
      'Custom training programs',
      'Monthly business reviews',
      'Early access to new features'
    ],
    requirements: [
      'Annual revenue: $500k+',
      '5 certified team members',
      '10 customer references',
      'Strategic business plan'
    ]
  }
];

const steps = [
  {
    title: 'Apply',
    description: 'Submit your application through our partner portal.',
  },
  {
    title: 'Evaluate',
    description: 'Our team will review your application and contact you within 48 hours.',
  },
  {
    title: 'Onboard',
    description: 'Complete partner onboarding and required training.',
  },
  {
    title: 'Launch',
    description: 'Start growing your business with Apex Labs.',
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-blue-600/20 dark:from-primary-900/40 dark:to-blue-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <FaHandshake className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">
                Partner Program
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl lg:text-6xl"
            >
              Grow Your Business with Apex Labs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 dark:text-dark-muted max-w-3xl mx-auto"
            >
              Join our partner ecosystem and unlock new opportunities to grow your business while delivering cutting-edge solutions to your customers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex justify-center space-x-4"
            >
              <Link
                href="/partners/apply"
                className="px-8 py-3 text-base font-medium rounded-xl bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                Apply Now
              </Link>
              <Link
                href="/partners/contact"
                className="px-8 py-3 text-base font-medium rounded-xl bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-dark-card dark:text-dark-text dark:hover:bg-dark-border"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">Partner Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Everything you need to succeed in delivering Apex Labs solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-900/10">
                  <benefit.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-dark-text">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-dark-muted">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">Partner Tiers</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Choose the partnership level that best fits your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <tier.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                    {tier.name}
                  </h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
                      Benefits
                    </h4>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                          <span className="text-gray-600 dark:text-dark-muted">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {tier.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <FaUsers className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-3" />
                          <span className="text-gray-600 dark:text-dark-muted">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text">How to Join</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-muted">
              Simple steps to become an Apex Labs partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/10 text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-dark-muted">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary-100 dark:bg-primary-900/10 transform -translate-y-1/2 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Become a Partner?
          </h2>
          <div className="flex justify-center space-x-4">
            <Link
              href="/partners/apply"
              className="px-8 py-3 text-base font-medium rounded-xl bg-white text-primary-600 hover:bg-gray-50"
            >
              Apply Now
            </Link>
            <Link
              href="/partners/contact"
              className="px-8 py-3 text-base font-medium rounded-xl bg-primary-700 text-white hover:bg-primary-800 dark:bg-primary-800 dark:hover:bg-primary-700"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 