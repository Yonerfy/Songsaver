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

export const selectFilterSongs = (state) => {
  if (state.filter.song === "all") {
    return state.songs;
  }
  if (state.filter.song === "Rock") {
    return state.songs.filter((song) => song.genre === "Rock");
  }
  if (state.filter.song === "Pop") {
    return state.songs.filter((song) => song.genre === "Pop");
  }
  if (state.filter.song === "Salsa") {
    return state.songs.filter((song) => song.genre === "Salsa");
  }
  if (state.filter.song === "Jazz") {
    return state.songs.filter((song) => song.genre === "Jazz");
  }
  return state.songs;
};
