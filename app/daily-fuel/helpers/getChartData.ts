import { VehicleObj } from "@/types/global";

const dateConverter = (date: string) => {
  const dateArray = date.split("T");
  const dateArray2 = dateArray[0].split("-");
  const dateArray3 = dateArray2.reverse();
  return `${dateArray3[0]}.${dateArray3[1]}`;
};

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

//Calculate average fuel consumption for each subarray from excel data
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

//Calculate average fuel consumption for each subarray from box data
const calculateAvgBox = (subArray: VehicleObj[]): number => {
  let totalFuel = 0;

  for (let i = 1; i < subArray.length; i++) {
    if (subArray[i].fuelUsed === null) {
      totalFuel += 0;
    } else {
      totalFuel += subArray[i].fuelUsed!;
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
//Calculate average fuel consumption for each subarray from box data
const calculateAvgBox3 = (subArray: VehicleObj[]): number => {
  let totalFuel = 0;
  let totalTraveled = 0;

  for (let i = 1; i < subArray.length; i++) {
    if (subArray[i].fuelUsed === null) {
      totalFuel += 0;
      totalTraveled += 0;
    } else {
      totalFuel += subArray[i].fuelUsed!;
      totalTraveled += subArray[i].traveled!;
    }
  }

  const avgFuel = Number(((totalFuel * 100) / totalTraveled).toFixed(4));

  return avgFuel;
};

//Return array of arrays with each day data and avg fuel consumption
const calculateAvgEach = (dividedArrays: VehicleObj[][]) => {
  const dataPlusAvg = dividedArrays.map((subArray) => {
    return subArray.map((day) => {
      const avg = calculateAvg(subArray);
      const avgBox3 = calculateAvgBox3(subArray);
      const substraction = avg - avgBox3;
      return {
        ...day,
        date: dateConverter(day.date),
        avg: calculateAvg(subArray),
        avgBox3: calculateAvgBox3(subArray),
        substraction: substraction,
        // avgBox: calculateAvgBox(subArray),
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

const arrayWithAvgBox = (array: VehicleObj[]) => {
  return array.map((day) => {
    const avgBox = (day.fuelUsed / day.traveled) * 100;
    return {
      ...day,
      avgBox2: avgBox,
    };
  });
};

const getChartData = (data: VehicleObj[]) => {
  if (data === undefined) return [];
  const dividedArrays = arrayDivider(data);
  const completeData1 = arrayWithAvg(dividedArrays);
  const completeData = arrayWithAvgBox(completeData1);

  return completeData;
};

export default getChartData;
