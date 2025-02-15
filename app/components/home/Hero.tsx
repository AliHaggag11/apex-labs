'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaRocket, FaLightbulb, FaChartLine, FaPlay, FaTimes } from 'react-icons/fa';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full">
          <div className="w-[800px] h-[800px] bg-blue-100/50 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        </div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full">
          <div className="w-[800px] h-[800px] bg-blue-200/50 dark:bg-primary-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-[600px] h-[600px] bg-blue-50/50 dark:bg-primary-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-dark-text sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span className="block">Transform Your Business</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                with Digitalization & AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-gray-600 dark:text-dark-muted sm:text-xl max-w-3xl"
            >
              Empower your organization with cutting-edge digital solutions and AI-driven automation. 
              Stay ahead of the competition with Apex Labs&apos; innovative technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 md:text-lg shadow-lg shadow-primary-600/20 dark:shadow-primary-500/20"
              >
                Book Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 dark:text-primary-400 bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-border md:text-lg shadow-lg shadow-gray-200/50 dark:shadow-dark-border/20 ring-1 ring-primary-600/20 dark:ring-primary-400/20"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: FaRocket, text: "Fast Implementation" },
                { icon: FaLightbulb, text: "Innovative Solutions" },
                { icon: FaChartLine, text: "Proven Results" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-600 dark:text-dark-muted"
                >
                  <feature.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 lg:mt-0 lg:col-span-1"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-video bg-gradient-to-br from-primary-500/5 to-primary-600/5 dark:from-primary-600/10 dark:to-primary-700/10 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                {/* Video Thumbnail */}
                <img 
                  src="https://img.youtube.com/vi/yH1GP2TqwU8/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-600/20 dark:to-primary-700/20 group-hover:opacity-75 transition-opacity" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-primary-600 dark:bg-primary-500 rounded-full blur-lg opacity-40" />
                    <button
                      className="relative w-16 h-16 flex items-center justify-center bg-primary-600 dark:bg-primary-500 text-white rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
                    >
                      <FaPlay className="h-6 w-6 ml-1" />
                    </button>
                  </motion.div>
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-lg font-semibold">Watch How We Transform Businesses</h3>
                  <p className="text-white/80 text-sm mt-2">See our solutions in action</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent uppercase tracking-wider"
          >
            Trusted by Industry Leaders
          </motion.p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center px-4 sm:px-6">
            {[
              {
                name: 'AWS',
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              },
              {
                name: 'Microsoft',
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_icon.svg"
              },
              {
                name: 'Google',
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              },
              {
                name: 'SAP',
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              },
              {
                name: 'Salesforce',
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
              },
              {
                name: 'Oracle',
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
              }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-32 h-16 relative flex items-center justify-center text-gray-400 dark:text-dark-muted transition-all duration-300 filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100 p-4"
              >
                <img 
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Video Player */}
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/yH1GP2TqwU8?si=5sAuQSZAoqcWZMFv&rel=0&showinfo=0&modestbranding=1"
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero; 