'use client'

import Image from "next/image"
import { Heart } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Fuel, Settings2, Users } from 'lucide-react'

interface CarCardProps {
  name: string
  category: string
  image: string
  specs: {
    fuel: string
    transmission: string
    capacity: number
  }
  price: number
}

export function CarCard({ name, category, image, specs, price }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="relative overflow-hidden p-5 transition-all hover:shadow-lg">
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute right-5 top-5"
      >
        <Heart
          className={`h-6 w-6 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>

        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4" />
            <span>{specs.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" />
            <span>{specs.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{specs.capacity} People</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Rent Now
          </Button>
        </div>
      </div>
    </Card>
  )
}
