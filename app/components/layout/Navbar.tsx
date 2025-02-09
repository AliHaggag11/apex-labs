'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

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
          className="relative w-full bg-white/95 dark:bg-dark-card/95 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-dark-border/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  Apex Labs
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
                      className="bg-primary-600 dark:bg-primary-500 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
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
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-dark-muted hover:bg-gray-200 dark:hover:bg-dark-bg transition-colors"
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
              className="absolute inset-x-0 top-20 bg-white dark:bg-dark-card shadow-lg border-t border-gray-200/20 dark:border-dark-border/20"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8"
              >
                <div className="space-y-3">
                  <MobileNavLink href="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
                  <MobileNavLink href="/ai-automation" onClick={() => setIsOpen(false)}>AI Automation</MobileNavLink>
                  <MobileNavLink href="/solutions" onClick={() => setIsOpen(false)}>Solutions</MobileNavLink>
                  <MobileNavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
                  <MobileNavLink href="/case-studies" onClick={() => setIsOpen(false)}>Case Studies</MobileNavLink>
                  <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
                  <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-primary-600 dark:bg-primary-500 text-white px-4 py-3 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                  >
                    Contact Us
                  </motion.a>
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-dark-border flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-dark-muted">Toggle theme</span>
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
      className="text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link href={href}>
    <motion.span
      className="block text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 px-4 py-3 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  </Link>
);

export default Navbar; 