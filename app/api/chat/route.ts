import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

// Map of topics to their corresponding routes
const routeMap: { [key: string]: string } = {
  'pricing': '/pricing',
  'services': '/services',
  'contact': '/contact',
  'about': '/about',
  'case studies': '/case-studies',
  'case-studies': '/case-studies',
  'blog': '/blog'
};

// Add type definitions
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface SystemMessage {
  role: 'system';
  content: string;
}

// Function to detect and format page links
const addPageLinks = (text: string) => {
  let result = text;
  const addedLinks = new Set<string>();
  
  // Replace "[Insert X page link here]" patterns
  result = result.replace(/\[Insert ([^\]]+) link here\]/gi, (match, pageName) => {
    const pageKey = pageName.toLowerCase().replace(' page', '').trim();
    const route = routeMap[pageKey];
    if (route && !addedLinks.has(route)) {
      addedLinks.add(route);
      return `<link href="${route}">${pageName}</link>`;
    }
    return match;
  });

  // Add links for common page references
  Object.entries(routeMap).forEach(([key, route]) => {
    if (!addedLinks.has(route)) {
      const regex = new RegExp(`(our\\s+${key}\\s+page|the\\s+${key}\\s+page|${key}\\s+page)`, 'gi');
      let hasReplaced = false;
      result = result.replace(regex, (match) => {
        if (!hasReplaced) {
          hasReplaced = true;
          addedLinks.add(route);
          return `<link href="${route}">${match}</link>`;
        }
        return match;
      });
    }
  });

  return result;
};

// Function to clean and format markdown
const cleanMarkdown = (text: string) => {
  // Remove duplicate lines
  const uniqueLines = new Set();
  const lines = text.split('\n').filter(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine || uniqueLines.has(trimmedLine)) return false;
    uniqueLines.add(trimmedLine);
    return true;
  });

  // Rejoin lines and split into sections
  const sections = lines.join('\n').split(/(?=\n[A-Z][^a-z\n:]{2,})/);
  
  return sections
    .map(section => {
      return section
        .replace(/\*\*/g, '') // Remove bold markdown
        .replace(/\*/g, '')   // Remove italic markdown
        .replace(/`/g, '')    // Remove code markdown
        .replace(/#{1,6}\s/g, '') // Remove heading markdown
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Clean links to just text
        .replace(/[-•]\s+([^\n]+)/g, '\n• $1') // Format bullet points with line breaks
        .trim(); // Remove leading/trailing whitespace
    })
    .filter(Boolean) // Remove empty sections
    .join('\n\n')
    .replace(/\n{3,}/g, '\n\n') // Remove excessive line breaks
    .trim();
};

export async function POST(req: Request) {
  try {
    const { messages, language } = await req.json();
    
    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prepare the message with context
    const systemContext = messages.find((msg: SystemMessage | ChatMessage) => msg.role === 'system')?.content || '';
    const userMessage = messages[messages.length - 1].content;

    // Add language instruction
    const languageInstructions = {
      ar: "IMPORTANT: You must respond in Arabic (العربية) regardless of the question or content. Translate any information not in the context to Arabic.",
      fr: "IMPORTANT: Vous devez répondre en français quelle que soit la question ou le contenu. Traduisez en français toute information qui n'est pas dans le contexte.",
      en: "Respond in English."
    };

    const messageWithContext = `${systemContext}

${languageInstructions[language as keyof typeof languageInstructions]}

User message: ${userMessage}

Please format your response in clear sections with proper line breaks and bullet points. Keep your response concise and avoid repeating information. When suggesting a page to visit, use the exact format "Visit our [pagename] page" or "Learn more on our [pagename] page". Remember to suggest the most relevant page first and only suggest each page once.`;

    // Generate response
    const result = await model.generateContent(messageWithContext);
    const response = await result.response;
    
    // Clean markdown and add page links
    const cleanedResponse = cleanMarkdown(response.text());
    const responseWithLinks = addPageLinks(cleanedResponse);
    
    return NextResponse.json({ response: responseWithLinks });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 