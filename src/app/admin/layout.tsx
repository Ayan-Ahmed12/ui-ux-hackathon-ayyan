import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart2, Calendar, Car, HelpCircle, Home, Moon, Settings } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 border-r bg-white">
        <nav className="flex flex-col gap-2 p-4">
          <div className="py-2">
            <h2 className="px-4 text-sm font-semibold">MAIN MENU</h2>
            <div className="mt-2 space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Car className="h-4 w-4" />
                Car Rent
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart2 className="h-4 w-4" />
                Insight
              </Button>
            </div>
          </div>
          <div className="py-2">
            <h2 className="px-4 text-sm font-semibold">PREFERENCES</h2>
            <div className="mt-2 space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Calendar
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <HelpCircle className="h-4 w-4" />
                Help & Center
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Moon className="h-4 w-4" />
                Dark Mode
              </Button>
            </div>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

