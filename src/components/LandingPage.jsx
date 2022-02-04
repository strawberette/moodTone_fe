import React from "react";
import Logo from "../utility/logo.jpg";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  // const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (err) {
      console.log(err);
    }
  };
  const redClick = () => {
    setMood("angry");
    handleSubmit();
  };
  const orangeClick = () => {
    setMood("energetic");
    handleSubmit();
  };
  const yellowClick = () => {
    setMood("happy");
    handleSubmit();
  };
  const greenClick = () => {
    setMood("serene");
    handleSubmit();
  };
  const darkblueClick = () => {
    setMood("melancholic");
    handleSubmit();
  };
  const pinkClick = () => {
    setMood("romantic");
    handleSubmit();
  };
  return (
    <div className="App">
      <div className="wrapper">
        <ul className="circle">
          <li>
            <div className="text" onClick={() => greenClick()}></div>
          </li>
          <li>
            <div className="text" onClick={() => darkblueClick()}></div>
          </li>
          <li>
            <div className="text" onClick={() => pinkClick()}></div>
          </li>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <ol></ol>
          <li>
            <div className="text" onClick={() => redClick()}></div>
          </li>
          <li>
            <div className="text" onClick={() => orangeClick()}></div>
          </li>
          <li>
            <div className="text" onClick={() => yellowClick()}></div>
          </li>
        </ul>
        <img
          src={Logo}
          className="logo"
          alt="black and white logo mood flow"
        ></img>
        <div className="enterApp>">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button type="button" className="enter">
              ENTER
            </button>
          </Link>
        </div>
      </div>

      {/* <audio src={song.audio} autoPlay controls></audio> */}
    </div>
  );
}
export default LandingPage;
