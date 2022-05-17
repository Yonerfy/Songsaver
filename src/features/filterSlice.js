import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  song: "all",
};
let initialState = filters;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    songsFilter(state, action) {
      state.song = action.payload;
    },
  },
});

export const { songsFilter } = filterSlice.actions;

export default filterSlice.reducer;
