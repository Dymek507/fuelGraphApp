import { VehicleObj } from "@/types/global";
import {
  sumFuelTanked,
  sumFuelUsed,
  sumTraveled,
} from "./getVehicleStats/monthlyReducers";

//Divide array into months
export const divideIntoMonths = (vehicleArray: VehicleObj[]) => {
  //Data from february to may
  const months = [1, 2, 3, 4];
  const monthArrays = [];
  for (const month of months) {
    const monthArray = vehicleArray.filter((vehicle) => {
      return new Date(vehicle.date).getMonth() === month;
    });
    monthArrays.push(monthArray);
  }
  return monthArrays;
};

export const getVehicleStats = (vehicleArray: VehicleObj[]) => {
  const monthArrays = divideIntoMonths(vehicleArray);
  const traveledMonthlyArray = monthArrays.map((monthArray) =>
    sumTraveled(monthArray)
  );
  const fuelUsedMonthlyArray = monthArrays.map((monthArray) =>
    sumFuelUsed(monthArray)
  );
  const fuelTankedMonthlyArray = monthArrays.map((monthArray) =>
    sumFuelTanked(monthArray)
  );
  const traveledSum = traveledMonthlyArray.reduce((a, b) => a + b, 0);
  const fuelUsedSum = fuelUsedMonthlyArray.reduce((a, b) => a + b, 0);
  const fuelTankedSum = fuelTankedMonthlyArray.reduce((a, b) => a + b, 0);

  const vehicleStats = {
    traveledMonthly: traveledMonthlyArray,
    fuelUsedMonthly: fuelUsedMonthlyArray,
    fuelTankedMonthly: fuelTankedMonthlyArray,
    traveledSum: traveledSum,
    fuelUsedSum: fuelUsedSum,
    fuelTankedSum: fuelTankedSum,
  };
  return vehicleStats;
};
