import { Navbar } from "@/app/components/navbar"
import { HeroSection } from "@/app/components/hero-section"
import { RentalForm } from "@/app/components/rental-form"
import { CarCard } from "@/app/components/car-card"
import { Button } from "@/components/ui/button"

const featuredCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/placeholder.svg",
    price: 99,
    specs: {
      manual: true,
      people: 2,
      kml: 8.5
    }
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/placeholder.svg",
    price: 80,
    specs: {
      manual: true,
      people: 2,
      kml: 9
    }
  },
  {
    name: "Rolls-Royce",
    type: "Sedan",
    image: "/placeholder.svg",
    price: 96,
    specs: {
      manual: false,
      people: 4,
      kml: 7
    }
  },
  {
    name: "All New Rush",
    type: "SUV",
    image: "/placeholder.svg",
    price: 72,
    specs: {
      manual: true,
      people: 6,
      kml: 10
    }
  },
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 pb-8 pt-6">
        <HeroSection />
        <div className="my-8 sticky top-4 z-10">
          <RentalForm />
        </div>
        <section className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Popular Cars</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredCars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

