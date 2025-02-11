'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaBook, FaCode, FaRocket, FaCogs, FaLightbulb } from 'react-icons/fa';
import NoFooterWrapper from '../components/layout/NoFooterWrapper';

const sidebarLinks = [
  {
    section: 'Getting Started',
    icon: FaRocket,
    items: [
      { href: '/docs', label: 'Introduction' },
      { href: '/docs/quickstart', label: 'Quick Start Guide' },
      { href: '/docs/installation', label: 'Installation' },
    ]
  },
  {
    section: 'Core Concepts',
    icon: FaLightbulb,
    items: [
      { href: '/docs/architecture', label: 'Architecture' },
      { href: '/docs/best-practices', label: 'Best Practices' },
      { href: '/docs/configuration', label: 'Configuration' },
    ]
  },
  {
    section: 'API Reference',
    icon: FaCode,
    items: [
      { href: '/docs/api/overview', label: 'API Overview' },
      { href: '/docs/api/authentication', label: 'Authentication' },
      { href: '/docs/api/endpoints', label: 'Endpoints' },
    ]
  },
  {
    section: 'Integration',
    icon: FaCogs,
    items: [
      { href: '/docs/integration/setup', label: 'Setup Guide' },
      { href: '/docs/integration/examples', label: 'Examples' },
      { href: '/docs/integration/troubleshooting', label: 'Troubleshooting' },
    ]
  }
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <NoFooterWrapper>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
        {/* Mobile Sidebar Toggle */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-4 rounded-full bg-primary-600 dark:bg-primary-500 text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            {isSidebarOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Sidebar */}
        <div className={`
          fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border
          transform transition-transform duration-300 ease-in-out z-40
          md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full overflow-y-auto px-4 py-6">
            <div className="flex items-center space-x-3 mb-8 px-2">
              <FaBook className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text">Documentation</h2>
            </div>

            <nav className="space-y-8">
              {sidebarLinks.map((section) => (
                <div key={section.section}>
                  <div className="flex items-center space-x-2 px-2 mb-3">
                    <section.icon className="w-4 h-4 text-gray-400 dark:text-dark-muted" />
                    <h3 className="text-sm font-semibold text-gray-400 dark:text-dark-muted uppercase tracking-wider">
                      {section.section}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <span className={`
                            block px-2 py-2 text-sm rounded-lg transition-colors
                            ${isActive(item.href)
                              ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 dark:text-primary-400 font-medium'
                              : 'text-gray-600 dark:text-dark-muted hover:bg-gray-50 dark:hover:bg-dark-border/50'
                            }
                          `}>
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:pl-64">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </NoFooterWrapper>
  );
} 