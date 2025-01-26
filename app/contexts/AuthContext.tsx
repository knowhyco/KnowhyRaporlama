"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type User = {
  username: string
  role: "admin" | "user"
}

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
  register: (username: string, password: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  // Temporary user data (in a real app, this would be stored securely, not in the frontend)
  const users = [{ username: "admin", password: "password123", role: "admin" as const }]

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (username: string, password: string) => {
    const user = users.find((u) => u.username === username && u.password === password)
    if (user) {
      setUser({ username: user.username, role: user.role })
      localStorage.setItem("user", JSON.stringify({ username: user.username, role: user.role }))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const register = (username: string, password: string) => {
    if (users.some((u) => u.username === username)) {
      return false
    }
    users.push({ username, password, role: "user" })
    return true
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}

