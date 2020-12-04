import { createSlice } from "@reduxjs/toolkit";

export const exerciseSetsTableSlice = createSlice({
  name: "exerciseSetsTable",
  initialState: {
    allExerciseSets: [],
    editExerciseSet: undefined,
    selectedGroup: "",
  },
  reducers: {
    setAllExerciseSets: (state, { payload }) => {
      state.allExerciseSets = payload;
    },
    setEditExerciseSet: (state, { payload }) => {
      state.editExerciseSet = payload;
    },
    setSelectedGroup: (state, { payload }) => {
      state.selectedGroup = payload;
    },
  },
});

export const {
  setAllExerciseSets,
  setEditExerciseSet,
  setSelectedGroup,
} = exerciseSetsTableSlice.actions;

export const selectAllExerciseSets = (state) =>
  state.exerciseSetsTable.allExerciseSets;
export const selectEditExerciseSet = (state) =>
  state.exerciseSetsTable.editExerciseSet;
export const selectExerciseGroup = (state) =>
  state.exerciseSetsTable.selectedGroup;

export default exerciseSetsTableSlice.reducer;
export * from "./ExerciseSetsTable.effects";
