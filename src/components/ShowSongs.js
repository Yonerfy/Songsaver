import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { songsFilter } from "../features/filterSlice";
import { useDispatch } from "react-redux";

export default function ShowSongs(props) {
  const filterSongs = useSelector((state) => {
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
  });

  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="sort">
        Sort Song A-Z{" "}
        <input type="checkbox" name="sort" onClick={props.handleCheckbox} />
      </label>

      <label htmlFor="songs">
        Categorize:
        <select
          name="categorize"
          id="categorize"
          onChange={(e) => {
            dispatch(songsFilter(e.target.value));
          }}
        >
          <option value="all">All</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
          <option value="Salsa">Salsa</option>
        </select>
      </label>

      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </thead>

        {filterSongs.map((song) => {
          return (
            <SongList songs={song} key={nanoid()} deleteBtn={props.deleteBtn} />
          );
        })}
      </table>
    </div>
  );
}
