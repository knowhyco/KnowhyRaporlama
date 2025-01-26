"use client"

import { useChatbotContext } from "../contexts/ChatbotContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import AddChatbotForm from "./add-chatbot-form"

export default function ChatbotManagement() {
  const { chatbots, setSelectedChatbot } = useChatbotContext()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Chatbot Yönetimi</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>İsim</TableHead>
                <TableHead>API Host</TableHead>
                <TableHead>Chatflow ID</TableHead>
                <TableHead>İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chatbots.map((bot) => (
                <TableRow key={bot.id}>
                  <TableCell>{bot.id}</TableCell>
                  <TableCell>{bot.name}</TableCell>
                  <TableCell>{bot.apiHost}</TableCell>
                  <TableCell>{bot.chatflowId}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => setSelectedChatbot(bot)}>
                      Seç
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <AddChatbotForm />
    </div>
  )
}

