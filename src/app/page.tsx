import images from "next/image"
import { HeroSection } from "@/app/components/hero-section"
import { RentalForm } from "@/app/components/rental-form"
import { CarCard } from "@/app/components/car-card"
import { Button } from "@/components/ui/button"

const featuredCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car1.png",
    price: 99,
    specs: {
      fuel: 90,
      manual: "manual",
      people: 2,
    }
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/images/car2.png",
    price: 80,
    specs: {
      fuel: 80,
      manual: "manual",
      people: 2,
    }
  },
  { 
    name: "Rolls-Royce",
    type: "Sedan",
    image: "/images/car3.png",
    price: 96,
    specs: {
      fuel: 70,
      manual: "manual",
      people: 4,
    }
  },
  {
    name: "All New Rush",
    type: "Sport",
    image: "/images/car2.png",
    price: 80,
    specs: {      
      fuel: 80,
      manual: "manual",
      people: 2,
    }
  },
  {
    name: "All New Rush",
    type: "SUV",
    image: "/images/car5.png",
    price: 99,
    specs: {      
      fuel: 72,
      manual: "manual",
      people: 6,
    }
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car8.png",
    price: 80,
    specs: {
      fuel: 80,
      manual: "manual",
      people: 6,
    }
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/images/car5.png",
    price: 74,
    specs: {
      fuel: 90,
      manual: "manual",
      people: 6,
    }
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car8.png",
    price: 72,
    specs: {
      fuel: 80,
      manual: "manual",      
      people: 6,
    }
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car1.png",
    price: 99,
    specs: {
      fuel: 90,
      manual: "manual",
      people: 2,
    }
  },
  {
    name: "Nissan GT-R",
    type: "Sport",
    image: "/images/car2.png",
    price: 80,
    specs: {
      fuel: 80,
      manual: "manual",
      people: 2,
    }
  },
  { 
    name: "Rolls-Royce",
    type: "Sedan",
    image: "/images/car3.png",
    price: 96,
    specs: {
      fuel: 70,
      manual: "manual",
      people: 4,
    }
  },
  {
    name: "All New Rush",
    type: "Sport",
    image: "/images/car2.png",
    price: 80,
    specs: {      
      fuel: 80,
      manual: "manual",
      people: 2,
    }
  },
  {
    name: "All New Rush",
    type: "SUV",
    image: "/images/car5.png",
    price: 99,
    specs: {      
      fuel: 72,
      manual: "manual",
      people: 6,
    }
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car8.png",
    price: 80,
    specs: {
      fuel: 80,
      manual: "manual",
      people: 6,
    }
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/images/car5.png",
    price: 74,
    specs: {
      fuel: 90,
      manual: "manual",
      people: 6,
    }
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/images/car8.png",
    price: 72,
    specs: {
      fuel: 80,
      manual: "manual",      
      people: 6,
    }
  },
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 pb-8 pt-6">
        <HeroSection />
        <div className="my-8  top-4 z-10">
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

