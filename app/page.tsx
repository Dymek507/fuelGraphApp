import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <Sidebar>
      <main className="min-h-screen bg-gray-100">
        <Header />
      </main>
    </Sidebar>
  )
}
