import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
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
      <h1>🎵 Moodplayer 🎶</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">What mood are you?</label>
        <input type="text" name="mood" value={mood} onChange={handleMood} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <audio src={song.audio} autoPlay controls></audio>
    </div>
  );
}

export default App;
