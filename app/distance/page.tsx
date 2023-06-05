import React from "react";
import { DistanceChart } from "./helpers/DistanceChart";
import TopCards from "@/components/TopCards";


const page = () => {
  return <div className="w-full">
    <TopCards />
    <DistanceChart />
  </div>;
};

export default page;
