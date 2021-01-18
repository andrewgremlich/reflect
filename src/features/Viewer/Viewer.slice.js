import { createSlice } from "@reduxjs/toolkit";

export const viewerSlice = createSlice({
  name: "viewer",
  initialState: {
    selectedSet: undefined,
    selectedProgram: undefined,
    selectedGroupData: undefined,
  },
  reducers: {
    setSelectedSet: (state, { payload }) => {
      state.selectedSet = payload;
    },
    setSelectedProgram: (state, { payload }) => {
      state.selectedProgram = payload;
    },
    setSelectedGroup: (state, { payload }) => {
      state.selectedGroupData = payload;
    },
  },
});

export const {
  setSelectedSet,
  setSelectedProgram,
  setSelectedGroup,
} = viewerSlice.actions;

export const getSelectedSet = (state) => state.viewer.selectedSet;
export const getSelectedProgram = (state) => state.viewer.selectedProgram;
export const getSelectedGroup = (state) => state.viewer.selectedGroupData;

export default viewerSlice.reducer;
export * from "./Viewer.effects";
