import { DayData } from "@/types/global";
import jsonToObj from "@/utils/jsonToObj";

//Divide array into subarrays
const arrayDivider = (data: DayData[]): DayData[][] => {
  const dividedArrays = [];
  let currentArray: DayData[] = [];

  // Loop through the array and divive it into subarrays of months

  for (let i = 0; i < data.length; i++) {
    currentArray.push(data[i]);
    if (data[i].date.getMonth() !== data[i + 1]?.date.getMonth()) {
      dividedArrays.push(currentArray);
      currentArray = [];
    }
  }

  // Add the remaining objects if any
  if (currentArray.length > 0) {
    dividedArrays.push(currentArray);
  }
  return dividedArrays;
};

//Calculate total fuel consumption
const calculateTotal = (subArray: DayData[]) => {
  let totalFuel = 0;
  subArray.forEach((day) => {
    totalFuel += day.fueled;
  });
  return totalFuel;
};

//Calculate distance in month
const calculateDistance = (subArray: DayData[]) => {
  const totalDistance =
    subArray[subArray.length - 1].mileage - subArray[0].mileage;
  return totalDistance;
};

//Calculate fuel consumption for every month
const calculateTotalEach = (data: DayData[][]) => {
  const arrayOfMonthsConsumption = data.map((month) => {
    const monthConsumption = calculateTotal(month);
    const monthDistance = calculateDistance(month);

    return {
      totalFuelUsed: monthConsumption,
      totalDistance: monthDistance,
      month: month[0].date.getMonth(),
    };
  });

  return arrayOfMonthsConsumption;
};

const getChartData = (data: any[]) => {
  const convertedData = jsonToObj(data);
  const dividedArrays = arrayDivider(convertedData);
  const completeData = calculateTotalEach(dividedArrays);
  return completeData;
};

export default getChartData;
