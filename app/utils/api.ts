import type { Chatbot } from "../contexts/ChatbotContext"

export const fetchChatbotData = async (chatbot: Chatbot) => {
  // Simüle edilmiş veri
  return {
    realTimeStats: {
      activeUsers: Math.floor(Math.random() * 100),
      activeConversations: Math.floor(Math.random() * 50),
      messagesPerMinute: Math.floor(Math.random() * 200),
    },
    chatVolume: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      volume: Math.floor(Math.random() * 1000),
    })).reverse(),
    conversations: Array.from({ length: 10 }, (_, i) => ({
      id: `conv-${i + 1}`,
      user: `user${i + 1}@example.com`,
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      messages: Math.floor(Math.random() * 20) + 1,
    })),
    toolUsage: ["lon_latBulma", "dogumharita", "falBakma", "haritaSorgulama", "havadurumuSorgulama"].map((tool) => ({
      name: tool,
      count: Math.floor(Math.random() * 100),
    })),
  }
}

export const fetchConversationDetails = async (chatbotId: string, conversationId: string) => {
  // Simüle edilmiş konuşma detayları
  return {
    id: conversationId,
    user: `user${Math.floor(Math.random() * 100)}@example.com`,
    date: new Date().toLocaleString(),
    messages: Array.from({ length: Math.floor(Math.random() * 10) + 3 }, (_, i) => ({
      id: `msg-${i}`,
      sender: i % 2 === 0 ? "user" : "bot",
      content: `Bu bir örnek mesaj içeriğidir. Mesaj ${i + 1}`,
      timestamp: new Date(Date.now() - (10 - i) * 60000).toLocaleString(),
    })),
    usedTools: ["lon_latBulma", "havadurumuSorgulama", "haritaSorgulama"].slice(0, Math.floor(Math.random() * 3) + 1),
  }
}

