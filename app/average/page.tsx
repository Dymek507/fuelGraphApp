import React from "react";
import TopCards from "@/components/TopCards";
import { VehicleAvgFuel } from "./helpers/VehicleAvgFuel";


const Home = () => {
  return (
    <div className="flex-center flex-col h-[500px]">
      <TopCards />
      <VehicleAvgFuel />
    </div>
  )
};

export default Home;
