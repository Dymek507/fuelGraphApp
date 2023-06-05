"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import getChartData from './getChartData';
import { useAppSelector } from '@/app/store/features/hooks';
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import type { AllVehiclesData, VehicleObj } from '@/types/global';
import { ALL } from 'dns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Średnie spalanie',
    },
  },
};

// array of months in polish
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru']

const dateStringToDay = (date: string) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.getMonth()
  return `${day} ${months[month]}`
}

export function AverageChart() {

  const plates = useAppSelector((state) => state.vehicle.plates);
  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData[plates])

  const labels = chartData.map((e) => dateStringToDay(e.date));

  const data = {
    labels: labels,
    datasets: [
      {
        // fill: true,
        label: 'Średnie spalanie',
        data: labels.map((e, id) => chartData[id].avg),
        borderColor: 'rgb(73, 112, 235)',
        backgroundColor: 'rgba(73, 11, 235, 0.5)',
      },

    ],
  };

  return <Bar options={options} data={data} />;
}
