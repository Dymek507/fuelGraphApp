import { DayData } from "@/types/global";

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
    totalFuel += subArray[i].fueled;
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

const getChartData = (data: DayData[]) => {
  if (data === undefined) return [];
  const dividedArrays = arrayDivider(data);
  const completeData = arrayWithAvg(dividedArrays);
  return completeData;
};

export default getChartData;
