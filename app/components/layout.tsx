import type React from "react"
import Sidebar from "./sidebar"
import ChatbotSelector from "./chatbot-selector"
import { useAuth } from "../contexts/AuthContext"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push("/login")
    return null
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Knowhy Dashboard</h1>
            <div className="flex items-center space-x-4">
              <ChatbotSelector />
              <span>{user.username}</span>
              <Button variant="outline" onClick={() => logout()}>
                Çıkış Yap
              </Button>
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  )
}

