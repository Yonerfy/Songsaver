import "./App.css";
import ShowSongs from "./components/ShowSongs";
import SongForm from "./components/SongForm";
import { nanoid } from "nanoid";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { songsAdded, songsSort, deleteSong } from "./features/songsSlice";
import { useSelector } from "react-redux";

function App() {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  function handleOnsubmit(e) {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value) {
      dispatch(
        songsAdded({
          id: nanoid(),
          [e.target[0].name]: e.target[0].value,
          [e.target[1].name]: e.target[1].value,
          [e.target[2].name]: e.target[2].value,
          [e.target[3].name]: e.target[3].value,
        })
      );
    }
  }

  function handleCheckbox(e) {
    e.target.checked === true && dispatch(songsSort());
  }

  function deleteBtn(id) {
    dispatch(deleteSong({ id }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yonerfy SongSaver</h1>
      </header>
      <nav>
        <Link to="/about">About Me</Link>
      </nav>
      <Outlet />
      <main>
        <SongForm handleOnsubmit={handleOnsubmit} songs={songs} />
        <ShowSongs
          songs={songs}
          deleteBtn={deleteBtn}
          handleCheckbox={handleCheckbox}
        />
      </main>
    </div>
  );
}

export default App;
