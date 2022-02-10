import "./App.css";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import Register from "./components/Register";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import Musisphere from "./components/MusispherePage";
import EmotionsPage from "./components/EmotionsPage";
import { Switch, Route } from "react-router-dom";

function App() {
  const loggedInUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [user, setUser] = useState(loggedInUser);

  console.log(user);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route exact path="/home">
          <Register user={user} />
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/navigationPage"></Route>
        <Route exact path="/musisphere">
          <Musisphere user={user} setUser={setUser} />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} setUser={setUser} key={document.location.href} />
        </Route>
        <Route exact path="/emotions">
          <EmotionsPage user={user} setUser={setUser} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
