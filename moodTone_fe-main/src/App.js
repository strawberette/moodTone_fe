import "./App.css";
import { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import LandingPage from "./components/LandingPage";
import NavigationPage from "./components/NavigationPage";
import EmotionsPage from "./components/EmotionsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Toggle from "./Toggle";


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

  return (
    <>
    <Toggle />
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
    </>
  );
}

export default App;
