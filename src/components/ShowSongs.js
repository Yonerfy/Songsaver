import SongList from "./SongList";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectFilterSongs } from "../features/filterSlice";
import { songsFilter } from "../features/filterSlice";
import { useDispatch } from "react-redux";

export default function ShowSongs({ handleCheckbox, deleteBtn }) {
  const filterSongs = useSelector((state) => selectFilterSongs(state));
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="sort">
        Sort Song A-Z{" "}
        <input type="checkbox" name="sort" onClick={handleCheckbox} />
      </label>

      <label htmlFor="songs" className="labelSongs">
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
        <thead className="song-header">
          <tr>
            <th className="header-title">Song</th>
            <th className="header-title">Artist</th>
            <th className="header-title">Genre</th>
            <th className="header-title">Rating</th>
          </tr>
        </thead>

        {filterSongs.map((song) => {
          return <SongList songs={song} key={nanoid()} deleteBtn={deleteBtn} />;
        })}
      </table>
    </div>
  );
}
