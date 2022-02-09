import "./App.css";

import React, { useState } from "react";
import "react-responsive-modal/styles.css";
// import Register from "./components/Register";
// import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";
import Musisphere from "./components/MusispherePage";
import NavigationPage from "./components/NavigationPage";
import EmotionsPage from "./components/EmotionsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./components/darkModeToggle";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <ChakraProvider>
        <Toggle />
      </ChakraProvider>

      <Router>
        <Logout user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/navigationPage">
            <NavigationPage />
          </Route>
          <Route exact path="/musisphere">
            <Musisphere></Musisphere>
          </Route>
          <Route exact path="/profile">
            <Profile user={user} key={document.location.href} />
          </Route>
          <Route exact path="/emotions">
            <EmotionsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
