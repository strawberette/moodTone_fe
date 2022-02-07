import Logo from "../utility/logo.jpg";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Toggle from "./darkModeToggle";
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
      <div className="wrapper">
        <ul className="circle">
          <li className="segment green" />
          <li className="segment darkBlue " />
          <li className="segment pink" />
          <li className="segment blue hidden" />
          <li className="segment purple hidden" />
          <li className="segment white hidden" />
          <li className="segment beige hidden" />
          <li className="segment gray hidden" />
          <li className="segment black hidden" />
          <li className="segment red" />
          <li className="segment orange" />
          <li className="segment yellow" />
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
    </div>
  );
}
export default LandingPage;
