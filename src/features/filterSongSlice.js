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

const filterSongSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { filterAdded, filterSong } = filterSongSlice.actions;

export default filterSongSlice.reducer;
