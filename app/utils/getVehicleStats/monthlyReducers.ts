import { VehicleObj } from "@/types/global";

//Sum traveled distance in month
export const sumTraveled = (monthArray: VehicleObj[]) => {
  const sum = monthArray.reduce((acc, vehicle) => {
    if (!vehicle.traveled) return acc;
    return acc + vehicle.traveled;
  }, 0);
  return Number(sum.toFixed(2));
};
//Sum fuel used in month
export const sumFuelUsed = (monthArray: VehicleObj[]) => {
  const sum = monthArray.reduce((acc, vehicle) => {
    if (!vehicle.fuelUsed) return acc;
    return acc + vehicle.fuelUsed;
  }, 0);
  return Number(sum.toFixed(2));
};
//Sum fuel tanked in month
export const sumFuelTanked = (monthArray: VehicleObj[]) => {
  const sum = monthArray.reduce((acc, vehicle) => {
    if (!vehicle.fueled) return acc;
    return acc + vehicle.fueled;
  }, 0);
  return Number(sum.toFixed(2));
};
