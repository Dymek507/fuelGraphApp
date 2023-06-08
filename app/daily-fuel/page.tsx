'use client'
import { LineChart } from "@/Charts/LineChart";
import React from "react";
import ALL_DATA from "../../data/fuel-data.json";
import { AllVehiclesData, ChartOption } from "@/types/global";
import { useAppSelector } from "../store/features/hooks";
import { get } from "http";
import { getVArrayFullToFull } from "../utils/getVArrayFullToFull";

const DailyFuel = () => {
  const plates = useAppSelector(state => state.vehicle.plates)
  const allData = ALL_DATA as AllVehiclesData;
  const vehicleArray = allData[plates];
  const fullToFullArray = getVArrayFullToFull(vehicleArray);
  const slicedFirst = fullToFullArray.slice(1);

  const options: ChartOption[] = [{ dataKey: "avgExcel", fill: "#8884d8" },
  ];
  const options2: ChartOption[] = [{ dataKey: "avgBox", fill: "#8884d8" },
  ];

  return (
    <div className="flex-center h-[600px]">
      <LineChart data={slicedFirst} options={options} dataKey="date" />
    </div>
  )
};

export default DailyFuel;
