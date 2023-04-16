import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tech {
  id: number | null;
  url: string;
  name: string;
  descriptions: string;
  publicId: string;
  enabled: boolean
  techImg?: any;
}

interface TechState {
  tech: Tech[];
}

const initialState: TechState = {
  tech: [],
};

export const TechSlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    getTechs: (state, actions: PayloadAction<Tech[]>) => {
      state.tech = [...actions?.payload];
    },
  },
});

export default TechSlice.caseReducers;

export const { getTechs } = TechSlice.actions;
