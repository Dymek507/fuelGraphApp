'use client'
import { useAppSelector } from '@/app/store/features/hooks'
import React from 'react'
import ALL_VEHICLES_DATA from '@/data/fuel-data.json';
import { AllVehiclesData } from '@/types/global';

type DriversObj = {
  [key: string]: number
}

const TopCards = () => {
  const plates = useAppSelector(state => state.vehicle.plates)
  const allVehiclesData = ALL_VEHICLES_DATA as AllVehiclesData
  const vehicleArray = allVehiclesData[plates]
  const driversObj: DriversObj = {}
  const drivers = vehicleArray.map((item) => {
    return item.driver
  })
  const uniq = [...new Set(drivers)]
  drivers.forEach(item => {
    if (item && uniq.includes(item)) {
      if (driversObj[item]) {
        driversObj[item]++;
      } else {
        driversObj[item] = 1;
      }
    }
  });

  const driversArray = Object.entries(driversObj).sort((a, b) => b[1] - a[1])

  //Calculate the total amount of fuel consumed and total amount km driven
  const totalFuel = Number(vehicleArray.reduce((acc, item) => {
    if (item.fueled) {
      return acc + item.fueled
    } else {
      return acc
    }
  }, 0).toFixed(0))
  //Find index of last full and first full tank
  const firstFullTankIndex = vehicleArray.findIndex(item => item.fueling === true)
  const lastFullTankIndex = vehicleArray.reverse().findIndex(item => item.fueling === true)

  const startMileage = vehicleArray[firstFullTankIndex].fuelingMileage || vehicleArray[firstFullTankIndex].mileage || 0

  const endMileage = vehicleArray[vehicleArray.length - lastFullTankIndex].fuelingMileage || vehicleArray[vehicleArray.length - lastFullTankIndex].mileage || 0

  console.log(startMileage, endMileage)
  const totalKm = endMileage - startMileage

  const averageFuel = (totalFuel / totalKm).toFixed(2)

  return (
    <div className='grid gap-4 p-4 lg:grid-cols-5'>
      <div className='flex justify-between w-full p-4 bg-white border rounded-lg lg:col-span-2 cols-span-1'>
        <div className='flex flex-col w-full pb-4'>
          {driversArray.map((item, index) => (
            <p key={index} className='text-gray-600 first:text-2xl first:font-bold'>{item[0] + " : " + item[1]}</p>
          )
          )}
        </div>
      </div>
      <div className='flex justify-between w-full p-4 bg-white border rounded-lg lg:col-span-2 cols-span-1'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>{averageFuel}<span className='ml-2 text-sm'>l/100km</span></p>
          <p className='text-2xl font-bold'>{totalFuel}<span className='ml-2 text-sm'>litry</span></p>
          <p className='text-2xl font-bold'>{totalKm}<span className='ml-2 text-sm'>km</span></p>
        </div>
      </div>
    </div >
  )
}

export default TopCards 