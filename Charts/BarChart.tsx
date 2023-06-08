"use client"
import { VehicleObj } from '@/types/global';
import React, { PureComponent } from 'react';
import { BarChart as BarC, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// array of months in polish
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru']

type LineChartProps = {
  data: VehicleObj[],
  options: { dataKey: string, fill: string }[],
  dataKey: string
}

export function BarChart({ data, options, dataKey }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarC
        width={500}
        height={300}
        data={data}
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
        {options.map((option, index) => {
          return <Bar key={index} dataKey={option.dataKey} fill={option.fill} />
        })
        }
      </BarC>
    </ResponsiveContainer>
  )
}





