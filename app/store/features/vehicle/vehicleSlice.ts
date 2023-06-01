"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface VehicleState {
  plates: string;
}

const initialState: VehicleState = {
  plates: "LKS13192",
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setPlates: (state, action: PayloadAction<string>) => {
      state.plates = action.payload;
    },
  },
});

export const { setPlates } = vehicleSlice.actions;

export default vehicleSlice.reducer;
