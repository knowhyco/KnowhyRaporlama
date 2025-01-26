"use client"

import { useChatbotContext } from "../contexts/ChatbotContext"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ChatbotSelector() {
  const { chatbots, selectedChatbot, setSelectedChatbot } = useChatbotContext()

  return (
    <Select
      value={selectedChatbot?.id}
      onValueChange={(value) => {
        const chatbot = chatbots.find((c) => c.id === value)
        if (chatbot) setSelectedChatbot(chatbot)
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Chatbot seçin" />
      </SelectTrigger>
      <SelectContent>
        {chatbots.map((chatbot) => (
          <SelectItem key={chatbot.id} value={chatbot.id}>
            {chatbot.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

