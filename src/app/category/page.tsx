import { CarCard } from "@/app/components/car-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Search } from 'lucide-react'

const cars = [
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
  // Add more cars...
]

export default function CategoryPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">MORENT</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input className="pl-8" placeholder="Search something here" />
            </div>
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto grid gap-8 p-4 md:grid-cols-[240px,1fr]">
        <aside className="space-y-6">
          <div>
            <h3 className="mb-4 font-semibold">Type</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Sport ({cars.length})
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> SUV ({cars.length})
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> MPV ({cars.length})
              </label>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Capacity</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 2 Person
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 4 Person
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 6 Person
              </label>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Price Range</h3>
            <Slider defaultValue={[50]} max={100} step={1} />
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>$0</span>
              <span>$100</span>
            </div>
          </div>
        </aside>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </main>

      <footer className="border-t">
        <div className="container mx-auto grid gap-8 p-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">MORENT</h3>
            <p className="text-gray-500">Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">About</h4>
            <ul className="space-y-2 text-gray-500">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Community</h4>
            <ul className="space-y-2 text-gray-500">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Socials</h4>
            <ul className="space-y-2 text-gray-500">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}


