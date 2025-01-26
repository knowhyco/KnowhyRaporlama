"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useChatbotContext } from "../contexts/ChatbotContext"
import { fetchChatbotData } from "../utils/api"

export default function ToolUsageChart() {
  const { selectedChatbot } = useChatbotContext()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (selectedChatbot) {
        const chatbotData = await fetchChatbotData(selectedChatbot)
        setData(chatbotData.toolUsage)
      }
    }
    fetchData()
  }, [selectedChatbot])

  return (
    <Card className="w-full h-96">
      <CardHeader>
        <CardTitle>Tool Kullanım Sayıları</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

