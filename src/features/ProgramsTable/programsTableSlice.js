import { createSlice } from "@reduxjs/toolkit";

export const programsTableSlice = createSlice({
  name: "programsTable",
  initialState: {
    allPrograms: [],
    editProgram: null,
  },
  reducers: {
    setAllPrograms: (state, { payload }) => {
      state.allPrograms = payload;
    },
    setEditProgram: (state, { payload }) => {
      state.editProgram = payload;
    },
  },
});

export const { setAllPrograms, setEditProgram } = programsTableSlice.actions;

export const getPrograms = () => (dispatch) => {
  fetch("/.netlify/functions/index/programs/all")
    .then((data) => data.json())
    .then((allPrograms) => {
      dispatch(setAllPrograms(allPrograms));
    });
};

export const selectAllPrograms = (state) => state.programsTable.allPrograms;
export const selectEditProgram = (state) => state.programsTable.editProgram;

export default programsTableSlice.reducer;
