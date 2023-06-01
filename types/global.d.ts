export type DayData = {
  date: string;
  mileage: number;
  place: string;
  fueled: number;
  full: boolean;
  driver: string;
};

export type RawDataDay = {
  date: string;
  time: any;
  mileage: any;
  location: string;
  fueled: any;
  full: string;
  driver: any;
};

export type AllData = { [key: string]: DayData[] };
export type AllRawData = { [key: string]: RawDataDay[] };
