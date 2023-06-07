'use client'
import { ChartAllAverage } from "./components/ChartAllAverage/ChartAllAverage"
import { ChartAllAvg } from "./components/ChartAllD/ChartAllAvg"
import { ChartAllDistFuel } from "./components/ChartAllDistFuel/ChartAllDistFuel"
import { CustomActiveShapePieChart } from "./components/CustomActiveShapePieChart"
import { PieChartWithNeedle } from "./components/PieChartWithNeedle"

export default function Home() {
  return (
    <div className='grid h-[300px] grid-cols-1 gap-4 p-4 md:grid-cols-3'>
      {/* <PieChartWithNeedle />
      <CustomActiveShapePieChart /> */}
      <ChartAllDistFuel />
      <ChartAllAverage />
      <ChartAllAvg />

    </div>
  )
}
