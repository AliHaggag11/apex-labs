'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaChartBar, FaCamera, FaUsers, FaCogs, FaTimes } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const aiSolutions = [
  {
    title: 'AI-Powered Process Automation',
    description: 'Streamline operations with RPA, AI chatbots, and intelligent workflow automation.',
    icon: FaBrain,
    features: ['Robotic Process Automation', 'AI Chatbots', 'Workflow Optimization'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop',
    category: 'Automation'
  },
  {
    title: 'Business Intelligence & Analytics',
    description: 'Make data-driven decisions with predictive analytics and fraud detection systems.',
    icon: FaChartBar,
    features: ['Predictive Analytics', 'Fraud Detection', 'Market Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    category: 'Analytics'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Implement advanced image processing and recognition systems.',
    icon: FaCamera,
    features: ['Object Detection', 'OCR Technology', 'Quality Control'],
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1200&auto=format&fit=crop',
    category: 'Vision'
  },
  {
    title: 'AI-Driven Customer Engagement',
    description: 'Enhance customer experience with personalized recommendations and interactions.',
    icon: FaUsers,
    features: ['Smart Recommendations', 'Customer Segmentation', 'Behavior Analysis'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    category: 'Customer Experience'
  },
  {
    title: 'Industry-Specific AI Solutions',
    description: 'Tailored AI solutions for healthcare, finance, retail, and more.',
    icon: FaCogs,
    features: ['Healthcare AI', 'Financial Analytics', 'Retail Intelligence'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    category: 'Industry Solutions'
  }
];

const AIAutomation = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    checkScrollability();
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  useEffect(() => {
    if (isPaused) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
  }, [isPaused]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);

      // Reset to start when reaching the end for infinite loop
      if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  const startAutoScroll = () => {
    if (scrollInterval.current) return;
    
    scrollInterval.current = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to center a card on mobile
  const centerCardOnMobile = (index: number) => {
    if (carouselRef.current && window.innerWidth < 768) {
      const cardWidth = 320; // w-80 = 20rem = 320px
      const containerWidth = carouselRef.current.clientWidth;
      const scrollPosition = (cardWidth * index) + (cardWidth - containerWidth) / 2;
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-automation" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 ring-1 ring-primary-600/10 dark:ring-primary-400/20"
          >
            AI & Automation
          </motion.span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl">
            AI Automation Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-dark-muted">
            Transform your business with cutting-edge AI and automation technologies
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div
            ref={carouselRef}
            onScroll={checkScrollability}
            className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] pb-10 snap-x snap-mandatory md:snap-none"
          >
            <div className="flex flex-row gap-6">
              {/* First set of cards */}
              {aiSolutions.map((solution, index) => (
                <motion.div
                  key={`first-${solution.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="snap-center first:pl-4 md:first:pl-4"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => centerCardOnMobile(index)}
                >
                  <motion.button
                    onClick={() => {
                      setSelectedCard(index);
                      centerCardOnMobile(index);
                    }}
                    className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[32rem] w-80 overflow-hidden flex flex-col items-start justify-start relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="relative z-10 p-8">
                      <p className="text-white text-sm font-medium">
                        {solution.category}
                      </p>
                      <h3 className="text-white text-2xl font-bold mt-2">
                        {solution.title}
                      </h3>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
              
              {/* Second set for seamless loop */}
              {aiSolutions.map((solution, index) => (
                <motion.div
                  key={`second-${solution.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="snap-center"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => centerCardOnMobile(index)}
                >
                  <motion.button
                    onClick={() => {
                      setSelectedCard(index);
                      centerCardOnMobile(index);
                    }}
                    className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[32rem] w-80 overflow-hidden flex flex-col items-start justify-start relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="relative z-10 p-8">
                      <p className="text-white text-sm font-medium">
                        {solution.category}
                      </p>
                      <h3 className="text-white text-2xl font-bold mt-2">
                        {solution.title}
                      </h3>
                    </div>
                  </motion.button>
                </motion.div>
              ))}

              {/* Third set (first few cards) for smoother loop */}
              {aiSolutions.slice(0, 2).map((solution, index) => (
                <motion.div
                  key={`third-${solution.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="snap-center"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => centerCardOnMobile(index)}
                >
                  <motion.button
                    onClick={() => {
                      setSelectedCard(index);
                      centerCardOnMobile(index);
                    }}
                    className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[32rem] w-80 overflow-hidden flex flex-col items-start justify-start relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="relative z-10 p-8">
                      <p className="text-white text-sm font-medium">
                        {solution.category}
                      </p>
                      <h3 className="text-white text-2xl font-bold mt-2">
                        {solution.title}
                      </h3>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - Only show on desktop */}
          <div className="hidden md:flex justify-end gap-2 mt-6">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50 transition-opacity"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="h-10 w-10 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center disabled:opacity-50 transition-opacity"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-neutral-900 rounded-3xl max-w-4xl w-full overflow-hidden relative"
              >
                <div className="relative aspect-video">
                  <img
                    src={aiSolutions[selectedCard].image}
                    alt={aiSolutions[selectedCard].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-4 right-4 h-10 w-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8">
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {aiSolutions[selectedCard].category}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {aiSolutions[selectedCard].title}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {aiSolutions[selectedCard].description}
                  </p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {aiSolutions[selectedCard].features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl"
                      >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
                          <svg
                            className="h-5 w-5 text-primary-600 dark:text-primary-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIAutomation; 