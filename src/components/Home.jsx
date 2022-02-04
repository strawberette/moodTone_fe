import React from "react";
import { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import "../App.css";
import Smoke from "../utility/smoke.jpg";
function Home() {
  return (
    <div
      className="homePage"
      style={{ opacity: "0.5", backgroundImage: `url(${Smoke})` }}
    >
      <div className="homeWrapper">
        <div className="registerContainer">
          <Register></Register>
        </div>
        <div className="loginContainer">
          <Login></Login>
        </div>
      </div>
    </div>
  );
}

export default Home;
