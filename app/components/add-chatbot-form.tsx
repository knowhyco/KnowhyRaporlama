"use client"

import { useState } from "react"
import { useChatbotContext } from "../contexts/ChatbotContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddChatbotForm() {
  const { addChatbot } = useChatbotContext()
  const [name, setName] = useState("")
  const [apiHost, setApiHost] = useState("")
  const [chatflowId, setChatflowId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addChatbot({ name, apiHost, chatflowId })
    setName("")
    setApiHost("")
    setChatflowId("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yeni Chatbot Ekle</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Chatbot Adı</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="apiHost">API Host</Label>
            <Input id="apiHost" value={apiHost} onChange={(e) => setApiHost(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="chatflowId">Chatflow ID</Label>
            <Input id="chatflowId" value={chatflowId} onChange={(e) => setChatflowId(e.target.value)} required />
          </div>
          <Button type="submit">Ekle</Button>
        </form>
      </CardContent>
    </Card>
  )
}

