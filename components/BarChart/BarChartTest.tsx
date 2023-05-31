"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import SAM_DATA from '../../data/samData.json';

import getChartData from './getChartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Average fuel consumption',
    },
  },
};

const chartData = getChartData(SAM_DATA)

// array of months in polish
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru']

const labels = chartData.map((e) => `${e.date.getDate()} ${months[e.date.getMonth()]}`);


export const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      label: 'Samochód 1',
      data: labels.map((e, id) => chartData[id].avg),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChartTest() {
  return <Line options={options} data={data} />;
}
