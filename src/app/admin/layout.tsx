import Link from "next/link"
// import { Button } from "@/components/ui/button"
import { LayoutDashboard, Car, BarChart2, RefreshCcw, Inbox, Calendar, Settings, HelpCircle, Moon, LogOut } from 'lucide-react'

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const mainMenu: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    label: "Dashboard",
    href: "/admin",
    isActive: true
  },
  {
    icon: <Car className="h-5 w-5" />,
    label: "Car Rent",
    href: "/admin/car-rent"
  },
  {
    icon: <BarChart2 className="h-5 w-5" />,
    label: "Insight",
    href: "/admin/insight"
  },
  {
    icon: <RefreshCcw className="h-5 w-5" />,
    label: "Reimburse",
    href: "/admin/reimburse"
  },
  {
    icon: <Inbox className="h-5 w-5" />,
    label: "Inbox",
    href: "/admin/inbox"
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Calendar",
    href: "/admin/calendar"
  }
]

const preferences: SidebarItem[] = [
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Settings",
    href: "/admin/settings"
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    label: "Help & Center",
    href: "/admin/help"
  },
  {
    icon: <Moon className="h-5 w-5" />,
    label: "Dark Mode",
    href: "#"
  }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside className="w-[240px] bg-white px-3 py-6">
        <div className="flex flex-col h-full">
          <nav className="flex-1 space-y-8">
            <div>
              <h2 className="mb-3 px-3 text-xs font-medium text-gray-400">
                MAIN MENU
              </h2>
              <div className="space-y-2 ">
                {mainMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-[7px] px-3 py-2 text-sm font-medium transition-colors
                      ${item.isActive 
                        ? 'bg-[#3563E9] text-white' 
                        : 'text-gray-500 hover:bg-gray-100'
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-3 px-3 text-xs font-medium text-gray-400">
                PREFERENCES
              </h2>
              <div className="space-y-1">
                {preferences.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  )
}

