'use client'
import React from 'react'

// import { ChartAllAverage } from "./average/helpers/ChartAllAverage/ChartAllAverage"
import { ZoomCard } from '@/components/ZoomCard'
import ALL_DATA from '../data/fuel-data.json'
import { ChartOption, VehicleObj } from '@/types/global'
import { getArrayFromRange } from './utils/getArrayFromRange'
import { ZoomCharts } from '@/components/ZoomCharts'
import { MiniBarChart } from '@/Charts/MiniBarChart'
import { BarChart } from '@/Charts/BarChart'
import { useAppSelector } from './store/features/hooks'
import { LineChart } from '@/Charts/LineChart'
import { MiniLineChart } from '@/Charts/MiniLineChart'
import { formatDate } from './utils/formatDate'
import TopCards from '@/components/TopCards'

export default function Home() {
  const plates = useAppSelector(state => state.vehicle.plates)
  const dateRange = {
    startDate: "2023-01-30T00:00:00.000Z",
    endDate: "2023-03-30T00:00:00.000Z",
  };

  const rawData = getArrayFromRange(ALL_DATA[plates], dateRange)
  const chartData = rawData.map((item: VehicleObj) => {
    return {
      ...item,
      date: formatDate(item.date)
    }
  })

  const averageChartOptions: ChartOption[] = [
    { dataKey: 'avgExcel', fill: '#8884d8' },
  ]

  const items = [
    {
      id: '0', title: "Średnie zużycie paliwa",
      chart: <LineChart data={chartData} options={averageChartOptions} dataKey='date' />,
      miniChart: <MiniLineChart data={chartData} options={averageChartOptions} dataKey='date' />
    },
    {
      id: '1', title: "Średnie zużycie paliwa", chart: <ChartAllAverage />, miniChart: <MiniBarChart data={chartData} options={averageChartOptions} dataKey='date' />
    },

  ]


  return (
    <div className='wh-full'>
      {/* <TopCards /> */}
      <ZoomCard items={items} />
    </div>
  )
}
