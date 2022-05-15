import React, { useState } from "react";
import SongList from "./SongList";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { songsFilter } from "../features/songsSlice";
import { useDispatch } from "react-redux";

export default function ShowSongs(props) {
  const songs = useSelector((state) => state.songs);

  // console.log();
  const dispatch = useDispatch();

  const returnSongList = () => {
    if (true) {
      return songs.filter((song) => song);
    }
    if (true) {
      return songs.filter((song) => song.genre === "Rock");
    }
    if (true) {
      return songs.filter((song) => song.genre === "Jazz");
    }
    if (true) {
      return songs.filter((song) => song.genre === "Salsa");
    }
    return songs;
  };
  // console.log(returnSongList());
  return (
    <div>
      <label htmlFor="sort">
        Sort Song A-Z{" "}
        <input type="checkbox" name="sort" onClick={props.handleCheckbox} />
      </label>

      <label htmlFor="songs">Categorize:</label>

      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </thead>

        {songs.map((song) => {
          return (
            <SongList songs={song} key={nanoid()} deleteBtn={props.deleteBtn} />
          );
        })}
      </table>
    </div>
  );
}
