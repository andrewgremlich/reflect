import { createSlice } from "@reduxjs/toolkit";

export const exerciseGroupsTableSlice = createSlice({
  name: "exerciseGroupsTable",
  initialState: {
    allExerciseGroups: [],
  },
  reducers: {
    setAllExerciseGroups: (state, { payload }) => {
      state.allExerciseGroups = payload;
    },
  },
});

export const { setAllExerciseGroups } = exerciseGroupsTableSlice.actions;

export const getPrograms = () => (dispatch) => {
  fetch("/.netlify/functions/index/exerciseGroup/all")
    .then((data) => data.json())
    .then((allPrograms) => {
      dispatch(setAllExerciseGroups(allPrograms));
    });
};

export const selectAllPrograms = (state) => state.exerciseGroupsTable.allPrograms;

export default exerciseGroupsTableSlice.reducer;
