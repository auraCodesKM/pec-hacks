import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { DollarSign, Globe, Rocket } from "lucide-react"

// Entrepreneurs data
const entrepreneurs = [
  {
    id: 1,
    name: "EcoTech Solutions",
    founder: "Maya Rodriguez",
    image: "/placeholder.svg?height=300&width=300",
    description: "Developing biodegradable packaging solutions for the food industry to reduce plastic waste.",
    seeking: "$500K",
    stage: "Seed",
    industry: "CleanTech",
    location: "Portland, OR",
    traction: "Pilot programs with 3 restaurant chains",
  },
  {
    id: 2,
    name: "MediConnect",
    founder: "Dr. James Chen",
    image: "/placeholder.svg?height=300&width=300",
    description: "AI-powered telemedicine platform connecting patients with specialists in underserved areas.",
    seeking: "$1.2M",
    stage: "Series A",
    industry: "HealthTech",
    location: "Boston, MA",
    traction: "10,000 monthly active users, 30% MoM growth",
  },
  {
    id: 3,
    name: "UrbanFarm",
    founder: "Sophia Kim",
    image: "/placeholder.svg?height=300&width=300",
    description: "Vertical farming technology for urban environments, using 95% less water than traditional farming.",
    seeking: "$750K",
    stage: "Seed",
    industry: "AgTech",
    location: "Chicago, IL",
    traction: "Two operational farms, $120K annual revenue",
  },
  {
    id: 4,
    name: "CyberShield",
    founder: "Alex Johnson",
    image: "/placeholder.svg?height=300&width=300",
    description: "Cybersecurity solution for small businesses using machine learning to detect and prevent threats.",
    seeking: "$2M",
    stage: "Series A",
    industry: "Security",
    location: "Austin, TX",
    traction: "50+ enterprise clients, $400K ARR",
  },
  {
    id: 5,
    name: "LearnLoop",
    founder: "Priya Patel",
    image: "/placeholder.svg?height=300&width=300",
    description: "Adaptive learning platform that personalizes education content based on student performance.",
    seeking: "$850K",
    stage: "Seed",
    industry: "EdTech",
    location: "San Diego, CA",
    traction: "Partnerships with 15 schools, 5,000 active students",
  },
  {
    id: 6,
    name: "FitTech",
    founder: "Marcus Williams",
    image: "/placeholder.svg?height=300&width=300",
    description: "Wearable technology that provides real-time feedback on workout form and performance.",
    seeking: "$1.5M",
    stage: "Series A",
    industry: "FitnessTech",
    location: "Miami, FL",
    traction: "8,000 units sold, 4.8/5 average review",
  },
  {
    id: 7,
    name: "GreenRide",
    founder: "Emma Clark",
    image: "/placeholder.svg?height=300&width=300",
    description: "Electric scooter sharing platform with solar-powered charging stations.",
    seeking: "$1.8M",
    stage: "Series A",
    industry: "Mobility",
    location: "Denver, CO",
    traction: "Operations in 3 cities, 25,000 monthly rides",
  },
  {
    id: 8,
    name: "SupplyChainAI",
    founder: "David Lee",
    image: "/placeholder.svg?height=300&width=300",
    description: "AI-powered supply chain optimization platform for manufacturing businesses.",
    seeking: "$3M",
    stage: "Series B",
    industry: "Enterprise",
    location: "Detroit, MI",
    traction: "12 enterprise clients, $1.2M ARR",
  },
  {
    id: 9,
    name: "PetPal",
    founder: "Olivia Martinez",
    image: "/placeholder.svg?height=300&width=300",
    description: "On-demand pet care services platform connecting pet owners with verified caregivers.",
    seeking: "$600K",
    stage: "Seed",
    industry: "Consumer",
    location: "Seattle, WA",
    traction: "15,000 registered users, 2,000 service providers",
  },
  {
    id: 10,
    name: "BlockSecure",
    founder: "Ryan Thompson",
    image: "/placeholder.svg?height=300&width=300",
    description: "Blockchain-based identity verification system for financial institutions.",
    seeking: "$2.5M",
    stage: "Series A",
    industry: "Fintech",
    location: "New York, NY",
    traction: "Partnerships with 3 banks, regulatory approval in 2 states",
  },
  {
    id: 11,
    name: "AquaSense",
    founder: "Liam Wilson",
    image: "/placeholder.svg?height=300&width=300",
    description: "IoT water quality monitoring system for municipal water supplies.",
    seeking: "$1M",
    stage: "Seed",
    industry: "CleanTech",
    location: "Minneapolis, MN",
    traction: "Pilot programs in 5 cities, government contract pending",
  },
  {
    id: 12,
    name: "RetailAI",
    founder: "Zoe Nguyen",
    image: "/placeholder.svg?height=300&width=300",
    description: "AI-powered inventory management and demand forecasting for retail businesses.",
    seeking: "$1.7M",
    stage: "Series A",
    industry: "Retail",
    location: "Atlanta, GA",
    traction: "20+ retail clients, 35% average inventory cost reduction",
  },
]

export default function GetFunds() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Startups Seeking{" "}
                <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent">
                  Funding
                </span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover innovative startups looking for investment to fuel their growth and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entrepreneurs.map((startup) => (
                <Card
                  key={startup.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#FF6B00]/20"
                >
                  <div className="aspect-video relative">
                    <img
                      src={startup.image || "/placeholder.svg"}
                      alt={startup.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-[#FF6B00] text-white font-medium">{startup.stage}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{startup.name}</CardTitle>
                        <CardDescription>Founded by {startup.founder}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20">
                        {startup.industry}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground mb-4">{startup.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-[#FF6B00]" />
                        <span>Seeking: {startup.seeking}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-1 text-[#FF6B00]" />
                        <span>{startup.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/50 px-6 py-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Rocket className="h-4 w-4 mr-1" />
                      <span className="mr-4">Traction: {startup.traction}</span>
                    </div>
                    <Button size="sm" className="ml-auto bg-[#FF6B00] hover:bg-[#E05A00] text-white">
                      Connect
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

