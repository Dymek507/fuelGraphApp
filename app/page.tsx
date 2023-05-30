import TopCards from '@/components/TopCards'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import RecentOrders from '@/components/RecentOrders'
import { BarChartTest } from '@/components/BarChartTest'

export default function Home() {
  return (
    <Sidebar>
      <main className="min-h-screen bg-gray-100">
        <Header />
        <TopCards />
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
          <BarChartTest />
          <RecentOrders />
        </div>
      </main>
    </Sidebar>
  )
}
