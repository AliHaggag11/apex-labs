'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { FaBars, FaTimes, FaFlask } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add effect to control body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 dark:from-primary-400 dark:to-blue-500">
                    <FaFlask className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-dark-text">
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

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-20 bg-white/30 dark:bg-black/30 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="fixed inset-x-0 top-20 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md shadow-lg z-50 max-h-[min(420px,70vh)] overflow-y-auto"
              >
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 w-full">
                  <div className="space-y-1">
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

                  <div className="mt-4 pt-4 border-t border-gray-200/20 dark:border-dark-border/20 flex items-center justify-between">
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 text-center bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-500 dark:to-blue-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-primary-600/20 dark:hover:shadow-primary-500/20 transition-all"
                    >
                      Contact Us
                    </motion.a>
                    <div className="flex items-center ml-4 pl-4 border-l border-gray-200/20 dark:border-dark-border/20">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
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
      className="block text-gray-800 dark:text-white text-base font-medium cursor-pointer transition-colors"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border/50">
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