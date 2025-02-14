'use client';

import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaTrash, FaClock, FaInfoCircle, FaDollarSign, FaHeadset, FaGlobe, FaDownload, FaReply, FaChevronDown, FaMicrophone, FaMicrophoneAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { ReactNode, ReactElement } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Type definitions
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date | string;
  threadId?: string;  // Parent thread ID if this is a reply
  contextTags: string[];
  replyCount: number;  // Make replyCount required with a default of 0
}

interface Thread {
  id: string;
  parentMessageId: string;
  messages: Message[];
  isExpanded: boolean;
}

interface MessageContext {
  topic: string;
  relevantMessages: string[];  // IDs of related messages
  suggestedResponses: string[];
  confidence: number;
}

interface QuickReplySuggestion {
  text: string;
  icon?: ReactNode;
}

// Update type definitions at the top
interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionAlternative {
  [index: number]: SpeechRecognitionResult;
  isFinal: boolean;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionAlternative;
  length: number;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: 'network' | 'not-allowed' | 'no-speech' | 'aborted' | 'audio-capture' | 'service-not-allowed';
  message: string;
}

interface VoiceFeedbackProps {
  error?: string;
}

// Update the Window interface
declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
    SpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  lang: string;
  onstart: (event: Event) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: (event: Event) => void;
  start: () => void;
  stop: () => void;
}

// Context about the company and its services
const SYSTEM_CONTEXT = `You are an AI assistant called &quot;Apex AI&quot; for Apex Labs, a company specializing in digital transformation and AI solutions. 

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

// Add language support
const languages = {
  en: {
    welcome: "Hi there! 👋 I'm Apex AI. How can I help you today?",
    placeholder: "Type your message...",
    online: "Online",
    clearChat: "Clear chat history",
    exportChat: "Export chat",
    languageSelect: "Select language",
    error: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our support team."
  },
  ar: {
    welcome: "مرحباً! 👋 أنا Apex AI. كيف يمكنني مساعدتك اليوم؟",
    placeholder: "اكتب رسالتك...",
    online: "متصل",
    clearChat: "مسح المحادثة",
    exportChat: "تصدير المحادثة",
    languageSelect: "اختر اللغة",
    error: "عذراً، لدي مشكلة في الاتصال حالياً. يرجى المحاولة مرة أخرى لاحقاً أو الاتصال بفريق الدعم."
  },
  fr: {
    welcome: "Bonjour! 👋 Je suis Apex AI. Comment puis-je vous aider aujourd'hui?",
    placeholder: "Tapez votre message...",
    online: "En ligne",
    clearChat: "Effacer l'historique",
    exportChat: "Exporter la conversation",
    languageSelect: "Choisir la langue",
    error: "Je suis désolé, mais j'ai des problèmes de connexion pour le moment. Veuillez réessayer plus tard ou contacter notre équipe d'assistance."
  }
};

// Add language-specific system contexts
const SYSTEM_CONTEXTS = {
  en: SYSTEM_CONTEXT,
  ar: `أنت مساعد ذكاء اصطناعي يُدعى "Apex AI" لشركة Apex Labs، وهي شركة متخصصة في التحول الرقمي وحلول الذكاء الاصطناعي.

يجب أن تكون ردودك ودية وطبيعية ومحادثة - مثل زميل بشري مفيد وليس ذكاءً اصطناعياً رسمياً. احتفظ بالتحيات الأولية بسيطة ودافئة. قدم معلومات مفصلة فقط عند الطلب.

خدماتنا:
1. البنية التحتية لتكنولوجيا المعلومات والسحابة
   - الترحيل السحابي والنشر الهجين
   - حلول VPN والأمن السيبراني
   - تخطيط التعافي من الكوارث

2. أتمتة العمليات التجارية
   - تنفيذ ERP و CRM
   - حلول أتمتة الموارد البشرية
   - تحسين سير العمل الرقمي

3. حلول التجارة الإلكترونية
   - تطوير متجر إلكتروني مخصص
   - دمج الدفع الرقمي
   - تنفيذ نظام نقاط البيع

4. التسويق الرقمي
   - استراتيجيات التسويق المدعومة بالذكاء الاصطناعي
   - تحسين محركات البحث
   - إدارة الحملات الآلية

5. إدارة البيانات
   - لوحات معلومات ذكاء الأعمال
   - أبحاث السوق القائمة على الذكاء الاصطناعي
   - خدمات رقمنة البيانات

معلومات الاتصال:
• البريد الإلكتروني: contact@apexlabs.eg
  - وقت الرد: خلال 24 ساعة
• الهاتف: 5678-1234 (2) 20+
  - متاح: الأحد - الخميس، 9:00 صباحاً - 5:00 مساءً بتوقيت مصر
• المكتب: القاهرة الجديدة، القاهرة
  - الموقع: التجمع الخامس، شارع 90`,
  fr: `Vous êtes un assistant IA appelé "Apex AI" pour Apex Labs, une entreprise spécialisée dans la transformation digitale et les solutions d'IA.

Vos réponses doivent être amicales, naturelles et conversationnelles - comme un collègue humain serviable plutôt qu'une IA formelle. Gardez les salutations initiales simples et chaleureuses. Ne fournissez des informations détaillées que lorsqu'on vous le demande.

Nos Services:
1. Infrastructure IT & Cloud
   - Migration cloud et déploiement hybride
   - Solutions VPN et cybersécurité
   - Planification de reprise après sinistre

2. Automatisation des Processus
   - Implémentation ERP et CRM
   - Solutions RH automatisées
   - Optimisation des flux numériques

3. Solutions E-commerce
   - Développement de boutique en ligne personnalisée
   - Intégration de paiement numérique
   - Implémentation de système POS

4. Marketing Digital
   - Stratégies marketing basées sur l'IA
   - Optimisation SEO
   - Gestion automatisée des campagnes

5. Gestion des Données
   - Tableaux de bord business intelligence
   - Études de marché basées sur l'IA
   - Services de numérisation de données

Contact:
• Email: contact@apexlabs.eg
  - Temps de réponse: Sous 24 heures
• Téléphone: +20 (2) 1234-5678
  - Disponible: Dimanche - Jeudi, 9h00 - 17h00 EET
• Bureau: New Cairo, Le Caire
  - Localisation: Fifth Settlement, Rue 90`
};

// Update the error handling utility
const handleSpeechError = (error: string): string => {
  switch (error) {
    case 'network':
      return 'Voice input requires a secure connection (HTTPS) or localhost. Please ensure you\'re using a secure connection.';
    case 'not-allowed':
      return 'Microphone access was denied. Please allow microphone access in your browser settings.';
    case 'no-speech':
      return 'No speech was detected. Please try speaking again.';
    case 'aborted':
      return 'Voice input was aborted. Please try again.';
    case 'audio-capture':
      return 'No microphone was found. Please ensure your microphone is properly connected.';
    case 'service-not-allowed':
      return 'Speech recognition service is not allowed. Please try using Chrome or Edge browser.';
    default:
      return `Voice input error: ${error}. Please try again or use text input instead.`;
  }
};

// Update the MessageText component to handle mobile link clicks
const MessageText = ({ text, onLinkClick }: { text: string; onLinkClick?: () => void }) => {
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
                if (onLinkClick) {
                  onLinkClick();
                }
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

// Fix unescaped quotes in WelcomeMessage component
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
      Hi! I&apos;m Apex AI. Need help with digital transformation? I&apos;m here to assist you! 👋
    </p>
  </motion.div>
);

// Update the QuickReply component with proper types
const QuickReply = ({ 
  suggestions,
  onSelect 
}: { 
  suggestions: QuickReplySuggestion[];
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
      { text: 'Schedule a call', icon: <FaClock className="w-4 h-4" /> },
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
      { text: 'Schedule a call', icon: <FaClock className="w-4 h-4" /> },
      { text: 'Email support', icon: <FaHeadset className="w-4 h-4" /> },
      { text: 'Visit office', icon: <FaInfoCircle className="w-4 h-4" /> },
    ];
  }
  
  return [];
};

// Fix TimeStamp component error handling
const TimeStamp = ({ date }: { date: Date | string }) => {
  const formatTime = (dateInput: Date | string) => {
    try {
      const dateObj = dateInput instanceof Date ? dateInput : new Date(dateInput);
      if (isNaN(dateObj.getTime())) {
        return '';
      }
      return new Intl.DateTimeFormat('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }).format(dateObj);
    } catch (err) {
      console.error('Error formatting time:', err);
      return '';
    }
  };

  return (
    <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
      {formatTime(date)}
    </span>
  );
};

// Add these interfaces after the existing interfaces
interface Location {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface MessageWithLocation extends Message {
  location?: Location;
  showCalculator?: boolean;
  showScheduler?: boolean;
}

// Add the LocationCard component before the Message component
const LocationCard = ({ location }: { location: Location }) => (
  <div className="w-full max-w-[300px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
    <div className="h-[200px] w-full relative">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={location.coordinates}
          zoom={15}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          <Marker position={location.coordinates} />
        </GoogleMap>
      </LoadScript>
    </div>
    <div className="p-3 border-t border-gray-100 dark:border-gray-700">
      <p className="text-sm text-gray-700 dark:text-gray-300">{location.address}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-xs text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1"
      >
        <FaGlobe className="w-3 h-3" />
        <span>Open in Google Maps</span>
      </a>
    </div>
  </div>
);

// Add these interfaces after the existing interfaces
interface PriceEstimate {
  businessScale: string;
  complexity: string;
  services: string[];
  estimate: number;
}

// Add the MiniPriceCalculator component before the Message component
const MiniPriceCalculator = ({ 
  onEstimate 
}: { 
  onEstimate: (estimate: PriceEstimate) => void 
}) => {
  const [businessScale, setBusinessScale] = useState('startup');
  const [complexity, setComplexity] = useState('basic');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const calculateEstimate = () => {
    const basePrice = 5000;
    const scaleMultiplier = {
      startup: 1,
      small: 1.5,
      medium: 2,
      enterprise: 3
    }[businessScale] || 1;

    const complexityMultiplier = {
      basic: 1,
      standard: 1.5,
      advanced: 2,
      enterprise: 3
    }[complexity] || 1;

    const servicesMultiplier = Math.max(1, selectedServices.length * 0.8);
    const estimate = basePrice * servicesMultiplier * scaleMultiplier * complexityMultiplier;
    
    return Math.round(estimate / 1000) * 1000;
  };

  const handleSubmit = () => {
    if (selectedServices.length === 0) return;
    
    onEstimate({
      businessScale,
      complexity,
      services: selectedServices,
      estimate: calculateEstimate()
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 space-y-4 text-sm">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Business Scale</label>
        <select
          value={businessScale}
          onChange={(e) => setBusinessScale(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
        >
          <option value="startup">Startup (1-10 employees)</option>
          <option value="small">Small Business (11-50 employees)</option>
          <option value="medium">Medium Business (51-200 employees)</option>
          <option value="enterprise">Enterprise (201+ employees)</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Service Complexity</label>
        <select
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
        >
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="advanced">Advanced</option>
          <option value="enterprise">Custom Enterprise</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Services</label>
        <div className="space-y-2">
          {['Cloud & Infrastructure', 'Business Automation', 'AI Solutions'].map((service) => (
            <label key={service} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => {
                  setSelectedServices(prev =>
                    prev.includes(service)
                      ? prev.filter(s => s !== service)
                      : [...prev, service]
                  );
                }}
                className="rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700 dark:text-gray-300">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={selectedServices.length === 0}
        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white rounded-lg transition-colors"
      >
        Calculate Estimate
      </button>
    </div>
  );
};

// Add the ScheduleCall component after the MiniPriceCalculator component
const ScheduleCall = ({ 
  onSchedule 
}: { 
  onSchedule: (details: { name: string; email: string; date: string; time: string; topic: string }) => void 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !date || !time || !topic) return;
    
    onSchedule({ name, email, date, time, topic });
  };

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 space-y-4 text-sm">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Preferred Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={minDate}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Preferred Time (EET)</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
        >
          <option value="">Select a time</option>
          <option value="09:00">09:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="13:00">01:00 PM</option>
          <option value="14:00">02:00 PM</option>
          <option value="15:00">03:00 PM</option>
          <option value="16:00">04:00 PM</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Discussion Topic</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
        >
          <option value="">Select a topic</option>
          <option value="Digital Transformation">Digital Transformation</option>
          <option value="Cloud Solutions">Cloud Solutions</option>
          <option value="AI Implementation">AI Implementation</option>
          <option value="Business Automation">Business Automation</option>
          <option value="Custom Solutions">Custom Solutions</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!name || !email || !date || !time || !topic}
        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white rounded-lg transition-colors"
      >
        Schedule Call
      </button>
    </div>
  );
};

// Add ChatContext definition after imports and before other interfaces
interface ChatContextType {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatContext = createContext<ChatContextType>({
  setMessages: () => {},
});

// Update the Message component return type
const Message = ({ 
  message: messageWithLocation, 
  isLast, 
  onQuickReply,
  onThreadReply,
  thread,
  showThreads = true,
  onLinkClick
}: { 
  message: MessageWithLocation; 
  isLast: boolean;
  onQuickReply: (text: string) => void;
  onThreadReply: (messageId: string) => void;
  thread?: Thread;
  showThreads?: boolean;
  parentMessage?: Message;
  onLinkClick?: () => void;
}): ReactElement => {
  const [isThreadExpanded, setIsThreadExpanded] = useState(false);
  const suggestions = !messageWithLocation.isUser && isLast ? getQuickReplies(messageWithLocation.text) : [];
  const { setMessages } = useContext(ChatContext);

  const handleQuickReply = (text: string) => {
    onQuickReply(text);
  };
  
  const handleSchedule = (details: { name: string; email: string; date: string; time: string; topic: string }) => {
    const confirmationMessage: MessageWithLocation = {
      id: generateId(),
      text: `Great! I've scheduled a call for you:\n\n` +
            `• Name: ${details.name}\n` +
            `• Date: ${details.date}\n` +
            `• Time: ${details.time} EET\n` +
            `• Topic: ${details.topic}\n\n` +
            `You'll receive a confirmation email at ${details.email} with the meeting details and a calendar invite. Our team is looking forward to speaking with you!`,
      isUser: false,
      timestamp: new Date(),
      contextTags: ['scheduling'],
      replyCount: 0
    };
    
    setMessages(prev => [...prev, confirmationMessage]);
  };

  return (
    <div className={`flex flex-col ${messageWithLocation.isUser ? 'items-end' : 'items-start'} space-y-2 w-full max-w-[85%]`}>
      <div className={`w-full px-4 py-3 ${
        messageWithLocation.isUser
          ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl' +
            (messageWithLocation.threadId ? ' rounded-tr-none' : ' rounded-br-none')
          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl' +
            (messageWithLocation.threadId ? ' rounded-tl-none' : ' rounded-bl-none') +
            ' shadow-sm dark:shadow-none'
      }`}>
        <MessageText text={messageWithLocation.text} onLinkClick={onLinkClick} />
        {messageWithLocation.location && (
          <div className="mt-3">
            <LocationCard location={messageWithLocation.location} />
          </div>
        )}
        {messageWithLocation.showCalculator && (
          <div className="mt-4 w-full">
            <MiniPriceCalculator 
              onEstimate={(estimate: PriceEstimate) => {
                const responseMessage: MessageWithLocation = {
                  id: generateId(),
                  text: `Based on your selections:\n\n` +
                        `• Business Scale: ${estimate.businessScale}\n` +
                        `• Complexity: ${estimate.complexity}\n` +
                        `• Services: ${estimate.services.join(', ')}\n\n` +
                        `Estimated Cost Range: $${(estimate.estimate * 0.8).toLocaleString()} - $${(estimate.estimate * 1.2).toLocaleString()}\n\n` +
                        `Please note that this is a rough estimate. For a more accurate quote tailored to your specific needs, I recommend scheduling a consultation through our contact page.`,
                  isUser: false,
                  timestamp: new Date(),
                  contextTags: ['pricing'],
                  replyCount: 0
                };
                setMessages(prev => [...prev, responseMessage]);
              }}
            />
          </div>
        )}
        {messageWithLocation.showScheduler && (
          <div className="mt-4 w-full">
            <ScheduleCall onSchedule={handleSchedule} />
          </div>
        )}
      </div>

      {/* Message Footer */}
      <div className="flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-500 px-1">
        <TimeStamp date={messageWithLocation.timestamp} />
        {showThreads && !messageWithLocation.threadId && (
          <button 
            onClick={() => onThreadReply(messageWithLocation.id)}
            className="flex items-center space-x-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <FaReply className="w-3 h-3" />
            <span>Reply</span>
          </button>
        )}
        {messageWithLocation.replyCount > 0 && (
          <button
            onClick={() => setIsThreadExpanded(!isThreadExpanded)}
            className="flex items-center space-x-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span>{messageWithLocation.replyCount} {messageWithLocation.replyCount === 1 ? 'reply' : 'replies'}</span>
            <motion.div
              animate={{ rotate: isThreadExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown className="w-3 h-3" />
            </motion.div>
          </button>
        )}
        {messageWithLocation.contextTags.length > 0 && (
          <div className="flex space-x-1">
            {messageWithLocation.contextTags.map((tag, index) => (
              <span 
                key={index}
                className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
      </div>
        )}
      </div>

      {/* Thread Messages */}
      {isThreadExpanded && thread && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="w-full space-y-4 pl-4 mt-2"
        >
          {thread.messages.map((threadMessage, index) => (
            <Message
              key={threadMessage.id}
              message={threadMessage}
              isLast={index === thread.messages.length - 1}
              onQuickReply={onQuickReply}
              onThreadReply={onThreadReply}
              showThreads={false}
              parentMessage={messageWithLocation}
              onLinkClick={onLinkClick}
            />
          ))}
        </motion.div>
      )}

      {/* Quick Replies and Context Suggestions */}
      {suggestions.length > 0 && !messageWithLocation.isUser && isLast && (
        <div className="space-y-2 w-full">
          <QuickReply suggestions={suggestions} onSelect={handleQuickReply} />
          {messageWithLocation.contextTags.length > 0 && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Related to: {messageWithLocation.contextTags.join(', ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Fix the comma in the LanguageSelector component
const LanguageSelector = ({ 
  currentLang, 
  onLanguageChange 
}: { 
  currentLang: keyof typeof languages;
  onLanguageChange: (lang: keyof typeof languages) => void;
}) => (
  <div className="relative group">
    <button className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm">
      <FaGlobe className="w-4 h-4 text-white/80" />
    </button>
    <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      {Object.entries(languages).map(([code, lang]) => (
        <button
          key={code}
          onClick={() => onLanguageChange(code as keyof typeof languages)}
          className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
            currentLang === code ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          {lang.languageSelect}
        </button>
      ))}
    </div>
  </div>
);

// Add Export Chat function
const exportChat = (messages: Message[]) => {
  const chatHistory = messages.map(msg => ({
    role: msg.isUser ? 'User' : 'Apex AI',
    message: msg.text,
    time: msg.timestamp instanceof Date ? msg.timestamp.toLocaleString() : new Date(msg.timestamp).toLocaleString()
  }));

  const blob = new Blob([JSON.stringify(chatHistory, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `chat-history-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Fix any type in localStorage effect
interface StoredMessage {
  text: string;
  isUser: boolean;
  timestamp: string;
}

// Context analysis function
const analyzeMessageContext = (message: string, messageHistory: Message[]): MessageContext => {
  const topics = {
    technical: ['code', 'error', 'bug', 'implementation', 'development'],
    business: ['pricing', 'cost', 'plan', 'subscription'],
    support: ['help', 'issue', 'problem', 'assistance'],
    general: ['information', 'details', 'learn', 'tell']
  };

  // Determine the topic
  let maxMatches = 0;
  let detectedTopic = 'general';
  
  Object.entries(topics).forEach(([topic, keywords]) => {
    const matches = keywords.filter(keyword => 
      message.toLowerCase().includes(keyword.toLowerCase())
    ).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      detectedTopic = topic;
    }
  });

  // Find relevant messages from history
  const relevantMessages = messageHistory
    .filter(msg => {
      const isRelevantTopic = topics[detectedTopic as keyof typeof topics]
        .some(keyword => msg.text.toLowerCase().includes(keyword.toLowerCase()));
      return isRelevantTopic;
    })
    .slice(-3)
    .map(msg => msg.id);

  // Generate suggested responses based on topic
  const suggestedResponses = getSuggestedResponses(detectedTopic);

  return {
    topic: detectedTopic,
    relevantMessages,
    suggestedResponses,
    confidence: maxMatches / topics[detectedTopic as keyof typeof topics].length
  };
};

// Update getSuggestedResponses function
const getSuggestedResponses = (topic: string): string[] => {
  const suggestions: { [key: string]: string[] } = {
    technical: [
      "Could you provide more details about the technical issue?",
      "Would you like to see some code examples?",
      "Let me help you troubleshoot this problem."
    ],
    business: [
      "Let me explain our pricing plans in detail.",
      "Would you like to schedule a consultation?",
      "I can provide information about our enterprise solutions."
    ],
    support: [
      "I'll help you resolve this issue step by step.",
      "Would you like me to connect you with our support team?",
      "Let me check our knowledge base for similar issues."
    ],
    general: [
      "Would you like more specific information about any particular aspect?",
      "I can provide detailed documentation on this topic.",
      "Let me know if you need clarification on anything."
    ]
  };

  return suggestions[topic] || suggestions.general;
};

// Generate unique ID for messages
const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Update the VoiceFeedback component
const VoiceFeedback = ({ error }: VoiceFeedbackProps) => (
  <div className={`flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center ${
    error ? 'border border-red-500' : ''
  }`}>
    {error ? (
      <div className="flex items-center space-x-2 w-full">
        <motion.div className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-sm text-red-500">{error}</span>
      </div>
    ) : (
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-primary-500"
              animate={{
                height: [8, 16, 24, 16, 8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-300">Recording...</span>
      </div>
    )}
  </div>
);

// Update the Chatbot component to provide ChatContext
export default function Chatbot() {
  const [currentLang, setCurrentLang] = useState<keyof typeof languages>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [activeThread, setActiveThread] = useState<string | undefined>(undefined);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceError, setVoiceError] = useState<string | undefined>(undefined);
  const chatWindowRef = useRef<HTMLDivElement>(null);

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

  // Update initial message loading
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages) as StoredMessage[];
        setMessages(parsed.map((msg) => ({
          id: generateId(),
          text: msg.text,
          isUser: msg.isUser,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date(),
          contextTags: [],
          replyCount: 0
        })));
      } catch (err) {
        console.error('Error parsing saved messages:', err);
        setMessages([{ 
          id: generateId(),
          text: languages[currentLang].welcome,
          isUser: false,
          timestamp: new Date(),
          contextTags: [],
          replyCount: 0
        }]);
      }
    } else {
      setMessages([{ 
        id: generateId(),
        text: languages[currentLang].welcome,
        isUser: false,
        timestamp: new Date(),
        contextTags: [],
        replyCount: 0
      }]);
    }
  }, [currentLang]);

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

  // Handle message threading
  const handleThreadReply = (parentMessageId: string) => {
    setActiveThread(parentMessageId);
    const parentMessage = messages.find(m => m.id === parentMessageId);
    if (parentMessage) {
      setReplyingTo(parentMessage);
    }
  };

  // Add cancel reply handler
  const handleCancelReply = () => {
    setReplyingTo(null);
    setActiveThread(undefined);
  };

  // Update message sending with threading and context
  const handleSendMessage = async (event?: React.MouseEvent | string) => {
    const messageText = typeof event === 'string' ? event.trim() : inputText.trim();
    
    if (!messageText || isLoading) return;

    const newMessageId = generateId();
    const threadId = activeThread || undefined;
    
    const newUserMessage: MessageWithLocation = { 
      id: newMessageId,
      text: messageText, 
      isUser: true,
      timestamp: new Date(),
      threadId,
      contextTags: [],
      replyCount: 0
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Check if this is a scheduling request
      const isSchedulingRequest = messageText.toLowerCase().match(/schedule|book|appointment|call|meeting|consultation/);
      
      if (isSchedulingRequest) {
        const schedulerMessage: MessageWithLocation = {
          id: generateId(),
          text: "I'll help you schedule a call with our team. Please fill out the form below with your preferred date and time:",
          isUser: false,
          timestamp: new Date(),
          threadId: activeThread,
          contextTags: ['scheduling'],
          replyCount: 0,
          showScheduler: true
        };
        
        setMessages(prev => [...prev, schedulerMessage]);
        setIsLoading(false);
        return;
      }

      // Check if this is a pricing query
      const isPricingQuery = messageText.toLowerCase().match(/price|pricing|cost|quote|estimate|calculator|charge|how much/);
      
      if (isPricingQuery) {
        const calculatorMessage: MessageWithLocation = {
          id: generateId(),
          text: "I can help you estimate the cost of our services. Please note that these are rough estimates, and actual pricing may vary based on specific requirements. Use our mini calculator below to get a quick estimate, or visit our pricing page for more detailed information.\n\nSelect your business scale, service complexity, and desired services to get started:",
          isUser: false,
          timestamp: new Date(),
          threadId: activeThread,
          contextTags: ['pricing'],
          replyCount: 0,
          showCalculator: true
        };
        
        setMessages(prev => [...prev, calculatorMessage]);
        setIsLoading(false);
        return;
      }

      // Continue with the regular message handling
      const context = analyzeMessageContext(messageText, messages);

      const recentMessages = messages.slice(-5).map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      } as ChatMessage));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_CONTEXTS[currentLang] },
            ...recentMessages,
            { role: 'user', content: messageText }
          ],
          language: currentLang
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const newAssistantMessage: MessageWithLocation = { 
        id: generateId(),
        text: data.response, 
        isUser: false,
        timestamp: new Date(),
        threadId: activeThread,
        contextTags: [context.topic],
        replyCount: 0
      };

      // When creating the assistant's response, check if it's a location request
      const officeLocation: Location = {
        address: "Fifth Settlement, Street 90, New Cairo, Cairo",
        coordinates: {
          lat: 30.0074,  // Replace with actual coordinates
          lng: 31.4913   // Replace with actual coordinates
        }
      };

      if (messageText.toLowerCase().includes('location') || 
          messageText.toLowerCase().includes('address') || 
          messageText.toLowerCase().includes('office')) {
        newAssistantMessage.location = officeLocation;
      }

      setMessages(prev => [...prev, newAssistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: MessageWithLocation = {
        id: generateId(),
        text: languages[currentLang].error,
        isUser: false,
        timestamp: new Date(),
        threadId: activeThread,
        contextTags: ['error'],
        replyCount: 0
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setReplyingTo(null);
      if (activeThread) {
        setActiveThread(undefined);
      }
    }
  };

  // Clear chat with updated interface
  const handleClearChat = () => {
    localStorage.removeItem('chatMessages');
    setMessages([{ 
      id: generateId(),
      text: languages[currentLang].welcome,
      isUser: false,
      timestamp: new Date(),
      contextTags: [],
      replyCount: 0
    }]);
    setThreads([]);
    setActiveThread(undefined);
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

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Update the main messages rendering in Chatbot component
  const renderMessages = () => (
    <div 
      className="flex-1 p-6 space-y-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
      style={{ 
        overscrollBehavior: 'contain',
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable'
      }}
    >
      {messages.map((message, index) => {
        const thread = message.replyCount > 0 
          ? threads.find(t => t.parentMessageId === message.id)
          : undefined;
        
        const parentMessage = message.threadId 
          ? messages.find(m => m.id === message.threadId)
          : undefined;

  return (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} w-full`}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <Message 
              message={message} 
              isLast={index === messages.length - 1}
              onQuickReply={handleSendMessage}
              onThreadReply={handleThreadReply}
              thread={thread}
              parentMessage={parentMessage}
              onLinkClick={isMobile ? () => setIsOpen(false) : undefined}
            />
          </motion.div>
        );
      })}
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
  );

  // Update the input area JSX
  const renderInput = () => (
    <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      {replyingTo && (
        <div className="mb-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-12 bg-primary-500 rounded-full" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-primary-500 dark:text-primary-400">
                Replying to {replyingTo.isUser ? 'yourself' : 'Apex AI'}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-[200px]">
                {replyingTo.text}
              </span>
            </div>
          </div>
          <button
            onClick={handleCancelReply}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <FaTimes className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
      <div className="flex space-x-2">
        {isListening || voiceError ? (
          <VoiceFeedback error={voiceError} />
        ) : (
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={
              replyingTo 
                ? 'Type your reply...' 
                : languages[currentLang].placeholder
            }
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 disabled:opacity-50 transition-all duration-200"
          />
        )}
        {voiceSupported && (
          <motion.button
            onClick={handleVoiceInput}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-xl transition-all duration-200 ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 shadow-lg ring-4 ring-red-500/20'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <motion.div
              animate={isListening ? {
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              } : {}}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              {isListening ? (
                <FaMicrophone className="w-5 h-5 text-white" />
              ) : (
                <FaMicrophoneAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              )}
            </motion.div>
          </motion.button>
        )}
        <motion.button
          onClick={() => handleSendMessage()}
          disabled={isLoading || (isListening && !inputText)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-200"
        >
          <FaPaperPlane className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );

  // Update the handleVoiceInput function
  const handleVoiceInput = () => {
    if (!voiceSupported) {
      console.error('Speech recognition not supported');
      setVoiceError('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
      setTimeout(() => setVoiceError(undefined), 3000);
      return;
    }

    if (isListening) {
      try {
        const recognition = window.webkitSpeechRecognition ? 
          new window.webkitSpeechRecognition() : 
          new window.SpeechRecognition();
        recognition.stop();
        // Send the message when stopping manually
        if (inputText.trim()) {
          handleSendMessage();
        }
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
      setIsListening(false);
      return;
    }

    let finalTranscript = '';
    let recognitionInstance: SpeechRecognitionInstance | null = null;

    try {
      // Create recognition instance
      const Recognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionInstance = new Recognition();

      // Configure recognition
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.maxAlternatives = 1;
      recognitionInstance.lang = currentLang === 'ar' ? 'ar-EG' : currentLang === 'fr' ? 'fr-FR' : 'en-US';

      // Set up event handlers before starting
      recognitionInstance.onstart = () => {
        console.log('Speech recognition started');
        setIsListening(true);
        setInputText('');
        setVoiceError(undefined);
        finalTranscript = '';
      };

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        if (event.results && event.results[0]) {
          const transcript = event.results[0][0].transcript;
          if (event.results[0].isFinal) {
            finalTranscript = transcript;
          }
          setInputText(transcript.trim());
        }
      };

      recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        const errorMessage = handleSpeechError(event.error);
        setVoiceError(errorMessage);
        setIsListening(false);
        // Auto-clear error after 3 seconds
        setTimeout(() => setVoiceError(undefined), 3000);
      };

      recognitionInstance.onend = () => {
        console.log('Speech recognition ended');
        setIsListening(false);
        
        // Use the final transcript if available, otherwise use the current inputText
        const messageToSend = finalTranscript.trim() || inputText.trim();
        if (messageToSend) {
          // Small delay to ensure UI is updated
          setTimeout(() => {
            setInputText(messageToSend);
            handleSendMessage();
          }, 100);
        }
      };

      // Add error handling for start()
      try {
        recognitionInstance.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        setVoiceError('Failed to start voice input. Please try again.');
        setIsListening(false);
        // Auto-clear error after 3 seconds
        setTimeout(() => setVoiceError(undefined), 3000);
      }

    } catch (error) {
      console.error('Speech recognition error:', error);
      setVoiceError('Voice input is not supported in this browser. Please use Chrome or Edge browser.');
      setVoiceSupported(false);
      // Auto-clear error after 3 seconds
      setTimeout(() => setVoiceError(undefined), 3000);
    }
  };

  // Add the voice support check
  useEffect(() => {
    const checkVoiceSupport = () => {
      try {
        const supported = 'webkitSpeechRecognition' in window;
        setVoiceSupported(supported);
        if (!supported) {
          console.log('Speech recognition not supported in this browser');
        }
      } catch (error) {
        console.error('Error checking voice support:', error);
        setVoiceSupported(false);
      }
    };

    checkVoiceSupport();
  }, []);

  return (
    <ChatContext.Provider value={{ setMessages }}>
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
              ref={chatWindowRef}
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
              height: isMobile ? 'calc(100vh - 6rem)' : '580px',
              overflowY: 'hidden'
            }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col border border-gray-100 dark:border-gray-800"
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
                    <p className="text-xs text-white/80">{languages[currentLang].online}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <LanguageSelector 
                    currentLang={currentLang} 
                    onLanguageChange={setCurrentLang} 
                  />
                  <button
                    onClick={() => exportChat(messages)}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
                    title={languages[currentLang].exportChat}
                  >
                    <FaDownload className="w-4 h-4 text-white/80" />
                  </button>
                  <button 
                    onClick={handleClearChat}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
                    title={languages[currentLang].clearChat}
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
              {renderMessages()}

            {/* Input */}
              {renderInput()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </ChatContext.Provider>
  );
} 