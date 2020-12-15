import { createSlice } from "@reduxjs/toolkit";

export const administrationSlice = createSlice({
  name: "administration",
  initialState: {
    edit: false,
    newItem: false,
    exerciseGroups: undefined,
  },
  reducers: {
    switchEdit: (state) => {
      state.edit = !state.edit;
    },
    switchNewItem: (state) => {
      state.newItem = !state.newItem;
    },
    setExerciseGroups: (state, { payload }) => {
      state.exerciseGroups = payload;
    },
  },
});

export const {
  switchEdit,
  switchNewItem,
  setExerciseGroups,
} = administrationSlice.actions;

export const selectEdit = (state) => state.administration.edit;
export const selectNewItem = (state) => state.administration.newItem;
export const selectExerciseGroups = (state) => {
  return state.administration.exerciseGroups;
};

export default administrationSlice.reducer;
export * from "./Administration.effects";
