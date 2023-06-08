import { VehicleObj } from "@/types/global";

type DateRange = {
  startDate: string;
  endDate: string;
};

const stringToMs = (date: string) => {
  return new Date(date).getTime();
};

export const getArrayFromRange = (
  array: VehicleObj[],
  dateRange: DateRange
) => {
  const { startDate, endDate } = dateRange;
  return array.filter(
    (day) =>
      stringToMs(day.date) >= stringToMs(startDate) &&
      stringToMs(day.date) <= stringToMs(endDate)
  );
};
