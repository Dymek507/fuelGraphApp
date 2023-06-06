import { VehicleObj } from "@/types/global";

//Divide array into subarrays
const arrayDivider = (data: VehicleObj[]): VehicleObj[][] => {
  const dividedArrays = [];
  let currentArray: VehicleObj[] = [];

  // Loop through the array and divive it into subarrays which starts and ends with full === true
  for (let i = 0; i < data.length; i++) {
    currentArray.push(data[i]);
    if (data[i].full === true) {
      dividedArrays.push(currentArray);
      currentArray = [data[i]];
    }
  }

  // Add the remaining objects if any
  if (currentArray.length > 0) {
    dividedArrays.push(currentArray);
  }
  console.log(dividedArrays);
  return dividedArrays;
};

const calculateAvg = (subArray: VehicleObj[]): number => {
  let totalFuel = 0;

  for (let i = 1; i < subArray.length; i++) {
    if (subArray[i].fueled === null) {
      totalFuel += 0;
    } else {
      totalFuel += subArray[i].fueled!;
    }
  }
  const mileageStart = subArray[0].fuelingMileage || subArray[0].mileage || 0;
  const mileageEnd =
    subArray[subArray.length - 1].fuelingMileage ||
    subArray[subArray.length - 1].mileage ||
    0;

  const totalMileage = mileageEnd - mileageStart;
  const avgFuel = Number(((totalFuel * 100) / totalMileage).toFixed(4));

  return avgFuel;
};

//Return array of arrays with each day data and avg fuel consumption
const calculateAvgEach = (dividedArrays: VehicleObj[][]) => {
  const dataPlusAvg = dividedArrays.map((subArray) => {
    return subArray.map((day) => {
      return {
        ...day,
        avg: calculateAvg(subArray),
        //last driver
        driver: subArray[subArray.length - 1].driver,
      };
    });
  });
  console.log(dataPlusAvg);
  return dataPlusAvg;
};

const arrayWithAvg = (arrayOfArrays: VehicleObj[][]) => {
  const arrayOfArraysWithAvg = calculateAvgEach(arrayOfArrays);
  const flatArray = arrayOfArraysWithAvg.flat();
  const arrayWithoutDoubles = flatArray.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (day) => day.mileage === value.mileage && day.date === value.date
      )
  );
  const dataWithAvg = arrayWithoutDoubles.filter(
    (day) => day.avg !== Infinity && day.avg !== 0 && !Number.isNaN(day.avg)
  );
  return dataWithAvg;
};

const getChartData = (data: VehicleObj[]) => {
  if (data === undefined) return [];
  const dividedArrays = arrayDivider(data);
  const completeData = arrayWithAvg(dividedArrays);
  return completeData;
};

export default getChartData;
