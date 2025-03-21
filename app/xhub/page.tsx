import { Navbar } from "../../components/navbar"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import Link from "next/link"

export const metadata = {
  title: 'XHub | Government Schemes, Funds & Cohorts',
  description: 'Discover the latest government schemes, funding opportunities, and startup cohorts to accelerate your entrepreneurial journey.',
};

// Example data for government schemes, funds, and cohorts
const governmentSchemes = [
  {
    id: 1,
    title: "Startup India Seed Fund",
    description: "Financial assistance to startups for proof of concept, prototype development, product trials, and market entry.",
    eligibility: "DPIIT-recognized startups less than 2 years old",
    deadline: "June 30, 2023",
    amount: "Up to ₹25 Lakhs",
    link: "https://www.startupindia.gov.in/",
    category: "Funding"
  },
  {
    id: 2,
    title: "PM MUDRA Yojana",
    description: "Loans for micro and small business units to help them expand their business activities.",
    eligibility: "Small businesses, entrepreneurs, and SMEs",
    deadline: "Ongoing",
    amount: "Up to ₹10 Lakhs",
    link: "https://www.mudra.org.in/",
    category: "Loans"
  },
  {
    id: 3,
    title: "MSME Technology Centre Scheme",
    description: "Access to advanced technology, training, and technical advisory services for MSMEs.",
    eligibility: "MSMEs in manufacturing sector",
    deadline: "Ongoing",
    amount: "Varies",
    link: "https://msme.gov.in/",
    category: "Technology"
  }
];

const fundingOpportunities = [
  {
    id: 1,
    title: "Sequoia Surge",
    description: "Early-stage startup funding and mentorship program for founders in India and Southeast Asia.",
    type: "Accelerator + Funding",
    investment: "$1-2 Million",
    applicationDeadline: "Quarterly Cycles",
    link: "https://www.sequoiacap.com/surge/",
    category: "VC Fund"
  },
  {
    id: 2,
    title: "Y Combinator",
    description: "Seed funding for startups, providing capital, connections, and mentorship.",
    type: "Accelerator + Funding",
    investment: "$500K",
    applicationDeadline: "Biannual Cycles",
    link: "https://www.ycombinator.com/",
    category: "Accelerator"
  },
  {
    id: 3,
    title: "100X.VC",
    description: "India's first venture fund to invest using iSAFE (India Simple Agreement for Future Equity).",
    type: "Seed Funding",
    investment: "₹25 Lakhs - 1.25 Crore",
    applicationDeadline: "Multiple Cycles per Year",
    link: "https://www.100x.vc/",
    category: "VC Fund"
  }
];

const startupCohorts = [
  {
    id: 1,
    title: "Microsoft for Startups",
    description: "Technical and business support program for startups, providing access to technology, mentorship, and market reach.",
    duration: "12 months",
    benefits: "Azure Credits, Technical Support, Mentorship",
    applicationDeadline: "Rolling Applications",
    link: "https://startups.microsoft.com/",
    category: "Tech"
  },
  {
    id: 2,
    title: "Google for Startups Accelerator",
    description: "Digital accelerator program for high potential startups, focusing on AI/ML, Cloud, and mobile technologies.",
    duration: "3 months",
    benefits: "Google Cloud Credits, Technical Support, Mentorship",
    applicationDeadline: "Multiple Batches per Year",
    link: "https://startup.google.com/accelerator/",
    category: "Tech"
  },
  {
    id: 3,
    title: "NASSCOM DeepTech Club",
    description: "Program for DeepTech startups to access enterprise connections, mentorship, and investors.",
    duration: "6 months",
    benefits: "Industry Connections, Investor Access, Technical Mentorship",
    applicationDeadline: "Twice per Year",
    link: "https://startup.nasscom.in/",
    category: "DeepTech"
  }
];

export default function XHubPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">XHub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your central resource for government schemes, funding opportunities, and startup cohorts to fuel your entrepreneurial journey.
            </p>
          </div>
          
          {/* Filters and Search - Placeholder for future development */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-[#FF6B00] hover:bg-[#E05A00] px-4 py-2 text-white cursor-pointer">All</Badge>
            <Badge className="bg-muted hover:bg-muted/80 px-4 py-2 cursor-pointer">Government Schemes</Badge>
            <Badge className="bg-muted hover:bg-muted/80 px-4 py-2 cursor-pointer">Funding</Badge>
            <Badge className="bg-muted hover:bg-muted/80 px-4 py-2 cursor-pointer">Accelerators</Badge>
          </div>
          
          {/* Government Schemes */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">🏛️</span>
              Government Schemes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentSchemes.map((scheme) => (
                <Card key={scheme.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{scheme.title}</CardTitle>
                      <Badge>{scheme.category}</Badge>
                    </div>
                    <CardDescription className="mt-2">{scheme.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Eligibility:</span>
                        <span className="text-muted-foreground">{scheme.eligibility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Amount:</span>
                        <span className="text-muted-foreground">{scheme.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Deadline:</span>
                        <span className="text-muted-foreground">{scheme.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={scheme.link} target="_blank" className="w-full">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Funding Opportunities */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-green-100 text-green-800 p-1 rounded mr-2">💰</span>
              Funding Opportunities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingOpportunities.map((fund) => (
                <Card key={fund.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{fund.title}</CardTitle>
                      <Badge>{fund.category}</Badge>
                    </div>
                    <CardDescription className="mt-2">{fund.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Type:</span>
                        <span className="text-muted-foreground">{fund.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Investment:</span>
                        <span className="text-muted-foreground">{fund.investment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Applications:</span>
                        <span className="text-muted-foreground">{fund.applicationDeadline}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={fund.link} target="_blank" className="w-full">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Startup Cohorts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-800 p-1 rounded mr-2">🚀</span>
              Startup Cohorts & Accelerators
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {startupCohorts.map((cohort) => (
                <Card key={cohort.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{cohort.title}</CardTitle>
                      <Badge>{cohort.category}</Badge>
                    </div>
                    <CardDescription className="mt-2">{cohort.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Duration:</span>
                        <span className="text-muted-foreground">{cohort.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Benefits:</span>
                        <span className="text-muted-foreground">{cohort.benefits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Applications:</span>
                        <span className="text-muted-foreground">{cohort.applicationDeadline}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={cohort.link} target="_blank" className="w-full">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-muted/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Opportunity?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our AI Co-Founder can help you identify the best funding options and government schemes based on your startup&apos;s stage and needs.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/ai-cofounder">
                <Button className="bg-[#FF6B00] hover:bg-[#E05A00] text-white px-6">Talk to AI Co-Founder</Button>
              </Link>
              <Button variant="outline">Schedule Advisor Call</Button>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="bg-muted/50 py-6 mt-10">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} X-Ceed. All rights reserved.</p>
          <p className="mt-2">Information is updated regularly but please verify details on the official websites.</p>
        </div>
      </footer>
    </div>
  )
} 