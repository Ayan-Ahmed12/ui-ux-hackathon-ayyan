'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

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
]

const data = [
  { name: 'SUV', value: 17439 },
  { name: 'Coupe', value: 16997 },
  { name: 'Hatchback', value: 12510 },
  { name: 'MPV', value: 14904 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function AdminDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Details Rental</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[2/1] bg-gray-100 rounded-lg mb-4">
              {/* Map placeholder */}
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Nissan GT-R"
                  width={200}
                  height={100}
                  className="rounded-lg"
                />
                <h3 className="mt-2 font-semibold">Nissan GT-R</h3>
                <p className="text-sm text-gray-500">Sport Car</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">Pick - Up</h4>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="location1">Location 1</SelectItem>
                        <SelectItem value="location2">Location 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date1">Date 1</SelectItem>
                        <SelectItem value="date2">Date 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="time1">Time 1</SelectItem>
                        <SelectItem value="time2">Time 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Drop - Off</h4>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="location1">Location 1</SelectItem>
                        <SelectItem value="location2">Location 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date1">Date 1</SelectItem>
                        <SelectItem value="date2">Date 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="time1">Time 1</SelectItem>
                        <SelectItem value="time2">Time 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Total Rental Price</h4>
                <p className="text-2xl font-bold">$80.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Car Rental</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[240px]">
                {/* <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer> */}
              </div>
              <div className="mt-4 space-y-2">
                {data.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span>{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transaction</CardTitle>
              <Select defaultValue="today">
                <SelectTrigger className="w-[120px]">
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
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
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
                    </div>
                    <p className="font-medium">${transaction.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

