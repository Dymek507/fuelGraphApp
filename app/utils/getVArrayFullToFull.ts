import { VehicleObj } from "@/types/global";

export const getVArrayFullToFull = (vehiceArray: VehicleObj[]) => {
  const firstFullDayId = vehiceArray.findIndex((day) => day.full === true);
  const lastFullDayId = [...vehiceArray]
    .reverse()
    .findIndex((day) => day.full === true);
  const fullToFullArray = vehiceArray.slice(
    firstFullDayId,
    vehiceArray.length - lastFullDayId
  );
  return fullToFullArray;
};
