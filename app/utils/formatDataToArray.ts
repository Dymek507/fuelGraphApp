import { AllVehiclesData } from "@/types/global";

//Format AllVehicleData to Array of Objects to rechart
export const formatDataToArray = (allData: AllVehiclesData) => {
  const allDataKeys = Object.keys(allData);
  const allDataArray = allDataKeys.map((key) => {
    return {
      name: key,
      ...allData[key],
    };
  });
  return allDataArray;
};
