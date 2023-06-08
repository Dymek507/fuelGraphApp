"use client"
import React, { PureComponent } from 'react';
import { LineChart as LineC, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { VehicleObj } from '@/types/global';
import { formatArrayDate } from '@/app/utils/formatArrayDate';

type ChartProps = {
  data: any[],
  options: { dataKey: string, fill: string }[],
  dataKey: string,
  mini?: boolean
}

export function LineChart({ data, options, dataKey, mini = false }: ChartProps) {
  const chartData = formatArrayDate(data)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineC
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
          return <Line key={index} dataKey={option.dataKey} fill={option.fill} />
        })
        }
      </LineC>
    </ResponsiveContainer>
  );
}







