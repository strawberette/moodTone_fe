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
import { AiOutlineHeart } from "react-icons/ai";
import ReactAudioPlayer from "react-audio-player";

function MusispherePage(props) {
  const [song, setSong] = useState("");
  const [mood, setMood] = useState({});
  const [moodList, setMoodList] = useState([]);
  const [liked, setLiked] = useState(false);

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
    black: PowerfulIcon,
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    const getMoods = async () => {
      try {
        const baseURL = process.env.REACT_APP_BASE_URL;
        const response = await fetch(
          `${baseURL}/mood?secret_token=${user.jwt}`
        );
        const moodsJSON = await response.json();
        setMoodList(moodsJSON.mood);
      } catch (err) {
        console.log(err);
      }
    };
    getMoods();
  }, [props]);

  // const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    setMood(moodList[e.target.getAttribute("idx")]);
    const moodName = moodList[e.target.getAttribute("idx")].moodName;
    const limit = 50;
    const random = Math.floor(Math.random() * limit + 1);
    const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${moodName}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
      console.log(songList.results[random]);
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
      });
      await fetch(
        `${baseURL}/track/${props.user.id}?secret_token=${props.user.jwt}`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
        }
      );

      setLiked(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={`musispherePage ${mood.moodColour}BgColour`}>
        <NavigationPage user={props.user} setUser={props.setUser} />
        <div className="keyAndSphere">
          <div className="colorKey" id="left-colors">
            {moodList.slice(0, moodList.length / 2).map((m, i) => {
              return (
                <li
                  key={i}
                  idx={i}
                  className="keyColors"
                  onClick={handleSubmit}
                >
                  <div idx={i} className="keyModal">
                    <img src={iconMap[m.moodColour]} alt="Happy icon" />
                  </div>
                  <div>
                    <p idx={i}>
                      {m.moodColour} = {m.moodName}
                    </p>
                  </div>
                </li>
              );
            })}
          </div>
          <div className="musisphere">
            {moodList.map((m, i) => {
              return (
                <li
                  key={i}
                  idx={i}
                  className={`segment ${m.moodColour}`}
                  onClick={handleSubmit}
                />
              );
            })}
          </div>
          <div className="colorKey" id="right-colors">
            {moodList.slice(-moodList.length / 2).map((m, i) => {
              const idx = moodList.length / 2 + i;
              return (
                <li
                  key={idx}
                  idx={idx}
                  className="keyColors"
                  onClick={handleSubmit}
                >
                  <div idx={idx} className="keyModal">
                    <img src={iconMap[m.moodColour]} alt="Happy icon" />
                  </div>
                  <div>
                    <p idx={idx}>
                      {m.moodColour} = {m.moodName}
                    </p>
                  </div>
                </li>
              );
            })}
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
              <ReactAudioPlayer
                src={song ? song.audio : ""}
                autoPlay={true}
                controls
                className="audioPlayer"
              />
              <p className="credits">
                {song ? (
                  <a
                    href={song.shareurl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    `{song.name} by {song.artist_name}`
                  </a>
                ) : (
                  <></>
                )}
              </p>
            </div>
            {!liked && song ? (
              <button className="likeButton" onClick={handleLike}>
                <AiOutlineHeart />
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MusispherePage;
