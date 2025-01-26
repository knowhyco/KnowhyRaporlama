import Layout from "../components/layout"
import ConversationList from "../components/conversation-list"

export default function Conversations() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Konuşmalar</h1>
      <ConversationList />
    </Layout>
  )
}

