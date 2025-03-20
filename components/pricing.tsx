import { Check } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#E0FFF0]">
      <div className="container px-4 md:px-6">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          style={{ fontFamily: "Courier, monospace" }}
        >
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-black">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>For students getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$0</p>
              <p className="text-sm text-gray-700">per month</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> No annual fee
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> 1% cashback on all purchases
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Virtual card access
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-2 border-black">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-black">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For young professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$5</p>
              <p className="text-sm text-gray-700">per month</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> All Basic features
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> 2% cashback on all purchases
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Travel insurance
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Priority customer support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-2 border-black">Upgrade to Pro</Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-black">
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>For power users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$10</p>
              <p className="text-sm text-gray-700">per month</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> All Pro features
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> 3% cashback on all purchases
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Concierge service
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" /> Extended warranty on purchases
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-2 border-black">Go Premium</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

