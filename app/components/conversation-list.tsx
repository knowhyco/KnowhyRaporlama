"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useChatbotContext } from "../contexts/ChatbotContext"
import { fetchChatbotData } from "../utils/api"
import ConversationDetails from "./conversation-details"

export default function ConversationList() {
  const [conversations, setConversations] = useState([])
  const { selectedChatbot } = useChatbotContext()

  useEffect(() => {
    const fetchData = async () => {
      if (selectedChatbot) {
        const chatbotData = await fetchChatbotData(selectedChatbot)
        setConversations(chatbotData.conversations)
      }
    }
    fetchData()
  }, [selectedChatbot])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Son Konuşmalar</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Kullanıcı</TableHead>
              <TableHead>Tarih</TableHead>
              <TableHead>Mesaj Sayısı</TableHead>
              <TableHead>İşlemler</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversations.map((conv: any) => (
              <TableRow key={conv.id}>
                <TableCell>{conv.id}</TableCell>
                <TableCell>{conv.user}</TableCell>
                <TableCell>{conv.date}</TableCell>
                <TableCell>{conv.messages}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Detaylar
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <ConversationDetails conversationId={conv.id} />
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

