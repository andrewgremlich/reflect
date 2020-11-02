import { createSlice } from "@reduxjs/toolkit";

export const exerciseSetsTableSlice = createSlice({
  name: "exerciseSetsTable",
  initialState: {
    allExerciseSets: [],
    editExerciseSet: null,
  },
  reducers: {
    setAllExerciseSets: (state, { payload }) => {
      state.allExerciseSets = payload;
    },
    setEditExerciseSet: (state, { payload }) => {
      state.editExerciseSet = payload;
    },
  },
});

export const {
  setAllExerciseSets,
  setEditExerciseSet,
} = exerciseSetsTableSlice.actions;

export const selectAllExerciseSets = (state) =>
  state.exerciseSetsTable.allExerciseSets;
export const selectEditExerciseSet = (state) =>
  state.exerciseSetsTable.editExerciseSet;

export default exerciseSetsTableSlice.reducer;
export * from "./ExerciseSetsTable.effects";
