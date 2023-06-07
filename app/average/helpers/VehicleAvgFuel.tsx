'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import getChartData from './getChartData';
import { useAppSelector } from '@/app/store/features/hooks';
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { AllVehiclesData } from '@/types/global';

export function VehicleAvgFuel() {

  const plates = useAppSelector((state) => state.vehicle.plates);
  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData[plates])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="avg" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
