import { LineChart } from "@/Charts/LineChart";
import { AllVehiclesData, ChartOption } from "@/types/global";
import ALL_DATA from "../../../data/fuel-data.json";
import { iterateObject } from "@/app/utils/iterateObject";
import { getVehicleStats } from "@/app/utils/getVehicleStats";
import { formatDataToArray } from "@/app/utils/formatDataToArray";
import { getVArrayFullToFull } from "@/app/utils/getVArrayFullToFull";
import { getAverageFuelUsage } from "@/app/utils/getAvgFuelUsage";
import { formatObjToArray } from "@/app/utils/formatObjToArray";
import { BarChart } from "@/Charts/BarChart";

const allData = ALL_DATA as AllVehiclesData;

//Chart 0 data "Średnie zużycie paliwa"
const dataFullToFull = iterateObject(allData, getVArrayFullToFull);
const avgExcel = iterateObject(dataFullToFull, getAverageFuelUsage);
const chartData0 = formatObjToArray(avgExcel);

const chartData0Options: ChartOption[] = [{ dataKey: "rest", fill: "#8884d8" }];

//Chart 1 data "Przejechane kilometry w 4 miesiące"
const newData = iterateObject(allData, getVehicleStats);
const chartData1 = formatDataToArray(newData);

const chartData1Options: ChartOption[] = [
  { dataKey: "traveledSum", fill: "#8884d8" },
];

//Chart 2 data "Przejechane zatankowane paliwo i zużyte paliwo w 4 miesiące"
const chartData2 = chartData1

const chartData2Options: ChartOption[] = [
  { dataKey: "fuelTankedSum", fill: "#8884d8" },
  { dataKey: "fuelUsedSum", fill: "#82ca9d" },
];

export const ITEMS_DATA = [
  {
    id: "0",
    title: "Średnie zużycie paliwa",
    chart: (
      <BarChart data={chartData0} options={chartData0Options} dataKey="name" />
    ),
    miniChart: (
      <BarChart
        data={chartData0}
        options={chartData0Options}
        dataKey="name"
        mini
      />
    ),
  },
  {
    id: "1",
    title: "Przejechane kilometry w 4 miesiące",
    chart: (
      <BarChart data={chartData1} options={chartData1Options} dataKey="name" />
    ),
    miniChart: (
      <BarChart
        data={chartData1}
        options={chartData1Options}
        dataKey="name"
        mini
      />
    ),
  },
  {
    id: "2",
    title: "Przejechane zatankowane paliwo i zużyte paliwo w 4 miesiące",
    chart: (
      <BarChart data={chartData2} options={chartData2Options} dataKey="name" />
    ),
    miniChart: (
      <BarChart
        data={chartData2}
        options={chartData2Options}
        dataKey="name"
        mini
      />
    ),
  },
];
