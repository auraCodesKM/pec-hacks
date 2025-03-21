import AICoFounder from "../../components/AICoFounder";
import { Navbar } from "../../components/navbar";

export const metadata = {
  title: 'AI Co-Founder | Your Startup Assistant',
  description: 'Chat with your AI Co-Founder to get advice, brainstorm ideas, and strategize your startup journey',
};

export default function AICoFounderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-12 px-4 mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Your AI Co-Founder
          </h1>
          
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Chat with your virtual co-founder to brainstorm ideas, get feedback on your startup, 
            and strategize your next business move.
          </p>
          
          <AICoFounder />
          
          <div className="mt-12 max-w-2xl mx-auto text-sm text-muted-foreground">
            <h3 className="font-medium mb-2">What can your AI Co-Founder help with?</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Brainstorming business ideas and validating concepts</li>
              <li>Creating marketing strategies and content plans</li>
              <li>Analyzing competition and market opportunities</li>
              <li>Finding potential funding sources and investment strategies</li>
              <li>Optimizing your business operations and growth</li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-muted/50 py-6 mt-10">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} X-Ceed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 