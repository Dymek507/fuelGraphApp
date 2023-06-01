"use client";

import { AllData, DayData } from "@/types/global";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  data: AllData;
};

const initialState: InitialState = {
  data: {},
};

export const allDataSlice = createSlice({
  name: "alldata",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<AllData>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = allDataSlice.actions;

export default allDataSlice.reducer;
