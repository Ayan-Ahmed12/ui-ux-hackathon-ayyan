'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"


const carTypes = [
  { name: 'Sport Car', value: 17439, color: '#0D3559' },
  { name: 'SUV', value: 9478, color: '#175CD3' },
  { name: 'Coupe', value: 18997, color: '#2E90FA' },
  { name: 'Hatchback', value: 12510, color: '#53B1FD' },
  { name: 'MPV', value: 14406, color: '#84CAFF' }
]

const recentTransactions = [
  {
    car: "Nissan GT-R",
    type: "Sport Car",
    image: "/placeholder.svg",
    price: 80.00,
  },
  {
    car: "Koenigsegg",
    type: "Sport Car",
    image: "/placeholder.svg",
    price: 99.00,
  },
  {
    car: "Rolls-Royce",
    type: "Sport Car",
    image: "/placeholder.svg",
    price: 96.00,
  },
  {
    car: "CR-V",
    type: "SUV",
    image: "/placeholder.svg",
    price: 80.00,
  }
]

export default function AdminDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Details Rental</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 aspect-[2/1] overflow-hidden rounded-lg bg-[#F6F7F9]">
            {/* Map placeholder */}
          </div>
          
          <div className="grid gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 overflow-hidden rounded-lg bg-[#3563E9] p-2">
                <Image
                  src="/images/Ads2.png"
                  alt="Nissan GT-R"
                  width={80}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Nissan GT-R</h3>
                <p className="text-sm text-gray-500">Sport Car</p>
              </div>
              <div className="ml-auto text-sm text-gray-500">#9761</div>
            </div>

            {/* <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3563E9]" />
                  <span className="text-sm font-medium">Pick - Up</span>
                </div>
                <div className="mt-4 space-y-4">
                  <Select defaultValue="semarang">
                    <SelectTrigger className="bg-[#F6F7F9] border-0">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semarang">Semarang</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="20july">
                    <SelectTrigger className="bg-[#F6F7F9] border-0">
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20july">20 July 2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="0700">
                    <SelectTrigger className="bg-[#F6F7F9] border-0">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0700">07:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3563E9]" />
                  <span className="text-sm font-medium">Drop - Off</span>
                </div>
                <div className="mt-4 space-y-4">
                  <Select defaultValue="semarang">
                    <SelectTrigger className="bg-[#F6F7F9] border-0">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semarang">Semarang</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="21july">
                    <SelectTrigger className="bg-[#F6F7F9] border-0">
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="21july">21 July 2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="0100">
                    <SelectTrigger className="bg-[#F6F7F9] border-0">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0100">01:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div> */}

            <div>
              <h4 className="text-sm font-medium">Total Rental Price</h4>
              <p className="mt-1 text-2xl font-bold">$80.00</p>
              <p className="text-xs text-gray-500">Overall price and includes rental discount</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
            <CardTitle className="text-lg font-semibold">Top 5 Car Rental</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-[240px]">

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">72,030</div>
                  <div className="text-sm text-gray-500">Rental Car</div>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {carTypes.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-lg font-semibold">Recent Transaction</CardTitle>
            <Select defaultValue="today">
              <SelectTrigger className="w-[120px] bg-[#F6F7F9] border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={transaction.image}
                    alt={transaction.car}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="font-medium">{transaction.car}</h4>
                    <p className="text-sm text-gray-500">{transaction.type}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-right font-medium">
                      ${transaction.price.toFixed(2)}
                    </p>
                    <p className="text-right text-sm text-gray-500">/day</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

