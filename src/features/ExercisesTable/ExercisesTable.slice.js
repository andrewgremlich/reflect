import { createSlice } from "@reduxjs/toolkit";

export const exercisesTableSlice = createSlice9({
  name: "exercisesTable",
  initialState: {
    allExercises: [],
    editExercise: null,
    newExercise: true,
  },
  reducers: {
    setAllExercises: (state, payload) => {
      state.allExercises = payload;
    },
    setEditExercise: (state, { payload }) => {
      state.editExercise = payload;
    },
    setNewExercise: (state, payload) => {
      state.newExercise = payload;
    },
  },
});
