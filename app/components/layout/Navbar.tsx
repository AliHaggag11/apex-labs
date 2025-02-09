'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { FaBars, FaTimes, FaCube } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-20" />
      
      {/* Fixed container for navbar positioning */}
      <div className="fixed top-0 inset-x-0 z-50">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="relative w-full bg-white/70 dark:bg-dark-card/70 backdrop-blur-lg border-b border-gray-200/20 dark:border-dark-border/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 flex items-center justify-center text-white shadow-lg shadow-primary-600/20 dark:shadow-primary-400/20">
                    <FaCube className="w-5 h-5" />
                  </div>
                  <span className="bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                    Apex Labs
                  </span>
                </Link>
              </motion.div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center space-x-8">
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/ai-automation">AI Automation</NavLink>
                  <NavLink href="/solutions">Solutions</NavLink>
                  <NavLink href="/pricing">Pricing</NavLink>
                  <NavLink href="/case-studies">Case Studies</NavLink>
                  <NavLink href="/blog">Blog</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <div className="pl-8 flex items-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contact"
                      className="bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-500 dark:to-blue-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary-600/20 dark:hover:shadow-primary-500/20 transition-all"
                    >
                      Contact Us
                    </motion.a>
                    <div className="pl-2 border-l border-gray-200 dark:border-dark-border">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-dark-muted hover:bg-gray-200 dark:hover:bg-dark-bg transition-colors"
                >
                  {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 bg-white dark:bg-dark-card backdrop-blur-lg"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="h-[calc(100vh-5rem)] flex flex-col justify-between"
              >
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
                  <div className="space-y-6">
                    {[
                      { href: '/services', label: 'Services' },
                      { href: '/ai-automation', label: 'AI Automation' },
                      { href: '/solutions', label: 'Solutions' },
                      { href: '/pricing', label: 'Pricing' },
                      { href: '/case-studies', label: 'Case Studies' },
                      { href: '/blog', label: 'Blog' },
                      { href: '/about', label: 'About' }
                    ].map((item) => (
                      <MobileNavLink key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full border-t border-gray-200/10 dark:border-dark-border/10 space-y-6">
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-500 dark:to-blue-500 text-white px-6 py-4 rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-primary-600/20 dark:hover:shadow-primary-500/20 transition-all"
                  >
                    Contact Us
                  </motion.a>
                  
                  <div className="flex items-center justify-between px-4">
                    <span className="text-base text-gray-600 dark:text-dark-muted font-medium">Switch Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href}>
    <motion.span
      className="text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium cursor-pointer transition-colors relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 group-hover:w-full transition-all duration-300" />
    </motion.span>
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link href={href}>
    <motion.div
      className="block text-gray-800 dark:text-white text-lg font-medium cursor-pointer transition-colors"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-border/50">
        <span>{children}</span>
        <motion.span
          className="text-primary-600 dark:text-primary-400"
          initial={{ x: -4, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  </Link>
);

export default Navbar; 