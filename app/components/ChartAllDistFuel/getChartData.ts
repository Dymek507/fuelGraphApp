import { VehicleObj } from "@/types/global";

//Reduce array of VehicleObj to object with total fuel used,total fuel tanked, total distance,

const reduceOneVehicleArray = (data: VehicleObj[]) => {
  const totalFuelUsed = data.reduce((acc, curr) => {
    if (curr.fuelUsed === null) return acc;
    return acc + curr.fuelUsed;
  }, 0);
  const totalFueled = data.reduce((acc, curr) => {
    if (curr.fueled === null) return acc;
    return acc + curr.fueled;
  }, 0);
  const totalDistance =
    data[data.length - 1].mileage - data[0].mileage + data[0].traveled;
  const totalTraveled = data.reduce((acc, curr) => {
    if (curr.traveled === null) return acc;
    return acc + curr.traveled;
  }, 0);

  return {
    totalFuelUsed,
    totalFueled,
    totalDistance,
    totalTraveled,
  };
};

//Itrate through object of named arrays and reduce each array to object with total fuel used,total fuel tanked, total distance,
const reduceAllVehicles = (data: { [key: string]: VehicleObj[] }) => {
  const reducedData = Object.keys(data).reduce((acc, curr) => {
    const reducedArray = reduceOneVehicleArray(data[curr]);
    return {
      ...acc,
      [curr]: reducedArray,
    };
  }, {});
  return reducedData;
};

const getChartData = (allVehiclesData: { [key: string]: VehicleObj[] }) => {
  if (allVehiclesData === undefined) return [];
  const reducedObject = reduceAllVehicles(allVehiclesData);
  const chartData = Object.keys(reducedObject).map((key) => {
    return {
      name: key,
      ...reducedObject[key],
    };
  });
  return chartData;
};

export default getChartData;
