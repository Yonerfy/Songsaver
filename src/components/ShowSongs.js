import React from "react";
import SongList from "./SongList";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

export default function ShowSongs(props) {
  const songs = useSelector((state) => state.songs);
  function returnSongList() {
    return songs.map((song) => (
      <SongList
        songs={song}
        key={nanoid()}
        deleteBtn={props.deleteBtn}
        itemKey={song.itemKey}
      />
    ));
  }
  return (
    <div>
      <label htmlFor="sort">
        Sort Song A-Z{" "}
        <input type="checkbox" name="sort" onClick={props.handleCheckbox} />
      </label>

      <label htmlFor="songs">
        Categorize:
        <select name="categorize" id="categorize" onChange={props.handleSelect}>
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

        {returnSongList()}
      </table>
    </div>
  );
}
