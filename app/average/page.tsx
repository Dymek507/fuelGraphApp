import React from "react";
import TopCards from "@/components/TopCards";
import { ChartAllAverage } from "./helpers/ChartAllAverage/ChartAllAverage";


const Home = () => {
  return (
    <div className="flex-center flex-col h-[500px]">
      <ChartAllAverage />
    </div>
  )
};

export default Home;
