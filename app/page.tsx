'use client'
import React from 'react'

// import { ChartAllAverage } from "./average/helpers/ChartAllAverage/ChartAllAverage"
import { ZoomCard } from '@/components/ZoomCard'
import ALL_DATA from '../data/fuel-data.json'
import { AllVehiclesData, ChartOption, VehicleObj } from '@/types/global'
import { useAppSelector } from './store/features/hooks'
import { getVehicleStats } from './utils/getVehicleStats'
import { iterateObject } from './utils/iterateObject'
import { formatDataToArray } from './utils/formatDataToArray'
import { getVArrayFullToFull } from './utils/getVArrayFullToFull'
import { sumTraveled } from './utils/getVehicleStats/monthlyReducers'
import { getAverageFuelUsage } from './utils/getAvgFuelUsage'
import { BarChart } from '@/Charts/BarChart'
import { formatObjToArray } from './utils/formatObjToArray'
import { ITEMS_DATA } from './home/data/items-data'

export default function Home() {
  const plates = useAppSelector(state => state.vehicle.plates)





  return (
    <div className='wh-full'>
      {/* <TopCards /> */}
      <ZoomCard items={ITEMS_DATA} />
    </div>
  )
}
