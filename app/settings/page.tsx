import Layout from "../components/layout"
import ChatbotManagement from "../components/chatbot-management"
import { useAuth } from "../contexts/AuthContext"
import AddUserForm from "../components/add-user-form"

export default function Settings() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Ayarlar</h1>
      <div className="space-y-6">
        <ChatbotManagement />
        {useAuth().user?.role === "admin" && <AddUserForm />}
      </div>
    </Layout>
  )
}

