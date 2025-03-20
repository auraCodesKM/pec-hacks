"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { motion, type PanInfo, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { Bookmark, BookmarkCheck, Briefcase, ChevronLeft, ChevronRight, MapPin, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import Image from "next/image"

// Mentor data
const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/mentors/mentor1.jpg",
    expertise: "Marketing",
    bio: "Former CMO at TechGiant with 15+ years of experience in digital marketing and brand strategy.",
    availability: "Available",
    location: "San Francisco, CA",
    experience: "15+ years",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/mentors/mentor2.jpg",
    expertise: "Finance",
    bio: "Venture capitalist with $50M+ investments in early-stage startups. Previously investment banker at Goldman Sachs.",
    availability: "Limited",
    location: "New York, NY",
    experience: "12 years",
  },
  {
    id: 3,
    name: "Priya Patel",
    image: "/mentors/mentor3.jpg",
    expertise: "Product Design",
    bio: "Lead designer at Apple for 8 years. Specializes in UX/UI for consumer products and design thinking.",
    availability: "Available",
    location: "Cupertino, CA",
    experience: "10 years",
  },
  {
    id: 4,
    name: "James Wilson",
    image: "/mentors/mentor4.jpg",
    expertise: "Technology",
    bio: "CTO of three successful startups. Expert in scaling engineering teams and cloud architecture.",
    availability: "Not Taking Requests",
    location: "Austin, TX",
    experience: "18 years",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    image: "/mentors/mentor5.jpg",
    expertise: "Sales",
    bio: "Built and led sales teams at Salesforce. Specializes in B2B enterprise sales strategies.",
    availability: "Available",
    location: "Chicago, IL",
    experience: "14 years",
  },
  {
    id: 6,
    name: "David Kim",
    image: "/mentors/mentor6.jpg",
    expertise: "Growth",
    bio: "Growth hacker who helped scale 5 startups to unicorn status. Data-driven approach to user acquisition.",
    availability: "Limited",
    location: "Seattle, WA",
    experience: "9 years",
  },
  {
    id: 7,
    name: "Olivia Thompson",
    image: "/mentors/mentor7.jpg",
    expertise: "Legal",
    bio: "Startup attorney specializing in fundraising, IP protection, and regulatory compliance.",
    availability: "Available",
    location: "Boston, MA",
    experience: "11 years",
  },
  {
    id: 8,
    name: "Raj Mehta",
    image: "/mentors/mentor8.jpg",
    expertise: "Operations",
    bio: "COO who scaled operations from 10 to 1000 employees. Expert in process optimization and team building.",
    availability: "Not Taking Requests",
    location: "Denver, CO",
    experience: "16 years",
  },
  {
    id: 9,
    name: "Sophia Lee",
    image: "/mentors/mentor9.jpg",
    expertise: "Fundraising",
    bio: "Helped startups raise over $200M in combined funding. Specializes in pitch deck creation and investor relations.",
    availability: "Available",
    location: "Los Angeles, CA",
    experience: "8 years",
  },
  {
    id: 10,
    name: "Marcus Johnson",
    image: "/mentors/mentor10.jpg",
    expertise: "AI/ML",
    bio: "PhD in Machine Learning. Built AI products at Google and two AI startups (one acquired).",
    availability: "Limited",
    location: "San Jose, CA",
    experience: "13 years",
  },
  {
    id: 11,
    name: "Aisha Williams",
    image: "/mentors/mentor11.jpg",
    expertise: "Customer Success",
    bio: "Reduced churn by 40% at SaaS companies. Expert in customer journey mapping and retention strategies.",
    availability: "Available",
    location: "Atlanta, GA",
    experience: "10 years",
  },
  {
    id: 12,
    name: "Thomas Schmidt",
    image: "/mentors/mentor12.jpg",
    expertise: "Hardware",
    bio: "Hardware engineer who launched 3 successful Kickstarter campaigns. Expert in prototyping and manufacturing.",
    availability: "Not Taking Requests",
    location: "Portland, OR",
    experience: "15 years",
  },
  {
    id: 13,
    name: "Zoe Martinez",
    image: "/mentors/mentor13.jpg",
    expertise: "Content Strategy",
    bio: "Content strategist who built audiences of 1M+ followers. Specializes in storytelling and brand voice.",
    availability: "Available",
    location: "Miami, FL",
    experience: "7 years",
  },
  {
    id: 14,
    name: "Alex Nguyen",
    image: "/mentors/mentor14.jpg",
    expertise: "Data Science",
    bio: "Data scientist who helped companies make data-driven decisions. Expert in analytics and visualization.",
    availability: "Limited",
    location: "Washington, DC",
    experience: "9 years",
  },
  {
    id: 15,
    name: "Natalie Wong",
    image: "/mentors/mentor15.jpg",
    expertise: "HR & Culture",
    bio: "Built HR functions from scratch at multiple startups. Specializes in culture development and talent acquisition.",
    availability: "Available",
    location: "Nashville, TN",
    experience: "12 years",
  },
  {
    id: 16,
    name: "Carlos Diaz",
    image: "/mentors/mentor16.jpg",
    expertise: "International Expansion",
    bio: "Led market entry into 20+ countries. Expert in localization and international business development.",
    availability: "Not Taking Requests",
    location: "Dallas, TX",
    experience: "14 years",
  },
  {
    id: 17,
    name: "Emma Clark",
    image: "/mentors/mentor17.jpg",
    expertise: "Social Impact",
    bio: "Founded two social enterprises. Specializes in sustainable business models and impact measurement.",
    availability: "Available",
    location: "Minneapolis, MN",
    experience: "11 years",
  },
  {
    id: 18,
    name: "Jason Park",
    image: "/mentors/mentor18.jpg",
    expertise: "Blockchain",
    bio: "Blockchain developer who launched several successful DeFi projects. Expert in smart contracts and Web3.",
    availability: "Limited",
    location: "San Diego, CA",
    experience: "8 years",
  },
  {
    id: 19,
    name: "Leila Abadi",
    image: "/mentors/mentor19.jpg",
    expertise: "UX Research",
    bio: "UX researcher who conducted 500+ user interviews. Specializes in user-centered design and usability testing.",
    availability: "Available",
    location: "Philadelphia, PA",
    experience: "10 years",
  },
  {
    id: 20,
    name: "Ryan O'Connor",
    image: "/mentors/mentor20.jpg",
    expertise: "E-commerce",
    bio: "Built and sold two e-commerce businesses. Expert in DTC strategy, logistics, and conversion optimization.",
    availability: "Not Taking Requests",
    location: "Phoenix, AZ",
    experience: "13 years",
  },
]

export default function Connect() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bookmarkedMentors, setBookmarkedMentors] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const controls = useAnimation()
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-300, 0, 300], [-15, 0, 15])
  const cardOpacity = useTransform(x, [-300, 0, 300], [0.8, 1, 0.8])
  const cardScale = useTransform(x, [-300, 0, 300], [0.9, 1, 0.9])
  const dragConstraintsRef = useRef(null)

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSwipe = useCallback((dir: string) => {
    if (isAnimating) return

    setIsAnimating(true)

    if (dir === "right" && !bookmarkedMentors.includes(mentors[currentIndex].id)) {
      setBookmarkedMentors((prev) => [...prev, mentors[currentIndex].id])
    }

    const newIndex = dir === "left" ? 
      (currentIndex + 1) % mentors.length : 
      (currentIndex - 1 + mentors.length) % mentors.length
    
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsAnimating(false)
    }, 300)
  }, [currentIndex, isAnimating, bookmarkedMentors])

  const handlePrevious = useCallback(() => {
    handleSwipe("right")
  }, [handleSwipe])

  const handleNext = useCallback(() => {
    handleSwipe("left")
  }, [handleSwipe])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return
      if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, isAnimating, handlePrevious, handleNext])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isAnimating) return

    if (info.offset.x > 100) {
      // Swiped right
      handleSwipe("right")
    } else if (info.offset.x < -100) {
      // Swiped left
      handleSwipe("left")
    } else {
      // Reset position
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
      })
    }
  }

  const toggleBookmark = (id: number) => {
    if (bookmarkedMentors.includes(id)) {
      setBookmarkedMentors(bookmarkedMentors.filter((mentorId) => mentorId !== id))
    } else {
      setBookmarkedMentors([...bookmarkedMentors, id])
    }
  }

  const currentMentor = mentors[currentIndex]
  const isBookmarked = bookmarkedMentors.includes(currentMentor.id)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Your{" "}
                <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent">
                  Mentor
                </span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Swipe through our curated list of experienced mentors and connect with the perfect match for your
                startup journey.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              {/* Mentor Card */}
              <div className="relative w-full max-w-md h-[600px] mx-auto mb-8" ref={dragConstraintsRef}>
                <motion.div
                  className="absolute w-full h-full"
                  drag={isMobile ? "x" : false}
                  dragConstraints={dragConstraintsRef}
                  onDragEnd={handleDragEnd}
                  animate={controls}
                  style={{
                    x,
                    rotate,
                    opacity: cardOpacity,
                    scale: cardScale,
                  }}
                  whileTap={{ cursor: "grabbing" }}
                  whileHover={{ cursor: "grab" }}
                >
                  <div className="w-full h-full bg-card rounded-xl overflow-hidden shadow-xl border border-border flex flex-col">
                    <div className="relative h-1/2 bg-muted">
                      <Image
                        src={currentMentor.image || "/mentors/placeholder.jpg"}
                        alt={currentMentor.name}
                        className="w-full h-full object-cover"
                        width={400}
                        height={300}
                      />
                      <div className="absolute top-4 right-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
                          onClick={() => toggleBookmark(currentMentor.id)}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="h-5 w-5 text-[#FF6B00]" />
                          ) : (
                            <Bookmark className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge
                          className={`
                            ${
                              currentMentor.availability === "Available"
                                ? "bg-green-500"
                                : currentMentor.availability === "Limited"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            } 
                            text-white
                          `}
                        >
                          {currentMentor.availability}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-2xl font-bold mb-1">{currentMentor.name}</h2>
                      <div className="flex items-center mb-4">
                        <Badge variant="outline" className="mr-2 bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20">
                          {currentMentor.expertise}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {currentMentor.experience}
                        </div>
                      </div>
                      <div className="flex items-center mb-4 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {currentMentor.location}
                      </div>
                      <p className="text-card-foreground flex-grow">{currentMentor.bio}</p>
                      <div className="mt-6 flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {currentIndex + 1} of {mentors.length}
                        </span>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={handlePrevious}
                            className="rounded-full"
                            disabled={isAnimating}
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={handleNext}
                            className="rounded-full"
                            disabled={isAnimating}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Swipe Buttons (for desktop) */}
              <div className="flex justify-center space-x-4 mt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => handleSwipe("left")}
                  disabled={isAnimating}
                >
                  <X className="h-5 w-5 mr-2" />
                  Skip
                </Button>
                <Button
                  size="lg"
                  className="rounded-full bg-[#FF6B00] hover:bg-[#E05A00] text-white"
                  onClick={() => handleSwipe("right")}
                  disabled={isAnimating}
                >
                  <BookmarkCheck className="h-5 w-5 mr-2" />
                  Connect
                </Button>
              </div>

              {/* Instructions */}
              <div className="mt-8 text-center text-sm text-muted-foreground">
                <p className="md:hidden">Swipe left to skip, right to connect</p>
                <p className="hidden md:block">Use the buttons to navigate or keyboard arrows (← →)</p>
              </div>

              {/* Bookmarked Mentors */}
              {bookmarkedMentors.length > 0 && (
                <div className="mt-12 w-full">
                  <h3 className="text-xl font-bold mb-4 text-center">Your Bookmarked Mentors</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {bookmarkedMentors.map((id) => {
                      const mentor = mentors.find((m) => m.id === id)
                      if (!mentor) return null

                      return (
                        <div
                          key={mentor.id}
                          className="bg-card rounded-lg shadow p-4 flex items-center space-x-3 border border-border"
                        >
                          <Image
                            src={mentor.image || "/mentors/placeholder.jpg"}
                            alt={mentor.name}
                            className="w-12 h-12 rounded-full object-cover"
                            width={48}
                            height={48}
                          />
                          <div>
                            <h4 className="font-medium">{mentor.name}</h4>
                            <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto"
                            onClick={() => toggleBookmark(mentor.id)}
                          >
                            <BookmarkCheck className="h-4 w-4 text-[#FF6B00]" />
                          </Button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

