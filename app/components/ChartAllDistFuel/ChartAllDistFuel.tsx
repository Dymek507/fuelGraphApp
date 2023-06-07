"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import getChartData from './getChartData';
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { useAppSelector } from '@/app/store/features/hooks';
import { AllVehiclesData, VehicleObj } from '@/types/global';

type ChartAllDistFuelProps = {
  handleOpen: () => void
}

export function ChartAllDistFuel({ handleOpen }: ChartAllDistFuelProps) {

  const plates = useAppSelector((state) => state.vehicle.plates);

  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData)

  return (
    <div className='w-[500px] h-[400px] relative'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalDistance" fill="#8884d8" />
          <Bar dataKey="totalTraveled" fill="red" />
          <Bar dataKey="totalFuelUsed" fill="#82ca9d" />
          <Bar dataKey="totalFueled" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <FullscreenIcon className='absolute right-5 top-5 hover:bg-slate-500' onClick={handleOpen} />
    </div>
  )
}




