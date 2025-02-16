'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaDesktop, FaChevronDown } from 'react-icons/fa';

const themes = [
  { id: 'light', name: 'Light', icon: FaSun },
  { id: 'dark', name: 'Dark', icon: FaMoon },
  { id: 'system', name: 'System', icon: FaDesktop }
];

interface ThemeToggleProps {
  mode?: 'dropdown' | 'switch';
}

export const ThemeToggle = ({ mode = 'dropdown' }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = themes.find(t => t.id === theme) || themes[0];
  const ThemeIcon = currentTheme.icon;

  if (mode === 'switch') {
    return (
      <div className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
        <div className="flex items-center gap-2">
          <ThemeIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          <span className="text-base font-medium text-gray-800 dark:text-white">Theme</span>
        </div>
        <div className="flex items-center gap-2">
          <FaSun className="w-3.5 h-3.5 text-gray-400" />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ${
              theme === 'dark' ? 'bg-primary-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
                theme === 'dark' ? 'translate-x-4' : 'translate-x-1'
              }`}
            />
          </button>
          <FaMoon className="w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-dark-muted hover:bg-gray-200 dark:hover:bg-dark-bg transition-colors flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={currentTheme.name}
      >
        <ThemeIcon className="w-4 h-4" />
        <FaChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing dropdown */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)} 
            />

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 p-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 min-w-[120px]"
            >
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                return (
                  <motion.button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3 py-1.5 rounded-lg text-left flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      theme === themeOption.id ? 'text-primary-600 dark:text-primary-400 bg-gray-50 dark:bg-gray-700/50' : 'text-gray-700 dark:text-gray-300'
                    }`}
                    whileHover={{ x: 2 }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{themeOption.name}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}; 