"use client"
import React, { PureComponent } from 'react';
import { LineChart as LineC, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { VehicleObj } from '@/types/global';


// array of months in polish
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru']

type LineChartProps = {
  data: VehicleObj[],
  options: { dataKey: string, fill: string }[],
  dataKey: string
}

export function MiniLineChart({ data, options, dataKey }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineC
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
        <XAxis dataKey={dataKey} />
        <YAxis />
        {options.map((option, index) => {
          return <Line key={index} dataKey={option.dataKey} fill={option.fill} />
        })
        }
      </LineC>
    </ResponsiveContainer>
  );
}







