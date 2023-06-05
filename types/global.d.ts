export type VehicleObj = {
  date: string;
  vehicle: string;
  working: boolean;
  traveled: number;
  fuelUsed: number;
  startDriving: string;
  mileage: number;
  fuelingTime: string | null;
  fuelingMileage: number | null;
  place: string | null;
  fueled: number | null;
  full: boolean | null;
  driver: string | null;
  fueling: boolean;
};

export type AllVehiclesData = { [key: string]: VehicleObj[] };
