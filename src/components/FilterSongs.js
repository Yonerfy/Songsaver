import React from "react";
import { useDispatch } from "react-redux";
import { filterBy, filters } from "../features/filterSlice";

export default function FilterSongs() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(filterBy(filters.All))}>All</button>
      <button onClick={() => dispatch(filterBy(filters.Rock))}>Rock</button>
      <button onClick={() => dispatch(filterBy(filters.Jazz))}>Jazz</button>
      <button onClick={() => dispatch(filterBy(filters.Salsa))}>Salsa</button>
      <button onClick={() => dispatch(filterBy(filters.Pop))}>Pop</button>
    </>
  );
}
