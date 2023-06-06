import { VehicleObj } from "@/types/global";

import type { AllVehiclesData } from "@/types/global";

import ALL_VEHICLE_DATA from "@/data/fuel-data.json";

const dateConverter = (date: string) => {
  "2023-02-02T00:00:00.000Z";
  const dateArr = date.split("T")[0].split("-");

  const day = dateArr[2];
  const month = dateArr[1];
  const year = dateArr[0];

  return `${day}-${month}-${year}`;
};

const getTableData = (plates: string) => {
  const AllVehiclesData: AllVehiclesData = ALL_VEHICLE_DATA as AllVehiclesData;

  const vehicleData: VehicleObj[] = AllVehiclesData[plates];

  return vehicleData.map((vehicle) => {
    return {
      date: dateConverter(vehicle.date),
      vehicle: vehicle.vehicle,
      traveled: vehicle.traveled,
      mileage: vehicle.mileage,
      fueled: vehicle.fueled,
      driver: vehicle.driver,
    };
  });
};
export default getTableData;
