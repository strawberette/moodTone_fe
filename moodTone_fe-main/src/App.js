import "./App.css";
<<<<<<< HEAD
import { useState } from "react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import Toggle from "./Toggle";
=======
import { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import LandingPage from "./components/LandingPage";
import NavigationPage from "./components/NavigationPage";
import EmotionsPage from "./components/EmotionsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819

function App() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");
<<<<<<< HEAD
=======
  const [user, setUser] = useState(null);
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

<<<<<<< HEAD
  // const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    // e.preventDefault();
=======
  const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (err) {
      console.log(err);
    }
  };
<<<<<<< HEAD
  const redClick = () => {
    setMood("Angry");
    handleSubmit();
  };
  const orangeClick = () => {
    setMood("Energetic");
    handleSubmit();
  };
  const yellowClick = () => {
    setMood("Happy");
    handleSubmit();
  };
  const greenClick = () => {
    setMood("Serene");
    handleSubmit();
  };
  const darkblueClick = () => {
    setMood("Melancholic");
    handleSubmit();
  };
  const pinkClick = () => {
    setMood("Love");
    handleSubmit();
  };
  const purpleClick = () => {
    setMood("Spiritual");
    handleSubmit();
  };
  const blueClick = () => {
    setMood("Calm");
    handleSubmit();
  };
  const whiteClick = () => {
    setMood("Peaceful");
    handleSubmit();
  };
  const beigeClick = () => {
    setMood("Soft");
    handleSubmit();
  };
  const grayClick = () => {
    setMood("Sad");
    handleSubmit();
  };
  const blackClick = () => {
    setMood("Powerful");
    handleSubmit();
  };
  return (
    <>
    <div>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Toggle />
      </ColorModeProvider>
    </ThemeProvider>
      <ul className="circleLogo">
        <li className="segment red" onClick={()=>redClick()}><p>Angry</p></li>
        <li className="segment orange" onClick={()=>orangeClick()}><p>Energetic</p></li>
        <li className="segment yellow" onClick={()=>yellowClick()}><p>Happy</p></li>
        <li className="segment green" onClick={()=>greenClick()}><p>Serene</p></li>
        <li className="segment darkBlue" onClick={()=>darkblueClick()}><p>Melancholic</p></li>
        <li className="segment pink" onClick={()=>pinkClick()}><p>Love</p></li>
        <li className="segment purple" onClick={()=>purpleClick()}><p>Spiritual</p></li>
        <li className="segment blue" onClick={()=>blueClick()}><p>Calm</p></li>
        <li className="segment white" onClick={()=>whiteClick()}><p>Peaceful</p></li>
        <li className="segment beige" onClick={()=>beigeClick()}><p>Cosy</p></li>
        <li className="segment gray" onClick={()=>grayClick()}><p>Sad</p></li>
        <li className="segment black" onClick={()=>blackClick()}><p>Powerful</p></li>
      </ul>
    </div>
    <div className="mediaPlayer">
      <h1>🎵 Moodplayer 🎶</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">What mood are you?</label>
        <input type="text" name="mood" value={mood} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <audio src={song.audio} autoPlay controls></audio>
    </div>
    </>
=======

  return (
    <Router>
      <Logout user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route exact path="/home">
          <Register user={user} />
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/navigationPage">
          <NavigationPage></NavigationPage>
        </Route>
        <Route exact path="/musisphere">
          <p>Musisphere page</p>
        </Route>
        <Route exact path="/profile">
          <p>Profile</p>
        </Route>
        <Route exact path="/emotions">
          <p>Emotions</p>
        </Route>
      </Switch>
    </Router>
>>>>>>> ad95beb41894c8a884883c22408e9bc2ff28a819
  );
}

export default App;
