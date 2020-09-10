import { createSlice } from "@reduxjs/toolkit";

export const programsTableSlice = createSlice({
  name: "programsTable",
  initialState: {
    allPrograms: [],
    editProgram: null,
    newProgram: false,
  },
  reducers: {
    setAllPrograms: (state, { payload }) => {
      state.allPrograms = payload;
    },
    setEditProgram: (state, { payload }) => {
      state.editProgram = payload;
    },
    setNewProgram: (state, { payload }) => {
      state.newProgram = payload;
    },
  },
});

export const {
  setAllPrograms,
  setEditProgram,
  setNewProgram,
} = programsTableSlice.actions;

export default programsTableSlice.reducer;
export * from "./ProgramsTable.effects";
export * from "./ProgramsTable.selectors";
