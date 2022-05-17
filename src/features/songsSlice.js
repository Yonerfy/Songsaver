import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    song: "mi vida",
    artist: "First artist!",
    genre: "Rock",
    rating: 5,
  },
  { id: 2, song: "jehova", artist: "Second Post", genre: "Pop", rating: 4 },
];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    songsAdded(state, action) {
      state.push(action.payload);
    },
    songsSort(state) {
      state.sort((a, b) => {
        if (a.song < b.song) return -1;
        if (a.song > b.song) return 1;
        return 0;
      });
    },
    songsTest(state, action) {
      return state.filter((song) => song.genre === action.payload);
    },

    deleteSong(state, action) {
      return state.filter((song) => song.id !== action.payload.id);
    },
  },
});

export const { songsAdded, songsSort, deleteSong, songsTest } =
  songsSlice.actions;

export default songsSlice.reducer;
