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
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { useAppSelector } from '@/app/store/features/hooks';
import { AllVehiclesData, VehicleObj } from '@/types/global';

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
      text: 'Paliwo/Przejechane kilometry',
    },
  },
};

// array of months in polish
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru']


export function DistanceChart() {

  const plates = useAppSelector((state) => state.vehicle.plates);

  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData

  const chartData = getChartData(allVehiclesData[plates])

  const labels = chartData.map((e) => months[e.month]);

  const data = {
    labels: labels,
    datasets: [
      {
        // fill: true,
        label: 'Przejechane kilometry',
        data: labels.map((e, id) => chartData[id].totalDistance),
        borderColor: 'rgb(73, 112, 235)',
        backgroundColor: 'rgba(73, 11, 235, 0.5)',
      },
      {
        // fill: true,
        label: 'Paliwo zatankowane',
        data: labels.map((e, id) => chartData[id].totalFuelUsed),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className=' w-[90%]'>
      <Bar options={options} data={data} />;
    </div>
  )
}
