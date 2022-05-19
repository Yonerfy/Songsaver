import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
      </header>
      <nav>
        <Link to="/">SongSaver</Link>
      </nav>
      <main className="about-me">
        <p>
          I’m Yonerfy, I’m from the Dominican Republic, I’m 38 years old, I live
          in the Nederland size 2018, I love live here, I love to learn and I
          love knowledge in general, I love programming because teach you how to
          think and also teach you how to solve problem, I'm falling a lot but I
          know that failing is part of the proces, my critical thinking is level
          up. This project teaches me a log about React, I love the declarative
          way of react. Also this project teaches me how to manage React state,
          how to filter the state and then re-render the UI. Learning to code is
          very exciting. You need to implement to test if you really understand,
          if you do not implement the technique you fool yourself. Excuse my
          broken English. I'm learning English too happy conding 😀😀😀{" "}
        </p>
      </main>
    </div>
  );
}
