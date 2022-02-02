import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");
  const [user, setUser] = useState(null);

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

  return <LandingPage></LandingPage>;
  <Router>
    <Link to="/landingPage" class="link">
      Home
    </Link>
  </Router>;
}

export default App;
