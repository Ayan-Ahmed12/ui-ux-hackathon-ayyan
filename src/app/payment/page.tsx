'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield } from 'lucide-react'

export default function PaymentPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 lg:grid-cols-[1fr,400px]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Info</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Phone number" type="tel" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Address" />
                </div>
                <div>
                  <Label htmlFor="city">Town / City</Label>
                  <Input id="city" placeholder="Town or city" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rental Info</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <h4 className="font-medium mb-2">Pick - Up</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent><SelectItem value="location1">Location 1</SelectItem>
                        <SelectItem value="location2">Location 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date1">Date 1</SelectItem>
                        <SelectItem value="date2">Date 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label>Time</Label>
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="location1">Location 1</SelectItem>
                        <SelectItem value="location2">Location 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date1">Date 1</SelectItem>
                        <SelectItem value="date2">Date 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label>Time</Label>
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
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="credit-card" className="grid gap-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/visa.svg" alt="Visa" width={40} height={25} />
                    <Image src="/mastercard.svg" alt="Mastercard" width={40} height={25} />
                  </div>
                </div>
                <div className={`grid gap-4 rounded-lg border p-4`}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="Card number" />
                    </div>
                    <div>
                      <Label htmlFor="expiry">Expiration Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="cardholder">Card Holder</Label>
                      <Input id="cardholder" placeholder="Card holder name" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="CVC" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <Image src="/paypal.svg" alt="PayPal" width={80} height={20} />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="bitcoin" id="bitcoin" />
                    <Label htmlFor="bitcoin">Bitcoin</Label>
                  </div>
                  <Image src="/bitcoin.svg" alt="Bitcoin" width={80} height={20} />
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing" className="text-sm leading-none">
                  I agree with sending an Marketing and newsletter emails. No spam, promised!
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm leading-none">
                  I agree with our terms and conditions and privacy policy.
                </Label>
              </div>
              <Button size="lg" className="w-full">
                Rent Now
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4" />
                All your data are safe
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rental Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Nissan GT-R"
                  width={120}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">Nissan GT-R</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-4 w-4 fill-primary"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-500">(4.5)</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$0</span>
                </div>
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="font-semibold">Total Rental Price</span>
                  <span className="font-semibold">$80.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

