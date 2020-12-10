import { createSlice } from "@reduxjs/toolkit";

export const viewerSlice = createSlice({
  name: "viewer",
  initialState: {
    selectedSet: undefined,
    selectedProgram: undefined,
    selectedGroup: undefined,
  },
  reducers: {
    setSelectedSet: (state, { payload }) => {
      state.selectedSet = payload;
    },
    setSelectedProgram: (state, { payload }) => {
      state.selectedProgram = payload;
    },
    setSelectedGroup: (state, { payload }) => {
      state.selectedGroup = payload;
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
export const getSelectedGroup = (state) => state.viewer.selectedGroup;

export default viewerSlice.reducer;
export * from "./Viewer.effects";
