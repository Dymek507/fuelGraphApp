import React from "react";
import { AverageChart } from "./helpers/AverageChart";
import TopCards from "@/components/TopCards";


const page = () => {
  return (
    <div className="wh-full">
      <TopCards />
      <AverageChart />
    </div>
  )
};

export default page;
