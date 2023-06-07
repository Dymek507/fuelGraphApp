import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

import getChartData from './getChartData';
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { useAppSelector } from '@/app/store/features/hooks';
import { AllVehiclesData } from '@/types/global';

export function ChartAllAvg() {

  const plates = useAppSelector((state) => state.vehicle.plates);

  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <Line type="monotone" dataKey="avgFuelUsage" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="avgTotalFueled" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}





