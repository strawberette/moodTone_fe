import React, { useState } from "react";
import "../App.css";
import NavigationPage from "./NavigationPage";
import HappyIcon from "../utility/happy.png";
import AngerIcon from "../utility/anger.png";
import EnergyIcon from "../utility/energy.png";
import SereneIcon from "../utility/serene.png";
import MelancholicIcon from "../utility/melancholic.png";
import RomanticIcon from "../utility/romantic.png";
import SpiritualIcon from "../utility/spiritual.png";
import CalmIcon from "../utility/calm.png";
import PeaceIcon from "../utility/peace.png";
import SoftIcon from "../utility/soft.png";
import SadIcon from "../utility/sad.png";
import PowerfulIcon from "../utility/powerful.png";

function MusispherePage() {
  const [song, setSong] = useState("");
  const [mood, setMood] = useState("");

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    // e.prevent.default();
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="musispherePage">
        <NavigationPage />
        <div className="keyAndSphere">
          <div className="colorKey" id="left-colors">
            <li className="keyColors" onClick={() => setMood("Happy")}>
              <div className="keyModal">
                <img src={HappyIcon} alt="Happy icon"/>
              </div>
              <div>
                <p>Yellow = Happy</p>
              </div>
            </li>
            <li className="keyColors"
              onClick={() => setMood("Energetic")}>
              <div className="keyModal">
              <img src={EnergyIcon} alt="Energetic icon"/>
              </div>
              <div>
                <p>Orange = Energetic</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Angry")}>
              <div className="keyModal">
              <img src={AngerIcon} alt="Angry icon"/>
              </div>
              <div>
                <p>Red = Angry</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Powerful")}>
              <div className="keyModal">
              <img src={PowerfulIcon} alt="Powerful icon"/>
              </div>
              <div>
                <p>Black = Powerful</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Sad")}>
              <div className="keyModal">
              <img src={SadIcon} alt="Sad icon"/>
              </div>
              <div>
                <p>Grey = Sad</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Soft")}>
              <div className="keyModal">
              <img src={SoftIcon} alt="Soft and cosy icon"/>
              </div>
              <div>
                <p>Beige = Cosy</p>
              </div>
            </li>
          </div>
          <div className="musisphere">
            <li className="segment green" onClick={() => setMood("Serene")} />
            <li className="segment blue" onClick={() => setMood("Calm")} />
            <li className="segment pink" onClick={() => setMood("Love")} />
            <li
              className="segment darkBlue"
              onClick={() => setMood("Melancholic")}
            />
            <li
              className="segment purple"
              onClick={() => setMood("Spiritual")}
            />
            <li className="segment white" onClick={() => setMood("Peaceful")} />
            <li className="segment beige" onClick={() => setMood("Soft")} />
            <li className="segment gray" onClick={() => setMood("Sad")} />
            <li className="segment black" onClick={() => setMood("Powerful")} />
            <li className="segment red" onClick={() => setMood("Angry")} />
            <li
              className="segment orange"
              onClick={() => setMood("Energetic")}
            />
            <li className="segment yellow" onClick={() => setMood("Happy")} />
          </div>
          <div className="colorKey" id="right-colors">
            <li className="keyColors" onClick={() => setMood("Serene")}>
              <div className="keyModal">
              <img src={SereneIcon} alt="Serene icon"/>
              </div>
              <div>
                <p>Green = Serene</p>
              </div>
            </li>
            <li className="keyColors"
              onClick={() => setMood("Melancholic")}>
              <div className="keyModal">
              <img src={MelancholicIcon} alt="Melancholic icon"/>
              </div>
              <div>
                <p>Dark Blue = Melancholic</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Love")}>
              <div className="keyModal">
              <img src={RomanticIcon} alt="Romantic icon"/>
              </div>
              <div>
                <p>Pink = Romantic</p>
              </div>
            </li>
            <li className="keyColors"
              onClick={() => setMood("Spiritual")}>
              <div className="keyModal">
              <img src={SpiritualIcon} alt="Spiritual icon"/>
              </div>
              <div>
                <p>Purple = Spiritual</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Calm")}>
              <div className="keyModal">
              <img src={CalmIcon} alt="Calm icon"/>
              </div>
              <div>
                <p>Blue = Calm</p>
              </div>
            </li>
            <li className="keyColors" onClick={() => setMood("Peaceful")}>
              <div className="keyModal">
              <img src={PeaceIcon} alt="Peaceful icon"/>
              </div>
              <div>
                <p>White = Peaceful</p>
              </div>
            </li>
          </div>
          <div className="mediaPlayer">
            <div>
              <h1>Moodplayer</h1>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="mood">What mood are you in? </label>
                <input type="text" name="mood" value={mood} />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div>
              <audio src={song.audio} autoPlay controls></audio>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusispherePage;
