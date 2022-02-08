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
const EmotionsPage = () => {
  return (
    <div className="emotionsPage">
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
          <h1>Welcome to moodTone</h1>
          <p>
            Here you can find out about the different colours we chose for this
            new App! Warm colors like red, yellow and orange evoke higher
            arousal Routes, such as love, passion, happiness, and anger. Cool
            colors, like blue, green and purple are linked to calmness, sadness
            and indifference. Colors can trigger these arousal states and
            Routes. Much like music does!
          </p>
        </div>

        <div className="entermusisphere">
          <Link to="/musisphere" style={{ textDecoration: "none" }}>
            <button type="musicbutton" className="entermusic">
              !MUSISPHERE!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmotionsPage;
