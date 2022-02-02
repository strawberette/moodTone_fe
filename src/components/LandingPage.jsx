import Logo from "../utility/logo.jpg";
import "../style/LandingPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import MoodTone from "./moodTone";
function LandingPage() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div class="wrapper">
        <ul class="circle">
          <li>
            <div
              class="text"
              onClick={handleSubmit}
              type="text"
              name="mood"
              value={mood}
              onChange={handleMood}
              audio
              id="calm"
              src={song.audio}
              autoPlay
              controls
            />
          </li>
          <li>
            <div
              class="text"
              onClick={handleSubmit}
              type="text"
              name="mood"
              value={mood}
              onChange={handleMood}
              audio
              id="melancholy"
              src={song.audio}
              autoPlay
              controls
            />
          </li>
          <li>
            <div
              class="text"
              onClick={handleSubmit}
              type="text"
              name="mood"
              value={mood}
              onChange={handleMood}
              audio
              id="romantic"
              src={song.audio}
              autoPlay
              controls
            />
          </li>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <li>
            <div
              class="text"
              onClick={handleSubmit}
              type="text"
              name="mood"
              value={mood}
              onChange={handleMood}
              audio
              id="anger"
              src={song.audio}
              autoPlay
              controls
            />
          </li>
          <li>
            <div
              class="text"
              onClick={handleSubmit}
              type="text"
              name="mood"
              value={mood}
              onChange={handleMood}
              audio
              id="energy"
              src={song.audio}
              autoPlay
              controls
            />
          </li>
          <li>
            <div
              class="text"
              onClick={handleSubmit}
              type="text"
              name="mood"
              value={mood}
              onChange={handleMood}
              audio
              id="happy"
              src={song.audio}
              autoPlay
              controls
            />
          </li>
        </ul>
      </div>
      <img
        src={Logo}
        className="logo"
        alt="black and white logo mood flow"
      ></img>
      <div className="enterApp>">
        <Link to="/home">
          <button type="button" class="enter">
            ENTER
          </button>
        </Link>
      </div>
    </div>
  );
}
export default LandingPage;
