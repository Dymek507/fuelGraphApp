import { VehicleObj } from "@/types/global";

export const getAverageFuelUsage = (vehicleArray: VehicleObj[]) => {
  const lastFuelingMileage =
    vehicleArray[vehicleArray.length - 1].fuelingMileage;
  const firstFuelingMileage = vehicleArray[0].fuelingMileage;
  const totalTraveled = lastFuelingMileage! - firstFuelingMileage! || 0;
  // Slice first item from array
  const slicedVehicleArray = vehicleArray.slice(1);
  const fuelUsedArray = slicedVehicleArray.reduce((acc, vehicle) => {
    if (!vehicle.fueled) return acc;
    return acc + vehicle.fueled;
  }, 0);
  const averageFuelUsage = Number(
    ((fuelUsedArray * 100) / totalTraveled).toFixed(2)
  );
  return averageFuelUsage;
};
