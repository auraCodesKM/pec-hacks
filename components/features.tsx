"use client"

import { motion } from "framer-motion"
import { Rocket, Users, DollarSign, Lightbulb, BarChart, Globe } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function Features() {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-[#FF6B00]" />,
      title: "Accelerated Growth",
      description: "Fast-track your startup's journey with our proven acceleration methods and resources.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#FF6B00]" />,
      title: "Mentor Network",
      description: "Connect with industry experts who've been there and done that to guide your path.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#FF6B00]" />,
      title: "Funding Access",
      description: "Get introduced to our network of investors looking for the next big innovation.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#FF6B00]" />,
      title: "Innovation Support",
      description: "Resources and tools to help you develop and refine your groundbreaking ideas.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#FF6B00]" />,
      title: "Growth Metrics",
      description: "Track and analyze your progress with our comprehensive analytics dashboard.",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FF6B00]" />,
      title: "Global Network",
      description: "Tap into a worldwide community of founders, investors, and industry leaders.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent">X-Ceed</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide the tools, resources, and connections you need to take your startup to the next level.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#FF6B00]/20">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#FF6B00]/10 mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

