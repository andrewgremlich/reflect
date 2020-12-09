import { createSlice } from "@reduxjs/toolkit";

export const viewerSlice = createSlice({
  name: "viewer",
  initialState: {
    selectedSet: undefined,
    selectedProgram: undefined,
  },
  reducers: {
    setSelectedSet: (state, { payload }) => {
      state.selectedSet = payload;
    },
    setSelectedProgram: (state, { payload }) => {
      state.selectedProgram = payload;
    },
  },
});

export const { setSelectedSet, setSelectedProgram } = viewerSlice.actions;

export const getSelectedSet = (state) => state.viewer.selectedSet;
export const getSelectedProgram = (state) => state.viewer.selectedProgram;

export default viewerSlice.reducer;
export * from "./Viewer.effects";
