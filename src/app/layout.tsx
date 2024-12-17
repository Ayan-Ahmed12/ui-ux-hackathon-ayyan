import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Heart, Bell, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MORENT - Car Rental',
  description: 'Rent your dream car with MORENT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <header className="border-b bg-white">
          <div className="container mx-auto flex h-20 items-center px-4 gap-4">
            <Link href="/" className="text-2xl font-bold text-[#3563E9]">
              MORENT
            </Link>
            <div className="relative ml-4 flex-1 max-w-sm">
              <Search className="absolute left-2 top-1/2 h-4 w-4  -translate-y-1/2 text-gray-500" />
              <Input className="rounded-full pl-8" placeholder="Search something here" />
            </div>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="container mx-auto grid gap-8 p-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-primary text-[#3563E9]">MORENT</h3>
              <p className="text-gray-500">Our vision is to provide convenience <br /> and help increase your sales business.</p>
            </div>

            <div className='grid lg:ml-28 md:grid-cols-3 gap-8 '>
            <div>
              <h4 className="mb-4 font-semibold ">About</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="#">How it works</Link></li>
                <li><Link href="#">Featured</Link></li>
                <li><Link href="#">Partnership</Link></li>
                <li><Link href="#">Business Relation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Community</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="#">Events</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Podcast</Link></li>
                <li><Link href="#">Invite a friend</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Socials</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="#">Discord</Link></li>
                <li><Link href="#">Instagram</Link></li>
                <li><Link href="#">Twitter</Link></li>
                <li><Link href="#">Facebook</Link></li>
              </ul>
            </div>
            </div>
          </div>
          <div className="border-t">
            <div className="container mx-auto flex justify-between p-4 text-sm text-gray-500">
              <p>©2022 MORENT. All rights reserved</p>
              <div className="flex gap-4">
                <Link href="#">Privacy & Policy</Link>
                <Link href="#">Terms & Condition</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

