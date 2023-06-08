//Iterate through an object and call a callback function for each key/value pair

import { AllVehiclesData } from "@/types/global";

export const iterateObject = (obj: AllVehiclesData, callback: any) => {
  const objKeys = Object.keys(obj);
  const newObject: AllVehiclesData = {};
  for (const key of objKeys) {
    const newArrayData = callback(obj[key]);
    newObject[key] = newArrayData;
  }
  return newObject;
};
