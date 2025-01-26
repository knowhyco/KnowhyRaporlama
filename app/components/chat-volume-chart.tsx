"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useChatbotContext } from "../contexts/ChatbotContext"
import { fetchChatbotData } from "../utils/api"

export default function ChatVolumeChart() {
  const [data, setData] = useState([])
  const { selectedChatbot } = useChatbotContext()

  useEffect(() => {
    const fetchData = async () => {
      if (selectedChatbot) {
        const chatbotData = await fetchChatbotData(selectedChatbot)
        setData(chatbotData.chatVolume)
      }
    }
    fetchData()
  }, [selectedChatbot])

  return (
    <Card className="w-full h-96">
      <CardHeader>
        <CardTitle>Günlük Konuşma Hacmi</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="volume" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

