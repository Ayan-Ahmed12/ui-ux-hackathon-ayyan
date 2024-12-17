'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpDown } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function RentalForm() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative">
        {/* Mobile Layout (Stack) */}
        <div className="block space-y-4 md:hidden">
          <Card className="bg-white p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-base font-medium">Pick - Up</span>
              </div>
              <div className="grid gap-4">
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semarang">Semarang</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select your date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20july">20 July 2022</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select your time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="07">07:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Swap Button Mobile */}
          <div className="flex justify-center">
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
            >
              <ArrowUpDown className="h-6 w-6" />
            </Button>
          </div>

          <Card className="bg-white p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-base font-medium">Drop - Off</span>
              </div>
              <div className="grid gap-4">
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semarang">Semarang</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select your date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="21july">21 July 2022</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                    <SelectValue placeholder="Select your time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">01:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop/Tablet Layout (Side by Side) */}
        <div className="hidden md:block">
          <Card className="bg-white p-4">
            <div className="grid grid-cols-[1fr,auto,1fr] gap-6">
              {/* Pick Up */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-base font-medium">Pick - Up</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semarang">Semarang</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20july">20 July 2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="07">07:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Swap Button Desktop */}
              <div className="flex items-center justify-center">
                <Button 
                  size="icon" 
                  className="h-12 w-12 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
                >
                  <ArrowUpDown className="h-6 w-6" />
                </Button>
              </div>

              {/* Drop Off */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-base font-medium">Drop - Off</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semarang">Semarang</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="21july">21 July 2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-12 border-gray-200 bg-gray-50">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

