import React from "react";

export default function SongList({ songs, deleteBtn }) {
  const { song, artist, genre, rating, id } = songs;
  return (
    <tbody>
      <tr>
        <th className="song-row__item">{song}</th>
        <th className="song-row__item">{artist}</th>
        <th className="song-row__item">{genre}</th>
        <th className="song-row__item">{rating}</th>
        <th className="song-row__item">
          <button onClick={() => deleteBtn(id)} className="delelte-btn">
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
}
