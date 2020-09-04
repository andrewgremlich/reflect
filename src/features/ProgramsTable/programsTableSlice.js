import { createSlice } from "@reduxjs/toolkit";

export const programsTableSlice = createSlice({
  name: "programsTable",
  initialState: {
    allPrograms: [],
  },
  reducers: {
    setAllPrograms: (state, { payload }) => {
      state.allPrograms = payload;
    },
  },
});

export const { setAllPrograms } = programsTableSlice.actions;

export const getPrograms = () => (dispatch) => {
  fetch("/.netlify/functions/index/programs/all")
    .then((data) => data.json())
    .then((allPrograms) => {
      dispatch(setAllPrograms(allPrograms));
    });
};

export const selectAllPrograms = (state) => state.programsTable.allPrograms;

export default programsTableSlice.reducer;
