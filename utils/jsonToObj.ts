import { AllData, AllRawData, DayData, RawDataDay } from "@/types/global";
import ALL_DATA from "@/data/fuel-excel.json" assert { type: "json" };

//convert date string to date object
const dateStingToDate = (dateString: string, time: string = "00:00") => {
  const [month, day, year] = dateString.split("/");
  const [hour, minute] = time.split(":");
  return new Date(
    Date.UTC(
      Number("20" + year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute)
    )
  ).toLocaleString();
};

//Convert place string to place name
const placeConverter = (location: string) => {
  switch (location) {
    case "K":
      return "Krasnystaw";
    case "W":
      return "Wólka";
    default:
      return "Unknown";
  }
};

//Convert full string to boolean
const checkIfFull = (full: string) => {
  switch (full) {
    case "Full":
      return true;
    case "Tak":
      return true;
    case "Nie":
      return false;
    default:
      return false;
  }
};

//Convert data to proper format
const jsonToObj = (rawData: AllRawData) => {
  const data: AllData = {};

  for (const key of Object.keys(rawData)) {
    data[key] = rawData[key].map((item) => {
      return {
        date: dateStingToDate(item.date, item.time),
        mileage: Number(item.mileage),
        place: placeConverter(item.location),
        fueled: Number(item.fueled),
        full: checkIfFull(item.full),
        driver: item.driver,
      };
    });
  }
  return data;
};

export default jsonToObj;
