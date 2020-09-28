import { createSlice } from "@reduxjs/toolkit";

export const exerciseGroupsTableSlice = createSlice({
  name: "exerciseGroupsTable",
  initialState: {
    allExerciseGroups: [],
    editExerciseGroup: null,
  },
  reducers: {
    setAllExerciseGroups: (state, { payload }) => {
      state.allExerciseGroups = payload;
    },
    setEditExerciseGroup: (state, { payload }) => {
      state.editExerciseGroup = payload;
    },
  },
});

export const {
  setAllExerciseGroups,
  setEditExerciseGroup,
} = exerciseGroupsTableSlice.actions;

export const selectAllExerciseGroups = (state) =>
  state.exerciseGroupsTable.allExerciseGroups;

export const selectEditExerciseGroup = (state) =>
  state.exerciseGroupsTable.editExerciseGroup;

export default exerciseGroupsTableSlice.reducer;
export * from "./ExerciseGroupsTable.effects";