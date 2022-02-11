import React from "react";
// import { useState } from "react";
// import MoodToneLogo from "../utility/moodTone2.jpg.jp2";
import RouteModalAnger from "../modalRoutes/RouteModalAnger";
import RouteModalEnergy from "../modalRoutes/RouteModalEnergy";
import RouteModalHappy from "../modalRoutes/RouteModalHappy";
import RouteModalSerene from "../modalRoutes/RouteModalSerene";
import RouteModalMelancholic from "../modalRoutes/RouteModalMelancholic";
import RouteModalRomantic from "../modalRoutes/RouteModalRomantic";
import RouteModalSpiritual from "../modalRoutes/RouteModalSpiritual";
import RouteModalCalm from "../modalRoutes/RouteModalCalm";
import RouteModalPeaceful from "../modalRoutes/RouteModalPeaceful";
import RouteModalSoft from "../modalRoutes/RouteModalSoft";
import RouteModalSad from "../modalRoutes/RouteModalSad";
import RouteModalPowerful from "../modalRoutes/RouteModalPowerful";
import { Link } from "react-router-dom";
import "../App.css";
import NavigationPage from "./NavigationPage";

const EmotionsPage = (props) => {
  return (
    <div className="emotionsPage">
      <NavigationPage user={props.user} setUser={props.setUser} />
      <div className="iconSide">
        <div className="logoWrapper">
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
        </div>
        <div className="text">
          <h2>moodTone</h2>
        </div>

        <div className="iconsWrapper">
          <div className="emoticon">
            <RouteModalAnger />
          </div>
          <div className="emoticon">
            <RouteModalEnergy />
          </div>
          <div className="emoticon">
            <RouteModalHappy />
          </div>
          <div className="emoticon">
            <RouteModalSerene />
          </div>
          <div className="emoticon">
            <RouteModalMelancholic />
          </div>
          <div className="emoticon">
            <RouteModalRomantic />
          </div>
          <div className="emoticon">
            <RouteModalSpiritual />
          </div>
          <div className="emoticon">
            <RouteModalCalm />
          </div>
          <div className="emoticon">
            <RouteModalPeaceful />
          </div>
          <div className="emoticon">
            <RouteModalSoft />
          </div>
          <div className="emoticon">
            <RouteModalSad />
          </div>
          <div className="emoticon">
            <RouteModalPowerful />
          </div>
        </div>
      </div>
      <div className="infoSide">
        <div className="infoBody">
          <h1>Welcome to</h1>
          <h2>moodTone</h2>
          <p>
            <span>
              {`This is a place where music, moods and colours meet, to provide you with a unique immersive sensory experience.
                In this space you can savour synesthesia, a perceptual phenomenon in which stimulation of one sense brings an involuntary stimulation of another sense,
                like accidentally seeing colours while listening to music.
                To enter this perceptual world, we have provided you with the Musisphere, that will lead you through this dance of the senses,
                and will let you navigate through your emotions, in music and colours!`}
            </span>
          </p>
        </div>

        <div className="entermusisphere">
          <Link to="/musisphere" style={{ textDecoration: "none" }}>
            <button type="musicbutton" className="entermusic">
              TAKE ME TO THE MUSISPHERE!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmotionsPage;
