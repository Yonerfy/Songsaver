import { configureStore } from "@reduxjs/toolkit";

import songsReducer from "./features/songsSlice";

export default configureStore({
  reducer: {
    songs: songsReducer,
  },
});
