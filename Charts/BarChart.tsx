"use client"
import { formatArrayDate } from '@/app/utils/formatArrayDate';
import { VehicleObj } from '@/types/global';
import React, { PureComponent } from 'react';
import { BarChart as BarC, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ChartProps = {
  data: any[],
  options: { dataKey: string, fill: string }[],
  dataKey: string,
  mini?: boolean
}


export function BarChart({ data, options, dataKey, mini = false }: ChartProps) {
  const chartData = formatArrayDate(data)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarC
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
        <XAxis dataKey={dataKey} />
        {!mini && <>
          <YAxis />
          <Tooltip />
          <Legend />
        </>}
        {options.map((option, index) => {
          return <Bar key={index} dataKey={option.dataKey} fill={option.fill} />
        })
        }
      </BarC>
    </ResponsiveContainer>
  )
}





