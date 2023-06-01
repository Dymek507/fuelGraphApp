"use client";

import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./features/vehicle/vehicleSlice";
import allDataReducer from "./features/all-data/allDataSlice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    alldata: allDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
