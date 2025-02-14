'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaTrash, FaClock, FaInfoCircle, FaDollarSign, FaHeadset } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { ReactNode } from 'react';

// Context about the company and its services
const SYSTEM_CONTEXT = `You are an AI assistant called "Apex AI" for Apex Labs, a company specializing in digital transformation and AI solutions. 

Your responses should be friendly, natural, and conversational - like a helpful human colleague rather than a formal AI. Keep initial greetings simple and warm. Only provide detailed information when specifically asked.

Conversation Guidelines:
1. Only greet the user in your first message - do not include greetings in follow-up responses
2. For follow-up responses, continue the conversation naturally without reintroducing yourself
3. Use natural language and a friendly tone
4. Add appropriate emojis occasionally to seem more human (but don't overuse them)
5. Break up long responses into smaller, digestible messages
6. Ask clarifying questions when needed
7. Remember the context of the conversation - don't repeat information already discussed

Response Examples:
- First message: "Hi there! 👋 I'm Apex AI. How can I help you today?"
- Follow-up responses: "I can help you with that!", "Sure thing!", "Let me explain that for you"
- Clarifying questions: "Could you tell me more about what you're looking for?", "What type of solution interests you?"

Available Pages:
- Pricing page (/pricing)
- Services page (/services)
- Contact page (/contact)
- About page (/about)
- Case Studies page (/case-studies)
- Blog page (/blog)

About Apex Labs:
We are a leading digital transformation company offering:
1. IT Infrastructure & Cloud
   - Cloud migration and hybrid deployment
   - VPN and cybersecurity solutions
   - Disaster recovery planning

2. Business Process Automation
   - ERP and CRM implementation
   - HR automation solutions
   - Digital workflow optimization

3. E-Commerce Solutions
   - Custom online store development
   - Digital payment integration
   - POS system implementation

4. Digital Marketing
   - AI-driven marketing strategies
   - SEO optimization
   - Automated campaign management

5. Data Management
   - Business intelligence dashboards
   - AI-based market research
   - Data digitization services

6. Industry-Specific Solutions
   - Retail automation
   - Healthcare systems
   - Financial technology
   - Legal tech solutions
   - Manufacturing optimization

Pricing Information:
When discussing pricing, always:
1. Direct users to our Pricing page first using "Visit our Pricing page" format
2. Explain that we offer flexible pricing models:
   - Project-based pricing for specific deliverables
   - Subscription-based pricing for ongoing services
   - Custom pricing based on specific requirements
3. Only suggest the Contact page for custom quotes or after mentioning the Pricing page

Contact Information:
• Email: contact@apexlabs.eg
  - Response time: Within 24 hours
• Phone: +20 (2) 1234-5678
  - Available: Sunday - Thursday, 9:00 AM - 5:00 PM EET
• Physical office: New Cairo, Cairo
  - Location: Fifth Settlement, Street 90
• Business Hours: 
  - Days: Sunday - Thursday
  - Time: 9:00 AM - 5:00 PM EET

How to Reach Us:
1. For general inquiries:
   - Email or phone during business hours
   - Expected response time: 24 hours for emails
2. For detailed quotes and consultations:
   - Schedule through our Contact page
   - Our team will reach out promptly
3. For immediate assistance:
   - Call during business hours
   - Visit our physical office

When referring users to contact information:
1. Direct them to "Visit our Contact page" first
2. Provide relevant contact details based on their needs
3. Mention business hours only when discussing phone or office visits
4. Always emphasize scheduling consultations through the Contact page

Response Guidelines:
1. Keep responses concise and focused
2. Avoid redundant information
3. Do not mention social media unless specifically asked
4. You may use your name (Apex AI) when appropriate

When referring users to contact us or get more information:
1. Always mention our contact page using "Visit our Contact page" format
2. Include our business hours (Sun-Thu, 9am-5pm EET) only once
3. Provide our email (contact@apexlabs.eg) and phone (+20 (2) 1234-5678) only once
4. For detailed quotes and requirements discussion, suggest scheduling a consultation through our contact page

Page Linking Guidelines:
1. Only suggest each page once per response
2. For pricing inquiries: First suggest Pricing page, then Contact page if needed
3. For service inquiries: First suggest Services page, then Contact page if needed
4. Use exact format: "Visit our [Page Name] page" or "Learn more on our [Page Name] page"

Please provide accurate information about our services and guide users to the most relevant solutions for their needs.`;

const MessageText = ({ text }: { text: string }) => {
  const router = useRouter();
  
  const parts = text.split(/(<link[^>]*>.*?<\/link>)/);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('<link')) {
          const href = part.match(/href="([^"]*)"/)![1];
          const linkText = part.replace(/<link[^>]*>(.*?)<\/link>/, '$1');
          
          return (
            <Link
              key={index}
              href={href}
              className="text-blue-500 hover:text-blue-600 underline font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                router.push(href);
              }}
            >
              {linkText}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const WelcomeMessage = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: 20 }}
    className="absolute bottom-full right-0 mb-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 w-64"
    style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
  >
    <button 
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
    >
      <FaTimes size={12} />
    </button>
    <p className="text-sm text-gray-700 dark:text-gray-200">
      Hi! I'm Apex AI. Need help with digital transformation? I'm here to assist you! 👋
    </p>
  </motion.div>
);

// Add QuickReply component
const QuickReply = ({ 
  suggestions, 
  onSelect 
}: { 
  suggestions: Array<{ text: string; icon?: ReactNode }>;
  onSelect: (text: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-wrap gap-2 mt-2"
  >
    {suggestions.map((suggestion, index) => (
      <motion.button
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(suggestion.text)}
        className="flex items-center gap-2 px-4 py-2 text-sm bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-xl border border-primary-100 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200"
      >
        {suggestion.icon}
        <span>{suggestion.text}</span>
      </motion.button>
    ))}
  </motion.div>
);

// Add suggestions based on context
const getQuickReplies = (lastMessage: string) => {
  const lowerMessage = lastMessage.toLowerCase();
  
  if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
    return [
      { text: 'Tell me about your services', icon: <FaInfoCircle className="w-4 h-4" /> },
      { text: 'How much do you charge?', icon: <FaDollarSign className="w-4 h-4" /> },
      { text: 'I need technical support', icon: <FaHeadset className="w-4 h-4" /> },
    ];
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('charge')) {
    return [
      { text: 'Show me pricing plans', icon: <FaDollarSign className="w-4 h-4" /> },
      { text: 'Schedule a consultation', icon: <FaClock className="w-4 h-4" /> },
    ];
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
    return [
      { text: 'Email support', icon: <FaHeadset className="w-4 h-4" /> },
      { text: 'Schedule a call', icon: <FaClock className="w-4 h-4" /> },
      { text: 'Visit office', icon: <FaInfoCircle className="w-4 h-4" /> },
    ];
  }
  
  return [];
};

// Update the message component to include quick replies
const Message = ({ 
  message, 
  isLast, 
  onQuickReply 
}: { 
  message: { text: string; isUser: boolean }; 
  isLast: boolean;
  onQuickReply: (text: string) => void;
}) => {
  const suggestions = !message.isUser && isLast ? getQuickReplies(message.text) : [];
  
  return (
    <div className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}>
      <div
        className={`max-w-[85%] px-4 py-3 ${
          message.isUser
            ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl rounded-br-none'
            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl rounded-bl-none shadow-sm dark:shadow-none'
        }`}
      >
        <MessageText text={message.text} />
      </div>
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mt-2"
        >
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onQuickReply(suggestion.text)}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-xl border border-primary-100 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              {suggestion.icon}
              <span>{suggestion.text}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const scrollToMessage = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Scroll when messages change
  useEffect(() => {
    scrollToMessage();
  }, [messages]);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([{ 
        text: "Hi there! 👋 I'm Apex AI. How can I help you today?",
        isUser: false 
      }]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show welcome message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Hide welcome message after 8 seconds
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

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
            { role: 'user', content: inputText } // Send only the current message
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

  // Clear chat history
  const handleClearChat = () => {
    localStorage.removeItem('chatMessages');
    setMessages([{ 
      text: "Hi there! 👋 I'm Apex AI. How can I help you today?",
      isUser: false 
    }]);
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button with Welcome Message */}
      <div className="relative">
        <AnimatePresence>
          {showWelcome && !isOpen && (
            <WelcomeMessage onClose={() => setShowWelcome(false)} />
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowWelcome(false);
          }}
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5 text-white/90" />
            ) : (
              <FaRobot className="w-6 h-6 text-white/90" />
            )}
          </motion.div>
        </motion.button>
      </div>

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
              width: isMobile ? 'auto' : '380px',
              height: isMobile ? 'calc(100vh - 6rem)' : '580px'
            }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <FaRobot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base">Apex AI</h3>
                    <p className="text-xs text-white/80">Online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleClearChat}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
                    title="Clear chat history"
                  >
                    <FaTrash className="w-4 h-4 text-white/80" />
                  </button>
                  {isMobile && (
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
                    >
                      <FaTimes className="w-4 h-4 text-white/80" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  ref={index === messages.length - 1 ? lastMessageRef : null}
                >
                  <Message 
                    message={message} 
                    isLast={index === messages.length - 1}
                    onQuickReply={async (text) => {
                      // Add user message
                      setMessages(prev => [...prev, { text, isUser: true }]);
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
                              { role: 'user', content: text }
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
                      }
                    }}
                  />
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] px-4 py-3 bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none shadow-sm dark:shadow-none">
                    <div className="flex space-x-1.5">
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, delay: 0.4, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 transition-all duration-200"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-200"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 