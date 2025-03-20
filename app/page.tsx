import { Navbar } from "../components/navbar"
import { Hero } from "../components/hero"
import { Features } from "../components/features"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
} 