'use client'

import Image from "next/image"
import { Heart, Fuel, Settings2, Users } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  price: number;
  specs: {
    fuel: number;
    manual: string;
    people: number;
  };
}

export const CarCard: React.FC<CarCardProps> = ({ name, type, image, price, specs  }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
<Card className="group relative overflow-hidden bg-white p-4 transition-all hover:shadow-lg">
<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
  <div className="flex-1 space-y-4">
    {/* Header */}
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="rounded-full p-1 transition-all hover:bg-gray-100"
      >
        <Heart
          className={`h-5 w-5 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>
    </div>

    {/* Car Image */}
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Specs */}
    <div className="flex flex-wrap items-center gap-6 text-gray-500">
      <div className="flex items-center gap-2">
        <Fuel className="h-4 w-4" />
        <span className="text-sm">{specs.fuel} L</span>
      </div>
      <div className="flex items-center gap-2">
        <Settings2 className="h-4 w-4" />
        <span className="text-sm">{specs.manual}</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4" />
        <span className="text-sm">{specs.people} People</span>
      </div>
    </div>

    {/* Price and Button */}
    <div className="flex items-center justify-between gap-4">
      <div>
        <span className="text-lg font-bold">${price.toFixed(2)}</span>
        <span className="text-gray-500">/day</span>
      </div>
      <Button className="bg-blue-600 rounded-[5px] hover:bg-blue-700">
        Rent Now
      </Button>
    </div>
  </div>
</div>
</Card>
  )
}