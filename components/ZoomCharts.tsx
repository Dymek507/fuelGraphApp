'use client'
import { Grid } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import CustomModal from "./Modal"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { LineChart } from "../Charts/BarChart"
import { MiniLineChart } from "../Charts/MiniBarChart"
import { Line } from "react-chartjs-2"
import { ChartOption, VehicleObj } from "@/types/global"

interface Item {
  id: string
  title: string
  chart: {
    data: VehicleObj[],
    options: ChartOption,
    dataKey: string
  }
}

interface ZoomCardProps {
  items: Item[]
}

interface CardProps extends Item {
  onClick: () => void
}

const Card = ({ id, title, chart, onClick }: CardProps) => {
  return (
    <Grid item xs={4} className="flex-center">
      <motion.div layoutId={id} >
        <div className="h-64 card w-96 bg-slate-400 text-primary-content">
          <div className="flex-col card-body flex-center">
            <motion.h2>{title}</motion.h2>
            <div className="h-56 w-72">
              {/* <MiniLineChart data={chart.data} options={chart.options} dataKey={chart.dataKey}> */}
            </div>
          </div>
          <FullscreenIcon onClick={onClick} className='absolute right-5 top-5 hover:bg-slate-500' />
        </div>
      </motion.div>
    </Grid>

  )
}



export const ZoomCharts = ({ items }: ZoomCardProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <>
      <Grid container spacing={0} className="wh-full">
        {
          items.map(item => (
            <Card key={item.id} {...item} onClick={() => setSelectedId(item)} />
          ))
        }
      </Grid>
      <AnimatePresence>
        {
          selectedId && (
            <div className="fixed inset-0 w-screen h-screen overflow-hidden text-white backdrop-blur-md flex-center">
              <motion.div layoutId={selected.id} className="relative flex-col w-5/6 bg-zinc-300 h-5/6 rounded-2xl flex-center">
                <motion.h2>{items[0].title}</motion.h2>
                <motion.div className="w-5/6 h-5/6">
                  <LineChart data={items[0].chartData} options={items[0].chartOptions} dataKey={items[0].dataKey} />
                </motion.div>
                <FullscreenExitIcon onClick={() => setSelectedId(null)} className="absolute top-5 right-5 hover:bg-gray-500" />
              </motion.div>
            </div>
          )
        }
      </AnimatePresence >
    </>
  )
}