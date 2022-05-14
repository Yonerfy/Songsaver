import React from "react";

export default function SongList(props) {
  return (
    <tbody>
      <tr className="song-header">
        <th className="song-row__item">{props.songs.song}</th>
        <th className="song-row__item">{props.songs.artist}</th>
        <th className="song-row__item">{props.songs.genre}</th>
        <th className="song-row__item">{props.songs.rating}</th>
        <th className="song-row__item">
          <button onClick={() => props.deleteBtn(props.songs.id)}>
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
}
