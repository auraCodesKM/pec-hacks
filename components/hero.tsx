"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Accelerate Your Startup Growth with{" "}
                <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent">
                  X-Ceed
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The platform that connects innovative founders with the resources, mentorship, and funding they need to
                succeed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-[#FF6B00] hover:bg-[#E05A00] text-white">
                <Link href="#get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image 
                  src="/premium_photo-1684769161054-2fa9a998dcb6.jpeg" 
                  alt="Startup growth concept"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

