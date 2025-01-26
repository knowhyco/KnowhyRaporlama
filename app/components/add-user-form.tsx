"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddUserForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const { register } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (register(username, password)) {
      setMessage("Kullanıcı başarıyla eklendi")
      setUsername("")
      setPassword("")
    } else {
      setMessage("Bu kullanıcı adı zaten kullanılıyor")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yeni Kullanıcı Ekle</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-username">Kullanıcı Adı</Label>
            <Input id="new-username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">Şifre</Label>
            <Input
              id="new-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {message && <p className={message.includes("başarıyla") ? "text-green-500" : "text-red-500"}>{message}</p>}
          <Button type="submit">Kullanıcı Ekle</Button>
        </form>
      </CardContent>
    </Card>
  )
}

