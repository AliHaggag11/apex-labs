'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

// Context about the company and its services
const SYSTEM_CONTEXT = `You are an AI assistant for Apex Labs, a company specializing in digital transformation and AI solutions. 
Key services include:
- IT Infrastructure & Cloud: Cloud migration, hybrid deployment, VPN, cybersecurity, and disaster recovery
- Business Process Automation: ERP, CRM, HR automation, e-signatures, automated support
- E-Commerce Solutions: Custom online stores, digital payments, POS systems
- Digital Marketing: SEO, AI-driven marketing, automated campaigns
- Data Management: AI-based market research, BI dashboards, data digitization
- Industry Solutions: Specialized solutions for retail, healthcare, finance, legal, manufacturing

Your role is to help visitors understand our services and guide them to the right solutions.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! I'm your AI assistant from Apex Labs. How can I help you with your digital transformation journey today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_CONTEXT },
            ...messages.map(msg => ({
              role: msg.isUser ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: inputText }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our support team.",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
      setInputText('');
    }
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2
        }
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes size={20} /> : <FaRobot size={24} />}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ 
              position: isMobile ? 'fixed' : 'absolute',
              left: isMobile ? '1rem' : 'auto',
              right: isMobile ? '1rem' : '0',
              top: isMobile ? '1rem' : 'auto',
              bottom: isMobile ? '5rem' : '5rem',
              width: isMobile ? 'auto' : '24rem',
              height: isMobile ? 'calc(100vh - 6rem)' : '500px'
            }}
            className="bg-white dark:bg-dark-card rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaRobot size={20} />
                  <h3 className="font-semibold">AI Assistant</h3>
                </div>
                {isMobile && (
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                      message.isUser
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-br-none'
                        : 'bg-gray-100 dark:bg-dark-bg text-gray-800 dark:text-dark-text rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] p-3 rounded-lg shadow-sm bg-gray-100 dark:bg-dark-bg text-gray-800 dark:text-dark-text rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-dark-border bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 p-2 border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-dark-bg dark:text-dark-text disabled:opacity-50"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:shadow-md transition-shadow disabled:opacity-50"
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 