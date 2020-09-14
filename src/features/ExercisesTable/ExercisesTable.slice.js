import { createSlice } from "@reduxjs/toolkit";

export const exercisesTableSlice = createSlice({
  name: "exercisesTable",
  initialState: {
    allExercises: [],
    editExercise: null,
  },
  reducers: {
    setAllExercises: (state, payload) => {
      state.allExercises = payload;
    },
    setEditExercise: (state, { payload }) => {
      state.editExercise = payload;
    },
  },
});

export const { setAllExercises, setEditExercise } = exercisesTableSlice.actions;

export const selectAllExercises = (state) => state.exercisesTable.allExercises;
export const selectEditExercise = (state) => state.exercisesTable.editExercise;

export default exercisesTableSlice.reducer;
export * from "./ExercisesTable.effects";
