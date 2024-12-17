'use client'

import Image from "next/image"
import { Heart } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  price: number;
  specs: {
    manual: boolean;
    people: number;
    kml: number;
  };
}

export const CarCard: React.FC<CarCardProps> = ({ name, type, image, price, specs }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0 relative">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-2 top-2 z-10 rounded-full bg-white p-1.5 transition-all hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </button>
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-all group-hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">${price}.00</p>
            <p className="text-sm text-gray-500">/day</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-2">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              {specs.manual ? "Manual" : "Auto"}
            </div>
            <div className="flex items-center gap-1">
              {specs.people} People
            </div>
            <div className="flex items-center gap-1">
              {specs.kml} km/L
            </div>
          </div>
        </div>
        <Button className="w-full">Rent Now</Button>
      </CardFooter>
    </Card>
  )
}
