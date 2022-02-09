import React, { useState, useEffect } from "react";
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

import ReactAudioPlayer from "react-audio-player";

function MusispherePage(props) {
  
  const [song, setSong] = useState("");
  const [mood, setMood] = useState({});
  const [moodList, setMoodList] = useState([])
  const [liked, setLiked] = useState(false)

  const iconMap = {
    red: AngerIcon,
    orange: EnergyIcon,
    yellow: HappyIcon,
    green: SereneIcon,
    darkBlue: MelancholicIcon,
    pink: RomanticIcon,
    purple: SpiritualIcon,
    blue: CalmIcon,
    white: PeaceIcon,
    beige: SoftIcon,
    gray: SadIcon,
    black: PowerfulIcon
  }

  useEffect(() => {
    const user = localStorage.getItem("user")
    const getMoods = async () => {
      try {
        const baseURL = process.env.REACT_APP_BASE_URL;
        const response = await fetch(
          `${baseURL}/mood?secret_token=${user.jwt}`
          
        );
        const moodsJSON = await response.json();
        setMoodList(moodsJSON.mood)
      } catch(err) {
        console.log(err)
      }
    }
    getMoods() 
  }, [props])

  
  // const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    setMood(moodList[e.target.getAttribute("idx")])
    const moodName = moodList[e.target.getAttribute("idx")].moodName
    const limit = 50;
    const random = Math.floor(Math.random() * limit + 1);
    const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${moodName}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    try {
      const payload = JSON.stringify({
        trackId: song.id,
        moodId: mood.moodId,
      })
      await fetch(`${baseURL}/track/${props.user.id}?secret_token=${props.user.jwt}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      setLiked(true)
    } catch (err) {
      console.log(err);
    }
  }

  // const redClick = () => {
  //   setMood("Angry");
  //   handleSubmit();
  // }
  // const orangeClick = () => {
  //   setMood("Energetic");
  //   handleSubmit();
  // }
  // const yellowClick = () => {
  //   setMood("Happy");
  //   handleSubmit();
  // }
  // const greenClick = () => {
  //   setMood("Serene");
  //   handleSubmit();
  // }
  // const darkBlueClick = () => {
  //   setMood("Melancholic");
  //   handleSubmit();
  // }
  // const pinkClick = () => {
  //   setMood("Love");
  //   handleSubmit();
  // }
  // const purpleClick = () => {
  //   setMood("Spiritual");
  //   handleSubmit();
  // }
  // const blueClick = () => {
  //   setMood("Calm");
  //   handleSubmit();
  // }
  // const whiteClick = () => {
  //   setMood("Peaceful");
  //   handleSubmit();
  // }
  // const beigeClick = () => {
  //   setMood("Soft");
  //   handleSubmit();
  // }
  // const grayClick = () => {
  //   setMood("Sad");
  //   handleSubmit();
  // }
  // const blackClick = () => {
  //   setMood("Powerful");
  //   handleSubmit();
  // }
  return (
    <>
      <div className="musispherePage">
        <NavigationPage user={props.user} setUser={props.setUser} />
        <div className="keyAndSphere">
          <div className="colorKey" id="left-colors">
            {
              moodList.slice(0, moodList.length/2).map((m, i) => {
                return (
                  <li key={i} idx={i} className="keyColors" onClick={handleSubmit}>
                    <div idx={i} className="keyModal"><img src={iconMap[m.moodColour]} alt="Happy icon"/></div>
                    <div><p idx={i}>{m.moodColour} = {m.moodName}</p></div>
                </li>
                )
              })
            }
            {/* <li className="keyColors" onClick={() => yellowClick()}>
              <div className="keyModal"><img src={HappyIcon} alt="Happy icon"/></div>
              <div><p>Yellow = Happy</p></div>
            </li>
            <li className="keyColors" onClick={() => orangeClick()}>
              <div className="keyModal"><img src={EnergyIcon} alt="Energetic icon"/></div>
              <div><p>Orange = Energetic</p></div>
            </li>
            <li className="keyColors" onClick={() => redClick()}>
              <div className="keyModal"><img src={AngerIcon} alt="Angry icon"/></div>
              <div><p>Red = Angry</p></div>
            </li>
            <li className="keyColors" onClick={() => blackClick()}>
              <div className="keyModal"><img src={PowerfulIcon} alt="Powerful icon"/></div>
              <div><p>Black = Powerful</p></div>
            </li>
            <li className="keyColors" onClick={() => grayClick()}>
              <div className="keyModal"><img src={SadIcon} alt="Sad icon"/></div>
              <div><p>Grey = Sad</p></div>
            </li>
            <li className="keyColors" onClick={() => beigeClick()}>
              <div className="keyModal"><img src={SoftIcon} alt="Soft and cosy icon"/></div>
              <div><p>Beige = Cosy</p></div>
            </li> */}
          </div>
          <div className="musisphere">
          {moodList.map((m,i) => {
              return <li key={i} idx={i} className={`segment ${m.moodColour}`} onClick={handleSubmit} />
            })}
            {/* <li className="segment green" onClick={() => greenClick()} />
            <li className="segment blue" onClick={() => blueClick()} />
            <li className="segment pink" onClick={() => pinkClick()} />
            <li className="segment darkBlue" onClick={() => darkBlueClick()} />
            <li className="segment purple" onClick={() => purpleClick()} />
            <li className="segment white" onClick={() => whiteClick()} />
            <li className="segment beige" onClick={() => beigeClick()} />
            <li className="segment gray" onClick={() => grayClick()} />
            <li className="segment black" onClick={() => blackClick()} />
            <li className="segment red" onClick={() => redClick()} />
            <li className="segment orange" onClick={() => orangeClick()} />
            <li className="segment yellow" onClick={() => yellowClick()} /> */}
          </div>
          <div className="colorKey" id="right-colors">
          {
              moodList.slice(-moodList.length/2).map((m, i) => {
                const idx = moodList.length/2 + i
                return (
                  <li key={idx} idx={idx} className="keyColors" onClick={handleSubmit}>
                    <div idx={idx} className="keyModal"><img src={iconMap[m.moodColour]} alt="Happy icon"/></div>
                    <div><p idx={idx}>{m.moodColour} = {m.moodName}</p></div>
                </li>
                )
              })
            }
            {/* <li className="keyColors" onClick={() => greenClick()}>
              <div className="keyModal"><img src={SereneIcon} alt="Serene icon"/></div>
              <div><p>Green = Serene</p></div>
            </li>
            <li className="keyColors" onClick={() => darkBlueClick()}>
              <div className="keyModal"><img src={MelancholicIcon} alt="Melancholic icon"/></div>
              <div><p>Dark Blue = Melancholic</p></div>
            </li>
            <li className="keyColors" onClick={() => pinkClick()}>
              <div className="keyModal"><img src={RomanticIcon} alt="Romantic icon"/></div>
              <div><p>Pink = Romantic</p></div>
            </li>
            <li className="keyColors" onClick={() => purpleClick()}>
              <div className="keyModal"><img src={SpiritualIcon} alt="Spiritual icon"/></div>
              <div><p>Purple = Spiritual</p></div>
            </li>
            <li className="keyColors" onClick={() => blueClick()}>
              <div className="keyModal"><img src={CalmIcon} alt="Calm icon"/></div>
              <div><p>Blue = Calm</p></div>
            </li>
            <li className="keyColors" onClick={() => whiteClick()}>
              <div className="keyModal"><img src={PeaceIcon} alt="Peaceful icon"/></div>
              <div><p>White = Peaceful</p></div>
            </li> */}
          </div>
          <div className="mediaPlayer">
            <div>
              <h1>Moodplayer</h1>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="mood">What mood are you in? </label>
                <span className="musisphereInputBox">{mood.moodName}</span>
                <input type="submit" value="Submit" className="hidden" />
              </form>
            </div>
            <div>
              <ReactAudioPlayer src={song ? song.audio: ""} autoPlay={true} controls className="audioPlayer" />
              {!liked && song
                ? 
                <button onClick={handleLike}>
                  Like
                </button> 
                : 
                <></>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusispherePage;
