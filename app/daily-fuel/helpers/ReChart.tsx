// 'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import getChartData from './getChartData';
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { useAppSelector } from '@/app/store/features/hooks';
import { AllVehiclesData } from '@/types/global';

export const ReChart = () => {

  const plates = useAppSelector((state) => state.vehicle.plates);
  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData[plates])

  return (
    // <ResponsiveContainer width="100%" height="100%">
    //   <LineChart
    //     width={500}
    //     height={300}
    //     data={chartData}
    //     margin={{
    //       top: 5,
    //       right: 30,
    //       left: 20,
    //       bottom: 5,
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="date" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Line type="monotone" dataKey="avg" stroke="#8884d8" activeDot={{ r: 8 }} />
    //     {/* <Line type="monotone" dataKey="avgBox" stroke="#82ca9d" /> */}
    //     <Line type="monotone" dataKey="avgBox3" stroke="red" />
    //     <Line type="monotone" dataKey="substraction" stroke="#blue" />
    //   </LineChart>
    // </ResponsiveContainer>
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
        <Area type="monotone" dataKey="avg" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="avgBox3" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="substraction" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

