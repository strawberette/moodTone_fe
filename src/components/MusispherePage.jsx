import React from "react";
import "../App.css";
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
import NavigationPage from "./NavigationPage";

function MusispherePage() {
  return (
    <>
    <NavigationPage />
      <div className="musispherePage">        
        <div className="colorKey" id="left-colors">
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalHappy />
            </div>
            <div>
              <p>Yellow = Happy</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalEnergy />
            </div>
            <div>
              <p>Orange = Energetic</p>
            </div>
          </li>
          <li className="keyColors">
            <div className="keyModal">
              <RouteModalAnger/>
            </div>
            <div>
              <p>Red = Angry</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalPowerful />
            </div>
            <div>
              <p>Black = Powerful</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalSad />
            </div>
            <div>
              <p>Grey = Sad</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalSoft />
            </div>
            <div>
              <p>Beige = Cosy</p>
            </div>
          </li>
        </div>
        <div className="musisphere">
          <li className="segment green" />
          <li className="segment blue" />
          <li className="segment pink" />
          <li className="segment darkBlue" />
          <li className="segment purple" />
          <li className="segment white" />
          <li className="segment beige" />
          <li className="segment gray" />
          <li className="segment black" />
          <li className="segment red" />
          <li className="segment orange" />
          <li className="segment yellow" />
        </div>
        <div className="colorKey" id="right-colors">
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalSerene />
            </div>
            <div>
              <p>Green = Serene</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalMelancholic />
            </div>
            <div>
              <p>Dark Blue = Melancholic</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalRomantic />
            </div>
            <div>
              <p>Pink = Romantic</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalSpiritual />
            </div>
            <div>
              <p>Purple = Spiritual</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalCalm />
            </div>
            <div>
              <p>Blue = Calm</p>
            </div>
          </li>
          <li className="keyColors">
          <div className="keyModal">
              <RouteModalPeaceful />
            </div>
            <div>
              <p>White = Peaceful</p>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}

export default MusispherePage;
