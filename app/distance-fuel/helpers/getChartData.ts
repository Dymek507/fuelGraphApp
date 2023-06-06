import { VehicleObj } from "@/types/global";

//Divide array into subarrays
const arrayDivider = (data: VehicleObj[]): VehicleObj[][] => {
  const dividedArrays = [];
  let currentArray: VehicleObj[] = [];

  // Loop through the array and divive it into subarrays of months
  // console.log(new Date(data[0].date).getMonth());

  for (let i = 0; i < data.length; i++) {
    currentArray.push(data[i]);
    if (
      new Date(data[i]?.date).getMonth() !==
      new Date(data[i + 1]?.date).getMonth()
    ) {
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
const calculateTotal = (subArray: VehicleObj[]) => {
  let totalFuel = 0;
  subArray.forEach((day) => {
    if (day.fueled === null) return totalFuel;
    totalFuel += day.fueled;
  });
  return totalFuel;
};

//Calculate distance in month
const calculateDistance = (subArray: VehicleObj[]) => {
  const workingDays = subArray.filter((day) => day.working === true);
  console.log(workingDays);
  const totalDistance =
    workingDays[workingDays.length - 1].mileage - workingDays[0].mileage;
  console.log(totalDistance);
  return totalDistance;
};

//Calculate fuel consumption for every month
const calculateTotalEach = (data: VehicleObj[][]) => {
  const arrayOfMonthsConsumption = data.map((month) => {
    const monthConsumption = calculateTotal(month);
    const monthDistance = calculateDistance(month);

    return {
      totalFuelUsed: monthConsumption,
      totalDistance: monthDistance,
      month: new Date(month[0].date).getMonth(),
    };
  });

  return arrayOfMonthsConsumption;
};

const getChartData = (data: VehicleObj[]) => {
  if (data === undefined) return [];
  const dividedArrays = arrayDivider(data);
  const completeData = calculateTotalEach(dividedArrays);
  return completeData;
};

export default getChartData;
