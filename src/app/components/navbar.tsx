import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Heart, Bell, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 sm:gap-4">
        <Link 
          href="/" 
          className="text-xl font-bold text-primary sm:text-2xl"
        >
          MORENT
        </Link>
        
        <div className="relative ml-auto flex-1 sm:ml-4 sm:max-w-sm lg:max-w-lg">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input 
            className="pl-8 sm:w-full" 
            placeholder="Search something here"
            type="search" 
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:inline-flex"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:inline-flex"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:inline-flex"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
