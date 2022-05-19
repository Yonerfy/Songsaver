import React from "react";

export default function SongForm({ handleOnsubmit, song, artist }) {
  return (
    <div>
      <form onSubmit={handleOnsubmit} className="form-container">
        <input
          name="song"
          id="song"
          value={song}
          type="text"
          placeholder="Song"
        />
        <input
          name="artist"
          id="artist"
          value={artist}
          type="text"
          placeholder="Artist"
        />
        <label htmlFor="songs">
          Choose a category:
          <select name="genre" id="genre">
            <option value="">-</option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Pop">Pop</option>
            <option value="Salsa">Salsa</option>
          </select>
        </label>
        <label htmlFor="Rating">
          Rating your category:
          <select name="rating" id="rating">
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button className="btn">Add Song</button>
      </form>
    </div>
  );
}
