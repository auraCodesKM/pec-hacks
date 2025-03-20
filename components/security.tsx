import { CheckCircle } from "lucide-react"

export function Security() {
  const securityFeatures = [
    "Bank-level encryption",
    "Australian government guarantee for deposits",
    "24/7 fraud monitoring",
    "Instant card freeze via app",
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F0FFF4]">
      <div className="container px-4 md:px-6">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          style={{ fontFamily: "Courier, monospace" }}
        >
          Security & Trust
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 text-gray-700">
              At SparkCard, we take your security seriously. Our state-of-the-art systems ensure your money and data are
              always protected.
            </p>
            <ul className="space-y-2">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-[#98FB98] rounded-full flex items-center justify-center border-4 border-black">
              <span className="text-6xl">🔒</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

