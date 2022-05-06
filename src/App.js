import "./App.css";
import React, { useState } from "react";
import ShowSongs from "./components/ShowSongs";
import SongForm from "./components/SongForm";
import { nanoid } from "nanoid";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [songs, setSongs] = useState([]);

  function handleOnsubmit(e) {
    e.preventDefault();
    if (e.target[0].value && e.target[1].value) {
      setSongs((prevSongs) => {
        return [
          ...prevSongs,
          {
            [e.target[0].name]: e.target[0].value,
            [e.target[1].name]: e.target[1].value,
            [e.target[2].name]: e.target[2].value,
            [e.target[3].name]: e.target[3].value,
            itemKey: nanoid(),
          },
        ];
      });
    }
  }

  function handleCheckbox(e) {
    e.target.checked === true && sortingAtoZ();
  }

  function deleteBtn(id) {
    const newSongs = songs.filter((item) => item.itemKey !== id);
    setSongs(newSongs);
  }

  function sortingAtoZ() {
    const newSortingSongs = [...songs].sort((a, b) => {
      if (a.song < b.song) return -1;
      if (a.song > b.song) return 1;
      return 0;
    });
    setSongs(newSortingSongs);
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
