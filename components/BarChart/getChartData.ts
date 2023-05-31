import { DayData } from "@/types/global";
import React from "react";

//convert date string to date object
const dateStingToDate = (dateString: string) => {
  const [month, day, year] = dateString.split("/");
  return new Date(Number(year), Number(month), Number(day));
};

//Convert place string to place name
const placeConverter = (place: string) => {
  switch (place) {
    case "K":
      return "Krasnystaw";
    case "W":
      return "Wólka";
    default:
      return "Unknown";
  }
};

//Convert full string to boolean
const checkIfFull = (full: string) => {
  switch (full) {
    case "Full":
      return true;
    case "Tak":
      return true;
    case "Nie":
      return false;
    default:
      return false;
  }
};

//Convert data to proper format
const dataConverter = (rawData: any[]) => {
  return rawData.map((item) => {
    return {
      date: dateStingToDate(item.date),
      mileage: Number(item.mileage),
      place: placeConverter(item.place),
      fuel: Number(item.fuel),
      full: checkIfFull(item.full),
      driver: item.driver,
    };
  });
};

//Divide array into subarrays
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
  return dividedArrays;
};

const calculateAvg = (subArray: DayData[]) => {
  let totalFuel = 0;

  for (let i = 1; i < subArray.length; i++) {
    totalFuel += subArray[i].fuel;
  }

  const totalMileage =
    subArray[subArray.length - 1].mileage - subArray[0].mileage;
  const avgFuel = ((totalFuel * 100) / totalMileage).toFixed(4);

  return avgFuel;
};

//Return array of arrays with each day data and avg fuel consumption
const calculateAvgEach = (dividedArrays: DayData[][]) => {
  const dataPlusAvg = dividedArrays.map((subArray) => {
    return subArray.map((day) => {
      return {
        ...day,
        avg: calculateAvg(subArray),
      };
    });
  });
  return dataPlusAvg;
};

const arrayWithAvg = (arrayOfArrays: DayData[][]) => {
  const arrayOfArraysWithAvg = calculateAvgEach(arrayOfArrays);
  const flatArray = arrayOfArraysWithAvg.flat();
  const dataWithAvg = flatArray.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (day) => day.mileage === value.mileage && day.date === value.date
      )
  );
  return dataWithAvg;
};

const getChartData = (data: any[]) => {
  const convertedData = dataConverter(data);
  const dividedArrays = arrayDivider(convertedData);
  const completeData = arrayWithAvg(dividedArrays);
  return completeData;
};

export default getChartData;
