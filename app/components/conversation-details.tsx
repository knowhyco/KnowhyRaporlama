"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { fetchConversationDetails } from "../utils/api"
import { useChatbotContext } from "../contexts/ChatbotContext"

type ConversationDetailsProps = {
  conversationId: string
}

export default function ConversationDetails({ conversationId }: ConversationDetailsProps) {
  const [details, setDetails] = useState<any>(null)
  const { selectedChatbot } = useChatbotContext()

  useEffect(() => {
    const fetchDetails = async () => {
      if (selectedChatbot) {
        const data = await fetchConversationDetails(selectedChatbot.id, conversationId)
        setDetails(data)
      }
    }
    fetchDetails()
  }, [selectedChatbot, conversationId])

  if (!details) {
    return <div>Yükleniyor...</div>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Konuşma Detayları</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p>
            <strong>Kullanıcı:</strong> {details.user}
          </p>
          <p>
            <strong>Tarih:</strong> {details.date}
          </p>
        </div>
        <div className="mb-4">
          <strong>Kullanılan Toollar:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {details.usedTools.map((tool: string) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          {details.messages.map((message: any) => (
            <div key={message.id} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

