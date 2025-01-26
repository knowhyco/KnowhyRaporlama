import { AuthProvider } from "./contexts/AuthContext"
import { ChatbotProvider } from "./contexts/ChatbotContext"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ChatbotProvider>{children}</ChatbotProvider>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'