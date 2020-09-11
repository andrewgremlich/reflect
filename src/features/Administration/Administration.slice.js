import { createSlice } from "@reduxjs/toolkit";

export const administrationSlice = createSlice({
  name: "administration",
  initialState: {
    edit: false,
    newItem: false,
  },
  reducers: {
    switchEdit: (state) => {
      state.edit = !state.edit;
    },
    switchNewItem: (state) => {
      state.newItem = !state.newItem;
    },
  },
});

export const { switchEdit, switchNewItem } = administrationSlice.actions;

export const selectEdit = (state) => state.administration.edit;
export const selectNewItem = (state) => state.administration.newItem;

export default administrationSlice.reducer;
