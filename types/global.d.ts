export type VehicleObj = {
  date: string;
  vehicle: string;
  working: boolean;
  traveled: number;
  fuelUsed: number;
  startDriving: string;
  mileage: number | null;
  endDriving: string;
  avgExcel: number | null;
  avgBox: number | null;
  fuelBefore: number | null;
  fuelingTime: string | null;
  fuelingMileage: number | null;
  place: string | null;
  fueled: number | null;
  full: boolean | null;
  driver: string | null;
  fueling: boolean;
};

export type AllVehiclesData = { [key: string]: VehicleObj[] };

export type ChartOption = {
  dataKey: string;
  fill: string;
};
