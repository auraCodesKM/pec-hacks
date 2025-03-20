import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent, CardHeader } from "./ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      avatar: "SL",
      testimonial: "SparkCard helped me build my credit score while I was still in uni. Brilliant!",
    },
    {
      name: "Tom K.",
      avatar: "TK",
      testimonial: "The cashback rewards are great, and I love how easy it is to track my spending.",
    },
    {
      name: "Emma R.",
      avatar: "ER",
      testimonial: "Finally, a card that doesn't make me feel like I'm being taken advantage of. Thanks, SparkCard!",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E0FFF0]">
      <div className="container px-4 md:px-6">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          style={{ fontFamily: "Courier, monospace" }}
        >
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-black">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                    <p className="text-sm text-gray-700">SparkCard User</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">&ldquo;{testimonial.testimonial}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

