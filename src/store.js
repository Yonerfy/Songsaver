import { configureStore } from "@reduxjs/toolkit";

import songsReducer from "./features/songsSlice";
import filterSlice from "./features/filterSlice";

export default configureStore({
  reducer: {
    songs: songsReducer,
    filter: filterSlice,
  },
});
