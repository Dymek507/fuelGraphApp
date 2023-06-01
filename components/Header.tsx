'use client'
import React, { useEffect } from "react";
import ALL_DATA from "@/data/fuel-excel.json";

import { useAppDispatch, useAppSelector } from "@/app/store/features/hooks";
import { setPlates } from "@/app/store/features/vehicle/vehicleSlice";
import { fetchData } from "@/app/store/thunks/fetchData";

type OptionProps = {
  text: string;
};

const optionsList = Object.keys(ALL_DATA)

const Option = ({ text }: OptionProps) => {
  return <option>{text}</option>;
}
const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }
    , [dispatch]);

  const changePlateHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const platesAvaiable = Object.keys(ALL_DATA).filter(plates => plates === e.target.value).length > 0
    if (platesAvaiable) {
      dispatch(setPlates(e.target.value))
    } else {
      dispatch(setPlates('LKS13192'))
    }
  }

  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>FuelGraph</h2>
      <select onChange={e => changePlateHandler(e)} className="w-full max-w-xs font-sans select select-bordered">
        {optionsList.map((e) => <Option key={e} text={e} />)}
      </select>
    </div>
  );
};

export default Header;
