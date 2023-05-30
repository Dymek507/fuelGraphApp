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
import { faker } from '@faker-js/faker'
import SAM_DATA from './../data/samData.json'
import { DayData } from '@/types/global';
import fs from 'fs'

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
      text: 'Chart.js Line Chart',
    },
  },
};



//convert date string to date object
const dateStingToDate = (dateString: string) => {
  const [month, day, year] = dateString.split('/')
  return new Date(Number(year), Number(month), Number(day))
}

//Convert place string to place name
const placeConverter = (place: string) => {
  switch (place) {
    case 'K':
      return 'Krasnystaw'
    case 'W':
      return 'Wólka'
    default:
      return 'Unknown'
  }
}

//Convert full string to boolean
const checkIfFull = (full: string) => {
  switch (full) {
    case 'Full':
      return true
    case 'Tak':
      return true
    case 'Nie':
      return false
    default:
      return false
  }
}

//Convert data to proper format
const dataConverter = (data: any[]) => {
  return data.map((item) => {
    return {
      date: dateStingToDate(item.date),
      mileage: Number(item.mileage),
      place: placeConverter(item.place),
      fuel: Number(item.fuel),
      full: checkIfFull(item.full),
      driver: item.driver,
    }
  })
}

const arrayDivider = (data: DayData[]): DayData[][] => {
  const dividedArrays = [];
  let currentArray: DayData[] = [];

  // Loop through the array and divive it into subarrays which starts and ends with full === true
  for (let i = 0; i < data.length; i++) {
    currentArray.push(data[i]);
    if (data[i].full === true) {
      dividedArrays.push(currentArray);
      currentArray = [data[i]];
    }
  }

  // Add the remaining objects if any
  if (currentArray.length > 0) {
    dividedArrays.push(currentArray);
  }
  return dividedArrays
}

const calculateAvg = (data: DayData[]) => {
  let totalFuel = 0

  for (let i = 1; i < data.length; i++) {
    totalFuel += data[i].fuel
  }

  const totalMileage = data[data.length - 1].mileage - data[0].mileage
  const avgFuel = ((totalFuel * 100) / totalMileage).toFixed(4)

  return avgFuel
}


//Return array of arrays with each day data and avg fuel consumption
const calculateAvgEach = (data: DayData[]) => {
  const dividedArrays = arrayDivider(data)

  const dataPlusAvg = dividedArrays.map(subArray => {
    return subArray.map(day => {
      return {
        ...day,
        avg: calculateAvg(subArray)
      }
    })
  })
  return dataPlusAvg
}

const arrayWithAvg = () => {
  const arrayOfArrays = calculateAvgEach(dataConverter(SAM_DATA))
  const flatArray = arrayOfArrays.flat()
  const newArray = flatArray.filter((value, index, self) =>
    index === self.findIndex((day) => (
      day.mileage === value.mileage && day.date === value.date
    ))
  )
  return newArray
}



const completeData = arrayWithAvg();

const labels = completeData.map((e) => e.date.toLocaleDateString());


export const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map((e, id) => Number(completeData[id].avg)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarChartTest() {
  return <Line options={options} data={data} />;
}
