import { AllVehiclesData, VehicleObj } from "@/types/global";

//Get first and last full day
const getFullDay = (data: VehicleObj[], first: boolean = true) => {
  if (first) {
    const firstFullIndex = data.findIndex((day) => day.full === true);
    const firstFullDay = data[firstFullIndex];
    //Average fuel usage this day
    const firstFullDayAvg = Number(
      (firstFullDay.fuelUsed / firstFullDay.traveled).toFixed(4)
    );
    //Calculate fuel used after fueling
    //Mileage after fueling !!<<May be an error>>!!
    const mileageAfter = firstFullDay.mileage - firstFullDay.fuelingMileage!;
    const fuelUsedAfter = firstFullDayAvg * mileageAfter;
    return {
      ...firstFullDay,
      fuelUsed: fuelUsedAfter,
      traveled: mileageAfter,
    };
  } else {
    const lastFullIndex = data.map((day) => day.full).lastIndexOf(true);
    const lastFullDay = data[lastFullIndex];
    //Average fuel usage this day
    const lastFullDayAvg = Number(
      (lastFullDay.fuelUsed / lastFullDay.traveled).toFixed(4)
    );
    //Calculate fuel used before fueling
    //Mileage before fueling !!<<May be an error>>!!
    const mileageBefore =
      lastFullDay.fuelingMileage! - lastFullDay.mileage + lastFullDay.traveled;
    const fuelUsedBefore = lastFullDayAvg * mileageBefore;
    return {
      ...lastFullDay,
      fuelUsed: fuelUsedBefore,
      traveled: mileageBefore,
    };
  }
};

//Slice array to start and end with full === true
const sliceArray = (data: VehicleObj[]) => {
  const firstFullIndex = data.findIndex((day) => day.full === true);
  const lastFullIndex = data.map((day) => day.full).lastIndexOf(true);
  const slicedArray = data.slice(firstFullIndex, lastFullIndex + 1);
  return slicedArray;
};

//Map array to replace first and last full day with calculated data
const getArrayWithFirstAndLastFull = (data: VehicleObj[]) => {
  const firstFullDay = getFullDay(data, true);
  const lastFullDay = getFullDay(data, false);
  const dataWithFirstAndLastFull = data.map((day) => {
    if (day.date === firstFullDay.date) {
      return firstFullDay;
    } else if (day.date === lastFullDay.date) {
      return lastFullDay;
    } else {
      return day;
    }
  });
  return sliceArray(dataWithFirstAndLastFull);
};

//Calculate total fueled
const getTotalFueled = (data: VehicleObj[]) => {
  const arrayWithoutFirst = data.slice(1);
  const totalFueled = arrayWithoutFirst.reduce((acc, day) => {
    if (day.fueled === null) {
      return acc + 0;
    } else {
      return acc + day.fueled;
    }
  }, 0);
  return Number(totalFueled.toFixed(4));
};

//Reduce array to get average fuel usage
const getAvgFuelUsage = (data: VehicleObj[]) => {
  const totalFuelUsed = data.reduce((acc, day) => {
    return acc + day.fuelUsed;
  }, 0);
  const totalTraveled = data.reduce((acc, day) => {
    return acc + day.traveled;
  }, 0);
  const avgFuelUsage = Number(
    ((totalFuelUsed / totalTraveled) * 100).toFixed(4)
  );
  const totalMileage =
    data[data.length - 1].fuelingMileage! - data[0].fuelingMileage!;
  const totalFueled = getTotalFueled(data);
  const avgTotalFueled = Number(
    ((totalFueled * 100) / totalMileage).toFixed(4)
  );

  return {
    totalFuelUsed,
    totalFueled,
    totalTraveled,
    totalMileage,
    avgFuelUsage,
    avgTotalFueled,
  };
};

const getChartData = (allData: AllVehiclesData) => {
  if (allData === undefined) return [];
  //Iterate through allData transforming each vehicle data form array to object
  const reducedObject = Object.keys(allData).reduce((acc, key) => {
    const arrayWithFirstandLastFull = getArrayWithFirstAndLastFull(
      allData[key]
    );
    const avgFuelUsage = getAvgFuelUsage(arrayWithFirstandLastFull);
    return {
      ...acc,
      [key]: {
        ...avgFuelUsage,
      },
    };
  }, {});

  const chartData = Object.keys(reducedObject).map((key) => {
    return {
      name: key,
      ...reducedObject[key],
    };
  });
  return chartData;
};

export default getChartData;
