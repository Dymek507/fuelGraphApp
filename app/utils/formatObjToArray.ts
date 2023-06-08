import { AllVehiclesData } from "@/types/global";

//Format AllVehicleData to Array of Objects to rechart
export const formatObjToArray = (allData: AllVehiclesData) => {
  const allDataKeys = Object.keys(allData);
  const allDataArray = allDataKeys.map((key) => {
    return {
      name: key,
      //add values from allData[key] to new object
      rest: allData[key],
    };
  });
  return allDataArray;
};
