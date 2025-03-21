import { Navbar } from "../../components/navbar"

export const metadata = {
  title: 'About X-Ceed | Our Mission and Values',
  description: 'Learn about X-Ceed, our mission to help entrepreneurs succeed, and the team behind our platform.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 px-4 md:py-24">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">About X-Ceed</h1>
            
            <div className="bg-muted/30 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                At X-Ceed, we&apos;re dedicated to empowering entrepreneurs and startup founders with the resources, 
                connections, and support they need to transform their vision into successful ventures.
              </p>
              <p className="text-lg">
                We believe that great ideas deserve the opportunity to flourish, regardless of where they originate. 
                Our platform bridges the gap between innovative entrepreneurs and the resources they need to succeed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-3">What We Do</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Connect entrepreneurs with funding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Provide AI-powered guidance and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Curate government schemes and incubator programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Facilitate networking with mentors and investors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-3">Our Values</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Innovation: Embracing new ideas and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Inclusivity: Supporting entrepreneurs from all backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Impact: Creating meaningful change through entrepreneurship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B00] mr-2">•</span>
                    <span>Integrity: Building trust through honest guidance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                Whether you&apos;re just starting with an idea or looking to scale your venture, X-Ceed provides the 
                platform and tools to help you succeed in your entrepreneurial journey.
              </p>
              <button className="bg-[#FF6B00] hover:bg-[#E05A00] text-white px-6 py-3 rounded-md font-medium">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted/50 py-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} X-Ceed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 