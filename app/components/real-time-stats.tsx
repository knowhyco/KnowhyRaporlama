"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Zap } from "lucide-react"
import { useChatbotContext } from "../contexts/ChatbotContext"
import { fetchChatbotData } from "../utils/api"

export default function RealTimeStats() {
  const { selectedChatbot } = useChatbotContext()
  const [stats, setStats] = useState({
    activeUsers: 0,
    activeConversations: 0,
    messagesPerMinute: 0,
  })

  useEffect(() => {
    const updateStats = async () => {
      if (selectedChatbot) {
        const data = await fetchChatbotData(selectedChatbot)
        setStats(data.realTimeStats)
      }
    }

    updateStats()
    const interval = setInterval(updateStats, 5000) // Her 5 saniyede bir güncelle

    return () => clearInterval(interval)
  }, [selectedChatbot])

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Aktif Kullanıcılar</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeUsers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Aktif Konuşmalar</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeConversations}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Mesaj/Dakika</CardTitle>
          <Zap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.messagesPerMinute}</div>
        </CardContent>
      </Card>
    </div>
  )
}

