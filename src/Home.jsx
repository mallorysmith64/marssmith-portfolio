import { useState } from "react";
import "./index.css";
import Footer from "./Footer.jsx";

const MINESWEEPER_URL = "https://minesweeper-2.netlify.app/";
const TETRIS_DELUXE_URL = "https://tetrisdeluxe.netlify.app/";

function Home() {
  const [showingMinesweeper, setShowingMinesweeper] = useState(true);

  return (
    <>
      <div className="home-page">
        <header className="home-hero">
        <svg
          className="home-hero-planet"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="160" fill="#c1440e" />
          <circle cx="200" cy="200" r="160" fill="url(#shade)" />
          <ellipse
            cx="200"
            cy="240"
            rx="160"
            ry="34"
            fill="#8a2f09"
            opacity="0.3"
          />
          <circle cx="140" cy="150" r="22" fill="#e35a1f" opacity="0.55" />
          <circle cx="250" cy="120" r="14" fill="#8a2f09" opacity="0.45" />
          <circle cx="270" cy="230" r="30" fill="#8a2f09" opacity="0.35" />
          <circle cx="150" cy="270" r="18" fill="#e35a1f" opacity="0.45" />
          <circle cx="230" cy="290" r="10" fill="#8a2f09" opacity="0.45" />
          <defs>
            <radialGradient id="shade" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
            </radialGradient>
          </defs>
        </svg>

        <div className="home-hero-content">
          <h1>
            Mars <span>Smith</span>
          </h1>
        </div>
      </header>

      <section className="home-about">
        <div className="home-about-photo">
          <div className="avatar-frame">
            {/* Swap this SVG for a real <img src="..." alt="Mars Smith" /> once you have a headshot */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="100" cy="82" r="46" fill="#1a1a1a" />
              <path d="M40 190c0-38 27-64 60-64s60 26 60 64" fill="#1a1a1a" />
              <circle cx="100" cy="80" r="34" fill="#e8c39e" />
              <path
                d="M66 70c4-18 22-30 34-30s28 10 33 26c2-2 3-6 2-10-4-20-20-34-35-34-17 0-33 14-37 32-2 6-1 12 3 16z"
                fill="#1a1a1a"
              />
            </svg>
          </div>
        </div>

        <div className="home-about-text">
          <p className="label">About</p>
          <h2>Hi, I'm Mars.</h2>
          <p>I'm a software developer from Tampa, FL.</p>
        </div>
      </section>
      <section className="home-games">
        <h2>{showingMinesweeper ? "Minesweeper" : "Tetris Deluxe"}</h2>
        <p className="game-caption">
          {showingMinesweeper
            ? "One of the games from my portfolio, playable right here. Bored of it? There's a button for that."
            : "Here's something else."}
        </p>

        <button
          className="bored-btn"
          onClick={() => setShowingMinesweeper((v) => !v)}
        >
          Bored
        </button>

        <div className="game-stage">
          {showingMinesweeper ? (
            <iframe
              className="ms-embed"
              src={MINESWEEPER_URL}
              title="Minesweeper"
              loading="lazy"
            />
          ) : (
            <iframe
              className="td-embed"
              src={TETRIS_DELUXE_URL}
              title="Tetris Deluxe"
              loading="lazy"
            />
          )}
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;