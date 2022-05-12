import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, song: "mi vida", artist: "First artist!", genre: "Rock", rating: 5 },
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
    songsPop(state) {
      return state.filter((song) => song.genre === "Pop");
    },
    songsRock(state) {
      return state.filter((song) => song.genre === "Rock");
    },
    songsJazz(state) {
      return state.filter((song) => song.genre === "Jazz");
    },
    songsSalsa(state) {
      return state.filter((song) => song.genre === "Salsa");
    },
  },
});

export const {
  songsAdded,
  songsSort,
  songsPop,
  songsRock,
  songsJazz,
  songsSalsa,
} = songsSlice.actions;

export default songsSlice.reducer;
