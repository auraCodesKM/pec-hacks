'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, AlertCircle } from 'lucide-react';
// Comment out the UI components temporarily to make the build pass
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Hardcoded responses for AI Cofounder mode
const hardcodedResponses = {
  default: "I'm your AI Co-Founder ready to help with your startup journey!",
  business: "For your business idea, I recommend starting with market research `and creating an MVP to test with potential customers.",
  funding: "To secure funding, prepare a solid pitch deck, build a prototype, and consider applying to accelerators like Y Combinator or seeking angel investors.",
  marketing: "For marketing, focus on content marketing, SEO, and social media to build your brand. Start with identifying your target audience and their pain points.",
  product: "To develop your product, use agile methodology, gather user feedback early, and focus on solving a specific problem really well.",
  team: "When building your team, look for complementary skills, shared values, and passion for your mission. Start with critical roles like tech and sales/marketing.",
};

// Hardcoded responses for support chatbot mode
const supportResponses = {
  default: "Hi! I'm your X-Ceed support assistant. How can I help you today?",
  business: "I can help you find resources about business planning in our knowledge base. Would you like me to direct you to some articles?",
  funding: "We have several guides about funding options on our platform. You can find them in the 'Resources' section or I can send you direct links.",
  marketing: "For marketing questions, I recommend checking out our marketing guides and templates in the resource center.",
  product: "I can help you navigate our platform features for product development. What specific aspect are you looking for help with?",
  team: "Our platform has a 'Connect' section where you can find potential team members and collaborators. Would you like me to show you how to use it?",
  platform: "I can help you navigate various features of the X-Ceed platform. What specifically would you like to know about?",
  error: "I'm sorry you're experiencing issues. Could you provide more details so I can help troubleshoot?",
  contact: "You can reach our team at support@xceed.com or use the contact form in the 'Help' section. Would you like me to direct you there?",
};

const AICoFounder: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! I\'m your AI Co-Founder. How can I help you today?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiMode, setAiMode] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Timer to show the system is running
  useEffect(() => {
    const timer = setInterval(() => {
      setRunningTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Reset welcome message when toggling modes
  useEffect(() => {
    setMessages([{
      id: '1',
      text: aiMode 
        ? 'Hi there! I\'m your AI Co-Founder. How can I help you today?' 
        : 'Welcome to X-Ceed support! How can I assist you with our platform today?',
      sender: 'ai',
      timestamp: new Date(),
    }]);
  }, [aiMode]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setNewMessage('');
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      
      if (aiMode) {
        // AI Cofounder mode - use cofounder style responses
        let response = hardcodedResponses.default;
        
        // Check for keywords to determine which response to use
        const lowercaseMessage = newMessage.toLowerCase();
        if (lowercaseMessage.includes('business') || lowercaseMessage.includes('idea') || lowercaseMessage.includes('startup')) {
          response = hardcodedResponses.business;
        } else if (lowercaseMessage.includes('fund') || lowercaseMessage.includes('investor') || lowercaseMessage.includes('money')) {
          response = hardcodedResponses.funding;
        } else if (lowercaseMessage.includes('market') || lowercaseMessage.includes('growth') || lowercaseMessage.includes('customer')) {
          response = hardcodedResponses.marketing;
        } else if (lowercaseMessage.includes('product') || lowercaseMessage.includes('develop') || lowercaseMessage.includes('build')) {
          response = hardcodedResponses.product;
        } else if (lowercaseMessage.includes('team') || lowercaseMessage.includes('hire') || lowercaseMessage.includes('people')) {
          response = hardcodedResponses.team;
        }
        
        const aiMessage: Message = {
          id: Date.now().toString(),
          text: response,
          sender: 'ai',
          timestamp: new Date(),
        };
        
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      } else {
        // Support chatbot mode - use support style responses
        let response = supportResponses.default;
        
        // Check for keywords to determine which support response to use
        const lowercaseMessage = newMessage.toLowerCase();
        if (lowercaseMessage.includes('business') || lowercaseMessage.includes('idea') || lowercaseMessage.includes('startup')) {
          response = supportResponses.business;
        } else if (lowercaseMessage.includes('fund') || lowercaseMessage.includes('investor') || lowercaseMessage.includes('money')) {
          response = supportResponses.funding;
        } else if (lowercaseMessage.includes('market') || lowercaseMessage.includes('growth') || lowercaseMessage.includes('customer')) {
          response = supportResponses.marketing;
        } else if (lowercaseMessage.includes('product') || lowercaseMessage.includes('develop') || lowercaseMessage.includes('build')) {
          response = supportResponses.product;
        } else if (lowercaseMessage.includes('team') || lowercaseMessage.includes('hire') || lowercaseMessage.includes('people')) {
          response = supportResponses.team;
        } else if (lowercaseMessage.includes('platform') || lowercaseMessage.includes('website') || lowercaseMessage.includes('use')) {
          response = supportResponses.platform;
        } else if (lowercaseMessage.includes('error') || lowercaseMessage.includes('issue') || lowercaseMessage.includes('problem')) {
          response = supportResponses.error;
        } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('help') || lowercaseMessage.includes('support')) {
          response = supportResponses.contact;
        }
        
        const aiMessage: Message = {
          id: Date.now().toString(),
          text: response,
          sender: 'ai',
          timestamp: new Date(),
        };
        
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to get a response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Format running time
  const formatRunningTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <div className="flex flex-col h-[600px] md:h-[700px] w-full max-w-4xl mx-auto border rounded-xl shadow-md overflow-hidden bg-background">
      {/* Header */}
      <div className="p-4 border-b bg-muted/50 flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="mr-2 h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">AI Co-Founder Chat</h2>
          <div className="ml-3 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
            System running for {formatRunningTime(runningTime)}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Switch commented out for now to make build pass */}
          {/* <Switch 
            id="ai-mode" 
            checked={aiMode} 
            onCheckedChange={setAiMode} 
          />
          <Label htmlFor="ai-mode">AI Co-Founder Mode</Label> */}
          
          {/* Simple toggle replacement */}
          <button 
            onClick={() => setAiMode(!aiMode)} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${aiMode ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            AI Co-Founder Mode: {aiMode ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-muted rounded-tl-none'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender === 'user' ? (
                  <>
                    <span className="text-xs opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                    <User className="ml-1 h-3 w-3" />
                  </>
                ) : (
                  <>
                    <Bot className="mr-1 h-3 w-3" />
                    <span className="text-xs opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                  </>
                )}
              </div>
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-muted p-3 rounded-xl rounded-tl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center mb-4">
            <div className="bg-destructive/10 text-destructive p-3 rounded-xl flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span>{error}</span>
            </div>
          </div>
        )}
        
        <div ref={messageEndRef} />
      </div>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-background flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={aiMode ? "Ask your AI Co-Founder..." : "Ask for support..."}
          className="flex-1 p-2 rounded-l-md border focus:outline-none focus:ring-1 focus:ring-primary"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-r-md"
          disabled={isLoading || !newMessage.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default AICoFounder; 