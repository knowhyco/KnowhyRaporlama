import Link from "next/link"
import { Home, BarChart2, MessageSquare, PenToolIcon as Tool, Settings } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Raporlar", href: "/reports", icon: BarChart2 },
  { name: "Konuşmalar", href: "/conversations", icon: MessageSquare },
  { name: "Tool Analizi", href: "/tool-analysis", icon: Tool },
  { name: "Ayarlar", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">Knowhy Dashboard</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

