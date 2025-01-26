import Layout from "./components/layout"
import RealTimeStats from "./components/real-time-stats"
import ChatVolumeChart from "./components/chat-volume-chart"
import ConversationList from "./components/conversation-list"
import ToolUsageChart from "./components/tool-usage-chart"

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="space-y-6">
        <RealTimeStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChatVolumeChart />
          <ToolUsageChart />
        </div>
        <ConversationList />
      </div>
    </Layout>
  )
}

