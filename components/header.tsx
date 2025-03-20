import Link from "next/link"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-[#98FB98] backdrop-blur supports-[backdrop-filter]:bg-[#98FB98]/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold" style={{ fontFamily: "Courier, monospace" }}>
            SparkCard
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
        <div className="ml-4">
          <Button asChild variant="outline" className="border-2 border-black">
            <Link href="#cta">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

