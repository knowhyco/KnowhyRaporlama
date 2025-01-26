"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type Chatbot = {
  id: string
  name: string
  apiHost: string
  chatflowId: string
}

type ChatbotContextType = {
  chatbots: Chatbot[]
  selectedChatbot: Chatbot | null
  setSelectedChatbot: (chatbot: Chatbot) => void
  addChatbot: (chatbot: Omit<Chatbot, "id">) => void
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext)
  if (context === undefined) {
    throw new Error("useChatbotContext must be used within a ChatbotProvider")
  }
  return context
}

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chatbots, setChatbots] = useState<Chatbot[]>([])
  const [selectedChatbot, setSelectedChatbot] = useState<Chatbot | null>(null)

  useEffect(() => {
    // Bu kısım gerçek bir API çağrısı ile değiştirilmeli
    const fetchChatbots = async () => {
      const mockChatbots = [{ id: "1", name: "Örnek Chatbot", apiHost: "https://api.example.com", chatflowId: "flow1" }]
      setChatbots(mockChatbots)
      setSelectedChatbot(mockChatbots[0])
    }
    fetchChatbots()
  }, [])

  const addChatbot = (newChatbot: Omit<Chatbot, "id">) => {
    const chatbotWithId = { ...newChatbot, id: Date.now().toString() }
    setChatbots((prev) => [...prev, chatbotWithId])
    setSelectedChatbot(chatbotWithId)
  }

  return (
    <ChatbotContext.Provider value={{ chatbots, selectedChatbot, setSelectedChatbot, addChatbot }}>
      {children}
    </ChatbotContext.Provider>
  )
}

