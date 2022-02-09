import React from "react";
// import { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import "../App.css";

function Home() {
  return (
    <div className="homePage">
      <div className="registerBox">
        <Register></Register>
      </div>
      <div className="Login Box">
        <Login></Login>
      </div>
    </div>
  );
}

export default Home;
