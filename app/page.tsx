'use client'
import React from 'react'
import CustomModal from "@/components/Modal"
import { ChartAllAverage } from "./components/ChartAllAverage/ChartAllAverage"
import { ChartAllAvg } from "./components/ChartAllD/ChartAllAvg"
import { ChartAllDistFuel } from "./components/ChartAllDistFuel/ChartAllDistFuel"
import { CustomActiveShapePieChart } from "./components/CustomActiveShapePieChart"
import { PieChartWithNeedle } from "./components/PieChartWithNeedle"

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='grid h-[300px] grid-cols-1 gap-4 p-4 md:grid-cols-3'>
      <CustomModal open={open} onClose={handleClose}>
        <p>Some text</p>
      </CustomModal>
      {/* <PieChartWithNeedle />
      <CustomActiveShapePieChart /> */}
      <ChartAllDistFuel handleOpen={handleOpen} />
      <ChartAllAverage />
      <ChartAllAvg />
    </div>
  )
}
