import { createSlice } from "@reduxjs/toolkit";

export const exerciseSetsTableSlice = createSlice({
  name: "exerciseSetsTable",
  initialState: {
    allExerciseSets: undefined,
    editExerciseSet: undefined,
    selectedGroup: undefined,
  },
  reducers: {
    setAllSets: (state, { payload }) => {
      state.allExerciseSets = payload;
    },
    setEditSet: (state, { payload }) => {
      state.editExerciseSet = payload;
    },
    setSelectedGroup: (state, { payload }) => {
      state.selectedGroup = payload;
    },
  },
});

export const {
  setAllSets,
  setEditSet,
  setSelectedGroup,
} = exerciseSetsTableSlice.actions;

export const selectAllSets = (state) => state.exerciseSetsTable.allExerciseSets;
export const selectEditSet = (state) => state.exerciseSetsTable.editExerciseSet;
export const selectExerciseGroup = (state) =>
  state.exerciseSetsTable.selectedGroup;

export default exerciseSetsTableSlice.reducer;
export * from "./SetsTable.effects";
