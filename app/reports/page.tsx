import Layout from "../components/layout"
import ChatVolumeChart from "../components/chat-volume-chart"

export default function Reports() {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-6">Raporlar</h1>
      <ChatVolumeChart />
    </Layout>
  )
}

