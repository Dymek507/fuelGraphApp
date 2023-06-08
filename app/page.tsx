'use client'
import React from 'react'
import CustomModal from "@/components/Modal"
import { ChartAllAverage } from "./components/ChartAllAverage/ChartAllAverage"
import { ChartAllAvg } from "./components/ChartAllD/ChartAllAvg"
import { ChartAllDistFuel } from "./components/ChartAllDistFuel/ChartAllDistFuel"
import { CustomActiveShapePieChart } from "./components/CustomActiveShapePieChart"
import { PieChartWithNeedle } from "./components/PieChartWithNeedle"
import { ZoomCard } from '@/components/ZoomCard'

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const items = [
    { id: '0', title: "Średnie zużycie paliwa", chart: <ChartAllAverage /> },
    { id: '1', title: "Średnie zużycie paliwa", chart: <ChartAllAvg /> },
  ]
  return (
    <div className='wh-full'>
      {/* <CustomModal open={open} onClose={handleClose}>
        <p>Some text</p>
      </CustomModal> */}
      {/* <PieChartWithNeedle />
      <CustomActiveShapePieChart /> */}
      {/* <ChartAllDistFuel handleOpen={handleOpen} />
      <ChartAllAverage />
      <ChartAllAvg /> */}
      <ZoomCard items={items} />
    </div>
  )
}
