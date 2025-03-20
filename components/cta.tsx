import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function CTA() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-[#98FB98]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            style={{ fontFamily: "Courier, monospace" }}
          >
            Ready to Start Your Financial Journey?
          </h2>
          <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of Australians building their credit and earning rewards with SparkCard.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white text-gray-900 border-2 border-black"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" className="border-2 border-black">
                Get Started
              </Button>
            </form>
            <p className="text-xs text-gray-700">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

