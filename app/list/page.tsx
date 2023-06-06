'use client'
import React from "react";
import EnhancedTable from "./Table/rootTable";
import { useAppSelector } from "../store/features/hooks";


const ListView = () => {

  const plates = useAppSelector((state) => state.vehicle.plates);


  return (
    <div className="flex-center">
      <EnhancedTable plates={plates} />
    </div>
  )
};

export default ListView;
