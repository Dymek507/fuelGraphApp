"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import getChartData from './getChartData';
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { useAppSelector } from '@/app/store/features/hooks';
import { AllVehiclesData, VehicleObj } from '@/types/global';


// array of months in polish
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru']

export function ChartAllAverage() {

  const plates = useAppSelector((state) => state.vehicle.plates);

  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData)

  return (
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
        {/*<Legend /> */}
        <Bar dataKey="totalFuelUsed" fill="#8884d8" />
        <Bar dataKey="totalFueled" fill="red" />
        <Bar dataKey="totalTraveled" fill="#82ca9d" />
        <Bar dataKey="totalMileage" fill="#82ca9d" />
        <Bar dataKey="avgFuelUsage" fill="#82ca9d" />
        <Bar dataKey="avgTotalFueled" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}





