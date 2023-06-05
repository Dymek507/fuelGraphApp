"use client";

import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AnyAction } from "@reduxjs/toolkit";
import ALL_DATA from "@/data/fuel-excel.json" assert { type: "json" };
import { setData } from "../features/all-data/allDataSlice";
import jsonToObj from "@/data/excelData.ts/helpers/jsonToObj";
import { AllRawData } from "@/types/global";

export const fetchData = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const data = jsonToObj(ALL_DATA as unknown as AllRawData);
    dispatch(setData(data));
  };
};
